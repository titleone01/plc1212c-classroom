import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { acceleratedRaycast, computeBoundsTree } from './vendor/three-mesh-bvh.js';
import { topics } from './lesson.js';
import { initPrinciple } from './principle.js';

const $ = id => document.getElementById(id);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const stage = $('viewer');
const state = { topic: 'overview', top: 0, bottom: 0, explode: 0, topGoal: 0, bottomGoal: 0, explodeGoal: 0, paused: false, labels: true, tab: 'hardware', loaded: false };
let renderer, controls, model, calibration, topPivot, bottomPivot, signalCover;
let initialTop, initialBottom, initialSignal, cameraMotion = null;
let raycastMeshes = [], selectedMarker, raf = 0, lastTime = performance.now();
const anchors = new Map(), hotspotElements = new Map();
const scene = new THREE.Scene();
scene.background = new THREE.Color('#edf2f4');
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 3000);
camera.position.set(150, 90, 260);
const raycaster = new THREE.Raycaster();
raycaster.firstHitOnly = true;
THREE.Mesh.prototype.raycast = acceleratedRaycast;
const ndc = new THREE.Vector2();
const tmp = new THREE.Vector3();
const sourceColor = new THREE.Color('#008f92');
const principles = initPrinciple($('principle-panel'));

function text(id, value) { if ($(id)) $(id).textContent = value ?? ''; }
function announce(value) { text('pose-label', value); }
function arrayText(value) { return Array.isArray(value) ? value.join(' ') : value ?? ''; }

function showTopic(id, { moveCamera = true } = {}) {
  const topic = topics.find(item => item.id === id) || topics[0];
  state.topic = topic.id;
  text('lesson-eyebrow', topic.eyebrow);
  text('lesson-title', topic.title);
  text('lesson-summary', topic.summary);
  text('lesson-purpose', arrayText(topic.purpose));
  text('lesson-connection', arrayText(topic.connection));
  text('lesson-example', arrayText(topic.example));
  text('lesson-notes', arrayText(topic.notes));
  $('lesson-source').href = topic.sourceUrl;
  $('lesson-source').textContent = topic.sourceTitle || '查看西门子官方资料';
  document.querySelectorAll('[data-topic]').forEach(button => {
    const active = button.dataset.topic === topic.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', String(active));
  });
  if (state.loaded && moveCamera) {
    state.explodeGoal = 0;
    state.topGoal = topic.covers?.top || 0;
    state.bottomGoal = topic.covers?.bottom || 0;
    state.paused = false;
    const anchor = anchors.get(topic.anchorKey || topic.id);
    goView(topic.view || 'front', topic.id === 'overview' ? null : anchor?.position);
    updateButtons();
  }
  updateSelectedMarker();
}

for (const [index, topic] of topics.entries()) {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.topic = topic.id;
  button.innerHTML = `<span class="topic-number">${String(index + 1).padStart(2, '0')}</span><span></span>`;
  button.lastElementChild.textContent = topic.title;
  button.addEventListener('click', () => showTopic(topic.id));
  $('topic-list').append(button);
}

document.querySelectorAll('[data-tab]').forEach(button => button.addEventListener('click', () => {
  state.tab = button.dataset.tab;
  document.querySelectorAll('[data-tab]').forEach(other => {
    const active = other === button;
    other.classList.toggle('active', active);
    other.setAttribute('aria-selected', String(active));
  });
  $('hardware-panel').hidden = state.tab !== 'hardware';
  $('principle-panel').hidden = state.tab !== 'principle';
  if (state.tab === 'hardware') {
    principles.pause?.();
    requestAnimationFrame(resize);
  }
}));

