import{gk as U,t as S,gm as V,b_ as z,bT as B,dx as F,cY as E,g1 as L,iz as Z,iA as Y,iB as X,iC as T,U as p,iD as K,g0 as H,cE as D,iE as q,d8 as C,iF as W,r as f,bD as P,dN as ee,ep as te,as as re,iG as x,$ as c,a0 as y,a1 as $,a2 as se,iH as J,e as j,iI as ae,cz as ne,al as oe,f as I,cj as ie,iJ as ue,d7 as de,iK as le,dJ as ce,eH as he,iL as ye,aN as pe,cN as fe,bU as me,cm as A}from"./index.b0b4c8ac.js";import{n as ge,s as Fe}from"./executeForIds.60bf9c4e.js";function be(t,e){return e}function v(t,e,r,s){switch(r){case 0:return _(t,e+s,0);case 1:return t.originPosition==="lowerLeft"?_(t,e+s,1):Se(t,e+s,1)}}function G(t,e,r,s){return r===2?_(t,e,2):v(t,e,r,s)}function Re(t,e,r,s){return r===2?_(t,e,3):v(t,e,r,s)}function Oe(t,e,r,s){return r===3?_(t,e,3):G(t,e,r,s)}function _({translate:t,scale:e},r,s){return t[s]+r*e[s]}function Se({translate:t,scale:e},r,s){return t[s]-r*e[s]}class _e{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=be,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const r=U(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!S(r))for(const s of e.features)r(s.geometry)}createSpatialReference(){return{}}addField(e,r){e.fields.push(r);const s=e.fields.map(a=>a.name);this._attributesConstructor=function(){for(const a of s)this[a]=null}}addFeature(e,r){e.features.push(r)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,s,a)=>this.addCoordinatePoint(r,s,a),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,s,a)=>this._addCoordinatePolygon(r,s,a),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,s,a)=>this._addCoordinatePolyline(r,s,a),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,s,a)=>this._addCoordinateMultipoint(r,s,a),this.createGeometry=r=>this._createMultipointGeometry(r);break;default:V(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,r,s){this.lengths.length===0&&(this.toAddInCurrentPath=r),this.lengths.push(r)}addQueryGeometry(e,r){const{queryGeometry:s,queryGeometryType:a}=r,n=z(s.clone(),s,!1,!1,this.transform),o=B(n,a,!1,!1);e.queryGeometryType=a,e.queryGeometry={...o}}createPointGeometry(e){const r={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(r.z=0),e.hasM&&(r.m=0),r}addCoordinatePoint(e,r,s){switch(r=this.applyTransform(this.transform,r,s,0),s){case 0:e.x=r;break;case 1:e.y=r;break;case 2:"z"in e?e.z=r:e.m=r;break;case 3:e.m=r}}_transformPathLikeValue(e,r){let s=0;return r<=1&&(s=this.previousCoordinate[r],this.previousCoordinate[r]+=e),this.applyTransform(this.transform,e,r,s)}_addCoordinatePolyline(e,r,s){this._dehydratedAddPointsCoordinate(e.paths,r,s)}_addCoordinatePolygon(e,r,s){this._dehydratedAddPointsCoordinate(e.rings,r,s)}_addCoordinateMultipoint(e,r,s){s===0&&e.points.push([]);const a=this._transformPathLikeValue(r,s);e.points[e.points.length-1].push(a)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,r,s){s===0&&this.toAddInCurrentPath--==0&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const a=this._transformPathLikeValue(r,s),n=e[e.length-1];s===0&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=a}_deriveApplyTransform(e){const{hasZ:r,hasM:s}=e;return r&&s?Oe:r?G:s?Re:v}}async function Ie(t,e,r){const s=F(t),a={...r},n=E.from(e),o=!n.quantizationParameters,{data:i}=await L(s,n,new _e({sourceSpatialReference:n.sourceSpatialReference,applyTransform:o}),a);return i}function qe(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function k(t,e){const r={};for(const s of t){const{parentObjectId:a,parentGlobalId:n,attachmentInfos:o}=s;for(const i of o){const{id:u}=i,d=Z(Y(`${e}/${a}/attachments/${u}`)),l=X.fromJSON(i);l.set({url:d,parentObjectId:a,parentGlobalId:n}),r[a]?r[a].push(l):r[a]=[l]}}return r}function xe(t,e,r){let s={query:T({...t.query,f:"json",...qe(e)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),p(t.path+"/queryAttachments",s)}async function we(t,e,r){const s=F(t);return xe(s,K.from(e),{...r}).then(a=>k(a.data.attachmentGroups,s.path))}async function je(t,e,r){const s=F(t);return H(s,E.from(e),{...r}).then(a=>({count:a.data.count,extent:D.fromJSON(a.data.extent)}))}function Ee(t,e){const r=t.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e!=null&&e.returnCountOnly)?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function Te(t,e,r){const s=await Q(t,e,r),a=s.data,n=a.geometryType,o=a.spatialReference,i={};for(const u of a.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:o,hasZ:!!a.hasZ,hasM:!!a.hasM,features:u.relatedRecords};if(u.objectId!=null)i[u.objectId]=d;else for(const l in u)u.hasOwnProperty(l)&&l!=="relatedRecords"&&(i[u[l]]=d)}return{...s,data:i}}async function De(t,e,r){const s=await Q(t,e,r,{returnCountOnly:!0}),a=s.data,n={};for(const o of a.relatedRecordGroups)o.objectId!=null&&(n[o.objectId]=o.count);return{...s,data:n}}async function Q(t,e,r={},s){const a=T({...t.query,f:"json",...s,...Ee(e,s)});return p(t.path+"/queryRelatedRecords",{...r,query:{...r.query,...a}})}async function Ce(t,e,r){e=q.from(e);const s=F(t);return Te(s,e,r).then(a=>{const n=a.data,o={};return Object.keys(n).forEach(i=>o[i]=C.fromJSON(n[i])),o})}async function $e(t,e,r){e=q.from(e);const s=F(t);return De(s,e,{...r}).then(a=>a.data)}const N="Layer does not support extent calculation.";function ve(t,e){var n,o;const r=t.geometry,s=t.toJSON(),a=s;if(f(r)&&(a.geometry=JSON.stringify(r),a.geometryType=re(r),a.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),(n=s.topFilter)!=null&&n.groupByFields&&(a.topFilter.groupByFields=s.topFilter.groupByFields.join(",")),(o=s.topFilter)!=null&&o.orderByFields&&(a.topFilter.orderByFields=s.topFilter.orderByFields.join(",")),s.topFilter&&(a.topFilter=JSON.stringify(a.topFilter)),s.objectIds&&(a.objectIds=s.objectIds.join(",")),s.orderByFields&&(a.orderByFields=s.orderByFields.join(",")),s.outFields&&!((e==null?void 0:e.returnCountOnly)||(e==null?void 0:e.returnExtentOnly)||(e==null?void 0:e.returnIdsOnly))?s.outFields.includes("*")?a.outFields="*":a.outFields=s.outFields.join(","):delete a.outFields,s.outSR?a.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&s.returnGeometry&&(a.outSR=a.inSR),s.returnGeometry&&delete s.returnGeometry,s.timeExtent){const i=s.timeExtent,{start:u,end:d}=i;u==null&&d==null||(a.time=u===d?u:`${u==null?"null":u},${d==null?"null":d}`),delete s.timeExtent}return a}async function Ae(t,e,r,s){const a=await w(t,e,"json",s);return W(e,r,a.data),a}async function Ne(t,e,r){return f(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function Pe(t,e,r){return f(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(s=>{const a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features)throw new Error(N);if(a.hasOwnProperty("count"))throw new Error(N);return s})}function Je(t,e,r){return f(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},a={}){const n=typeof t=="string"?P(t):t,o=e.geometry?[e.geometry]:[];return s.responseType=r==="pbf"?"array-buffer":"json",ee(o,null,s).then(i=>{const u=i&&i[0];f(u)&&((e=e.clone()).geometry=u);const d=T({...n.query,f:r,...a,...ve(e,a)});return p(te(n.path,"queryTopFeatures"),{...s,query:{...d,...s.query}})})}async function Ge(t,e,r,s){const a=F(t),n={...s},{data:o}=await Ae(a,x.from(e),r,n);return C.fromJSON(o)}async function ke(t,e,r){const s=F(t);return(await Ne(s,x.from(e),{...r})).data.objectIds}async function Qe(t,e,r){const s=F(t),a=await Pe(s,x.from(e),{...r});return{count:a.data.count,extent:D.fromJSON(a.data.extent)}}async function Me(t,e,r){const s=F(t);return(await Je(s,x.from(e),{...r})).data.count}let R=class extends se{constructor(...t){super(...t),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return typeof t!="string"?t:{url:t,...e}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?P(t):null}_encode(t,e,r){const s={};for(const a in t){if(a==="declaredClass")continue;const n=t[a];if(n!=null&&typeof n!="function")if(Array.isArray(n)){s[a]=[];for(let o=0;o<n.length;o++)s[a][o]=this._encode(n[o])}else if(typeof n=="object")if(n.toJSON){const o=n.toJSON(r&&r[a]);s[a]=e?o:JSON.stringify(o)}else s[a]=e?n:JSON.stringify(n);else s[a]=n}return s}};c([y({readOnly:!0})],R.prototype,"parsedUrl",null),c([y()],R.prototype,"requestOptions",void 0),c([y({type:String})],R.prototype,"url",void 0),R=c([$("esri.tasks.Task")],R);const Ue=R;let g=class extends Ue{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(t,e){return this.executeJSON(t,e).then(r=>this.featureSetFromJSON(t,r,e))}async executeJSON(t,e){var u;const r={...this.requestOptions,...e},s=this._normalizeQuery(t),a=((u=t.outStatistics)==null?void 0:u[0])!=null,n=j("featurelayer-pbf-statistics"),o=!a||n;let i;if(this.format==="pbf"&&o)try{i=await Ie(this.url,s,r)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.format="json"}return this.format!=="json"&&o||(i=await ae(this.url,s,r)),this._normalizeFields(i.fields),i}async featureSetFromJSON(t,e,r){if(!this._queryIs3DObjectFormat(t)||S(this.infoFor3D)||!e.features||!e.features.length)return C.fromJSON(e);const{meshFeatureSetFromJSON:s}=await ne(oe(()=>import("./meshFeatureSet.8d5df463.js").then(a=>a.a),["meshFeatureSet.8d5df463.js","index.b0b4c8ac.js","index.b4be7bcd.css","georeference.bff7b9ab.js","quatf64.2f917dd7.js","mat4f64.0958f530.js","quat.38019e7d.js","BufferView.75343c14.js","vec33.746eecb1.js","earcut.f65e2fcc.js","deduplicate.059f1618.js"],import.meta.url),r);return s(t,this.infoFor3D,e)}executeForCount(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return ge(this.url,s,r)}executeForExtent(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return je(this.url,s,r)}executeForIds(t,e){const r={...this.requestOptions,...e},s=this._normalizeQuery(t);return Fe(this.url,s,r)}executeRelationshipQuery(t,e){t=q.from(t);const r={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),Ce(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=q.from(t);const r={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),$e(this.url,t,r)}executeAttachmentQuery(t,e){const r={...this.requestOptions,...e};return we(this.url,t,r)}executeTopFeaturesQuery(t,e){const r={...this.requestOptions,...e};return Ge(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r={...this.requestOptions,...e};return ke(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r={...this.requestOptions,...e};return Qe(this.parsedUrl,t,r)}executeForTopCount(t,e){const r={...this.requestOptions,...e};return Me(this.parsedUrl,t,r)}_normalizeQuery(t){let e=E.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?J.from(t.dynamicDataSource):this.dynamicDataSource),f(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const r of this.infoFor3D.queryFormats){if(r.id==="3D_glb"){e.formatOf3DObjects=r.id;break}r.id!=="3D_gltf"||e.formatOf3DObjects||(e.formatOf3DObjects=r.id)}if(!e.formatOf3DObjects)throw new I("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(S(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,S(e.outFields)&&(e.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:n,translationY:o,translationZ:i,scaleX:u,scaleY:d,scaleZ:l,rotationX:b,rotationY:m,rotationZ:h,rotationDeg:M}=this.infoFor3D.transformFieldRoles;e.outFields.push(r,s,a,n,o,i,u,d,l,b,m,h,M)}}return e}_normalizeFields(t){if(f(this.fieldsIndex)&&f(t))for(const e of t){const r=this.fieldsIndex.get(e.name);r&&Object.assign(e,r.toJSON())}}_queryIs3DObjectFormat(t){return f(this.infoFor3D)&&t.returnGeometry&&t.multipatchOption!=="xyFootprint"&&!t.outStatistics}};c([y({type:J})],g.prototype,"dynamicDataSource",void 0),c([y()],g.prototype,"fieldsIndex",void 0),c([y()],g.prototype,"format",void 0),c([y()],g.prototype,"gdbVersion",void 0),c([y()],g.prototype,"infoFor3D",void 0),c([y()],g.prototype,"sourceSpatialReference",void 0),g=c([$("esri.tasks.QueryTask")],g);const Ve=g,ze=new ie({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function Be(t){return typeof t=="string"?A(t)||{data:t}:new Promise((e,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(A(s.result)),s.onerror=a=>r(a)})}const Le=new Set(["Feature Layer","Table"]);let O=class extends ue{constructor(){super(...arguments),this.type="feature-layer",this.refresh=de(async()=>{var r,s;await this.load();const t=(r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=f(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,i=j("featurelayer-pbf")&&t&&S(s)?"pbf":"json";return new Ve({url:e.path,format:i,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,a.query);try{const o=await p(s,{body:n});return this._createFeatureEditResult(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(t,e,r){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(r,n.query);try{const i=await p(a,{body:o});return this._createFeatureEditResult(i.data.updateAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(t.deleteFeatures,e==null?void 0:e.globalIdUsed);le(r,s,this.layer.spatialReference);const n=[],o=[],i=[...t.deleteAttachments];for(const h of t.addAttachments)n.push(await this._serializeAttachment(h));for(const h of t.updateAttachments)o.push(await this._serializeAttachment(h));const u=n.length||o.length||i.length?{adds:n,updates:o,deletes:i}:null,d={gdbVersion:(e==null?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:e==null?void 0:e.globalIdUsed,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId};e!=null&&e.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:s,deletes:a,attachments:u}]),d.returnServiceEditsOption=ze.toJSON(e==null?void 0:e.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(d.adds=r.length?JSON.stringify(r):null,d.updates=s.length?JSON.stringify(s):null,d.deletes=a.length?e!=null&&e.globalIdUsed?JSON.stringify(a):a.join(","):null,d.attachments=u&&JSON.stringify(u));const l=this._getLayerRequestOptions({method:"post",query:d}),b=e!=null&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,m=await p(b+"/applyEdits",l);return this._createEditsResult(m)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await p(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const r=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:n}=await p(`${a}/${s}`,r),{id:o,extent:i,fullExtent:u,timeExtent:d}=n,l=i||u;return{id:o,fullExtent:l&&D.fromJSON(l),timeExtent:d&&ce.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const a=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:n}=t,o=[];for(const i of n){const u=s+"/"+i+"/attachments";o.push(p(u,a))}return Promise.all(o).then(i=>n.map((u,d)=>({parentObjectId:u,attachmentInfos:i[d].data.attachmentInfos}))).then(i=>k(i,s))}return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:s}=await p(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:j("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=s}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!Le.has(r))throw new I("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&!((e=t==null?void 0:t.drawingInfo)!=null&&e.renderer)&&!t.defaultSymbol){const r=he(t.geometryType).renderer;ye("drawingInfo.renderer",r,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:r}=t;return S(e)?{attributes:r}:e.type==="mesh"||e.type==="extent"?null:{geometry:e.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:r}=t,{globalId:s,name:a,contentType:n,data:o,uploadId:i}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(u.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),i)u.uploadId=i;else if(o){const d=await Be(o);u.contentType=d.mediaType,u.data=d.data,o instanceof File&&(u.name=o.name)}return a&&(u.name=a),n&&(u.contentType=n),u}_getFeatureIds(t,e){const r=t[0];return r?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(r=>r.attributes&&r.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){const e=t.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(e))for(const i of e)s.push({id:i.id,editedFeatures:i.editedFeatures}),i.id===r&&(a={addResults:i.addResults,updateResults:i.updateResults,deleteResults:i.deleteResults,attachments:i.attachments,editMoment:i.editMoment});else a=e;const n=a==null?void 0:a.attachments,o={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:n&&n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:n&&n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:n&&n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(o.editMoment=a.editMoment),s.length>0){o.editedFeatureResults=[];for(const i of s){const{adds:u,updates:d,deletes:l,spatialReference:b}=i.editedFeatures,m=b?new pe(b):null;o.editedFeatureResults.push({layerId:i.id,editedFeatures:{adds:(u==null?void 0:u.map(h=>this._createEditedFeature(h,m)))||[],updates:(d==null?void 0:d.map(h=>({original:this._createEditedFeature(h[0],m),current:this._createEditedFeature(h[1],m)})))||[],deletes:(l==null?void 0:l.map(h=>this._createEditedFeature(h,m)))||[],spatialReference:m}})}}return o}_createEditedFeature(t,e){return new fe({attributes:t.attributes,geometry:me({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new I("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const r=e.details.messages&&e.details.messages[0]||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new I("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(t,e){const r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(const s in e){const a=e[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...t,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};c([y()],O.prototype,"type",void 0),c([y({constructOnly:!0})],O.prototype,"layer",void 0),c([y({readOnly:!0})],O.prototype,"queryTask",null),O=c([$("esri.layers.graphics.sources.FeatureLayerSource")],O);const Xe=O;export{Xe as default};
