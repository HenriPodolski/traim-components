var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):r(t.value).then(s,a)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-3016ee5f.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.g}],execute:function(){var o=t("traim_accordion",function(){function t(t){e(this,t);this.useCounter=false;this.onToggle=n(this,"toggle",7)}t.prototype.onTogglePane=function(t){var e=this.element.children[0];var n=t.detail;var i=t.target;var r=[].indexOf.call(e.children,i);this.onToggle.emit({idx:r,open:n})};t.prototype.render=function(){var t=this.useCounter?"has-counter":"";return i("div",{class:"accordion "+t},i("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width,100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]:before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right,6px);width:var(--accordion-counter-size,20px);height:var(--accordion-counter-size,20px);background-color:var(--accordion-counter-background-color,#fff);border-radius:50%;counter-increment:accordion;content:counter(accordion)}"},enumerable:true,configurable:true});return t}());var s=t("traim_accordion_pane",function(){function t(t){e(this,t);this._isOpen=false;this.open=false;this.empty=false;this.onToggle=n(this,"togglepane",7)}t.prototype.componentWillLoad=function(){this._isOpen=this.open};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=true;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=false;return[2]}))}))};t.prototype.toggle=function(){this._isOpen?this.close():this.show();this.onToggle.emit(this._isOpen)};t.prototype.isOpen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._isOpen]}))}))};t.prototype.render=function(){var t=this;var e=this._isOpen?"is-active":"";var n=this.empty?"is-empty":"";return[i("button",{role:"heading","aria-expanded":this._isOpen.toString(),tabindex:!this.empty?0:-1,class:"control "+e+" "+n,onClick:function(){return!t.empty&&t.toggle()},innerHTML:this.header}),i("section",{"aria-hidden":!this._isOpen,class:"pane"},i("slot",null))]};Object.defineProperty(t,"style",{get:function(){return":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);display:inline-block;max-width:100%;overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:.8}.control[aria-expanded]:after{position:absolute;top:.5em;right:.5em;width:1em;height:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:50%;content:\"\"}.control[aria-expanded][aria-expanded=true]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty:after{content:none}.control[aria-expanded].is-active{opacity:.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}"},enumerable:true,configurable:true});return t}());var a=t("traim_autocomplete",function(){function t(t){e(this,t);this.items=[];this.onSelect=n(this,"selectAutocompleteItem",7);this.onSearch=n(this,"searchAutocompleteItem",7)}t.prototype.setItems=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.items=t;this.value?this.open():this.close();return[2]}))}))};t.prototype.connectedCallback=function(){if(this.itemsJSON&&!this.items.length){try{var t=JSON.parse(this.itemsJSON);this.setItems(t);this.itemsJSON=""}catch(e){console.warn("Could not parse data in item-json for <traim-autocomplete>",e)}}};t.prototype.select=function(t){this.activeItem=t;this.selectedItem=t;this.value=t.key;this.onSelect.emit(t);this.close()};t.prototype.search=function(t){this.activeItem=null;this.value=t.target.value;var e=this.value;this.onSearch.emit(e)};t.prototype.open=function(){if(this.items.length){this._isOpen=true}};t.prototype.close=function(){this._isOpen=false};t.prototype.handleOuterClick=function(t){console.log(t.target);var e=t.target;if(e.matches('[for="'+this.uid+'"]')){console.log("matches",t.target);this.el.focus()}};t.prototype.handleKeyDown=function(t){var e=this.items.indexOf(this.activeItem);switch(t.key){case"ArrowDown":{t.preventDefault();this.open();if(e<this.items.length-1){this.activeItem=this.items[e+1]}break}case"ArrowUp":{t.preventDefault();if(e>0){this.activeItem=this.items[e-1]}break}case"Enter":{if(this.activeItem){t.preventDefault();this.select(this.activeItem)}}case"Escape":{this.close()}}};t.prototype.render=function(){var t=this;return i("div",{class:"autocomplete"},i("input",{id:this.uid,name:this.uid,type:"search",class:"c-field",placeholder:this.placeholder,autocomplete:"off",value:this.value,onInput:function(e){return t.search(e)},onFocus:function(){return t.open()},onClick:function(){return t.open()}}),this._isOpen&&i("div",{role:"menu",class:"c-card c-card--menu"},this.items.map((function(e){var n=t.activeItem===e?"c-card__control--active":"";return i("button",{role:"menuitem",class:"c-card__control "+n,onClick:function(){return t.select(e)}},e.value.title)}))))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{display:block}.autocomplete .c-field{border-radius:0}.autocomplete:not(:first-child) .c-field{border-left-width:0}.autocomplete:first-child .c-field{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}.autocomplete:last-child .c-field{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}"},enumerable:true,configurable:true});return t}())}}}));