import{r as c,U as P,dU as L,bc as R,h,K as b,fH as M,ly as B,gS as _,J as D,t as j}from"./index.b0b4c8ac.js";import{a as S}from"./quatf64.2f917dd7.js";import{p as k,m as U,c as q,f as z}from"./meshFeatureSet.8d5df463.js";import{T as K,i as N,c as O,x as G,u as V,L as H,O as F,E as J}from"./BufferView.75343c14.js";import{t as Q,r as W,o as X,b as Y,f as Z,e as tt,n as et}from"./vec33.746eecb1.js";import{n as ot,c as nt,r as w,a as rt,j as st,t as A,b as at,k as it,d as ct,e as ut,m as lt,i as ft,f as mt,h as pt,p as dt,o as gt}from"./DefaultMaterial_COLOR_GAMMA.01c4dfd8.js";import{b as xt}from"./georeference.bff7b9ab.js";import{E as T,D as C}from"./enums.c60b1dad.js";import"./earcut.f65e2fcc.js";import"./deduplicate.059f1618.js";import"./mat4f64.0958f530.js";import"./types.bc2265a6.js";import"./Version.f39a9267.js";import"./quat.38019e7d.js";import"./vectorStacks.cafd6144.js";import"./lineSegment.cb8677fd.js";async function Kt(t,e,n){const s=new ot($t(n)),o=(await nt(s,e,n,!0)).model,m=o.lods.shift(),l=new Map,u=new Map;o.textures.forEach(($,E)=>l.set(E,wt($))),o.materials.forEach(($,E)=>u.set(E,yt($,l)));const i=bt(m);for(const $ of i.parts)vt(i,$,u);const{position:d,normal:f,tangent:r,color:a,texCoord0:p}=i.vertexAttributes,x={position:d.typedBuffer,normal:c(f)?f.typedBuffer:null,tangent:c(r)?r.typedBuffer:null,uv:c(p)?p.typedBuffer:null,color:c(a)?a.typedBuffer:null},v=xt(x,t,n);return{transform:v.transform,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new k({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function $t(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,n,s)=>{const o=t.resolveFile(e);return(await P(o,{responseType:n==="image"?"image":n==="binary"?"array-buffer":"json",signal:c(s)?s.signal:null})).data}}:null}function y(t,e){if(j(t))return"-";const n=t.typedBuffer;return`${L(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function ht(t){return c(t)?t.toString():"-"}function bt(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,o=new Map,m=[];for(const l of t.parts){const{attributes:{position:u,normal:i,color:d,tangent:f,texCoord0:r}}=l,a=`
      ${y(u,s)}/
      ${y(i,s)}/
      ${y(d,s)}/
      ${y(f,s)}/
      ${y(r,s)}/
      ${ht(l.transform)}
    `;let p=!1;const x=L(o,a,()=>(p=!0,{start:e,length:u.count}));p&&(e+=u.count),i&&(n.normal=!0),d&&(n.color=!0),f&&(n.tangent=!0),r&&(n.texCoord0=!0),m.push({gltf:l,writeVertices:p,region:x})}return{vertexAttributes:{position:w(K,e),normal:n.normal?w(N,e):null,tangent:n.tangent?w(O,e):null,color:n.color?w(G,e):null,texCoord0:n.texCoord0?w(V,e):null},parts:m,components:[]}}function wt(t){return new U({data:t.data,wrap:Ct(t.parameters.wrap)})}function yt(t,e){const n=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new q({color:n,colorTexture:h(b(t.textureColor,o=>e.get(o))),normalTexture:h(b(t.textureNormal,o=>e.get(o))),emissiveColor:s,emissiveTexture:h(b(t.textureEmissive,o=>e.get(o))),occlusionTexture:h(b(t.textureOcclusion,o=>e.get(o))),alphaMode:Tt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:h(b(t.textureMetallicRoughness,o=>e.get(o)))})}function vt(t,e,n){e.writeVertices&&Et(t,e);const s=e.gltf,o=At(s.indices||s.attributes.position.count,s.primitiveType),m=e.region.start;if(m)for(let l=0;l<o.length;l++)o[l]+=m;t.components.push(new z({faces:o,material:n.get(s.material),trustSourceNormals:!0}))}function Et(t,e){const{position:n,normal:s,tangent:o,color:m,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:i,transform:d}=e.gltf,f=i.position.count;if(Q(n.slice(u,f),i.position,d),c(i.normal)&&c(s)){const r=M(S(),d),a=s.slice(u,f);W(a,i.normal,r),B(r)&&X(a,a)}else c(s)&&Y(s,0,0,1,{dstIndex:u,count:f});if(c(i.tangent)&&c(o)){const r=M(S(),d),a=o.slice(u,f);rt(a,i.tangent,r),B(r)&&st(a,a)}else c(o)&&A(o,0,0,1,1,{dstIndex:u,count:f});if(c(i.texCoord0)&&c(l)?at(l.slice(u,f),i.texCoord0):c(l)&&it(l,0,0,{dstIndex:u,count:f}),c(i.color)&&c(m)){const r=i.color,a=m.slice(u,f);if(r.elementCount===4)r instanceof O?ct(a,r,255):r instanceof G?ut(a,r):r instanceof H&&lt(a,r,8);else{A(a,255,255,255,255);const p=F.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof N?Z(p,r,255):r instanceof F?tt(p,r):r instanceof J&&et(p,r,8)}}else c(m)&&A(m.slice(u,f),255,255,255,255)}function At(t,e){switch(e){case T.TRIANGLES:return pt(t,dt);case T.TRIANGLE_STRIP:return mt(t);case T.TRIANGLE_FAN:return ft(t)}}function Tt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:I(t.s),vertical:I(t.t)}}function I(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function g(t){return t**(1/gt)*255}function Rt(t,e){return _(g(t[0]),g(t[1]),g(t[2]),e)}function Mt(t){return D(g(t[0]),g(t[1]),g(t[2]))}export{Kt as loadGLTFMesh};
