import{aT as o,aU as i,aV as T,aW as $,aX as k,aY as d,an as M,aZ as s,a_ as P,a$ as c}from"./entry.4cc9b4b9.js";var A=o(i,"WeakMap");const g=A;var V=T(Object.keys,Object);const j=V;var C=Object.prototype,K=C.hasOwnProperty;function W(e){if(!$(e))return j(e);var t=[];for(var r in Object(e))K.call(e,r)&&r!="constructor"&&t.push(r);return t}function x(e){return k(e)?d(e):W(e)}function D(e,t){for(var r=-1,a=t.length,u=e.length;++r<a;)e[u+r]=t[r];return e}function G(e,t){for(var r=-1,a=e==null?0:e.length,u=0,f=[];++r<a;){var y=e[r];t(y,r,e)&&(f[u++]=y)}return f}function I(){return[]}var E=Object.prototype,L=E.propertyIsEnumerable,w=Object.getOwnPropertySymbols,B=w?function(e){return e==null?[]:(e=Object(e),G(w(e),function(t){return L.call(e,t)}))}:I;const F=B;function N(e,t,r){var a=t(e);return M(e)?a:D(a,r(e))}function R(e){return N(e,x,F)}var U=o(i,"DataView");const l=U;var X=o(i,"Promise");const p=X;var Y=o(i,"Set");const v=Y;var b="[object Map]",Z="[object Object]",m="[object Promise]",S="[object Set]",h="[object WeakMap]",O="[object DataView]",_=s(l),q=s(c),z=s(p),H=s(v),J=s(g),n=P;(l&&n(new l(new ArrayBuffer(1)))!=O||c&&n(new c)!=b||p&&n(p.resolve())!=m||v&&n(new v)!=S||g&&n(new g)!=h)&&(n=function(e){var t=P(e),r=t==Z?e.constructor:void 0,a=r?s(r):"";if(a)switch(a){case _:return O;case q:return b;case z:return m;case H:return S;case J:return h}return t});const ee=n;export{D as a,N as b,ee as c,R as d,F as g,x as k,I as s};
