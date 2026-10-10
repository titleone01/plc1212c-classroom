// A deliberately small normal-cycle simulation. No PLC connection or I/O writes.
export const scanStages = Object.freeze(['输出刷新', '输入采样', '程序执行']);

export function createScanState() {
  return { physicalInput: 0, pii: 0, piq: 0, physicalOutput: 0, nextStage: 0, lastStage: -1, cycles: 0, steps: 0 };
}

export function setPhysicalInput(state, value) {
  return { ...state, physicalInput: value ? 1 : 0 };
}

export function advanceScan(state) {
  const next = { ...state, lastStage: state.nextStage, nextStage: (state.nextStage + 1) % 3, steps: state.steps + 1 };
  if (state.nextStage === 0) next.physicalOutput = state.piq;
  if (state.nextStage === 1) next.pii = state.physicalInput;
  if (state.nextStage === 2) { next.piq = state.pii; next.cycles += 1; }
  return next;
}

const blockDetails = {
  input: ['输入电路', '把现场电信号转换成 CPU 可读取的数据。DI 表示两种状态；AI 表示连续变化的数值。本实验只使用一路数字输入。'],
  pii: ['输入过程映像 PII', '输入采样时，把端子的状态复制到这里。普通程序读取这份快照，因此采样后再改变按钮，当前快照不会立即改变。'],
  cpu: ['处理器 CPU', '按用户程序进行判断、计时、计数和运算。本实验的规则只有一条：将输入快照 I0.0 的值复制给输出映像 Q0.0。'],
  piq: ['输出过程映像 PIQ', '保存程序准备送给外部设备的输出值。普通循环中，更新这份存储数据后，要到下一次输出刷新才改变实体输出。'],
  output: ['输出电路', '把输出映像变成现场电信号。此型号 DQ 为直流晶体管输出；本实验用一盏示例指示灯表示实体输出。'],
  memory: ['程序与数据存储', '保存程序、组态与运行数据。输入、输出过程映像也是存储区中的数据；它们与现场端子当前状态可能不同。'],
  power: ['内部电源电路', 'CPU 的 24 V 直流供电经内部电源电路为处理器、存储器等供能；外部负载还需满足对应输出组的供电条件。'],
  communication: ['通信与诊断', '通过 PROFINET 与电脑、HMI 或其他已组态设备交换数据，同时检查系统状态。通信与诊断在循环期间穿插执行。'],
};

const sourceUrl = 'https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/plc-concepts/execution-of-the-user-program/processing-the-scan-cycle-in-run-mode';

