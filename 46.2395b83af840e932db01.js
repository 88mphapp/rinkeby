(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"khx/":function(e,n,t){"use strict";t.r(n);var r=t("zfVJ");function a(e,n,t,r,a,l,i){try{var c=e[l](i),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(r,a)}function l(e){return function(){var n=this,t=arguments;return new Promise(function(r,l){var i=e.apply(n,t);function c(e){a(i,r,l,c,o,"next",e)}function o(e){a(i,r,l,c,o,"throw",e)}c(void 0)})}}n.default=function(e){var n,a=e.preferred,i=e.rpcUrl;return{name:e.label||"Huobi Wallet",svg:e.svg||'\n    <svg id="\u56fe\u5c42_1" data-name="\u56fe\u5c42 1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">\n        <defs>\n            <style>.cls-1{fill:#2d65f8;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#173fff;}.cls-3{fill:#fcfcff;}.cls-4{fill:#fff;}</style>\n        </defs>\n        <title>huobi wallet icon</title>\n        <path class="cls-1" d="M292.28,0H552Q742.79,27,858.24,122.88T1024,392V731.72c0,101.63-10.58,138.48-30.45,175.64a207.13,207.13,0,0,1-86.19,86.19c-37.16,19.87-74,30.45-175.64,30.45H292.28c-101.63,0-138.48-10.58-175.64-30.45a207.13,207.13,0,0,1-86.19-86.19C10.58,870.2,0,833.35,0,731.72V292.28C0,190.65,10.58,153.8,30.45,116.64a207.13,207.13,0,0,1,86.19-86.19C153.8,10.58,190.65,0,292.28,0Z"/>\n        <path class="cls-2" d="M993.55,116.64a207.13,207.13,0,0,0-86.19-86.19C870.21,10.58,833.35,0,731.72,0H552Q742.79,27,858.24,122.88T1024,392V292.28C1024,190.65,1013.42,153.8,993.55,116.64Z"/>\n        <path class="cls-3" d="M591.8,382.71c0-97.43-48-181.13-84.48-208.41,0,0-2.78-1.53-2.59,2.3-3,188-100.19,239-153.65,307.63-123.27,158.45-8.6,332.23,108.14,364.18,65.35,18-15.06-31.95-25.4-136.86C421.21,584.73,591.8,487.81,591.8,382.71Z"/>\n        <path class="cls-4" d="M643.64,445.69c-.78-.51-1.81-.9-2.53.32-2.07,23.74-26.56,74.42-57.67,121C478.07,725,538.08,801.1,571.91,842.18c19.44,23.74,0,0,49-24.25,60.52-36.26,99.8-98.95,105.62-168.62A242.5,242.5,0,0,0,643.64,445.69Z"/>\n    </svg>',wallet:(n=l(regeneratorRuntime.mark(function e(n){var r,a,c,o,s,u,f,d,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getProviderName,a=n.getAddress,c=n.getNetwork,o=n.getBalance,s=window.ethereum||window.web3&&window.web3.currentProvider,!(u="huobiwallet"===r(s))||!i){e.next=7;break}return e.next=6,Promise.all([t.e(1),t.e(2),t.e(3),t.e(4),t.e(5),t.e(6)]).then(t.bind(null,"fPp0"));case 6:f=e.sent.default;case 7:return d=f?f({rpcUrl:i}):null,p=!1,e.abrupt("return",{provider:s,interface:u?{address:{get:function(){return a(s)}},network:{get:function(){return c(s)}},balance:{get:function(){var e=l(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=3;break}return p||(console.warn('The Huobi Wallet provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the Huobi Wallet initialization object to get the balance.'),p=!0),e.abrupt("return",null);case 3:return e.next=5,a(s);case 5:return e.abrupt("return",o(d,e.sent));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},name:r(s)}:null});case 10:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),type:"injected",link:"https://www.huobiwallet.com",installMessage:r.b,mobile:!0,preferred:a}}}}]);