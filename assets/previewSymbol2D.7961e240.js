import{bc as z,hj as k,y as g,hk as E,hl as Z,hm as O,f as P,hn as S,ho as T,hp as A,b8 as B}from"./index.1985521f.js";function R(a){let{r:e,g:n,b:s,a:i}=a;return i<1&&(e=Math.round(i*e+255*(1-i)),n=Math.round(i*n+255*(1-i)),s=Math.round(i*s+255*(1-i))),new z({r:e,g:n,b:s})}function C(a){const{r:e,g:n,b:s}=R(a);return .2126*e+.7152*n+.0722*s}const q="picture-fill",U="picture-marker",V="simple-fill",W="simple-line",H="simple-marker",G="text",I="Aa",J=k.size,M=k.maxSize,j=k.maxOutlineSize,K=k.lineWidth,$=225,N=document.createElement("canvas");function Q(a,e){const n=N.getContext("2d"),s=[];return e&&(e.weight&&s.push(e.weight),e.size&&s.push(e.size+"px"),e.family&&s.push(e.family)),n.font=s.join(" "),n.measureText(a).width}const X=7.2/2.54,Y=72/2.54;function _(a){if(a.length===0)return 0;if(a.length>2){const e=B(1),n=parseFloat(a);switch(a.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return n*X*e;case"cm":return n*Y*e}}return parseFloat(a)}function F(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?g(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?g(e.height):null}}async function ee(a,e){const n=e.fill,s=a.color;if((n==null?void 0:n.type)==="pattern"&&s&&a.type!==q){const i=await A(n.src,s.toCss(!0));n.src=i,e.fill=n}}function D(a,e){return a>e?"dark":"light"}function ae(a,e){var x;const n=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,s=n!=null?g(n):null,i=(e==null?void 0:e.maxSize)!=null?g(e.maxSize):null,h=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,f=E(a);let m=Z(a);ne(a,245)!=="dark"||(e==null?void 0:e.ignoreWhiteSymbols)||(m={width:.75,...m,color:"#bdc3c7"});const u={shape:null,fill:f,stroke:m,offset:[0,0]};m!=null&&m.width&&(m.width=Math.min(m.width,j));const p=(m==null?void 0:m.width)||0;let y=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,t=0,w=!1;switch(a.type){case H:{const c=a.style,r=Math.min(s!=null?s:g(a.size),i||M);switch(l=r,t=r,c){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*r},y||(l+=p,t+=p);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*t]},{command:"L",values:[l,.5*t]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,t]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*t]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*t]},{command:"L",values:[.5*l,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p),h&&(w=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p),h&&(w=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,t]},{command:"M",values:[l,0]},{command:"L",values:[0,t]}]},h&&(w=!0);break;case"path":u.shape={type:"path",path:a.path||""},y||(l+=p,t+=p),h&&(w=!0),y=!0}break}case W:{const{width:c,height:r}=F(e),o=r!=null?r:Math.min(s!=null?s:p,i||j),d=c!=null?c:K;m.width=o,l=d,t=o;const v=((x=u==null?void 0:u.stroke)==null?void 0:x.cap)||"butt",b=v==="round";y=!0,u.stroke.cap=v==="butt"?"square":v,u.shape={type:"path",path:[{command:"M",values:[b?o/2:0,t/2]},{command:"L",values:[b?l-o/2:l,t/2]}]};break}case q:case V:{const c=typeof(e==null?void 0:e.symbolConfig)=="object"&&(e==null?void 0:e.symbolConfig.isSquareFill),{width:r,height:o}=F(e);l=c&&r!=null?r:s!=null?s:J,t=c&&o!=null?o:l,y||(l+=p,t+=p),y=!0,u.shape=c?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:O.fill[0];break}case U:{let c=g(a.width),r=g(a.height);const o=s!=null?s:Math.max(c,r),d=c/r;c=d<=1?Math.ceil(o*d):o,r=d<=1?o:Math.ceil(o/d),l=Math.min(c,i||M),t=Math.min(r,i||M),u.shape={type:"image",x:-Math.round(l/2),y:-Math.round(t/2),width:l,height:t,src:a.url||""},h&&(w=!0);break}case G:{const c=a,r=c.text||I,o=c.font,d=Math.min(s!=null?s:g(o.size),i||M),v=Q(r,{weight:o.weight,size:d,family:o.family}),b=/[\uE600-\uE6FF]/.test(r);l=b?d:v,t=d;let L=.25*_((o?d:0).toString());b&&(L+=5),u.shape={type:"text",text:r,x:c.xoffset||0,y:c.yoffset||L,align:"middle",alignBaseline:c.verticalAlignment,decoration:o&&o.decoration,rotated:c.rotated,kerning:c.kerning},u.font=o&&{size:d,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:u,size:[l,t],renderOptions:{node:e==null?void 0:e.node,scale:y,opacity:e==null?void 0:e.opacity,rotation:h,useRotationSize:w,effectView:e==null?void 0:e.effectView}}}async function le(a,e){const{shapeDescriptor:n,size:s,renderOptions:i}=ae(a,e);if(!n.shape)throw new P("symbolPreview: renderPreviewHTML2D","symbol not supported.");await ee(a,n);const h=[[n]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&(e==null?void 0:e.symbolConfig.applyColorModulation)){const f=.6*s[0];h.unshift([{...n,offset:[-f,0],fill:S(n.fill,-.3)}]),h.push([{...n,offset:[f,0],fill:S(n.fill,.3)}]),s[0]+=2*f,i.scale=!1}return T(h,s,i)}function ne(a,e=$){const n=E(a),s=Z(a),i=!n||"type"in n?null:new z(n),h=s!=null&&s.color?new z(s==null?void 0:s.color):null,f=i?D(C(i),e):null,m=h?D(C(h),e):null;return m?f?f===m?f:e>=$?"light":"dark":m:f}export{ne as getContrastingBackgroundTheme,ae as getRenderSymbolParameters,le as previewSymbol2D};