export function initPrinciple(container) {
  if (!container) throw new Error('initPrinciple requires a container');
  let state = createScanState();
  let playing = false;
  let interval = 1200;
  let timer = null;
  let disposed = false;
  const listeners = [];
  const on = (element, type, handler) => { element.addEventListener(type, handler); listeners.push(() => element.removeEventListener(type, handler)); };
  container.classList.add('principle-panel');
  container.innerHTML = `
    <div class="principle-heading">
      <div><span class="principle-kicker">从信号到动作</span><h2>一个扫描周期，PLC 做了什么？</h2><p>先切换现场输入，再逐步观察四份状态如何传递。</p></div>
      <span class="principle-label">原理示意 · 非内部电路板</span>
    </div>
    <div class="principle-layout">
      <section class="principle-workspace" aria-label="PLC 功能示意与扫描状态">
        <div class="principle-cycle-head"><span class="principle-small-label">普通循环 · 自动 I/O 更新</span><span>已完成 <strong data-value="cycles">0</strong> 轮</span></div>
        <ol class="principle-stages" aria-label="每轮按此顺序循环">
          <li data-stage="0"><span>01</span><div><strong>输出刷新</strong><small>PIQ → 实体输出</small></div></li>
          <li data-stage="1"><span>02</span><div><strong>输入采样</strong><small>实体输入 → PII</small></div></li>
          <li data-stage="2"><span>03</span><div><strong>程序执行</strong><small>读取 PII → 更新 PIQ</small></div></li>
        </ol>
        <div class="principle-flow-caption"><span>信号传递方向</span><span>点击功能块了解作用</span></div>
        <div class="principle-flow" aria-label="现场输入经过输入快照、CPU 运算、输出映像传给现场输出">
          <div class="principle-node principle-field" data-node="input">
            <button type="button" class="principle-node-title" data-block="input">现场输入 <small>输入电路</small></button>
            <button type="button" class="principle-switch" data-action="input" role="switch" aria-checked="false" aria-label="现场输入开关"><span class="principle-switch-track"><span></span></span><strong data-value="inputLabel">断开</strong></button>
            <span class="principle-bit" data-bit="physicalInput">0</span><small>按钮 / 传感器</small>
          </div>
          <span class="principle-arrow" data-arrow="sample" aria-hidden="true">→</span>
          <button type="button" class="principle-node" data-node="pii" data-block="pii"><span class="principle-node-title">输入快照 <small>PII · I0.0</small></span><span class="principle-bit" data-bit="pii">0</span><small>采样时才更新</small></button>
          <span class="principle-arrow" data-arrow="read" aria-hidden="true">→</span>
          <button type="button" class="principle-node principle-cpu" data-node="cpu" data-block="cpu"><span class="principle-node-title">CPU 运算 <small>简化程序</small></span><span class="principle-code">Q := I</span><small>使用已采样的值</small></button>
          <span class="principle-arrow" data-arrow="write" aria-hidden="true">→</span>
          <button type="button" class="principle-node" data-node="piq" data-block="piq"><span class="principle-node-title">输出映像 <small>PIQ · Q0.0</small></span><span class="principle-bit" data-bit="piq">0</span><small>程序写入的结果</small></button>
          <span class="principle-arrow" data-arrow="output" aria-hidden="true">→</span>
          <button type="button" class="principle-node principle-field" data-node="output" data-block="output"><span class="principle-node-title">现场输出 <small>输出电路</small></span><span class="principle-lamp" aria-hidden="true"></span><span class="principle-output-reading"><span data-bit="physicalOutput">0</span> · <span data-value="outputLabel">灯灭</span></span><small>刷新时才改变</small></button>
        </div>
        <div class="principle-support-line" aria-hidden="true"><span>↕</span></div>
        <div class="principle-support">
          <button type="button" data-block="memory"><span class="principle-support-icon">▤</span><strong>程序与数据存储</strong><small>程序 · 组态 · 运行数据</small></button>
          <button type="button" data-block="power"><span class="principle-support-icon">ϟ</span><strong>内部电源电路</strong><small>为各功能电路供能</small></button>
          <button type="button" data-block="communication"><span class="principle-support-icon">⇄</span><strong>通信与诊断</strong><small>连接设备 · 检查状态</small></button>
        </div>
        <div class="principle-block-detail"><span class="principle-detail-marker" aria-hidden="true"></span><div><strong data-detail="title">处理器 CPU</strong><p data-detail="body"></p></div></div>
        <div class="principle-transport">
          <button type="button" class="principle-primary" data-action="play" aria-pressed="false"><span aria-hidden="true">▶</span> <span data-value="playLabel">自动播放</span></button>
          <button type="button" data-action="step">单步执行 <span aria-hidden="true">→</span></button>
          <button type="button" data-action="reset">复位实验</button>
          <label class="principle-speed">播放速度<select aria-label="扫描演示播放速度" data-action="speed"><option value="2200">慢速</option><option value="1200" selected>标准</option><option value="600">快速</option></select></label>
        </div>
        <div class="principle-announcement" role="status" aria-live="polite" aria-atomic="true"><strong data-value="next">下一步：01 输出刷新</strong><p data-value="explanation">当前四份状态均为 0。先闭合现场输入，观察它何时传递到指示灯。</p></div>
      </section>
      <aside class="principle-notebook" aria-label="实验指引">
        <span class="principle-kicker">动手验证</span><h3>按钮变了，<br>灯会立刻变吗？</h3>
        <ol><li>闭合<strong>现场输入</strong>，此时只有最左侧变成 1。</li><li>单步执行到<strong>输入采样</strong>，PII 才记录 1。</li><li>在程序执行前断开输入，观察 PII 是否跟着改变。</li><li>继续执行，看看<strong>输出映像</strong>与<strong>现场输出</strong>何时更新。</li></ol>
        <div class="principle-observation"><span>当前观察</span><p data-value="observation">现场输入与输入快照一致。试着闭合输入开关。</p></div>
        <details class="principle-answer"><summary>展开解释</summary><p>普通循环程序使用输入快照。采样后改变按钮，要等下一次采样才进入 PII；程序先写 PIQ，再由后续输出刷新送到实体端子。</p></details>
        <p class="principle-boundary">这里把扫描放慢到可观察的速度。只演示普通过程映像循环；直接 I/O 访问、硬件中断、输入滤波与通信时序未纳入实验。</p>
        <a class="principle-source" href="${sourceUrl}" target="_blank" rel="noopener noreferrer">核对西门子扫描周期说明 <span aria-hidden="true">↗</span></a>
      </aside>
    </div>`;

  const find = (selector) => container.querySelector(selector);
  const values = Object.fromEntries([...container.querySelectorAll('[data-value]')].map((element) => [element.dataset.value, element]));
  const input = find('[data-action="input"]');
  const play = find('[data-action="play"]');
  const step = find('[data-action="step"]');
  const activeNodes = [['piq', 'output'], ['input', 'pii'], ['pii', 'cpu', 'piq']];
  const activeArrows = [['output'], ['sample'], ['read', 'write']];

  function render(message) {
    for (const element of container.querySelectorAll('[data-bit]')) {
      const value = state[element.dataset.bit];
      element.textContent = String(value);
      element.classList.toggle('principle-on', value === 1);
    }
    input.setAttribute('aria-checked', String(Boolean(state.physicalInput)));
    values.inputLabel.textContent = state.physicalInput ? '闭合' : '断开';
    values.outputLabel.textContent = state.physicalOutput ? '灯亮' : '灯灭';
    find('.principle-lamp').classList.toggle('principle-on', Boolean(state.physicalOutput));
    values.cycles.textContent = String(state.cycles);
    play.setAttribute('aria-pressed', String(playing));
    play.firstElementChild.textContent = playing ? 'Ⅱ' : '▶';
    values.playLabel.textContent = playing ? '暂停播放' : '自动播放';
    step.disabled = playing;
    values.next.textContent = `下一步：0${state.nextStage + 1} ${scanStages[state.nextStage]}`;
    if (message) values.explanation.textContent = message;
    for (const element of container.querySelectorAll('[data-stage]')) {
      const active = Number(element.dataset.stage) === state.lastStage;
      element.classList.toggle('principle-active', active);
      if (active) element.setAttribute('aria-current', 'step'); else element.removeAttribute('aria-current');
    }
    for (const element of container.querySelectorAll('[data-node]')) element.classList.toggle('principle-active', (activeNodes[state.lastStage] || []).includes(element.dataset.node));
    for (const element of container.querySelectorAll('[data-arrow]')) element.classList.toggle('principle-active', (activeArrows[state.lastStage] || []).includes(element.dataset.arrow));
    values.observation.textContent = state.physicalInput !== state.pii
      ? `现场输入已是 ${state.physicalInput}，输入快照仍是 ${state.pii}。下一次采样才会把新状态读进来。`
      : state.piq !== state.physicalOutput
        ? `输出映像已是 ${state.piq}，现场输出仍是 ${state.physicalOutput}。下一次输出刷新才会改变指示灯。`
        : state.steps === 0 ? '现场输入与输入快照一致。试着闭合输入开关。' : '此刻现场与映像一致。可在两个采样时刻之间切换输入，继续观察。';
  }

  function tick() {
    state = advanceScan(state);
    const messages = [
      `输出刷新完成：把已有的 PIQ = ${state.piq} 送到实体输出，指示灯${state.physicalOutput ? '亮' : '灭'}。此步不读取输入。`,
      `输入采样完成：把此刻现场输入 ${state.physicalInput} 复制到 PII。程序接下来使用这份快照。`,
      `程序执行完成：读取 PII = ${state.pii}，执行 Q := I，得到 PIQ = ${state.piq}。实体输出等下一次刷新。`,
    ];
    render(messages[state.lastStage]);
  }

  function clearTimer() { if (timer !== null) clearTimeout(timer); timer = null; }
  function schedule() {
    clearTimer();
    if (!playing || disposed) return;
    timer = setTimeout(() => {
      timer = null;
      // A hidden teaching tab does not advance off-screen.
      if (!container.hidden && !container.closest('[hidden]') && !document.hidden) tick();
      schedule();
    }, interval);
  }
  function pause() { playing = false; clearTimer(); render(); }
  function reset() {
    if (disposed) return;
    playing = false; clearTimer(); state = createScanState();
    render('已复位：现场输入、输入快照、输出映像、现场输出均为 0。先切换输入，再开始实验。');
  }
  function showBlock(key) {
    const [title, body] = blockDetails[key];
    find('[data-detail="title"]').textContent = title;
    find('[data-detail="body"]').textContent = body;
    for (const button of container.querySelectorAll('[data-block]')) {
      button.classList.toggle('principle-selected', button.dataset.block === key);
      button.setAttribute('aria-pressed', String(button.dataset.block === key));
    }
  }
  on(input, 'click', () => { state = setPhysicalInput(state, !state.physicalInput); render(`现场输入已${state.physicalInput ? '闭合，值为 1' : '断开，值为 0'}。这次操作只改变端子状态，PII、PIQ 和实体输出保持原值。`); });
  on(step, 'click', () => { if (!playing) tick(); });
  on(play, 'click', () => { playing = !playing; render(playing ? '正在自动循环。随时改变现场输入，或暂停后单步观察。' : '已暂停，所有状态保留。可以继续单步执行。'); schedule(); });
  on(find('[data-action="reset"]'), 'click', reset);
  on(find('[data-action="speed"]'), 'change', (event) => { interval = Number(event.target.value); schedule(); });
  for (const button of container.querySelectorAll('[data-block]')) on(button, 'click', () => showBlock(button.dataset.block));
  showBlock('cpu');
  render();
  return { reset, pause, getState: () => ({ ...state, playing }), dispose: () => { disposed = true; playing = false; clearTimer(); listeners.forEach((remove) => remove()); } };
}
