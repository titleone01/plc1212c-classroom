// CPU 1212C AC/DC/RLY. Parameters verified against Siemens S7-1200 V20 manual.
export const topics = [
  {
    "anchorKey": "overview",
    "sourceTitle": "西门子官方产品资料",
    "id": "overview",
    "title": "先认识这台 PLC",
    "eyebrow": "01 / 整机概览",
    "summary": "SIMATIC S7-1200 · CPU 1212C AC/DC/RLY。把传感器的信息读进来，按程序作判断，再让执行元件动作。",
    "purpose": "这是紧凑型控制器：处理器、存储器、电源电路、输入输出和通信接口集成在一个机壳内。C 表示紧凑型。",
    "connection": "AC/DC/RLY 依次表示交流电源、直流数字输入、继电器数字输出。订货号：6ES7212-1BE40-0XB0。",
    "example": "输送带上，光电传感器检测到工件，PLC 执行分类程序，再通过输出控制指示灯或驱动装置。",
    "notes": [
      "本机集成 8 DI、6 路继电器 DQ、2 AI，以及 1 个 PROFINET 网口；无板载模拟输出。",
      "机身标称宽 × 高 × 深为 90 × 100 × 75 mm。先旋转观察，再打开盖板。"
    ],
    "sourceUrl": "https://mall.industry.siemens.com/mall/en/EN/Catalog/Product/6ES7212-1BE40-0XB0",
    "view": "front",
    "covers": {
      "top": 0,
      "bottom": 0
    }
  },
  {
    "anchorKey": "power",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "power",
    "title": "电源与接地",
    "eyebrow": "02 / 能量从哪里来",
    "summary": "CPU 使用交流电源，额定 120/230 V AC，允许范围为 85–264 V AC，47–63 Hz。",
    "purpose": "交流电源经 CPU 内部电源电路为控制器供能。CPU 的交流输入与用于传感器的 24 V DC 输出属于不同端子。",
    "connection": "上方 X10 的 L1、N 和功能接地用于 CPU 电源；L+、M 为 24 V DC 传感器电源输出。1M 是数字输入公共端。",
    "example": "实训台的交流电源给 CPU 供电，24 V DC 传感器向 DI 提供状态信号，PLC 再执行控制程序。",
    "notes": [
      "不能把交流电接到 L+、M 传感器电源输出或数字输入端。",
      "实物接线前断电，并以本型号机身标识和官方接线图核对。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/power-supply-and-sensor-power",
    "view": "front",
    "covers": {
      "top": 1,
      "bottom": 0
    }
  },
  {
    "anchorKey": "di",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "di",
    "title": "数字输入 DI",
    "eyebrow": "03 / 读取开与关",
    "summary": "8 路 24 V DC 数字输入，用 0 和 1 表达现场信号的两种状态。",
    "purpose": "读取按钮、限位开关、光电或接近传感器。上方 X10 端子标为 DI a.0–a.7，前面对应的小灯显示通道状态。",
    "connection": "接入与输入类型匹配的 24 V 直流信号，并按接线图连接输入公共端 1M。",
    "example": "将工件到位信号接到第一路输入；程序读取该输入为 1 后，决定是否启动下一步动作。",
    "notes": [
      "I0.0、I0.1 是常见的程序地址示例，实际地址由硬件组态决定。",
      "数字输入表达状态；温度、压力等连续大小通常使用模拟输入。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/digital-inputs-and-outputs",
    "view": "front",
    "covers": {
      "top": 1,
      "bottom": 0
    }
  },
  {
    "anchorKey": "dq",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "dq",
    "title": "继电器数字输出 DQ",
    "eyebrow": "04 / 发出动作指令",
    "summary": "6 路继电器数字输出，单通道额定电流为 2 A；外部负载需要自己的供电回路。",
    "purpose": "程序控制内部继电器触点的通断。下方 X12 端子标为 DQ a.0–a.5；DQ 也常写作 DO。",
    "connection": "1L 是 a.0–a.3 组的公共端，2L 是 a.4–a.5 组的公共端。将匹配的外部负载电源和负载按官方图接入触点回路。",
    "example": "程序置位 Q0.0 后，相应继电器触点闭合；外部电源经触点使示例指示灯点亮。",
    "notes": [
      "继电器触点通断外部电路，DQ 本身不会主动输出 24 V 电源。",
      "2 A 参数仍受电压、负载类别、输出组和寿命条件限制；不把板载继电器输出当作高速脉冲输出。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/digital-inputs-and-outputs",
    "view": "front",
    "covers": {
      "top": 0,
      "bottom": 1
    }
  },
  {
    "anchorKey": "ai",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "ai",
    "title": "模拟输入 AI",
    "eyebrow": "05 / 读取连续变化",
    "summary": "2 路内置模拟输入，输入范围为 0–10 V DC。",
    "purpose": "把连续变化的电压转换成数字量，程序再把它换算为温度、液位或压力等工程量。",
    "connection": "上方 X11 的 AI 0、AI 1 接 0–10 V 电压信号，2M 为对应参考端；信号类型需与内置电压输入匹配。",
    "example": "假设一个变送器把 0–100 cm 液位线性转换为 0–10 V，5 V 就可在程序中换算为 50 cm。",
    "notes": [
      "此 CPU 有 2 路内置 AI，没有内置 AO；额外模拟输出需选用兼容扩展。",
      "4–20 mA 传感器不能直接当作内置 0–10 V 电压输入使用。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/analog-inputs/analog-input-specifications",
    "view": "front",
    "covers": {
      "top": 1,
      "bottom": 0
    }
  },
  {
    "anchorKey": "status",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "status",
    "title": "状态与通道指示灯",
    "eyebrow": "06 / 看懂 PLC 的状态",
    "summary": "左侧 RUN/STOP、ERROR、MAINT 显示 CPU 状态；DI、DQ 小灯显示各数字通道状态。",
    "purpose": "RUN/STOP 常绿表示 RUN，常黄表示 STOP。ERROR 红色提示错误；MAINT 黄色提示维护相关状态，需结合诊断信息理解。",
    "connection": "指示灯属于观察区域，不是接线端子。可通过 TIA Portal 读取诊断缓冲区来进一步定位问题。",
    "example": "按钮已经按下，先看相应 DI 灯，再检查程序条件与 DQ 灯，逐段理解“输入—运算—输出”。",
    "notes": [
      "启动时 RUN/STOP 可交替绿黄闪烁；不同闪烁组合含义不同。",
      "DQ 指示灯亮不等于外部负载一定正常，仍要核对负载供电与接线。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/online-and-diagnostic-tools/status-leds",
    "view": "front",
    "covers": {
      "top": 0,
      "bottom": 0
    }
  },
  {
    "anchorKey": "ethernet",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "ethernet",
    "title": "PROFINET 通信端口",
    "eyebrow": "07 / 与其他设备交换数据",
    "summary": "底部有 1 个 RJ45 端口，属于 PROFINET 接口 X1；CPU 内部没有集成双口交换机。",
    "purpose": "连接编程电脑、HMI、交换机或已组态的 PROFINET 设备，用于下载、监控与数据交换。",
    "connection": "使用适用的工业以太网线；通信前还需设置设备名称、IP 地址及相应组态。",
    "example": "电脑通过网口下载程序；HMI 通过通信读取计数值，并显示在操作画面上。",
    "notes": [
      "连接多台以太网设备时，可使用适用的外部交换机。",
      "网页用于硬件结构认识，不连接或控制真实 PLC。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/communications-cpu-1212c",
    "view": "bottom",
    "covers": {
      "top": 0,
      "bottom": 1
    }
  },
  {
    "anchorKey": "memory",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "memory",
    "title": "SIMATIC 存储卡槽",
    "eyebrow": "08 / 程序与数据的载体",
    "summary": "存储卡槽位于上盖内，可使用 SIMATIC Memory Card。",
    "purpose": "根据卡的配置，它可用于程序传送、作为外部装载存储器，或执行固件更新。CPU 内部也有存储器。",
    "connection": "使用适配的 SIMATIC 存储卡；插卡前区分“传送卡”和“程序卡”的使用方式。",
    "example": "在程序传送场景中，可通过配置好的传送卡把项目带到另一台匹配的 CPU。",
    "notes": [
      "不能用普通消费级 SD 卡替代 SIMATIC 存储卡。",
      "存储卡不是每台 CPU 运行程序都必须额外安装的部件。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/plc-concepts/using-a-memory-card/memory-cards",
    "view": "front",
    "covers": {
      "top": 1,
      "bottom": 0
    }
  },
  {
    "anchorKey": "signalboard",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "signalboard",
    "title": "前部扩展板位置",
    "eyebrow": "09 / 小范围扩展",
    "summary": "前部小盖板后是插装扩展板的位置，可配置兼容的 SB、CB 或 BB。",
    "purpose": "SB 可补充少量输入输出；CB 可增加相应通信功能；BB 为特定的电池板选件。具体功能取决于实际插入的产品。",
    "connection": "每台 CPU 只有 1 个前部扩展板位置，按兼容性和项目组态选择。这里展示原厂基础机型的盖板。",
    "example": "现有内置端口不够时，可评估兼容信号板是否满足需求，而无需先增加侧面模块。",
    "notes": [
      "拆离先移除上下端子盖，再释放信号板盖并向外取出。网页不模拟工具撬动或弹性卡扣变形。",
      "本页展示原厂基础机型盖板；盖板仅拆离，不设翻盖铰链。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/installation/installation-and-removal-procedures/installing-and-removing-an-sb-cb-or-bb",
    "view": "front",
    "covers": {
      "top": 0,
      "bottom": 0
    }
  },
  {
    "anchorKey": "expansion",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "expansion",
    "title": "侧面扩展区域",
    "eyebrow": "10 / 让系统扩展",
    "summary": "侧面总线连接 CPU 与扩展模块。通常左侧用于通信模块，右侧用于信号模块。",
    "purpose": "CPU 1212C 可扩展最多 2 个信号模块 SM、最多 3 个通信模块 CM，前部另有 1 个 SB/CB/BB 位置；需核对兼容性和电源预算。",
    "connection": "信号模块增加数字量或模拟量通道；通信模块增加相应的网络或串行通信能力。模块须在硬件组态中配置。",
    "example": "当一个实训项目需要更多传感器输入时，可加入兼容的数字输入模块，并在程序中使用新增地址。",
    "notes": [
      "原厂 CAD 简化了侧面接口，标注表示扩展区域，不表示触点的精确位置。",
      "侧面总线用于兼容模块，不是现场按钮接线端子。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/general-specifications-and-features",
    "view": "right",
    "covers": {
      "top": 0,
      "bottom": 0
    }
  },
  {
    "anchorKey": "mounting",
    "sourceTitle": "西门子 S7-1200 系统手册",
    "id": "mounting",
    "title": "背面安装结构",
    "eyebrow": "11 / 固定在控制柜里",
    "summary": "背面的导轨槽与卡扣用于 DIN 导轨安装；展开安装卡扣也可进行面板固定。",
    "purpose": "把 CPU 稳定地固定在控制柜或实训板上，使接线、维护和模块扩展有可靠的机械基础。",
    "connection": "安装在匹配的 DIN 导轨或按官方尺寸布置的面板孔位；导轨固定与电气接线分别检查。",
    "example": "切换到背面观察：找出挂住导轨的结构，再找锁住机身的活动卡扣。",
    "notes": [
      "实物拆装需先断开 CPU 和相关设备电源。",
      "本页展示结构位置，不模拟带线设备的实际安装载荷。"
    ],
    "sourceUrl": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/installation/installation-and-removal-procedures/installing-and-removing-the-cpu",
    "view": "back",
    "covers": {
      "top": 0,
      "bottom": 0
    }
  }
];
export const lessonSources = {
  "product": "https://mall.industry.siemens.com/mall/en/EN/Catalog/Product/6ES7212-1BE40-0XB0",
  "wiring": "https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/technical-specifications/cpu-1212c/cpu-1212c-wiring-diagrams"
};
