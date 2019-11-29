var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,s){function i(e){try{l(n.next(e))}catch(r){s(r)}}function o(e){try{l(n["throw"](e))}catch(r){s(r)}}function l(e){e.done?t(e.value):a(e.value).then(i,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(r){return l([e,r])}}function l(i){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;a=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(s=t.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){t.label=i[1];break}if(i[0]===6&&t.label<s[1]){t.label=s[1];s=i;break}if(s&&t.label<s[2]){t.label=s[2];t.ops.push(i);break}if(s[2])t.ops.pop();t.trys.pop();continue}i=r.call(e,t)}catch(o){i=[6,o];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var s=arguments[r],i=0,o=s.length;i<o;i++,a++)n[a]=s[i];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="traim-components";var a=0;var s=false;var i;var o;var l;var f=false;var $=false;var u=false;var c=false;var v=window;var d=document;var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return!!d.documentElement.attachShadow}();var p=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,r){return y.set(r.$lazyInstance$=e,r)}));var R=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,r)};var S=function(e,r){return r in e};var _=function(e){return console.error(e)};var N=new Map;var x=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var s=e.$lazyBundleIds$;var i=N.get(s);if(i){return i[a]}return r.import("./"+s+".entry.js"+"").then((function(e){{N.set(s,e)}return e[a]}),_)};var T=new Map;var L=[];var E=[];var j=[];var C=function(e,r){return function(t){e.push(t);if(!s){s=true;if(r&&h.$flags$&4){k(O)}else{h.raf(O)}}}};var P=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){_(t)}}e.length=0};var A=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){_(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var O=function(){a++;P(L);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;A(E,e);A(j,e);if(E.length>0){j.push.apply(j,E);E.length=0}if(s=L.length+E.length+j.length>0){h.raf(O)}else{a=0}};var k=function(e){return Promise.resolve().then(e)};var U=C(E,true);var I={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var q=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var z=function(e,r){if(r===void 0){r=""}{return function(){return}}};var H=function(e,r){{return function(){return}}};var V=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var W=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,s,i;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));s=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},s),{resourcesUrl:new URL(".",e).href})];case 1:i=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));F(i.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},s),{resourcesUrl:i.href})]}}))}))}));var F=function(e){var r=q(n);try{v[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;v[r]=function(n){var a=new URL(n,e).href;var s=t.get(a);if(!s){var i=d.createElement("script");i.type="module";i.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){i.onload=function(){e(v[r].m);i.remove()}}));t.set(a,s);d.head.appendChild(i)}return s}}};var G=function(e,r){if(e!=null&&!M(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var Q="hydrated";var D=new WeakMap;var J=function(e,r,t){var n=T.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}T.set(e,n)};var K=function(e,r,t,n){var a=Y(r.$tagName$);var s=T.get(a);e=e.nodeType===11?e:d;if(s){if(typeof s==="string"){e=e.head||e;var i=D.get(e);var o=void 0;if(!i){D.set(e,i=new Set)}if(!i.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,s,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;i=null}}else{o=d.createElement("style");o.innerHTML=s}e.insertBefore(o,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[s])}}return a};var X=function(e,r,t){var n=z("attachStyles",r.$tagName$);var a=K(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var Y=function(e,r){return"sc-"+e};var Z=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var s=null;var i=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!M(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?ee(null,a):a)}o=i}}};f(t);if(r){if(r.name){s=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=ee(e,null);u.$attrs$=r;if(l.length>0){u.$children$=l}{u.$name$=s}return u}));var ee=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var re={};var te=function(e){return e&&e.$tag$===re};var ne=function(e,r,t,n,a,s){if(t===n){return}var i=S(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=se(t);var $=se(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(!i&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(S(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var u=M(n);if((i||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(r==="list"){i=false}else if(t==null||e[r]!=c){e[r]=c}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!i||s&4||a)&&!u){n=n===true?"":n;{e.setAttribute(r,n)}}}};var ae=/\s/;var se=function(e){return!e?[]:e.split(ae)};var ie=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var s=e&&e.$attrs$||I;var i=r.$attrs$||I;{for(n in s){if(!(n in i)){ne(a,n,s[n],undefined,t,r.$flags$)}}}for(n in i){ne(a,n,s[n],i[n],t,r.$flags$)}};var oe=function(e,r,t,n){var a=r.$children$[t];var s=0;var $;var v;var h;if(!f){u=true;if(a.$tag$==="slot"){if(i){n.classList.add(i+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ie(null,a,c)}if(B(i)&&$["s-si"]!==i){$.classList.add($["s-si"]=i)}if(a.$children$){for(s=0;s<a.$children$.length;++s){v=oe(e,a,s,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===a.$tag$&&e.$elm$){le(e.$elm$,false)}}}return $};var le=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){de(a).insertBefore(a,ve(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(r){le(a,r)}}h.$flags$&=~1};var fe=function(e,r,t,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(i.shadowRoot&&i.tagName===l){i=i.shadowRoot}for(;a<=s;++a){if(n[a]){o=oe(null,t,a,e);if(o){n[a].$elm$=o;i.insertBefore(o,ve(r))}}}};var $e=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{le(a,true)}}a.remove()}}};var ue=function(e,r,t,n){var a=0;var s=0;var i=r.length-1;var o=r[0];var l=r[i];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=i&&s<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--i]}else if($==null){$=n[++s]}else if(u==null){u=n[--f]}else if(ce(o,$)){he(o,$);o=r[++a];$=n[++s]}else if(ce(l,u)){he(l,u);l=r[--i];u=n[--f]}else if(ce(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){le(o.$elm$.parentNode,false)}he(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];u=n[--f]}else if(ce(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){le(l.$elm$.parentNode,false)}he(l,$);e.insertBefore(l.$elm$,o.$elm$);l=r[--i];$=n[++s]}else{{c=oe(r&&r[s],t,s,e);$=n[++s]}if(c){{de(o.$elm$).insertBefore(c,ve(o.$elm$))}}}}if(a>i){fe(e,n[f+1]==null?null:n[f+1].$elm$,t,n,s,f)}else if(s>f){$e(r,a,i)}};var ce=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var ve=function(e){return e&&e["s-ol"]||e};var de=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var he=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var s;if(r.$text$===null){{if(r.$tag$==="slot");else{ie(e,r,c)}}if(n!==null&&a!==null){ue(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}fe(t,null,r,a,0,a.length-1)}else if(n!==null){$e(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var me=function(e){var r=e.childNodes;var t;var n;var a;var s;var i;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){i=t["s-sn"];t.hidden=false;for(s=0;s<a;s++){if(r[s]["s-hn"]!==t["s-hn"]){o=r[s].nodeType;if(i!==""){if(o===1&&i===r[s].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[s].textContent.trim()!==""){t.hidden=true;break}}}}}me(t)}}};var pe=[];var ge=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var s=0;var i;var o;var l;var f;for(t=r.length;n<t;n++){i=r[n];if(i["s-sr"]&&(o=i["s-cr"])){l=o.parentNode.childNodes;f=i["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==i["s-hn"]){s=o.nodeType;if((s===3||s===8)&&f===""||s===1&&o.getAttribute("slot")===null&&f===""||s===1&&o.getAttribute("slot")===f){if(!pe.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;pe.push({$slotRefNode$:i,$nodeToRelocate$:o})}}}}}if(i.nodeType===1){ge(i)}}};var ye=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||ee(null,null);var s=te(n)?n:Z(null,null,n);if(t.$attrsToReflect$){s.$attrs$=s.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return s.$attrs$[n]=e[t]}))}s.$tag$=null;s.$flags$|=4;r.$vnode$=s;s.$elm$=a.$elm$=e.shadowRoot||e;{i=e["s-sc"]}{o=e["s-cr"];f=m&&(t.$flags$&1)!==0;u=$=false}he(a,s);{if(u){ge(s.$elm$);for(var c=0;c<pe.length;c++){var v=pe[c];if(!v.$nodeToRelocate$["s-ol"]){var p=d.createTextNode("");p["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=p,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<pe.length;c++){var v=pe[c];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var p=v.$nodeToRelocate$["s-ol"];while(p=p.previousSibling){var b=p["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){me(s.$elm$)}pe.length=0}};var be=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var we=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=z("scheduleUpdate",t.$tagName$);var s=r.$ancestorComponent$;var i=r.$lazyInstance$;var o=function(){return Re(e,r,t,i,n)};be(r,s);var l;if(n){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return xe(i,r,t)}));r.$queuedListeners$=null}}{l=xe(i,"componentWillLoad")}}a();return Te(l,(function(){return U(o)}))};var Re=function(e,r,t,n,a){var s=z("update",t.$tagName$);var i=e["s-rc"];if(a){X(e,t,r.$modeName$)}var o=z("render",t.$tagName$);{{try{ye(e,r,t,n.render())}catch($){_($)}}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(i){i.forEach((function(e){return e()}));e["s-rc"]=undefined}o();s();{var l=e["s-p"];var f=function(){return Se(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var Se=function(e,r,t){var n=z("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(Q)}n();{r.$onReadyResolve$(e);if(!a){Ne()}}}else{n()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){k((function(){return we(e,r,t,false)}))}r.$flags$&=~(4|512)}};var _e=function(e,r){{var t=b(e);if((t.$flags$&(2|16))===2){we(e,t,r,false)}}};var Ne=function(e){{d.documentElement.classList.add(Q)}{h.$flags$|=2}};var xe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){_(n)}}return undefined};var Te=function(e,r){return e&&e.then?e.then(r):r()};var Le=function(e,r){return b(e).$instanceValues$.get(r)};var Ee=function(e,r,t,n){var a=b(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;t=G(t,n.$members$[r][0]);if(t!==i&&(!(o&8)||i===undefined)){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&o&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{l[e](t,i,r)}catch(n){_(n)}}))}}if((o&(2|16))===2){we(s,a,n,false)}}}};var je=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],s=e[1][0];if(s&31||t&2&&s&32){Object.defineProperty(a,n,{get:function(){return Le(this,n)},set:function(e){Ee(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&s&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=b(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var s=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=s.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;s.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Ce=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],s=t[2];var i=e;var o=Pe(r,s);var l=Ae(n);h.ael(i,a,o,l);return function(){return h.rel(i,a,o,l)}}));return function(){return n.forEach((function(e){return e()}))}};var Pe=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var Ae=function(e){return p?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Oe=function(e,n,a,s,i){return __awaiter(t,void 0,void 0,(function(){var t,s,o,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;i=x(a);if(!i.then)return[3,2];t=H();return[4,i];case 1:i=c.sent();t();c.label=2;case 2:if(!i.isProxied){{a.$watchers$=i.watchers}je(i,a,2);i.isProxied=true}s=z("createInstance",a.$tagName$);{n.$flags$|=8}try{new i(n)}catch(v){_(v)}{n.$flags$&=~8}{n.$flags$|=128}s();o=Y(a.$tagName$);if(!(!T.has(o)&&i.style))return[3,5];l=z("registerStyles",a.$tagName$);f=i.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=c.sent();c.label=4;case 4:J(o,f,!!(a.$flags$&1));l();c.label=5;case 5:$=n.$ancestorComponent$;u=function(){return we(e,n,a,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var ke=function(e,r){if((h.$flags$&1)===0){var t=z("connectedCallback",r.$tagName$);var n=b(e);if(r.$listeners$){n.$rmListeners$=Ce(e,n,r.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(r.$flags$&4||r.$flags$&8){Ue(e)}}{var s=e;while(s=s.parentNode||s.host){if(s["s-p"]){be(n,n.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{k((function(){return Oe(e,n,r)}))}}t()}};var Ue=function(e){var r="";var t=e["s-cr"]=d.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ie=function(e){if((h.$flags$&1)===0){var r=b(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Be=e("b",(function(e,r){if(r===void 0){r={}}var t=z();var n=[];var a=r.exclude||[];var s=d.head;var i=v.customElements;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;if(r.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;R(r);if(t.$flags$&1){if(m){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return ke(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Ie(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){_e(this,t)};r.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,je(o,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild);u=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return $=setTimeout(Ne,30,"timeout")}))}t()}));var Me=e("c",(function(e,r,t){var n=qe(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e}))}}}));var qe=e("g",(function(e){return b(e).$hostElement$}))}}}));