const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.setAttribute("disabled",""),t.addEventListener("click",(function(){d=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.cb4a7aa9.js.map
