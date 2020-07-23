var __awaiter=this&&this.__awaiter||function(e,t,o,i){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function a(e){try{l(i.next(e))}catch(t){n(t)}}function s(e){try{l(i["throw"](e))}catch(t){n(t)}}function l(e){e.done?o(e.value):r(e.value).then(a,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,r,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(o)try{if(i=1,r&&(n=a[0]&2?r["return"]:a[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;if(r=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(n=o.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(a[0]===6&&o.label<n[1]){o.label=n[1];n=a;break}if(n&&o.label<n[2]){o.label=n[2];o.ops.push(a);break}if(n[2])o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(s){a=[6,s];r=0}finally{i=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var i=Array(e),r=0,t=0;t<o;t++)for(var n=arguments[t],a=0,s=n.length;a<s;a++,r++)i[r]=n[a];return i};System.register(["./p-ef001041.system.js"],(function(e){"use strict";var t,o,i,r,n;return{setters:[function(e){t=e.r;o=e.c;i=e.h;r=e.g;n=e.H}],execute:function(){var a=":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:#ffa500;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000, 0.6);--box-shadow-high:0 5px 10px -3px rgba(#000, 0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000, 0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000, 0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width, 100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]::before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right, 6px);width:var(--accordion-counter-size, 20px);height:var(--accordion-counter-size, 20px);background-color:var(--accordion-counter-background-color, white);border-radius:50%;counter-increment:accordion;content:counter(accordion)}";var s=e("traim_accordion",function(){function e(e){t(this,e);this.onToggle=o(this,"toggle",7);this.useCounter=false}e.prototype.onTogglePane=function(e){var t=this.element.children[0];var o=e.detail;var i=e.target;var r=[].indexOf.call(t.children,i);this.onToggle.emit({idx:r,open:o})};e.prototype.render=function(){var e=this.useCounter?"has-counter":"";return i("div",{class:"accordion "+e},i("slot",null))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());s.style=a;var l=':root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:#ffa500;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000, 0.6);--box-shadow-high:0 5px 10px -3px rgba(#000, 0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000, 0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000, 0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;display:inline-block;max-width:100%;margin:0;padding:var(--spacing-small);overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:0.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:0.8}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:0.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:0.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:0.8}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]::after{position:absolute;top:0.5em;right:0.5em;width:1em;height:1em;background-image:url("data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==");background-repeat:no-repeat;background-position:center;content:""}.control[aria-expanded][aria-expanded=true]::after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty::after{content:none}.control[aria-expanded].is-active{opacity:0.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;margin:0;padding:var(--spacing-small);color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}';var c=e("traim_accordion_pane",function(){function e(e){t(this,e);this.onToggle=o(this,"togglepane",7);this._isOpen=false;this.open=false;this.empty=false}e.prototype.componentWillLoad=function(){this._isOpen=this.open};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._isOpen=true;return[2]}))}))};e.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._isOpen=false;return[2]}))}))};e.prototype.toggle=function(){this._isOpen?this.close():this.show();this.onToggle.emit(this._isOpen)};e.prototype.isOpen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this._isOpen]}))}))};e.prototype.render=function(){var e=this;var t=this._isOpen?"is-active":"";var o=this.empty?"is-empty":"";return[i("button",{role:"heading","aria-expanded":this._isOpen.toString(),tabindex:!this.empty?0:-1,class:"control "+t+" "+o,onClick:function(){return!e.empty&&e.toggle()},innerHTML:this.header}),i("section",{"aria-hidden":!this._isOpen,class:"pane"},i("slot",null))]};return e}());c.style=l;var d=":host{display:var(--autocomplete-display, block);-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--autocomplete-input-min-width, 150px);width:var(--autocomplete-input-width, auto);max-width:var(--autocomplete-input-max-width, 300px)}.autocomplete{position:relative;display:-ms-flexbox;display:flex}.autocomplete__input{width:100%;font-family:var(--autocomplete-input-font-family, Arial);font-size:var(--autocomplete-input-font-size, inherit);font-weight:var(--autocomplete-input-font-weight, normal);text-transform:var(--autocomplete-input-text-transform, none);padding:var(--autocomplete-input-padding-horizontal, 3px) var(--autocomplete-input-padding-vertical, 6px)}.autocomplete__input::-webkit-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::-moz-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input:-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__list{position:absolute;width:100%;top:100%;left:-1px;list-style:none outside;padding-left:0;margin:0;background-color:white;z-index:1;border-left:1px solid var(--autocomplete-list-border-color, lightgray);border-right:1px solid var(--autocomplete-list-border-color, lightgray);border-bottom:1px solid var(--autocomplete-list-border-color, lightgray)}.autocomplete__list-item{-webkit-appearance:none;padding:var(--autocomplete-item-padding-horizontal, 6px) var(--autocomplete-item-padding-vertical, 12px);cursor:pointer;font-family:var(--autocomplete-item-font-family, inherit);font-size:var(--autocomplete-item-font-size, inherit);font-weight:var(--autocomplete-item-font-weight, normal);text-align:var(--autocomplete-item-text-align, left);border:none;display:block;background-color:var(--autocomplete-item-background-color, white);width:100%}.autocomplete__list-item:hover,.autocomplete__list-item:focus{background-color:var(--autocomplete-user-action-item-background-color, rgba(0, 149, 198, 0.3))}.autocomplete__list-item:focus{outline:2px solid var(--autocomplete-user-action-item-outline-color, rgba(0, 149, 198, 0.8));outline-offset:-2px}.autocomplete__list-item.is-active{background-color:var(--autocomplete-active-item-background-color, rgba(0, 149, 198, 0.3))}.autocomplete__empty{padding:var(--autocomplete-item-padding-horizontal, 6px) var(--autocomplete-item-padding-vertical, 12px);font-family:var(--autocomplete-item-font-family, inherit);font-size:var(--autocomplete-item-font-size, inherit);font-weight:var(--autocomplete-item-font-weight, normal);text-align:var(--autocomplete-item-text-align, left);border:none;display:block;background-color:var(--autocomplete-item-background-color, white);width:100%}";var u=e("traim_autocomplete",function(){function e(e){t(this,e);this.onSelect=o(this,"selectAutocomplete",7);this.onSearch=o(this,"searchAutocomplete",7);this.items=[];this.handleOuterClick=this.handleOuterClick.bind(this)}e.prototype.resetChangedHandler=function(e){this.reset=e;if(this.reset){this.resetField()}};e.prototype.emptyMessageChangedHandler=function(e){this.emptyMessage=e};e.prototype.selectedItemChangedHandler=function(e){console.log("selectedItem",e);if(e.key&&e.value&&e.value.title){this.select(e)}};e.prototype.itemsChangedHandler=function(e){if(!e.length){if(this.emptyMessage){this.empty()}else{this.close()}}this.setItems(e)};e.prototype.setItems=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.items=e;this.value||this.emptyMessage?this.open():this.close();return[2]}))}))};e.prototype.connectedCallback=function(){if(this.itemsJSON&&!this.items.length){try{var e=JSON.parse(this.itemsJSON);this.setItems(e);this.itemsJSON=""}catch(t){console.warn("Could not parse data in item-json for <traim-autocomplete>",t)}}};e.prototype.select=function(e){this.activeItem=e;this.selectedItem=e;this.value=e.value.title;this.onSelect.emit(e);this.close()};e.prototype.search=function(e){var t=this;this.activeItem=null;this.value=e.target.value;var o=this.value;this.onSearch.emit(o);if(this.value){var i=this.items.find((function(e){return e.value.title.toLowerCase()===t.value.toLowerCase()}));if(i){this.select(i)}}};e.prototype.open=function(){if(this.items.length||this.emptyMessage){this._isOpen=true}};e.prototype.close=function(){this._isOpen=false};e.prototype.empty=function(){console.log("Empty message")};e.prototype.resetField=function(){this.el.shadowRoot.getElementById(this.uid).value="";this.activeItem=null;this.value="";this.onSearch.emit("")};e.prototype.handleOuterClick=function(e){var t=e.target;if(t.matches('[for="'+this.uid+'"]')){var o=this.el.shadowRoot.getElementById(this.uid);if(o){o.focus()}}else if(!this.el.contains(t)){if(t.matches('[type="reset"]')&&t.form.contains(this.el)){this.resetField()}this.close()}};e.prototype.handleKeyDown=function(e){var t=this.items.indexOf(this.activeItem);switch(e.key){case"ArrowDown":{e.preventDefault();this.open();if(t<this.items.length-1){this.activeItem=this.items[t+1]}break}case"ArrowUp":{e.preventDefault();if(t>0){this.activeItem=this.items[t-1]}break}case"Enter":{if(this.activeItem){e.preventDefault();this.select(this.activeItem);this.close()}break}case"Escape":{this.close();break}}};e.prototype.render=function(){var e=this;return i("div",{class:"autocomplete"},i("input",{id:this.uid,name:this.uid,type:"search",class:"autocomplete__input",placeholder:this.placeholder,autocomplete:"off",value:this.value,onInput:function(t){return e.search(t)},onFocus:function(){return e.open()},onClick:function(){return e.open()}}),this._isOpen&&i("div",{role:"menu",class:"autocomplete__list"},this.items.map((function(t){var o=e.activeItem===t?"is-active":"";return i("button",{role:"menuitem",class:"autocomplete__list-item "+o,onClick:function(){return e.select(t)}},t.value.title)})),this.emptyMessage&&this.items.length===0&&i("div",{role:"menuitem","aria-disabled":true,class:"autocomplete__empty"},this.emptyMessage)))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{reset:["resetChangedHandler"],emptyMessage:["emptyMessageChangedHandler"],selectedItem:["selectedItemChangedHandler"],items:["itemsChangedHandler"]}},enumerable:false,configurable:true});return e}());u.style=d;var p;(function(e){e["NONE"]="";e["FADE"]="is-fade-animation";e["SLIDE"]="is-slide-animation"})(p||(p={}));var h=":host{display:block}.slider{position:relative}.slider__slides{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-column-gap:24px}.slider__button{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--slider-control-button-font-size, 14px);padding:var(--slider-padding-horizontal, 8px) var(--slider-padding-vertical, 16px);color:var(--slider-control-button-color, #000);background-color:var(--slider-control-button-background-color, #F1F1F1)}.slider__button:hover{background-color:var(--slider-control-button-hover-background-color, #CCC)}.slider__button.is-left{left:var(--slider-control-button-left, 0)}.slider__button.is-right{right:var(--slider-control-button-right, 0)}";var m=e("traim_slider",function(){function e(e){t(this,e);this.controlLeftText="Previous";this.controlRightText="Next";this.animation=p.NONE;this.itemsPerSlide=1;this.activeSlideIndex=0;this.handleSlotChange=this.handleSlotChange.bind(this)}e.prototype.watchItemsPerSlide=function(){this.handleSlotChange()};e.prototype.gotoSlide=function(e){var t=this;if(e<0){e=this.countSlides-1}else if(e>this.countSlides-1){e=0}var o=this.slideItems.filter((function(e){return e.hasAttribute("previous")}));var i=this.slideItems.filter((function(e){return e.hasAttribute("current")}));if(o.length){o.forEach((function(e){return e.removeAttribute("previous")}))}if(i.length){i.forEach((function(e){e.removeAttribute("current");e.setAttribute("previous","true")}))}if(this.slideIndexes[e]){this.slideIndexes[e].forEach((function(e){if(t.slideItems[e]){t.slideItems[e].setAttribute("current","true")}}));this.activeSlideIndex=e}};e.prototype.componentDidLoad=function(){if(!this.slotElement){this.slotElement=this.slidesWrapperElement.querySelector("slot");this.slotElement.addEventListener("slotchange",this.handleSlotChange)}this.handleSlotChange()};e.prototype.disconnectedCallback=function(){this.slotElement.removeEventListener("slotchange",this.handleSlotChange)};e.prototype.handleSlotChange=function(){this.setupSlides()};e.prototype.setupSlides=function(){var e=this;this.slideItems=this.slotElement.assignedElements();this.countSlides=Math.floor(this.slideItems.length/this.itemsPerSlide);this.countSlides=this.countSlides?this.countSlides:1;this.slideIndexes=__spreadArrays(Array(this.countSlides).keys()).map((function(t){var o=t*e.itemsPerSlide;return __spreadArrays(Array(e.itemsPerSlide).keys()).map((function(e){return o+e}))}));var t=__spreadArrays(Array(this.itemsPerSlide).keys()).map((function(){return"1fr"}));this.slidesWrapperElement.style.gridTemplateColumns=t.join(" ");this.gotoSlide(this.activeSlideIndex)};e.prototype.render=function(){var e=this;var t=this.animation;return i(n,null,i("div",{class:"slider "+t},i("section",{ref:function(t){return e.slidesWrapperElement=t},class:"slider__slides"},i("slot",null)),this.countSlides>1&&this.controls&&i("button",{onClick:function(){return e.gotoSlide(e.activeSlideIndex-1)},role:"button",class:"slider__button is-left","aria-label":this.controlLeftText},i("span",{"aria-hidden":"true",class:"slider__button-inner"},"❮")),this.countSlides>1&&this.controls&&i("button",{onClick:function(){return e.gotoSlide(e.activeSlideIndex+1)},role:"button",class:"slider__button is-right","aria-label":this.controlRightText},i("span",{"aria-hidden":"true",class:"slider__button-inner"},"❯"))))};Object.defineProperty(e,"watchers",{get:function(){return{itemsPerSlide:["watchItemsPerSlide"]}},enumerable:false,configurable:true});return e}());m.style=h;var f=":host{display:block}.slider-slide{display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:40px}.slider-slide.is-active{display:-ms-flexbox;display:flex}";var g=e("traim_slider_slide",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=this.current?"is-active":"";return i(n,null,i("div",{class:"slider-slide "+e},i("slot",null)))};return e}());g.style=f}}}));