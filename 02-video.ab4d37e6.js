var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function p(e,t,n){var o,i,r,u,c,f,a=0,p=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,a=t,u=e.apply(r,n)}function h(e){return a=e,c=setTimeout(T,t),p?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-a>=r}function T(){var e=d();if(j(e))return O(e);c=setTimeout(T,function(e){var n=t-(e-f);return m?s(n,r-(e-a)):n}(e))}function O(e){return c=void 0,g&&o?b(e):(o=i=void 0,u)}function w(){var e=d(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===c)return h(f);if(m)return c=setTimeout(T,t),b(f)}return void 0===c&&(c=setTimeout(T,t)),u}return t=v(t)||0,y(n)&&(p=!!n.leading,r=(m="maxWait"in n)?l(v(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=i=c=void 0},w.flush=function(){return void 0===c?u:O(d())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==a.call(e)}(e))return NaN;if(y(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=y(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var c=o.test(e);return c||i.test(e)?r(e.slice(2),c?2:8):n.test(e)?NaN:+e}const m=document.querySelector("iframe"),g=new Vimeo.Player(m);let b={duration:0,percent:0,seconds:0};const{duration:h,percent:j,seconds:T}=b;function O(){const e=JSON.parse(localStorage.getItem("videoplayer-current-time"));return b=e,b}g.on("play",(function(){console.log("played the video!"),g.on("timeupdate",(function(e){console.log(e),localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}))})),O(),console.log(O()),g.setCurrentTime(b.seconds).then((function(e){})).catch((function(e){e.name})),g.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.ab4d37e6.js.map