!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r={delay:document.forms[0].delay,step:document.forms[0].step,amount:document.forms[0].amount,submit:document.querySelector("button[type=submit]")};function a(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.submit.addEventListener("click",(function(e){e.preventDefault();for(var n=[],t=r.delay.value,o=r.step.value,u=r.amount.value,c=0;c<u;c+=1){var l=c+1;t=+t+c*o,n.push(a(l,t).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})))}}))}();
//# sourceMappingURL=03-promises.9332c07b.js.map
