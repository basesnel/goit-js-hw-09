!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;var n=null;var a=function(){return e.disabled=!(t.disabled=!t.disabled)};t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),a()})),e.addEventListener("click",(function(){clearInterval(n),console.log("Interval with id ".concat(n," has stopped!")),a()}))}();
//# sourceMappingURL=01-color-switcher.e3f5290a.js.map