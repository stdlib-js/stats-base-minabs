"use strict";var o=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var y=o(function(D,m){
var g=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function j(a,r,i,s){var n,u,v,e,t,c;if(n=r.data,u=r.accessors[0],a===1||i===0)return q(u(n,s));for(e=s,v=q(u(n,e)),c=1;c<a;c++){if(e+=i,t=q(u(n,e)),g(t))return t;t<v&&(v=t)}return v}m.exports=j
});var b=o(function(E,p){
var k=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=y();function R(a,r,i,s){var n,u,v,e,t;if(a<=0)return NaN;if(v=O(r),v.accessorProtocol)return P(a,v,i,s);if(a===1||i===0)return f(r[s]);for(u=s,n=f(r[u]),t=1;t<a;t++){if(u+=i,e=f(r[u]),k(e))return e;e<n&&(n=e)}return n}p.exports=R
});var x=o(function(F,l){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(a,r,i){return w(a,r,i,h(a,i))}l.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=x(),B=b();A(d,"ndarray",B);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
