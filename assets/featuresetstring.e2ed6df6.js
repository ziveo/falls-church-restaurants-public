import{d as f}from"./arcadeUtils.0fb1a668.js";import{hP as o,ih as d,ik as w,hJ as s,hL as m,ip as c,lq as l,ij as h,im as A,lr as T,io as b,ls as F,hF as g,hR as x,ii as j,il as y}from"./index.1985521f.js";function v(e){return e&&e.domain?e.domain.type==="coded-value"||e.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:y[e.field.type],codedValues:e.domain.codedValues.map(t=>({name:t.name,code:t.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:y[e.field.type],min:e.domain.min,max:e.domain.max}):null}function L(e){e.mode==="async"&&(e.functions.domain=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,2,3),d(n[0]))return v(w(n[0],m(n[1]),n[2]===void 0?void 0:s(n[2])));if(c(n[0]))return await n[0]._ensureLoaded(),v(l(m(n[1]),n[0],null,n[2]===void 0?void 0:s(n[2])));throw new Error("Invalid Parameter")})},e.functions.subtypes=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,1,1),d(n[0])){const a=h(n[0]);return a?f.convertObjectToArcadeDictionary(a):null}if(c(n[0])){await n[0]._ensureLoaded();const a=n[0].subtypes();return a?f.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")})},e.functions.domainname=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,2,4),d(n[0]))return A(n[0],m(n[1]),n[2],n[3]===void 0?void 0:s(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const a=l(m(n[1]),n[0],null,n[3]===void 0?void 0:s(n[3]));return T(a,n[2])}throw new Error("Invalid Parameter")})},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,2,4),d(n[0]))return b(n[0],m(n[1]),n[2],n[3]===void 0?void 0:s(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const a=l(m(n[1]),n[0],null,n[3]===void 0?void 0:s(n[3]));return F(a,n[2])}throw new Error("Invalid Parameter")})},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(t,r){return e.standardFunctionAsync(t,r,function(i,u,n){if(o(n,1,2),!c(n[0]))return g(n[0],n[1]);{const a=x(n[1],"");if(a==="")return n[0].castToText();if(a.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(a.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},e.functions.gdbversion=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,1,1),d(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new Error("Invalid Parameter")})},e.functions.schema=function(t,r){return e.standardFunctionAsync(t,r,async function(i,u,n){if(o(n,1,1),c(n[0]))return await n[0].load(),f.convertObjectToArcadeDictionary(n[0].schema());if(d(n[0])){const a=j(n[0]);return a?f.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")})}}export{L as registerFunctions};