function updateButtons() {
  $('top-cover').setAttribute('aria-pressed', String(state.topGoal > 0.5));
  $('bottom-cover').setAttribute('aria-pressed', String(state.bottomGoal > 0.5));
  $('top-cover').textContent = state.topGoal > 0.5 ? '关闭上盖' : '打开上盖';
  $('bottom-cover').textContent = state.bottomGoal > 0.5 ? '关闭下盖' : '打开下盖';
  $('explode-toggle').setAttribute('aria-pressed', String(state.explodeGoal > 0.01));
  $('motion-pause').setAttribute('aria-pressed', String(state.paused));
  $('motion-pause').textContent = state.paused ? '继续动画' : '暂停动画';
  if (document.activeElement !== $('explode-range')) $('explode-range').value = String(Math.round(state.explodeGoal * 100));
  const title = state.explodeGoal > 0.01 ? `盖板分解 ${Math.round(state.explodeGoal * 100)}%` : (state.topGoal || state.bottomGoal) ? `${state.topGoal ? '上盖打开' : '上盖闭合'} · ${state.bottomGoal ? '下盖打开' : '下盖闭合'}` : '完整装配';
  announce(state.paused ? `${title} · 动画已暂停` : title);
}

function toggleCover(key) {
  state.explodeGoal = 0;
  state[`${key}Goal`] = state[`${key}Goal`] > 0.5 ? 0 : 1;
  updateButtons();
}
$('top-cover').addEventListener('click', () => toggleCover('top'));
$('bottom-cover').addEventListener('click', () => toggleCover('bottom'));
$('explode-toggle').addEventListener('click', () => {
  state.explodeGoal = state.explodeGoal > 0.01 ? 0 : 1;
  goView(state.explodeGoal ? 'exploded' : 'overview');
  updateButtons();
});
$('explode-range').addEventListener('input', event => {
  const wasAssembled = state.explodeGoal === 0;
  state.explodeGoal = Number(event.target.value) / 100;
  // Seeking is direct even while paused; no queued animation can override it.
  state.explode = state.explodeGoal;
  if (wasAssembled && state.explodeGoal > 0) goView('exploded');
  applyPose(); updateButtons();
});
$('motion-pause').addEventListener('click', () => { state.paused = !state.paused; updateButtons(); });
$('toggle-labels').addEventListener('change', event => { state.labels = event.target.checked; });
$('reset-view').addEventListener('click', () => goView('overview'));
$('reset-all').addEventListener('click', () => {
  state.topGoal = state.bottomGoal = state.explodeGoal = 0;
  state.paused = false; state.labels = true; $('toggle-labels').checked = true;
  showTopic('overview', { moveCamera: false }); goView('overview'); updateButtons();
});
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => goView(button.dataset.view)));

const viewDirections = { overview: [0.8, 0.48, 1.9], exploded: [0.8, 0.48, 1.9], front: [0, 0, 1], back: [0, 0, -1], left: [-1, 0, 0.02], right: [1, 0, 0.02], top: [0, 1, 0.02], bottom: [0, -1, 0.02] };
function goView(view, focus) {
  if (!controls) return;
  const direction = new THREE.Vector3(...(viewDirections[view] || viewDirections.front)).normalize();
  const target = focus ? focus.clone().multiplyScalar(0.65) : new THREE.Vector3();
  const aspect = Math.max(camera.aspect, 0.6);
  const distance = (view === 'exploded' ? 430 : focus ? 250 : 275) * Math.max(1, 1.18 / aspect);
  const position = target.clone().addScaledVector(direction, distance);
  cameraMotion = { from: camera.position.clone(), fromTarget: controls.target.clone(), to: position, target, elapsed: 0, duration: reducedMotion ? 0.01 : 0.75 };
  document.querySelectorAll('[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
  });
}

