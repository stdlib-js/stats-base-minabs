// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minabs=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?l:c;var p=function(e){return e!=e};var d=function(e){return Math.abs(e)},b=p,s=d;var y=p,v=d;var m=function(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return s(r[0]);for(n=s(r[o=t<0?(1-e)*t:0]),i=1;i<e;i++){if(a=s(r[o+=t]),b(a))return a;a<n&&(n=a)}return n};return function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(m,"ndarray",(function(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return v(r[n]);for(o=v(r[a=n]),u=1;u<e;u++){if(i=v(r[a+=t]),y(i))return i;i<o&&(o=i)}return o})),m}));
//# sourceMappingURL=bundle.js.map
