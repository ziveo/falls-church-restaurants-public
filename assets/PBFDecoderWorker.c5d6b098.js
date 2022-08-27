import{dB as d,aq as c,gk as p,t as f,aN as y,gl as m,b_ as g,bT as P,gm as C,gn as b,go as _}from"./index.1985521f.js";class G{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}class T{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}d();c();function v(i,e){return e}function h(i,e,t,s){switch(t){case 0:return a(i,e+s,0);case 1:return i.originPosition==="lowerLeft"?a(i,e+s,1):k(i,e+s,1)}}function u(i,e,t,s){return t===2?a(i,e,2):h(i,e,t,s)}function M(i,e,t,s){return t===2?a(i,e,3):h(i,e,t,s)}function R(i,e,t,s){return t===3?a(i,e,3):u(i,e,t,s)}function a({translate:i,scale:e},t,s){return i[s]+t*e[s]}function k({translate:i,scale:e},t,s){return i[s]-t*e[s]}class x{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=v,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return new T}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=p(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!f(t))for(const s of e.features)t(s.geometry)}createSpatialReference(){return new y}addField(e,t){e.fields.push(m.fromJSON(t));const s=e.fields.map(r=>r.name);this._attributesConstructor=function(){for(const r of s)this[r]=null}}addFeature(e,t){const s=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(s>0)for(const r in t.attributes){const o=t.attributes[r];typeof o=="string"&&o.length>s&&(t.attributes[r]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:s,queryGeometryType:r}=t,o=g(s.clone(),s,!1,!1,this.transform),l=P(o,r,!1,!1);let n=null;switch(r){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}l.type=n,e.queryGeometryType=r,e.queryGeometry=l}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,s,r)=>this.addCoordinatePoint(t,s,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,s,r)=>this._addCoordinatePolygon(t,s,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,s,r)=>this._addCoordinatePolyline(t,s,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,s,r)=>this._addCoordinateMultipoint(t,s,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:C(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new G(b(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this.lengths.reduce((t,s)=>t+s,0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}addLength(e,t,s){this.lengths.length===0&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,s){switch(t=this.applyTransform(this.transform,t,s,0),s){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let s=0;return t<=1&&(s=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,s)}_addCoordinatePolyline(e,t,s){this._dehydratedAddPointsCoordinate(e.paths,t,s)}_addCoordinatePolygon(e,t,s){this._dehydratedAddPointsCoordinate(e.rings,t,s)}_addCoordinateMultipoint(e,t,s){s===0&&e.points.push([]);const r=this._transformPathLikeValue(t,s);e.points[e.points.length-1].push(r)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,s){s===0&&this.toAddInCurrentPath--==0&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const r=this._transformPathLikeValue(t,s),o=e[e.length-1];s===0&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}_deriveApplyTransform(e){const{hasZ:t,hasM:s}=e;return t&&s?R:t?u:s?M:h}}class A{_parseFeatureQuery(e){const t=_(e.buffer,new x(e.options)),s={...t,spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map(r=>r.toJSON()):void 0};return Promise.resolve(s)}}function w(){return new A}export{w as default};
