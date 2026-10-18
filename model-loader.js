import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/meshopt_decoder.mjs';

// Versioned resources keep cached files consistent with their decoder and assembly.
export const modelAsset = {"compressed":"plc1212c-173142dca76c.glb.gz","fallback":"plc1212c-173142dca76c.glb","compressedBytes":2651686,"decodedBytes":3623520,"factoryTriangles":189814,"orderNumber":"6ES7212-1BE40-0XB0"};
const cacheName = 'plc1212c-model-v1';
const isGLB = bytes => bytes.length >= 4 && bytes[0] === 103 && bytes[1] === 108 && bytes[2] === 84 && bytes[3] === 70;
const metrics = { source: '', bytes: 0, attempts: 0, started: 0, decodedAt: 0 };
window.__PLC_LOAD__ = metrics;

async function download(url, expectedBytes, onProgress) {
  const controller = new AbortController();
  let timer;
  const keepAlive = () => {
    clearTimeout(timer);
    timer = setTimeout(() => controller.abort(), 45000);
  };
  keepAlive();
  try {
    metrics.attempts++;
    const response = await fetch(url, { signal: controller.signal, credentials: 'same-origin' });
    if (!response.ok) throw new Error(`模型下载失败 (${response.status})`);
    let loaded = 0, total = expectedBytes;
    const chunks = [];
    const report = () => onProgress(`下载模型 ${(loaded / 1000000).toFixed(2)} / ${(total / 1000000).toFixed(2)} MB（${Math.min(100, Math.floor(loaded / total * 100))}%）`);
    report();
    if (response.body?.getReader) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        keepAlive();
        // Some hosts decompress HTTP gzip before delivering bytes to JavaScript.
        // Content-Length describes transport bytes, so never use it as this denominator.
        if (!loaded && isGLB(value)) total = modelAsset.decodedBytes;
        loaded += value.byteLength;
        if (loaded > modelAsset.decodedBytes) throw new Error('模型下载数据异常');
        chunks.push(value); report();
      }
    } else {
      const bytes = new Uint8Array(await response.arrayBuffer());
      loaded = bytes.byteLength;
      if (isGLB(bytes)) total = modelAsset.decodedBytes;
      chunks.push(bytes); report();
    }
    const bytes = new Uint8Array(loaded);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    if (loaded !== (isGLB(bytes) ? modelAsset.decodedBytes : expectedBytes)) throw new Error('模型下载不完整，请重新载入');
    metrics.bytes = loaded;
    return bytes;
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('模型下载超过 45 秒没有收到数据');
    if (error instanceof TypeError && error.message === 'Failed to fetch') throw new Error('模型下载连接中断或被网络阻止');
    throw error;
  } finally { clearTimeout(timer); }
}

async function decode(bytes) {
  if (isGLB(bytes)) return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  if (typeof DecompressionStream === 'undefined') throw new Error('浏览器不支持 gzip 解压');
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  const buffer = await new Response(stream).arrayBuffer();
  if (buffer.byteLength !== modelAsset.decodedBytes || !isGLB(new Uint8Array(buffer))) throw new Error('模型解压校验失败');
  return buffer;
}

export async function loadFactoryModel(onProgress) {
  metrics.started = performance.now(); metrics.attempts = 0; metrics.bytes = 0;
  const compressed = typeof DecompressionStream !== 'undefined';
  const url = new URL(`./assets/${compressed ? modelAsset.compressed : modelAsset.fallback}`, import.meta.url).href;
  const expectedBytes = compressed ? modelAsset.compressedBytes : modelAsset.decodedBytes;
  let cache;
  try { if ('caches' in window) cache = await caches.open(cacheName); } catch { /* Storage may be unavailable in a textbook iframe. */ }
  const parse = async bytes => {
    onProgress('解码原厂模型…');
    const buffer = await decode(bytes);
    await MeshoptDecoder.ready;
    const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(buffer, new URL('./assets/', import.meta.url).href);
    metrics.decodedAt = performance.now();
    return gltf;
  };
  try {
    const cached = await cache?.match(url);
    if (cached) {
      onProgress('读取已下载的模型…');
      metrics.source = 'model-cache';
      return await parse(new Uint8Array(await cached.arrayBuffer()));
    }
  } catch { try { await cache?.delete(url); } catch { /* The network path still works. */ } }
  metrics.source = 'network';
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      if (attempt) onProgress('下载中断，正在重试…');
      const bytes = await download(url, expectedBytes, onProgress);
      const gltf = await parse(bytes);
      try { await cache?.put(url, new Response(bytes, { headers: { 'Content-Type': 'application/octet-stream' } })); } catch { /* Cache quota does not prevent teaching. */ }
      return gltf;
    } catch (error) { if (attempt) throw error; }
  }
}
