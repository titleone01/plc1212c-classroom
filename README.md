# CPU 1212C AC/DC/RLY 双课程硬件教材

型号：6ES7212-1BE40-0XB0。原厂 STEP：https://static.siemens.com/mimes/imagedb_stp/G_ST70_XX_98589V.stp。

沿用 1215C 两门课程界面，只保留硬件认识。

- 工业网络与组态技术：https://titleone01.github.io/plc1212c-classroom/industrial-network/
- PLC应用技术：https://titleone01.github.io/plc1212c-classroom/plc-application/

依赖按 package-lock.json 执行 npm ci；npm run build 同时生成两门课程静态目录和两份独立离线 HTML。courses.json 管理课程名称；assets/model.json 管理模型文件和字节数；assets/calibration.json 管理独立校准数据；course-template.html 为共用模板。

原始 CAD、完整 GLB、Blender 和验证资料位于项目 outputs/PLC1212C双课程硬件教材。原厂几何未减面；90°为教学展示角度，非官方最大机械开度。保留所有厂商与开源许可证。
