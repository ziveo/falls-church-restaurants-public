import{gg as m,gh as p,gf as y,eU as w,gi as I,bo as f,t as h,al as b}from"./index.1985521f.js";class _{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new _,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function j(e){return new q(e)}const a=new Set;function F(e,t,n,g=!1,u){a.clear();for(const r in n){const i=e.get(r);if(!i)continue;const l=n[r],s=P(i,l);if(s!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:s}}),a.add(i.name),i&&(g||i.editable)){const c=m(i,s);if(c)return d(p(c,i,s));t[i.name]=s}}for(const r of e.requiredFields)if(!a.has(r.name))return d(`missing required field "${r.name}"`);return null}function P(e,t){let n=t;return typeof t=="string"&&y(e)?n=parseFloat(t):t!=null&&w(e)&&typeof t!="string"&&(n=String(t)),I(n)}let o;function G(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return h(o)&&(o=await b(()=>import("./geometryEngineJSON.ba1441a3.js"),["geometryEngineJSON.ba1441a3.js","geometryEngineBase.0f0d7ecf.js","geometryEngineJSON.5a1f200e.js","json.8bd707cf.js"],import.meta.url)),o}async function S(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{d as a,j as f,G as g,F as m,S as w};
