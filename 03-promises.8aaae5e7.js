!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){var t=Math.random()>.3;return new Promise((function(r,i){setTimeout((function(){t?r(o.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))):i(o.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms")))}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=n.delay,r=n.step,o=n.amount,u=1,a=parseInt(t.value,10);u<=o.value;u+=1,a+=parseInt(r.value,10))i(u,a).then((function(e){return e})).catch((function(e){return e}))}))}();
//# sourceMappingURL=03-promises.8aaae5e7.js.map
