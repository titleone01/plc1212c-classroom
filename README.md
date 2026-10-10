# CPU 1215C 互动教学网页

基于西门子 SIMATIC S7-1200 CPU 1215C DC/DC/DC（6ES7215-1AG40-0XB0）原厂 CAD 的中文静态教学网页。

- [在线教材](https://titleone01.github.io/plc1215c-classroom/)
- [数字教材 iframe 示例](https://titleone01.github.io/plc1215c-classroom/embed-example.html)

支持模型旋转与快捷视角、上下盖独立开合、盖板拆离与进度拖动、硬件部位讲解、二维工作原理和扫描过程演示。网页不连接真实 PLC。

## 发布与维护

GitHub Pages 从 `main` 分支根目录发布；`.nojekyll` 保留原始静态文件结构。更新并推送 `main` 后，GitHub 会重新部署。

运行依赖和 GLB 模型随仓库提供，无需运行时访问外部 CDN。官方资料链接仅在用户点击时打开。模型约 18.5 MB，首次加载速度取决于网络。

本仓库只包含网页运行文件，不包含参考照片、原始 STEP、Blender 工程、账户凭据或本机启动脚本。现有自有域名站点仍保留，尚未切换到本仓库。

```html
<iframe src="https://titleone01.github.io/plc1215c-classroom/"
  title="CPU 1215C 互动教材" width="100%" height="900"
  style="border:0" loading="lazy" allow="fullscreen"></iframe>
```

实际教材平台接入、真实手机和中国大陆各运营商的访问质量需分别验证；GitHub Pages 部署成功不代表这些验证已完成。

## 资源来源与版权

- [西门子原厂 STEP](https://static.siemens.com/mimes/imagedb_stp/G_ST70_XX_98599V.stp)
- [官方产品资料](https://mall.industry.siemens.com/mall/en/EN/Catalog/Product/6ES7215-1AG40-0XB0)
- [官方循环扫描说明](https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/plc-concepts/execution-of-the-user-program/processing-the-scan-cycle-in-run-mode)
- [西门子图片与模型版权说明](https://www.automation.siemens.com/bilddb/informations.aspx?lang=en)

原厂模型版权：© Siemens AG 2025, All rights reserved。SIMATIC、SIEMENS 及相关标识属于其权利人。本教学网页并非西门子官方教学产品；功能图是教学原理示意，不是实际内部电路板。

原厂资源的权利不因本仓库公开而改变；本仓库不授予额外的 Siemens 素材许可。Three.js 与 three-mesh-bvh 的许可证分别随 `vendor/LICENSE` 与 `vendor/three-mesh-bvh.LICENSE` 提供。
