import{es as p,f as n,r as c,U as h,et as d,eu as b,al as w,dB as v,ev as z}from"./index.1aec8a9e.js";let i=a();function a(){return new p(50)}function S(){i=a()}function x(e,r){if(e.type==="icon")return y(e,r);if(e.type==="object")return l(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function I(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return L(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function y(e,r){if(e.resource.href)return B(e.resource.href).then(t=>[t.width,t.height]);if(e.resource.primitive)return c(r)?[r,r]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return y(e,r).then(t=>{if(e.size==null)return t;const o=t[0]/t[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]})}function B(e){return h(e,{responseType:"image"}).then(r=>r.data)}function l(e,r){return _(e,r).then(t=>d(t))}async function L(e,r){const t=await l(e,r);return b(t,e)}async function _(e,r){if(!e.isPrimitive){const o=e.resource.href,s=i.get(o);if(s!==void 0)return s;const f=await w(()=>import("./objectResourceUtils.2274e199.js").then(m=>m.o),["objectResourceUtils.2274e199.js","index.1aec8a9e.js","index.52c48493.css","quatf64.2f917dd7.js","mat4f64.0958f530.js","BufferView.aa24e9b0.js","vec33.36a7d3e0.js","DefaultMaterial_COLOR_GAMMA.b5a0256b.js","types.09a5cdc4.js","enums.c60b1dad.js","Version.7ae8128b.js","quat.74a05a24.js","vectorStacks.6fa6db75.js","lineSegment.ccb26fac.js","requestImageUtils.fe008b9e.js","VertexAttribute.c697ed2b.js","Texture.31b81047.js","VertexArrayObject.3d0c8ca2.js","VertexElementDescriptor.2400a91d.js","InterleavedLayout.39502d75.js","vec3f32.ca7a14c1.js","sphere.7f5a935e.js"],import.meta.url),u=await f.fetch(o,{disableTextures:!0});return i.put(o,u.referenceBoundingBox),u.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=v(z(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}export{S as clearBoundingBoxCache,y as computeIconLayerResourceSize,x as computeLayerResourceSize,I as computeLayerSize,l as computeObjectLayerResourceSize};