function setupScene() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label', '西门子 CPU 1215C 三维模型，可拖动旋转、滚轮缩放');
  renderer.domElement.tabIndex = 0;
  stage.prepend(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = 0.1;
  controls.minDistance = 105; controls.maxDistance = 650;
  controls.enablePan = true; controls.maxPolarAngle = Math.PI - 0.002;
  controls.addEventListener('start', () => { cameraMotion = null; });
  scene.add(new THREE.HemisphereLight('#ffffff', '#82939b', 2.4));
  const key = new THREE.DirectionalLight('#fff7ed', 3.2);
  key.position.set(150, 200, 220); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -150, right: 150, top: 150, bottom: -150, near: 1, far: 650 });
  key.shadow.bias = -0.0002; key.shadow.normalBias = 0.3;
  scene.add(key);
  const fill = new THREE.DirectionalLight('#dceeff', 1.6); fill.position.set(-200, 40, -60); scene.add(fill);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(520, 520), new THREE.ShadowMaterial({ color: '#42565b', opacity: 0.14 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -51; floor.receiveShadow = true; scene.add(floor);
  selectedMarker = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(12, 9, 3)), new THREE.LineBasicMaterial({ color: sourceColor, transparent: true, opacity: 0.92, depthTest: false }));
  selectedMarker.renderOrder = 100; selectedMarker.visible = false; scene.add(selectedMarker);
  let pointerStart;
  renderer.domElement.addEventListener('pointerdown', e => { pointerStart = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', event => {
    if (!pointerStart || Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 5 || !model) return;
    const rect = renderer.domElement.getBoundingClientRect();
    ndc.set((event.clientX - rect.left) / rect.width * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(raycastMeshes, false)[0];
    if (!hit) return;
    let node = hit.object;
    while (node && !['top_hinge', 'bottom_hinge', 'signal_cover'].includes(node.name)) node = node.parent;
    if (node?.name === 'top_hinge') return toggleCover('top');
    if (node?.name === 'bottom_hinge') return toggleCover('bottom');
    if (node?.name === 'signal_cover') return showTopic('signalboard');
    const nearby = [...anchors].map(([id, anchor]) => [id, hit.point.distanceTo(anchor.position)]).sort((a, b) => a[1] - b[1]);
    if (nearby[0]?.[1] < 32) showTopic(nearby[0][0]);
  });
  renderer.domElement.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'r') goView('overview');
    const offset = camera.position.clone().sub(controls.target);
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault(); offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), event.key === 'ArrowLeft' ? 0.12 : -0.12);
      camera.position.copy(controls.target).add(offset); controls.update();
    }
  });
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault(); showError('图形上下文暂时丢失，请点击重新载入。');
  });
  new ResizeObserver(resize).observe(stage);
  resize();
}

function resize() {
  if (!renderer || stage.clientWidth < 1 || stage.clientHeight < 1) return;
  renderer.setSize(stage.clientWidth, stage.clientHeight);
  const previousAspect = camera.aspect;
  camera.aspect = stage.clientWidth / stage.clientHeight; camera.updateProjectionMatrix();
  if (state.loaded && controls && Math.abs(previousAspect - camera.aspect) > 0.001) {
    const ratio = Math.max(1, 1.18 / Math.max(camera.aspect, .6)) / Math.max(1, 1.18 / Math.max(previousAspect, .6));
    camera.position.sub(controls.target).multiplyScalar(ratio).add(controls.target);
    cameraMotion = null;
  }
}

function createHotspots() {
  $('hotspots').replaceChildren(); anchors.clear(); hotspotElements.clear();
  for (const [index, topic] of topics.entries()) {
    const definition = calibration.anchors[topic.anchorKey || topic.id];
    if (!definition) continue;
    const anchor = { ...definition, position: new THREE.Vector3(...definition.position), normal: new THREE.Vector3(...definition.normal) };
    anchors.set(topic.id, anchor);
    if (topic.id === 'overview') continue;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'hotspot'; button.dataset.topic = topic.id;
    button.setAttribute('aria-label', `查看${topic.title}`);
    button.innerHTML = `<span class="hotspot-number">${String(index + 1).padStart(2, '0')}</span><span class="hotspot-label"></span>`;
    button.lastElementChild.textContent = topic.title;
    button.addEventListener('click', event => { event.stopPropagation(); showTopic(topic.id); });
    $('hotspots').append(button); hotspotElements.set(topic.id, button);
  }
}

