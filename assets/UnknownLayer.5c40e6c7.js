import{ef as i,eg as l,kC as y,$ as o,a0 as t,a1 as p,ek as u,f as d}from"./index.b0b4c8ac.js";let e=class extends i(l(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,s)=>{y(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),s(new d("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,s){super.read({resourceInfo:r},s)}write(){return null}};o([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([t({type:["show","hide"]})],e.prototype,"listMode",void 0),o([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([p("esri.layers.UnknownLayer")],e);const f=e;export{f as default};
