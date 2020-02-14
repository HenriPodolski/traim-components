import{r as t,c as s,h as i,g as e}from"./p-dacc95cd.js";const h=class{constructor(i){t(this,i),this.useCounter=!1,this.onToggle=s(this,"toggle",7)}onTogglePane(t){const s=t.detail,i=[].indexOf.call(this.element.children[0].children,t.target);this.onToggle.emit({idx:i,open:s})}render(){return i("div",{class:`accordion ${this.useCounter?"has-counter":""}`},i("slot",null))}get element(){return e(this)}static get style(){return":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width,100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]:before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right,6px);width:var(--accordion-counter-size,20px);height:var(--accordion-counter-size,20px);background-color:var(--accordion-counter-background-color,#fff);border-radius:50%;counter-increment:accordion;content:counter(accordion)}"}},c=class{constructor(i){t(this,i),this._isOpen=!1,this.open=!1,this.empty=!1,this.onToggle=s(this,"togglepane",7)}componentWillLoad(){this._isOpen=this.open}async show(){this._isOpen=!0}async close(){this._isOpen=!1}toggle(){this._isOpen?this.close():this.show(),this.onToggle.emit(this._isOpen)}async isOpen(){return this._isOpen}render(){const t=this._isOpen?"is-active":"",s=this.empty?"is-empty":"";return[i("button",{role:"heading","aria-expanded":this._isOpen.toString(),tabindex:this.empty?-1:0,class:`control ${t} ${s}`,onClick:()=>!this.empty&&this.toggle(),innerHTML:this.header}),i("section",{"aria-hidden":!this._isOpen,class:"pane"},i("slot",null))]}static get style(){return":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);display:inline-block;max-width:100%;overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:.8}.control[aria-expanded]:after{position:absolute;top:.5em;right:.5em;width:1em;height:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:50%;content:\"\"}.control[aria-expanded][aria-expanded=true]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty:after{content:none}.control[aria-expanded].is-active{opacity:.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}"}},o=class{constructor(i){t(this,i),this.items=[],this.handleOuterClick=this.handleOuterClick.bind(this),this.onSelect=s(this,"selectAutocompleteItem",7),this.onSearch=s(this,"searchAutocompleteItem",7)}async setItems(t){this.items=t,this.value?this.open():this.close()}connectedCallback(){if(this.itemsJSON&&!this.items.length)try{const t=JSON.parse(this.itemsJSON);this.setItems(t),this.itemsJSON=""}catch(t){console.warn("Could not parse data in item-json for <traim-autocomplete>",t)}}select(t){this.activeItem=t,this.selectedItem=t,this.value=t.key,this.onSelect.emit(t),this.close()}search(t){this.activeItem=null,this.value=t.target.value,this.onSearch.emit(this.value)}open(){this.items.length&&(this._isOpen=!0)}close(){this._isOpen=!1}handleOuterClick(t){if(console.log(t.target),t.target.matches(`[for="${this.uid}"]`)){console.log("matches",t.target);const s=this.el.querySelector("input");console.log(s),s&&s.focus()}}handleKeyDown(t){let s=this.items.indexOf(this.activeItem);switch(t.key){case"ArrowDown":t.preventDefault(),this.open(),s<this.items.length-1&&(this.activeItem=this.items[s+1]);break;case"ArrowUp":t.preventDefault(),s>0&&(this.activeItem=this.items[s-1]);break;case"Enter":this.activeItem&&(t.preventDefault(),this.select(this.activeItem));case"Escape":this.close()}}render(){return i("div",{class:"autocomplete"},i("input",{id:this.uid,name:this.uid,type:"search",class:"c-field",placeholder:this.placeholder,autocomplete:"off",value:this.value,onInput:t=>this.search(t),onFocus:()=>this.open(),onClick:()=>this.open()}),this._isOpen&&i("div",{role:"menu",class:"c-card c-card--menu"},this.items.map(t=>i("button",{role:"menuitem",class:`c-card__control ${this.activeItem===t?"c-card__control--active":""}`,onClick:()=>this.select(t)},t.value.title))))}get el(){return e(this)}static get style(){return":host{display:block}.autocomplete .c-field{border-radius:0}.autocomplete:not(:first-child) .c-field{border-left-width:0}.autocomplete:first-child .c-field{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}.autocomplete:last-child .c-field{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}"}};export{h as traim_accordion,c as traim_accordion_pane,o as traim_autocomplete};