import{s as m,al as u,f as _,aq as p,cY as c,aI as y,t as f}from"./index.1aec8a9e.js";import{v as w,n as I}from"./timeSupport.f9de8504.js";import{v as b}from"./utils.c19ab3b5.js";import{u as T}from"./FeatureStore2D.b9ad8769.js";import"./projectionSupport.0265f92c.js";import"./json.8bd707cf.js";import"./CircularArray.74859634.js";import"./ComputedAttributeStorage.afe34cd5.js";import"./centroid.031e39f9.js";import"./definitions.cd8c5521.js";import"./visualVariablesUtils.5acc28b3.js";import"./Utils.f4549798.js";import"./number.6e30c64a.js";import"./enums.c60b1dad.js";import"./Texture.31b81047.js";import"./VertexElementDescriptor.2400a91d.js";import"./visualVariablesUtils.fed637e6.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),g={getAttribute:(r,e)=>r.field(e)};async function v(r,e){const t=await u(()=>import("./WhereClause.e37fd2c6.js"),["WhereClause.e37fd2c6.js","index.1aec8a9e.js","index.52c48493.css"],import.meta.url);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new _("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const h=s.readArcadeFeature();return i.testFeature(h,g)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const E=m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),a=1,x=2;class M{constructor(e){this._geometryBounds=p(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?t.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|x:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h}=this;return c.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h})}async update(e,t){this._hash=JSON.stringify(e);const i=await b(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await v(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await w(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);y(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,e.timeExtent,T);else{const t=new _("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);E.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!f(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{M as default};
