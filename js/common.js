!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wp-content/themes/bluestacks/dist/js/",o(o.s=709)}({186:function(e,t,o){"use strict";function n(){var e=/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,t=function(){return navigator.userAgent.match(e)},o=function(){var e=document.querySelector(".left-section").getBoundingClientRect().width,t=document.querySelector(".right-section").getBoundingClientRect().width,o=document.querySelector(".header-wrapper .container").getBoundingClientRect().width,n=document.querySelector("#header-menu").getBoundingClientRect().width,r=document.querySelector(".header-wrapper .container .left-section .menu-list"),c=document.querySelector(".header-wrapper").dataset.header,a=o-(e+t),i=document.querySelector(".container-autocomplete.show form"),s=document.querySelector(".container-autocomplete.show");c&&r&&(r.style.opacity=0),s&&(s.style.width=n+a+20+"px"),i&&(i.style.width=n+a+5+"px")},n=function(e){for(var t=e.offsetTop,o=e.offsetLeft,n=e.offsetWidth,r=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,o+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&o<window.pageXOffset+window.innerWidth&&t+r>window.pageYOffset&&o+n>window.pageXOffset},r=function(){if(window.innerWidth<1201&&window.innerWidth>1024){var e=document.querySelector(".header-wrapper .container .left-section .menu-list>li:nth-last-child(2)");e&&e.classList.add("replicate-item-has-children")}};!function(){var e="unknown-os";if(-1!==navigator.appVersion.indexOf("Win")&&(e="windows-os"),-1!==navigator.appVersion.indexOf("Mac")&&(e="mac-os"),-1!==navigator.appVersion.indexOf("X11")&&(e="unix"),-1!==navigator.appVersion.indexOf("Linux")&&(e="linux"),document.querySelector("body").classList.add(e),"mac-os"===e&&window.innerWidth>767){var o=document.querySelector(".header-wrapper .container .right-section .download-buttons .download-button"),n=document.querySelector(".unlock-banner-section .container .unlock-content .download-buttons .download-bs");if(o){var r=o.getAttribute("data-mac-attr");o.classList.remove("download-bs5"),o.classList.remove("download-bs5-win"),r&&""!==r&&(o.querySelector(".so-button").innerHTML=r)}if(n){var c=n.getAttribute("data-mac-attr");n.classList.remove("download-bs5"),n.classList.remove("download-bs5-win"),c&&""!==c&&(n.querySelector(".so-button").innerHTML=c)}document.querySelectorAll(".download-bsx.download-bs5").forEach((function(e){return e.classList.remove("download-bs5")}))}else{var a=document.querySelector(".header-wrapper .container .right-section .download-buttons .download-button"),i=document.querySelector(".unlock-banner-section .container .unlock-content .download-buttons .download-bs");a&&(a.classList.add("download-bs5"),a.classList.add("download-bs5-win")),i&&(i.classList.add("download-bs5"),i.classList.add("download-bs5-win"))}if("mac-os"===e||t()||window.innerWidth<768){var s=document.querySelectorAll(".bsx-link"),d=document.querySelectorAll(".download-bs10"),l=document.querySelector(".terms-n-condition"),u=document.querySelector(".play-browser-wrapper .download-other-versions"),m=document.querySelector(".download-wrapper-layer .download-other-versions");d.forEach((function(e){return e.classList.add("hide")})),s.forEach((function(e){return e.classList.remove("hide")})),l&&l.classList.remove("hide"),u&&u.classList.add("hide"),m&&m.classList.remove("hide")}}(),r(),function(){var e=document.querySelector(".icon-search"),n=document.querySelector(".menu-list>.current-menu-item, .menu-list>.current-page-ancestor");e&&e.addEventListener("click",(function(){document.querySelector(".container-autocomplete").classList.add("show"),n&&n.classList.add("border-none"),o(),document.querySelector('.container-autocomplete input[type="search"]').focus()})),document.addEventListener("click",(function(e){var t=document.querySelectorAll(".banner-url"),o=document.querySelector(".header-wrapper").dataset.header,r=document.querySelector(".header-wrapper .container .left-section .menu-list");if(e.target.classList.contains("container-autocomplete")||e.target.closest(".container-autocomplete")||e.target.classList.contains("search-wrapper")||e.target.closest(".search-wrapper"))t.forEach((function(e){e.classList.add("non-clickable")}));else{var c=document.querySelector(".container-autocomplete");o&&(r.style.opacity=1),c&&(c.classList.remove("show"),c.querySelector("form").style.width=0,c.style.width=0),n&&n.classList.remove("border-none"),t.forEach((function(e){e.classList.remove("non-clickable")}))}}));var r=document.querySelector(".nav-menu-opner");r&&r.addEventListener("click",(function(){var e=document.querySelector(".menu-block");document.body.classList.contains("menu-opened")?(document.body.classList.remove("menu-opened"),r.classList.remove("menu-close"),e.classList.remove("show-nav")):(document.body.classList.add("menu-opened"),r.classList.add("menu-close"),e.classList.add("show-nav"))}));var c=document.querySelector(".hero-banner-section .download-buttons"),a=document.querySelector(".blog-game-app-page");c&&!a||document.querySelectorAll(".menu-list .menu-item-has-children > a").forEach((function(e){e.addEventListener("click",(function(o){t()&&(o.stopPropagation(),o.preventDefault());var n=e.parentNode;n.classList.contains("active-nav")?n.classList.remove("active-nav"):(n.closest(".menu-list").querySelector(".active-nav")&&document.querySelector(".active-nav").classList.remove("active-nav"),n.classList.add("active-nav"))}))}));var i=document.querySelector(".scroll-top-section");i&&i.addEventListener("click",(function(){event.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"}),i.classList.remove("animate-scroll")}));navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i)&&document.querySelectorAll(".footer-wrapper .games-item-list .menu-item-has-children.menu-item>a").forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault();var o=e.parentNode;o.classList.contains("active-nav")?o.classList.remove("active-nav"):(o.closest(".games-item-list").querySelector(".active-nav")&&document.querySelector(".active-nav").classList.remove("active-nav"),o.classList.add("active-nav"))}))}))}(),window.addEventListener("scroll",(function(){var e=document.querySelector(".unlock-banner-section");e&&n(e)&&e.classList.add("animate-section");var t=document.querySelector(".autocomplete-suggestions");t&&t.setAttribute("style","display:none");var r=document.querySelector(".hero-banner-section .download-buttons"),c=document.querySelector(".main-container > section"),a=document.querySelector(".bsx-hero-section"),i=document.querySelector(".scroll-top-section"),s=document.querySelector(".header-wrapper .container .right-section .container-autocomplete form");r||(c&&!n(c)||a&&!n(a)?(i&&i.classList.add("animate-scroll"),document.querySelector(".container-autocomplete.show")?window.innerWidth>767&&s&&(s.style.transition="none",o()):window.innerWidth>767&&s&&(s.style.transition=".3s ease-in-out",document.querySelector(".container-autocomplete form")&&(document.querySelector(".container-autocomplete form").style.width=0),document.querySelector(".container-autocomplete")&&(document.querySelector(".container-autocomplete").style.width=0)),document.querySelector(".header-wrapper").classList.add("sticky-header")):(document.querySelector(".header-wrapper").classList.remove("sticky-header"),i&&i.classList.remove("animate-scroll"),document.querySelector(".container-autocomplete.show")?o():(document.querySelector(".container-autocomplete form")&&(document.querySelector(".container-autocomplete form").style.width=0),document.querySelector(".container-autocomplete")&&(document.querySelector(".container-autocomplete").style.width=0))))})),window.addEventListener("resize",(function(){r()})),t()||function(){var e=document.createElement("canvas"),t=void 0,o=void 0,n=void 0;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}t&&(o=t.getExtension("WEBGL_debug_renderer_info"),t.getParameter(o.UNMASKED_VENDOR_WEBGL),n=t.getParameter(o.UNMASKED_RENDERER_WEBGL)),n.includes("Apple")&&document.querySelector("body").classList.add("mac-m-machine")}()}o.r(t),o.d(t,"default",(function(){return n})),n()},709:function(e,t,o){"use strict";o.r(t),o(186)}});