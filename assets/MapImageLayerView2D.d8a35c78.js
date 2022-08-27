import{r as N,as as k,dG as B,dH as U,bS as Z,$ as o,a0 as p,dI as H,bU as z,cE as G,aN as W,dJ as K,a1 as j,co as J,dK as X,cN as q,dL as Y,bO as ee,dM as te,dx as re,dN as ie,dO as se,dP as oe,U as ae,cU as ne,dQ as pe,f as _,t as le,e as ue,cp as me,c_ as ye,s as de,di as he,p as ce,R as V}from"./index.b0b4c8ac.js";import{t as fe}from"./BitmapContainer.304ab473.js";import{f as ge,u as we}from"./LayerView.87c11e3b.js";import{a as ve}from"./BaseGraphicContainer.dde9d49a.js";import{n as xe}from"./HighlightGraphicContainer.3387fee4.js";import{S as be}from"./ExportStrategy.74b4d814.js";import{r as $e,i as Ie}from"./scaleUtils.d5ffbd89.js";import{s as M,a as Pe}from"./drapedUtils.2a81574d.js";import{d as Se,s as Ee}from"./popupUtils.dee3ea0d.js";import{i as Ne}from"./RefreshableLayerView.d177223e.js";import"./WGLContainer.abb76d8a.js";import"./enums.c60b1dad.js";import"./pixelUtils.b2be1f82.js";import"./utils.ebb02a79.js";import"./Utils.b14523b9.js";import"./number.6e30c64a.js";import"./definitions.cd8c5521.js";import"./Texture.f96436f7.js";import"./VertexElementDescriptor.2400a91d.js";import"./MaterialKey.bc1db1db.js";import"./alignmentUtils.84250e5d.js";import"./VertexArrayObject.5882c7ee.js";import"./ProgramTemplate.140a51e3.js";import"./StyleDefinition.51d53a2e.js";import"./config.ded6d251.js";import"./GeometryUtils.b4d0dc88.js";import"./earcut.f65e2fcc.js";import"./CIMSymbolHelper.799bd5e9.js";import"./Rect.a122c453.js";import"./GeometryUtils.f3664fe1.js";import"./normalizeUtilsSync.610c84e4.js";import"./projectionSupport.38043ebb.js";import"./json.8bd707cf.js";import"./FeatureContainer.aa3ae2a6.js";import"./TileContainer.3c88b764.js";import"./visualVariablesUtils.931668d6.js";import"./visualVariablesUtils.e93f7c76.js";import"./Matcher.8e679b44.js";import"./tileUtils.7f1d8877.js";import"./TileClipper.43a6f893.js";import"./Geometry.f2d62961.js";import"./cimAnalyzer.64582730.js";import"./quantizationUtils.fc2d393d.js";import"./ExpandedCIM.e082de6e.js";import"./schemaUtils.b895f7f1.js";import"./createSymbolSchema.fbfa2146.js";import"./MD5.7323a015.js";import"./util.a2e8b581.js";import"./ComputedAttributeStorage.6e3964d1.js";import"./centroid.c497ca7b.js";import"./vec3f32.ca7a14c1.js";import"./Bitmap.c8fb210f.js";const A=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Oe(t,e){const{dpi:r,gdbVersion:s,geometry:i,geometryPrecision:n,height:m,layerOption:l,mapExtent:a,maxAllowableOffset:h,returnFieldName:y,returnGeometry:c,returnUnformattedValues:g,returnZ:P,spatialReference:$,timeExtent:I,tolerance:u,width:b}=t.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:v}=je(t),F=e&&N(e.geometry)?e.geometry:null,x={geometryPrecision:n,maxAllowableOffset:h,returnFieldName:y,returnGeometry:c,returnUnformattedValues:g,returnZ:P,tolerance:u},E=F&&F.toJSON()||i;if(x.imageDisplay=`${b},${m},${r}`,s&&(x.gdbVersion=s),E&&(delete E.spatialReference,x.geometry=JSON.stringify(E),x.geometryType=k(E)),$?x.sr=$.wkid||JSON.stringify($):E&&E.spatialReference?x.sr=A(E):a&&a.spatialReference&&(x.sr=A(a)),x.time=I?[I.start,I.end].join(","):null,a){const{xmin:L,ymin:Q,xmax:T,ymax:D}=a;x.mapExtent=`${L},${Q},${T},${D}`}return f&&(x.layerDefs=f),w&&!f&&(x.dynamicLayers=w),x.layers=l==="popup"?"visible":l,v&&!w&&(x.layers+=`:${v.join(",")}`),x}function je(t){var $,I;const{mapExtent:e,floors:r,width:s,sublayers:i,layerIds:n,layerOption:m,gdbVersion:l}=t,a=(I=($=i==null?void 0:i.find(u=>u.layer!=null))==null?void 0:$.layer)==null?void 0:I.serviceSublayers,h=m==="popup",y={},c=$e({extent:e,width:s,spatialReference:e==null?void 0:e.spatialReference}),g=[],P=u=>{const b=c===0,w=u.minScale===0||c<=u.minScale,f=u.maxScale===0||c>=u.maxScale;if(u.visible&&(b||w&&f))if(u.sublayers)u.sublayers.forEach(P);else{if((n==null?void 0:n.includes(u.id))===!1||h&&(!u.popupTemplate||!u.popupEnabled))return;g.unshift(u)}};if(i==null||i.forEach(P),i&&!g.length)y.layerIds=[];else{const u=B(g,a,l),b=g.map(w=>{const f=U(r,w);return w.toExportImageJSON(f)});if(u)y.dynamicLayers=JSON.stringify(b);else{if(i){let f=g.map(({id:v})=>v);n&&(f=f.filter(v=>n.includes(v))),y.layerIds=f}else n!=null&&n.length&&(y.layerIds=n);const w=Fe(r,g);if(N(w)&&w.length){const f={};for(const v of w)v.definitionExpression&&(f[v.id]=v.definitionExpression);Object.keys(f).length&&(y.layerDefs=JSON.stringify(f))}}}return y}function Fe(t,e){const r=!!(t!=null&&t.length),s=e.filter(i=>i.definitionExpression!=null||r&&i.floorInfo!=null);return s.length?s.map(i=>{const n=U(t,i),m=Z(n,i.definitionExpression);return{id:i.id,definitionExpression:m}}):null}var R;let d=R=class extends J{constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(t){return X(R,t)}};o([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),o([p()],d.prototype,"floors",void 0),o([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),o([p({types:H,json:{read:z,write:!0}})],d.prototype,"geometry",void 0),o([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),o([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),o([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),o([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),o([p({type:G,json:{write:!0}})],d.prototype,"mapExtent",void 0),o([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),o([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),o([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),o([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),o([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),o([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),o([p({type:W,json:{write:!0}})],d.prototype,"spatialReference",void 0),o([p()],d.prototype,"sublayers",void 0),o([p({type:K,json:{write:!0}})],d.prototype,"timeExtent",void 0),o([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),o([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=R=o([j("esri.rest.support.IdentifyParameters")],d);const C=d;let S=class extends J{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return q.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:r,geometry:s}=t;r&&(e.attributes={...r}),N(s)&&(e.geometry=s.toJSON(),e.geometryType=te.toJSON(s.type))}};o([p({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),o([p({type:q})],S.prototype,"feature",void 0),o([Y("feature",["attributes","geometry"])],S.prototype,"readFeature",null),o([ee("feature")],S.prototype,"writeFeature",null),o([p({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),o([p({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=o([j("esri.rest.support.IdentifyResult")],S);const Re=S;async function Ue(t,e,r){const s=(e=Ve(e)).geometry?[e.geometry]:[],i=re(t);return i.path+="/identify",ie(s).then(n=>{const m=Oe(e,{geometry:n&&n[0]}),l=se({...i.query,f:"json",...m}),a=oe(l,r);return ae(i.path,a).then(_e).then(h=>Me(h,e.sublayers))})}function _e(t){const e=t.data;e.results=e.results||[];const r={results:[]};return r.results=e.results.map(s=>Re.fromJSON(s)),r}function Ve(t){return t=C.from(t)}function Me(t,e){if(!(e!=null&&e.length))return t;const r=new Map;function s(i){r.set(i.id,i),i.sublayers&&i.sublayers.forEach(s)}e.forEach(s);for(const i of t.results)i.feature.sourceLayer=r.get(i.layerId);return t}const Ae=t=>{let e=class extends t{initialize(){this.exportImageParameters=new pe({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(r,s){var m,l,a,h,y,c;const{layer:i}=this;if(!r)throw new _("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const n=(a=(l=(m=this.layer.capabilities)==null?void 0:m.operations)==null?void 0:l.supportsQuery)!=null?a:!0;if(!(((c=(y=(h=this.layer.capabilities)==null?void 0:h.operations)==null?void 0:y.supportsIdentify)!=null?c:!0)&&this.layer.version>=10.5)&&!n)throw new _("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(r,s):this._fetchPopupFeaturesUsingIdentify(r,s)}canResume(){var r;return!!super.canResume()&&!((r=this.timeExtent)!=null&&r.isEmpty)}async _fetchPopupFeaturesUsingIdentify(r,s){const i=await this._createIdentifyParameters(r,s);if(le(i))return[];const{results:n}=await Ue(this.layer.parsedUrl,i);return n.map(m=>m.feature)}async _createIdentifyParameters(r,s){var I,u;const{floors:i,spatialReference:n,scale:m}=this.view,l=N(s)?s.event:null,a=await this._collectPopupProviders(this.layer.sublayers,m,s);if(!a.length)return null;await Promise.all(a.map(({sublayer:b})=>b.load().catch(()=>{})));const h=Math.min(ue("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((b,w)=>w.renderer?M({renderer:w.renderer,event:l}):b,2)),y=this.createFetchPopupFeaturesQueryGeometry(r,h),c=Ie(m,n),g=Math.round(y.width/c),P=new G({xmin:y.center.x-c*g,ymin:y.center.y-c*g,xmax:y.center.x+c*g,ymax:y.center.y+c*g,spatialReference:y.spatialReference}),$=((u=(I=this.layer.capabilities)==null?void 0:I.operations)==null?void 0:u.supportsQuery)===!1||await new Promise(b=>{let w=!1;Promise.all(a.map(async({popupTemplate:f})=>{if(f){const v=await this._loadArcadeModules(f);if(w)return;(v==null?void 0:v.arcadeUtils.hasGeometryOperations(f))&&(w=!0,b(!0))}})).finally(()=>b(!1))});return new C({floors:i,gdbVersion:this.layer.gdbVersion,geometry:r,height:g,layerOption:"popup",mapExtent:P,maxAllowableOffset:$?0:c,returnGeometry:!0,spatialReference:n,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:h,width:g})}async _fetchPopupFeaturesUsingQueries(r,s){const i=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,s),n=N(s)?s.event:null,m=i.map(async({sublayer:l,popupTemplate:a})=>{var P,$;await l.load().catch(()=>{});const h=l.createQuery(),y=M({renderer:l.renderer,event:n}),c=this.createFetchPopupFeaturesQueryGeometry(r,y);if(h.geometry=c,h.outFields=await Se(l,a),"floors"in this.view){const I=($=(P=this.view)==null?void 0:P.floors)==null?void 0:$.clone(),u=U(I,l);N(u)&&(h.where=h.where?`(${h.where}) AND (${u})`:u)}const g=await this._loadArcadeModules(a);return g&&g.arcadeUtils.hasGeometryOperations(a)||(h.maxAllowableOffset=c.width/y),(await l.queryFeatures(h)).features});return(await me(m)).reduce((l,a)=>a.value?[...l,...a.value]:l,[]).filter(l=>l!=null)}async _collectPopupProviders(r,s,i){const n=[],m=async a=>{const h=a.minScale===0||s<=a.minScale,y=a.maxScale===0||s>=a.maxScale;if(a.visible&&h&&y){if(a.sublayers)a.sublayers.forEach(m);else if(a.popupEnabled){const c=Ee(a,{...i,defaultPopupTemplateEnabled:!1});N(c)&&n.unshift({sublayer:a,popupTemplate:c})}}},l=r.toArray().reverse().map(m);return await Promise.all(l),n}_loadArcadeModules(r){var s;if(((s=r.expressionInfos)==null?void 0:s.length)||Array.isArray(r.content)&&r.content.some(i=>i.type==="expression"))return ye()}};return o([p()],e.prototype,"exportImageParameters",void 0),o([p({readOnly:!0})],e.prototype,"exportImageVersion",null),o([p()],e.prototype,"layer",void 0),o([p()],e.prototype,"suspended",void 0),o([p(ne)],e.prototype,"timeExtent",void 0),e=o([j("esri.views.layers.MapImageLayerView")],e),e},Ge=de.getLogger("esri.views.2d.layers.MapImageLayerView2D");let O=class extends Ae(Ne(ge(we))){constructor(){super(...arguments),this._highlightGraphics=new he}update(t){this.strategy.update(t).catch(e=>{ce(e)||Ge.error(e)})}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:r}=this.layer,s=r>=10.3,i=r>=10;this._bitmapContainer=new fe,this.container.addChild(this._bitmapContainer);const n=new ve({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new xe(this.view.featuresTilingScheme)});this.container.addChild(n.container),this.strategy=new be({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:i,hidpi:!0}),this.handles.add(V(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(V(()=>{var m;return(m=this.view)==null?void 0:m.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){return this._highlightGraphics.add(t),{remove:()=>{this._highlightGraphics.remove(t)}}}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}createFetchPopupFeaturesQueryGeometry(t,e){return Pe(t,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,s){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,floors:this.view.floors,...s})}};o([p()],O.prototype,"strategy",void 0),o([p()],O.prototype,"updating",void 0),O=o([j("esri.views.2d.layers.MapImageLayerView2D")],O);const At=O;export{At as default};
