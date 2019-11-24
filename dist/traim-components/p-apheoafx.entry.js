import{r as t,c as s,h as i}from"./p-f111a380.js";const e=class{constructor(i){t(this,i),this.items=[],this.onSelect=s(this,"selectAutocompleteItem",7),this.onSearch=s(this,"searchAutocompleteItem",7)}async setItems(t){this.items=t,this.value?this.open():this.close()}select(t){this.activeItem=t,this.selectedItem=t,this.value=t.key,this.onSelect.emit(t),this.close()}search(t){this.activeItem=null,this.value=t.target.value,this.onSearch.emit(this.value)}open(){this.items.length&&(this._isOpen=!0)}close(){this._isOpen=!1}handleKeyDown(t){let s=this.items.indexOf(this.activeItem);switch(t.key){case"ArrowDown":t.preventDefault(),this.open(),s<this.items.length-1&&(this.activeItem=this.items[s+1]);break;case"ArrowUp":t.preventDefault(),s>0&&(this.activeItem=this.items[s-1]);break;case"Enter":this.activeItem&&(t.preventDefault(),this.select(this.activeItem));case"Escape":this.close()}}render(){return i("div",{class:"autocomplete"},i("input",{type:"search",class:"c-field",placeholder:this.placeholder,autocomplete:"off",value:this.value,onInput:t=>this.search(t),onFocus:()=>this.open(),onClick:()=>this.open()}),this._isOpen&&i("div",{role:"menu",class:"c-card c-card--menu"},this.items.map(t=>i("button",{role:"menuitem",class:`c-card__control ${this.activeItem===t?"c-card__control--active":""}`,onClick:()=>this.select(t)},t.value))))}static get style(){return":host{display:block}.autocomplete .c-field{border-radius:0}.autocomplete:not(:first-child) .c-field{border-left-width:0}.autocomplete:first-child .c-field{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}.autocomplete:last-child .c-field{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}"}};export{e as traim_autocomplete};