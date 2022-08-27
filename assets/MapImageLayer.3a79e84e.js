import{iR as x,jw as w,iS as O,ed as I,ee as E,ef as j,eg as M,iT as T,j3 as L,jx as $,Z as P,r as R,aO as J,jT as v,k2 as g,k3 as b,dQ as N,f as S,U as f,p as F,cE as U,dJ as k,j4 as q,jy as A,$ as s,a0 as o,dL as V,bO as z,ej as H,a1 as _,ek as C,gH as D}from"./index.1985521f.js";import{r as G}from"./scaleUtils.6f347d0f.js";import{E as K,y as W,X as B}from"./SublayersOwner.36ad4ff1.js";import"./Version.6ce10097.js";let r=class extends x(w(O(K(W(I(E(j(M(T(L($(P(C))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=R(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(J).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const y=i.supportedImageFormatTypes;return y&&y.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,y,t){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten(({sublayers:a})=>a&&a.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const a=v(t.origin);if(a===g.PORTAL_ITEM){const h=this.createSublayersForOrigin("service").sublayers;n=b(l,h,g.SERVICE)}else if(a>g.PORTAL_ITEM){const h=this.createSublayersForOrigin("portal-item");n=b(l,h.sublayers,v(h.origin))}}const p=[],c={writeSublayerStructure:n,...t};let d=n;l.forEach(a=>{const h=a.write({},c);p.push(h),d=d||a.originOf("visible")==="user"}),p.some(a=>Object.keys(a).length>1)&&(i.layers=p),d&&(i.visibleLayers=l.filter(a=>a.visible).map(a=>a.id))}createExportImageParameters(e,i,y,t){const l=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new N({layer:this,floors:t==null?void 0:t.floors,scale:G({extent:e,width:i})*l}),p=n.toJSON();n.destroy();const c=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},d=e&&e.spatialReference,a=d.wkid||JSON.stringify(d.toJSON());p.dpi*=l;const h={};if(t!=null&&t.timeExtent){const{start:u,end:m}=t.timeExtent.toJSON();h.time=u&&m&&u===m?""+u:`${u==null?"null":u},${m==null?"null":m}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:a,imageSR:a,size:i+","+y,...p,...c,...h}}async fetchImage(e,i,y,t){var p;const l={responseType:"image",signal:(p=t==null?void 0:t.signal)!=null?p:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,i,y,t),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(l.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers)throw new S("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});return f(n,l).then(c=>c.data).catch(c=>{throw F(c)?c:new S("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:c})})}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:y}=await f(this.url,i),{extent:t,fullExtent:l,timeExtent:n}=y,p=t||l;return{fullExtent:p&&U.fromJSON(p),timeExtent:n&&k.fromJSON({start:n[0],end:n[1]})}}loadAll(){return q(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:i,ssl:y}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});y&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};s([o({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),s([o()],r.prototype,"dpi",void 0),s([o()],r.prototype,"gdbVersion",void 0),s([o()],r.prototype,"imageFormat",void 0),s([V("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),s([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),s([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),s([o()],r.prototype,"imageTransparency",void 0),s([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),s([o({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),s([o({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),s([o({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),s([o()],r.prototype,"sourceJSON",void 0),s([o({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),s([z("sublayers",{layers:{type:[B]},visibleLayers:{type:[D]}})],r.prototype,"writeSublayers",null),s([o({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),s([o({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),s([o(H)],r.prototype,"url",void 0),r=s([_("esri.layers.MapImageLayer")],r);const ee=r;export{ee as default};
