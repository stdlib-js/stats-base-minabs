"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=s(function(z,o){
var x=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function O(a,r,u){var t,e,i,n;if(a<=0)return NaN;if(a===1||u===0)return f(r[0]);for(u<0?e=(1-a)*u:e=0,t=f(r[e]),n=1;n<a;n++){if(e+=u,i=f(r[e]),x(i))return i;i<t&&(t=i)}return t}o.exports=O
});var m=s(function(A,c){
var R=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function g(a,r,u,t){var e,i,n,v;if(a<=0)return NaN;if(a===1||u===0)return q(r[t]);for(i=t,e=q(r[i]),v=1;v<a;v++){if(i+=u,n=q(r[i]),R(n))return n;n<e&&(e=n)}return e}c.exports=g
});var l=s(function(B,y){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),j=m();h(p,"ndarray",j);y.exports=p
});var k=l();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
