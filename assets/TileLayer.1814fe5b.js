import{iR as _,iS as g,ee as m,ef as S,ed as T,eg as b,Z as w,iT as O,j3 as R,jx as $,r as d,aO as j,aN as f,bD as W,U as u,dy as U,f as c,e4 as L,f$ as k,kB as D,hh as P,$ as s,a0 as o,dL as C,bO as I,cn as N,ej as A,a1 as B,ek as M}from"./index.b0b4c8ac.js";import{s as J}from"./ArcGISCachedService.a134aa56.js";import{E as G,y as q,X as E}from"./SublayersOwner.24d2245c.js";import"./TilemapCache.31b9d35d.js";import"./Version.f39a9267.js";const y=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let t=class extends _(G(g(m(S(J(q(T(b(w(O(R($(M))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(j).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e&&this._getDefaultAttribution(this._getMapName(e))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&f.fromJSON(e)}writeSublayers(e,r,a,i){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],h={writeSublayerStructure:!1,...i};p.forEach(n=>{const v=n.write({},h);l.push(v)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>W(r).path):null}fetchTile(e,r,a,i={}){const{signal:p}=i,l=this.getTileUrl(e,r,a),h={responseType:"image",signal:p,query:{...this.refreshParameters}};return u(l,h).then(n=>n.data)}getTileUrl(e,r,a){const i=!this.tilemapCache&&this.supportsBlankTile,p=U({...this.parsedUrl.query,blankTile:!i&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl.path}/tile/${e}/${r}/${a}${p?"?"+p:""}`}_fetchService(e){return new Promise((r,a)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new c("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new c("tile-layer:undefined-url","layer's url is not defined");const i=L(this.parsedUrl.path);if(d(i)&&i.serverType==="ImageServer")throw new c("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");u(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,a)}).then(r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!k(this.url))return this._fetchServerVersion(this.url,e).then(a=>{this.read({currentVersion:a})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!D(e))return Promise.reject();const a=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(i=>{if(i.data&&i.data.currentVersion)return i.data.currentVersion;throw new c("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let a=0,i=y.length;a<i;a++)if(r=y[a],r.toLowerCase().includes(e))return P("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,a=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||a?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};s([o({readOnly:!0})],t.prototype,"attributionDataUrl",null),s([o({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),s([o({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),s([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],t.prototype,"isReference",void 0),s([o({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],t.prototype,"operationalLayerType",void 0),s([o({type:Boolean})],t.prototype,"resampling",void 0),s([o()],t.prototype,"sourceJSON",void 0),s([o({type:f})],t.prototype,"spatialReference",void 0),s([C("spatialReference",["spatialReference","tileInfo"])],t.prototype,"readSpatialReference",null),s([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),s([o({readOnly:!0})],t.prototype,"sublayers",void 0),s([I("sublayers",{layers:{type:[E]}})],t.prototype,"writeSublayers",null),s([o({json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),s([o()],t.prototype,"tileServers",null),s([N("tileServers")],t.prototype,"castTileServers",null),s([o({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),s([o(A)],t.prototype,"url",void 0),t=s([B("esri.layers.TileLayer")],t),t.prototype.fetchTile.__isDefault__=!0;const H=t;export{H as default};
