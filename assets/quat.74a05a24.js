import{e as _,a as T}from"./quatf64.2f917dd7.js";import{fM as b,fN as Y,fl as L,fO as W,fP as X,fQ as $,fR as D,fS as J,fT as N,fU as Q,fV as R,fW as U,fe as V,fh as g,fX as Z,fa as k,A as w,J as j,fY as x}from"./index.1aec8a9e.js";function B(n){return n[0]=0,n[1]=0,n[2]=0,n[3]=1,n}function v(n,o,a){a*=.5;const r=Math.sin(a);return n[0]=r*o[0],n[1]=r*o[1],n[2]=r*o[2],n[3]=Math.cos(a),n}function C(n,o){const a=2*Math.acos(o[3]),r=Math.sin(a/2);return r>b?(n[0]=o[0]/r,n[1]=o[1]/r,n[2]=o[2]/r):(n[0]=1,n[1]=0,n[2]=0),a}function z(n,o,a){const r=o[0],e=o[1],c=o[2],t=o[3],u=a[0],i=a[1],f=a[2],h=a[3];return n[0]=r*h+t*u+e*f-c*i,n[1]=e*h+t*i+c*u-r*f,n[2]=c*h+t*f+r*i-e*u,n[3]=t*h-r*u-e*i-c*f,n}function F(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+t*u,n[1]=e*i+c*u,n[2]=c*i-e*u,n[3]=t*i-r*u,n}function G(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i-c*u,n[1]=e*i+t*u,n[2]=c*i+r*u,n[3]=t*i-e*u,n}function H(n,o,a){a*=.5;const r=o[0],e=o[1],c=o[2],t=o[3],u=Math.sin(a),i=Math.cos(a);return n[0]=r*i+e*u,n[1]=e*i-r*u,n[2]=c*i+t*u,n[3]=t*i-c*u,n}function K(n,o){const a=o[0],r=o[1],e=o[2];return n[0]=a,n[1]=r,n[2]=e,n[3]=Math.sqrt(Math.abs(1-a*a-r*r-e*e)),n}function P(n,o,a,r){const e=o[0],c=o[1],t=o[2],u=o[3];let i,f,h,s,l,q=a[0],m=a[1],p=a[2],d=a[3];return f=e*q+c*m+t*p+u*d,f<0&&(f=-f,q=-q,m=-m,p=-p,d=-d),1-f>b?(i=Math.acos(f),h=Math.sin(i),s=Math.sin((1-r)*i)/h,l=Math.sin(r*i)/h):(s=1-r,l=r),n[0]=s*e+l*q,n[1]=s*c+l*m,n[2]=s*t+l*p,n[3]=s*u+l*d,n}function nn(n){const o=x(),a=x(),r=x(),e=Math.sqrt(1-o),c=Math.sqrt(o);return n[0]=e*Math.sin(2*Math.PI*a),n[1]=e*Math.cos(2*Math.PI*a),n[2]=c*Math.sin(2*Math.PI*r),n[3]=c*Math.cos(2*Math.PI*r),n}function on(n,o){const a=o[0],r=o[1],e=o[2],c=o[3],t=a*a+r*r+e*e+c*c,u=t?1/t:0;return n[0]=-a*u,n[1]=-r*u,n[2]=-e*u,n[3]=c*u,n}function rn(n,o){return n[0]=-o[0],n[1]=-o[1],n[2]=-o[2],n[3]=o[3],n}function E(n,o){const a=o[0]+o[4]+o[8];let r;if(a>0)r=Math.sqrt(a+1),n[3]=.5*r,r=.5/r,n[0]=(o[5]-o[7])*r,n[1]=(o[6]-o[2])*r,n[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const c=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*c+c]-o[3*t+t]+1),n[e]=.5*r,r=.5/r,n[3]=(o[3*c+t]-o[3*t+c])*r,n[c]=(o[3*c+e]+o[3*e+c])*r,n[t]=(o[3*t+e]+o[3*e+t])*r}return n}function en(n,o,a,r){const e=.5*Math.PI/180;o*=e,a*=e,r*=e;const c=Math.sin(o),t=Math.cos(o),u=Math.sin(a),i=Math.cos(a),f=Math.sin(r),h=Math.cos(r);return n[0]=c*i*h-t*u*f,n[1]=t*u*h+c*i*f,n[2]=t*i*f-c*u*h,n[3]=t*i*h+c*u*f,n}function an(n){return"quat("+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+")"}const cn=Y,tn=L,un=W,fn=z,hn=X,Mn=$,sn=D,O=J,ln=O,S=N,qn=S,y=Q,mn=R,pn=U;function dn(n,o,a){const r=V(o,a);return r<-.999999?(g(M,Pn,o),Z(M)<1e-6&&g(M,gn,o),k(M,M),v(n,M,Math.PI),n):r>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(g(M,o,a),n[0]=M[0],n[1]=M[1],n[2]=M[2],n[3]=1+r,y(n,n))}const M=w(),Pn=j(1,0,0),gn=j(0,1,0);function xn(n,o,a,r,e,c){return P(A,o,e,c),P(I,a,r,c),P(n,A,I,2*c*(1-c)),n}const A=_(),I=_();function yn(n,o,a,r){const e=An;return e[0]=a[0],e[3]=a[1],e[6]=a[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],y(n,E(n,e))}const An=T();Object.freeze(Object.defineProperty({__proto__:null,identity:B,setAxisAngle:v,getAxisAngle:C,multiply:z,rotateX:F,rotateY:G,rotateZ:H,calculateW:K,slerp:P,random:nn,invert:on,conjugate:rn,fromMat3:E,fromEuler:en,str:an,copy:cn,set:tn,add:un,mul:fn,scale:hn,dot:Mn,lerp:sn,length:O,len:ln,squaredLength:S,sqrLen:qn,normalize:y,exactEquals:mn,equals:pn,rotationTo:dn,sqlerp:xn,setAxes:yn},Symbol.toStringTag,{value:"Module"}));export{mn as K,rn as S,en as k,v,C as x,z as y};
