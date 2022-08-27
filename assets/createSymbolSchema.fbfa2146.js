import{b as u,S}from"./Utils.b14523b9.js";import{f as y,_ as V,A as b}from"./MaterialKey.bc1db1db.js";import"./index.b0b4c8ac.js";import"./number.6e30c64a.js";import"./definitions.cd8c5521.js";import"./enums.c60b1dad.js";import"./Texture.f96436f7.js";import"./VertexElementDescriptor.2400a91d.js";import"./alignmentUtils.84250e5d.js";function p(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return b(e)}function F(e,r,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...p(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const a=e.toJSON(),n=y(u.LABEL,{...r,placement:a.labelPlacement});return{materialKey:t?f(n):n,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}function x(e,r,t){const a=y(u.FILL,r),n=t?f(a):a,l=e.clone(),o=l.outline,i=V(r.symbologyType);i||(l.outline=null);const m={materialKey:n,hash:l.hash(),...p(l)};if(i)return m;const c=[];if(c.push(m),o){const s=y(u.LINE,{...r,isOutline:!0}),h={materialKey:t?f(s):s,hash:o.hash(),...p(o)};c.push(h)}return{type:"composite-symbol",layers:c,hash:c.reduce((s,h)=>h.hash+s,"")}}function K(e,r,t){var c;const a=V(r.symbologyType)?S.DEFAULT:r.symbologyType,n=y(u.LINE,{...r,symbologyType:a}),l=t?f(n):n,o=e.clone(),i=o.marker;o.marker=null;const m=[];if(m.push({materialKey:l,hash:o.hash(),...p(o)}),i){const s=y(u.MARKER,r),h=t?f(s):s;i.color=(c=i.color)!=null?c:o.color,m.push({materialKey:h,hash:i.hash(),lineWidth:o.width,...p(i)})}return{type:"composite-symbol",layers:m,hash:m.reduce((s,h)=>h.hash+s,"")}}function g(e,r,t){const a=y(u.MARKER,r),n=t?f(a):a,l=p(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const a=y(u.TEXT,r),n=t?f(a):a,l=p(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle,maxVVSize:r.maxVVSize}}export{F as createSymbolSchema};
