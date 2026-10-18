import { readFile, writeFile } from 'node:fs/promises';
const data=JSON.parse(await readFile(new URL('./assets/calibration.json',import.meta.url),'utf8'));
await writeFile(new URL('./calibration-data.js',import.meta.url),'export default '+JSON.stringify(data)+';\n');
await import('./build-courses.mjs');
