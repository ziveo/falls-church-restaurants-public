import{es as B,f as A,t as te,bo as re,bp as H,r as U,eU as X,al as oe,eV as le,eW as Y,av as ue,eX as ce,c_ as de}from"./index.1aec8a9e.js";import{s as k}from"./quantizationUtils.00334c11.js";import{WhereClause as he}from"./WhereClause.e37fd2c6.js";import{T as fe,s as me,m as W,c as J,V as ge,g as pe,h as ye,y as xe,D as Fe,z as Ie,f as _e,d as Ve}from"./utils.44f53556.js";import{g as K}from"./projectionSupport.0265f92c.js";import{x as $,J as G,O as ee}from"./utils.c19ab3b5.js";class Te{constructor(t,e){this._cache=new B(t),this._invalidCache=new B(e)}get(t,e){const s=`${e.uid}:${t}`,n=this._cache.get(s);if(n)return n;if(this._invalidCache.get(s)!==void 0)return null;try{const i=he.create(t,e);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}const O=new Te(50,500),b="feature-store:unsupported-query",se=" as ",ve=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Ne(c,t){if(!t)return!0;const e=O.get(t,c);if(!e)throw new A(b,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new A(b,"where clause is not standard",{where:t});return j(c,e.fieldNames,"where clause contains missing fields"),!0}function Me(c,t,e){if(!t)return!0;const s=O.get(t,c);if(!s)throw new A(b,"invalid SQL expression",{having:t});if(!s.isAggregate)throw new A(b,"having does not contain a valid aggregate function",{having:t});const n=s.fieldNames;if(j(c,n,"having contains missing fields"),!s.getExpressions().every(i=>{const{aggregateType:a,field:r}=i,o=c.has(r)&&c.get(r).name;return e.some(l=>{const{onStatisticField:u,statisticType:f}=l;return(c.has(u)&&c.get(u).name)===o&&f.toLowerCase().trim()===a})}))throw new A(b,"expressions in having should also exist in outStatistics",{having:t});return!0}function R(c,t){return c?O.get(c,t):null}function j(c,t,e,s=!0){const n=[];for(const i of t)if(i!=="*"&&!c.has(i))if(s){const a=ie(i);try{const r=R(a,c);if(!r)throw new A(b,"invalid SQL expression",{where:a});if(!r.isStandardized)throw new A(b,"expression is not standard",{clause:r});j(c,r.fieldNames,"expression contains missing fields")}catch(r){const o=r&&r.details;if(o&&(o.clause||o.where))throw r;o&&o.missingFields?n.push(...o.missingFields):n.push(i)}}else n.push(i);if(n.length)throw new A(b,e,{missingFields:n})}function ie(c){return c.split(se)[0]}function ze(c){return c.split(se)[1]}function qe(c,t){const e=t.get(c);return!!e&&!ve.has(e.type)}class q{constructor(t,e,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=e;const n=t.outFields;if(n&&!n.includes("*")){this.outFields=n;let i=0;for(const a of n){const r=ie(a),o=this.fieldsIndex.get(r),l=o?null:R(r,s),u=o?o.name:ze(a)||"FIELD_EXP_"+i++;this._fieldDataCache.set(a,{alias:u,clause:l})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,s){const n=s?s.name:e;let i=null;return this._fieldDataCache.has(n)?i=this._fieldDataCache.get(n).clause:s||(i=R(e,this.fieldsIndex),this._fieldDataCache.set(n,{alias:n,clause:i})),s?this.featureAdapter.getAttribute(t,n):i.calculateValue(t,this.featureAdapter)}getNormalizedValue(t,e){const s=e.normalizationType,n=e.normalizationTotal;let i=this.getFieldValue(t,e.field,e.fieldInfo);if(s&&Number.isFinite(i)){const a=this.getFieldValue(t,e.normalizationField,e.normalizationFieldInfo);i=fe(i,s,a,n)}return i}getExpressionValue(t,e,s,n){const i={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},a=n.createExecContext(i,s);return n.executeFunction(e,a)}getExpressionValues(t,e,s,n){const i={fields:this.fieldsIndex.fields};return t.map(a=>{const r={attributes:this.featureAdapter.getAttributes(a),layer:i},o=n.createExecContext(r,s);return n.executeFunction(e,o)})}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:R(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:R(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const s={};for(const n of e){const{alias:i,clause:a}=this._fieldDataCache.get(n);s[i]=a?a.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,i)}return s}_processAttributesForDistinctValues(t){if(te(t)||!this.returnDistinctValues)return t;const e=this.outFields,s=[];if(e)for(const a of e){const{alias:r}=this._fieldDataCache.get(a);s.push(t[r])}else for(const a in t)s.push(t[a]);const n=`${(e||["*"]).join(",")}=${s.join(",")}`;let i=this._returnDistinctMap.get(n)||0;return this._returnDistinctMap.set(n,++i),i>1?null:t}}class Pe{constructor(t,e,s){this.items=t,this.query=e,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new q(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:s,outStatistics:n}=this.query;if(!(e==null?void 0:e.length))return 1;const a=new Map,r=new Map,o=new Set;for(const l of n){const{statisticType:u}=l,f=u!=="exceedslimit"?l.onStatisticField:void 0;if(!r.has(f)){const d=[];for(const h of e){const F=this._getAttributeValues(t,h,a);d.push(F)}r.set(f,this._calculateUniqueValues(d,t.returnDistinctValues))}const m=r.get(f);for(const d in m){const{data:h,items:F}=m[d],I=h.join(",");s&&!t.validateItems(F,s)||o.add(I)}}return o.size}async createQueryResponse(){let t;return this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&(re(this.query.outSR)&&!H(this.query.geometry.spatialReference,this.query.outSR)?t.queryGeometry=$({spatialReference:this.query.outSR,...K(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):t.queryGeometry=$({spatialReference:this.query.outSR,...this.query.geometry})),t}createSnappingResponse(t,e){const s=this.featureAdapter,n=be(this.hasZ,this.hasM),{x:i,y:a}=t.point,r=typeof t.distance=="number"?t.distance:t.distance.x,o=typeof t.distance=="number"?t.distance:t.distance.y,l={candidates:[]},u=this.geometryType==="esriGeometryPolygon",f=this._getPointCreator(t.point,this.spatialReference,e);for(const m of this.items){const d=s.getGeometry(m);if(te(d))continue;const{coords:h,lengths:F}=d;if(t.types&P.EDGE){let I=0;for(let y=0;y<F.length;y++){const _=F[y];for(let x=0;x<_;x++,I+=n){const V=h[I],p=h[I+1];if(x!==_-1){const g=h[I+n],S=h[I+n+1],{x:C,y:N}=Ae(i,a,V,p,g,S),T=(i-C)/r,v=(a-N)/o,w=T*T+v*v;w<=1&&l.candidates.push({type:"edge",objectId:s.getObjectId(m),distance:Math.sqrt(w),target:f(C,N),start:f(V,p),end:f(g,S)})}}}}if(t.types&P.VERTEX){const I=u?h.length-n:h.length;for(let y=0;y<I;y+=n){const _=h[y],x=h[y+1],V=(i-_)/r,p=(a-x)/o,g=V*V+p*p;g<=1&&l.candidates.push({type:"vertex",objectId:s.getObjectId(m),distance:Math.sqrt(g),target:f(_,x)})}}}return l.candidates.sort((m,d)=>m.distance-d.distance),l}_getPointCreator(t,e,s){const n=U(s)&&!H(e,s)?i=>K(i,e,s):i=>i;return t.z!=null&&t.m!=null?(i,a)=>n({x:i,y:a,z:t.z,m:t.m}):t.z!=null?(i,a)=>n({x:i,y:a,z:t.z}):t.m!=null?(i,a)=>n({x:i,y:a,m:t.m}):(i,a)=>n({x:i,y:a})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,minValue:r,maxValue:o,scale:l}=t,u=this.fieldsIndex.isDateField(e),f=await this._getDataValues({field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:l}),m=me({normalizationType:i,normalizationField:n,minValue:r,maxValue:o}),d=this.fieldsIndex.get(e),h={value:.5,fieldType:d==null?void 0:d.type},F=X(d)?W({values:f,supportsNullCount:m,percentileParams:h}):J({values:f,minValue:r,maxValue:o,useSampleStdDev:!i,supportsNullCount:m,percentileParams:h});return ge(F,u)}async createUniqueValuesResponse(t){const{field:e,valueExpression:s,domain:n,returnAllCodedValues:i,scale:a}=t,r=await this._getDataValues({field:e,valueExpression:s,scale:a}),o=pe(r);return ye(o,n,i)}async createClassBreaksResponse(t){const{field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:f,scale:m}=t,d=await this._getDataValues({field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:m}),h=xe(d,{field:e,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:f});return Fe(h,r)}async createHistogramResponse(t){const{field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:f,scale:m}=t,d=await this._getDataValues({field:e,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:m});return Ie(d,{field:e,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:f})}_sortFeatures(t,e,s){if(t.length>1&&e&&e.length)for(const n of e.reverse()){const i=n.split(" "),a=i[0],r=this.fieldsIndex.get(a),o=i[1]&&i[1].toLowerCase()==="desc",l=_e(r==null?void 0:r.type,o);t.sort((u,f)=>{const m=s(u,a,r),d=s(f,a,r);return l(m,d)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:s,hasM:n,hasZ:i,objectIdField:a,spatialReference:r}=this,{outFields:o,outSR:l,quantizationParameters:u,resultRecordCount:f,resultOffset:m,returnZ:d,returnM:h}=t,F=f!=null&&e.length>(m||0)+f,I=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(y=>this.fieldsIndex.get(y)));return{exceededTransferLimit:F,features:this._createFeatures(t,e),fields:I,geometryType:s,hasM:n&&h,hasZ:i&&d,objectIdFieldName:a,spatialReference:$(l||r),transform:u&&k(u)||null}}_createFeatures(t,e){const s=new q(t,this.featureAdapter,this.fieldsIndex),{hasM:n,hasZ:i}=this,{orderByFields:a,quantizationParameters:r,returnGeometry:o,returnCentroid:l,maxAllowableOffset:u,resultOffset:f,resultRecordCount:m,returnZ:d=!1,returnM:h=!1}=t,F=i&&d,I=n&&h;let y=[],_=0;const x=[...e];if(this._sortFeatures(x,a,(p,g,S)=>s.getFieldValue(p,g,S)),o||l){const p=k(r);if(o&&!l)for(const g of x)y[_++]={attributes:s.getAttributes(g),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,p,F,I)};else if(!o&&l)for(const g of x)y[_++]={attributes:s.getAttributes(g),centroid:ee(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of x)y[_++]={attributes:s.getAttributes(g),centroid:ee(this,this.featureAdapter.getCentroid(g,this),p),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,p,F,I)}}else for(const p of x){const g=s.getAttributes(p);g&&(y[_++]={attributes:g})}const V=f||0;if(m!=null){const p=V+m;y=y.slice(V,Math.min(y.length,p))}return y}_createExceedsLimitQueryResponse(t){let e=!1,s=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;for(const a of t.outStatistics)if(a.statisticType==="exceedslimit"){s=a.maxPointCount!=null?a.maxPointCount:Number.POSITIVE_INFINITY,n=a.maxRecordCount!=null?a.maxRecordCount:Number.POSITIVE_INFINITY,i=a.maxVertexCount!=null?a.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>s;else if(this.items.length>n)e=!0;else{const a=this.hasZ?this.hasM?4:3:this.hasM?3:2,r=this.featureAdapter;e=this.items.reduce((o,l)=>{const u=r.getGeometry(l);return o+(U(u)&&u.coords.length||0)},0)/a>i}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},s=[],n=new Map,i=new Map,a=new Map,r=new Map,o=new q(t,this.featureAdapter,this.fieldsIndex),l=t.outStatistics,{groupByFieldsForStatistics:u,having:f,orderByFields:m}=t,d=u&&u.length,h=!!d,F=h&&u[0],I=h&&!this.fieldsIndex.get(F);for(const _ of l){const{outStatisticFieldName:x,statisticType:V}=_,p=_,g=V!=="exceedslimit"?_.onStatisticField:void 0,S=V==="percentile_disc"||V==="percentile_cont",C=V==="EnvelopeAggregate"||V==="CentroidAggregate"||V==="ConvexHullAggregate",N=h&&d===1&&(g===F||I)&&V==="count";if(h){if(!a.has(g)){const v=[];for(const w of u){const M=this._getAttributeValues(o,w,n);v.push(M)}a.set(g,this._calculateUniqueValues(v,o.returnDistinctValues))}const T=a.get(g);for(const v in T){const{count:w,data:M,items:Q,itemPositions:ae}=T[v],Z=M.join(",");if(!f||o.validateItems(Q,f)){const D=r.get(Z)||{attributes:{}};if(C){D.aggregateGeometries||(D.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:E}=await this._getAggregateGeometry(p,Q);D.aggregateGeometries[E]=z}else{let z=null;if(N)z=w;else{const E=this._getAttributeValues(o,g,n),L=ae.map(ne=>E[ne]);z=S&&"statisticParameters"in p?this._getPercentileValue(p,L):this._getStatisticValue(p,L,null,o.returnDistinctValues)}D.attributes[x]=z}u.forEach((z,E)=>D.attributes[this.fieldsIndex.get(z)?z:`EXPR_${E+1}`]=M[E]),r.set(Z,D)}}}else if(C){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:T,outStatisticFieldName:v}=await this._getAggregateGeometry(p,this.items);e.aggregateGeometries[v]=T}else{const T=this._getAttributeValues(o,g,n);e.attributes[x]=S&&"statisticParameters"in p?this._getPercentileValue(p,T):this._getStatisticValue(p,T,i,o.returnDistinctValues)}s.push({name:x,alias:x,type:"esriFieldTypeDouble"})}const y=h?Array.from(r.values()):[e];return this._sortFeatures(y,m,(_,x)=>_.attributes[x]),{fields:s,features:y}}async _getAggregateGeometry(t,e){const s=await oe(()=>import("./geometryEngineJSON.ba1441a3.js"),["geometryEngineJSON.ba1441a3.js","geometryEngineBase.0f0d7ecf.js","geometryEngineJSON.5a1f200e.js","json.8bd707cf.js"],import.meta.url),{statisticType:n,outStatisticFieldName:i}=t,{featureAdapter:a,spatialReference:r,geometryType:o,hasZ:l,hasM:u}=this,f=e.map(h=>G(o,l,u,a.getGeometry(h))),m=s.convexHull(r,f,!0)[0],d={aggregateGeometries:null,outStatisticFieldName:null};if(n==="EnvelopeAggregate"){const h=m?le(m):Y(s.union(r,f));d.aggregateGeometries={...h,spatialReference:r},d.outStatisticFieldName=i||"extent"}else if(n==="CentroidAggregate"){const h=m?ue(m):ce(Y(s.union(r,f)));d.aggregateGeometries={x:h[0],y:h[1],spatialReference:r},d.outStatisticFieldName=i||"centroid"}else n==="ConvexHullAggregate"&&(d.aggregateGeometries=m,d.outStatisticFieldName=i||"convexHull");return d}_getStatisticValue(t,e,s,n){const{onStatisticField:i,statisticType:a}=t;let r=null;return r=s!=null&&s.has(i)?s.get(i):X(this.fieldsIndex.get(i))?W({values:e,returnDistinct:n}):J({values:e,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(i,r),r[a==="var"?"variance":a]}_getPercentileValue(t,e){const{onStatisticField:s,statisticParameters:n,statisticType:i}=t,{value:a,orderBy:r}=n,o=this.fieldsIndex.get(s);return Ve(e,{value:a,orderBy:r,fieldType:o==null?void 0:o.type,isDiscrete:i==="percentile_disc"})}_getAttributeValues(t,e,s){if(s.has(e))return s.get(e);const n=this.fieldsIndex.get(e),i=this.items.map(a=>t.getFieldValue(a,e,n));return s.set(e,i),i}_getAttributeNormalizedValues(t,e){return this.items.map(s=>t.getNormalizedValue(s,{field:e.field,fieldInfo:this.fieldsIndex.get(e.field),normalizationField:e.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(e.normalizationField),normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,s){const{arcadeUtils:n}=await de(),i=n.createFunction(e),a=s&&n.getViewInfo(s);return t.getExpressionValues(this.items,i,a,n)}_calculateUniqueValues(t,e){const s={},n=this.items,i=n.length;for(let a=0;a<i;a++){const r=n[a],o=[];for(const u of t)o.push(u[a]);const l=o.join(",");e?s[l]==null&&(s[l]={count:1,data:o,items:[r],itemPositions:[a]}):s[l]==null?s[l]={count:1,data:o,items:[r],itemPositions:[a]}:(s[l].count++,s[l].items.push(r),s[l].itemPositions.push(a))}return s}async _getDataValues(t){const e=new q(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,field:n,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:o}=t,l=s?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return s?this._getAttributeExpressionValues(e,s,l):this._getAttributeNormalizedValues(e,{field:n,normalizationField:i,normalizationType:a,normalizationTotal:r})}}function Ae(c,t,e,s,n,i){const a=n-e,r=i-s,o=a*a+r*r,l=(c-e)*a+(t-s)*r,u=Math.min(1,Math.max(0,l/o));return{x:e+a*u,y:s+r*u}}function be(c,t){return c?t?4:3:t?3:2}var P;(function(c){c[c.NONE=0]="NONE",c[c.EDGE=1]="EDGE",c[c.VERTEX=2]="VERTEX"})(P||(P={}));export{P as E,Me as a,j as c,qe as f,R as l,Ne as o,Pe as v};
