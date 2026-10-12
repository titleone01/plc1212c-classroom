var as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,Oh=1,kf=2;var La=1,yc=2,Lr=3,bn=0,Yt=1,yn=2,fi=0,Rs=1,kh=2,zh=3,Vh=4,zf=5;var Qi=100,Vf=101,Gf=102,Hf=103,Wf=104,qf=200,Xf=201,jf=202,Kf=203,Wo=204,qo=205,Yf=206,Jf=207,Zf=208,$f=209,Qf=210,ep=211,tp=212,np=213,ip=214,Xo=0,jo=1,Ko=2,Cs=3,Yo=4,Jo=5,Zo=6,$o=7,Gh=0,sp=1,rp=2,Zn=0,Hh=1,Wh=2,qh=3,Da=4,Xh=5,jh=6,Kh=7,Sh="attached",ap="detached",Yh=300,cs=301,Fs=302,vc=303,Mc=304,Na=306,es=1e3,Un=1001,br=1002,_t=1003,Sc=1004;var Bs=1005;var wt=1006,Dr=1007;var $n=1008;var pn=1009,wc=1010,Ac=1011,Os=1012,Ua=1013,Pn=1014,rn=1015,pi=1016,Tc=1017,Ec=1018,Nr=1020,Jh=35902,Zh=35899,$h=1021,Qh=1022,an=1023,oi=1026,ls=1027,Fa=1028,Ur=1029,Fi=1030,Ba=1031;var Oa=1033,ka=33776,za=33777,Va=33778,Ga=33779,Rc=35840,Cc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Uc=37488,Fc=37489,Ha=37490,Bc=37491,Oc=37808,kc=37809,zc=37810,Vc=37811,Gc=37812,Hc=37813,Wc=37814,qc=37815,Xc=37816,jc=37817,Kc=37818,Yc=37819,Jc=37820,Zc=37821,$c=36492,Qc=36494,el=36495,tl=36283,nl=36284,Wa=36285,il=36286;var Ps=2300,Is=2301,Ho=2302,wh=2303,Ah=2400,Th=2401,Eh=2402,op=2500;var eu=0,qa=1,Fr=2,cp=3200;var sl=0,lp=1,Bi="",St="srgb",dn="srgb-linear",la="linear",Je="srgb";var Ts=7680;var Rh=519,hp=512,up=513,dp=514,rl=515,fp=516,pp=517,al=518,mp=519,Qo=35044;var tu="300 es",Fn=2e3,xr=2001;function tg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ng(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=_r("canvas");return i.style.display="block",i}var Jd={},yr=null;function ha(...i){let e="THREE."+i.shift();yr?yr("log",e,...i):console.log(e,...i)}function bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=bp(i);let e="THREE."+i.shift();if(yr)yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=bp(i);let e="THREE."+i.shift();if(yr)yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Es(...i){let e=i.join(" ");e in Jd||(Jd[e]=!0,Me(...i))}function xp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _p={[Xo]:jo,[Ko]:Zo,[Yo]:$o,[Cs]:Jo,[jo]:Xo,[Zo]:Ko,[$o]:Yo,[Jo]:Cs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,mr=Math.PI/180,Ls=180/Math.PI;function Yn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Ue(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e){return(i%e+e)%e}function ig(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sg(i,e,t){return i!==e?(t-i)/(e-i):0}function ca(i,e,t){return(1-t)*i+t*e}function rg(i,e,t,n){return ca(i,e,1-Math.exp(-t*n))}function ag(i,e=1){return e-Math.abs(nu(i,e*2)-e)}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hg(i,e){return i+Math.random()*(e-i)}function ug(i){return i*(.5-Math.random())}function dg(i){i!==void 0&&(Zd=i);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fg(i){return i*mr}function pg(i){return i*Ls}function mg(i){return(i&i-1)===0&&i!==0}function gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Oi={DEG2RAD:mr,RAD2DEG:Ls,generateUUID:Yn,clamp:Ue,euclideanModulo:nu,mapLinear:ig,inverseLerp:sg,lerp:ca,damp:rg,pingpong:ag,smoothstep:og,smootherstep:cg,randInt:lg,randFloat:hg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:xg,normalize:et,denormalize:Kn},ou=class ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ou.prototype.isVector2=!0;var _e=ou,Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+y*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+y*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cu=class cu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ue(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cu.prototype.isVector3=!0;var L=cu,jl=new L,$d=new Kt,lu=class lu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],_=s[1],M=s[4],b=s[7],v=s[2],w=s[5],A=s[8];return r[0]=a*y+o*_+c*v,r[3]=a*m+o*M+c*w,r[6]=a*p+o*b+c*A,r[1]=l*y+h*_+d*v,r[4]=l*m+h*M+d*w,r[7]=l*p+h*b+d*A,r[2]=u*y+f*_+g*v,r[5]=u*m+f*M+g*w,r[8]=u*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lu.prototype.isMatrix3=!0;var Ne=lu,Kl=new Ne,Qd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){let i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:e,whitePoint:n,transfer:la,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var ke=_g();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qs,ec=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qs===void 0&&(Qs=_r("canvas")),Qs.width=e.width,Qs.height=e.height;let s=Qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yg=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var vg=0,Jl=new L,qt=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=wt,a=$n,o=an,c=pn,l=i.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Yn(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Yh;qt.DEFAULT_ANISOTROPY=1;var hu=class hu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(f+1)/2,v=(p+1)/2,w=(h+u)/4,A=(d+y)/4,x=(g+m)/4;return M>b&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=x/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ue(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hu.prototype.isVector4=!0;var $e=hu,tc=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ua=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nc=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _c=class _c{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,y,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Sg)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),ji.crossVectors(n,An),ji.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ji.crossVectors(n,An)),ji.normalize(),ho.crossVectors(An,ji),s[0]=ji.x,s[4]=ho.x,s[8]=An.x,s[1]=ji.y,s[5]=ho.y,s[9]=An.y,s[2]=ji.z,s[6]=ho.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],M=n[7],b=n[11],v=n[15],w=s[0],A=s[4],x=s[8],T=s[12],R=s[1],C=s[5],P=s[9],D=s[13],O=s[2],N=s[6],H=s[10],q=s[14],Z=s[3],Q=s[7],se=s[11],le=s[15];return r[0]=a*w+o*R+c*O+l*Z,r[4]=a*A+o*C+c*N+l*Q,r[8]=a*x+o*P+c*H+l*se,r[12]=a*T+o*D+c*q+l*le,r[1]=h*w+d*R+u*O+f*Z,r[5]=h*A+d*C+u*N+f*Q,r[9]=h*x+d*P+u*H+f*se,r[13]=h*T+d*D+u*q+f*le,r[2]=g*w+y*R+m*O+p*Z,r[6]=g*A+y*C+m*N+p*Q,r[10]=g*x+y*P+m*H+p*se,r[14]=g*T+y*D+m*q+p*le,r[3]=_*w+M*R+b*O+v*Z,r[7]=_*A+M*C+b*N+v*Q,r[11]=_*x+M*P+b*H+v*se,r[15]=_*T+M*D+b*q+v*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],_=c*f-l*u,M=o*f-l*d,b=o*u-c*d,v=a*f-l*h,w=a*u-c*h,A=a*d-o*h;return t*(y*_-m*M+p*b)-n*(g*_-m*v+p*w)+s*(g*M-y*v+p*A)-r*(g*b-y*w+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],_=t*o-n*a,M=t*c-s*a,b=t*l-r*a,v=n*c-s*o,w=n*l-r*o,A=s*l-r*c,x=h*y-d*g,T=h*m-u*g,R=h*p-f*g,C=d*m-u*y,P=d*p-f*y,D=u*p-f*m,O=_*D-M*P+b*C+v*R-w*T+A*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/O;return e[0]=(o*D-c*P+l*C)*N,e[1]=(s*P-n*D-r*C)*N,e[2]=(y*A-m*w+p*v)*N,e[3]=(u*w-d*A-f*v)*N,e[4]=(c*R-a*D-l*T)*N,e[5]=(t*D-s*R+r*T)*N,e[6]=(m*b-g*A-p*M)*N,e[7]=(h*A-u*b+f*M)*N,e[8]=(a*P-o*R+l*x)*N,e[9]=(n*R-t*P-r*x)*N,e[10]=(g*w-y*b+p*_)*N,e[11]=(d*b-h*w-f*_)*N,e[12]=(o*T-a*C-c*x)*N,e[13]=(t*C-n*T+s*x)*N,e[14]=(y*M-g*v-m*_)*N,e[15]=(h*v-d*M+u*_)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,_=c*l,M=c*h,b=c*d,v=n.x,w=n.y,A=n.z;return s[0]=(1-(y+p))*v,s[1]=(f+b)*v,s[2]=(g-M)*v,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(u+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+M)*A,s[9]=(m-_)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),c=er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qn.copy(this);let l=1/a,h=1/o,d=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Fn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===xr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Fn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===xr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_c.prototype.isMatrix4=!0;var Ee=_c,er=new L,qn=new Ee,Mg=new L(0,0,0),Sg=new L(1,1,1),ji=new L,ho=new L,An=new L,tf=new Ee,nf=new Kt,Ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wg=0,sf=new L,tr=new Kt,_i=new Ee,uo=new L,Qr=new L,Ag=new L,Tg=new Kt,rf=new L(1,0,0),af=new L(0,1,0),of=new L(0,0,1),cf={type:"added"},Eg={type:"removed"},nr={type:"childadded",child:null},Zl={type:"childremoved",child:null},dt=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ti,n=new Kt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ne}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Qr,uo,this.up):_i.lookAt(uo,Qr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(_i),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),nr.child=e,this.dispatchEvent(nr),nr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},fo={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ke.workingColorSpace){if(e=nu(e,1),t=Ue(t,0,1),n=Ue(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$l(a,r,e+1/3),this.g=$l(a,r,e),this.b=$l(a,r,e-1/3)}return ke.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ke.workingToColorSpace(en.copy(this),e),Math.round(Ue(en.r*255,0,255))*65536+Math.round(Ue(en.g*255,0,255))*256+Math.round(Ue(en.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=St){ke.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(fo);let n=ca(Ki.h,fo.h,t),s=ca(Ki.s,fo.s,t),r=ca(Ki.l,fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Re;Re.NAMES=yp;var da=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new L,yi=new L,Ql=new L,vi=new L,ir=new L,sr=new L,lf=new L,eh=new L,th=new L,nh=new L,ih=new $e,sh=new $e,rh=new $e,nn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),yi.subVectors(n,t),Ql.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(yi),c=Xn.dot(Ql),l=yi.dot(yi),h=yi.dot(Ql),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),yi.subVectors(e,t),Xn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ir.subVectors(s,n),sr.subVectors(r,n),eh.subVectors(e,n);let c=ir.dot(eh),l=sr.dot(eh);if(c<=0&&l<=0)return t.copy(n);th.subVectors(e,s);let h=ir.dot(th),d=sr.dot(th);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ir,a);nh.subVectors(e,r);let f=ir.dot(nh),g=sr.dot(nh);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(sr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return lf.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(lf,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(ir,a).addScaledVector(sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ze=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),mo.subVectors(this.max,ea),rr.subVectors(e.a,ea),ar.subVectors(e.b,ea),or.subVectors(e.c,ea),Yi.subVectors(ar,rr),Ji.subVectors(or,ar),ys.subVectors(rr,or);let t=[0,-Yi.z,Yi.y,0,-Ji.z,Ji.y,0,-ys.z,ys.y,Yi.z,0,-Yi.x,Ji.z,0,-Ji.x,ys.z,0,-ys.x,-Yi.y,Yi.x,0,-Ji.y,Ji.x,0,-ys.y,ys.x,0];return!ah(t,rr,ar,or,mo)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,rr,ar,or,mo))?!1:(go.crossVectors(Yi,Ji),t=[go.x,go.y,go.z],ah(t,rr,ar,or,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,po=new Ze,rr=new L,ar=new L,or=new L,Yi=new L,Ji=new L,ys=new L,ea=new L,mo=new L,go=new L,vs=new L;function ah(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pt=new L,bo=new _e,Cg=0,ut=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pg=new Ze,ta=new L,oh=new L,Lt=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(oh)),this.expandByPoint(ta.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ig=0,Nn=new Ee,ch=new dt,cr=new L,Tn=new Ze,na=new Ze,Wt=new L,Ut=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Tn.min,na.min),Tn.expandByPoint(Wt),Wt.addVectors(Tn.max,na.max),Tn.expandByPoint(Wt)):(Tn.expandByPoint(na.min),Tn.expandByPoint(na.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(cr.fromBufferAttribute(e,l),Wt.add(cr)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new L,c[x]=new L;let l=new L,h=new L,d=new L,u=new _e,f=new _e,g=new _e,y=new L,m=new L;function p(x,T,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[x].add(y),o[T].add(y),o[R].add(y),c[x].add(m),c[T].add(m),c[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,T=_.length;x<T;++x){let R=_[x],C=R.start,P=R.count;for(let D=C,O=C+P;D<O;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new L,b=new L,v=new L,w=new L;function A(x){v.fromBufferAttribute(s,x),w.copy(v);let T=o[x];M.copy(T),M.sub(v.multiplyScalar(v.dot(T))).normalize(),b.crossVectors(w,T);let C=b.dot(c[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,C)}for(let x=0,T=_.length;x<T;++x){let R=_[x],C=R.start,P=R.count;for(let D=C,O=C+P;D<O;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ut(u,h,d)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new L,Ar=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lg=0,fn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Rs,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=qo,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new L,lh=new L,xo=new L,Zi=new L,hh=new L,_o=new L,uh=new L,On=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lh.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(lh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=Zi.dot(this.direction),c=-Zi.dot(xo),l=Zi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lh).addScaledVector(xo,u),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){hh.subVectors(t,e),_o.subVectors(n,e),uh.crossVectors(hh,_o);let a=this.direction.dot(uh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let c=o*this.direction.dot(_o.crossVectors(Zi,_o));if(c<0)return null;let l=o*this.direction.dot(hh.cross(Zi));if(l<0||c+l>a)return null;let h=-o*Zi.dot(uh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hf=new Ee,Ms=new On,yo=new Lt,uf=new L,vo=new L,Mo=new L,So=new L,dh=new L,wo=new L,df=new L,Ao=new L,lt=class extends dt{constructor(e=new Ut,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(dh.fromBufferAttribute(d,e),a?wo.addScaledVector(dh,h):wo.addScaledVector(dh.sub(t),h))}t.add(wo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(yo.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(yo,uf)===null||Ms.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,v=M;b<v;b+=3){let w=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);s=To(this,p,e,n,l,h,d,w,A,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=To(this,a,e,n,l,h,d,_,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,v=M;b<v;b+=3){let w=b,A=b+1,x=b+2;s=To(this,p,e,n,l,h,d,w,A,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=m,M=m+1,b=m+2;s=To(this,a,e,n,l,h,d,_,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Dg(i,e,t,n,s,r,a,o){let c;if(e.side===Yt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===bn,o),c===null)return null;Ao.copy(o),Ao.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ao);return l<t.near||l>t.far?null:{distance:l,point:Ao.clone(),object:i}}function To(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,vo),i.getVertexPosition(c,Mo),i.getVertexPosition(l,So);let h=Dg(i,e,t,n,vo,Mo,So,df);if(h){let d=new L;nn.getBarycoord(df,vo,Mo,So,d),s&&(h.uv=nn.getInterpolatedAttribute(s,o,c,l,d,new _e)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,c,l,d,new _e)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};nn.getNormal(vo,Mo,So,u.normal),h.face=u,h.barycoord=d}return h}var ia=new $e,ff=new $e,pf=new $e,Ng=new $e,mf=new Ee,Eo=new L,fh=new Lt,gf=new Ee,ph=new On,ma=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ze),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(s),e.ray.intersectsSphere(fh)!==!1&&(gf.copy(s).invert(),ph.copy(e.ray).applyMatrix4(gf),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ff.fromBufferAttribute(s.attributes.skinIndex,e),pf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ia.copy(t),t.set(0,0,0,0)):(ia.set(...t,1),t.set(0,0,0)),ia.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=pf.getComponent(r);if(a!==0){let o=ff.getComponent(r);mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ng.copy(ia).applyMatrix4(mf),a)}}return t.isVector4&&(t.w=ia.w),t.applyMatrix4(this.bindMatrixInverse)}},Tr=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ai=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=_t,h=_t,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new Ee,Ug=new Ee,ga=class i{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ug;bf.multiplyMatrices(o,t[r]),bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ai(t,e,e,an,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new Tr),this.bones.push(a),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ts=class extends ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lr=new Ee,xf=new Ee,Ro=[],_f=new Ze,Fg=new Ee,sa=new lt,ra=new Lt,ba=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),_f.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(_f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),ra.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),xf.multiplyMatrices(n,lr),sa.matrixWorld=xf,sa.raycast(e,Ro);for(let a=0,o=Ro.length;a<o;a++){let c=Ro[a];c.instanceId=r,c.object=this,t.push(c)}Ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(s*this.count),s,this.count,Fa,rn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mh=new L,Bg=new L,Og=new Ne,un=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mh.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Og.getNormalMatrix(e),s=this.coplanarPoint(mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Lt,kg=new _e(.5,.5),Co=new L,Ei=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],_=r[12],M=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-a,f-h,p-g,v-_).normalize(),s[1].setComponents(l+a,f+h,p+g,v+_).normalize(),s[2].setComponents(l+o,f+d,p+y,v+M).normalize(),s[3].setComponents(l-o,f-d,p-y,v-M).normalize(),n)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,f-u,p-m,v-b).normalize();else if(s[4].setComponents(l-c,f-u,p-m,v-b).normalize(),t===Fn)s[5].setComponents(l+c,f+u,p+m,v+b).normalize();else if(t===xr)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=kg.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yf=new Ee,ic=class i{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];yf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ei),n[s].setFromProjectionMatrix(yf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};function gh(i,e){return i-e}function zg(i,e){return i.z-e.z}function Vg(i,e){return e.z-i.z}var Ch=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},gn=new Ee,Gg=new Re(1,1,1),Hg=new Ei,Wg=new ic,Po=new Ze,ws=new Lt,aa=new L,vf=new L,qg=new L,bh=new Ch,tn=new lt,Io=[];function Xg(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function As(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var xa=class extends lt{constructor(e,t,n=t*2,s){super(new Ut,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new ai(t,e,e,an,rn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new ai(t,e,e,Ur,Pn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new ai(t,e,e,an,rn);n.colorSpace=ke.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),d=new ut(h,c,l);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,gn),this.getBoundingBoxAt(r,Po).applyMatrix4(gn),e.union(Po)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,gn),this.getBoundingSphereAt(r,ws).applyMatrix4(gn),e.union(ws)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(gh),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;gn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(Gg.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(gh),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let d=t.getAttribute(h),u=n.getAttribute(h);Xg(d,u,c);let f=d.itemSize;for(let g=d.count,y=l;g<y;g++){let m=c+g;for(let p=0;p<f;p++)u.setComponent(m,p,0)}u.needsUpdate=!0,u.addUpdateRange(c*f,l*f)}if(s){let h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,c+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,c);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let c=s[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=l,f=r.index,g=f.array,y=e-d;for(let m=h;m<h+u;m++)g[m]=g[m]+y;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=l,u=r.attributes;for(let f in u){let g=u[f],{array:y,itemSize:m}=g;y.copyWithin(e*m,h*m,(h+d)*m),g.addUpdateRange(e*m,d*m),g.needsUpdate=!0}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Ze,a=n.index,o=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;a&&(h=a.getX(h)),r.expandByPoint(aa.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Lt;this.getBoundingBoxAt(e,Po),Po.getCenter(r.center);let a=n.index,o=n.attributes.position,c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let d=l;a&&(d=a.getX(d)),aa.fromBufferAttribute(o,d),c=Math.max(c,r.center.distanceToSquared(aa))}r.radius=Math.sqrt(c),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(gh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);As(this._multiDrawCounts,s),As(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),As(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),As(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),As(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ut,this._initializeGeometry(r));let a=this.geometry;r.index&&As(r.index.array,a.index.array);for(let o in r.attributes)As(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;tn.material=this.material,tn.geometry.index=a.index,tn.geometry.attributes=a.attributes,tn.geometry.boundingBox===null&&(tn.geometry.boundingBox=new Ze),tn.geometry.boundingSphere===null&&(tn.geometry.boundingSphere=new Lt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;let l=n[o].geometryIndex,h=s[l];tn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,tn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,tn.geometry.boundingBox),this.getBoundingSphereAt(l,tn.geometry.boundingSphere),tn.raycast(e,Io);for(let d=0,u=Io.length;d<u;d++){let f=Io[d];f.object=this,f.batchId=o,t.push(f)}Io.length=0}tn.material=null,tn.geometry.index=null,tn.geometry.attributes={},tn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=1;r.wireframe&&(c=2,o=s.attributes.position.count>65535?4:2);let l=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,g=this._indirectTexture,y=g.image.data,m=n.isArrayCamera?Wg:Hg;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(gn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(gn,n.coordinateSystem,n.reversedDepth)));let p=0;if(this.sortObjects){gn.copy(this.matrixWorld).invert(),aa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gn),vf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(gn);for(let b=0,v=l.length;b<v;b++)if(l[b].visible&&l[b].active){let w=l[b].geometryIndex;this.getMatrixAt(b,gn),this.getBoundingSphereAt(w,ws).applyMatrix4(gn);let A=!1;if(f&&(A=!m.intersectsSphere(ws)),!A){let x=u[w],T=qg.subVectors(ws.center,aa).dot(vf);bh.push(x.start,x.count,T,b)}}let _=bh.list,M=this.customSort;M===null?_.sort(r.transparent?Vg:zg):M.call(this,_,n);for(let b=0,v=_.length;b<v;b++){let w=_[b];h[p]=w.start*o*c,d[p]=w.count*c,y[p]=w.index,p++}bh.reset()}else for(let _=0,M=l.length;_<M;_++)if(l[_].visible&&l[_].active){let b=l[_].geometryIndex,v=!1;if(f&&(this.getMatrixAt(_,gn),this.getBoundingSphereAt(b,ws).applyMatrix4(gn),v=!m.intersectsSphere(ws)),!v){let w=u[b];h[p]=w.start*o*c,d[p]=w.count*c,y[p]=_,p++}}g.needsUpdate=!0,this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}},Ri=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new L,rc=new L,Mf=new Ee,oa=new On,Lo=new Lt,xh=new L,Sf=new L,ci=class extends dt{constructor(e=new Ut,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new sn(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;Mf.copy(s).invert(),oa.copy(e.ray).applyMatrix4(Mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),_=h.getX(y+1),M=Do(this,e,oa,c,p,_,y);M&&t.push(M)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Do(this,e,oa,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=Do(this,e,oa,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Do(this,e,oa,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Do(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(sc.fromBufferAttribute(o,s),rc.fromBufferAttribute(o,r),t.distanceSqToSegment(sc,rc,xh,Sf)>n)return;xh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xh);if(!(l<e.near||l>e.far))return{distance:l,point:Sf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wf=new L,Af=new L,li=class extends ci{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wf.fromBufferAttribute(t,s),Af.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wf.distanceTo(Af);e.setAttribute("lineDistance",new sn(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ns=class extends ci{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tf=new Ee,Ph=new On,No=new Lt,Uo=new L,is=class extends dt{constructor(e=new Ut,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Tf.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let m=l.getX(g);Uo.fromBufferAttribute(d,m),Ef(Uo,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Uo.fromBufferAttribute(d,g),Ef(Uo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ef(i,e,t,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<t){let c=new L;Ph.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var _a=class extends qt{constructor(e=[],t=cs,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ci=class extends qt{constructor(e,t,n=Pn,s,r,a,o=_t,c=_t,l,h=oi,d=1){if(h!==oi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ac=class extends Ci{constructor(e,t=Pn,n=cs,s,r,a=_t,o=_t,c,l=oi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pi=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(d,2));function g(y,m,p,_,M,b,v,w,A,x,T){let R=b/A,C=v/x,P=b/2,D=v/2,O=w/2,N=A+1,H=x+1,q=0,Z=0,Q=new L;for(let se=0;se<H;se++){let le=se*C-D;for(let ge=0;ge<N;ge++){let Xe=ge*R-P;Q[y]=Xe*_,Q[m]=le*M,Q[p]=O,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ge/A),d.push(1-se/x),q+=1}}for(let se=0;se<x;se++)for(let le=0;le<A;le++){let ge=u+le+N*se,Xe=u+le+N*(se+1),pt=u+(le+1)+N*(se+1),Ge=u+(le+1)+N*se;c.push(ge,Xe,Ge),c.push(Xe,pt,Ge),Z+=6}o.addGroup(f,Z,T),f+=Z,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Fo=new L,Bo=new L,_h=new L,Oo=new nn,Rr=class extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(mr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:y,b:m,c:p}=Oo;if(y.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Oo.getNormal(_h),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let M=(_+1)%3,b=d[_],v=d[M],w=Oo[h[_]],A=Oo[h[M]],x=`${b}_${v}`,T=`${v}_${b}`;T in u&&u[T]?(_h.dot(u[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),u[T]=null):x in u||(u[x]={index0:l[_],index1:l[M],normal:_h.clone()})}}for(let g in u)if(u[g]){let{index0:y,index1:m}=u[g];Fo.fromBufferAttribute(o,y),Bo.fromBufferAttribute(o,m),f.push(Fo.x,Fo.y,Fo.z),f.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new sn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Ds=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*u-a;for(let M=0;M<l;M++){let b=M*d-r;g.push(b,-_,0),y.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let M=_+l*p,b=_+l*(p+1),v=_+1+l*(p+1),w=_+1+l*p;f.push(M,b,w),f.push(b,v,w)}this.setIndex(f),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(y,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var va=class extends fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Rf(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Rf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var vp={clone:ks,merge:on},Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oc=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var cc=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lc=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ko(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Zg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hc=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Th:r=e,o=2*t-n;break;case Eh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:a=e,c=2*n-t;break;case Eh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,_=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[l+v]+M*a[c+v]+b*a[d+v];return r}},uc=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},dc=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fc=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],p=f*u+g*2,_=d[p],M=d[p+1],b=e*u+g*2,v=h[b],w=h[b+1],A=(n-t)/(s-t),x,T,R,C,P;for(let D=0;D<8;D++){x=A*A,T=x*A,R=1-A,C=R*R,P=C*R;let N=P*t+3*C*A*_+3*R*x*v+T*s-n;if(Math.abs(N)<1e-10)break;let H=3*C*(_-t)+6*R*A*(v-_)+3*x*(s-v);if(Math.abs(H)<1e-10)break;A=A-N/H,A=Math.max(0,Math.min(1,A))}r[g]=P*y+3*C*A*M+3*R*x*w+T*m}return r}},_n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case wh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ng(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Is;var Ii=class extends _n{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ps;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ma.prototype.ValueTypeName="color";var Li=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="number";var pc=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Kt.slerpFlat(r,0,a,l-o,a,l,c);return r}},ui=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}};ui.prototype.ValueTypeName="quaternion";ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends _n{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Ps;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ni.prototype.ValueTypeName="vector";var Cr=class{constructor(e="",t=-1,n=[],s=op){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Qg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Jg(c);c=Cf(c,1,h),l=Cf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $g(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Ma;case"quaternion":return ui;case"bool":case"boolean":return Ii;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$g(i.type);if(i.times===void 0){let t=[],n=[];Zg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var mc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new mc,di=class{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},Pr=class extends di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,y=0,m=new ReadableStream({start(p){_();function _(){d.read().then(({done:M,value:b})=>{if(M)p.close();else{y+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let w=0,A=h.length;w<A;w++){let x=h[w];x.onProgress&&x.onProgress(v)}p.enqueue(b),_()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Ih(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ri.add(`file:${e}`,l);let h=wi[e];delete wi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hr=new WeakMap,gc=class extends di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ri.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=hr.get(a);d===void 0&&(d=[],hr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=_r("img");function c(){h(),t&&t(this);let d=hr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),ri.remove(`image:${e}`);let u=hr.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Sa=class extends di{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new gc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Us=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wa=class extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new Ee,If=new L,Lf=new L,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zo=new L,Vo=new Kt,si=new L,Ta=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,Vo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Vo,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zo,Vo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,Vo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new L,Df=new _e,Nf=new _e,It=class extends Ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Df,Nf),t.subVectors(Nf,Df)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lh=class extends Aa{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ea=class extends Us{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Dh=class extends Aa{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},Ra=class extends Us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends Ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nh=class extends Aa{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ui=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var vh=new WeakMap,Ca=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ri.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{vh.has(a)===!0?(s&&s(vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ri.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),vh.set(c,l),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=-90,dr=1,bc=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(ur,dr,e,t);s.layers=this.layers,this.add(s);let r=new It(ur,dr,e,t);r.layers=this.layers,this.add(r);let a=new It(ur,dr,e,t);a.layers=this.layers,this.add(a);let o=new It(ur,dr,e,t);o.layers=this.layers,this.add(o);let c=new It(ur,dr,e,t);c.layers=this.layers,this.add(c);let l=new It(ur,dr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xc=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var su="\\[\\]\\.:\\/",eb=new RegExp("["+su+"]","g"),ru="[^"+su+"]",tb="[^"+su.replace("\\.","")+"]",nb=/((?:WC+[\/:])*)/.source.replace("WC",ru),ib=/(WCOD+)?/.source.replace("WCOD",tb),sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),ab=new RegExp("^"+nb+ib+sb+rb+"$"),ob=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eb,"")}static parseTrackName(e){let t=ab.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ob.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=Uh;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BM=new Float32Array(1);var Uf=new Ee,Pa=class{constructor(e,t,n=0,s=1/0){this.ray=new On(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(Ff),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fh(e[s],this,n,t);return n.sort(Ff),n}};function Ff(i,e){return i.distance-e.distance}function Fh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fh(r[a],e,t,!0)}}var Ir=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ue(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ue(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uu=class uu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};uu.prototype.isMatrix2=!0;var Bh=uu;var Bf=new L,Go=new L,fr=new L,pr=new L,Mh=new L,cb=new L,lb=new L,Cn=class{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bf.subVectors(e,this.start),Go.subVectors(this.end,this.start);let n=Go.dot(Go);if(n===0)return 0;let r=Go.dot(Bf)/n;return t&&(r=Ue(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=cb,n=lb){let s=10000000000000001e-32,r,a,o=this.start,c=e.start,l=this.end,h=e.end;fr.subVectors(l,o),pr.subVectors(h,c),Mh.subVectors(o,c);let d=fr.dot(fr),u=pr.dot(pr),f=pr.dot(Mh);if(d<=s&&u<=s)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(d<=s)r=0,a=f/u,a=Ue(a,0,1);else{let g=fr.dot(Mh);if(u<=s)a=0,r=Ue(-g/d,0,1);else{let y=fr.dot(pr),m=d*u-y*y;m!==0?r=Ue((y*f-g*u)/m,0,1):r=0,a=(y*r+f)/u,a<0?(a=0,r=Ue(-g/d,0,1)):a>1&&(a=1,r=Ue((y-g)/d,0,1))}}return t.copy(o).addScaledVector(fr,r),n.copy(c).addScaledVector(pr,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Ia=class extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function au(i,e,t,n){let s=hb(n);switch(t){case $h:return i*e;case Fa:return i*e/s.components*s.byteLength;case Ur:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case Ba:return i*e*2/s.components*s.byteLength;case Qh:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case Oa:return i*e*4/s.components*s.byteLength;case ka:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Dc:case Uc:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Ha:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $c:case Qc:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wa:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(i){switch(i){case pn:case wc:return{byteLength:1,components:1};case Os:case Ac:case pi:return{byteLength:2,components:1};case Tc:case Ec:return{byteLength:2,components:4};case Pn:case Ua:case rn:return{byteLength:4,components:1};case Jh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function qp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fb(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:gb,alphamap_pars_fragment:bb,alphatest_fragment:xb,alphatest_pars_fragment:_b,aomap_fragment:yb,aomap_pars_fragment:vb,batching_pars_vertex:Mb,batching_vertex:Sb,begin_vertex:wb,beginnormal_vertex:Ab,bsdfs:Tb,iridescence_fragment:Eb,bumpmap_pars_fragment:Rb,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Lb,color_fragment:Db,color_pars_fragment:Nb,color_pars_vertex:Ub,color_vertex:Fb,common:Bb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:kb,displacementmap_pars_vertex:zb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Hb,colorspace_fragment:Wb,colorspace_pars_fragment:qb,envmap_fragment:Xb,envmap_common_pars_fragment:jb,envmap_pars_fragment:Kb,envmap_pars_vertex:Yb,envmap_physical_pars_fragment:a0,envmap_vertex:Jb,fog_vertex:Zb,fog_pars_vertex:$b,fog_fragment:Qb,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:c0,lights_phong_fragment:l0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:y0,map_fragment:v0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:w0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:T0,morphinstance_vertex:E0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:q0,dithering_fragment:X0,dithering_pars_fragment:j0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Z0,shadowmap_vertex:$0,shadowmask_pars_fragment:Q0,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:bx,cube_vert:xx,cube_frag:_x,depth_vert:yx,depth_frag:vx,distance_vert:Mx,distance_frag:Sx,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Tx,linedashed_frag:Ex,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Bx,meshphysical_vert:Ox,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Hx,shadow_vert:Wx,shadow_frag:qx,sprite_vert:Xx,sprite_frag:jx},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},gi={basic:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gi.physical={uniforms:on([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ol={r:0,b:0,g:0},Kx=new Ee,Xp=new Ne;Xp.set(-1,0,0,0,1,0,0,0,1);function Yx(i,e,t,n,s,r){let a=new Re(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(_){let M=!1,b=f(_);b===null?m(a,o):b&&b.isColor&&(m(b,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,M){let b=f(M);b&&(b.isCubeTexture||b.mapping===Na)?(l===void 0&&(l=new lt(new Pi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ks(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xp),l.material.toneMapped=ke.getTransfer(b.colorSpace)!==Je,(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new lt(new Ds(2,2),new Rn({name:"BackgroundMaterial",uniforms:ks(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ke.getTransfer(b.colorSpace)!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(ol,iu(i)),t.buffers.color.setClear(ol.r,ol.g,ol.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Jx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,P,D,O,N){let H=!1,q=d(C,O,D,P);r!==q&&(r=q,l(r.object)),H=f(C,O,D,N),H&&g(C,O,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,b(C,P,D,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,D,O){let N=O.wireframe===!0,H=n[P.id];H===void 0&&(H={},n[P.id]=H);let q=C.isInstancedMesh===!0?C.id:0,Z=H[q];Z===void 0&&(Z={},H[q]=Z);let Q=Z[D.id];Q===void 0&&(Q={},Z[D.id]=Q);let se=Q[N];return se===void 0&&(se=u(c()),Q[N]=se),se}function u(C){let P=[],D=[],O=[];for(let N=0;N<t;N++)P[N]=0,D[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:C,attributes:{},index:null}}function f(C,P,D,O){let N=r.attributes,H=P.attributes,q=0,Z=D.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let le=N[Q],ge=H[Q];if(ge===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(C,P,D,O){let N={},H=P.attributes,q=0,Z=D.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let le=H[Q];le===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));let ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),N[Q]=ge,q++}r.attributes=N,r.attributesNum=q,r.index=O}function y(){let C=r.newAttributes;for(let P=0,D=C.length;P<D;P++)C[P]=0}function m(C){p(C,0)}function p(C,P){let D=r.newAttributes,O=r.enabledAttributes,N=r.attributeDivisors;D[C]=1,O[C]===0&&(i.enableVertexAttribArray(C),O[C]=1),N[C]!==P&&(i.vertexAttribDivisor(C,P),N[C]=P)}function _(){let C=r.newAttributes,P=r.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==C[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function M(C,P,D,O,N,H,q){q===!0?i.vertexAttribIPointer(C,P,D,N,H):i.vertexAttribPointer(C,P,D,O,N,H)}function b(C,P,D,O){y();let N=O.attributes,H=D.getAttributes(),q=P.defaultAttributeValues;for(let Z in H){let Q=H[Z];if(Q.location>=0){let se=N[Z];if(se===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){let le=se.normalized,ge=se.itemSize,Xe=e.get(se);if(Xe===void 0)continue;let pt=Xe.buffer,Ge=Xe.type,Y=Xe.bytesPerElement,ne=Ge===i.INT||Ge===i.UNSIGNED_INT||se.gpuType===Ua;if(se.isInterleavedBufferAttribute){let ee=se.data,De=ee.stride,Fe=se.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)p(Q.location+Pe,ee.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)m(Q.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Pe=0;Pe<Q.locationSize;Pe++)M(Q.location+Pe,ge/Q.locationSize,Ge,le,De*Y,(Fe+ge/Q.locationSize*Pe)*Y,ne)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)p(Q.location+ee,se.meshPerAttribute);C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ee=0;ee<Q.locationSize;ee++)M(Q.location+ee,ge/Q.locationSize,Ge,le,ge*Y,ge/Q.locationSize*ee*Y,ne)}}else if(q!==void 0){let le=q[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Q.location,le);break;case 3:i.vertexAttrib3fv(Q.location,le);break;case 4:i.vertexAttrib4fv(Q.location,le);break;default:i.vertexAttrib1fv(Q.location,le)}}}}_()}function v(){T();for(let C in n){let P=n[C];for(let D in P){let O=P[D];for(let N in O){let H=O[N];for(let q in H)h(H[q].object),delete H[q];delete O[N]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let D in P){let O=P[D];for(let N in O){let H=O[N];for(let q in H)h(H[q].object),delete H[q];delete O[N]}}delete n[C.id]}function A(C){for(let P in n){let D=n[P];for(let O in D){let N=D[O];if(N[C.id]===void 0)continue;let H=N[C.id];for(let q in H)h(H[q].object),delete H[q];delete N[C.id]}}}function x(C){for(let P in n){let D=n[P],O=C.isInstancedMesh===!0?C.id:0,N=D[O];if(N!==void 0){for(let H in N){let q=N[H];for(let Z in q)h(q[Z].object),delete q[Z];delete N[H]}delete D[O],Object.keys(D).length===0&&delete n[P]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function Zx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $x(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==rn&&!x)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:w}}function Qx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,M=_*4,b=p.clippingState||null;c.value=b,b=h(g,u,M,f);for(let v=0;v!==M;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==y;++M,b+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var hs=4,Sp=[.125,.215,.35,.446,.526,.582],zs=20,e_=256,Xa=new ss,wp=new Re,du=null,fu=0,pu=0,mu=!1,t_=new L,ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=t_}=r;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:pi,format:an,colorSpace:dn,depthBuffer:!1},s=Ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n_(r)),this._blurMaterial=s_(r,e,t),this._ggxMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new lt(new Ut,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,s,r){let c=new It(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wp),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Pi,new kn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(wp),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let v=this._cubeSize;Br(s,b*v,M>2?v:0,v,v),d.setRenderTarget(s),p&&d.render(y,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cs||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-hs?n-g+hs:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Br(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Xa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Br(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Xa)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):zs;m>zs&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],_=0;for(let A=0;A<zs;++A){let x=A/y,T=Math.exp(-x*x/2);p.push(T),A===0?_+=T:A<m&&(_+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;let b=this._sizeLods[s],v=3*b*(s>M-hs?s-M+hs:0),w=4*(this._cubeSize-b);Br(t,v,w,3*b,2*b),c.setRenderTarget(t),c.render(d,Xa)}};function n_(i){let e=[],t=[],n=[],s=i,r=i-hs+1+Sp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-hs?c=Sp[a-i+hs-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,x=w>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];_.set(T,y*g*w),M.set(u,m*g*w);let R=[w,w,w,w,w,w];b.set(R,p*g*w)}let v=new Ut;v.setAttribute("position",new ut(_,y)),v.setAttribute("uv",new ut(M,m)),v.setAttribute("faceIndex",new ut(b,p)),n.push(new lt(v,null)),s>hs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ap(i,e,t){let n=new En(i,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function i_(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function s_(i,e,t){let n=new Float32Array(zs),s=new L(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Tp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ep(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var hl=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pi(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:fi});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=wt),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function r_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===vc||f===Mc)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new hl(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===vc||f===Mc,y=f===cs||f===Fs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||y&&_&&c(_)?(n===null&&(n=new ll(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===vc?u.mapping=cs:f===Mc&&(u.mapping=Fs),u}function c(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function a_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function o_(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let _=f.array;y=f.version;for(let M=0,b=_.length;M<b;M+=3){let v=_[M+0],w=_[M+1],A=_[M+2];u.push(v,w,w,A,A,v)}}else{let _=g.array;y=g.version;for(let M=0,b=_.length/3-1;M<b;M+=3){let v=M+0,w=M+1,A=M+2;u.push(v,w,w,A,A,v)}}let m=new(g.count>=65535?pa:fa)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function c_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function l_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function h_(i,e,t){let n=new WeakMap,s=new $e;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let b=o.attributes.position.count*M,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*v*4*d),A=new ua(w,b,v,d);A.type=rn,A.needsUpdate=!0;let x=M*4;for(let R=0;R<d;R++){let C=m[R],P=p[R],D=_[R],O=b*v*4*R;for(let N=0;N<C.count;N++){let H=N*x;f===!0&&(s.fromBufferAttribute(C,N),w[O+H+0]=s.x,w[O+H+1]=s.y,w[O+H+2]=s.z,w[O+H+3]=0),g===!0&&(s.fromBufferAttribute(P,N),w[O+H+4]=s.x,w[O+H+5]=s.y,w[O+H+6]=s.z,w[O+H+7]=0),y===!0&&(s.fromBufferAttribute(D,N),w[O+H+8]=s.x,w[O+H+9]=s.y,w[O+H+10]=s.z,w[O+H+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new _e(b,v)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function u_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var d_={[Hh]:"LINEAR_TONE_MAPPING",[Wh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[jh]:"AGX_TONE_MAPPING",[Kh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function f_(i,e,t,n,s,r){let a=new En(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ci(e,t):void 0}),o=new En(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ut;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));let l=new oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new lt(c,l),d=new ss(-1,1,1,-1,0,1),u=null,f=null,g=!1,y,m=null,p=[],_=!1;this.setSize=function(M,b){a.setSize(M,b),o.setSize(M,b);for(let v=0;v<p.length;v++){let w=p[v];w.setSize&&w.setSize(M,b)}},this.setEffects=function(M){p=M,_=p.length>0&&p[0].isRenderPass===!0;let b=a.width,v=a.height;for(let w=0;w<p.length;w++){let A=p[w];A.setSize&&A.setSize(b,v)}},this.begin=function(M,b){if(g||M.toneMapping===Zn&&p.length===0)return!1;if(m=b,b!==null){let v=b.width,w=b.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return _===!1&&M.setRenderTarget(a),y=M.toneMapping,M.toneMapping=Zn,!0},this.hasRenderPass=function(){return _},this.end=function(M,b){M.toneMapping=y,g=!0;let v=a,w=o;for(let A=0;A<p.length;A++){let x=p[A];if(x.enabled!==!1&&(x.render(M,w,v,b),x.needsSwap!==!1)){let T=v;v=w,w=T}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,l.defines={},ke.getTransfer(u)===Je&&(l.defines.SRGB_TRANSFER="");let A=d_[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(m),M.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}var jp=new qt,xu=new Ci(1,1),Kp=new ua,Yp=new nc,Jp=new _a,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),Bt(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),Bt(t,n)}}function y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Pp.set(n),i.uniformMatrix4fv(this.addr,!1,Pp),Bt(t,n)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function A_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=t.isReversedDepthBuffer()?al:rl,r=xu):r=jp,t.setTexture2D(e||r,s)}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yp,s)}function I_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jp,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kp,s)}function D_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return b_;case 35674:return x_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return v_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return T_;case 36295:return E_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}function N_(i,e){i.uniform1fv(this.addr,e)}function U_(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function F_(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function B_(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function O_(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function k_(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z_(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V_(i,e){i.uniform1iv(this.addr,e)}function G_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function W_(i,e){i.uniform4iv(this.addr,e)}function q_(i,e){i.uniform1uiv(this.addr,e)}function X_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function K_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xu:a=jp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function J_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yp,r[a])}function Z_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Jp,r[a])}function $_(i,e,t){let n=this.cache,s=e.length,r=fl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kp,r[a])}function Q_(i){switch(i){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return B_;case 35674:return O_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return V_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return W_;case 5125:return q_;case 36294:return X_;case 36295:return j_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return $_}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}},yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q_(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function Dp(i,e){i.seq.push(e),i.map[e.id]=e}function ey(i,e,t){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),a=gu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dp(t,l===void 0?new _u(o,i,e):new yu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new vu(o),Dp(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ey(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ty=37297,ny=0;function iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Up=new Ne;function sy(i){ke._getMatrix(Up,ke.workingColorSpace,i);let e=`mat3( ${Up.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iy(i.getShaderSource(e),o)}else return r}function ry(i,e){let t=sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ay={[Hh]:"Linear",[Wh]:"Reinhard",[qh]:"Cineon",[Da]:"ACESFilmic",[jh]:"AgX",[Kh]:"Neutral",[Xh]:"Custom"};function oy(i,e){let t=ay[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cl=new L;function cy(){ke.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function hy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ka(i){return i!==""}function Bp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(i){return i.replace(dy,py)}var fy=new Map;function py(i,e){let t=ze[e];if(t===void 0){let n=fy.get(e);if(n!==void 0)t=ze[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(i){return i.replace(my,gy)}function gy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var by={[La]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function xy(i){return by[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _y={[cs]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function yy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_y[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vy={[Fs]:"ENVMAP_MODE_REFRACTION"};function My(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sy={[Gh]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function wy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sy[i.combine]||"ENVMAP_BLENDING_NONE"}function Ay(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ty(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=xy(t),l=yy(t),h=My(t),d=wy(t),u=Ay(t),f=ly(t),g=hy(r),y=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Zn?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),a=Mu(a),a=Bp(a,t),a=Op(a,t),o=Mu(o),o=Bp(o,t),o=Op(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+a,b=_+p+o,v=Np(s,s.VERTEX_SHADER,M),w=Np(s,s.FRAGMENT_SHADER,b);s.attachShader(y,v),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",N=P.trim(),H=D.trim(),q=O.trim(),Z=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,w);else{let se=Fp(s,v,"vertex"),le=Fp(s,w,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+se+`
`+le)}else N!==""?Me("WebGLProgram: Program Info Log:",N):(H===""||q==="")&&(Q=!1);Q&&(C.diagnostics={runnable:Z,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(v),s.deleteShader(w),x=new Or(s,y),T=uy(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,ty)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=w,this}var Ey=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=Ey++,this.code=e,this.usedTimes=0}};function Ry(i){return i===Fi||i===Ha||i===Wa}function Cy(i,e,t,n,s,r){let a=new Mr,o=new Su,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,R,C,P,D){let O=C.fog,N=P.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||H,q),Q=Z&&Z.mapping===Na?Z.image.height:null,se=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Me("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ge=le!==void 0?le.length:0,Xe=0;N.morphAttributes.position!==void 0&&(Xe=1),N.morphAttributes.normal!==void 0&&(Xe=2),N.morphAttributes.color!==void 0&&(Xe=3);let pt,Ge,Y,ne;if(se){let ye=gi[se];pt=ye.vertexShader,Ge=ye.fragmentShader}else{pt=x.vertexShader,Ge=x.fragmentShader;let ye=o.getVertexShaderStage(x),bt=o.getFragmentShaderStage(x);o.update(x,ye,bt),Y=ye.id,ne=bt.id}let ee=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=P.isInstancedMesh===!0,Pe=P.isBatchedMesh===!0,ht=!!x.map,qe=!!x.matcap,it=!!Z,Ye=!!x.aoMap,je=!!x.lightMap,Rt=!!x.bumpMap&&x.wireframe===!1,Nt=!!x.normalMap,Ht=!!x.displacementMap,jt=!!x.emissiveMap,gt=!!x.metalnessMap,Ct=!!x.roughnessMap,F=x.anisotropy>0,mn=x.clearcoat>0,Qe=x.dispersion>0,I=x.iridescence>0,S=x.sheen>0,k=x.transmission>0,G=F&&!!x.anisotropyMap,X=mn&&!!x.clearcoatMap,te=mn&&!!x.clearcoatNormalMap,re=mn&&!!x.clearcoatRoughnessMap,j=I&&!!x.iridescenceMap,J=I&&!!x.iridescenceThicknessMap,ae=S&&!!x.sheenColorMap,we=S&&!!x.sheenRoughnessMap,he=!!x.specularMap,oe=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Ie=k&&!!x.transmissionMap,Be=k&&!!x.thicknessMap,U=!!x.gradientMap,ie=!!x.alphaMap,K=x.alphaTest>0,ce=!!x.alphaHash,me=!!x.extensions,$=Zn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($=i.toneMapping);let Se={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:pt,fragmentShader:Ge,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&P._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&P.instanceColor!==null,instancingMorph:Fe&&P.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:qe,envMap:it,envMapMode:it&&Z.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:je,bumpMap:Rt,normalMap:Nt,displacementMap:Ht,emissiveMap:jt,normalMapObjectSpace:Nt&&x.normalMapType===lp,normalMapTangentSpace:Nt&&x.normalMapType===sl,packedNormalMap:Nt&&x.normalMapType===sl&&Ry(x.normalMap.format),metalnessMap:gt,roughnessMap:Ct,anisotropy:F,anisotropyMap:G,clearcoat:mn,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:re,dispersion:Qe,iridescence:I,iridescenceMap:j,iridescenceThicknessMap:J,sheen:S,sheenColorMap:ae,sheenRoughnessMap:we,specularMap:he,specularColorMap:oe,specularIntensityMap:Ce,transmission:k,transmissionMap:Ie,thicknessMap:Be,gradientMap:U,opaque:x.transparent===!1&&x.blending===Rs&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:K,alphaHash:ce,combine:x.combine,mapUv:ht&&g(x.map.channel),aoMapUv:Ye&&g(x.aoMap.channel),lightMapUv:je&&g(x.lightMap.channel),bumpMapUv:Rt&&g(x.bumpMap.channel),normalMapUv:Nt&&g(x.normalMap.channel),displacementMapUv:Ht&&g(x.displacementMap.channel),emissiveMapUv:jt&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:Ct&&g(x.roughnessMap.channel),anisotropyMapUv:G&&g(x.anisotropyMap.channel),clearcoatMapUv:X&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:oe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ce&&g(x.specularIntensityMap.channel),transmissionMapUv:Ie&&g(x.transmissionMap.channel),thicknessMapUv:Be&&g(x.thicknessMap.channel),alphaMapUv:ie&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Nt||F),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(ht||ie),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Nt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&ke.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:jt&&x.emissiveMap.isVideoTexture===!0&&ke.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),_(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let T=f[x.type],R;if(T){let C=gi[T];R=vp.clone(C.uniforms)}else R=x.uniforms;return R}function b(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Ty(i,T,x,s),l.push(R),h.set(T,R)),R}function v(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:A}}function Py(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=a(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function c(u,f,g,y,m,p){let _=o(u,f,g,y,m,p);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):t.push(_)}function l(u,f,g,y,m,p){let _=o(u,f,g,y,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f,g){t.length>1&&t.sort(u||Iy),n.length>1&&n.sort(f||Vp),s.length>1&&s.sort(f||Vp),g&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ly(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gp,i.set(n,[a])):s>=r.length?(a=new Gp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function Fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function By(i){let e=new Dy,t=Ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ee,a=new Ee;function o(l){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,_=0,M=0,b=0,v=0,w=0,A=0;l.sort(Fy);for(let T=0,R=l.length;T<R;T++){let C=l[T],P=C.color,D=C.intensity,O=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Fi?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=P.r*D,d+=P.g*D,u+=P.b*D;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],D);A++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,Z=t.get(C);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=H,f++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(P).multiplyScalar(D),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[y]=H;let q=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,q.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=q.matrix,C.castShadow){let Z=t.get(C);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=N,b++}y++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(P).multiplyScalar(D),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let q=C.shadow,Z=t.get(C);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=H,g++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(D),H.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==_||x.numPointShadows!==M||x.numSpotShadows!==b||x.numSpotMaps!==v||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=_,x.numPointShadows=M,x.numSpotShadows=b,x.numSpotMaps=v,x.numLightProbes=A,n.version=Uy++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let M=l[p];if(M.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(M.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function Hp(i){let e=new By(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Oy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hp(i),e.set(s,[o])):r>=a.length?(o=new Hp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vy=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Gy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Wp=new Ee,ja=new L,bu=new L;function Hy(i,e,t){let n=new Ei,s=new _e,r=new _e,a=new $e,o=new cc,c=new lc,l={},h=t.maxTextureSize,d={[bn]:Yt,[Yt]:bn,[yn]:yn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ky,fragmentShader:zy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yc&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=La);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=p!==this.type;D&&A.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(N=>N.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,N=w.length;O<N;O++){let H=w[O],q=H.shadow;if(q===void 0){Me("WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Z=q.getFrameExtents();s.multiply(Z),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,q.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Q,q.map===null||D===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Lr){if(H.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new En(s.x,s.y,{format:Fi,type:pi,minFilter:wt,magFilter:wt,generateMipmaps:!1}),q.map.texture.name=H.name+".shadowMap",q.map.depthTexture=new Ci(s.x,s.y,rn),q.map.depthTexture.name=H.name+".shadowMapDepth",q.map.depthTexture.format=oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_t,q.map.depthTexture.magFilter=_t}else H.isPointLight?(q.map=new hl(s.x),q.map.depthTexture=new ac(s.x,Pn)):(q.map=new En(s.x,s.y),q.map.depthTexture=new Ci(s.x,s.y,Pn)),q.map.depthTexture.name=H.name+".shadowMap",q.map.depthTexture.format=oi,this.type===La?(q.map.depthTexture.compareFunction=Q?al:rl,q.map.depthTexture.minFilter=wt,q.map.depthTexture.magFilter=wt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=_t,q.map.depthTexture.magFilter=_t);q.camera.updateProjectionMatrix()}let se=q.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<se;le++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,le),i.clear();else{le===0&&(i.setRenderTarget(q.map),i.clear());let ge=q.getViewport(le);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),P.viewport(a)}if(H.isPointLight){let ge=q.camera,Xe=q.matrix,pt=H.distance||ge.far;pt!==ge.far&&(ge.far=pt,ge.updateProjectionMatrix()),ja.setFromMatrixPosition(H.matrixWorld),ge.position.copy(ja),bu.copy(ge.position),bu.add(Vy[le]),ge.up.copy(Gy[le]),ge.lookAt(bu),ge.updateMatrixWorld(),Xe.makeTranslation(-ja.x,-ja.y,-ja.z),Wp.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wp,ge.coordinateSystem,ge.reversedDepth)}else q.updateMatrices(H);n=q.getFrustum(),b(A,x,q.camera,H,this.type)}q.isPointLightShadow!==!0&&this.type===Lr&&_(q,x),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,C)};function _(w,A){let x=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(s.x,s.y,{format:Fi,type:pi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,f,y,null)}function M(w,A,x,T){let R=null,C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=R.uuid,D=A.uuid,O=l[P];O===void 0&&(O={},l[P]=O);let N=O[D];N===void 0&&(N=R.clone(),O[D]=N,A.addEventListener("dispose",v)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Lr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=x}return R}function b(w,A,x,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Lr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let D=e.update(w),O=w.material;if(Array.isArray(O)){let N=D.groups;for(let H=0,q=N.length;H<q;H++){let Z=N[H],Q=O[Z.materialIndex];if(Q&&Q.visible){let se=M(w,Q,T,R);w.onBeforeShadow(i,w,A,x,D,se,Z),i.renderBufferDirect(x,null,D,se,w,Z),w.onAfterShadow(i,w,A,x,D,se,Z)}}}else if(O.visible){let N=M(w,O,T,R);w.onBeforeShadow(i,w,A,x,D,N,null),i.renderBufferDirect(x,null,D,N,w,null),w.onAfterShadow(i,w,A,x,D,N,null)}}let P=w.children;for(let D=0,O=P.length;D<O;D++)b(P[D],A,x,T,R)}function v(w){w.target.removeEventListener("dispose",v);for(let x in l){let T=l[x],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Wy(i,e){function t(){let U=!1,ie=new $e,K=null,ce=new $e(0,0,0,0);return{setMask:function(me){K!==me&&!U&&(i.colorMask(me,me,me,me),K=me)},setLocked:function(me){U=me},setClear:function(me,$,Se,ye,bt){bt===!0&&(me*=ye,$*=ye,Se*=ye),ie.set(me,$,Se,ye),ce.equals(ie)===!1&&(i.clearColor(me,$,Se,ye),ce.copy(ie))},reset:function(){U=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,K=null,ce=null,me=null;return{setReversed:function($){if(ie!==$){let Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=$;let ye=me;me=null,this.setClear(ye)}},getReversed:function(){return ie},setTest:function($){$?ee(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function($){K!==$&&!U&&(i.depthMask($),K=$)},setFunc:function($){if(ie&&($=_p[$]),ce!==$){switch($){case Xo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=$}},setLocked:function($){U=$},setClear:function($){me!==$&&(me=$,ie&&($=1-$),i.clearDepth($))},reset:function(){U=!1,K=null,ce=null,me=null,ie=!1}}}function s(){let U=!1,ie=null,K=null,ce=null,me=null,$=null,Se=null,ye=null,bt=null;return{setTest:function(ot){U||(ot?ee(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ot){ie!==ot&&!U&&(i.stencilMask(ot),ie=ot)},setFunc:function(ot,ti,ni){(K!==ot||ce!==ti||me!==ni)&&(i.stencilFunc(ot,ti,ni),K=ot,ce=ti,me=ni)},setOp:function(ot,ti,ni){($!==ot||Se!==ti||ye!==ni)&&(i.stencilOp(ot,ti,ni),$=ot,Se=ti,ye=ni)},setLocked:function(ot){U=ot},setClear:function(ot){bt!==ot&&(i.clearStencil(ot),bt=ot)},reset:function(){U=!1,ie=null,K=null,ce=null,me=null,$=null,Se=null,ye=null,bt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,_=null,M=null,b=null,v=null,w=null,A=null,x=new Re(0,0,0),T=0,R=!1,C=null,P=null,D=null,O=null,N=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Z=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=Z>=2);let se=null,le={},ge=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),pt=new $e().fromArray(ge),Ge=new $e().fromArray(Xe);function Y(U,ie,K,ce){let me=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<K;Se++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ie+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return $}let ne={};ne[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Cs),Rt(!1),Nt(Oh),ee(i.CULL_FACE),Ye(fi);function ee(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Fe(U,ie){return u[U]!==ie?(i.bindFramebuffer(U,ie),u[U]=ie,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Pe(U,ie){let K=g,ce=!1;if(U){K=f.get(ie),K===void 0&&(K=[],f.set(ie,K));let me=U.textures;if(K.length!==me.length||K[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Se=me.length;$<Se;$++)K[$]=i.COLOR_ATTACHMENT0+$;K.length=me.length,ce=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ce=!0);ce&&i.drawBuffers(K)}function ht(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let qe={[Qi]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};qe[Hf]=i.MIN,qe[Wf]=i.MAX;let it={[qf]:i.ZERO,[Xf]:i.ONE,[jf]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Zf]:i.DST_COLOR,[Yf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,ie,K,ce,me,$,Se,ye,bt,ot){if(U===fi){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),U!==zf){if(U!==p||ot!==R){if((_!==Qi||v!==Qi)&&(i.blendEquation(i.FUNC_ADD),_=Qi,v=Qi),ot)switch(U){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",U);break}M=null,b=null,w=null,A=null,x.set(0,0,0),T=0,p=U,R=ot}return}me=me||ie,$=$||K,Se=Se||ce,(ie!==_||me!==v)&&(i.blendEquationSeparate(qe[ie],qe[me]),_=ie,v=me),(K!==M||ce!==b||$!==w||Se!==A)&&(i.blendFuncSeparate(it[K],it[ce],it[$],it[Se]),M=K,b=ce,w=$,A=Se),(ye.equals(x)===!1||bt!==T)&&(i.blendColor(ye.r,ye.g,ye.b,bt),x.copy(ye),T=bt),p=U,R=!1}function je(U,ie){U.side===yn?De(i.CULL_FACE):ee(i.CULL_FACE);let K=U.side===Yt;ie&&(K=!K),Rt(K),U.blending===Rs&&U.transparent===!1?Ye(fi):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ce=U.stencilWrite;o.setTest(ce),ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),jt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(U){C!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),C=U)}function Nt(U){U!==Of?(ee(i.CULL_FACE),U!==P&&(U===Oh?i.cullFace(i.BACK):U===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),P=U}function Ht(U){U!==D&&(q&&i.lineWidth(U),D=U)}function jt(U,ie,K){U?(ee(i.POLYGON_OFFSET_FILL),(O!==ie||N!==K)&&(O=ie,N=K,a.getReversed()&&(ie=-ie),i.polygonOffset(ie,K))):De(i.POLYGON_OFFSET_FILL)}function gt(U){U?ee(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function Ct(U){U===void 0&&(U=i.TEXTURE0+H-1),se!==U&&(i.activeTexture(U),se=U)}function F(U,ie,K){K===void 0&&(se===null?K=i.TEXTURE0+H-1:K=se);let ce=le[K];ce===void 0&&(ce={type:void 0,texture:void 0},le[K]=ce),(ce.type!==U||ce.texture!==ie)&&(se!==K&&(i.activeTexture(K),se=K),i.bindTexture(U,ie||ne[U]),ce.type=U,ce.texture=ie)}function mn(){let U=le[se];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function S(){try{i.texSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function te(){try{i.texStorage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function re(){try{i.texStorage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function j(){try{i.texImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function ae(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function we(U,ie){d[U]!==ie&&(i.pixelStorei(U,ie),d[U]=ie)}function he(U){pt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function oe(U){Ge.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function Ce(U,ie){let K=l.get(ie);K===void 0&&(K=new WeakMap,l.set(ie,K));let ce=K.get(U);ce===void 0&&(ce=i.getUniformBlockIndex(ie,U.name),K.set(U,ce))}function Ie(U,ie){let ce=l.get(ie).get(U);c.get(ie)!==ce&&(i.uniformBlockBinding(ie,ce,U.__bindingPointIndex),c.set(ie,ce))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},se=null,le={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,_=null,M=null,b=null,v=null,w=null,A=null,x=new Re(0,0,0),T=0,R=!1,C=null,P=null,D=null,O=null,N=null,pt.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:De,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:ht,setBlending:Ye,setMaterial:je,setFlipSided:Rt,setCullFace:Nt,setLineWidth:Ht,setPolygonOffset:jt,setScissorTest:gt,activeTexture:Ct,bindTexture:F,unbindTexture:mn,compressedTexImage2D:Qe,compressedTexImage3D:I,texImage2D:j,texImage3D:J,pixelStorei:we,getParameter:ae,updateUBOMapping:Ce,uniformBlockBinding:Ie,texStorage2D:te,texStorage3D:re,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:he,viewport:oe,reset:Be}}function qy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,S){return g?new OffscreenCanvas(I,S):_r("canvas")}function m(I,S,k){let G=1,X=Qe(I);if((X.width>k||X.height>k)&&(G=k/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let te=Math.floor(G*X.width),re=Math.floor(G*X.height);u===void 0&&(u=y(te,re));let j=S?y(te,re):u;return j.width=te,j.height=re,j.getContext("2d").drawImage(I,0,0,te,re),Me("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+te+"x"+re+")."),j}else return"data"in I&&Me("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),I;return I}function p(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,S,k,G,X,te=!1){if(I!==null){if(i[I]!==void 0)return i[I];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let re;G&&(re=e.get("EXT_texture_norm16"),re||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8),k===i.UNSIGNED_SHORT&&re&&(j=re.R16_EXT),k===i.SHORT&&re&&(j=re.R16_SNORM_EXT)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),S===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8),k===i.UNSIGNED_SHORT&&re&&(j=re.RG16_EXT),k===i.SHORT&&re&&(j=re.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_SHORT&&re&&(j=re.RGB16_EXT),k===i.SHORT&&re&&(j=re.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),S===i.RGBA){let J=te?la:ke.getTransfer(X);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=J===Je?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&re&&(j=re.RGBA16_EXT),k===i.SHORT&&re&&(j=re.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(I,S){let k;return I?S===null||S===Pn||S===Nr?k=i.DEPTH24_STENCIL8:S===rn?k=i.DEPTH32F_STENCIL8:S===Os&&(k=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pn||S===Nr?k=i.DEPTH_COMPONENT24:S===rn?k=i.DEPTH_COMPONENT32F:S===Os&&(k=i.DEPTH_COMPONENT16),k}function w(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==_t&&I.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function x(I){let S=I.target;S.removeEventListener("dispose",x),C(S)}function T(I){let S=n.get(I);if(S.__webglInit===void 0)return;let k=I.source,G=f.get(k);if(G){let X=G[S.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(I),Object.keys(G).length===0&&f.delete(k)}n.remove(I)}function R(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let k=I.source,G=f.get(k);delete G[S.__cacheKey],a.memory.textures--}function C(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let X=0;X<S.__webglFramebuffer[G].length;X++)i.deleteFramebuffer(S.__webglFramebuffer[G][X]);else i.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)i.deleteFramebuffer(S.__webglFramebuffer[G]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=I.textures;for(let G=0,X=k.length;G<X;G++){let te=n.get(k[G]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(k[G])}n.remove(I)}let P=0;function D(){P=0}function O(){return P}function N(I){P=I}function H(){let I=P;return I>=s.maxTextures&&Me("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function q(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Z(I,S){let k=n.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let G=I.image;if(G===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,I,S);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function Q(I,S){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){De(k,I,S);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function se(I,S){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){De(k,I,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function le(I,S){let k=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Fe(k,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let ge={[es]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[br]:i.MIRRORED_REPEAT},Xe={[_t]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},pt={[hp]:i.NEVER,[mp]:i.ALWAYS,[up]:i.LESS,[rl]:i.LEQUAL,[dp]:i.EQUAL,[al]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function Ge(I,S){if(S.type===rn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wt||S.magFilter===Dr||S.magFilter===Bs||S.magFilter===$n||S.minFilter===wt||S.minFilter===Dr||S.minFilter===Bs||S.minFilter===$n)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ge[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ge[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ge[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Xe[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Xe[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_t||S.minFilter!==Bs&&S.minFilter!==$n||S.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Y(I,S){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let G=S.source,X=f.get(G);X===void 0&&(X={},f.set(G,X));let te=q(S);if(te!==I.__cacheKey){X[te]===void 0&&(X[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),X[te].usedTimes++;let re=X[I.__cacheKey];re!==void 0&&(X[I.__cacheKey].usedTimes--,re.usedTimes===0&&R(S)),I.__cacheKey=te,I.__webglTexture=X[te].texture}return k}function ne(I,S,k){return Math.floor(Math.floor(I/k)/S)}function ee(I,S,k,G){let te=I.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,G,S.data);else{te.sort((we,he)=>we.start-he.start);let re=0;for(let we=1;we<te.length;we++){let he=te[re],oe=te[we],Ce=he.start+he.count,Ie=ne(oe.start,S.width,4),Be=ne(he.start,S.width,4);oe.start<=Ce+1&&Ie===Be&&ne(oe.start+oe.count-1,S.width,4)===Ie?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,te[re]=oe)}te.length=re+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let we=0,he=te.length;we<he;we++){let oe=te[we],Ce=Math.floor(oe.start/4),Ie=Math.ceil(oe.count/4),Be=Ce%S.width,U=Math.floor(Ce/S.width),ie=Ie,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Be,U,ie,K,k,G,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function De(I,S,k){let G=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=i.TEXTURE_3D);let X=Y(I,S),te=S.source;t.bindTexture(G,I.__webglTexture,i.TEXTURE0+k);let re=n.get(te);if(te.version!==re.__version||X===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let K=ke.getPrimaries(ke.workingColorSpace),ce=S.colorSpace===Bi?null:ke.getPrimaries(S.colorSpace),me=S.colorSpace===Bi||K===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,s.maxTextureSize);J=mn(S,J);let ae=r.convert(S.format,S.colorSpace),we=r.convert(S.type),he=b(S.internalFormat,ae,we,S.normalized,S.colorSpace,S.isVideoTexture);Ge(G,S);let oe,Ce=S.mipmaps,Ie=S.isVideoTexture!==!0,Be=re.__version===void 0||X===!0,U=te.dataReady,ie=w(S,J);if(S.isDepthTexture)he=v(S.format===ls,S.type),Be&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,he,J.width,J.height,0,ae,we,null));else if(S.isDataTexture)if(Ce.length>0){Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,ie,he,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,we,oe.data):t.texImage2D(i.TEXTURE_2D,K,he,oe.width,oe.height,0,ae,we,oe.data);S.generateMipmaps=!1}else Ie?(Be&&t.texStorage2D(i.TEXTURE_2D,ie,he,J.width,J.height),U&&ee(S,J,ae,we)):t.texImage2D(i.TEXTURE_2D,0,he,J.width,J.height,0,ae,we,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,he,Ce[0].width,Ce[0].height,J.depth);for(let K=0,ce=Ce.length;K<ce;K++)if(oe=Ce[K],S.format!==an)if(ae!==null)if(Ie){if(U)if(S.layerUpdates.size>0){let me=au(oe.width,oe.height,S.format,S.type);for(let $ of S.layerUpdates){let Se=oe.data.subarray($*me/oe.data.BYTES_PER_ELEMENT,($+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,$,oe.width,oe.height,1,ae,Se)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,he,oe.width,oe.height,J.depth,0,oe.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,J.depth,ae,we,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,he,oe.width,oe.height,J.depth,0,ae,we,oe.data)}else{Ie&&Be&&t.texStorage2D(i.TEXTURE_2D,ie,he,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],S.format!==an?ae!==null?Ie?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,he,oe.width,oe.height,0,oe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,we,oe.data):t.texImage2D(i.TEXTURE_2D,K,he,oe.width,oe.height,0,ae,we,oe.data)}else if(S.isDataArrayTexture)if(Ie){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,he,J.width,J.height,J.depth),U)if(S.layerUpdates.size>0){let K=au(J.width,J.height,S.format,S.type);for(let ce of S.layerUpdates){let me=J.data.subarray(ce*K/J.data.BYTES_PER_ELEMENT,(ce+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,J.width,J.height,1,ae,we,me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ae,we,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,ae,we,J.data);else if(S.isData3DTexture)Ie?(Be&&t.texStorage3D(i.TEXTURE_3D,ie,he,J.width,J.height,J.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ae,we,J.data)):t.texImage3D(i.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,ae,we,J.data);else if(S.isFramebufferTexture){if(Be)if(Ie)t.texStorage2D(i.TEXTURE_2D,ie,he,J.width,J.height);else{let K=J.width,ce=J.height;for(let me=0;me<ie;me++)t.texImage2D(i.TEXTURE_2D,me,he,K,ce,0,ae,we,null),K>>=1,ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),d.add(S),K.onpaint=ce=>{let me=ce.changedElements;for(let $ of d)me.includes($.image)&&($.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let me=i.RGBA,$=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,$,Se,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ie&&Be){let K=Qe(Ce[0]);t.texStorage2D(i.TEXTURE_2D,ie,he,K.width,K.height)}for(let K=0,ce=Ce.length;K<ce;K++)oe=Ce[K],Ie?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae,we,oe):t.texImage2D(i.TEXTURE_2D,K,he,ae,we,oe);S.generateMipmaps=!1}else if(Ie){if(Be){let K=Qe(J);t.texStorage2D(i.TEXTURE_2D,ie,he,K.width,K.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,we,J)}else t.texImage2D(i.TEXTURE_2D,0,he,ae,we,J);p(S)&&_(G),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Fe(I,S,k){if(S.image.length!==6)return;let G=Y(I,S),X=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let te=n.get(X);if(X.version!==te.__version||G===!0){t.activeTexture(i.TEXTURE0+k);let re=ke.getPrimaries(ke.workingColorSpace),j=S.colorSpace===Bi?null:ke.getPrimaries(S.colorSpace),J=S.colorSpace===Bi||re===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ae=S.isCompressedTexture||S.image[0].isCompressedTexture,we=S.image[0]&&S.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!ae&&!we?he[$]=m(S.image[$],!0,s.maxCubemapSize):he[$]=we?S.image[$].image:S.image[$],he[$]=mn(S,he[$]);let oe=he[0],Ce=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type),Be=b(S.internalFormat,Ce,Ie,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,ie=te.__version===void 0||G===!0,K=X.dataReady,ce=w(S,oe);Ge(i.TEXTURE_CUBE_MAP,S);let me;if(ae){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,oe.width,oe.height);for(let $=0;$<6;$++){me=he[$].mipmaps;for(let Se=0;Se<me.length;Se++){let ye=me[Se];S.format!==an?Ce!==null?U?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Be,ye.width,ye.height,0,ye.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,ye.width,ye.height,Ce,Ie,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Be,ye.width,ye.height,0,Ce,Ie,ye.data)}}}else{if(me=S.mipmaps,U&&ie){me.length>0&&ce++;let $=Qe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,$.width,$.height)}for(let $=0;$<6;$++)if(we){U?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ce,Ie,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,he[$].width,he[$].height,0,Ce,Ie,he[$].data);for(let Se=0;Se<me.length;Se++){let bt=me[Se].image[$].image;U?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,bt.width,bt.height,Ce,Ie,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Be,bt.width,bt.height,0,Ce,Ie,bt.data)}}else{U?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,Ie,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Ce,Ie,he[$]);for(let Se=0;Se<me.length;Se++){let ye=me[Se];U?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Ce,Ie,ye.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Be,Ce,Ie,ye.image[$])}}}p(S)&&_(i.TEXTURE_CUBE_MAP),te.__version=X.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Pe(I,S,k,G,X,te){let re=r.convert(k.format,k.colorSpace),j=r.convert(k.type),J=b(k.internalFormat,re,j,k.normalized,k.colorSpace),ae=n.get(S),we=n.get(k);if(we.__renderTarget=S,!ae.__hasExternalTextures){let he=Math.max(1,S.width>>te),oe=Math.max(1,S.height>>te);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,te,J,he,oe,S.depth,0,re,j,null):t.texImage2D(X,te,J,he,oe,0,re,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ct(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,X,we.__webglTexture,0,gt(S)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,X,we.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let G=S.depthTexture,X=G&&G.isDepthTexture?G.type:null,te=v(S.stencilBuffer,X),re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ct(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(S),te,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,I)}else{let G=S.textures;for(let X=0;X<G.length;X++){let te=G[X],re=r.convert(te.format,te.colorSpace),j=r.convert(te.type),J=b(te.internalFormat,re,j,te.normalized,te.colorSpace);Ct(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(S),J,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(S),J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(I,S,k){let G=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(S.depthTexture);if(X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S.depthTexture);let ae=r.convert(S.depthTexture.format),we=r.convert(S.depthTexture.type),he;S.depthTexture.format===oi?he=i.DEPTH_COMPONENT24:S.depthTexture.format===ls&&(he=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,S.width,S.height,0,ae,we,null)}}else Z(S.depthTexture,0);let te=X.__webglTexture,re=gt(S),j=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,J=S.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===oi)Ct(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,te,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,j,te,0);else if(S.depthTexture.format===ls)Ct(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,te,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,J,j,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(I){let S=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let G=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let X=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),S.__depthDisposeCallback=X}S.__boundDepthTexture=G}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)qe(S.__webglFramebuffer[G],I,G);else{let G=I.texture.mipmaps;G&&G.length>0?qe(S.__webglFramebuffer[0],I,0):qe(S.__webglFramebuffer,I,0)}else if(k){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[G],I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,te)}}else{let G=I.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(I,S,k){let G=n.get(I);S!==void 0&&Pe(G.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&it(I)}function je(I){let S=I.texture,k=n.get(I),G=n.get(S);I.addEventListener("dispose",x);let X=I.textures,te=I.isWebGLCubeRenderTarget===!0,re=X.length>1;if(re||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=S.version,a.memory.textures++),te){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let J=0;J<S.mipmaps.length;J++)k.__webglFramebuffer[j][J]=i.createFramebuffer()}else k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(re)for(let j=0,J=X.length;j<J;j++){let ae=n.get(X[j]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ct(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<X.length;j++){let J=X[j];k.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let ae=r.convert(J.format,J.colorSpace),we=r.convert(J.type),he=b(J.internalFormat,ae,we,J.normalized,J.colorSpace,I.isXRRenderTarget===!0),oe=gt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,he,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,k.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[j][J],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else Pe(k.__webglFramebuffer[j],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let j=0,J=X.length;j<J;j++){let ae=X[j],we=n.get(ae),he=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),Ge(he,ae),Pe(k.__webglFramebuffer,I,ae,i.COLOR_ATTACHMENT0+j,he,0),p(ae)&&_(he)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,G.__webglTexture),Ge(j,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(k.__webglFramebuffer[J],I,S,i.COLOR_ATTACHMENT0,j,J);else Pe(k.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,j,0);p(S)&&_(j),t.unbindTexture()}I.depthBuffer&&it(I)}function Rt(I){let S=I.textures;for(let k=0,G=S.length;k<G;k++){let X=S[k];if(p(X)){let te=M(I),re=n.get(X).__webglTexture;t.bindTexture(te,re),_(te),t.unbindTexture()}}}let Nt=[],Ht=[];function jt(I){if(I.samples>0){if(Ct(I)===!1){let S=I.textures,k=I.width,G=I.height,X=i.COLOR_BUFFER_BIT,te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(I),j=S.length>1;if(j)for(let ae=0;ae<S.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let J=I.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<S.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let we=n.get(S[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,k,G,0,0,k,G,X,i.NEAREST),c===!0&&(Nt.length=0,Ht.length=0,Nt.push(i.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Nt.push(te),Ht.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ae=0;ae<S.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let we=n.get(S[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,we,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function gt(I){return Math.min(s.maxSamples,I.samples)}function Ct(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function mn(I,S){let k=I.colorSpace,G=I.format,X=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==dn&&k!==Bi&&(ke.getTransfer(k)===Je?(G!==an||X!==pn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",k)),S}function Qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.getTextureUnits=O,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=Ye,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(i,e){function t(n,s=Bi){let r,a=ke.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Qh)return i.RGB;if(n===an)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Fa)return i.RED;if(n===Ur)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===ka||n===za||n===Va||n===Ga)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Ha||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Dc)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===qc||n===Xc||n===jc||n===Kc||n===Yc||n===Jc||n===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$c||n===Qc||n===el)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$c)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===nl||n===Wa||n===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:jy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tu=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Au,p={},_=t.getContextAttributes(),M=null,b=null,v=[],w=[],A=new _e,x=null,T=new It;T.viewport=new $e;let R=new It;R.viewport=new $e;let C=[T,R],P=new xc,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Sr,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Sr,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new Sr,v[Y]=ne),ne.getHandSpace()};function N(Y){let ne=w.indexOf(Y.inputSource);if(ne===-1)return;let ee=v[ne];ee!==void 0&&(ee.update(Y.inputSource,Y.frame,l||a),ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<v.length;Y++){let ne=w[Y];ne!==null&&(w[Y]=null,v[Y].disconnect(ne))}D=null,O=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(M),f=null,u=null,d=null,s=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,De=null,Fe=null;_.depth&&(Fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?ls:oi,De=_.stencil?Nr:Pn);let Pe={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Pe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new En(u.textureWidth,u.textureHeight,{format:an,type:pn,depthTexture:new Ci(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new En(f.framebufferWidth,f.framebufferHeight,{format:an,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let ne=0;ne<Y.removed.length;ne++){let ee=Y.removed[ne],De=w.indexOf(ee);De>=0&&(w[De]=null,v[De].disconnect(ee))}for(let ne=0;ne<Y.added.length;ne++){let ee=Y.added[ne],De=w.indexOf(ee);if(De===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=w.length){w.push(ee),De=Pe;break}else if(w[Pe]===null){w[Pe]=ee,De=Pe;break}if(De===-1)break}let Fe=v[De];Fe&&Fe.connect(ee)}}let Z=new L,Q=new L;function se(Y,ne,ee){Z.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let De=Z.distanceTo(Q),Fe=ne.projectionMatrix.elements,Pe=ee.projectionMatrix.elements,ht=Fe[14]/(Fe[10]-1),qe=Fe[14]/(Fe[10]+1),it=(Fe[9]+1)/Fe[5],Ye=(Fe[9]-1)/Fe[5],je=(Fe[8]-1)/Fe[0],Rt=(Pe[8]+1)/Pe[0],Nt=ht*je,Ht=ht*Rt,jt=De/(-je+Rt),gt=jt*-je;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(jt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Fe[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ct=ht+jt,F=qe+jt,mn=Nt-gt,Qe=Ht+(De-gt),I=it*qe/F*Ct,S=Ye*qe/F*Ct;Y.projectionMatrix.makePerspective(mn,Qe,I,S,Ct,F),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,ee=Y.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),P.near=R.near=T.near=ne,P.far=R.far=T.far=ee,(D!==P.near||O!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,O=P.far),P.layers.mask=Y.layers.mask|6,T.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;let De=Y.parent,Fe=P.cameras;le(P,De);for(let Pe=0;Pe<Fe.length;Pe++)le(Fe[Pe],De);Fe.length===2?se(P,T,R):P.projectionMatrix.copy(T.projectionMatrix),ge(Y,P,De)};function ge(Y,ne,ee){ee===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return p[Y]};let Xe=null;function pt(Y,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){let ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let De=!1;ee.length!==P.cameras.length&&(P.cameras.length=0,De=!0);for(let qe=0;qe<ee.length;qe++){let it=ee[qe],Ye=null;if(f!==null)Ye=f.getViewport(it);else{let Rt=d.getViewSubImage(u,it);Ye=Rt.viewport,qe===0&&(e.setRenderTargetTextures(b,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(b))}let je=C[qe];je===void 0&&(je=new It,je.layers.enable(qe),je.viewport=new $e,C[qe]=je),je.matrix.fromArray(it.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(it.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),qe===0&&(P.matrix.copy(je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),De===!0&&P.cameras.push(je)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let qe=d.getDepthInformation(ee[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(Fe&&Fe.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let qe=0;qe<ee.length;qe++){let it=ee[qe].camera;if(it){let Ye=p[it];Ye||(Ye=new ya,p[it]=Ye);let je=d.getCameraImage(it);Ye.sourceTexture=je}}}}for(let ee=0;ee<v.length;ee++){let De=w[ee],Fe=v[ee];De!==null&&Fe!==void 0&&Fe.update(De,ne,l||a)}Xe&&Xe(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Ge=new qp;Ge.setAnimationLoop(pt),this.setAnimationLoop=function(Y){Xe=Y},this.dispose=function(){}}},Yy=new Ee,Zp=new Ne;Zp.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,iu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,b=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){let w=v.program;n.uniformBlockBinding(b,w)}function l(b,v){let w=s[b.id];w===void 0&&(m(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",_));let A=v.program;n.updateUBOMapping(b,A);let x=e.render.frame;r[b.id]!==x&&(u(b),r[b.id]=x)}function h(b){let v=d();b.__bindingPointIndex=v;let w=i.createBuffer(),A=b.__size,x=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=s[b.id],w=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,T=w.length;x<T;x++){let R=w[x];if(Array.isArray(R))for(let C=0,P=R.length;C<P;C++)f(R[C],x,C,A);else f(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,v,w,A){if(y(b,v,w,A)===!0){let x=b.__offset,T=b.value;if(Array.isArray(T)){let R=0;for(let C=0;C<T.length;C++){let P=T[C],D=p(P);g(P,b.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,b.__data)}}function g(b,v,w){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,w)}function y(b,v,w,A){let x=b.value,T=v+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(b){let v=b.uniforms,w=0,A=16;for(let T=0,R=v.length;T<R;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let P=0,D=C.length;P<D;P++){let O=C[P],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=N.length;H<q;H++){let Z=N[H],Q=p(Z),se=w%A,le=se%Q.boundary,ge=se+le;w+=le,ge!==0&&A-ge<Q.storage&&(w+=A-ge),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=Q.storage}}}let x=w%A;return x>0&&(w+=A-x),b.__size=w,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",b),v}function _(b){let v=b.target;v.removeEventListener("dispose",_);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}var $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Qy(){return mi===null&&(mi=new ai($y,16,16,Fi,pi),mi.name="DFG_LUT",mi.minFilter=wt,mi.magFilter=wt,mi.wrapS=Un,mi.wrapT=Un,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var ul=class{constructor(e={}){let{canvas:t=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Oa,Ba,Ur]),p=new Set([pn,Pn,Os,Nr,Tc,Ec]),_=new Uint32Array(4),M=new Int32Array(4),b=new L,v=null,w=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,P=null,D=null,O=null,N=null;this._outputColorSpace=St;let H=0,q=0,Z=null,Q=-1,se=null,le=new $e,ge=new $e,Xe=null,pt=new Re(0),Ge=0,Y=t.width,ne=t.height,ee=1,De=null,Fe=null,Pe=new $e(0,0,Y,ne),ht=new $e(0,0,Y,ne),qe=!1,it=new Ei,Ye=!1,je=!1,Rt=new Ee,Nt=new L,Ht=new $e,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Ct(){return Z===null?ee:1}let F=n;function mn(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",ti,!1),F===null){let B="webgl2";if(F=mn(B,E),F===null)throw mn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Le("WebGLRenderer: "+E.message),E}let Qe,I,S,k,G,X,te,re,j,J,ae,we,he,oe,Ce,Ie,Be,U,ie,K,ce,me,$;function Se(){Qe=new a_(F),Qe.init(),ce=new Xy(F,Qe),I=new $x(F,Qe,e,ce),S=new Wy(F,Qe),I.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),D=F.createFramebuffer(),O=F.createFramebuffer(),N=F.createFramebuffer(),k=new l_(F),G=new Py,X=new qy(F,Qe,S,G,I,ce,k),te=new r_(R),re=new fb(F),me=new Jx(F,re),j=new o_(F,re,k,me),J=new u_(F,j,re,me,k),U=new h_(F,I,X),Ce=new Qx(G),ae=new Cy(R,te,Qe,I,me,Ce),we=new Jy(R,G),he=new Ly,oe=new Oy(Qe),Be=new Yx(R,te,S,J,g,c),Ie=new Hy(R,J,I),$=new Zy(F,k,I,S),ie=new Zx(F,Qe,k),K=new c_(F,Qe,k),k.programs=ae.programs,R.capabilities=I,R.extensions=Qe,R.properties=G,R.renderLists=he,R.shadowMap=Ie,R.state=S,R.info=k}Se(),y!==pn&&(T=new f_(y,t.width,t.height,o,s,r));let ye=new Tu(R,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Y,ne,!1))},this.getSize=function(E){return E.set(Y,ne)},this.setSize=function(E,B,W=!0){if(ye.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,ne=B,t.width=Math.floor(E*ee),t.height=Math.floor(B*ee),W===!0&&(t.style.width=E+"px",t.style.height=B+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Y*ee,ne*ee).floor()},this.setDrawingBufferSize=function(E,B,W){Y=E,ne=B,ee=W,t.width=Math.floor(E*W),t.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(y===pn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(Pe)},this.setViewport=function(E,B,W,z){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,B,W,z),S.viewport(le.copy(Pe).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(ht)},this.setScissor=function(E,B,W,z){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,B,W,z),S.scissor(ge.copy(ht).multiplyScalar(ee).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){S.setScissorTest(qe=E)},this.setOpaqueSort=function(E){De=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,W=!0){let z=0;if(E){let V=!1;if(Z!==null){let fe=Z.texture.format;V=m.has(fe)}if(V){let fe=Z.texture.type,xe=p.has(fe),de=Be.getClearColor(),ve=Be.getClearAlpha(),Ae=de.r,Oe=de.g,Ve=de.b;xe?(_[0]=Ae,_[1]=Oe,_[2]=Ve,_[3]=ve,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=Ae,M[1]=Oe,M[2]=Ve,M[3]=ve,F.clearBufferiv(F.COLOR,0,M))}else z|=F.COLOR_BUFFER_BIT}B&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",ti,!1),Be.dispose(),he.dispose(),oe.dispose(),G.dispose(),te.dispose(),J.dispose(),me.dispose(),$.dispose(),ae.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Gd),ye.removeEventListener("sessionend",Hd),_s.stop()};function bt(E){E.preventDefault(),ha("WebGLRenderer: Context Lost."),C=!0}function ot(){ha("WebGLRenderer: Context Restored."),C=!1;let E=k.autoReset,B=Ie.enabled,W=Ie.autoUpdate,z=Ie.needsUpdate,V=Ie.type;Se(),k.autoReset=E,Ie.enabled=B,Ie.autoUpdate=W,Ie.needsUpdate=z,Ie.type=V}function ti(E){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ni(E){let B=E.target;B.removeEventListener("dispose",ni),Km(B)}function Km(E){Ym(E),G.remove(E)}function Ym(E){let B=G.get(E).programs;B!==void 0&&(B.forEach(function(W){ae.releaseProgram(W)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,z,V,fe){B===null&&(B=jt);let xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,de=$m(E,B,W,z,V);S.setMaterial(z,xe);let ve=W.index,Ae=1;if(z.wireframe===!0){if(ve=j.getWireframeAttribute(W),ve===void 0)return;Ae=2}let Oe=W.drawRange,Ve=W.attributes.position,Te=Oe.start*Ae,tt=(Oe.start+Oe.count)*Ae;fe!==null&&(Te=Math.max(Te,fe.start*Ae),tt=Math.min(tt,(fe.start+fe.count)*Ae)),ve!==null?(Te=Math.max(Te,0),tt=Math.min(tt,ve.count)):Ve!=null&&(Te=Math.max(Te,0),tt=Math.min(tt,Ve.count));let vt=tt-Te;if(vt<0||vt===1/0)return;me.setup(V,z,de,W,ve);let xt,st=ie;if(ve!==null&&(xt=re.get(ve),st=K,st.setIndex(xt)),V.isMesh)z.wireframe===!0?(S.setLineWidth(z.wireframeLinewidth*Ct()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(V.isLine){let $t=z.linewidth;$t===void 0&&($t=1),S.setLineWidth($t*Ct()),V.isLineSegments?st.setMode(F.LINES):V.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else V.isPoints?st.setMode(F.POINTS):V.isSprite&&st.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let $t=V._multiDrawStarts,be=V._multiDrawCounts,wn=V._multiDrawCount,Ke=ve?re.get(ve).bytesPerElement:1,Dn=G.get(z).currentProgram.getUniforms();for(let ii=0;ii<wn;ii++)Dn.setValue(F,"_gl_DrawID",ii),st.render($t[ii]/Ke,be[ii])}else if(V.isInstancedMesh)st.renderInstances(Te,vt,V.count);else if(W.isInstancedBufferGeometry){let $t=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,$t);st.renderInstances(Te,vt,be)}else st.render(Te,vt)};function Vd(E,B,W){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,lo(E,B,W),E.side=bn,E.needsUpdate=!0,lo(E,B,W),E.side=yn):lo(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),w=oe.get(W),w.init(B),x.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();let z=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let fe=V.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){let de=fe[xe];Vd(de,W,V),z.add(de)}else Vd(fe,W,V),z.add(fe)}),w=x.pop(),z},this.compileAsync=function(E,B,W=null){let z=this.compile(E,B,W);return new Promise(V=>{function fe(){if(z.forEach(function(xe){G.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){V(E);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ql=null;function Jm(E){ql&&ql(E)}function Gd(){_s.stop()}function Hd(){_s.start()}let _s=new qp;_s.setAnimationLoop(Jm),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(E){ql=E,ye.setAnimationLoop(E),E===null?_s.stop():_s.start()},ye.addEventListener("sessionstart",Gd),ye.addEventListener("sessionend",Hd),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(E,B);let W=ye.enabled===!0&&ye.isPresenting===!0,z=T!==null&&(Z===null||W)&&T.begin(R,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,B,Z),w=oe.get(E,x.length),w.init(B),w.state.textureUnits=X.getTextureUnits(),x.push(w),Rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(Rt,Fn,B.reversedDepth),je=this.localClippingEnabled,Ye=Ce.init(this.clippingPlanes,je),v=he.get(E,A.length),v.init(),A.push(v),ye.enabled===!0&&ye.isPresenting===!0){let xe=R.xr.getDepthSensingMesh();xe!==null&&Xl(xe,B,-1/0,R.sortObjects)}Xl(E,B,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(De,Fe,B.reversedDepth),gt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,gt&&Be.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ce.beginShadows();let V=w.state.shadowsArray;if(Ie.render(V,E,B),Ye===!0&&Ce.endShadows(),(z&&T.hasRenderPass())===!1){let xe=v.opaque,de=v.transmissive;if(w.setupLights(),B.isArrayCamera){let ve=B.cameras;if(de.length>0)for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){let Ve=ve[Ae];qd(xe,de,E,Ve)}gt&&Be.render(E);for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){let Ve=ve[Ae];Wd(v,E,Ve,Ve.viewport)}}else de.length>0&&qd(xe,de,E,B),gt&&Be.render(E),Wd(v,E,B)}Z!==null&&q===0&&(X.updateMultisampleRenderTarget(Z),X.updateRenderTargetMipmap(Z)),z&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,B),me.resetDefaultState(),Q=-1,se=null,x.pop(),x.length>0?(w=x[x.length-1],X.setTextureUnits(w.state.textureUnits),Ye===!0&&Ce.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,P!==null&&P.renderEnd()};function Xl(E,B,W,z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){z&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Rt);let xe=J.update(E),de=E.material;de.visible&&v.push(E,xe,de,W,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){let xe=J.update(E),de=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ht.copy(xe.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Rt)),Array.isArray(de)){let ve=xe.groups;for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){let Ve=ve[Ae],Te=de[Ve.materialIndex];Te&&Te.visible&&v.push(E,xe,Te,W,Ht.z,Ve)}}else de.visible&&v.push(E,xe,de,W,Ht.z,null)}}let fe=E.children;for(let xe=0,de=fe.length;xe<de;xe++)Xl(fe[xe],B,W,z)}function Wd(E,B,W,z){let{opaque:V,transmissive:fe,transparent:xe}=E;w.setupLightsView(W),Ye===!0&&Ce.setGlobalState(R.clippingPlanes,W),z&&S.viewport(le.copy(z)),V.length>0&&co(V,B,W),fe.length>0&&co(fe,B,W),xe.length>0&&co(xe,B,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function qd(E,B,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Te=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new En(1,1,{generateMipmaps:!0,type:Te?pi:pn,minFilter:$n,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let fe=w.state.transmissionRenderTarget[z.id],xe=z.viewport||le;fe.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Ae=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(pt),Ge=R.getClearAlpha(),Ge<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Be.render(W);let Oe=R.toneMapping;R.toneMapping=Zn;let Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Ye===!0&&Ce.setGlobalState(R.clippingPlanes,z),co(E,W,z),X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let tt=0,vt=B.length;tt<vt;tt++){let xt=B[tt],{object:st,geometry:$t,material:be,group:wn}=xt;if(be.side===yn&&st.layers.test(z.layers)){let Ke=be.side;be.side=Yt,be.needsUpdate=!0,Xd(st,W,z,$t,be,wn),be.side=Ke,be.needsUpdate=!0,Te=!0}}Te===!0&&(X.updateMultisampleRenderTarget(fe),X.updateRenderTargetMipmap(fe))}R.setRenderTarget(de,ve,Ae),R.setClearColor(pt,Ge),Ve!==void 0&&(z.viewport=Ve),R.toneMapping=Oe}function co(E,B,W){let z=B.isScene===!0?B.overrideMaterial:null;for(let V=0,fe=E.length;V<fe;V++){let xe=E[V],{object:de,geometry:ve,group:Ae}=xe,Oe=xe.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),de.layers.test(W.layers)&&Xd(de,B,W,ve,Oe,Ae)}}function Xd(E,B,W,z,V,fe){E.onBeforeRender(R,B,W,z,V,fe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,B,W,z,E,fe),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,R.renderBufferDirect(W,B,z,V,E,fe),V.side=bn,V.needsUpdate=!0,R.renderBufferDirect(W,B,z,V,E,fe),V.side=yn):R.renderBufferDirect(W,B,z,V,E,fe),E.onAfterRender(R,B,W,z,V,fe)}function lo(E,B,W){B.isScene!==!0&&(B=jt);let z=G.get(E),V=w.state.lights,fe=w.state.shadowsArray,xe=V.state.version,de=ae.getParameters(E,V.state,fe,B,W,w.state.lightProbeGridArray),ve=ae.getProgramCacheKey(de),Ae=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,z.fog=B.fog;let Oe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=te.get(E.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ni),Ae=new Map,z.programs=Ae);let Ve=Ae.get(ve);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===xe)return Kd(E,de),Ve}else de.uniforms=ae.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,W,de),E.onBeforeCompile(de,R),Ve=ae.acquireProgram(de,ve),Ae.set(ve,Ve),z.uniforms=de.uniforms;let Te=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),Kd(E,de),z.needsLights=eg(E),z.lightsStateVersion=xe,z.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function jd(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Or.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Kd(E,B){let W=G.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Zm(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let W=0,z=E.length;W<z;W++){let V=E[W];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function $m(E,B,W,z,V){B.isScene!==!0&&(B=jt),X.resetTextureUnits();let fe=B.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?B.environment:null,de=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ke.workingColorSpace,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=te.get(z.envMap||xe,ve),Oe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,xt=Zn;z.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(xt=R.toneMapping);let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$t=st!==void 0?st.length:0,be=G.get(z),wn=w.state.lights;if(Ye===!0&&(je===!0||E!==se)){let ct=E===se&&z.id===Q;Ce.setState(z,E,ct)}let Ke=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==wn.state.version||be.outputColorSpace!==de||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Ae||z.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ce.numPlanes||be.numIntersection!==Ce.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==Ve||be.morphTargets!==Te||be.morphNormals!==tt||be.morphColors!==vt||be.toneMapping!==xt||be.morphTargetsCount!==$t||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,be.__version=z.version);let Dn=be.currentProgram;Ke===!0&&(Dn=lo(z,B,V),P&&z.isNodeMaterial&&P.onUpdateProgram(z,Dn,be));let ii=!1,Wi=!1,Zs=!1,rt=Dn.getUniforms(),Mt=be.uniforms;if(S.useProgram(Dn.program)&&(ii=!0,Wi=!0,Zs=!0),z.id!==Q&&(Q=z.id,Wi=!0),be.needsLights){let ct=Zm(w.state.lightProbeGridArray,V);be.lightProbeGrid!==ct&&(be.lightProbeGrid=ct,Wi=!0)}if(ii||se!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),rt.setValue(F,"projectionMatrix",E.projectionMatrix),rt.setValue(F,"viewMatrix",E.matrixWorldInverse);let Xi=rt.map.cameraPosition;Xi!==void 0&&Xi.setValue(F,Nt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),se!==E&&(se=E,Wi=!0,Zs=!0)}if(be.needsLights&&(wn.state.directionalShadowMap.length>0&&rt.setValue(F,"directionalShadowMap",wn.state.directionalShadowMap,X),wn.state.spotShadowMap.length>0&&rt.setValue(F,"spotShadowMap",wn.state.spotShadowMap,X),wn.state.pointShadowMap.length>0&&rt.setValue(F,"pointShadowMap",wn.state.pointShadowMap,X)),V.isSkinnedMesh){rt.setOptional(F,V,"bindMatrix"),rt.setOptional(F,V,"bindMatrixInverse");let ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),rt.setValue(F,"boneTexture",ct.boneTexture,X))}V.isBatchedMesh&&(rt.setOptional(F,V,"batchingTexture"),rt.setValue(F,"batchingTexture",V._matricesTexture,X),rt.setOptional(F,V,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",V._indirectTexture,X),rt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",V._colorsTexture,X));let qi=W.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&U.update(V,W,Dn),(Wi||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,rt.setValue(F,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&B.environment!==null&&(Mt.envMapIntensity.value=B.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Qy()),Wi){if(rt.setValue(F,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&Qm(Mt,Zs),fe&&z.fog===!0&&we.refreshFogUniforms(Mt,fe),we.refreshMaterialUniforms(Mt,z,ee,ne,w.state.transmissionRenderTarget[E.id]),be.needsLights&&be.lightProbeGrid){let ct=be.lightProbeGrid;Mt.probesSH.value=ct.texture,Mt.probesMin.value.copy(ct.boundingBox.min),Mt.probesMax.value.copy(ct.boundingBox.max),Mt.probesResolution.value.copy(ct.resolution)}Or.upload(F,jd(be),Mt,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Or.upload(F,jd(be),Mt,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(F,"center",V.center),rt.setValue(F,"modelViewMatrix",V.modelViewMatrix),rt.setValue(F,"normalMatrix",V.normalMatrix),rt.setValue(F,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let ct=z.uniformsGroups;for(let Xi=0,$s=ct.length;Xi<$s;Xi++){let Yd=ct[Xi];$.update(Yd,Dn),$.bind(Yd,Dn)}}return Dn}function Qm(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function eg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,B,W){let z=G.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=B,G.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let W=G.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){Z=E,H=B,q=W;let z=null,V=!1,fe=!1;if(E){let de=G.get(E);if(de.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),le.copy(E.viewport),ge.copy(E.scissor),Xe=E.scissorTest,S.viewport(le),S.scissor(ge),S.setScissorTest(Xe),Q=-1;return}else if(de.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(de.__hasExternalTextures)X.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Oe=E.depthTexture;if(de.__boundDepthTexture!==Oe){if(Oe!==null&&G.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}let ve=E.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Ae=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[B])?z=Ae[B][W]:z=Ae[B],V=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?z=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?z=Ae[W]:z=Ae,le.copy(E.viewport),ge.copy(E.scissor),Xe=E.scissorTest}else le.copy(Pe).multiplyScalar(ee).floor(),ge.copy(ht).multiplyScalar(ee).floor(),Xe=qe;if(W!==0&&(z=D),S.bindFramebuffer(F.FRAMEBUFFER,z)&&S.drawBuffers(E,z),S.viewport(le),S.scissor(ge),S.setScissorTest(Xe),V){let de=G.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,de.__webglTexture,W)}else if(fe){let de=B;for(let ve=0;ve<E.textures.length;ve++){let Ae=G.get(E.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,Ae.__webglTexture,W,de)}}else if(E!==null&&W!==0){let de=G.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,W)}Q=-1},this.readRenderTargetPixels=function(E,B,W,z,V,fe,xe,de=0){if(!(E&&E.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){S.bindFramebuffer(F.FRAMEBUFFER,ve);try{let Ae=E.textures[de],Oe=Ae.format,Ve=Ae.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de),!I.textureFormatReadable(Oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Ve)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-z&&W>=0&&W<=E.height-V&&F.readPixels(B,W,z,V,ce.convert(Oe),ce.convert(Ve),fe)}finally{let Ae=Z!==null?G.get(Z).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,z,V,fe,xe,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve)if(B>=0&&B<=E.width-z&&W>=0&&W<=E.height-V){S.bindFramebuffer(F.FRAMEBUFFER,ve);let Ae=E.textures[de],Oe=Ae.format,Ve=Ae.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de),!I.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Te),F.bufferData(F.PIXEL_PACK_BUFFER,fe.byteLength,F.STREAM_READ),F.readPixels(B,W,z,V,ce.convert(Oe),ce.convert(Ve),0);let tt=Z!==null?G.get(Z).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,tt);let vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xp(F,vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Te),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,fe),F.deleteBuffer(Te),F.deleteSync(vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,W=0){let z=Math.pow(2,-W),V=Math.floor(E.image.width*z),fe=Math.floor(E.image.height*z),xe=B!==null?B.x:0,de=B!==null?B.y:0;X.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,xe,de,V,fe),S.unbindTexture()},this.copyTextureToTexture=function(E,B,W=null,z=null,V=0,fe=0){let xe,de,ve,Ae,Oe,Ve,Te,tt,vt,xt=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(W!==null)xe=W.max.x-W.min.x,de=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Oe=W.min.y,Ve=W.isBox3?W.min.z:0;else{let Mt=Math.pow(2,-V);xe=Math.floor(xt.width*Mt),de=Math.floor(xt.height*Mt),E.isDataArrayTexture?ve=xt.depth:E.isData3DTexture?ve=Math.floor(xt.depth*Mt):ve=1,Ae=0,Oe=0,Ve=0}z!==null?(Te=z.x,tt=z.y,vt=z.z):(Te=0,tt=0,vt=0);let st=ce.convert(B.format),$t=ce.convert(B.type),be;B.isData3DTexture?(X.setTexture3D(B,0),be=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(X.setTexture2DArray(B,0),be=F.TEXTURE_2D_ARRAY):(X.setTexture2D(B,0),be=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let wn=S.getParameter(F.UNPACK_ROW_LENGTH),Ke=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=S.getParameter(F.UNPACK_SKIP_PIXELS),ii=S.getParameter(F.UNPACK_SKIP_ROWS),Wi=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve);let Zs=E.isDataArrayTexture||E.isData3DTexture,rt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let Mt=G.get(E),qi=G.get(B),ct=G.get(Mt.__renderTarget),Xi=G.get(qi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,ct.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let $s=0;$s<ve;$s++)Zs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(E).__webglTexture,V,Ve+$s),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(B).__webglTexture,fe,vt+$s)),F.blitFramebuffer(Ae,Oe,xe,de,Te,tt,xe,de,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||G.has(E)){let Mt=G.get(E),qi=G.get(B);S.bindFramebuffer(F.READ_FRAMEBUFFER,O),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let ct=0;ct<ve;ct++)Zs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mt.__webglTexture,V,Ve+ct):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,V),rt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qi.__webglTexture,fe,vt+ct):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qi.__webglTexture,fe),V!==0?F.blitFramebuffer(Ae,Oe,xe,de,Te,tt,xe,de,F.COLOR_BUFFER_BIT,F.NEAREST):rt?F.copyTexSubImage3D(be,fe,Te,tt,vt+ct,Ae,Oe,xe,de):F.copyTexSubImage2D(be,fe,Te,tt,Ae,Oe,xe,de);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else rt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(be,fe,Te,tt,vt,xe,de,ve,st,$t,xt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(be,fe,Te,tt,vt,xe,de,ve,st,xt.data):F.texSubImage3D(be,fe,Te,tt,vt,xe,de,ve,st,$t,xt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,fe,Te,tt,xe,de,st,$t,xt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,fe,Te,tt,xt.width,xt.height,st,xt.data):F.texSubImage2D(F.TEXTURE_2D,fe,Te,tt,xe,de,st,$t,xt);S.pixelStorei(F.UNPACK_ROW_LENGTH,wn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ke),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),S.pixelStorei(F.UNPACK_SKIP_ROWS,ii),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Wi),fe===0&&B.generateMipmaps&&F.generateMipmap(be),S.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){H=0,q=0,Z=null,S.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}};var $p={type:"change"},Ru={type:"start"},em={type:"end"},pl=new On,Qp=new un,tv=Math.cos(70*Oi.DEG2RAD),Ot=new L,vn=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,ml=class extends Ia{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Kt,this._lastTargetPosition=new L,this._quat=new Kt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ir,this._sphericalDelta=new Ir,this._scale=1,this._panOffset=new L,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new L,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=ov.bind(this),this._onKeyDown=cv.bind(this),this._onTouchStart=lv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=rv.bind(this),this._onMouseMove=av.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($p),this.update(),this.state=nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ot.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<tv?this.object.lookAt(this.target):(Qp.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(Qp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent($p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(em),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case as.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case as.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ru)}function av(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(em))}function cv(i){this.enabled!==!1&&this._handleKeyDown(i)}function lv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ru)}function hv(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cu(i,e){if(e===eu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Fr||e===qa){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Fr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function tm(i){let e=new Map,t=new Map,n=i.clone();return nm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function nm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)nm(i.children[n],e.children[n],t)}var gl=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new bl(t,He.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bl(t,He.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ui.extractUrlBase(e);a=Ui.resolveURL(l,this.path)}else a=Ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===om){try{a[He.KHR_BINARY_GLTF]=new Ju(e)}catch(d){s&&s(d);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new id(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:a[d]=new Nu;break;case He.KHR_DRACO_MESH_COMPRESSION:a[d]=new Zu(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[d]=new $u;break;case He.KHR_MESH_QUANTIZATION:a[d]=new Qu;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function pv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function At(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Du=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ra(h),l.distance=d;break;case"spot":l=new Ea(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Nu=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},zu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Vu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(r[0],r[1],r[2],dn),Promise.all(s)}},Gu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(s)}},Wu=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},qu=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?xn:null}extendMaterialParams(e,t){let n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ju=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ku=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},bl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},Yu=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let y=new Ee,m=new L,p=new Kt,_=new L(1,1,1),M=new ba(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&_.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,y.compose(m,p,_));for(let b in c)if(b==="_COLOR_0"){let v=c[b];M.instanceColor=new ts(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);dt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},om="glTF",Ya=12,im={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ya),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==om)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ya,r=new DataView(e,Ya),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===im.JSON){let l=new Uint8Array(e,Ya+a,o);this.content=n.decode(l)}else if(c===im.BIN){let l=Ya+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=td[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=td[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=zr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}d(f)},o,l,dn,u)})})}},$u=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qu=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},xl=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,y=g-l,m=-2*f+3*u,p=f-u,_=1-m,M=p-u+d;for(let b=0;b!==o;b++){let v=a[y+b+o],w=a[y+b+c]*h,A=a[g+b+o],x=a[g+b]*h;r[b]=_*v+M*w+m*A+p*x}return r}},mv=new Kt,ed=class extends xl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return mv.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:_t,9729:wt,9984:Sc,9985:Dr,9986:Bs,9987:$n},rm={33071:Un,33648:br,10497:es},Pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gv={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ps},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),i.DefaultMaterial}function Gs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function _v(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yv(i){let e,t=i.extensions&&i.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lu(t.attributes):e=i.indices+":"+Lu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Lu(i.targets[n]);return e}function Lu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Mv=new Ee,id=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Sa(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Gs(r,o,s),bi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ui.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Pu[s.type],o=zr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new ut(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Pu[s.type],l=zr[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==d){let p=Math.floor(u/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(y=new l(o,p*f,s.count*f/h),M=new wr(y,f/h),t.cache.add(_,M)),m=new Ar(M,c,u%f/h,g)}else o===null?y=new l(s.count*c):y=new l(o,u,s.count*c),m=new ut(y,c,g);if(s.sparse!==void 0){let p=Pu.SCALAR,_=zr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new _(a[1],M,s.sparse.count*p),w=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,x=v.length;A<x;A++){let T=v[A];if(m.setX(T,w[A*c]),c>=2&&m.setY(T,w[A*c+1]),c>=3&&m.setZ(T,w[A*c+2]),c>=4&&m.setW(T,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=sm[u.magFilter]||wt,h.minFilter=sm[u.minFilter]||$n,h.wrapS=rm[u.wrapS]||es,h.wrapT=rm[u.wrapT]||es,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_t&&h.minFilter!==wt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){let m=new qt(y);m.needsUpdate=!0,u(m)}),t.load(Ui.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),bi(d,a),d.userData.mimeType=a.mimeType||vv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Er,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ri,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ns}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){let d=s[He.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],dn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,St)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=yn);let h=r.alphaMode||Iu.OPAQUE;if(h===Iu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Iu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==kn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==kn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==kn){let d=r.emissiveFactor;o.emissive=new Re().setRGB(d[0],d[1],d[2],dn)}return r.emissiveTexture!==void 0&&a!==kn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),bi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Gs(s,d,r),d})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return am(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=yv(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=am(new Ut,l,t),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?bv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,_=l[f];if(m.mode===zn.TRIANGLES||m.mode===zn.TRIANGLE_STRIP||m.mode===zn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ma(y,_):new lt(y,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zn.TRIANGLE_STRIP?p.geometry=Cu(p.geometry,qa):m.mode===zn.TRIANGLE_FAN&&(p.geometry=Cu(p.geometry,Fr));else if(m.mode===zn.LINES)p=new li(y,_);else if(m.mode===zn.LINE_STRIP)p=new ci(y,_);else if(m.mode===zn.LINE_LOOP)p=new ns(y,_);else if(m.mode===zn.POINTS)p=new is(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_v(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),m.extensions&&Gs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Gs(s,d[0],r),d[0];let u=new Bn;r.extensions&&Gs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(Oi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ss(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Ee;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ga(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let M=0,b=u.length;M<b;M++){let v=u[M],w=f[M],A=g[M],x=y[M],T=m[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,w,A,x,T);if(R)for(let C=0;C<R.length;C++)p.push(R[C])}let _=new Cr(r,void 0,p);return bi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Mv)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Tr:l.length>1?h=new Bn:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),bi(h,r),r.extensions&&Gs(n,h,r),r.matrix!==void 0){let d=new Ee;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Bn;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&Gs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(tm(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof fn||u instanceof qt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}us[r.path]===us.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(us[r.path]){case us.weights:h=Li;break;case us.rotation:h=ui;break;case us.translation:case us.scale:h=Ni;break;default:n.itemSize===1?h=Li:h=Ni;break}let d=s.interpolation!==void 0?gv[s.interpolation]:Is,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let y=new h(c[f]+"."+us[r.path],t.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ui?ed:xl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Sv(i,e,t){let n=e.attributes,s=new Ze;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=nd(zr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let y=nd(zr[u.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Lt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function am(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=td[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ke.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ke.workingColorSpace}" not supported.`),bi(i,e),Sv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xv(i,e.targets,t):i})}var sd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);_[M]=b>96?b-97:b>64?b-39:b+4}for(var v=0,M=0;M<p.length;++M)_[v++]=_[M]<60?n[_[M]]:(_[M]-60)*64+_[++M];return _.buffer.slice(0,v)}function c(p,_,M,b,v,w,A){var x=p.exports.sbrk,T=b+3&-4,R=x(T*v),C=x(w.length),P=new Uint8Array(p.exports.memory.buffer);P.set(w,C);var D=_(R,b,v,C,w.length);if(D==0&&A&&A(R,T,v),M.set(P.subarray(R,R+b*v)),x(R-x(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(M){var b=M.data;_.pending-=b.count,_.requests[b.id][b.action](b.value),delete _.requests[b.id]},_}function g(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([_],{type:"text/javascript"}),b=URL.createObjectURL(M),v=d.length;v<p;++v)d[v]=f(b);for(var v=p;v<d.length;++v)d[v].object.postMessage({});d.length=p,URL.revokeObjectURL(b)}function y(p,_,M,b,v){for(var w=d[0],A=1;A<d.length;++A)d[A].pending<w.pending&&(w=d[A]);return new Promise(function(x,T){var R=new Uint8Array(M),C=++u;w.pending+=p,w.requests[C]={resolve:x,reject:T},w.object.postMessage({id:C,count:p,size:_,source:R,mode:b,filter:v},[R.buffer])})}function m(p){var _=p.data;self.ready.then(function(M){if(!_.id)return self.close();try{var b=new Uint8Array(_.count*_.size);c(M,M.exports[_.mode],b,_.count,_.size,_.source,M.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,M,b,v){c(r,r.exports.meshopt_decodeVertexBuffer,p,_,M,b,r.exports[l[v]])},decodeIndexBuffer:function(p,_,M,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,_,M,b)},decodeIndexSequence:function(p,_,M,b){c(r,r.exports.meshopt_decodeIndexSequence,p,_,M,b)},decodeGltfBuffer:function(p,_,M,b,v,w){c(r,r.exports[h[v]],p,_,M,b,r.exports[l[w]])},decodeGltfBufferAsync:function(p,_,M,b,v){return d.length>0?y(p,_,M,h[b],l[v]):a.then(function(){var w=new Uint8Array(p*_);return c(r,r.exports[h[b]],w,p,_,M,r.exports[l[v]]),w})}}})();var zi={compressed:"plc1215c-7c7321cddc78.glb.gz",fallback:"plc1215c-7c7321cddc78.glb",compressedBytes:3345812,decodedBytes:4554808},wv="plc1215c-model-v1",Ja=i=>i.length>=4&&i[0]===103&&i[1]===108&&i[2]===84&&i[3]===70,ki={source:"",bytes:0,attempts:0,started:0,decodedAt:0};window.__PLC_LOAD__=ki;async function Av(i,e,t){let n=new AbortController,s,r=()=>{clearTimeout(s),s=setTimeout(()=>n.abort(),45e3)};r();try{ki.attempts++;let a=await fetch(i,{signal:n.signal,credentials:"same-origin"});if(!a.ok)throw new Error(`\u6A21\u578B\u4E0B\u8F7D\u5931\u8D25 (${a.status})`);let o=0,c=e,l=[],h=()=>t(`\u4E0B\u8F7D\u6A21\u578B ${(o/1e6).toFixed(2)} / ${(c/1e6).toFixed(2)} MB\uFF08${Math.min(100,Math.floor(o/c*100))}%\uFF09`);if(h(),a.body?.getReader){let f=a.body.getReader();for(;;){let{done:g,value:y}=await f.read();if(g)break;if(r(),!o&&Ja(y)&&(c=zi.decodedBytes),o+=y.byteLength,o>zi.decodedBytes)throw new Error("\u6A21\u578B\u4E0B\u8F7D\u6570\u636E\u5F02\u5E38");l.push(y),h()}}else{let f=new Uint8Array(await a.arrayBuffer());o=f.byteLength,Ja(f)&&(c=zi.decodedBytes),l.push(f),h()}let d=new Uint8Array(o),u=0;for(let f of l)d.set(f,u),u+=f.byteLength;if(o!==(Ja(d)?zi.decodedBytes:e))throw new Error("\u6A21\u578B\u4E0B\u8F7D\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165");return ki.bytes=o,d}catch(a){throw a.name==="AbortError"?new Error("\u6A21\u578B\u4E0B\u8F7D\u8D85\u8FC7 45 \u79D2\u6CA1\u6709\u6536\u5230\u6570\u636E"):a instanceof TypeError&&a.message==="Failed to fetch"?new Error("\u6A21\u578B\u4E0B\u8F7D\u8FDE\u63A5\u4E2D\u65AD\u6216\u88AB\u7F51\u7EDC\u963B\u6B62"):a}finally{clearTimeout(s)}}async function Tv(i){if(Ja(i))return i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength);if(typeof DecompressionStream>"u")throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 gzip \u89E3\u538B");let e=new Blob([i]).stream().pipeThrough(new DecompressionStream("gzip")),t=await new Response(e).arrayBuffer();if(t.byteLength!==zi.decodedBytes||!Ja(new Uint8Array(t)))throw new Error("\u6A21\u578B\u89E3\u538B\u6821\u9A8C\u5931\u8D25");return t}async function cm(i){ki.started=performance.now(),ki.attempts=0,ki.bytes=0;let e=typeof DecompressionStream<"u",t=new URL(`./assets/${e?zi.compressed:zi.fallback}`,import.meta.url).href,n=e?zi.compressedBytes:zi.decodedBytes,s;try{"caches"in window&&(s=await caches.open(wv))}catch{}let r=async a=>{i("\u89E3\u7801\u539F\u5382\u6A21\u578B\u2026");let o=await Tv(a);await sd.ready;let c=await new gl().setMeshoptDecoder(sd).parseAsync(o,new URL("./assets/",import.meta.url).href);return ki.decodedAt=performance.now(),c};try{let a=await s?.match(t);if(a)return i("\u8BFB\u53D6\u5DF2\u4E0B\u8F7D\u7684\u6A21\u578B\u2026"),ki.source="model-cache",await r(new Uint8Array(await a.arrayBuffer()))}catch{try{await s?.delete(t)}catch{}}ki.source="network";for(let a=0;a<2;a++)try{a&&i("\u4E0B\u8F7D\u4E2D\u65AD\uFF0C\u6B63\u5728\u91CD\u8BD5\u2026");let o=await Av(t,n,i),c=await r(o);try{await s?.put(t,new Response(o,{headers:{"Content-Type":"application/octet-stream"}}))}catch{}return c}catch(o){if(a)throw o}}var lm={units:"millimetres in web scene; GLB metres",source:"Siemens G_ST70_XX_98599V.stp",motion:{coverPhaseEnd:.45,sequenceSource:"https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/installation/installation-and-removal-procedures/installing-and-removing-an-sb-cb-or-bb",top:{angle:1.5707963267948966,explode:[0,45,33]},bottom:{angle:-1.5707963267948966,explode:[0,-45,33]},signal:{explode:[0,0,74]}},anchors:{overview:{position:[0,0,0],normal:[0,0,1]},power:{position:[-54.3,43.6,20.3],normal:[0,.5,1],size:[12,9,5],node:"body_original"},di:{position:[-6.3,43.6,20.3],normal:[0,.5,1],size:[58,9,5],node:"body_original"},dq:{position:[37.5,-43.65,20.3],normal:[0,-.5,1],size:[40,9,5],node:"body_original"},ai:{position:[47.7,43.6,20.3],normal:[0,.5,1],size:[9,9,5],node:"body_original"},ao:{position:[35.7,43.6,20.3],normal:[0,.5,1],size:[9,9,5],node:"body_original"},status:{position:[-55,13,38.4],normal:[0,0,1],size:[15,7,2],node:"body_original"},ethernet:{position:[-43.4,-44.6,23.1],normal:[0,-1,0],size:[32,3,18],node:"body_original"},memory:{position:[58.5,30,33.3],normal:[0,0,1],size:[5,16,3],node:"body_original"},signalboard:{position:[-13.25,0,38.3],normal:[0,0,1],size:[34,24,2],node:"signal_cover"},expansion:{position:[65.8,0,0],normal:[1,0,0],size:[2,24,28],node:"body_original"},mounting:{position:[0,31,-38.3],normal:[0,0,-1],size:[18,8,2],node:"body_original"}}};var Rm=0,Ev=1,Rv=2;var hm=2,rd=1.25,um=1,cn=32,kt=cn/4,Id=65535,YA=Id<<16,Ul=Math.pow(2,-24),Ld=Symbol("SKIP_GENERATION"),Cm={strategy:Rm,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Ld]:!1};function yt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function md(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function dm(i,e){e.set(i)}function fm(i,e,t){let n,s;for(let r=0;r<3;r++){let a=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[a],s=e[a],t[a]=n>s?n:s}}function _l(i,e,t){for(let n=0;n<3;n++){let s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Za(i){let e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}function Tt(i,e){return e[i+15]===Id}function Xt(i,e){return e[i+6]}function ln(i,e){return e[i+14]}function zt(i){return i+kt}function Vt(i,e){let t=e[i+6];return i+t*kt}function Dd(i,e){return e[i+7]}function ad(i,e,t,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,h=-1/0,d=1/0,u=1/0,f=1/0,g=-1/0,y=-1/0,m=-1/0,p=i.offset||0;for(let _=(e-p)*6,M=(e+t-p)*6;_<M;_+=6){let b=i[_+0],v=i[_+1],w=b-v,A=b+v;w<r&&(r=w),A>c&&(c=A),b<d&&(d=b),b>g&&(g=b);let x=i[_+2],T=i[_+3],R=x-T,C=x+T;R<a&&(a=R),C>l&&(l=C),x<u&&(u=x),x>y&&(y=x);let P=i[_+4],D=i[_+5],O=P-D,N=P+D;O<o&&(o=O),N>h&&(h=N),P<f&&(f=P),P>m&&(m=P)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=h,s[0]=d,s[1]=u,s[2]=f,s[3]=g,s[4]=y,s[5]=m}var Vi=32,Cv=(i,e)=>i.candidate-e.candidate,ds=new Array(Vi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),yl=new Float32Array(6);function Pv(i,e,t,n,s,r){let a=-1,o=0;if(r===Rm)a=md(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===Ev)a=md(i),a!==-1&&(o=Iv(t,n,s,a));else if(r===Rv){let c=Za(i),l=rd*s,h=t.offset||0,d=(n-h)*6,u=(n+s-h)*6;for(let f=0;f<3;f++){let g=e[f],p=(e[f+3]-g)/Vi;if(s<Vi/4){let _=[...ds];_.length=s;let M=0;for(let v=d;v<u;v+=6,M++){let w=_[M];w.candidate=t[v+2*f],w.count=0;let{bounds:A,leftCacheBounds:x,rightCacheBounds:T}=w;for(let R=0;R<3;R++)T[R]=1/0,T[R+3]=-1/0,x[R]=1/0,x[R+3]=-1/0,A[R]=1/0,A[R+3]=-1/0;_l(v,t,A)}_.sort(Cv);let b=s;for(let v=0;v<b;v++){let w=_[v];for(;v+1<b&&_[v+1].candidate===w.candidate;)_.splice(v+1,1),b--}for(let v=d;v<u;v+=6){let w=t[v+2*f];for(let A=0;A<b;A++){let x=_[A];w>=x.candidate?_l(v,t,x.rightCacheBounds):(_l(v,t,x.leftCacheBounds),x.count++)}}for(let v=0;v<b;v++){let w=_[v],A=w.count,x=s-w.count,T=w.leftCacheBounds,R=w.rightCacheBounds,C=0;A!==0&&(C=Za(T)/c);let P=0;x!==0&&(P=Za(R)/c);let D=um+rd*(C*A+P*x);D<l&&(a=f,l=D,o=w.candidate)}}else{for(let b=0;b<Vi;b++){let v=ds[b];v.count=0,v.candidate=g+p+b*p;let w=v.bounds;for(let A=0;A<3;A++)w[A]=1/0,w[A+3]=-1/0}for(let b=d;b<u;b+=6){let A=~~((t[b+2*f]-g)/p);A>=Vi&&(A=Vi-1);let x=ds[A];x.count++,_l(b,t,x.bounds)}let _=ds[Vi-1];dm(_.bounds,_.rightCacheBounds);for(let b=Vi-2;b>=0;b--){let v=ds[b],w=ds[b+1];fm(v.bounds,w.rightCacheBounds,v.rightCacheBounds)}let M=0;for(let b=0;b<Vi-1;b++){let v=ds[b],w=v.count,A=v.bounds,T=ds[b+1].rightCacheBounds;w!==0&&(M===0?dm(A,yl):fm(A,yl,yl)),M+=w;let R=0,C=0;M!==0&&(R=Za(yl)/c);let P=s-M;P!==0&&(C=Za(T)/c);let D=um+rd*(R*M+C*P);D<l&&(a=f,l=D,o=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Iv(i,e,t,n){let s=0,r=i.offset;for(let a=e,o=e+t;a<o;a++)s+=i[(a-r)*6+n*2];return s/t}var so=class{constructor(){this.boundingData=new Float32Array(6)}};function Lv(i,e,t,n,s,r){let a=n,o=n+s-1,c=r.pos,l=r.axis*2,h=t.offset||0;for(;;){for(;a<=o&&t[(a-h)*6+l]<c;)a++;for(;a<=o&&t[(o-h)*6+l]>=c;)o--;if(a<o){for(let d=0;d<e;d++){let u=i[a*e+d];i[a*e+d]=i[o*e+d],i[o*e+d]=u}for(let d=0;d<6;d++){let u=a-h,f=o-h,g=t[u*6+d];t[u*6+d]=t[f*6+d],t[f*6+d]=g}a++,o--}else return a}}var Pm,Fl,gd,Im,Dv=Math.pow(2,32);function bd(i){return"count"in i?1:1+bd(i.left)+bd(i.right)}function Nv(i,e,t){return Pm=new Float32Array(t),Fl=new Uint32Array(t),gd=new Uint16Array(t),Im=new Uint8Array(t),xd(i,e)}function xd(i,e){let t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Pm[t+a]=r[a];if(s)return e.buffer?(Im.set(new Uint8Array(e.buffer),i),i+e.buffer.byteLength):(Fl[t+6]=e.offset,gd[n+14]=e.count,gd[n+15]=Id,i+cn);{let{left:a,right:o,splitAxis:c}=e,l=i+cn,h=xd(l,a),d=i/cn,f=h/cn-d;if(f>Dv)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Fl[t+6]=f,Fl[t+7]=c,xd(h,o)}}function Uv(i,e,t,n,s,r){let{maxDepth:a,verbose:o,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:h,onProgress:d}=s,u=i.primitiveBuffer,f=i.primitiveBufferStride,g=new Float32Array(6),y=!1,m=new so;return ad(e,t,n,m.boundingData,g),_(m,t,n,g),m;function p(M){d&&d((M-r.offset)/r.count)}function _(M,b,v,w=null,A=0){!y&&A>=a&&(y=!0,o&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));let x=v>l;if(v<=c&&!x||A>=a)return p(b+v),M.offset=b,M.count=v,M;let T=Pv(M.boundingData,w,e,b,v,h),R=T.axis===-1?-1:Lv(u,f,e,b,v,T);if(T.axis===-1||R===b||R===b+v){if(!x)return p(b+v),M.offset=b,M.count=v,M;T.axis=Math.max(0,md(M.boundingData)),R=b+Math.max(1,Math.floor(v/2))}M.splitAxis=T.axis;let C=new so,P=b,D=R-b;M.left=C,ad(e,P,D,C.boundingData,g),_(C,P,D,g,A+1);let O=new so,N=R,H=v-D;return M.right=O,ad(e,N,H,O.boundingData,g),_(O,N,H,g,A+1),M}}function Fv(i,e){let t=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(e.range),s=n[0],r=n[n.length-1],a={offset:s.offset,count:r.offset+r.count-s.offset},o=new Float32Array(6*a.count);o.offset=a.offset,i.computePrimitiveBounds(a.offset,a.count,o),i._roots=n.map(c=>{let l=Uv(i,o,c.offset,c.count,e,a),h=bd(l),d=new t(cn*h);return Nv(0,l,d),d})}var ao=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}},_d=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},ft=new _d,ps,Jr,Vr=[],vl=new ao(()=>new Ze);function Bv(i,e,t,n,s,r){ps=vl.getPrimitive(),Jr=vl.getPrimitive(),Vr.push(ps,Jr),ft.setBuffer(i._roots[e]);let a=yd(0,i.geometry,t,n,s,r);ft.clearBuffer(),vl.releasePrimitive(ps),vl.releasePrimitive(Jr),Vr.pop(),Vr.pop();let o=Vr.length;return o>0&&(Jr=Vr[o-1],ps=Vr[o-2]),a}function yd(i,e,t,n,s=null,r=0,a=0){let{float32Array:o,uint16Array:c,uint32Array:l}=ft,h=i*2;if(Tt(h,c)){let u=Xt(i,l),f=ln(h,c);return yt(i,o,ps),n(u,f,!1,a,r+i/kt,ps)}else{let R=function(P){let{uint16Array:D,uint32Array:O}=ft,N=P*2;for(;!Tt(N,D);)P=zt(P),N=P*2;return Xt(P,O)},C=function(P){let{uint16Array:D,uint32Array:O}=ft,N=P*2;for(;!Tt(N,D);)P=Vt(P,O),N=P*2;return Xt(P,O)+ln(N,D)},u=zt(i),f=Vt(i,l),g=u,y=f,m,p,_,M;if(s&&(_=ps,M=Jr,yt(g,o,_),yt(y,o,M),m=s(_),p=s(M),p<m)){g=f,y=u;let P=m;m=p,p=P,_=M}_||(_=ps,yt(g,o,_));let b=Tt(g*2,c),v=t(_,b,m,a+1,r+g/kt),w;if(v===hm){let P=R(g),O=C(g)-P;w=n(P,O,!0,a+1,r+g/kt,_)}else w=v&&yd(g,e,t,n,s,r,a+1);if(w)return!0;M=Jr,yt(y,o,M);let A=Tt(y*2,c),x=t(M,A,p,a+1,r+y/kt),T;if(x===hm){let P=R(y),O=C(y)-P;T=n(P,O,!0,a+1,r+y/kt,M)}else T=x&&yd(y,e,t,n,s,r,a+1);return!!T}}var ro=new ft.constructor,Bl=new ft.constructor,fs=new ao(()=>new Ze),Gr=new Ze,Hr=new Ze,od=new Ze,cd=new Ze,ld=!1;function Ov(i,e,t,n){if(ld)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ld=!0;let s=i._roots,r=e._roots,a,o=0,c=0,l=new Ee().copy(t).invert();for(let h=0,d=s.length;h<d;h++){ro.setBuffer(s[h]),c=0;let u=fs.getPrimitive();yt(0,ro.float32Array,u),u.applyMatrix4(l);for(let f=0,g=r.length;f<g&&(Bl.setBuffer(r[f]),a=Qn(0,0,t,l,n,o,c,0,0,u),Bl.clearBuffer(),c+=r[f].byteLength/cn,!a);f++);if(fs.releasePrimitive(u),ro.clearBuffer(),o+=s[h].byteLength/cn,a)break}return ld=!1,a}function Qn(i,e,t,n,s,r=0,a=0,o=0,c=0,l=null,h=!1){let d,u;h?(d=Bl,u=ro):(d=ro,u=Bl);let f=d.float32Array,g=d.uint32Array,y=d.uint16Array,m=u.float32Array,p=u.uint32Array,_=u.uint16Array,M=i*2,b=e*2,v=Tt(M,y),w=Tt(b,_),A=!1;if(w&&v)h?A=s(Xt(e,p),ln(e*2,_),Xt(i,g),ln(i*2,y),c,a+e/kt,o,r+i/kt):A=s(Xt(i,g),ln(i*2,y),Xt(e,p),ln(e*2,_),o,r+i/kt,c,a+e/kt);else if(w){let x=fs.getPrimitive();yt(e,m,x),x.applyMatrix4(t);let T=zt(i),R=Vt(i,g);yt(T,f,Gr),yt(R,f,Hr);let C=x.intersectsBox(Gr),P=x.intersectsBox(Hr);A=C&&Qn(e,T,n,t,s,a,r,c,o+1,x,!h)||P&&Qn(e,R,n,t,s,a,r,c,o+1,x,!h),fs.releasePrimitive(x)}else{let x=zt(e),T=Vt(e,p);yt(x,m,od),yt(T,m,cd);let R=l.intersectsBox(od),C=l.intersectsBox(cd);if(R&&C)A=Qn(i,x,t,n,s,r,a,o,c+1,l,h)||Qn(i,T,t,n,s,r,a,o,c+1,l,h);else if(R)if(v)A=Qn(i,x,t,n,s,r,a,o,c+1,l,h);else{let P=fs.getPrimitive();P.copy(od).applyMatrix4(t);let D=zt(i),O=Vt(i,g);yt(D,f,Gr),yt(O,f,Hr);let N=P.intersectsBox(Gr),H=P.intersectsBox(Hr);A=N&&Qn(x,D,n,t,s,a,r,c,o+1,P,!h)||H&&Qn(x,O,n,t,s,a,r,c,o+1,P,!h),fs.releasePrimitive(P)}else if(C)if(v)A=Qn(i,T,t,n,s,r,a,o,c+1,l,h);else{let P=fs.getPrimitive();P.copy(cd).applyMatrix4(t);let D=zt(i),O=Vt(i,g);yt(D,f,Gr),yt(O,f,Hr);let N=P.intersectsBox(Gr),H=P.intersectsBox(Hr);A=N&&Qn(T,D,n,t,s,a,r,c,o+1,P,!h)||H&&Qn(T,O,n,t,s,a,r,c,o+1,P,!h),fs.releasePrimitive(P)}}return A}var hd=new class{constructor(){let i=null,e=null,t=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=i=r._roots[a],this.uint16Array=t=new Uint16Array(i),this.uint32Array=e=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=r=>{let a=r*2;for(;!Tt(a,t);)r=zt(r),a=r*2;return Xt(r,e)},this.getRangeEnd=r=>{let a=r*2;for(;!Tt(a,t);)r=Vt(r,e),a=r*2;return Xt(r,e)+ln(a,t)};let s=(r,a,o)=>{let c=a*2,l=Tt(c,t);if(!r(o,l,a)&&!l){let d=zt(a),u=Vt(a,e);s(r,d,o+1),s(r,u,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,o,c)=>{if(o){let l=c*2,h=e[c+6],d=t[l+14];return r(a,o,new Float32Array(i,c*4,6),h,d)}else{let l=Dd(c,e);return r(a,o,new Float32Array(i,c*4,6),l)}})}}},pm=new Ze,Wr=new Float32Array(6),vd=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...Cm,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),Fv(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,h=-1/0;for(let d=e,u=e+t;d<u;d++){this.writePrimitiveBounds(d,Wr,0);let[f,g,y,m,p,_]=Wr;f<r&&(r=f),m>c&&(c=m),g<a&&(a=g),p>l&&(l=p),y<o&&(o=y),_>h&&(h=_)}return n[s+0]=r,n[s+1]=a,n[s+2]=o,n[s+3]=c,n[s+4]=l,n[s+5]=h,n}computePrimitiveBounds(e,t,n){let s=n.offset||0;for(let r=e,a=e+t;r<a;r++){this.writePrimitiveBounds(r,Wr,0);let[o,c,l,h,d,u]=Wr,f=(o+h)/2,g=(c+d)/2,y=(l+u)/2,m=(h-o)/2,p=(d-c)/2,_=(u-l)/2,M=(r-s)*6;n[M+0]=f,n[M+1]=m+(Math.abs(f)+m)*Ul,n[M+2]=g,n[M+3]=p+(Math.abs(g)+p)*Ul,n[M+4]=y,n[M+5]=_+(Math.abs(y)+_)*Ul}return n}shiftPrimitiveOffsets(e){let t=this._indirectBuffer;if(t)for(let n=0,s=t.length;n<s;n++)t[n]+=e;else{let n=this._roots;for(let s=0;s<n.length;s++){let r=n[s],a=new Uint32Array(r),o=new Uint16Array(r),c=r.byteLength/cn;for(let l=0;l<c;l++){let h=kt*l,d=2*h;Tt(d,o)&&(a[h+6]+=e)}}}}traverse(e,t=0){hd.setBVH(this,t),hd.traverse(e),hd.reset()}refit(){let e=this._roots;for(let t=0,n=e.length;t<n;t++){let s=e[t],r=new Uint32Array(s),a=new Uint16Array(s),o=new Float32Array(s),c=s.byteLength/cn;for(let l=c-1;l>=0;l--){let h=l*kt,d=h*2;if(Tt(d,a)){let f=Xt(h,r),g=ln(d,a);this.writePrimitiveRangeBounds(f,g,Wr,0),o.set(Wr,h)}else{let f=zt(h),g=Vt(h,r);for(let y=0;y<3;y++){let m=o[f+y],p=o[f+y+3],_=o[g+y],M=o[g+y+3];o[h+y]=m<_?m:_,o[h+y+3]=p>M?p:M}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{yt(0,new Float32Array(n),pm),e.union(pm)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:a,iterate:o}=e;if(s&&r){let d=s;s=(u,f,g,y,m)=>d(u,f,g,y,m)?!0:o(u,f,this,r,g,y,a)}else s||(r?s=(d,u,f,g)=>o(d,u,this,r,f,g,a):s=(d,u,f)=>f);let c=!1,l=0,h=this._roots;for(let d=0,u=h.length;d<u;d++){let f=h[d];if(c=Bv(this,d,n,s,t,l),c)break;l+=f.byteLength/cn}return c}bvhcast(e,t,n){let{intersectsRanges:s}=n;return Ov(this,e,t,s)}};function kv(){return typeof SharedArrayBuffer<"u"}function Nd(i){return i.index?i.index.count:i.attributes.position.count}function Ol(i){return Nd(i)/3}function zv(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function Vv(i,e){if(!i.index){let t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=zv(t,n);i.setIndex(new ut(s,1));for(let r=0;r<t;r++)s[r]=r}}function Gv(i,e,t){let n=Nd(i)/t,s=e||i.drawRange,r=s.start/t,a=(s.start+s.count)/t,o=Math.max(0,r),c=Math.min(n,a)-o;return{offset:Math.floor(o),count:Math.floor(c)}}function Hv(i,e){return i.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function mm(i,e,t){let n=Gv(i,e,t),s=Hv(i,t);if(!s.length)return[n];let r=[],a=n.offset,o=n.offset+n.count,c=Nd(i)/t,l=[];for(let u of s){let{offset:f,count:g}=u,y=f,m=isFinite(g)?g:c-f,p=f+m;y<o&&p>a&&(l.push({pos:Math.max(a,y),isStart:!0}),l.push({pos:Math.min(o,p),isStart:!1}))}l.sort((u,f)=>u.pos!==f.pos?u.pos-f.pos:u.type==="end"?-1:1);let h=0,d=null;for(let u of l){let f=u.pos;h!==0&&f!==d&&r.push({offset:d,count:f-d}),h+=u.isStart?1:-1,d=f}return r}function Wv(i,e){let t=i[i.length-1],n=t.offset+t.count>2**16,s=i.reduce((l,h)=>l+h.count,0),r=n?4:2,a=e?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),o=n?new Uint32Array(a):new Uint16Array(a),c=0;for(let l=0;l<i.length;l++){let{offset:h,count:d}=i[l];for(let u=0;u<d;u++)o[c+u]=h+u;c+=d}return o}var Md=class extends vd{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!kv())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...Cm,...t},t[Ld]||this.init(t)}init(e){let{geometry:t,primitiveStride:n}=this;if(e.indirect){let s=mm(t,e.range,n),r=Wv(s,e.useSharedArrayBuffer);this._indirectBuffer=r}else Vv(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Ze))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:mm(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}},ei=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){let c=e[r][t];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){let o=t[r],c=e.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}};ei.prototype.setFromBox=(function(){let i=new L;return function(t,n){let s=n.min,r=n.max,a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*h+r.z*(1-h);let d=t.dot(i);a=Math.min(d,a),o=Math.max(d,o)}this.min=a,this.max=o}})();var qv=(function(){let i=new L,e=new L,t=new L;return function(s,r,a){let o=s.start,c=i,l=r.start,h=e;t.subVectors(o,l),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);let d=t.dot(h),u=h.dot(c),f=h.dot(h),g=t.dot(c),m=c.dot(c)*f-u*u,p,_;m!==0?p=(d*u-g*f)/m:p=0,_=(d+p*u)/f,a.x=p,a.y=_}})(),Ud=(function(){let i=new _e,e=new L,t=new L;return function(s,r,a,o){qv(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let h;c<0?h=s.start:h=s.end;let d;l<0?d=r.start:d=r.end;let u=e,f=t;if(s.closestPointToPoint(d,!0,e),r.closestPointToPoint(h,!0,t),u.distanceToSquared(d)<=f.distanceToSquared(h)){a.copy(u),o.copy(d);return}else{a.copy(h),o.copy(f);return}}}})(),Xv=(function(){let i=new L,e=new L,t=new un,n=new Cn;return function(r,a){let{radius:o,center:c}=r,{a:l,b:h,c:d}=a;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=h,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;let y=a.getPlane(t);if(Math.abs(y.distanceToPoint(c))<=o){let p=y.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),jv=["x","y","z"],Gi=1e-15,gm=Gi*Gi;function Vn(i){return Math.abs(i)<Gi}var In=class extends nn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new ei),this.points=[this.a,this.b,this.c],this.plane=new un,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Cn,this.needsUpdate=!0}intersectsSphere(e){return Xv(e,this)}update(){let e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);let l=r[1],h=a[1];l.subVectors(e,t),h.setFromPoints(l,s);let d=r[2],u=a[2];d.subVectors(t,n),u.setFromPoints(d,s);let f=r[3],g=a[3];f.subVectors(n,e),g.setFromPoints(f,s);let y=l.length(),m=d.length(),p=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,y<Gi?m<Gi||p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<Gi?p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<Gi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};In.prototype.closestPointToSegment=(function(){let i=new L,e=new L,t=new Cn;return function(s,r=null,a=null){let{start:o,end:c}=s,l=this.points,h,d=1/0;for(let u=0;u<3;u++){let f=(u+1)%3;t.start.copy(l[u]),t.end.copy(l[f]),Ud(t,s,i,e),h=i.distanceToSquared(e),h<d&&(d=h,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),h=o.distanceToSquared(i),h<d&&(d=h,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),h=c.distanceToSquared(i),h<d&&(d=h,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(d)}})();In.prototype.intersectsTriangle=(function(){let i=new In,e=new ei,t=new ei,n=new L,s=new L,r=new L,a=new L,o=new Cn,c=new Cn,l=new L,h=new _e,d=new _e;function u(M,b,v,w){let A=n;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?A.copy(M.plane.normal):A.copy(b.plane.normal);let x=M.satBounds,T=M.satAxes;for(let P=1;P<4;P++){let D=x[P],O=T[P];if(e.setFromPoints(O,b.points),D.isSeparated(e)||(a.copy(A).cross(O),e.setFromPoints(a,M.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}let R=b.satBounds,C=b.satAxes;for(let P=1;P<4;P++){let D=R[P],O=C[P];if(e.setFromPoints(O,M.points),D.isSeparated(e)||(a.crossVectors(A,O),e.setFromPoints(a,M.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return v&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function f(M,b,v,w,A,x,T,R,C,P,D){let O=T/(T-R);P.x=w+(A-w)*O,D.start.subVectors(b,M).multiplyScalar(O).add(M),O=T/(T-C),P.y=w+(x-w)*O,D.end.subVectors(v,M).multiplyScalar(O).add(M)}function g(M,b,v,w,A,x,T,R,C,P,D){if(A>0)f(M.c,M.a,M.b,w,b,v,C,T,R,P,D);else if(x>0)f(M.b,M.a,M.c,v,b,w,R,T,C,P,D);else if(R*C>0||T!=0)f(M.a,M.b,M.c,b,v,w,T,R,C,P,D);else if(R!=0)f(M.b,M.a,M.c,v,b,w,R,T,C,P,D);else if(C!=0)f(M.c,M.a,M.b,w,b,v,C,T,R,P,D);else return!0;return!1}function y(M,b,v,w){let A=b.degenerateSegment,x=M.plane.distanceToPoint(A.start),T=M.plane.distanceToPoint(A.end);return Vn(x)?Vn(T)?u(M,b,v,w):(v&&(v.start.copy(A.start),v.end.copy(A.start)),M.containsPoint(A.start)):Vn(T)?(v&&(v.start.copy(A.end),v.end.copy(A.end)),M.containsPoint(A.end)):M.plane.intersectLine(A,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),M.containsPoint(n)):!1}function m(M,b,v){let w=b.a;return Vn(M.plane.distanceToPoint(w))&&M.containsPoint(w)?(v&&(v.start.copy(w),v.end.copy(w)),!0):!1}function p(M,b,v){let w=M.degenerateSegment,A=b.a;return w.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<gm?(v&&(v.start.copy(A),v.end.copy(A)),!0):!1}function _(M,b,v,w){if(M.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){let A=M.degenerateSegment,x=b.degenerateSegment,T=s,R=r;A.delta(T),x.delta(R);let C=n.subVectors(x.start,A.start),P=T.x*R.y-T.y*R.x;if(Vn(P))return!1;let D=(C.x*R.y-C.y*R.x)/P,O=-(T.x*C.y-T.y*C.x)/P;if(D<0||D>1||O<0||O>1)return!1;let N=A.start.z+T.z*D,H=x.start.z+R.z*O;return Vn(N-H)?(v&&(v.start.copy(A.start).addScaledVector(T,D),v.end.copy(A.start).addScaledVector(T,D)),!0):!1}else return b.isDegenerateIntoPoint?p(M,b,v):y(b,M,v,w);else{if(M.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(M.a)<gm?(v&&(v.start.copy(M.a),v.end.copy(M.a)),!0):!1:b.isDegenerateIntoSegment?p(b,M,v):m(b,M,v);if(b.isDegenerateIntoPoint)return m(M,b,v);if(b.isDegenerateIntoSegment)return y(M,b,v,w)}}return function(b,v=null,w=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(i.copy(b),i.update(),b=i);let A=_(this,b,v,w);if(A!==void 0)return A;let x=this.plane,T=b.plane,R=T.distanceToPoint(this.a),C=T.distanceToPoint(this.b),P=T.distanceToPoint(this.c);Vn(R)&&(R=0),Vn(C)&&(C=0),Vn(P)&&(P=0);let D=R*C,O=R*P;if(D>0&&O>0)return!1;let N=x.distanceToPoint(b.a),H=x.distanceToPoint(b.b),q=x.distanceToPoint(b.c);Vn(N)&&(N=0),Vn(H)&&(H=0),Vn(q)&&(q=0);let Z=N*H,Q=N*q;if(Z>0&&Q>0)return!1;s.copy(x.normal),r.copy(T.normal);let se=s.cross(r),le=0,ge=Math.abs(se.x),Xe=Math.abs(se.y);Xe>ge&&(ge=Xe,le=1),Math.abs(se.z)>ge&&(le=2);let Ge=jv[le],Y=this.a[Ge],ne=this.b[Ge],ee=this.c[Ge],De=b.a[Ge],Fe=b.b[Ge],Pe=b.c[Ge];if(g(this,Y,ne,ee,D,O,R,C,P,h,o))return u(this,b,v,w);if(g(b,De,Fe,Pe,Z,Q,N,H,q,d,c))return u(this,b,v,w);if(h.y<h.x){let ht=h.y;h.y=h.x,h.x=ht,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(d.y<d.x){let ht=d.y;d.y=d.x,d.x=ht,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return h.y<d.x||d.y<h.x?!1:(v&&(d.x>h.x?v.start.copy(c.start):v.start.copy(o.start),d.y<h.y?v.end.copy(c.end):v.end.copy(o.end)),!0)}})();In.prototype.distanceToPoint=(function(){let i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();In.prototype.distanceToTriangle=(function(){let i=new L,e=new L,t=["a","b","c"],n=new Cn,s=new Cn;return function(a,o=null,c=null){let l=o||c?n:null;if(this.intersectsTriangle(a,l,!0))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let h=1/0;for(let d=0;d<3;d++){let u,f=t[d],g=a[f];this.closestPointToPoint(g,i),u=g.distanceToSquared(i),u<h&&(h=u,o&&o.copy(i),c&&c.copy(g));let y=this[f];a.closestPointToPoint(y,i),u=y.distanceToSquared(i),u<h&&(h=u,o&&o.copy(y),c&&c.copy(i))}for(let d=0;d<3;d++){let u=t[d],f=t[(d+1)%3];n.set(this[u],this[f]);for(let g=0;g<3;g++){let y=t[g],m=t[(g+1)%3];s.set(a[y],a[m]),Ud(n,s,i,e);let p=i.distanceToSquared(e);p<h&&(h=p,o&&o.copy(i),c&&c.copy(e))}}return Math.sqrt(h)}})();var Zt=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ee,this.invMatrix=new Ee,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new ei),this.alignedSatBounds=new Array(3).fill().map(()=>new ei),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};Zt.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){let u=1*l|2*h|4*d,f=s[u];f.x=l?n.x:t.x,f.y=h?n.y:t.y,f.z=d?n.z:t.z,f.applyMatrix4(e)}let r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){let h=a[l],d=r[l],u=1<<l,f=s[u];h.subVectors(o,f),d.setFromPoints(h,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Zt.prototype.intersectsBox=(function(){let i=new ei;return function(t){this.needsUpdate&&this.update();let n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=a[c],h=r[c];if(i.setFromBox(l,t),h.isSeparated(i))return!1}return!0}})();Zt.prototype.intersectsTriangle=(function(){let i=new In,e=new Array(3),t=new ei,n=new ei,s=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);let o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let u=0;u<3;u++){let f=o[u],g=c[u];if(t.setFromPoints(g,e),f.isSeparated(t))return!1}let l=a.satBounds,h=a.satAxes,d=this.points;for(let u=0;u<3;u++){let f=l[u],g=h[u];if(t.setFromPoints(g,d),f.isSeparated(t))return!1}for(let u=0;u<3;u++){let f=c[u];for(let g=0;g<4;g++){let y=h[g];if(s.crossVectors(f,y),t.setFromPoints(s,e),n.setFromPoints(s,d),t.isSeparated(n))return!1}}return!0}})();Zt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Zt.prototype.distanceToPoint=(function(){let i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Zt.prototype.distanceToBox=(function(){let i=["x","y","z"],e=new Array(12).fill().map(()=>new Cn),t=new Array(12).fill().map(()=>new Cn),n=new L,s=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let h=o*o,d=a.min,u=a.max,f=this.points,g=1/0;for(let m=0;m<8;m++){let p=f[m];s.copy(p).clamp(d,u);let _=p.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(p),l&&l.copy(s),_<h))return Math.sqrt(_)}let y=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){let M=(m+1)%3,b=(m+2)%3,v=p<<M|_<<b,w=1<<m|p<<M|_<<b,A=f[v],x=f[w];e[y].set(A,x);let R=i[m],C=i[M],P=i[b],D=t[y],O=D.start,N=D.end;O[R]=d[R],O[C]=p?d[C]:u[C],O[P]=_?d[P]:u[C],N[R]=u[R],N[C]=p?d[C]:u[C],N[P]=_?d[P]:u[C],y++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let _=0;_<=1;_++){s.x=m?u.x:d.x,s.y=p?u.y:d.y,s.z=_?u.z:d.z,this.closestPointToPoint(s,n);let M=s.distanceToSquared(n);if(M<g&&(g=M,c&&c.copy(n),l&&l.copy(s),M<h))return Math.sqrt(M)}for(let m=0;m<12;m++){let p=e[m];for(let _=0;_<12;_++){let M=t[_];Ud(p,M,n,s);let b=n.distanceToSquared(s);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(s),b<h))return Math.sqrt(b)}}return Math.sqrt(g)}})();var Sd=class extends ao{constructor(){super(()=>new In)}},Gn=new Sd,$a=new L,ud=new L;function Kv(i,e,t={},n=0,s=1/0){let r=n*n,a=s*s,o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:h=>($a.copy(e).clamp(h.min,h.max),$a.distanceToSquared(e)),intersectsBounds:(h,d,u)=>u<o&&u<a,intersectsTriangle:(h,d)=>{h.closestPointToPoint(e,$a);let u=e.distanceToSquared($a);return u<o&&(ud.copy($a),o=u,c=d),u<r}}),o===1/0)return null;let l=Math.sqrt(o);return t.point?t.point.copy(ud):t.point=ud.clone(),t.distance=l,t.faceIndex=c,t}var Ml=parseInt("185")>=169,Yv=parseInt("185")<=161,Hs=new L,Ws=new L,qs=new L,Sl=new _e,wl=new _e,Al=new _e,bm=new L,xm=new L,_m=new L,Qa=new L;function Jv(i,e,t,n,s,r,a,o){let c;if(r===Yt?c=i.intersectTriangle(n,t,e,!0,s):c=i.intersectTriangle(e,t,n,r!==yn,s),c===null)return null;let l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function ym(i,e,t,n,s,r,a,o,c,l,h){Hs.fromBufferAttribute(e,r),Ws.fromBufferAttribute(e,a),qs.fromBufferAttribute(e,o);let d=Jv(i,Hs,Ws,qs,Qa,c,l,h);if(d){if(n){Sl.fromBufferAttribute(n,r),wl.fromBufferAttribute(n,a),Al.fromBufferAttribute(n,o),d.uv=new _e;let f=nn.getInterpolation(Qa,Hs,Ws,qs,Sl,wl,Al,d.uv);Ml||(d.uv=f)}if(s){Sl.fromBufferAttribute(s,r),wl.fromBufferAttribute(s,a),Al.fromBufferAttribute(s,o),d.uv1=new _e;let f=nn.getInterpolation(Qa,Hs,Ws,qs,Sl,wl,Al,d.uv1);Ml||(d.uv1=f),Yv&&(d.uv2=d.uv1)}if(t){bm.fromBufferAttribute(t,r),xm.fromBufferAttribute(t,a),_m.fromBufferAttribute(t,o),d.normal=new L;let f=nn.getInterpolation(Qa,Hs,Ws,qs,bm,xm,_m,d.normal);d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1),Ml||(d.normal=f)}let u={a:r,b:a,c:o,normal:new L,materialIndex:0};if(nn.getNormal(Hs,Ws,qs,u.normal),d.face=u,d.faceIndex=r,Ml){let f=new L;nn.getBarycoord(Qa,Hs,Ws,qs,f),d.barycoord=f}}return d}function vm(i){return i&&i.isMaterial?i.side:i}function kl(i,e,t,n,s,r,a){let o=n*3,c=o+0,l=o+1,h=o+2,{index:d,groups:u}=i;i.index&&(c=d.getX(c),l=d.getX(l),h=d.getX(h));let{position:f,normal:g,uv:y,uv1:m}=i.attributes;if(Array.isArray(e)){let p=n*3;for(let _=0,M=u.length;_<M;_++){let{start:b,count:v,materialIndex:w}=u[_];if(p>=b&&p<b+v){let A=vm(e[w]),x=ym(t,f,g,y,m,c,l,h,A,r,a);if(x)if(x.faceIndex=n,x.face.materialIndex=w,s)s.push(x);else return x}}}else{let p=vm(e),_=ym(t,f,g,y,m,c,l,h,p,r,a);if(_)if(_.faceIndex=n,_.face.materialIndex=0,s)s.push(_);else return _}return null}function Dt(i,e,t,n){let s=i.a,r=i.b,a=i.c,o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function Zv(i,e,t,n,s,r,a,o){let{geometry:c,_indirectBuffer:l}=i;for(let h=n,d=n+s;h<d;h++)kl(c,e,t,h,r,a,o)}function $v(i,e,t,n,s,r,a){let{geometry:o,_indirectBuffer:c}=i,l=1/0,h=null;for(let d=n,u=n+s;d<u;d++){let f;f=kl(o,e,t,d,null,r,a),f&&f.distance<l&&(h=f,l=f.distance)}return h}function Qv(i,e,t,n,s,r,a){let{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let h=i,d=e+i;h<d;h++){let u;if(u=h,Dt(a,u*3,c,l),a.needsUpdate=!0,n(a,u,s,r))return!0}return!1}function eM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,a,o,c,l=0,h=i._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),d(0,l),l+=r.byteLength;function d(u,f,g=!1){let y=u*2;if(Tt(y,o)){let m=Xt(u,a),p=ln(y,o),_=1/0,M=1/0,b=1/0,v=-1/0,w=-1/0,A=-1/0;for(let x=3*m,T=3*(m+p);x<T;x++){let R=n[x],C=s.getX(R),P=s.getY(R),D=s.getZ(R);C<_&&(_=C),C>v&&(v=C),P<M&&(M=P),P>w&&(w=P),D<b&&(b=D),D>A&&(A=D)}return c[u+0]!==_||c[u+1]!==M||c[u+2]!==b||c[u+3]!==v||c[u+4]!==w||c[u+5]!==A?(c[u+0]=_,c[u+1]=M,c[u+2]=b,c[u+3]=v,c[u+4]=w,c[u+5]=A,!0):!1}else{let m=zt(u),p=Vt(u,a),_=g,M=!1,b=!1;if(e){if(!_){let R=m/kt+f/cn,C=p/kt+f/cn;M=e.has(R),b=e.has(C),_=!M&&!b}}else M=!0,b=!0;let v=_||M,w=_||b,A=!1;v&&(A=d(m,f,_));let x=!1;w&&(x=d(p,f,_));let T=A||x;if(T)for(let R=0;R<3;R++){let C=m+R,P=p+R,D=c[C],O=c[C+3],N=c[P],H=c[P+3];c[u+R]=D<N?D:N,c[u+R+3]=O>H?O:H}return T}}}function ms(i,e,t,n,s){let r,a,o,c,l,h,d=1/t.direction.x,u=1/t.direction.y,f=1/t.direction.z,g=t.origin.x,y=t.origin.y,m=t.origin.z,p=e[i],_=e[i+3],M=e[i+1],b=e[i+3+1],v=e[i+2],w=e[i+3+2];return d>=0?(r=(p-g)*d,a=(_-g)*d):(r=(_-g)*d,a=(p-g)*d),u>=0?(o=(M-y)*u,c=(b-y)*u):(o=(b-y)*u,c=(M-y)*u),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),f>=0?(l=(v-m)*f,h=(w-m)*f):(l=(w-m)*f,h=(v-m)*f),r>h||l>a)?!1:((l>r||r!==r)&&(r=l),(h<a||a!==a)&&(a=h),r<=s&&a>=n)}function tM(i,e,t,n,s,r,a,o){let{geometry:c,_indirectBuffer:l}=i;for(let h=n,d=n+s;h<d;h++){let u=l?l[h]:h;kl(c,e,t,u,r,a,o)}}function nM(i,e,t,n,s,r,a){let{geometry:o,_indirectBuffer:c}=i,l=1/0,h=null;for(let d=n,u=n+s;d<u;d++){let f;f=kl(o,e,t,c?c[d]:d,null,r,a),f&&f.distance<l&&(h=f,l=f.distance)}return h}function iM(i,e,t,n,s,r,a){let{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let h=i,d=e+i;h<d;h++){let u;if(u=t.resolveTriangleIndex(h),Dt(a,u*3,c,l),a.needsUpdate=!0,n(a,u,s,r))return!0}return!1}function sM(i,e,t,n,s,r,a){ft.setBuffer(i._roots[e]),wd(0,i,t,n,s,r,a),ft.clearBuffer()}function wd(i,e,t,n,s,r,a){let{float32Array:o,uint16Array:c,uint32Array:l}=ft,h=i*2;if(Tt(h,c)){let u=Xt(i,l),f=ln(h,c);Zv(e,t,n,u,f,s,r,a)}else{let u=zt(i);ms(u,o,n,r,a)&&wd(u,e,t,n,s,r,a);let f=Vt(i,l);ms(f,o,n,r,a)&&wd(f,e,t,n,s,r,a)}}var rM=["x","y","z"];function aM(i,e,t,n,s,r){ft.setBuffer(i._roots[e]);let a=Ad(0,i,t,n,s,r);return ft.clearBuffer(),a}function Ad(i,e,t,n,s,r){let{float32Array:a,uint16Array:o,uint32Array:c}=ft,l=i*2;if(Tt(l,o)){let d=Xt(i,c),u=ln(l,o);return $v(e,t,n,d,u,s,r)}else{let d=Dd(i,c),u=rM[d],g=n.direction[u]>=0,y,m;g?(y=zt(i),m=Vt(i,c)):(y=Vt(i,c),m=zt(i));let _=ms(y,a,n,s,r)?Ad(y,e,t,n,s,r):null;if(_){let v=_.point[u];if(g?v<=a[m+d]:v>=a[m+d+3])return _}let b=ms(m,a,n,s,r)?Ad(m,e,t,n,s,r):null;return _&&b?_.distance<=b.distance?_:b:_||b||null}}var Tl=new Ze,qr=new In,Xr=new In,eo=new Ee,Mm=new Zt,El=new Zt;function oM(i,e,t,n){ft.setBuffer(i._roots[e]);let s=Td(0,i,t,n);return ft.clearBuffer(),s}function Td(i,e,t,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=ft,c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Mm.set(t.boundingBox.min,t.boundingBox.max,n),s=Mm),Tt(c,a)){let h=e.geometry,d=h.index,u=h.attributes.position,f=t.index,g=t.attributes.position,y=Xt(i,o),m=ln(c,a);if(eo.copy(n).invert(),t.boundsTree)return yt(i,r,El),El.matrix.copy(eo),El.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>El.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let M=y*3,b=(m+y)*3;M<b;M+=3)if(Dt(Xr,M,d,u),Xr.needsUpdate=!0,_.intersectsTriangle(Xr))return!0;return!1}});{let p=Ol(t);for(let _=y*3,M=(m+y)*3;_<M;_+=3){Dt(qr,_,d,u),qr.a.applyMatrix4(eo),qr.b.applyMatrix4(eo),qr.c.applyMatrix4(eo),qr.needsUpdate=!0;for(let b=0,v=p*3;b<v;b+=3)if(Dt(Xr,b,f,g),Xr.needsUpdate=!0,qr.intersectsTriangle(Xr))return!0}}}else{let h=zt(i),d=Vt(i,o);return yt(h,r,Tl),!!(s.intersectsBox(Tl)&&Td(h,e,t,n,s)||(yt(d,r,Tl),s.intersectsBox(Tl)&&Td(d,e,t,n,s)))}}var Rl=new Ee,dd=new Zt,to=new Zt,cM=new L,lM=new L,hM=new L,uM=new L;function dM(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),dd.set(e.boundingBox.min,e.boundingBox.max,t),dd.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,l=o.index,h=e.attributes.position,d=e.index,u=Gn.getPrimitive(),f=Gn.getPrimitive(),g=cM,y=lM,m=null,p=null;s&&(m=hM,p=uM);let _=1/0,M=null,b=null;return Rl.copy(t).invert(),to.matrix.copy(Rl),i.shapecast({boundsTraverseOrder:v=>dd.distanceToBox(v),intersectsBounds:(v,w,A)=>A<_&&A<a?(w&&(to.min.copy(v.min),to.max.copy(v.max),to.needsUpdate=!0),!0):!1,intersectsRange:(v,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:x=>to.distanceToBox(x),intersectsBounds:(x,T,R)=>R<_&&R<a,intersectsRange:(x,T)=>{for(let R=x,C=x+T;R<C;R++){Dt(f,3*R,d,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let P=v,D=v+w;P<D;P++){Dt(u,3*P,l,c),u.needsUpdate=!0;let O=u.distanceToTriangle(f,g,m);if(O<_&&(y.copy(g),p&&p.copy(m),_=O,M=P,b=R),O<r)return!0}}}});{let A=Ol(e);for(let x=0,T=A;x<T;x++){Dt(f,3*x,d,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let R=v,C=v+w;R<C;R++){Dt(u,3*R,l,c),u.needsUpdate=!0;let P=u.distanceToTriangle(f,g,m);if(P<_&&(y.copy(g),p&&p.copy(m),_=P,M=R,b=x),P<r)return!0}}}}}),Gn.releasePrimitive(u),Gn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=_,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Rl),y.applyMatrix4(Rl),s.distance=y.sub(s.point).length(),s.faceIndex=b),n)}function fM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position,r,a,o,c,l=0,h=i._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),d(0,l),l+=r.byteLength;function d(u,f,g=!1){let y=u*2;if(Tt(y,o)){let m=Xt(u,a),p=ln(y,o),_=1/0,M=1/0,b=1/0,v=-1/0,w=-1/0,A=-1/0;for(let x=m,T=m+p;x<T;x++){let R=3*i.resolveTriangleIndex(x);for(let C=0;C<3;C++){let P=R+C;P=n?n[P]:P;let D=s.getX(P),O=s.getY(P),N=s.getZ(P);D<_&&(_=D),D>v&&(v=D),O<M&&(M=O),O>w&&(w=O),N<b&&(b=N),N>A&&(A=N)}}return c[u+0]!==_||c[u+1]!==M||c[u+2]!==b||c[u+3]!==v||c[u+4]!==w||c[u+5]!==A?(c[u+0]=_,c[u+1]=M,c[u+2]=b,c[u+3]=v,c[u+4]=w,c[u+5]=A,!0):!1}else{let m=zt(u),p=Vt(u,a),_=g,M=!1,b=!1;if(e){if(!_){let R=m/kt+f/cn,C=p/kt+f/cn;M=e.has(R),b=e.has(C),_=!M&&!b}}else M=!0,b=!0;let v=_||M,w=_||b,A=!1;v&&(A=d(m,f,_));let x=!1;w&&(x=d(p,f,_));let T=A||x;if(T)for(let R=0;R<3;R++){let C=m+R,P=p+R,D=c[C],O=c[C+3],N=c[P],H=c[P+3];c[u+R]=D<N?D:N,c[u+R+3]=O>H?O:H}return T}}}function pM(i,e,t,n,s,r,a){ft.setBuffer(i._roots[e]),Ed(0,i,t,n,s,r,a),ft.clearBuffer()}function Ed(i,e,t,n,s,r,a){let{float32Array:o,uint16Array:c,uint32Array:l}=ft,h=i*2;if(Tt(h,c)){let u=Xt(i,l),f=ln(h,c);tM(e,t,n,u,f,s,r,a)}else{let u=zt(i);ms(u,o,n,r,a)&&Ed(u,e,t,n,s,r,a);let f=Vt(i,l);ms(f,o,n,r,a)&&Ed(f,e,t,n,s,r,a)}}var mM=["x","y","z"];function gM(i,e,t,n,s,r){ft.setBuffer(i._roots[e]);let a=Rd(0,i,t,n,s,r);return ft.clearBuffer(),a}function Rd(i,e,t,n,s,r){let{float32Array:a,uint16Array:o,uint32Array:c}=ft,l=i*2;if(Tt(l,o)){let d=Xt(i,c),u=ln(l,o);return nM(e,t,n,d,u,s,r)}else{let d=Dd(i,c),u=mM[d],g=n.direction[u]>=0,y,m;g?(y=zt(i),m=Vt(i,c)):(y=Vt(i,c),m=zt(i));let _=ms(y,a,n,s,r)?Rd(y,e,t,n,s,r):null;if(_){let v=_.point[u];if(g?v<=a[m+d]:v>=a[m+d+3])return _}let b=ms(m,a,n,s,r)?Rd(m,e,t,n,s,r):null;return _&&b?_.distance<=b.distance?_:b:_||b||null}}var Cl=new Ze,jr=new In,Kr=new In,no=new Ee,Sm=new Zt,Pl=new Zt;function bM(i,e,t,n){ft.setBuffer(i._roots[e]);let s=Cd(0,i,t,n);return ft.clearBuffer(),s}function Cd(i,e,t,n,s=null){let{float32Array:r,uint16Array:a,uint32Array:o}=ft,c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),Sm.set(t.boundingBox.min,t.boundingBox.max,n),s=Sm),Tt(c,a)){let h=e.geometry,d=h.index,u=h.attributes.position,f=t.index,g=t.attributes.position,y=Xt(i,o),m=ln(c,a);if(no.copy(n).invert(),t.boundsTree)return yt(i,r,Pl),Pl.matrix.copy(no),Pl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>Pl.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let M=y,b=m+y;M<b;M++)if(Dt(Kr,3*e.resolveTriangleIndex(M),d,u),Kr.needsUpdate=!0,_.intersectsTriangle(Kr))return!0;return!1}});{let p=Ol(t);for(let _=y,M=m+y;_<M;_++){let b=e.resolveTriangleIndex(_);Dt(jr,3*b,d,u),jr.a.applyMatrix4(no),jr.b.applyMatrix4(no),jr.c.applyMatrix4(no),jr.needsUpdate=!0;for(let v=0,w=p*3;v<w;v+=3)if(Dt(Kr,v,f,g),Kr.needsUpdate=!0,jr.intersectsTriangle(Kr))return!0}}}else{let h=zt(i),d=Vt(i,o);return yt(h,r,Cl),!!(s.intersectsBox(Cl)&&Cd(h,e,t,n,s)||(yt(d,r,Cl),s.intersectsBox(Cl)&&Cd(d,e,t,n,s)))}}var Il=new Ee,fd=new Zt,io=new Zt,xM=new L,_M=new L,yM=new L,vM=new L;function MM(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),fd.set(e.boundingBox.min,e.boundingBox.max,t),fd.needsUpdate=!0;let o=i.geometry,c=o.attributes.position,l=o.index,h=e.attributes.position,d=e.index,u=Gn.getPrimitive(),f=Gn.getPrimitive(),g=xM,y=_M,m=null,p=null;s&&(m=yM,p=vM);let _=1/0,M=null,b=null;return Il.copy(t).invert(),io.matrix.copy(Il),i.shapecast({boundsTraverseOrder:v=>fd.distanceToBox(v),intersectsBounds:(v,w,A)=>A<_&&A<a?(w&&(io.min.copy(v.min),io.max.copy(v.max),io.needsUpdate=!0),!0):!1,intersectsRange:(v,w)=>{if(e.boundsTree){let A=e.boundsTree;return A.shapecast({boundsTraverseOrder:x=>io.distanceToBox(x),intersectsBounds:(x,T,R)=>R<_&&R<a,intersectsRange:(x,T)=>{for(let R=x,C=x+T;R<C;R++){let P=A.resolveTriangleIndex(R);Dt(f,3*P,d,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let D=v,O=v+w;D<O;D++){let N=i.resolveTriangleIndex(D);Dt(u,3*N,l,c),u.needsUpdate=!0;let H=u.distanceToTriangle(f,g,m);if(H<_&&(y.copy(g),p&&p.copy(m),_=H,M=D,b=R),H<r)return!0}}}})}else{let A=Ol(e);for(let x=0,T=A;x<T;x++){Dt(f,3*x,d,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let R=v,C=v+w;R<C;R++){let P=i.resolveTriangleIndex(R);Dt(u,3*P,l,c),u.needsUpdate=!0;let D=u.distanceToTriangle(f,g,m);if(D<_&&(y.copy(g),p&&p.copy(m),_=D,M=R,b=x),D<r)return!0}}}}}),Gn.releasePrimitive(u),Gn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=_,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Il),y.applyMatrix4(Il),s.distance=y.sub(s.point).length(),s.faceIndex=b),n)}function wm(i,e,t){return i===null?null:(i.point.applyMatrix4(e.matrixWorld),i.distance=i.point.distanceTo(t.ray.origin),i.object=e,i)}var Ll=new Zt,Dl=new On,Am=new L,Tm=new Ee,Em=new L,pd=["getX","getY","getZ"],Pd=class i extends Md{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,s=e._roots,r=e._indirectBuffer,a=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(o.roots=s.map(c=>c.slice()),o.index=a?a.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=s,o.index=a?a.array:null,o.indirectBuffer=r),o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:a}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));let o=new i(t,{...n,[Ld]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){let l=t.getIndex();if(l===null){let h=new ut(e.index,1,!1);t.setIndex(h)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return o;function c(l){for(let h=0;h<l.length;h++){let d=l[h],u=new Uint32Array(d),f=new Uint16Array(d);for(let g=0,y=d.byteLength/cn;g<y;g++){let m=kt*g,p=2*m;Tt(p,f)||(u[m+6]=u[m+6]/kt-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,n){let s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,l=(r?r[e]:e)*3,h=l+0,d=l+1,u=l+2;o&&(h=o[h],d=o[d],u=o[u]);for(let f=0;f<3;f++){let g=a[pd[f]](h),y=a[pd[f]](d),m=a[pd[f]](u),p=g;y<p&&(p=y),m<p&&(p=m);let _=g;y>_&&(_=y),m>_&&(_=m),t[n+f]=p,t[n+f+3]=_}return t}computePrimitiveBounds(e,t,n){let s=this.geometry,r=this._indirectBuffer,a=s.attributes.position,o=s.index?s.index.array:null,c=a.normalized;if(e<0||t+e-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=a.array,h=a.offset||0,d=3;a.isInterleavedBufferAttribute&&(d=a.data.stride);let u=["getX","getY","getZ"],f=n.offset;for(let g=e,y=e+t;g<y;g++){let p=(r?r[g]:g)*3,_=(g-f)*6,M=p+0,b=p+1,v=p+2;o&&(M=o[M],b=o[b],v=o[v]),c||(M=M*d+h,b=b*d+h,v=v*d+h);for(let w=0;w<3;w++){let A,x,T;c?(A=a[u[w]](M),x=a[u[w]](b),T=a[u[w]](v)):(A=l[M+w],x=l[b+w],T=l[v+w]);let R=A;x<R&&(R=x),T<R&&(R=T);let C=A;x>C&&(C=x),T>C&&(C=T);let P=(C-R)/2,D=w*2;n[_+D+0]=R+P,n[_+D+1]=P+(Math.abs(R)+P)*Ul}}return n}raycastObject3D(e,t,n=[]){let{material:s}=e;if(s===void 0)return;Tm.copy(e.matrixWorld).invert(),Dl.copy(t.ray).applyMatrix4(Tm),Em.setFromMatrixScale(e.matrixWorld),Am.copy(Dl.direction).multiply(Em);let r=Am.length(),a=t.near/r,o=t.far/r;if(t.firstHitOnly===!0){let c=this.raycastFirst(Dl,s,a,o);c=wm(c,e,t),c&&n.push(c)}else{let c=this.raycast(Dl,s,a,o);for(let l=0,h=c.length;l<h;l++){let d=wm(c[l],e,t);d&&n.push(d)}}return n}refit(e=null){return(this.indirect?fM:eM)(this,e)}raycast(e,t=bn,n=0,s=1/0){let r=this._roots,a=[],o=this.indirect?pM:sM;for(let c=0,l=r.length;c<l;c++)o(this,c,t,e,a,n,s);return a}raycastFirst(e,t=bn,n=0,s=1/0){let r=this._roots,a=null,o=this.indirect?gM:aM;for(let c=0,l=r.length;c<l;c++){let h=o(this,c,t,e,n,s);h!=null&&(a==null||h.distance<a.distance)&&(a=h)}return a}intersectsGeometry(e,t){let n=!1,s=this._roots,r=this.indirect?bM:oM;for(let a=0,o=s.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){let t=Gn.getPrimitive(),n=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?iM:Qv});return Gn.releasePrimitive(t),n}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n,a=Gn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let y=this.resolveTriangleIndex(g);Dt(a,y*3,o,c)}:g=>{Dt(a,g*3,o,c)},h=Gn.getPrimitive(),d=e.geometry.index,u=e.geometry.attributes.position,f=e.indirect?g=>{let y=e.resolveTriangleIndex(g);Dt(h,y*3,d,u)}:g=>{Dt(h,g*3,d,u)};if(r){if(!(e instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let g=(y,m,p,_,M,b,v,w)=>{for(let A=p,x=p+_;A<x;A++){f(A),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let T=y,R=y+m;T<R;T++)if(l(T),a.needsUpdate=!0,r(a,h,T,A,M,b,v,w))return!0}return!1};if(s){let y=s;s=function(m,p,_,M,b,v,w,A){return y(m,p,_,M,b,v,w,A)?!0:g(m,p,_,M,b,v,w,A)}}else s=g}return super.bvhcast(e,t,{intersectsRanges:s})}intersectsBox(e,t){return Ll.set(e.min,e.max,t),Ll.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ll.intersectsBox(n),intersectsTriangle:n=>Ll.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){return(this.indirect?MM:dM)(this,e,t,n,s,r,a)}closestPointToPoint(e,t={},n=0,s=1/0){return Kv(this,e,t,n,s)}};var JA=parseInt("185")>=169,ZA=parseInt("185")<=161;var $A=parseInt("185")>=166,Yr={Mesh:lt.prototype.raycast,Line:ci.prototype.raycast,LineSegments:li.prototype.raycast,LineLoop:ns.prototype.raycast,Points:is.prototype.raycast,BatchedMesh:xa.prototype.raycast},Jt=new lt,Nl=[];function Lm(i,e){if(this.isBatchedMesh)SM.call(this,i,e);else{let{geometry:t}=this;if(t.boundsTree)t.boundsTree.raycastObject3D(this,i,e);else{let n;if(this instanceof lt)n=Yr.Mesh;else if(this instanceof li)n=Yr.LineSegments;else if(this instanceof ns)n=Yr.LineLoop;else if(this instanceof ci)n=Yr.Line;else if(this instanceof is)n=Yr.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,e)}}}function SM(i,e){if(this.boundsTrees){let t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Jt.material=this.material,Jt.geometry=this.geometry;let a=Jt.geometry.boundsTree,o=Jt.geometry.drawRange;Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Lt);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;let h=n[c].geometryIndex;if(Jt.geometry.boundsTree=t[h],this.getMatrixAt(c,Jt.matrixWorld).premultiply(r),!Jt.geometry.boundsTree){this.getBoundingBoxAt(h,Jt.geometry.boundingBox),this.getBoundingSphereAt(h,Jt.geometry.boundingSphere);let d=s[h];Jt.geometry.setDrawRange(d.start,d.count)}Jt.raycast(i,Nl);for(let d=0,u=Nl.length;d<u;d++){let f=Nl[d];f.object=this,f.batchId=c,e.push(f)}Nl.length=0}Jt.geometry.boundsTree=a,Jt.geometry.drawRange=o,Jt.material=null,Jt.geometry=null}else Yr.BatchedMesh.call(this,i,e)}function Dm(i={}){let{type:e=Pd}=i;return this.boundsTree=new e(this,i),this.boundsTree}var wM=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var AM=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`;var QA=`
	${wM}
	${AM}
`;var js="https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/",Xs=js+"technical-specifications/cpu-1215c/",Nm="https://mall.industry.siemens.com/mall/en/EN/Catalog/Product/6ES7215-1AG40-0XB0",Hn=i=>({anchorKey:i.id,sourceTitle:"\u897F\u95E8\u5B50 S7-1200 \u7CFB\u7EDF\u624B\u518C",...i}),oo=[Hn({id:"overview",title:"\u5148\u8BA4\u8BC6\u8FD9\u53F0 PLC",eyebrow:"01 / \u6574\u673A\u6982\u89C8",summary:"SIMATIC S7-1200 \xB7 CPU 1215C DC/DC/DC\u3002\u628A\u4F20\u611F\u5668\u7684\u4FE1\u606F\u8BFB\u8FDB\u6765\uFF0C\u6309\u7A0B\u5E8F\u4F5C\u5224\u65AD\uFF0C\u518D\u8BA9\u6267\u884C\u5143\u4EF6\u52A8\u4F5C\u3002",purpose:"\u8FD9\u662F\u7D27\u51D1\u578B\u63A7\u5236\u5668\uFF1A\u5904\u7406\u5668\u3001\u5B58\u50A8\u5668\u3001\u7535\u6E90\u7535\u8DEF\u3001\u8F93\u5165\u8F93\u51FA\u548C\u901A\u4FE1\u63A5\u53E3\u96C6\u6210\u5728\u4E00\u4E2A\u673A\u58F3\u5185\u3002C \u8868\u793A\u7D27\u51D1\u578B\u3002",connection:"DC/DC/DC \u4F9D\u6B21\u8868\u793A\u76F4\u6D41\u7535\u6E90\u3001\u76F4\u6D41\u6570\u5B57\u8F93\u5165\u3001\u76F4\u6D41\u6676\u4F53\u7BA1\u6570\u5B57\u8F93\u51FA\u3002\u8BA2\u8D27\u53F7\uFF1A6ES7215-1AG40-0XB0\u3002",example:"\u8F93\u9001\u5E26\u4E0A\uFF0C\u5149\u7535\u4F20\u611F\u5668\u68C0\u6D4B\u5230\u5DE5\u4EF6\uFF0CPLC \u6267\u884C\u5206\u7C7B\u7A0B\u5E8F\uFF0C\u518D\u901A\u8FC7\u8F93\u51FA\u63A7\u5236\u6307\u793A\u706F\u6216\u9A71\u52A8\u88C5\u7F6E\u3002",notes:["\u672C\u673A\u96C6\u6210 14 DI\u300110 DQ\u30012 AI\u30012 AO\uFF0C\u4EE5\u53CA 2 \u4E2A PROFINET \u7F51\u53E3\u3002","\u5148\u65CB\u8F6C\u89C2\u5BDF\u5916\u89C2\uFF0C\u518D\u6253\u5F00\u76D6\u677F\uFF1B\u70B9\u51FB\u5706\u70B9\u53EF\u4EE5\u5B9A\u4F4D\u90E8\u4F4D\u3002"],sourceUrl:Nm,sourceTitle:"\u897F\u95E8\u5B50\u5B98\u65B9\u4EA7\u54C1\u8D44\u6599",view:"front",covers:{top:0,bottom:0}}),Hn({id:"power",title:"\u7535\u6E90\u4E0E\u63A5\u5730",eyebrow:"02 / \u80FD\u91CF\u4ECE\u54EA\u91CC\u6765",summary:"CPU \u4F7F\u7528 24 V \u76F4\u6D41\u7535\u6E90\uFF0C\u5141\u8BB8\u4F9B\u7535\u8303\u56F4\u4E3A 20.4\u201328.8 V DC\u3002",purpose:"\u7ED9 CPU \u5185\u90E8\u7535\u8DEF\u63D0\u4F9B\u5DE5\u4F5C\u80FD\u91CF\u3002\u7535\u6E90\u8F93\u5165\u3001\u4F20\u611F\u5668\u4F9B\u7535\u548C\u6570\u5B57\u8F93\u51FA\u7EC4\u4F9B\u7535\u5404\u6709\u7528\u9014\uFF0C\u8BC6\u522B\u7AEF\u5B50\u65F6\u8981\u5206\u522B\u770B\u6E05\u3002",connection:"CPU \u7535\u6E90\u63A5\u4E0A\u65B9\u7535\u6E90\u7AEF\u5B50\uFF0C\u6309 L+\u3001M \u548C\u529F\u80FD\u63A5\u5730\u6807\u8BC6\u63A5\u7EBF\uFF1B\u8F93\u51FA\u7EC4\u53E6\u6709 4L+\u30014M \u7AEF\u5B50\u3002",example:"\u5B9E\u8BAD\u53F0\u7684 24 V \u5F00\u5173\u7535\u6E90\u7ED9 CPU \u4F9B\u7535\uFF0C\u4F20\u611F\u5668\u5411 DI \u63D0\u4F9B\u72B6\u6001\u4FE1\u53F7\uFF0CCPU \u624D\u80FD\u5F00\u59CB\u8BFB\u53D6\u548C\u8FD0\u7B97\u3002",notes:["\u6B64 DC \u4F9B\u7535\u578B\u53F7\u4E0D\u80FD\u628A 220 V \u4EA4\u6D41\u7535\u76F4\u63A5\u63A5\u5165 CPU \u7535\u6E90\u7AEF\u5B50\u3002","\u5B9E\u7269\u63A5\u7EBF\u524D\u65AD\u7535\uFF0C\u5E76\u4EE5\u673A\u8EAB\u6807\u8BC6\u548C\u5BF9\u5E94\u578B\u53F7\u63A5\u7EBF\u56FE\u6838\u5BF9\u3002"],sourceUrl:Xs+"power-supply-and-sensor-power-cpu-1215c",view:"front",covers:{top:1,bottom:0}}),Hn({id:"di",title:"\u6570\u5B57\u8F93\u5165 DI",eyebrow:"03 / \u8BFB\u53D6\u5F00\u4E0E\u5173",summary:"14 \u8DEF 24 V DC \u6570\u5B57\u8F93\u5165\uFF0C\u7528 0 \u548C 1 \u8868\u8FBE\u73B0\u573A\u4FE1\u53F7\u7684\u4E24\u79CD\u72B6\u6001\u3002",purpose:"\u8BFB\u53D6\u6309\u94AE\u3001\u9650\u4F4D\u5F00\u5173\u3001\u5149\u7535\u6216\u63A5\u8FD1\u4F20\u611F\u5668\u3002\u4E0A\u65B9\u7AEF\u5B50\u6807\u4E3A DI a.0\u2013a.7 \u548C DI b.0\u2013b.5\uFF0C\u524D\u9762\u5BF9\u5E94\u7684\u5C0F\u706F\u663E\u793A\u901A\u9053\u72B6\u6001\u3002",connection:"\u63A5\u5165\u4E0E\u8F93\u5165\u7C7B\u578B\u5339\u914D\u7684 24 V \u76F4\u6D41\u4FE1\u53F7\uFF0C\u5E76\u6309\u63A5\u7EBF\u56FE\u8FDE\u63A5\u8F93\u5165\u516C\u5171\u7AEF 1M\u3002",example:"\u5C06\u5DE5\u4EF6\u5230\u4F4D\u4FE1\u53F7\u63A5\u5230\u7B2C\u4E00\u8DEF\u8F93\u5165\uFF1B\u7A0B\u5E8F\u8BFB\u53D6\u8BE5\u8F93\u5165\u4E3A 1 \u540E\uFF0C\u51B3\u5B9A\u662F\u5426\u542F\u52A8\u4E0B\u4E00\u6B65\u52A8\u4F5C\u3002",notes:["I0.0\u3001I0.1 \u662F\u5E38\u89C1\u7684\u7A0B\u5E8F\u5730\u5740\u793A\u4F8B\uFF0C\u5B9E\u9645\u5730\u5740\u7531\u786C\u4EF6\u7EC4\u6001\u51B3\u5B9A\u3002","\u6570\u5B57\u8F93\u5165\u8868\u8FBE\u72B6\u6001\uFF1B\u6E29\u5EA6\u3001\u538B\u529B\u7B49\u8FDE\u7EED\u5927\u5C0F\u901A\u5E38\u4F7F\u7528\u6A21\u62DF\u8F93\u5165\u3002"],sourceUrl:Xs+"digital-inputs-and-outputs",view:"front",covers:{top:1,bottom:0}}),Hn({id:"dq",title:"\u6570\u5B57\u8F93\u51FA DQ",eyebrow:"04 / \u53D1\u51FA\u52A8\u4F5C\u6307\u4EE4",summary:"10 \u8DEF 24 V DC \u6676\u4F53\u7BA1\u6570\u5B57\u8F93\u51FA\uFF0C\u6BCF\u8DEF\u989D\u5B9A\u8F93\u51FA\u7535\u6D41\u4E3A 0.5 A\u3002",purpose:"\u628A\u7A0B\u5E8F\u4E2D\u7684\u5F00\u5173\u6307\u4EE4\u53D8\u6210\u73B0\u573A\u8F93\u51FA\u3002\u4E0B\u65B9\u7AEF\u5B50\u6807\u4E3A DQ a.0\u2013a.7 \u548C DQ b.0\u2013b.1\uFF1BDQ \u4E5F\u5E38\u5199\u4F5C DO\u3002",connection:"\u8FDE\u63A5\u7535\u6C14\u53C2\u6570\u5339\u914D\u7684\u6307\u793A\u706F\u6216\u63A5\u53E3\u7535\u8DEF\u3002\u63A5\u89E6\u5668\u3001\u7535\u78C1\u9600\u7B49\u8D1F\u8F7D\u8981\u6309\u7535\u6D41\u3001\u6D6A\u6D8C\u4E0E\u4FDD\u62A4\u8981\u6C42\u9009\u7528\u9A71\u52A8\u6216\u4E2D\u95F4\u7EE7\u7535\u5668\u3002",example:"\u7A0B\u5E8F\u628A\u8F93\u51FA\u7F6E\u4E3A 1\uFF0C\u7ECF\u8FC7\u8F93\u51FA\u5237\u65B0\u540E\uFF0C\u793A\u4F8B\u6307\u793A\u706F\u4EAE\uFF1B\u7F6E\u4E3A 0 \u540E\uFF0C\u5728\u540E\u7EED\u5237\u65B0\u65F6\u7184\u706D\u3002",notes:["\u672C\u578B\u53F7\u662F\u6676\u4F53\u7BA1\u8F93\u51FA\uFF0C\u4E0D\u80FD\u6309\u7EE7\u7535\u5668\u5E72\u63A5\u70B9\u63A5\u6CD5\u4F7F\u7528\u3002","0.5 A \u662F\u5355\u901A\u9053\u53C2\u6570\uFF0C\u5B9E\u9645\u8FD8\u9700\u6838\u5BF9\u8F93\u51FA\u7EC4\u7535\u6D41\u3001\u6E29\u5EA6\u53CA\u8D1F\u8F7D\u6761\u4EF6\uFF1B\u4E0D\u80FD\u76F4\u63A5\u9A71\u52A8\u7535\u52A8\u673A\u3002"],sourceUrl:Xs+"digital-inputs-and-outputs",view:"front",covers:{top:0,bottom:1}}),Hn({id:"ai",title:"\u6A21\u62DF\u8F93\u5165 AI",eyebrow:"05 / \u8BFB\u53D6\u8FDE\u7EED\u53D8\u5316",summary:"2 \u8DEF\u5185\u7F6E\u6A21\u62DF\u8F93\u5165\uFF0C\u8F93\u5165\u8303\u56F4\u4E3A 0\u201310 V DC\u3002",purpose:"\u628A\u8FDE\u7EED\u53D8\u5316\u7684\u7535\u538B\u8F6C\u6362\u6210\u6570\u5B57\u91CF\uFF0C\u7A0B\u5E8F\u518D\u628A\u5B83\u6362\u7B97\u4E3A\u6E29\u5EA6\u3001\u6DB2\u4F4D\u6216\u538B\u529B\u7B49\u5DE5\u7A0B\u91CF\u3002",connection:"\u4E0A\u65B9 X11 \u6A21\u62DF\u7AEF\u5B50\u4E2D\uFF0CAI 0\u3001AI 1 \u63A5\u7535\u538B\u4FE1\u53F7\uFF0C3M \u4E3A\u5BF9\u5E94\u53C2\u8003\u7AEF\u3002\u4FE1\u53F7\u7C7B\u578B\u9700\u4E0E\u5185\u7F6E\u7535\u538B\u8F93\u5165\u5339\u914D\u3002",example:"\u5047\u8BBE\u4E00\u4E2A\u53D8\u9001\u5668\u628A 0\u2013100 cm \u6DB2\u4F4D\u7EBF\u6027\u8F6C\u6362\u4E3A 0\u201310 V\uFF0C5 V \u5C31\u53EF\u5728\u7A0B\u5E8F\u4E2D\u6362\u7B97\u4E3A 50 cm\u3002",notes:["\u793A\u4F8B\u91CF\u7A0B\u7531\u4F20\u611F\u5668\u4E0E\u7A0B\u5E8F\u51B3\u5B9A\uFF0C\u5E76\u4E0D\u662F PLC \u56FA\u5B9A\u7684\u6DB2\u4F4D\u91CF\u7A0B\u3002","4\u201320 mA \u4F20\u611F\u5668\u4E0D\u80FD\u76F4\u63A5\u5F53\u4F5C\u5185\u7F6E 0\u201310 V \u7535\u538B\u8F93\u5165\u4F7F\u7528\u3002"],sourceUrl:Xs+"analog-inputs-and-outputs/analog-input-specifications",view:"front",covers:{top:1,bottom:0}}),Hn({id:"ao",title:"\u6A21\u62DF\u8F93\u51FA AO",eyebrow:"06 / \u7ED9\u51FA\u8FDE\u7EED\u8BBE\u5B9A\u503C",summary:"2 \u8DEF\u5185\u7F6E\u6A21\u62DF\u8F93\u51FA\uFF0C\u8F93\u51FA\u8303\u56F4\u4E3A 0\u201320 mA\uFF1B\u7AEF\u5B50\u4E0A\u4F7F\u7528 AQ \u6807\u8BC6\u3002",purpose:"\u628A\u7A0B\u5E8F\u8BA1\u7B97\u51FA\u7684\u8BBE\u5B9A\u503C\u8F6C\u6362\u4E3A\u8FDE\u7EED\u53D8\u5316\u7684\u7535\u6D41\u4FE1\u53F7\uFF0C\u4EA4\u7ED9\u652F\u6301\u7535\u6D41\u8F93\u5165\u7684\u8BBE\u5907\u3002",connection:"\u4E0A\u65B9 X11 \u6A21\u62DF\u7AEF\u5B50\u4E2D\uFF0CAQ 0\u3001AQ 1 \u4E3A\u8F93\u51FA\uFF0C2M \u4E3A\u5BF9\u5E94\u53C2\u8003\u7AEF\uFF1B\u8FDE\u63A5\u5339\u914D\u7684\u7535\u6D41\u8F93\u5165\u901A\u9053\u3002",example:"\u82E5\u53D8\u9891\u5668\u8BBE\u4E3A 0\u201320 mA \u5BF9\u5E94 0\u201350 Hz\uFF0C\u90A3\u4E48 10 mA \u53EF\u4EE3\u8868 25 Hz \u7684\u7ED9\u5B9A\u503C\u3002",notes:["\u6B64\u4F8B\u4F9D\u8D56\u53D8\u9891\u5668\u91CF\u7A0B\u914D\u7F6E\uFF0C\u5B9E\u9645\u8FD0\u884C\u8FD8\u9700\u8981\u542F\u505C\u3001\u4F7F\u80FD\u7B49\u6761\u4EF6\u3002","\u5185\u7F6E AO \u662F\u7535\u6D41\u578B\uFF0C\u4E0D\u80FD\u628A\u5B83\u8BB2\u6210 0\u201310 V \u7535\u538B\u8F93\u51FA\u3002"],sourceUrl:Xs+"analog-inputs-and-outputs/analog-output-specifications",view:"front",covers:{top:1,bottom:0}}),Hn({id:"status",title:"\u72B6\u6001\u4E0E\u901A\u9053\u6307\u793A\u706F",eyebrow:"07 / \u770B\u61C2 PLC \u7684\u72B6\u6001",summary:"\u5DE6\u4FA7 RUN/STOP\u3001ERROR\u3001MAINT \u663E\u793A CPU \u72B6\u6001\uFF1BDI\u3001DQ \u5C0F\u706F\u663E\u793A\u5404\u6570\u5B57\u901A\u9053\u72B6\u6001\u3002",purpose:"RUN/STOP \u5E38\u7EFF\u8868\u793A RUN\uFF0C\u5E38\u9EC4\u8868\u793A STOP\u3002ERROR \u7EA2\u8272\u63D0\u793A\u9519\u8BEF\uFF1BMAINT \u9EC4\u8272\u63D0\u793A\u7EF4\u62A4\u76F8\u5173\u72B6\u6001\uFF0C\u9700\u7ED3\u5408\u8BCA\u65AD\u4FE1\u606F\u7406\u89E3\u3002",connection:"\u6307\u793A\u706F\u5C5E\u4E8E\u89C2\u5BDF\u533A\u57DF\uFF0C\u4E0D\u662F\u63A5\u7EBF\u7AEF\u5B50\u3002\u53EF\u901A\u8FC7 TIA Portal \u8BFB\u53D6\u8BCA\u65AD\u7F13\u51B2\u533A\u6765\u8FDB\u4E00\u6B65\u5B9A\u4F4D\u95EE\u9898\u3002",example:"\u6309\u94AE\u5DF2\u7ECF\u6309\u4E0B\uFF0C\u5148\u770B\u76F8\u5E94 DI \u706F\uFF0C\u518D\u68C0\u67E5\u7A0B\u5E8F\u6761\u4EF6\u4E0E DQ \u706F\uFF0C\u9010\u6BB5\u7406\u89E3\u201C\u8F93\u5165\u2014\u8FD0\u7B97\u2014\u8F93\u51FA\u201D\u3002",notes:["\u542F\u52A8\u65F6 RUN/STOP \u53EF\u4EA4\u66FF\u7EFF\u9EC4\u95EA\u70C1\uFF1B\u4E0D\u540C\u95EA\u70C1\u7EC4\u5408\u542B\u4E49\u4E0D\u540C\u3002","DQ \u6307\u793A\u706F\u4EAE\u4E0D\u7B49\u4E8E\u5916\u90E8\u8D1F\u8F7D\u4E00\u5B9A\u6B63\u5E38\uFF0C\u4ECD\u8981\u6838\u5BF9\u8D1F\u8F7D\u4F9B\u7535\u4E0E\u63A5\u7EBF\u3002"],sourceUrl:js+"online-and-diagnostic-tools/status-leds",view:"front",covers:{top:0,bottom:0}}),Hn({id:"ethernet",title:"PROFINET \u901A\u4FE1\u7AEF\u53E3",eyebrow:"08 / \u4E0E\u5176\u4ED6\u8BBE\u5907\u4EA4\u6362\u6570\u636E",summary:"\u5E95\u90E8\u6709 2 \u4E2A RJ45 \u7AEF\u53E3\uFF0C\u5C5E\u4E8E\u540C\u4E00\u4E2A PROFINET \u63A5\u53E3 X1\uFF0C\u5185\u90E8\u96C6\u6210\u4EA4\u6362\u529F\u80FD\u3002",purpose:"\u8FDE\u63A5\u7F16\u7A0B\u7535\u8111\u3001HMI\u3001\u4EA4\u6362\u673A\u6216\u5DF2\u7EC4\u6001\u7684 PROFINET \u8BBE\u5907\uFF0C\u7528\u4E8E\u4E0B\u8F7D\u3001\u76D1\u63A7\u4E0E\u6570\u636E\u4EA4\u6362\u3002",connection:"\u4F7F\u7528\u9002\u7528\u7684\u5DE5\u4E1A\u4EE5\u592A\u7F51\u7EBF\uFF1B\u901A\u4FE1\u524D\u8FD8\u9700\u8BBE\u7F6E\u8BBE\u5907\u540D\u79F0\u3001IP \u5730\u5740\u53CA\u76F8\u5E94\u7EC4\u6001\u3002",example:"\u7535\u8111\u901A\u8FC7\u7F51\u53E3\u4E0B\u8F7D\u7A0B\u5E8F\uFF1BHMI \u901A\u8FC7\u901A\u4FE1\u8BFB\u53D6\u8BA1\u6570\u503C\uFF0C\u5E76\u663E\u793A\u5728\u64CD\u4F5C\u753B\u9762\u4E0A\u3002",notes:["2 \u4E2A\u7269\u7406\u7AEF\u53E3\u4E0D\u7B49\u4E8E 2 \u4E2A\u5F7C\u6B64\u72EC\u7ACB\u7684\u7F51\u7EDC\u63A5\u53E3\u3002","\u7F51\u9875\u53EA\u5C55\u793A\u7ED3\u6784\u4E0E\u539F\u7406\uFF0C\u4E0D\u8FDE\u63A5\u6216\u63A7\u5236\u771F\u5B9E PLC\u3002"],sourceUrl:Xs+"communications-cpu-1215c",view:"bottom",covers:{top:0,bottom:1}}),Hn({id:"memory",title:"SIMATIC \u5B58\u50A8\u5361\u69FD",eyebrow:"09 / \u7A0B\u5E8F\u4E0E\u6570\u636E\u7684\u8F7D\u4F53",summary:"\u5B58\u50A8\u5361\u69FD\u4F4D\u4E8E\u4E0A\u76D6\u5185\uFF0C\u53EF\u4F7F\u7528 SIMATIC Memory Card\u3002",purpose:"\u6839\u636E\u5361\u7684\u914D\u7F6E\uFF0C\u5B83\u53EF\u7528\u4E8E\u7A0B\u5E8F\u4F20\u9001\u3001\u4F5C\u4E3A\u5916\u90E8\u88C5\u8F7D\u5B58\u50A8\u5668\uFF0C\u6216\u6267\u884C\u56FA\u4EF6\u66F4\u65B0\u3002CPU \u5185\u90E8\u4E5F\u6709\u5B58\u50A8\u5668\u3002",connection:"\u4F7F\u7528\u9002\u914D\u7684 SIMATIC \u5B58\u50A8\u5361\uFF1B\u63D2\u5361\u524D\u533A\u5206\u201C\u4F20\u9001\u5361\u201D\u548C\u201C\u7A0B\u5E8F\u5361\u201D\u7684\u4F7F\u7528\u65B9\u5F0F\u3002",example:"\u5728\u7A0B\u5E8F\u4F20\u9001\u573A\u666F\u4E2D\uFF0C\u53EF\u901A\u8FC7\u914D\u7F6E\u597D\u7684\u4F20\u9001\u5361\u628A\u9879\u76EE\u5E26\u5230\u53E6\u4E00\u53F0\u5339\u914D\u7684 CPU\u3002",notes:["\u4E0D\u80FD\u7528\u666E\u901A\u6D88\u8D39\u7EA7 SD \u5361\u66FF\u4EE3 SIMATIC \u5B58\u50A8\u5361\u3002","\u5B58\u50A8\u5361\u4E0D\u662F\u6BCF\u53F0 CPU \u8FD0\u884C\u7A0B\u5E8F\u90FD\u5FC5\u987B\u989D\u5916\u5B89\u88C5\u7684\u90E8\u4EF6\u3002"],sourceUrl:js+"plc-concepts/using-a-memory-card/memory-cards",view:"front",covers:{top:1,bottom:0}}),Hn({id:"signalboard",title:"\u524D\u90E8\u6269\u5C55\u677F\u4F4D\u7F6E",eyebrow:"10 / \u5C0F\u8303\u56F4\u6269\u5C55",summary:"\u524D\u90E8\u5C0F\u76D6\u677F\u540E\u662F\u63D2\u88C5\u6269\u5C55\u677F\u7684\u4F4D\u7F6E\uFF0C\u53EF\u914D\u7F6E\u517C\u5BB9\u7684 SB\u3001CB \u6216 BB\u3002",purpose:"SB \u53EF\u8865\u5145\u5C11\u91CF\u8F93\u5165\u8F93\u51FA\uFF1BCB \u53EF\u589E\u52A0\u76F8\u5E94\u901A\u4FE1\u529F\u80FD\uFF1BBB \u4E3A\u7279\u5B9A\u7684\u7535\u6C60\u677F\u9009\u4EF6\u3002\u5177\u4F53\u529F\u80FD\u53D6\u51B3\u4E8E\u5B9E\u9645\u63D2\u5165\u7684\u4EA7\u54C1\u3002",connection:"\u6BCF\u53F0 CPU \u53EA\u6709 1 \u4E2A\u524D\u90E8\u6269\u5C55\u677F\u4F4D\u7F6E\uFF0C\u6309\u517C\u5BB9\u6027\u548C\u9879\u76EE\u7EC4\u6001\u9009\u62E9\u3002\u8FD9\u91CC\u5C55\u793A\u539F\u5382\u57FA\u7840\u673A\u578B\u7684\u76D6\u677F\u3002",example:"\u73B0\u6709\u5185\u7F6E\u7AEF\u53E3\u4E0D\u591F\u65F6\uFF0C\u53EF\u8BC4\u4F30\u517C\u5BB9\u4FE1\u53F7\u677F\u662F\u5426\u6EE1\u8DB3\u9700\u6C42\uFF0C\u800C\u65E0\u9700\u5148\u589E\u52A0\u4FA7\u9762\u6A21\u5757\u3002",notes:["\u62C6\u79BB\u5148\u79FB\u9664\u4E0A\u4E0B\u7AEF\u5B50\u76D6\uFF0C\u518D\u91CA\u653E\u4FE1\u53F7\u677F\u76D6\u5E76\u5411\u5916\u53D6\u51FA\u3002\u7F51\u9875\u4E0D\u6A21\u62DF\u5DE5\u5177\u64AC\u52A8\u6216\u5F39\u6027\u5361\u6263\u53D8\u5F62\u3002","\u7167\u7247\u4E2D\u7684\u9644\u52A0\u677F\u5361\u578B\u53F7\u672A\u786E\u8BA4\uFF1B\u672C\u76D6\u677F\u4EC5\u62C6\u79BB\uFF0C\u4E0D\u8BBE\u7FFB\u76D6\u94F0\u94FE\u3002"],sourceUrl:js+"installation/installation-and-removal-procedures/installing-and-removing-an-sb-cb-or-bb",view:"front",covers:{top:0,bottom:0}}),Hn({id:"expansion",title:"\u4FA7\u9762\u6269\u5C55\u533A\u57DF",eyebrow:"11 / \u8BA9\u7CFB\u7EDF\u6269\u5C55",summary:"\u4FA7\u9762\u603B\u7EBF\u8FDE\u63A5 CPU \u4E0E\u6269\u5C55\u6A21\u5757\u3002\u901A\u5E38\u5DE6\u4FA7\u7528\u4E8E\u901A\u4FE1\u6A21\u5757\uFF0C\u53F3\u4FA7\u7528\u4E8E\u4FE1\u53F7\u6A21\u5757\u3002",purpose:"CPU 1215C \u53EF\u6269\u5C55\u6700\u591A 8 \u4E2A\u4FE1\u53F7\u6A21\u5757 SM\u3001\u6700\u591A 3 \u4E2A\u901A\u4FE1\u6A21\u5757 CM\uFF1B\u8FD8\u8981\u6838\u5BF9\u5177\u4F53\u4EA7\u54C1\u7684\u517C\u5BB9\u6027\u548C\u7535\u6E90\u9884\u7B97\u3002",connection:"\u4FE1\u53F7\u6A21\u5757\u589E\u52A0\u6570\u5B57\u91CF\u6216\u6A21\u62DF\u91CF\u901A\u9053\uFF1B\u901A\u4FE1\u6A21\u5757\u589E\u52A0\u76F8\u5E94\u7684\u7F51\u7EDC\u6216\u4E32\u884C\u901A\u4FE1\u80FD\u529B\u3002\u6A21\u5757\u987B\u5728\u786C\u4EF6\u7EC4\u6001\u4E2D\u914D\u7F6E\u3002",example:"\u5F53\u4E00\u4E2A\u5B9E\u8BAD\u9879\u76EE\u9700\u8981\u66F4\u591A\u4F20\u611F\u5668\u8F93\u5165\u65F6\uFF0C\u53EF\u52A0\u5165\u517C\u5BB9\u7684\u6570\u5B57\u8F93\u5165\u6A21\u5757\uFF0C\u5E76\u5728\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u65B0\u589E\u5730\u5740\u3002",notes:["\u539F\u5382 CAD \u7B80\u5316\u4E86\u4FA7\u9762\u63A5\u53E3\uFF0C\u6807\u6CE8\u8868\u793A\u6269\u5C55\u533A\u57DF\uFF0C\u4E0D\u8868\u793A\u89E6\u70B9\u7684\u7CBE\u786E\u4F4D\u7F6E\u3002","\u4FA7\u9762\u603B\u7EBF\u4E0D\u662F\u73B0\u573A\u6309\u94AE\u63A5\u7EBF\u7AEF\u5B50\uFF1B\u7167\u7247\u53F3\u4FA7\u672A\u786E\u8BA4\u8BBE\u5907\u4E0D\u7EB3\u5165\u672C\u9875\u3002"],sourceUrl:js+"product-overview/introducing-the-s7-1200-plc",view:"right",covers:{top:0,bottom:0}}),Hn({id:"mounting",title:"\u80CC\u9762\u5B89\u88C5\u7ED3\u6784",eyebrow:"12 / \u56FA\u5B9A\u5728\u63A7\u5236\u67DC\u91CC",summary:"\u80CC\u9762\u7684\u5BFC\u8F68\u69FD\u4E0E\u5361\u6263\u7528\u4E8E DIN \u5BFC\u8F68\u5B89\u88C5\uFF1B\u5C55\u5F00\u5B89\u88C5\u5361\u6263\u4E5F\u53EF\u8FDB\u884C\u9762\u677F\u56FA\u5B9A\u3002",purpose:"\u628A CPU \u7A33\u5B9A\u5730\u56FA\u5B9A\u5728\u63A7\u5236\u67DC\u6216\u5B9E\u8BAD\u677F\u4E0A\uFF0C\u4F7F\u63A5\u7EBF\u3001\u7EF4\u62A4\u548C\u6A21\u5757\u6269\u5C55\u6709\u53EF\u9760\u7684\u673A\u68B0\u57FA\u7840\u3002",connection:"\u5B89\u88C5\u5728\u5339\u914D\u7684 DIN \u5BFC\u8F68\u6216\u6309\u5B98\u65B9\u5C3A\u5BF8\u5E03\u7F6E\u7684\u9762\u677F\u5B54\u4F4D\uFF1B\u5BFC\u8F68\u56FA\u5B9A\u4E0E\u7535\u6C14\u63A5\u7EBF\u5206\u522B\u68C0\u67E5\u3002",example:"\u5207\u6362\u5230\u80CC\u9762\u89C2\u5BDF\uFF1A\u627E\u51FA\u6302\u4F4F\u5BFC\u8F68\u7684\u7ED3\u6784\uFF0C\u518D\u627E\u9501\u4F4F\u673A\u8EAB\u7684\u6D3B\u52A8\u5361\u6263\u3002",notes:["\u5B9E\u7269\u62C6\u88C5\u9700\u5148\u65AD\u5F00 CPU \u548C\u76F8\u5173\u8BBE\u5907\u7535\u6E90\u3002","\u672C\u9875\u5C55\u793A\u7ED3\u6784\u4F4D\u7F6E\uFF0C\u4E0D\u6A21\u62DF\u5E26\u7EBF\u8BBE\u5907\u7684\u5B9E\u9645\u5B89\u88C5\u8F7D\u8377\u3002"],sourceUrl:js+"installation/installation-and-removal-procedures/installing-and-removing-the-cpu",view:"back",covers:{top:0,bottom:0}})],nT={product:Nm,scan:js+"plc-concepts/execution-of-the-user-program/processing-the-scan-cycle-in-run-mode",wiring:Xs+"cpu-1215c-wiring-diagrams"};var TM=Object.freeze(["\u8F93\u51FA\u5237\u65B0","\u8F93\u5165\u91C7\u6837","\u7A0B\u5E8F\u6267\u884C"]);function Um(){return{physicalInput:0,pii:0,piq:0,physicalOutput:0,nextStage:0,lastStage:-1,cycles:0,steps:0}}function EM(i,e){return{...i,physicalInput:e?1:0}}function RM(i){let e={...i,lastStage:i.nextStage,nextStage:(i.nextStage+1)%3,steps:i.steps+1};return i.nextStage===0&&(e.physicalOutput=i.piq),i.nextStage===1&&(e.pii=i.physicalInput),i.nextStage===2&&(e.piq=i.pii,e.cycles+=1),e}var CM={input:["\u8F93\u5165\u7535\u8DEF","\u628A\u73B0\u573A\u7535\u4FE1\u53F7\u8F6C\u6362\u6210 CPU \u53EF\u8BFB\u53D6\u7684\u6570\u636E\u3002DI \u8868\u793A\u4E24\u79CD\u72B6\u6001\uFF1BAI \u8868\u793A\u8FDE\u7EED\u53D8\u5316\u7684\u6570\u503C\u3002\u672C\u5B9E\u9A8C\u53EA\u4F7F\u7528\u4E00\u8DEF\u6570\u5B57\u8F93\u5165\u3002"],pii:["\u8F93\u5165\u8FC7\u7A0B\u6620\u50CF PII","\u8F93\u5165\u91C7\u6837\u65F6\uFF0C\u628A\u7AEF\u5B50\u7684\u72B6\u6001\u590D\u5236\u5230\u8FD9\u91CC\u3002\u666E\u901A\u7A0B\u5E8F\u8BFB\u53D6\u8FD9\u4EFD\u5FEB\u7167\uFF0C\u56E0\u6B64\u91C7\u6837\u540E\u518D\u6539\u53D8\u6309\u94AE\uFF0C\u5F53\u524D\u5FEB\u7167\u4E0D\u4F1A\u7ACB\u5373\u6539\u53D8\u3002"],cpu:["\u5904\u7406\u5668 CPU","\u6309\u7528\u6237\u7A0B\u5E8F\u8FDB\u884C\u5224\u65AD\u3001\u8BA1\u65F6\u3001\u8BA1\u6570\u548C\u8FD0\u7B97\u3002\u672C\u5B9E\u9A8C\u7684\u89C4\u5219\u53EA\u6709\u4E00\u6761\uFF1A\u5C06\u8F93\u5165\u5FEB\u7167 I0.0 \u7684\u503C\u590D\u5236\u7ED9\u8F93\u51FA\u6620\u50CF Q0.0\u3002"],piq:["\u8F93\u51FA\u8FC7\u7A0B\u6620\u50CF PIQ","\u4FDD\u5B58\u7A0B\u5E8F\u51C6\u5907\u9001\u7ED9\u5916\u90E8\u8BBE\u5907\u7684\u8F93\u51FA\u503C\u3002\u666E\u901A\u5FAA\u73AF\u4E2D\uFF0C\u66F4\u65B0\u8FD9\u4EFD\u5B58\u50A8\u6570\u636E\u540E\uFF0C\u8981\u5230\u4E0B\u4E00\u6B21\u8F93\u51FA\u5237\u65B0\u624D\u6539\u53D8\u5B9E\u4F53\u8F93\u51FA\u3002"],output:["\u8F93\u51FA\u7535\u8DEF","\u628A\u8F93\u51FA\u6620\u50CF\u53D8\u6210\u73B0\u573A\u7535\u4FE1\u53F7\u3002\u6B64\u578B\u53F7 DQ \u4E3A\u76F4\u6D41\u6676\u4F53\u7BA1\u8F93\u51FA\uFF1B\u672C\u5B9E\u9A8C\u7528\u4E00\u76CF\u793A\u4F8B\u6307\u793A\u706F\u8868\u793A\u5B9E\u4F53\u8F93\u51FA\u3002"],memory:["\u7A0B\u5E8F\u4E0E\u6570\u636E\u5B58\u50A8","\u4FDD\u5B58\u7A0B\u5E8F\u3001\u7EC4\u6001\u4E0E\u8FD0\u884C\u6570\u636E\u3002\u8F93\u5165\u3001\u8F93\u51FA\u8FC7\u7A0B\u6620\u50CF\u4E5F\u662F\u5B58\u50A8\u533A\u4E2D\u7684\u6570\u636E\uFF1B\u5B83\u4EEC\u4E0E\u73B0\u573A\u7AEF\u5B50\u5F53\u524D\u72B6\u6001\u53EF\u80FD\u4E0D\u540C\u3002"],power:["\u5185\u90E8\u7535\u6E90\u7535\u8DEF","CPU \u7684 24 V \u76F4\u6D41\u4F9B\u7535\u7ECF\u5185\u90E8\u7535\u6E90\u7535\u8DEF\u4E3A\u5904\u7406\u5668\u3001\u5B58\u50A8\u5668\u7B49\u4F9B\u80FD\uFF1B\u5916\u90E8\u8D1F\u8F7D\u8FD8\u9700\u6EE1\u8DB3\u5BF9\u5E94\u8F93\u51FA\u7EC4\u7684\u4F9B\u7535\u6761\u4EF6\u3002"],communication:["\u901A\u4FE1\u4E0E\u8BCA\u65AD","\u901A\u8FC7 PROFINET \u4E0E\u7535\u8111\u3001HMI \u6216\u5176\u4ED6\u5DF2\u7EC4\u6001\u8BBE\u5907\u4EA4\u6362\u6570\u636E\uFF0C\u540C\u65F6\u68C0\u67E5\u7CFB\u7EDF\u72B6\u6001\u3002\u901A\u4FE1\u4E0E\u8BCA\u65AD\u5728\u5FAA\u73AF\u671F\u95F4\u7A7F\u63D2\u6267\u884C\u3002"]},PM="https://docs.tia.siemens.cloud/r/simatic_s7_1200_manual_collection_enus_20/plc-concepts/execution-of-the-user-program/processing-the-scan-cycle-in-run-mode";function Fm(i){if(!i)throw new Error("initPrinciple requires a container");let e=Um(),t=!1,n=1200,s=null,r=!1,a=[],o=(w,A,x)=>{w.addEventListener(A,x),a.push(()=>w.removeEventListener(A,x))};i.classList.add("principle-panel"),i.innerHTML=`
    <div class="principle-heading">
      <div><span class="principle-kicker">\u4ECE\u4FE1\u53F7\u5230\u52A8\u4F5C</span><h2>\u4E00\u4E2A\u626B\u63CF\u5468\u671F\uFF0CPLC \u505A\u4E86\u4EC0\u4E48\uFF1F</h2><p>\u5148\u5207\u6362\u73B0\u573A\u8F93\u5165\uFF0C\u518D\u9010\u6B65\u89C2\u5BDF\u56DB\u4EFD\u72B6\u6001\u5982\u4F55\u4F20\u9012\u3002</p></div>
      <span class="principle-label">\u539F\u7406\u793A\u610F \xB7 \u975E\u5185\u90E8\u7535\u8DEF\u677F</span>
    </div>
    <div class="principle-layout">
      <section class="principle-workspace" aria-label="PLC \u529F\u80FD\u793A\u610F\u4E0E\u626B\u63CF\u72B6\u6001">
        <div class="principle-cycle-head"><span class="principle-small-label">\u666E\u901A\u5FAA\u73AF \xB7 \u81EA\u52A8 I/O \u66F4\u65B0</span><span>\u5DF2\u5B8C\u6210 <strong data-value="cycles">0</strong> \u8F6E</span></div>
        <ol class="principle-stages" aria-label="\u6BCF\u8F6E\u6309\u6B64\u987A\u5E8F\u5FAA\u73AF">
          <li data-stage="0"><span>01</span><div><strong>\u8F93\u51FA\u5237\u65B0</strong><small>PIQ \u2192 \u5B9E\u4F53\u8F93\u51FA</small></div></li>
          <li data-stage="1"><span>02</span><div><strong>\u8F93\u5165\u91C7\u6837</strong><small>\u5B9E\u4F53\u8F93\u5165 \u2192 PII</small></div></li>
          <li data-stage="2"><span>03</span><div><strong>\u7A0B\u5E8F\u6267\u884C</strong><small>\u8BFB\u53D6 PII \u2192 \u66F4\u65B0 PIQ</small></div></li>
        </ol>
        <div class="principle-flow-caption"><span>\u4FE1\u53F7\u4F20\u9012\u65B9\u5411</span><span>\u70B9\u51FB\u529F\u80FD\u5757\u4E86\u89E3\u4F5C\u7528</span></div>
        <div class="principle-flow" aria-label="\u73B0\u573A\u8F93\u5165\u7ECF\u8FC7\u8F93\u5165\u5FEB\u7167\u3001CPU \u8FD0\u7B97\u3001\u8F93\u51FA\u6620\u50CF\u4F20\u7ED9\u73B0\u573A\u8F93\u51FA">
          <div class="principle-node principle-field" data-node="input">
            <button type="button" class="principle-node-title" data-block="input">\u73B0\u573A\u8F93\u5165 <small>\u8F93\u5165\u7535\u8DEF</small></button>
            <button type="button" class="principle-switch" data-action="input" role="switch" aria-checked="false" aria-label="\u73B0\u573A\u8F93\u5165\u5F00\u5173"><span class="principle-switch-track"><span></span></span><strong data-value="inputLabel">\u65AD\u5F00</strong></button>
            <span class="principle-bit" data-bit="physicalInput">0</span><small>\u6309\u94AE / \u4F20\u611F\u5668</small>
          </div>
          <span class="principle-arrow" data-arrow="sample" aria-hidden="true">\u2192</span>
          <button type="button" class="principle-node" data-node="pii" data-block="pii"><span class="principle-node-title">\u8F93\u5165\u5FEB\u7167 <small>PII \xB7 I0.0</small></span><span class="principle-bit" data-bit="pii">0</span><small>\u91C7\u6837\u65F6\u624D\u66F4\u65B0</small></button>
          <span class="principle-arrow" data-arrow="read" aria-hidden="true">\u2192</span>
          <button type="button" class="principle-node principle-cpu" data-node="cpu" data-block="cpu"><span class="principle-node-title">CPU \u8FD0\u7B97 <small>\u7B80\u5316\u7A0B\u5E8F</small></span><span class="principle-code">Q := I</span><small>\u4F7F\u7528\u5DF2\u91C7\u6837\u7684\u503C</small></button>
          <span class="principle-arrow" data-arrow="write" aria-hidden="true">\u2192</span>
          <button type="button" class="principle-node" data-node="piq" data-block="piq"><span class="principle-node-title">\u8F93\u51FA\u6620\u50CF <small>PIQ \xB7 Q0.0</small></span><span class="principle-bit" data-bit="piq">0</span><small>\u7A0B\u5E8F\u5199\u5165\u7684\u7ED3\u679C</small></button>
          <span class="principle-arrow" data-arrow="output" aria-hidden="true">\u2192</span>
          <button type="button" class="principle-node principle-field" data-node="output" data-block="output"><span class="principle-node-title">\u73B0\u573A\u8F93\u51FA <small>\u8F93\u51FA\u7535\u8DEF</small></span><span class="principle-lamp" aria-hidden="true"></span><span class="principle-output-reading"><span data-bit="physicalOutput">0</span> \xB7 <span data-value="outputLabel">\u706F\u706D</span></span><small>\u5237\u65B0\u65F6\u624D\u6539\u53D8</small></button>
        </div>
        <div class="principle-support-line" aria-hidden="true"><span>\u2195</span></div>
        <div class="principle-support">
          <button type="button" data-block="memory"><span class="principle-support-icon">\u25A4</span><strong>\u7A0B\u5E8F\u4E0E\u6570\u636E\u5B58\u50A8</strong><small>\u7A0B\u5E8F \xB7 \u7EC4\u6001 \xB7 \u8FD0\u884C\u6570\u636E</small></button>
          <button type="button" data-block="power"><span class="principle-support-icon">\u03DF</span><strong>\u5185\u90E8\u7535\u6E90\u7535\u8DEF</strong><small>\u4E3A\u5404\u529F\u80FD\u7535\u8DEF\u4F9B\u80FD</small></button>
          <button type="button" data-block="communication"><span class="principle-support-icon">\u21C4</span><strong>\u901A\u4FE1\u4E0E\u8BCA\u65AD</strong><small>\u8FDE\u63A5\u8BBE\u5907 \xB7 \u68C0\u67E5\u72B6\u6001</small></button>
        </div>
        <div class="principle-block-detail"><span class="principle-detail-marker" aria-hidden="true"></span><div><strong data-detail="title">\u5904\u7406\u5668 CPU</strong><p data-detail="body"></p></div></div>
        <div class="principle-transport">
          <button type="button" class="principle-primary" data-action="play" aria-pressed="false"><span aria-hidden="true">\u25B6</span> <span data-value="playLabel">\u81EA\u52A8\u64AD\u653E</span></button>
          <button type="button" data-action="step">\u5355\u6B65\u6267\u884C <span aria-hidden="true">\u2192</span></button>
          <button type="button" data-action="reset">\u590D\u4F4D\u5B9E\u9A8C</button>
          <label class="principle-speed">\u64AD\u653E\u901F\u5EA6<select aria-label="\u626B\u63CF\u6F14\u793A\u64AD\u653E\u901F\u5EA6" data-action="speed"><option value="2200">\u6162\u901F</option><option value="1200" selected>\u6807\u51C6</option><option value="600">\u5FEB\u901F</option></select></label>
        </div>
        <div class="principle-announcement" role="status" aria-live="polite" aria-atomic="true"><strong data-value="next">\u4E0B\u4E00\u6B65\uFF1A01 \u8F93\u51FA\u5237\u65B0</strong><p data-value="explanation">\u5F53\u524D\u56DB\u4EFD\u72B6\u6001\u5747\u4E3A 0\u3002\u5148\u95ED\u5408\u73B0\u573A\u8F93\u5165\uFF0C\u89C2\u5BDF\u5B83\u4F55\u65F6\u4F20\u9012\u5230\u6307\u793A\u706F\u3002</p></div>
      </section>
      <aside class="principle-notebook" aria-label="\u5B9E\u9A8C\u6307\u5F15">
        <span class="principle-kicker">\u52A8\u624B\u9A8C\u8BC1</span><h3>\u6309\u94AE\u53D8\u4E86\uFF0C<br>\u706F\u4F1A\u7ACB\u523B\u53D8\u5417\uFF1F</h3>
        <ol><li>\u95ED\u5408<strong>\u73B0\u573A\u8F93\u5165</strong>\uFF0C\u6B64\u65F6\u53EA\u6709\u6700\u5DE6\u4FA7\u53D8\u6210 1\u3002</li><li>\u5355\u6B65\u6267\u884C\u5230<strong>\u8F93\u5165\u91C7\u6837</strong>\uFF0CPII \u624D\u8BB0\u5F55 1\u3002</li><li>\u5728\u7A0B\u5E8F\u6267\u884C\u524D\u65AD\u5F00\u8F93\u5165\uFF0C\u89C2\u5BDF PII \u662F\u5426\u8DDF\u7740\u6539\u53D8\u3002</li><li>\u7EE7\u7EED\u6267\u884C\uFF0C\u770B\u770B<strong>\u8F93\u51FA\u6620\u50CF</strong>\u4E0E<strong>\u73B0\u573A\u8F93\u51FA</strong>\u4F55\u65F6\u66F4\u65B0\u3002</li></ol>
        <div class="principle-observation"><span>\u5F53\u524D\u89C2\u5BDF</span><p data-value="observation">\u73B0\u573A\u8F93\u5165\u4E0E\u8F93\u5165\u5FEB\u7167\u4E00\u81F4\u3002\u8BD5\u7740\u95ED\u5408\u8F93\u5165\u5F00\u5173\u3002</p></div>
        <details class="principle-answer"><summary>\u5C55\u5F00\u89E3\u91CA</summary><p>\u666E\u901A\u5FAA\u73AF\u7A0B\u5E8F\u4F7F\u7528\u8F93\u5165\u5FEB\u7167\u3002\u91C7\u6837\u540E\u6539\u53D8\u6309\u94AE\uFF0C\u8981\u7B49\u4E0B\u4E00\u6B21\u91C7\u6837\u624D\u8FDB\u5165 PII\uFF1B\u7A0B\u5E8F\u5148\u5199 PIQ\uFF0C\u518D\u7531\u540E\u7EED\u8F93\u51FA\u5237\u65B0\u9001\u5230\u5B9E\u4F53\u7AEF\u5B50\u3002</p></details>
        <p class="principle-boundary">\u8FD9\u91CC\u628A\u626B\u63CF\u653E\u6162\u5230\u53EF\u89C2\u5BDF\u7684\u901F\u5EA6\u3002\u53EA\u6F14\u793A\u666E\u901A\u8FC7\u7A0B\u6620\u50CF\u5FAA\u73AF\uFF1B\u76F4\u63A5 I/O \u8BBF\u95EE\u3001\u786C\u4EF6\u4E2D\u65AD\u3001\u8F93\u5165\u6EE4\u6CE2\u4E0E\u901A\u4FE1\u65F6\u5E8F\u672A\u7EB3\u5165\u5B9E\u9A8C\u3002</p>
        <a class="principle-source" href="${PM}" target="_blank" rel="noopener noreferrer">\u6838\u5BF9\u897F\u95E8\u5B50\u626B\u63CF\u5468\u671F\u8BF4\u660E <span aria-hidden="true">\u2197</span></a>
      </aside>
    </div>`;let c=w=>i.querySelector(w),l=Object.fromEntries([...i.querySelectorAll("[data-value]")].map(w=>[w.dataset.value,w])),h=c('[data-action="input"]'),d=c('[data-action="play"]'),u=c('[data-action="step"]'),f=[["piq","output"],["input","pii"],["pii","cpu","piq"]],g=[["output"],["sample"],["read","write"]];function y(w){for(let A of i.querySelectorAll("[data-bit]")){let x=e[A.dataset.bit];A.textContent=String(x),A.classList.toggle("principle-on",x===1)}h.setAttribute("aria-checked",String(!!e.physicalInput)),l.inputLabel.textContent=e.physicalInput?"\u95ED\u5408":"\u65AD\u5F00",l.outputLabel.textContent=e.physicalOutput?"\u706F\u4EAE":"\u706F\u706D",c(".principle-lamp").classList.toggle("principle-on",!!e.physicalOutput),l.cycles.textContent=String(e.cycles),d.setAttribute("aria-pressed",String(t)),d.firstElementChild.textContent=t?"\u2161":"\u25B6",l.playLabel.textContent=t?"\u6682\u505C\u64AD\u653E":"\u81EA\u52A8\u64AD\u653E",u.disabled=t,l.next.textContent=`\u4E0B\u4E00\u6B65\uFF1A0${e.nextStage+1} ${TM[e.nextStage]}`,w&&(l.explanation.textContent=w);for(let A of i.querySelectorAll("[data-stage]")){let x=Number(A.dataset.stage)===e.lastStage;A.classList.toggle("principle-active",x),x?A.setAttribute("aria-current","step"):A.removeAttribute("aria-current")}for(let A of i.querySelectorAll("[data-node]"))A.classList.toggle("principle-active",(f[e.lastStage]||[]).includes(A.dataset.node));for(let A of i.querySelectorAll("[data-arrow]"))A.classList.toggle("principle-active",(g[e.lastStage]||[]).includes(A.dataset.arrow));l.observation.textContent=e.physicalInput!==e.pii?`\u73B0\u573A\u8F93\u5165\u5DF2\u662F ${e.physicalInput}\uFF0C\u8F93\u5165\u5FEB\u7167\u4ECD\u662F ${e.pii}\u3002\u4E0B\u4E00\u6B21\u91C7\u6837\u624D\u4F1A\u628A\u65B0\u72B6\u6001\u8BFB\u8FDB\u6765\u3002`:e.piq!==e.physicalOutput?`\u8F93\u51FA\u6620\u50CF\u5DF2\u662F ${e.piq}\uFF0C\u73B0\u573A\u8F93\u51FA\u4ECD\u662F ${e.physicalOutput}\u3002\u4E0B\u4E00\u6B21\u8F93\u51FA\u5237\u65B0\u624D\u4F1A\u6539\u53D8\u6307\u793A\u706F\u3002`:e.steps===0?"\u73B0\u573A\u8F93\u5165\u4E0E\u8F93\u5165\u5FEB\u7167\u4E00\u81F4\u3002\u8BD5\u7740\u95ED\u5408\u8F93\u5165\u5F00\u5173\u3002":"\u6B64\u523B\u73B0\u573A\u4E0E\u6620\u50CF\u4E00\u81F4\u3002\u53EF\u5728\u4E24\u4E2A\u91C7\u6837\u65F6\u523B\u4E4B\u95F4\u5207\u6362\u8F93\u5165\uFF0C\u7EE7\u7EED\u89C2\u5BDF\u3002"}function m(){e=RM(e);let w=[`\u8F93\u51FA\u5237\u65B0\u5B8C\u6210\uFF1A\u628A\u5DF2\u6709\u7684 PIQ = ${e.piq} \u9001\u5230\u5B9E\u4F53\u8F93\u51FA\uFF0C\u6307\u793A\u706F${e.physicalOutput?"\u4EAE":"\u706D"}\u3002\u6B64\u6B65\u4E0D\u8BFB\u53D6\u8F93\u5165\u3002`,`\u8F93\u5165\u91C7\u6837\u5B8C\u6210\uFF1A\u628A\u6B64\u523B\u73B0\u573A\u8F93\u5165 ${e.physicalInput} \u590D\u5236\u5230 PII\u3002\u7A0B\u5E8F\u63A5\u4E0B\u6765\u4F7F\u7528\u8FD9\u4EFD\u5FEB\u7167\u3002`,`\u7A0B\u5E8F\u6267\u884C\u5B8C\u6210\uFF1A\u8BFB\u53D6 PII = ${e.pii}\uFF0C\u6267\u884C Q := I\uFF0C\u5F97\u5230 PIQ = ${e.piq}\u3002\u5B9E\u4F53\u8F93\u51FA\u7B49\u4E0B\u4E00\u6B21\u5237\u65B0\u3002`];y(w[e.lastStage])}function p(){s!==null&&clearTimeout(s),s=null}function _(){p(),!(!t||r)&&(s=setTimeout(()=>{s=null,!i.hidden&&!i.closest("[hidden]")&&!document.hidden&&m(),_()},n))}function M(){t=!1,p(),y()}function b(){r||(t=!1,p(),e=Um(),y("\u5DF2\u590D\u4F4D\uFF1A\u73B0\u573A\u8F93\u5165\u3001\u8F93\u5165\u5FEB\u7167\u3001\u8F93\u51FA\u6620\u50CF\u3001\u73B0\u573A\u8F93\u51FA\u5747\u4E3A 0\u3002\u5148\u5207\u6362\u8F93\u5165\uFF0C\u518D\u5F00\u59CB\u5B9E\u9A8C\u3002"))}function v(w){let[A,x]=CM[w];c('[data-detail="title"]').textContent=A,c('[data-detail="body"]').textContent=x;for(let T of i.querySelectorAll("[data-block]"))T.classList.toggle("principle-selected",T.dataset.block===w),T.setAttribute("aria-pressed",String(T.dataset.block===w))}o(h,"click",()=>{e=EM(e,!e.physicalInput),y(`\u73B0\u573A\u8F93\u5165\u5DF2${e.physicalInput?"\u95ED\u5408\uFF0C\u503C\u4E3A 1":"\u65AD\u5F00\uFF0C\u503C\u4E3A 0"}\u3002\u8FD9\u6B21\u64CD\u4F5C\u53EA\u6539\u53D8\u7AEF\u5B50\u72B6\u6001\uFF0CPII\u3001PIQ \u548C\u5B9E\u4F53\u8F93\u51FA\u4FDD\u6301\u539F\u503C\u3002`)}),o(u,"click",()=>{t||m()}),o(d,"click",()=>{t=!t,y(t?"\u6B63\u5728\u81EA\u52A8\u5FAA\u73AF\u3002\u968F\u65F6\u6539\u53D8\u73B0\u573A\u8F93\u5165\uFF0C\u6216\u6682\u505C\u540E\u5355\u6B65\u89C2\u5BDF\u3002":"\u5DF2\u6682\u505C\uFF0C\u6240\u6709\u72B6\u6001\u4FDD\u7559\u3002\u53EF\u4EE5\u7EE7\u7EED\u5355\u6B65\u6267\u884C\u3002"),_()}),o(c('[data-action="reset"]'),"click",b),o(c('[data-action="speed"]'),"change",w=>{n=Number(w.target.value),_()});for(let w of i.querySelectorAll("[data-block]"))o(w,"click",()=>v(w.dataset.block));return v("cpu"),y(),{reset:b,pause:M,getState:()=>({...e,playing:t}),dispose:()=>{r=!0,t=!1,p(),a.forEach(w=>w())}}}var We=i=>document.getElementById(i),Vm=matchMedia("(prefers-reduced-motion: reduce)").matches,xi=We("viewer"),pe={topic:"overview",top:0,bottom:0,explode:0,topGoal:0,bottomGoal:0,explodeGoal:0,paused:!1,labels:!0,tab:"hardware",loaded:!1},mt,Gt,Mn,Vl,Ks,Ys,Zr,Fd,Bd,Gm,Wn=null,Gl=[],Sn,kd=0,Bm=performance.now(),gs=new Map,Hl=new Map,Hi=new da;Hi.background=new Re("#edf2f4");var Et=new It(34,1,.1,3e3);Et.position.set(150,90,260);var Js=new Pa;Js.firstHitOnly=!0;lt.prototype.raycast=Lm;var Om=new _e,IM=new L,LM=new Re("#008f92"),Hm=Fm(We("principle-panel"));function Ln(i,e){We(i)&&(We(i).textContent=e??"")}function DM(i){Ln("pose-label",i)}function zl(i){return Array.isArray(i)?i.join(" "):i??""}function $r(i,{moveCamera:e=!0}={}){let t=oo.find(n=>n.id===i)||oo[0];if(pe.topic=t.id,Ln("lesson-eyebrow",t.eyebrow),Ln("lesson-title",t.title),Ln("lesson-summary",t.summary),Ln("lesson-purpose",zl(t.purpose)),Ln("lesson-connection",zl(t.connection)),Ln("lesson-example",zl(t.example)),Ln("lesson-notes",zl(t.notes)),We("lesson-source").href=t.sourceUrl,We("lesson-source").textContent=t.sourceTitle||"\u67E5\u770B\u897F\u95E8\u5B50\u5B98\u65B9\u8D44\u6599",document.querySelectorAll("[data-topic]").forEach(n=>{let s=n.dataset.topic===t.id;n.classList.toggle("active",s),n.setAttribute("aria-current",String(s))}),pe.loaded&&e){pe.explodeGoal=0,pe.topGoal=t.covers?.top||0,pe.bottomGoal=t.covers?.bottom||0,pe.paused=!1;let n=gs.get(t.anchorKey||t.id);xs(t.view||"front",t.id==="overview"?null:n?.position),bs()}Wm()}for(let[i,e]of oo.entries()){let t=document.createElement("button");t.type="button",t.dataset.topic=e.id,t.innerHTML=`<span class="topic-number">${String(i+1).padStart(2,"0")}</span><span></span>`,t.lastElementChild.textContent=e.title,t.addEventListener("click",()=>$r(e.id)),We("topic-list").append(t)}document.querySelectorAll("[data-tab]").forEach(i=>i.addEventListener("click",()=>{pe.tab=i.dataset.tab,document.querySelectorAll("[data-tab]").forEach(e=>{let t=e===i;e.classList.toggle("active",t),e.setAttribute("aria-selected",String(t))}),We("hardware-panel").hidden=pe.tab!=="hardware",We("principle-panel").hidden=pe.tab!=="principle",pe.tab==="hardware"&&(Hm.pause?.(),requestAnimationFrame(Od))}));function bs(){We("top-cover").setAttribute("aria-pressed",String(pe.topGoal>.5)),We("bottom-cover").setAttribute("aria-pressed",String(pe.bottomGoal>.5)),We("top-cover").textContent=pe.topGoal>.5?"\u5173\u95ED\u4E0A\u76D6":"\u6253\u5F00\u4E0A\u76D6",We("bottom-cover").textContent=pe.bottomGoal>.5?"\u5173\u95ED\u4E0B\u76D6":"\u6253\u5F00\u4E0B\u76D6",We("explode-toggle").setAttribute("aria-pressed",String(pe.explodeGoal>.01)),We("motion-pause").setAttribute("aria-pressed",String(pe.paused)),We("motion-pause").textContent=pe.paused?"\u7EE7\u7EED\u52A8\u753B":"\u6682\u505C\u52A8\u753B",document.activeElement!==We("explode-range")&&(We("explode-range").value=String(Math.round(pe.explodeGoal*100)));let i=pe.explodeGoal>.01?`\u76D6\u677F\u5206\u89E3 ${Math.round(pe.explodeGoal*100)}%`:pe.topGoal||pe.bottomGoal?`${pe.topGoal?"\u4E0A\u76D6\u6253\u5F00":"\u4E0A\u76D6\u95ED\u5408"} \xB7 ${pe.bottomGoal?"\u4E0B\u76D6\u6253\u5F00":"\u4E0B\u76D6\u95ED\u5408"}`:"\u5B8C\u6574\u88C5\u914D";DM(pe.paused?`${i} \xB7 \u52A8\u753B\u5DF2\u6682\u505C`:i)}function Wl(i){pe.explodeGoal=0,pe[`${i}Goal`]=pe[`${i}Goal`]>.5?0:1,bs()}We("top-cover").addEventListener("click",()=>Wl("top"));We("bottom-cover").addEventListener("click",()=>Wl("bottom"));We("explode-toggle").addEventListener("click",()=>{pe.explodeGoal=pe.explodeGoal>.01?0:1,xs(pe.explodeGoal?"exploded":"overview"),bs()});We("explode-range").addEventListener("input",i=>{let e=pe.explodeGoal===0;pe.explodeGoal=Number(i.target.value)/100,pe.explode=pe.explodeGoal,e&&pe.explodeGoal>0&&xs("exploded"),zd(),bs()});We("motion-pause").addEventListener("click",()=>{pe.paused=!pe.paused,bs()});We("toggle-labels").addEventListener("change",i=>{pe.labels=i.target.checked});We("reset-view").addEventListener("click",()=>xs("overview"));We("reset-all").addEventListener("click",()=>{pe.topGoal=pe.bottomGoal=pe.explodeGoal=0,pe.paused=!1,pe.labels=!0,We("toggle-labels").checked=!0,$r("overview",{moveCamera:!1}),xs("overview"),bs()});document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>xs(i.dataset.view)));var km={overview:[.8,.48,1.9],exploded:[.8,.48,1.9],front:[0,0,1],back:[0,0,-1],left:[-1,0,.02],right:[1,0,.02],top:[0,1,.02],bottom:[0,-1,.02]};function xs(i,e){if(!Gt)return;let t=new L(...km[i]||km.front).normalize(),n=e?e.clone().multiplyScalar(.65):new L,s=Math.max(Et.aspect,.6),r=(i==="exploded"?430:e?250:275)*Math.max(1,1.18/s),a=n.clone().addScaledVector(t,r);Wn={from:Et.position.clone(),fromTarget:Gt.target.clone(),to:a,target:n,elapsed:0,duration:Vm?.01:.75},document.querySelectorAll("[data-view]").forEach(o=>{let c=o.dataset.view===i;o.classList.toggle("active",c),o.setAttribute("aria-pressed",String(c))})}function NM(){mt=new ul({antialias:!0,alpha:!1}),mt.setPixelRatio(Math.min(devicePixelRatio,2)),mt.outputColorSpace=St,mt.toneMapping=Da,mt.toneMappingExposure=1.18,mt.shadowMap.enabled=!0,mt.shadowMap.type=yc,mt.domElement.setAttribute("aria-label","\u897F\u95E8\u5B50 CPU 1215C \u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E"),mt.domElement.tabIndex=0,xi.prepend(mt.domElement),Gt=new ml(Et,mt.domElement),Gt.enableDamping=!0,Gt.dampingFactor=.1,Gt.minDistance=105,Gt.maxDistance=650,Gt.enablePan=!0,Gt.maxPolarAngle=Math.PI-.002,Gt.addEventListener("start",()=>{Wn=null}),Hi.add(new wa("#ffffff","#82939b",2.4));let i=new rs("#fff7ed",3.2);i.position.set(150,200,220),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),Object.assign(i.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:1,far:650}),i.shadow.bias=-2e-4,i.shadow.normalBias=.3,Hi.add(i);let e=new rs("#dceeff",1.6);e.position.set(-200,40,-60),Hi.add(e);let t=new lt(new Ds(520,520),new va({color:"#42565b",opacity:.14}));t.rotation.x=-Math.PI/2,t.position.y=-51,t.receiveShadow=!0,Hi.add(t),Sn=new li(new Rr(new Pi(12,9,3)),new Ri({color:LM,transparent:!0,opacity:.92,depthTest:!1})),Sn.renderOrder=100,Sn.visible=!1,Hi.add(Sn);let n;mt.domElement.addEventListener("pointerdown",s=>{n=[s.clientX,s.clientY]}),mt.domElement.addEventListener("pointerup",s=>{if(!n||Math.hypot(s.clientX-n[0],s.clientY-n[1])>5||!Mn)return;let r=mt.domElement.getBoundingClientRect();Om.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),Js.setFromCamera(Om,Et);let a=Js.intersectObjects(Gl,!1)[0];if(!a)return;let o=a.object;for(;o&&!["top_hinge","bottom_hinge","signal_cover"].includes(o.name);)o=o.parent;if(o?.name==="top_hinge")return Wl("top");if(o?.name==="bottom_hinge")return Wl("bottom");if(o?.name==="signal_cover")return $r("signalboard");let c=[...gs].map(([l,h])=>[l,a.point.distanceTo(h.position)]).sort((l,h)=>l[1]-h[1]);c[0]?.[1]<32&&$r(c[0][0])}),mt.domElement.addEventListener("keydown",s=>{s.key.toLowerCase()==="r"&&xs("overview");let r=Et.position.clone().sub(Gt.target);["ArrowLeft","ArrowRight"].includes(s.key)&&(s.preventDefault(),r.applyAxisAngle(new L(0,1,0),s.key==="ArrowLeft"?.12:-.12),Et.position.copy(Gt.target).add(r),Gt.update())}),mt.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),qm("\u56FE\u5F62\u4E0A\u4E0B\u6587\u6682\u65F6\u4E22\u5931\uFF0C\u8BF7\u70B9\u51FB\u91CD\u65B0\u8F7D\u5165\u3002")}),new ResizeObserver(Od).observe(xi),Od()}function Od(){if(!mt||xi.clientWidth<1||xi.clientHeight<1)return;mt.setSize(xi.clientWidth,xi.clientHeight);let i=Et.aspect;if(Et.aspect=xi.clientWidth/xi.clientHeight,Et.updateProjectionMatrix(),pe.loaded&&Gt&&Math.abs(i-Et.aspect)>.001){let e=Math.max(1,1.18/Math.max(Et.aspect,.6))/Math.max(1,1.18/Math.max(i,.6));Et.position.sub(Gt.target).multiplyScalar(e).add(Gt.target),Wn=null}}function UM(){We("hotspots").replaceChildren(),gs.clear(),Hl.clear();for(let[i,e]of oo.entries()){let t=Vl.anchors[e.anchorKey||e.id];if(!t)continue;let n={...t,position:new L(...t.position),normal:new L(...t.normal)};if(gs.set(e.id,n),e.id==="overview")continue;let s=document.createElement("button");s.type="button",s.className="hotspot",s.dataset.topic=e.id,s.setAttribute("aria-label",`\u67E5\u770B${e.title}`),s.innerHTML=`<span class="hotspot-number">${String(i+1).padStart(2,"0")}</span><span class="hotspot-label"></span>`,s.lastElementChild.textContent=e.title,s.addEventListener("click",r=>{r.stopPropagation(),$r(e.id)}),We("hotspots").append(s),Hl.set(e.id,s)}}function zm(i){if(IM.copy(Et.position).sub(i.position).normalize().dot(i.normal)<.05)return!1;let t=Et.position.distanceTo(i.position);Js.set(Et.position,i.position.clone().sub(Et.position).normalize()),Js.far=t+1;let n=Js.intersectObjects(Gl,!1)[0];return Js.far=1/0,!n||n.distance>=t-(i.occlusionTolerance??1.4)}function FM(){if(!pe.loaded||pe.tab!=="hardware")return;let i=xi.clientWidth,e=xi.clientHeight;Mn.updateMatrixWorld(!0);for(let[n,s]of Hl){let r=gs.get(n),a=r.position.clone().project(Et),o=pe.labels&&a.z>-1&&a.z<1&&Math.abs(a.x)<.95&&Math.abs(a.y)<.93&&zm(r);s.hidden=!o,s.style.left=`${(a.x+1)*i/2}px`,s.style.top=`${(1-a.y)*e/2}px`,s.classList.toggle("is-active",pe.topic===n)}let t=gs.get(pe.topic);Sn&&(Sn.visible=pe.topic!=="overview"&&!!(t&&zm(t)))}function Wm(){if(!Sn)return;let i=gs.get(pe.topic);if(!i||pe.topic==="overview"){Sn.visible=!1;return}Sn.geometry.dispose(),Sn.geometry=new Rr(new Pi(...i.size||[14,9,3])),Sn.position.copy(i.position),Sn.visible=!0}function zd(){if(!pe.loaded)return;let i=Vl.motion,e=Oi.clamp(pe.explode/i.coverPhaseEnd,0,1),t=Oi.clamp((pe.explode-i.coverPhaseEnd)/(1-i.coverPhaseEnd),0,1);Ks.rotation.x=Fd.rx+pe.top*i.top.angle,Ys.rotation.x=Bd.rx+pe.bottom*i.bottom.angle,Ks.position.copy(Fd.position).addScaledVector(new L(...i.top.explode),e/1e3),Ys.position.copy(Bd.position).addScaledVector(new L(...i.bottom.explode),e/1e3),Zr.position.copy(Gm.position).addScaledVector(new L(...i.signal.explode),t/1e3);let n=gs.get("signalboard");n&&n.position.fromArray(Vl.anchors.signalboard.position).addScaledVector(new L(...i.signal.explode),t),pe.topic==="signalboard"&&Sn&&Sn.position.copy(n.position),Mn.updateMatrixWorld(!0)}function qm(i){We("viewer-error").hidden=!1;let e=We("alternate-site");e&&["titleone01.github.io","plc.dianqisim.com"].includes(location.hostname)&&(e.href=location.hostname==="titleone01.github.io"?"https://plc.dianqisim.com/":"https://titleone01.github.io/plc1215c-classroom/",e.hidden=!1);let t=We("viewer-error").querySelector(".error-detail");t||(t=document.createElement("p"),t.className="error-detail",We("viewer-error").prepend(t)),t.textContent=i,We("loading").hidden=!0,Ln("model-status","\u6A21\u578B\u52A0\u8F7D\u672A\u5B8C\u6210")}async function Xm(){We("viewer-error").hidden=!0,We("loading").hidden=!1,Ln("loading-text","\u8F7D\u5165\u897F\u95E8\u5B50\u539F\u5382\u6A21\u578B\u2026");try{mt||NM(),Vl=lm;let i=await cm(e=>Ln("loading-text",e));if(Ln("loading-text","\u6574\u7406\u539F\u5382\u90E8\u4EF6\u2026"),Mn&&Hi.remove(Mn),Mn=i.scene,Mn.scale.setScalar(1e3),Gl=[],pe.factoryTriangles=0,Mn.traverse(e=>{if(e.isMesh){pe.factoryTriangles+=(e.geometry.index?.count||e.geometry.attributes.position.count)/3,e.geometry.boundsTree||Dm.call(e.geometry),e.castShadow=!0,e.receiveShadow=!0,Gl.push(e);for(let t of Array.isArray(e.material)?e.material:[e.material])t.roughness=Math.max(t.roughness||.5,.52),t.metalness=Math.min(t.metalness||0,.3)}}),Hi.add(Mn),Ks=Mn.getObjectByName("top_hinge"),Ys=Mn.getObjectByName("bottom_hinge"),Zr=Mn.getObjectByName("signal_cover"),!Ks||!Ys||!Zr)throw new Error("\u6A21\u578B\u7F3A\u5C11\u5DF2\u6807\u5B9A\u7684\u76D6\u677F\u5206\u4EF6");Fd={position:Ks.position.clone(),rx:Ks.rotation.x},Bd={position:Ys.position.clone(),rx:Ys.rotation.x},Gm={position:Zr.position.clone(),rx:Zr.rotation.x},pe.loaded=!0,UM(),zd(),Wm(),Ln("model-status","\u539F\u5382\u6A21\u578B \xB7 \u5DF2\u8F7D\u5165"),We("loading").hidden=!0,xs("overview"),bs(),window.dispatchEvent(new CustomEvent("plc-ready")),window.__PLC_LOAD__.readyAt=performance.now()}catch(i){console.error(i);let e=location.protocol==="file:"?"\u8BF7\u4F7F\u7528\u201C\u542F\u52A8\u6559\u5B66\u7F51\u9875.cmd\u201D\uFF0C\u4E0D\u8981\u76F4\u63A5\u53CC\u51FB HTML \u6587\u4EF6\u3002":"\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u70B9\u51FB\u201C\u91CD\u65B0\u8F7D\u5165\u6A21\u578B\u201D\uFF0C\u6216\u7A0D\u540E\u91CD\u8BD5\u3002";qm(`${i.message}\u3002${e}`)}}We("retry-load").addEventListener("click",()=>{mt?.getContext().isContextLost()?location.reload():Xm()});function jm(i){let e=Math.min((i-Bm)/1e3,.05);if(Bm=i,pe.tab==="hardware"&&mt){if(!pe.paused){let t=Vm?1:1-Math.exp(-e*7);for(let n of["top","bottom","explode"])pe[n]=Oi.lerp(pe[n],pe[`${n}Goal`],t),Math.abs(pe[n]-pe[`${n}Goal`])<5e-5&&(pe[n]=pe[`${n}Goal`]);zd()}if(Wn){Wn.elapsed+=e;let t=Math.min(Wn.elapsed/Wn.duration,1),n=t*t*(3-2*t);Et.position.lerpVectors(Wn.from,Wn.to,n),Gt.target.lerpVectors(Wn.fromTarget,Wn.target,n),t>=1&&(Wn=null)}Gt.update(),FM(),mt.render(Hi,Et)}kd=requestAnimationFrame(jm)}window.__PLC__={snapshot:()=>({...pe,visibleHotspots:[...Hl].filter(([,i])=>!i.hidden).map(([i])=>i),camera:Et.position.toArray(),target:Gt?.target.toArray(),triangles:mt?.info.render.triangles,modelBounds:Mn?new Ze().setFromObject(Mn).getSize(new L).toArray():null,partPositionsMM:pe.loaded?{top:Ks.position.toArray().map(i=>i*1e3),bottom:Ys.position.toArray().map(i=>i*1e3),signal:Zr.position.toArray().map(i=>i*1e3)}:null})};window.addEventListener("pagehide",()=>{cancelAnimationFrame(kd),Hm.dispose?.()});$r("overview",{moveCamera:!1});bs();Xm();kd=requestAnimationFrame(jm);
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
