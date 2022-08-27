import{$ as u,a0 as d,jd as me,bO as de,dL as ye,a1 as et,co as vt,jR as Gt,lt as xe,dK as Tt,bc as ee,r as f,s as W,cn as z,aY as E,i4 as we,lu as N,A as M,cz as _t,al as ft,a8 as C,kE as ve,lv as $e,gv as Ae,bL as be,q as Me,t as it,f as Rt,f9 as Pt,ft as ne,fs as St,fA as re,fC as gt,fa as Fe,C as oe,fi as mt,gT as Te,fr as Re,kV as se,a6 as ie,Z as De,iJ as Ee,cM as Oe,cI as Ce,R as Le,cE as Dt,ar as Ie,J as At,d8 as _e,cN as Pe}from"./index.1aec8a9e.js";import{r as $t,M as Se,x as je,a as jt,j as Nt,k as zt,O as Ut,h as Wt,L as kt,b as Ne,c as at,g as Et,l as Ot,d as ze,e as pt,f as dt}from"./georeference.5797d36a.js";import{x as Ue}from"./earcut.f65e2fcc.js";import{n as We}from"./deduplicate.7ae45067.js";import{a as Ht}from"./quatf64.2f917dd7.js";import{e as ae}from"./mat4f64.0958f530.js";var q;const bt=new WeakMap;let ke=0,O=q=class extends vt{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,n,e,r){if(t instanceof HTMLImageElement){const o={type:"image-element",src:Gt(t.src,r),crossOrigin:t.crossOrigin};n[e]=o}else if(t instanceof HTMLCanvasElement){const o=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};n[e]=s}else if(t instanceof HTMLVideoElement){const o={type:"video-element",src:Gt(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};n[e]=o}else{const o={type:"image-data",imageData:this._encodeImageData(t)};n[e]=o}}readData(t){switch(t.type){case"image-element":{const n=new Image;return n.src=t.src,n.crossOrigin=t.crossOrigin,n}case"canvas-element":{const n=this._decodeImageData(t.imageData),e=document.createElement("canvas");return e.width=n.width,e.height=n.height,e.getContext("2d").putImageData(n,0,0),e}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const n=document.createElement("video");return n.src=t.src,n.crossOrigin=t.crossOrigin,n.autoplay=t.autoplay,n.loop=t.loop,n.muted=t.muted,n.preload=t.preload,n}default:return}}get transparent(){const t=this.data,n=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(n){const e=n.substr(n.length-4,4).toLowerCase(),r=n.substr(0,15).toLocaleLowerCase();if(e===".png"||r==="data:image/png;")return!0}return!1}set transparent(t){t!=null?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",n=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return this.url!=null?n(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?n(this.data.src):(bt.has(this.data)||bt.set(this.data,++ke),n(bt.get(this.data))):n()}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new q(t)}cloneWithDeduplication(t){const n=t.get(this);if(n)return n;const e=this.clone();return t.set(this,e),e}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let n="";for(let e=0;e<t.data.length;e++)n+=String.fromCharCode(t.data[e]);return{data:btoa(n),width:t.width,height:t.height}}_decodeImageData(t){const n=atob(t.data),e=new Uint8ClampedArray(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return xe(e,t.width,t.height)}_imageDataContainsTransparent(t){for(let n=3;n<t.data.length;n+=4)if(t.data[n]!==255)return!0;return!1}static from(t){return typeof t=="string"?new q({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new q({data:t}):Tt(q,t)}};u([d({type:String,json:{write:me}})],O.prototype,"url",null),u([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),u([de("data")],O.prototype,"writeData",null),u([ye("data")],O.prototype,"readData",null),u([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),u([d({json:{write:!0}})],O.prototype,"wrap",void 0),u([d({readOnly:!0})],O.prototype,"contentHash",null),O=q=u([et("esri.geometry.support.MeshTexture")],O);const st=O;var Ct;let L=Ct=class extends vt{constructor(t){super(t),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,n){const e=f(t)?t.get(this):null;if(e)return e;const r=new Ct(this.clonePropertiesWithDeduplication(n));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{color:f(this.color)?this.color.clone():null,colorTexture:f(this.colorTexture)?this.colorTexture.cloneWithDeduplication(t):null,normalTexture:f(this.normalTexture)?this.normalTexture.cloneWithDeduplication(t):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};u([d({type:ee,json:{write:!0}})],L.prototype,"color",void 0),u([d({type:st,json:{write:!0}})],L.prototype,"colorTexture",void 0),u([d({type:st,json:{write:!0}})],L.prototype,"normalTexture",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0),u([d({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0),L=Ct=u([et("esri.geometry.support.MeshMaterial")],L);const Bt=L;var Lt;let I=Lt=class extends Bt{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,n){const e=f(t)?t.get(this):null;if(e)return e;const r=new Lt(this.clonePropertiesWithDeduplication(n));return f(t)&&t.set(this,r),r}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:f(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:f(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:f(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:f(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(t):null}}};u([d({type:ee,json:{write:!0}})],I.prototype,"emissiveColor",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"emissiveTexture",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"occlusionTexture",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"metallic",void 0),u([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],I.prototype,"roughness",void 0),u([d({type:st,json:{write:!0}})],I.prototype,"metallicRoughnessTexture",void 0),I=Lt=u([et("esri.geometry.support.MeshMaterialMetallicRoughness")],I);const He=I;var ht;const H=W.getLogger("esri.geometry.support.MeshVertexAttributes");let b=ht=class extends vt{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return J(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},H)}castPosition(t){return t&&t instanceof Float32Array&&H.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),J(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},H)}castUv(t){return J(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},H)}castNormal(t){return J(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},H)}castTangent(t){return J(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},H)}clone(){const t={position:E(this.position),uv:E(this.uv),normal:E(this.normal),tangent:E(this.tangent),color:E(this.color)};return new ht(t)}clonePositional(){const t={position:E(this.position),normal:E(this.normal),tangent:E(this.tangent),uv:this.uv,color:this.color};return new ht(t)}};function Mt(t,n,e,r){const{loggerTag:o,stride:s}=n;return t.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new e([])):t}function J(t,n,e,r,o){if(!t)return t;if(t instanceof n)return Mt(t,r,n,o);for(const s of e)if(t instanceof s)return Mt(new n(t),r,n,o);if(Array.isArray(t))return Mt(new n(t),r,n,o);{const s=e.map(i=>`'${i.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new n([])}}function nt(t,n,e){n[e]=Be(t)}function Be(t){const n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e];return n}u([d({json:{write:nt}})],b.prototype,"color",void 0),u([z("color")],b.prototype,"castColor",null),u([d({nonNullable:!0,json:{write:nt}})],b.prototype,"position",void 0),u([z("position")],b.prototype,"castPosition",null),u([d({json:{write:nt}})],b.prototype,"uv",void 0),u([z("uv")],b.prototype,"castUv",null),u([d({json:{write:nt}})],b.prototype,"normal",void 0),u([z("normal")],b.prototype,"castNormal",null),u([d({json:{write:nt}})],b.prototype,"tangent",void 0),u([z("tangent")],b.prototype,"castTangent",null),b=ht=u([et("esri.geometry.support.MeshVertexAttributes")],b);var ot;const Ge=W.getLogger("esri.geometry.support.MeshComponent");let _=ot=class extends vt{constructor(t){super(t),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(t){return Tt(ot,t)}castFaces(t){return J(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Ge)}castMaterial(t){return Tt(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?He:Bt,t)}clone(){return new ot({faces:E(this.faces),shading:this.shading,material:E(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(t,n){const e={faces:E(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,n):null,trustSourceNormals:this.trustSourceNormals};return new ot(e)}};u([d({json:{write:!0}})],_.prototype,"faces",void 0),u([z("faces")],_.prototype,"castFaces",null),u([d({type:Bt,json:{write:!0}})],_.prototype,"material",void 0),u([z("material")],_.prototype,"castMaterial",null),u([d({type:String,json:{write:!0}})],_.prototype,"shading",void 0),u([d({type:Boolean})],_.prototype,"trustSourceNormals",void 0),_=ot=u([et("esri.geometry.support.MeshComponent")],_);const Q=_;function Ve(t){const n=qe(t.rings,t.hasZ,yt.CCW_IS_HOLE),e=[];let r=0,o=0;for(const a of n.polygons){const l=a.count,c=a.index,g=new Float64Array(n.position.buffer,3*c*n.position.BYTES_PER_ELEMENT,3*l),m=a.holeIndices.map(h=>h-c),p=new Uint32Array(Ue(g,m,3));e.push({position:g,faces:p}),r+=g.length,o+=p.length}const s=Ze(e,r,o),i=We(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(i.buffer),s.faces=i.indices,s}function Ze(t,n,e){if(t.length===1)return t[0];const r=new Float64Array(n),o=new Uint32Array(e);let s=0,i=0,a=0;for(const l of t){for(let c=0;c<l.position.length;c++)r[s++]=l.position[c];for(let c=0;c<l.faces.length;c++)o[i++]=l.faces[c]+a;a=s/3}return{position:r,faces:o}}function qe(t,n,e){const r=t.length,o=new Array(r),s=new Array(r),i=new Array(r);let a=0,l=0,c=0,g=0;for(let h=0;h<r;++h)g+=t[h].length;const m=new Float64Array(3*g);let p=0;for(let h=r-1;h>=0;h--){const y=t[h],T=e===yt.CCW_IS_HOLE&&Je(y);if(T&&r!==1)o[a++]=y;else{let v=y.length;for(let x=0;x<a;++x)v+=o[x].length;const $={index:p,pathLengths:new Array(a+1),count:v,holeIndices:new Array(a)};$.pathLengths[0]=y.length,y.length>0&&(i[c++]={index:p,count:y.length}),p=T?lt(y,y.length-1,-1,m,p,y.length,n):lt(y,0,1,m,p,y.length,n);for(let x=0;x<a;++x){const A=o[x];$.holeIndices[x]=p,$.pathLengths[x+1]=A.length,A.length>0&&(i[c++]={index:p,count:A.length}),p=lt(A,0,1,m,p,A.length,n)}a=0,$.count>0&&(s[l++]=$)}}for(let h=0;h<a;++h){const y=o[h];y.length>0&&(i[c++]={index:p,count:y.length}),p=lt(y,0,1,m,p,y.length,n)}return l<r&&(s.length=l),c<r&&(i.length=c),{position:m,polygons:s,outlines:i}}function lt(t,n,e,r,o,s,i){o*=3;for(let a=0;a<s;++a){const l=t[n];r[o++]=l[0],r[o++]=l[1],r[o++]=i?l[2]:0,n+=e}return o/3}function Je(t){return!we(t,!1,!1)}var yt;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(yt||(yt={}));const It=W.getLogger("esri.geometry.support.meshUtils.centerAt");function Ye(t,n,e){var o;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=(o=e==null?void 0:e.origin)!=null?o:t.origin;f(t.transform)?((e==null?void 0:e.geographic)!=null&&e.geographic!==t.transform.geographic&&It.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),Xe(t.transform,n,r)):$t(t.spatialReference,e)?Ke(t,n,r):Qe(t,n,r)}function Xe(t,n,e){const r=n.x-e.x,o=n.y-e.y,s=n.hasZ&&e.hasZ?n.z-e.z:0,i=t.origin;t.origin=[i[0]+r,i[1]+o,i[2]+s]}function Ke(t,n,e){const r=Se(t.vertexAttributes,e,{geographic:!0}),{position:o,normal:s,tangent:i}=je(r,n,{geographic:!0});t.vertexAttributes.position=o,t.vertexAttributes.normal=s,t.vertexAttributes.tangent=i,t.vertexAttributesChanged()}function Qe(t,n,e){const r=nn,o=en;if(N(n,o,t.spatialReference)){if(!N(e,r,t.spatialReference)){const s=t.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,It.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}tn(t.vertexAttributes.position,o,r),t.vertexAttributesChanged()}else It.error(`Failed to project centerAt location (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`)}function tn(t,n,e){if(t)for(let r=0;r<t.length;r+=3)for(let o=0;o<3;o++)t[r+o]+=n[o]-e[o]}const en=M(),nn=M();async function rn(t,n,e){const{loadGLTFMesh:r}=await _t(ft(()=>import("./loadGLTFMesh.44199435.js"),["loadGLTFMesh.44199435.js","index.1aec8a9e.js","index.52c48493.css","quatf64.2f917dd7.js","BufferView.aa24e9b0.js","vec33.36a7d3e0.js","DefaultMaterial_COLOR_GAMMA.b5a0256b.js","types.09a5cdc4.js","mat4f64.0958f530.js","enums.c60b1dad.js","Version.7ae8128b.js","quat.74a05a24.js","vectorStacks.6fa6db75.js","lineSegment.ccb26fac.js","georeference.5797d36a.js","earcut.f65e2fcc.js","deduplicate.7ae45067.js"],import.meta.url),e),o=await le(n,e),s=r(new C({x:0,y:0,z:0,spatialReference:t.spatialReference}),o.url,{resolveFile:on(o),useTransform:!0,signal:f(e)?e.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:a}=await s;t.vertexAttributes=i,t.components=a}function on(t){const n=ve(t.url);return e=>{var s;const r=$e(e,n,n),o=r?r.replace(/^ *\.\//,""):null;return(s=t.files.get(o))!=null?s:e}}async function le(t,n){return t instanceof Blob?tt.fromBlob(t):typeof t=="string"?new tt(t):Array.isArray(t)?sn(t,n):an(t,n)}async function sn(t,n){const e=new Map;let r=null;const o=await Ae(t.map(async i=>({name:i.name,source:await le(i instanceof Blob?i:i.source,n)}))),s=[];for(const i of o)i&&(be(n)?i.source.dispose():s.push(i));Me(n);for(const{name:i,source:a}of s)(it(r)||/\.(gltf|glb)/i.test(i))&&(r=a.url),e.set(i,a.url),a.files&&a.files.forEach((l,c)=>e.set(c,l));if(it(r))throw new Rt("mesh-load-external:missing-files","Missing files to load external mesh source");return new tt(r,()=>s.forEach(({source:i})=>i.dispose()),e)}async function an(t,n){const{default:e}=await _t(ft(()=>import("./index.1aec8a9e.js").then(o=>o.lz),["index.1aec8a9e.js","index.52c48493.css"],import.meta.url),n),r=typeof t.multipart[0]=="string"?await Promise.all(t.multipart.map(async o=>(await e(o,{responseType:"array-buffer"})).data)):t.multipart;return tt.fromBlob(new Blob(r))}class tt{constructor(n,e=()=>{},r=new Map){this.url=n,this.dispose=e,this.files=r}static fromBlob(n){const e=URL.createObjectURL(n);return new tt(e,()=>URL.revokeObjectURL(e))}}const ln=W.getLogger("esri.geometry.support.meshUtils.offset");function cn(t,n,e){t.vertexAttributes&&t.vertexAttributes.position&&(f(t.transform)?((e==null?void 0:e.geographic)!=null&&e.geographic!==t.transform.geographic&&ln.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),un(t.transform,n)):$t(t.spatialReference,e)?pn(t,n):hn(t,n))}function un(t,n){const e=t.origin;t.origin=Pt(M(),e,n)}function pn(t,n){const e=t.spatialReference,r=t.vertexAttributes.position,o=t.vertexAttributes.normal,s=t.vertexAttributes.tangent,i=new Float64Array(r.length),a=f(o)?new Float32Array(o.length):null,l=f(s)?new Float32Array(s.length):null,c=t.extent.center,g=fn;ne(e,[c.x,c.y,c.z],Vt,St(e)),re(Zt,Vt),gt(g,n,Zt),jt(r,e,i),f(o)&&Nt(o,r,i,e,a),f(s)&&zt(s,r,i,e,l),ce(i,g),Ut(i,r,e),f(o)&&Wt(a,r,i,e,o),f(s)&&kt(l,r,i,e,s),t.vertexAttributesChanged()}function hn(t,n){ce(t.vertexAttributes.position,n),t.vertexAttributesChanged()}function ce(t,n){if(t)for(let e=0;e<t.length;e+=3)for(let r=0;r<3;r++)t[e+r]+=n[r]}const fn=M(),Vt=ae(),Zt=Ht();function gn(){const{faceDescriptions:t,faceVertexOffsets:n,uvScales:e}=An,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*t.length*3);let l=0,c=0,g=0,m=0;for(let p=0;p<t.length;p++){const h=t[p],y=l/3;for(const v of n)a[m++]=y+v;const T=h.corners;for(let v=0;v<4;v++){const $=T[v];let x=0;i[g++]=.25*e[v][0]+h.uvOrigin[0],i[g++]=h.uvOrigin[1]-.25*e[v][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[l++]=.5*h.axis[A],s[c++]=h.axis[A]):(o[l++]=.5*$[x++],s[c++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function mn(t,n){const e=t.components[0],r=e.faces,o=bn[n],s=6*o,i=new Uint32Array(6),a=new Uint32Array(r.length-6);let l=0,c=0;for(let g=0;g<r.length;g++)g>=s&&g<s+6?i[l++]=r[g]:a[c++]=r[g];if(f(t.vertexAttributes.uv)){const g=new Float32Array(t.vertexAttributes.uv),m=4*o*2,p=[0,1,1,1,1,0,0,0];for(let h=0;h<p.length;h++)g[m+h]=p[h];t.vertexAttributes.uv=g}return t.components=[new Q({faces:i,material:e.material}),new Q({faces:a})],t}function dn(t=0){const n=Math.round(8*2**t),e=2*n,r=(n-1)*(e+1)+2*e,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((n-1)*e*2));let l=0,c=0,g=0,m=0;for(let p=0;p<=n;p++){const h=p/n*Math.PI+.5*Math.PI,y=Math.cos(h),T=Math.sin(h);w[2]=T;const v=p===0||p===n,$=v?e-1:e;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI;w[0]=-Math.sin(A)*y,w[1]=Math.cos(A)*y;for(let P=0;P<3;P++)o[l]=.5*w[P],s[l]=w[P],++l;i[c++]=(x+(v?.5:0))/e,i[c++]=p/n,p!==0&&x!==e&&(p!==n&&(a[g++]=m,a[g++]=m+1,a[g++]=m-e),p!==1&&(a[g++]=m,a[g++]=m-e,a[g++]=m-e-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function yn(t=0){const e=Math.round(16*2**t),r=(5-1)*(e+1)+2*e,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*e));let l=0,c=0,g=0,m=0,p=0;for(let h=0;h<=5;h++){const y=h===0||h===5,T=h<=1||h>=5-1,v=h===2||h===4,$=y?e-1:e;for(let x=0;x<=$;x++){const A=x/$*2*Math.PI,P=y?0:.5;w[0]=P*Math.sin(A),w[1]=P*-Math.cos(A),w[2]=h<=2?.5:-.5;for(let k=0;k<3;k++)o[l++]=w[k],s[c++]=T?k===2?h<=1?1:-1:0:k===2?0:w[k]/P;i[g++]=(x+(y?.5:0))/e,i[g++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,v||h===0||x===e||(h!==5&&(a[m++]=p,a[m++]=p+1,a[m++]=p-e),h!==1&&(a[m++]=p,a[m++]=p-e,a[m++]=p-e-1)),p++}}return{position:o,normal:s,uv:i,faces:a}}function xn(t,n){const e=typeof n=="number"?n:n!=null?n.width:1,r=typeof n=="number"?n:n!=null?n.height:1;switch(t){case"up":case"down":return{width:e,depth:r};case"north":case"south":return{width:e,height:r};case"east":case"west":return{depth:e,height:r}}}function wn(t){const n=rt.facingAxisOrderSwap[t],e=rt.position,r=rt.normal,o=new Float64Array(e.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const l=i;for(let c=0;c<3;c++){const g=n[c],m=Math.abs(g)-1,p=g>=0?1:-1;o[i]=e[l+m]*p,s[i]=r[l+m]*p,i++}}return{position:o,normal:s,uv:new Float32Array(rt.uv),faces:new Uint32Array(rt.faces),isPlane:!0}}const B=1,G=2,V=3,rt={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[V,B,G],west:[-V,-B,G],north:[-B,V,G],south:[B,-V,G],up:[B,G,V],down:[B,-G,-V]}};function ct(t,n,e){t.isPlane||vn(t),$n(t,e&&e.size);const{vertexAttributes:r,transform:o}=Ne(t,n,e);return{vertexAttributes:new b({...r,uv:t.uv}),transform:o,components:[new Q({faces:t.faces,material:e&&e.material||null})],spatialReference:n.spatialReference}}function vn(t){for(let n=0;n<t.position.length;n+=3)t.position[n+2]+=.5}function $n(t,n){if(n==null)return;const e=typeof n=="number"?[n,n,n]:[n.width!=null?n.width:1,n.depth!=null?n.depth:1,n.height!=null?n.height:1];S[0]=e[0],S[4]=e[1],S[8]=e[2];for(let r=0;r<t.position.length;r+=3){for(let o=0;o<3;o++)w[o]=t.position[r+o];gt(w,w,S);for(let o=0;o<3;o++)t.position[r+o]=w[o]}if(e[0]!==e[1]||e[1]!==e[2]){S[0]=1/e[0],S[4]=1/e[1],S[8]=1/e[2];for(let r=0;r<t.normal.length;r+=3){for(let o=0;o<3;o++)w[o]=t.normal[r+o];gt(w,w,S),Fe(w,w);for(let o=0;o<3;o++)t.normal[r+o]=w[o]}}}const An={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},bn={south:0,east:1,north:2,west:3,up:4,down:5},w=M(),S=Ht(),ue=W.getLogger("esri.geometry.support.meshUtils.rotate");function Mn(t,n,e){var o,s;if(!t.vertexAttributes||!t.vertexAttributes.position||n[3]===0)return;const r=t.spatialReference;if(f(t.transform)){(e==null?void 0:e.geographic)!=null&&e.geographic!==t.transform.geographic&&ue.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const i=(o=e==null?void 0:e.origin)!=null?o:t.transform.getOriginPoint(r);Fn(t.transform,n,i)}else{const i=(s=e==null?void 0:e.origin)!=null?s:t.origin;$t(t.spatialReference,e)?Tn(t,n,i):Rn(t,n,i)}}function Fn(t,n,e){const r=oe(Y,e.x,e.y,e.z),o=mt(Y,r,t.origin);t.applyLocalInverse(o,qt),t.rotation=Et(t.rotation,n,at()),t.applyLocalInverse(o,o),mt(o,o,qt),t.translation=Pt(M(),t.translation,o)}function Tn(t,n,e){const r=t.spatialReference,o=St(r),s=pe;N(e,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,c=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(l)?new Float32Array(l.length):null;ne(o,s,xt,o),re(Yt,xt);const p=Jt;gt(Ot(Jt),Ot(n),Yt),p[3]=n[3],jt(i,r,c),f(a)&&Nt(a,i,c,r,g),f(l)&&zt(l,i,c,r,m),K(c,p,3,s),Ut(c,i,r),f(a)&&(K(g,p,3),Wt(g,i,c,r,a)),f(l)&&(K(m,p,4),kt(m,i,c,r,l)),t.vertexAttributesChanged()}function Rn(t,n,e){const r=pe;if(!N(e,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ue.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}K(t.vertexAttributes.position,n,3,r),K(t.vertexAttributes.normal,n,3),K(t.vertexAttributes.tangent,n,4),t.vertexAttributesChanged()}function K(t,n,e,r=se){if(!it(t)){Te(xt,ze(n),Ot(n));for(let o=0;o<t.length;o+=e){for(let s=0;s<3;s++)Y[s]=t[o+s]-r[s];Re(Y,Y,xt);for(let s=0;s<3;s++)t[o+s]=Y[s]+r[s]}}}const Y=M(),qt=M(),Jt=at(),xt=ae(),Yt=Ht(),pe=M(),he=W.getLogger("esri.geometry.support.meshUtils.scale");function Dn(t,n,e){var o;if(!t.vertexAttributes||!t.vertexAttributes.position)return;const r=t.spatialReference;if(f(t.transform)){(e==null?void 0:e.geographic)!=null&&e.geographic!==t.transform.geographic&&he.warn(`Specifying the 'geographic' parameter (${e.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const s=(o=e==null?void 0:e.origin)!=null?o:t.transform.getOriginPoint(r);En(t.transform,n,s)}else{const s=$t(t.spatialReference,e),i=e&&e.origin||t.origin;s?On(t,n,i):Cn(t,n,i)}}function En(t,n,e){const r=oe(X,e.x,e.y,e.z),o=mt(X,r,t.origin);t.applyLocalInverse(o,Xt);const s=ie(M(),t.scale,n);t.scale=s,t.applyLocalInverse(o,o),mt(o,o,Xt),t.translation=Pt(M(),t.translation,o)}function On(t,n,e){const r=t.spatialReference,o=St(r),s=ge;N(e,s,o)||N(t.origin,s,o);const i=t.vertexAttributes.position,a=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,c=new Float64Array(i.length),g=f(a)?new Float32Array(a.length):null,m=f(l)?new Float32Array(l.length):null;jt(i,r,c),f(a)&&Nt(a,i,c,r,g),f(l)&&zt(l,i,c,r,m),fe(c,n,s),Ut(c,i,r),f(a)&&Wt(g,i,c,r,a),f(l)&&kt(m,i,c,r,l),t.vertexAttributesChanged()}function Cn(t,n,e){const r=ge;if(!N(e,r,t.spatialReference)){const o=t.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,he.error(`Failed to project specified origin (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}fe(t.vertexAttributes.position,n,r),t.vertexAttributesChanged()}function fe(t,n,e=se){if(t)for(let r=0;r<t.length;r+=3){for(let o=0;o<3;o++)X[o]=t[r+o]-e[o];ie(X,X,n);for(let o=0;o<3;o++)t[r+o]=X[o]+e[o]}}const X=M(),Xt=M(),ge=M();var D;const R=W.getLogger("esri.geometry.Mesh");let F=D=class extends De(Ee.LoadableMixin(Oe(Ce))){constructor(t){super(t),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new b,this.type="mesh"}initialize(){(it(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(Le(()=>{var t;return{vertexAttributes:this.vertexAttributes,components:(t=this.components)==null?void 0:t.map(n=>n.clone()),transform:f(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&f(this.external)&&f(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const t=this.vertexAttributes.position,n=this.spatialReference;if(t.length===0||this.components&&this.components.length===0)return{extent:new Dt({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:n}),center:new C({x:0,y:0,z:0,spatialReference:n})};const e=f(this.transform)?this.transform.project(t,n):t;let r=1/0,o=1/0,s=1/0,i=-1/0,a=-1/0,l=-1/0,c=0,g=0,m=0;const p=e.length,h=1/(p/3);let y=0;for(;y<p;){const T=e[y++],v=e[y++],$=e[y++];r=Math.min(r,T),o=Math.min(o,v),s=Math.min(s,$),i=Math.max(i,T),a=Math.max(a,v),l=Math.max(l,$),c+=h*T,g+=h*v,m+=h*$}return{extent:new Dt({xmin:r,ymin:o,zmin:s,xmax:i,ymax:a,zmax:l,spatialReference:n}),center:new C({x:c,y:g,z:m,spatialReference:n})}}get anchor(){if(f(this.transform))return this.transform.getOriginPoint(this.spatialReference);const t=this.boundingInfo;return new C({x:t.center.x,y:t.center.y,z:t.extent.zmin,spatialReference:this.spatialReference})}get origin(){return f(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&f(this.external)&&f(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(t){this.loaded?(this.components||(this.components=[]),this.components.push(Q.from(t)),this.notifyChange("components")):R.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(t){if(this.loaded){if(this.components){const n=this.components.indexOf(t);if(n!==-1)return this.components.splice(n,1),void this.notifyChange("components")}R.error("removeComponent()","Provided component is not part of the list of components")}else R.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(t,n,e,r){return pt(Ft.x,t,Z),pt(Ft.y,n,Kt),pt(Ft.z,e,Qt),Et(Z,Kt,Z),Et(Z,Qt,Z),Mn(this,Z,r),this}offset(t,n,e,r){return this.loaded?(ut[0]=t,ut[1]=n,ut[2]=e,cn(this,ut,r),this):(R.error("offset()","Mesh must be loaded before applying operations"),this)}scale(t,n){return this.loaded?(Dn(this,t,n),this):(R.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(t,n){return this.loaded?(Ye(this,t,n),this):(R.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(t){return f(this.external)&&this.addResolvingPromise(rn(this,this.external.source,t)),Promise.resolve(this)}clone(){const t=this.components?new Map:null,n=this.components?new Map:null,e={components:this.components?this.components.map(r=>r.cloneWithDeduplication(t,n)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:f(this.transform)?this.transform.clone():null,external:f(this.external)?{source:this.external.source,extent:f(this.external.extent)?this.external.extent.clone():null}:null};return new D(e)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(t){const{toBinaryGLTF:n}=await ft(()=>import("./gltfexport.f302a4fe.js"),["gltfexport.f302a4fe.js","index.1aec8a9e.js","index.52c48493.css","quat.74a05a24.js","quatf64.2f917dd7.js","georeference.5797d36a.js","mat4f64.0958f530.js","BufferView.aa24e9b0.js","vec33.36a7d3e0.js","enums.c60b1dad.js","imageutils.90359752.js","earcut.f65e2fcc.js","deduplicate.7ae45067.js"],import.meta.url);return n(this,t)}static createBox(t,n){if(!(t instanceof C))return R.error(".createBox()","expected location to be a Point instance"),null;const e=new D(ct(gn(),t,n));return n&&n.imageFace&&n.imageFace!=="all"?mn(e,n.imageFace):e}static createSphere(t,n){return t instanceof C?new D(ct(dn(n&&n.densificationFactor||0),t,n)):(R.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(t,n){return t instanceof C?new D(ct(yn(n&&n.densificationFactor||0),t,n)):(R.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(t,n){var o;if(!(t instanceof C))return R.error(".createPlane()","expected location to be a Point instance"),null;const e=(o=n==null?void 0:n.facing)!=null?o:"up",r=xn(e,n==null?void 0:n.size);return new D(ct(wn(e),t,{...n,size:r}))}static createFromPolygon(t,n){if(!(t instanceof Ie))return R.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const e=Ve(t);return new D({vertexAttributes:new b({position:e.position}),components:[new Q({faces:e.faces,shading:"flat",material:n&&n.material||null})],spatialReference:t.spatialReference})}static async createFromGLTF(t,n,e){if(!(t instanceof C))throw R.error(".createfromGLTF()","expected location to be a Point instance"),new Rt("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await _t(ft(()=>import("./loadGLTFMesh.44199435.js"),["loadGLTFMesh.44199435.js","index.1aec8a9e.js","index.52c48493.css","quatf64.2f917dd7.js","BufferView.aa24e9b0.js","vec33.36a7d3e0.js","DefaultMaterial_COLOR_GAMMA.b5a0256b.js","types.09a5cdc4.js","mat4f64.0958f530.js","enums.c60b1dad.js","Version.7ae8128b.js","quat.74a05a24.js","vectorStacks.6fa6db75.js","lineSegment.ccb26fac.js","georeference.5797d36a.js","earcut.f65e2fcc.js","deduplicate.7ae45067.js"],import.meta.url),e);return new D(await r(t,n,e))}static createWithExternalSource(t,n,e){var i,a,l;const r=(i=e==null?void 0:e.extent)!=null?i:null,o=(a=e==null?void 0:e.transform.clone())!=null?a:new dt;o.origin=[t.x,t.y,(l=t.z)!=null?l:0];const s=t.spatialReference;return new D({external:{source:n,extent:r},transform:o,spatialReference:s})}static createIncomplete(t,n){var s,i;const e=(s=n==null?void 0:n.transform.clone())!=null?s:new dt;e.origin=[t.x,t.y,(i=t.z)!=null?i:0];const r=t.spatialReference,o=new D({transform:e,spatialReference:r});return o.addResolvingPromise(Promise.reject(new Rt("mesh-incomplete","Mesh resources are not complete"))),o}};u([d({type:[Q],json:{write:!0}})],F.prototype,"components",void 0),u([d({type:dt,json:{write:!0}})],F.prototype,"transform",void 0),u([d({constructOnly:!0})],F.prototype,"external",void 0),u([d({readOnly:!0})],F.prototype,"hasExtent",null),u([d({readOnly:!0})],F.prototype,"boundingInfo",null),u([d({readOnly:!0})],F.prototype,"anchor",null),u([d({readOnly:!0})],F.prototype,"origin",null),u([d({readOnly:!0,json:{read:!1}})],F.prototype,"extent",null),u([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],F.prototype,"hasZ",void 0),u([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],F.prototype,"hasM",void 0),u([d({type:b,nonNullable:!0,json:{write:!0}})],F.prototype,"vertexAttributes",void 0),F=D=u([et("esri.geometry.Mesh")],F);const Ft={x:At(1,0,0),y:At(0,1,0),z:At(0,0,1)},Z=at(),Kt=at(),Qt=at(),ut=M(),te=F;var U,wt;(function(t){t.featureGUID="featureGUID",t.assetName="assetName",t.hash="hash",t.type="type",t.conversionStatus="conversionStatus",t.flags="flags",t.complexity="complexity",t.size="size",t.seqNo="seqNo",t.sourceHash="sourceHash",t.assetURL="assetURL"})(U||(U={})),function(t){t.SUBMITTED="SUBMITTED",t.INPROGRESS="INPROGRESS",t.FAILED="FAILED",t.COMPLETED="COMPLETED"}(wt||(wt={}));function Ln(t,n,e){const r=e.features;e.features=[],delete e.geometryType;const o=_e.fromJSON(e);o.geometryType="mesh";const s=o.spatialReference,i=it(t.outFields)||!t.outFields.length?()=>({}):In(t.outFields.includes("*")?null:new Set(t.outFields));for(const a of r){const l=_n(a,s,n);f(l)&&o.features.push(new Pe({geometry:l,attributes:i(a)}))}return o}function In(t){return({attributes:n})=>{if(!n)return{};if(!t)return n;for(const e in n)t.has(e)||delete n[e];return n}}function _n(t,n,e){const{status:r,source:o}=jn(t);if(r===j.FAILED)return null;const s=Pn(t,n,e),i=Dt.fromJSON(t.geometry);i.spatialReference=n;const a=Sn(t,e);return r===j.PENDING?te.createIncomplete(s,{extent:i,transform:a}):te.createWithExternalSource(s,o,{extent:i,transform:a})}function Pn({attributes:t},n,{transformFieldRoles:e}){return new C({x:t[e.originX],y:t[e.originY],z:t[e.originZ],spatialReference:n})}function Sn({attributes:t,assetMappings:n},{transformFieldRoles:e}){var r;return new dt({translation:[t[e.translationX],t[e.translationY],t[e.translationZ]],rotation:pt([t[e.rotationX],t[e.rotationY],t[e.rotationZ]],t[e.rotationDeg]),scale:[t[e.scaleX],t[e.scaleY],t[e.scaleZ]],geographic:!((r=n[U.flags])!=null&&r.includes("PROJECT_VERTICES"))})}function jn(t){if(!t.assetMappings)return{status:j.FAILED};const n=[],e=new Map;for(const r of t.assetMappings){const o=r[U.seqNo],s=r[U.assetName],i=r[U.assetURL],a=r[U.conversionStatus];if(a===wt.FAILED)return{status:j.FAILED};if(a!==wt.COMPLETED)return{status:j.PENDING};if(o==null)n.push({name:s,source:i});else{const l=e.get(s);let c;l?c=l.multipart:(c=[],n.push({name:s,source:{multipart:c}}),e.set(s,{multipart:c})),c[o]=i}}return{status:j.COMPLETED,source:n}}var j;(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(j||(j={}));const Bn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:Ln},Symbol.toStringTag,{value:"Module"}));export{Bn as a,He as c,Q as f,st as m,b as p};
