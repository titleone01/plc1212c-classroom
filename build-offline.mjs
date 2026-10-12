import path from 'node:path';
import {writeOffline} from './offline-builder.mjs';
const root=import.meta.dirname;
console.log(JSON.stringify(await writeOffline(root,path.join(root,'offline/PLC_CPU1215C_离线.html'),{
 model:{fallback:'plc1215c-7c7321cddc78.glb',decodedBytes:4554808},
 onlineUrl:'https://titleone01.github.io/plc1215c-classroom/'
})));
