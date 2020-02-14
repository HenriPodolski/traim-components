var __awaiter=this&&this.__awaiter||function(t,e,n,r){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{u(r.next(t))}catch(e){i(e)}}function s(t){try{u(r["throw"](t))}catch(e){i(e)}}function u(t){t.done?n(t.value):a(t.value).then(o,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-bbda516a.system.js"],(function(t){"use strict";var e,n,r,a;return{setters:[function(t){e=t.r;n=t.c;r=t.h;a=t.g}],execute:function(){var i=t("traim_tabs",function(){function t(t){e(this,t);this.onChange=n(this,"changeTab",7)}t.prototype.componentWillLoad=function(){this.tabs=Array.from(this.elem.querySelectorAll("traim-tab"))};t.prototype.changeTabHandler=function(){this.tabs=Array.from(this.elem.querySelectorAll("traim-tab"))};t.prototype.currentTab=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.tabs.findIndex((function(t){return t.open}))]}))}))};t.prototype.openTab=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.tabs[t].disabled){this.tabs=this.tabs.map((function(t){t.open=false;return t}));this.tabs[t].open=true;this.onChange.emit({idx:t})}return[2]}))}))};t.prototype.render=function(){var t=this;return r("div",{class:"tabs"},r("div",{role:"tablist",class:"tabs__tablist"},r("nav",{class:"tabs__nav"},r("ul",{class:"tabs__headings"},this.tabs.map((function(e,n){var a=e.open?"is-active":"";return r("li",{class:"tabs__tab"},r("button",{role:"tab",disabled:e.disabled,class:"tabs__heading "+a,onClick:function(){return t.openTab(n)}},e.header))})))),r("slot",null)))};Object.defineProperty(t.prototype,"elem",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.tabs__tablist[role=tablist]{display:block}.tabs__headings{display:-ms-flexbox;display:flex;text-align:center;list-style:none outside;margin:0;padding:0}.tabs__nav{overflow:hidden}.tabs__nav .tabs__headings{overflow-x:auto;overflow-y:hidden}.tabs__heading[role=tab]{position:relative;width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--tab-padding-top,0) var(--tab-padding-left,0) var(--tab-padding-bottom,0) var(--tab-padding-right,0);display:block;-ms-flex:1;flex:1;margin:0 var(--tab-margin-left) 0 var(--tab-margin-right);cursor:pointer;white-space:nowrap;text-overflow:ellipsis;font-family:var(--tab-font-family,inherit);font-size:var(--tab-font-size,var(--text-font-size-medium));color:var(--tab-color);-webkit-transition:color .3s;transition:color .3s}.tabs__heading[role=tab]:disabled,.tabs__heading[role=tab][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.tabs__heading[role=tab]:first-of-type{margin:0 0 0 var(--tab-margin-right)}.tabs__heading[role=tab]:last-of-type{margin:0 var(--tab-margin-left) 0 0}.tabs__heading[role=tab]:after{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border-top-left-radius:var(--tab-border-radius,0);border-top-right-radius:var(--tab-border-radius,0);background-color:var(--tab-background-color);content:\"\";-webkit-transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,transform .3s;transition:background-color .3s,transform .3s,-webkit-transform .3s;-webkit-transition-timing-function:ease,cubic-bezier(.7,0,.3,1);transition-timing-function:ease,cubic-bezier(.7,0,.3,1);-webkit-transform:translate3d(0,100%,0) translate3d(0,-3px,0);transform:translate3d(0,100%,0) translate3d(0,-3px,0)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover{color:var(--tab-hover-color)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover:after{background-color:var(--tab-active-background-color)}.tabs__heading[role=tab].is-active{color:var(--tab-active-color)}.tabs__heading[role=tab].is-active:after{-webkit-transform:translateZ(0);transform:translateZ(0);background-color:var(--tab-active-background-color)}"},enumerable:true,configurable:true});return t}())}}}));