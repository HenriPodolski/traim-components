var __awaiter=this&&this.__awaiter||function(t,e,o,r){function n(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,a){function l(t){try{c(r.next(t))}catch(e){a(e)}}function i(t){try{c(r["throw"](t))}catch(e){a(e)}}function c(t){t.done?o(t.value):n(t.value).then(l,i)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,n,a,l;return l={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function i(t){return function(e){return c([t,e])}}function c(l){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(a=l[0]&2?n["return"]:l[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;if(n=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:o.label++;return{value:l[1],done:false};case 5:o.label++;n=l[1];l=[0];continue;case 7:l=o.ops.pop();o.trys.pop();continue;default:if(!(a=o.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){o=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(l[0]===6&&o.label<a[1]){o.label=a[1];a=l;break}if(a&&o.label<a[2]){o.label=a[2];o.ops.push(l);break}if(a[2])o.ops.pop();o.trys.pop();continue}l=e.call(t,o)}catch(i){l=[6,i];n=0}finally{r=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-ef001041.system.js"],(function(t){"use strict";var e,o,r;return{setters:[function(t){e=t.r;o=t.c;r=t.h}],execute:function(){var n=".toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input:not(:checked)+.toggle__track{background-color:var(--color-dark, #eee)}input:not(:checked)+.toggle__track .toggle__handle{-webkit-transform:translateZ(0);transform:translateZ(0)}input:disabled+.toggle__track{cursor:not-allowed;opacity:var(--disabled-opacity, 0.5)}input:disabled+.toggle__track .toggle__handle{cursor:not-allowed;opacity:var(--disabled-opacity, 0.5)}input:active+.toggle__track,input:focus+.toggle__track{border-color:var(--border-color-focus, #4267ff);-webkit-box-shadow:var(--box-shadow-focus, inset 0 0 0 1px var(--color-outline, #4267ff));box-shadow:var(--box-shadow-focus, inset 0 0 0 1px var(--color-outline, #4267ff))}input:active+.toggle__track .toggle__handle,input:focus+.toggle__track .toggle__handle{border-color:var(--border-color-focus, #4267ff);-webkit-box-shadow:var(--box-shadow-focus, inset 0 0 0 1px var(--color-outline, #4267ff)), 0 1px 3px 1px var(--color-default, #74748c);box-shadow:var(--box-shadow-focus, inset 0 0 0 1px var(--color-outline, #4267ff)), 0 1px 3px 1px var(--color-default, #74748c)}.toggle input{position:absolute;opacity:0}.toggle__track{-ms-flex:0 1 auto;flex:0 1 auto;padding-right:var(--grid-gutter, 8px);padding-left:var(--grid-gutter, 8px);position:relative;width:1em;height:0.5em;margin:0 0.5em;background-color:var(--toggle-track-color, #74748c);border-radius:var(--border-radius-rounded, 30em)}.toggle__handle{position:absolute;top:-0.25em;left:0;width:1em;height:1em;background-color:#fff;border-radius:var(--border-radius-rounded, 30em);-webkit-box-shadow:0 1px 3px 1px var(--color-default, #74748c);box-shadow:0 1px 3px 1px var(--color-default, #74748c);-webkit-transform:translateX(100%);transform:translateX(100%)}";var a=t("traim_toggle",function(){function t(t){e(this,t);this.onChange=o(this,"changed",7);this.toggled=false;this._toggled=false}t.prototype.componentDidLoad=function(){this._toggled=this.toggled};t.prototype.isToggled=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._toggled]}))}))};t.prototype.watchToggled=function(t){this._toggled=t};t.prototype.toggle=function(){this._toggled=!this._toggled};t.prototype.handleToggle=function(t){t.preventDefault();this.toggle();this.onChange.emit(this._toggled)};t.prototype.render=function(){var t=this;return r("label",{class:"toggle",onClick:function(e){return t.handleToggle(e)}},r("input",{type:"checkbox","aria-checked":this._toggled.toString(),checked:this._toggled}),r("div",{class:"toggle__track"},r("div",{class:"toggle__handle"})),r("slot",null))};Object.defineProperty(t,"watchers",{get:function(){return{toggled:["watchToggled"]}},enumerable:false,configurable:true});return t}());a.style=n}}}));