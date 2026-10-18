import { build } from 'esbuild';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeOffline } from './offline-builder.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const courses = JSON.parse(await readFile(path.join(root, 'courses.json'), 'utf8'));
const baseUrl = 'https://titleone01.github.io/plc1212c-classroom/';
const define = { __HARDWARE_ONLY__: 'true' };
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const model = JSON.parse(await readFile(path.join(root, 'assets/model.json'), 'utf8'));

// Both documents share the maintained hardware source, but each output directory
// contains its own complete runtime and can be hosted at any directory depth.
const result = await build({
  absWorkingDir: root, entryPoints: ['app.js'], bundle: true, minify: true,
  format: 'esm', target: ['es2020'], write: false, legalComments: 'eof', define,
  plugins: [{ name: 'vendored-three', setup(builder) {
    builder.onResolve({ filter: /^three$/ }, () => ({ path: path.join(root, 'vendor/three.module.js') }));
    builder.onResolve({ filter: /^three\/addons\// }, args => ({ path: path.join(root, 'vendor/addons', args.path.slice('three/addons/'.length)) }));
  } }],
});
const bytes = result.outputFiles[0].contents;
const bundle = `app-${sha256(bytes).slice(0, 12)}.js`;
assert.doesNotMatch(result.outputFiles[0].text, /principle-panel|data-action=.?step|scan-readout|输出过程映像 PIQ/);

const template = await readFile(path.join(root, 'course-template.html'), 'utf8');
const stylesheet = (await readFile(path.join(root, 'styles.css'), 'utf8'))
  .replaceAll('\r\n', '\n')
  .replace('#principle-panel{break-before:page}', '')
  + '\n/* The hardware section is a heading in these single-section courses. */\n'
  + '.lesson-tab{margin:0;cursor:default}.publication-brand{min-width:0}.course-title{overflow-wrap:anywhere}\n'
  + '@media(max-width:580px){.masthead{flex-wrap:wrap;row-gap:8px}.publication-brand{font-size:12px}}\n';

function courseHtml(course) {
  let html = template;
  assert.ok(html.includes('电气实训<span class="brand-divider">/</span>数字教材'));
  assert.match(html, /id="tab-principle"/);
  html = html.replace(/<title>.*?<\/title>/, `<title>${course.title} · PLC硬件认识</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${course.title}：基于西门子原厂 CAD 的 CPU 1212C 硬件认识，支持旋转观察、开盖、拆解与接口讲解。">`)
    .replace('<span>电气实训<span class="brand-divider">/</span>数字教材</span>', `<span class="course-title">${course.title}</span>`)
    .replace(/\s*<link rel="stylesheet" href="\.\/principle\.css">/, '')
    .replace(/<div class="lesson-tabs" role="tablist" aria-label="学习内容">[\s\S]*?<\/div>/, '<div class="lesson-tabs"><h2 class="lesson-tab active" id="hardware-heading"><span class="tab-number">01</span>硬件认识</h2></div>')
    .replace('role="tabpanel" aria-labelledby="tab-hardware"', 'aria-labelledby="hardware-heading"')
    .replace(/\s*<section id="principle-panel"[^>]*><\/section>/, '')
    .replace('盖板动画用于结构认识；原理页为教学示意。', '盖板动画用于结构认识。')
    .replace(/<a href="https:\/\/docs\.tia\.siemens\.cloud\/[^"]+"[^>]*>循环扫描说明<\/a>/, '')
    .replace(/src="\.\/app(?:-[a-f0-9]+)?\.js"/, `src="./${bundle}"`);
  assert.doesNotMatch(html, /工作原理|principle|role="tab|data-tab=|tab-hardware|循环扫描/);
  return html;
}

const manifest = { model, source: 'Siemens CPU 1212C AC/DC/RLY 6ES7212-1BE40-0XB0', hardwareOnly: true, courses: [] };
for (const course of courses) {
  assert.match(course.id, /^[a-z]+(?:-[a-z]+)*$/);
  const destination = path.join(root, course.id);
  await mkdir(path.join(destination, 'assets'), { recursive: true });
  await mkdir(path.join(destination, 'vendor'), { recursive: true });
  await writeFile(path.join(destination, bundle), bytes);
  await writeFile(path.join(destination, 'styles.css'), stylesheet);
  await copyFile(path.join(root, 'calibration-data.js'), path.join(destination, 'calibration-data.js'));
  await copyFile(path.join(root, 'LICENSE'), path.join(destination, 'LICENSE'));
  await copyFile(path.join(root, 'THIRD_PARTY_NOTICES.md'), path.join(destination, 'THIRD_PARTY_NOTICES.md'));
  for (const license of ['LICENSE', 'meshoptimizer.LICENSE', 'three-mesh-bvh.LICENSE']) {
    await copyFile(path.join(root, 'vendor', license), path.join(destination, 'vendor', license));
  }
  const models = [];
  for (const file of [model.compressed, model.fallback]) {
    const payload = await readFile(path.join(root, 'assets', file));
    await writeFile(path.join(destination, 'assets', file), payload);
    models.push({ file, bytes: payload.length, sha256: sha256(payload) });
  }
  const html = courseHtml(course);
  await writeFile(path.join(destination, 'index.html'), html);
  const url = new URL(course.id + '/', baseUrl).href;
  await writeFile(path.join(destination, 'embed-example.html'), `<!doctype html>
<html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${course.title} · 教材嵌入示例</title><link rel="icon" href="data:,">
<style>body{margin:0;font:14px/1.7 system-ui,sans-serif;background:#f2f5f4;color:#203e38}header{padding:14px 20px}h1{font-size:18px;margin:0}iframe{display:block;width:100%;height:1900px;border:0}</style>
<header><h1>${course.title}</h1><span>PLC硬件认识 · 嵌入示例</span></header>
<iframe src="${url}" title="${course.title} · PLC硬件认识" loading="lazy" allow="fullscreen"></iframe></html>\n`);
  const offline = await writeOffline(root, path.join(root, 'offline', course.offlineFile), {
    model, onlineUrl: url, define, html, documentRoot: destination,
  });
  const offlineHtml = await readFile(path.join(root, 'offline', course.offlineFile), 'utf8');
  assert.doesNotMatch(offlineHtml, /principle-panel|scan-readout|输出过程映像 PIQ/);
  manifest.courses.push({ ...course, url, bundle, bundleSha256: sha256(bytes),
    htmlSha256: sha256(html), stylesheetSha256: sha256(stylesheet), models, offline });
  console.log(JSON.stringify({ course: course.title, url, bundle, offline }));
}
await writeFile(path.join(root, 'courses-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