function anchorVisible(anchor) {
  const direction = tmp.copy(camera.position).sub(anchor.position).normalize();
  if (direction.dot(anchor.normal) < 0.05) return false;
  const distance = camera.position.distanceTo(anchor.position);
  raycaster.set(camera.position, anchor.position.clone().sub(camera.position).normalize());
  raycaster.far = distance + 1;
  const hit = raycaster.intersectObjects(raycastMeshes, false)[0];
  raycaster.far = Infinity;
  return !hit || hit.distance >= distance - (anchor.occlusionTolerance ?? 1.4);
}

function updateHotspots() {
  if (!state.loaded || state.tab !== 'hardware') return;
  const width = stage.clientWidth, height = stage.clientHeight;
  model.updateMatrixWorld(true);
  for (const [id, element] of hotspotElements) {
    const anchor = anchors.get(id);
    const projected = anchor.position.clone().project(camera);
    const visible = state.labels && projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < 0.95 && Math.abs(projected.y) < 0.93 && anchorVisible(anchor);
    element.hidden = !visible;
    element.style.left = `${(projected.x + 1) * width / 2}px`;
    element.style.top = `${(1 - projected.y) * height / 2}px`;
    element.classList.toggle('is-active', state.topic === id);
  }
  const selected = anchors.get(state.topic);
  if (selectedMarker) selectedMarker.visible = state.topic !== 'overview' && Boolean(selected && anchorVisible(selected));
}

function updateSelectedMarker() {
  if (!selectedMarker) return;
  const anchor = anchors.get(state.topic);
  if (!anchor || state.topic === 'overview') { selectedMarker.visible = false; return; }
  selectedMarker.geometry.dispose();
  selectedMarker.geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(...(anchor.size || [14, 9, 3])));
  selectedMarker.position.copy(anchor.position);
  selectedMarker.visible = true;
}

function applyPose() {
  if (!state.loaded) return;
  const motion = calibration.motion;
  // Remove terminal covers before withdrawing the signal-board cover (Siemens procedure).
  const coverProgress = THREE.MathUtils.clamp(state.explode / motion.coverPhaseEnd, 0, 1);
  const signalProgress = THREE.MathUtils.clamp((state.explode - motion.coverPhaseEnd) / (1 - motion.coverPhaseEnd), 0, 1);
  topPivot.rotation.x = initialTop.rx + state.top * motion.top.angle;
  bottomPivot.rotation.x = initialBottom.rx + state.bottom * motion.bottom.angle;
  topPivot.position.copy(initialTop.position).addScaledVector(new THREE.Vector3(...motion.top.explode), coverProgress / 1000);
  bottomPivot.position.copy(initialBottom.position).addScaledVector(new THREE.Vector3(...motion.bottom.explode), coverProgress / 1000);
  signalCover.position.copy(initialSignal.position).addScaledVector(new THREE.Vector3(...motion.signal.explode), signalProgress / 1000);
  const signalAnchor = anchors.get('signalboard');
  if (signalAnchor) signalAnchor.position.fromArray(calibration.anchors.signalboard.position).addScaledVector(new THREE.Vector3(...motion.signal.explode), signalProgress);
  if (state.topic === 'signalboard' && selectedMarker) selectedMarker.position.copy(signalAnchor.position);
  model.updateMatrixWorld(true);
}

function showError(message) {
  $('viewer-error').hidden = false;
  let details = $('viewer-error').querySelector('.error-detail');
  if (!details) { details = document.createElement('p'); details.className = 'error-detail'; $('viewer-error').prepend(details); }
  details.textContent = message;
  $('loading').hidden = true;
  text('model-status', '模型加载未完成');
}

async function loadModel() {
  $('viewer-error').hidden = true; $('loading').hidden = false;
  text('loading-text', '载入西门子原厂模型…');
  try {
    if (!renderer) setupScene();
    const response = await fetch('./assets/calibration.json');
    if (!response.ok) throw new Error(`部件配置读取失败 (${response.status})`);
    calibration = await response.json();
    const gltf = await new GLTFLoader().loadAsync('./assets/plc1215c.glb', progress => {
      text('loading-text', progress.total ? `载入原厂模型 ${Math.round(progress.loaded / progress.total * 100)}%` : '载入原厂模型…');
    });
    if (model) scene.remove(model);
    model = gltf.scene; model.scale.setScalar(1000);
    raycastMeshes = [];
    model.traverse(object => {
      if (!object.isMesh) return;
      if (!object.geometry.boundsTree) computeBoundsTree.call(object.geometry);
      object.castShadow = true; object.receiveShadow = true;
      raycastMeshes.push(object);
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        material.roughness = Math.max(material.roughness || 0.5, 0.52); material.metalness = Math.min(material.metalness || 0, 0.3);
      }
    });
    scene.add(model);
    topPivot = model.getObjectByName('top_hinge'); bottomPivot = model.getObjectByName('bottom_hinge'); signalCover = model.getObjectByName('signal_cover');
    if (!topPivot || !bottomPivot || !signalCover) throw new Error('模型缺少已标定的盖板分件');
    initialTop = { position: topPivot.position.clone(), rx: topPivot.rotation.x };
    initialBottom = { position: bottomPivot.position.clone(), rx: bottomPivot.rotation.x };
    initialSignal = { position: signalCover.position.clone(), rx: signalCover.rotation.x };
    state.loaded = true;
    createHotspots(); applyPose(); updateSelectedMarker();
    text('model-status', '原厂模型 · 已载入'); $('loading').hidden = true;
    goView('overview'); updateButtons();
    window.dispatchEvent(new CustomEvent('plc-ready'));
  } catch (error) {
    console.error(error);
    const help = location.protocol === 'file:'
      ? '请使用“启动教学网页.cmd”，不要直接双击 HTML 文件。'
      : '请检查网络连接后点击“重新载入模型”，或稍后重试。';
    showError(`${error.message}。${help}`);
  }
}
$('retry-load').addEventListener('click', () => { if (renderer?.getContext().isContextLost()) location.reload(); else loadModel(); });

function animate(time) {
  const dt = Math.min((time - lastTime) / 1000, 0.05); lastTime = time;
  if (state.tab === 'hardware' && renderer) {
    if (!state.paused) {
      const factor = reducedMotion ? 1 : 1 - Math.exp(-dt * 7);
      for (const key of ['top', 'bottom', 'explode']) {
        state[key] = THREE.MathUtils.lerp(state[key], state[`${key}Goal`], factor);
        if (Math.abs(state[key] - state[`${key}Goal`]) < 0.00005) state[key] = state[`${key}Goal`];
      }
      applyPose();
    }
    if (cameraMotion) {
      cameraMotion.elapsed += dt;
      const t = Math.min(cameraMotion.elapsed / cameraMotion.duration, 1);
      const eased = t * t * (3 - 2 * t);
      camera.position.lerpVectors(cameraMotion.from, cameraMotion.to, eased);
      controls.target.lerpVectors(cameraMotion.fromTarget, cameraMotion.target, eased);
      if (t >= 1) cameraMotion = null;
    }
    controls.update(); updateHotspots(); renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(animate);
}

// A read-only acceptance hook: no UI behavior depends on it.
window.__PLC__ = {
  snapshot: () => ({ ...state, visibleHotspots: [...hotspotElements].filter(([, element]) => !element.hidden).map(([id]) => id), camera: camera.position.toArray(), target: controls?.target.toArray(), triangles: renderer?.info.render.triangles, modelBounds: model ? new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3()).toArray() : null, partPositionsMM: state.loaded ? {top: topPivot.position.toArray().map(v=>v*1000), bottom: bottomPivot.position.toArray().map(v=>v*1000), signal: signalCover.position.toArray().map(v=>v*1000)} : null }),
};
window.addEventListener('pagehide', () => { cancelAnimationFrame(raf); principles.dispose?.(); });
showTopic('overview', { moveCamera: false }); updateButtons();
loadModel(); raf = requestAnimationFrame(animate);
