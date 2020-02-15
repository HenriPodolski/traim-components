import { r as registerInstance, c as createEvent, h, g as getElement } from './core-5e402d93.js';

const TraimAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.useCounter = false;
        this.onToggle = createEvent(this, "toggle", 7);
    }
    onTogglePane(ev) {
        const accordion = this.element.children[0];
        const open = ev.detail;
        const pane = ev.target;
        const idx = [].indexOf.call(accordion.children, pane);
        this.onToggle.emit({ idx, open });
    }
    render() {
        const useCounterClass = this.useCounter ? 'has-counter' : '';
        return (h("div", { class: `accordion ${useCounterClass}` }, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width,100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]:before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right,6px);width:var(--accordion-counter-size,20px);height:var(--accordion-counter-size,20px);background-color:var(--accordion-counter-background-color,#fff);border-radius:50%;counter-increment:accordion;content:counter(accordion)}"; }
};

const TraimAccordionPane = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._isOpen = false;
        this.open = false;
        this.empty = false;
        this.onToggle = createEvent(this, "togglepane", 7);
    }
    componentWillLoad() {
        this._isOpen = this.open;
    }
    async show() {
        this._isOpen = true;
    }
    async close() {
        this._isOpen = false;
    }
    toggle() {
        this._isOpen ? this.close() : this.show();
        this.onToggle.emit(this._isOpen);
    }
    async isOpen() {
        return this._isOpen;
    }
    render() {
        const isOpenClass = this._isOpen ? 'is-active' : '';
        const isEmptyClass = this.empty ? 'is-empty' : '';
        return [
            h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), tabindex: !this.empty ? 0 : -1, class: `control ${isOpenClass} ${isEmptyClass}`, onClick: () => !this.empty && this.toggle(), innerHTML: this.header }),
            h("section", { "aria-hidden": !this._isOpen, class: `pane` }, h("slot", null)),
        ];
    }
    static get style() { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);display:inline-block;max-width:100%;overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:.8}.control[aria-expanded]:after{position:absolute;top:.5em;right:.5em;width:1em;height:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:50%;content:\"\"}.control[aria-expanded][aria-expanded=true]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty:after{content:none}.control[aria-expanded].is-active{opacity:.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}"; }
};

const TraimAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.handleOuterClick = this.handleOuterClick.bind(this);
        this.onSelect = createEvent(this, "selectAutocomplete", 7);
        this.onSearch = createEvent(this, "searchAutocomplete", 7);
    }
    resetChangedHandler(newValue) {
        this.reset = newValue;
        if (this.reset) {
            this.resetField();
        }
    }
    emptyMessageChangedHandler(newValue) {
        this.emptyMessage = newValue;
    }
    itemsChangedHandler(newValue) {
        if (!newValue.length) {
            if (this.emptyMessage) {
                this.empty();
            }
            else {
                this.close();
            }
        }
        this.setItems(newValue);
    }
    async setItems(items) {
        this.items = items;
        this.value || this.emptyMessage ? this.open() : this.close();
    }
    connectedCallback() {
        if (this.itemsJSON && !this.items.length) {
            try {
                const items = JSON.parse(this.itemsJSON);
                this.setItems(items);
                this.itemsJSON = '';
            }
            catch (e) {
                console.warn('Could not parse data in item-json for <traim-autocomplete>', e);
            }
        }
    }
    select(item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.value.title;
        this.onSelect.emit(item);
        this.close();
    }
    search(e) {
        this.activeItem = null;
        this.value = e.target.value;
        const query = this.value;
        this.onSearch.emit(query);
        if (this.value) {
            const found = this.items.find((item) => {
                return item.value.title.toLowerCase() === this.value.toLowerCase();
            });
            if (found) {
                this.select(found);
            }
        }
    }
    open() {
        if (this.items.length || this.emptyMessage) {
            this._isOpen = true;
        }
    }
    close() {
        this._isOpen = false;
    }
    empty() {
        console.log('Empty message');
    }
    resetField() {
        this.el.shadowRoot.getElementById(this.uid).value = '';
        this.activeItem = null;
        this.value = '';
        this.onSearch.emit('');
    }
    handleOuterClick(evt) {
        const eventElement = evt.target;
        if (eventElement.matches(`[for="${this.uid}"]`)) {
            const focusEl = this.el.shadowRoot.getElementById(this.uid);
            if (focusEl) {
                focusEl.focus();
            }
        }
        else if (!this.el.contains(eventElement)) {
            if (eventElement.matches('[type="reset"]') &&
                eventElement.form.contains(this.el)) {
                this.resetField();
            }
            this.close();
        }
    }
    handleKeyDown(evt) {
        let idx = this.items.indexOf(this.activeItem);
        switch (evt.key) {
            case 'ArrowDown': {
                evt.preventDefault();
                this.open();
                if (idx < this.items.length - 1) {
                    this.activeItem = this.items[idx + 1];
                }
                break;
            }
            case 'ArrowUp': {
                evt.preventDefault();
                if (idx > 0) {
                    this.activeItem = this.items[idx - 1];
                }
                break;
            }
            case 'Enter': {
                if (this.activeItem) {
                    evt.preventDefault();
                    this.select(this.activeItem);
                    this.close();
                }
                break;
            }
            case 'Escape': {
                this.close();
                break;
            }
        }
    }
    render() {
        return (h("div", { class: "autocomplete" }, h("input", { id: this.uid, name: this.uid, type: "search", class: "autocomplete__input", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: (e) => this.search(e), onFocus: () => this.open(), onClick: () => this.open() }), (this._isOpen) && (h("div", { role: "menu", class: "autocomplete__list" }, this.items.map((item) => {
            const isActiveClass = this.activeItem === item ? 'is-active' : '';
            return (h("button", { role: "menuitem", class: `autocomplete__list-item ${isActiveClass}`, onClick: () => this.select(item) }, item.value.title));
        }), this.emptyMessage && this.items.length === 0 && (h("div", { role: "menuitem", "aria-disabled": true, class: "autocomplete__empty" }, this.emptyMessage))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "reset": ["resetChangedHandler"],
        "emptyMessage": ["emptyMessageChangedHandler"],
        "items": ["itemsChangedHandler"]
    }; }
    static get style() { return ":host{display:var(--autocomplete-display,block);-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--autocomplete-input-min-width,150px);width:var(--autocomplete-input-width,auto);max-width:var(--autocomplete-input-max-width,300px)}.autocomplete{position:relative;display:-ms-flexbox;display:flex}.autocomplete__input{width:100%;font-family:var(--autocomplete-input-font-family,Arial);font-size:var(--autocomplete-input-font-size,inherit);font-weight:var(--autocomplete-input-font-weight,normal);text-transform:var(--autocomplete-input-text-transform,none);padding:var(--autocomplete-input-padding-horizontal,3px) var(--autocomplete-input-padding-vertical,6px)}.autocomplete__input::-webkit-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::-moz-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input:-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__list{position:absolute;width:100%;top:100%;left:-1px;list-style:none outside;padding-left:0;margin:0;background-color:#fff;z-index:1;border-left:1px solid var(--autocomplete-list-border-color,#d3d3d3);border-right:1px solid var(--autocomplete-list-border-color,#d3d3d3);border-bottom:1px solid var(--autocomplete-list-border-color,#d3d3d3)}.autocomplete__list-item{-webkit-appearance:none;padding:var(--autocomplete-item-padding-horizontal,6px) var(--autocomplete-item-padding-vertical,12px);cursor:pointer;font-family:var(--autocomplete-item-font-family,inherit);font-size:var(--autocomplete-item-font-size,inherit);font-weight:var(--autocomplete-item-font-weight,normal);text-align:var(--autocomplete-item-text-align,left);border:none;display:block;background-color:var(--autocomplete-item-background-color,#fff);width:100%}.autocomplete__list-item:focus,.autocomplete__list-item:hover{background-color:var(--autocomplete-user-action-item-background-color,rgba(0,149,198,.3))}.autocomplete__list-item:focus{outline:2px solid var(--autocomplete-user-action-item-outline-color,rgba(0,149,198,.8));outline-offset:-2px}.autocomplete__list-item.is-active{background-color:var(--autocomplete-active-item-background-color,rgba(0,149,198,.3))}.autocomplete__empty{padding:var(--autocomplete-item-padding-horizontal,6px) var(--autocomplete-item-padding-vertical,12px);font-family:var(--autocomplete-item-font-family,inherit);font-size:var(--autocomplete-item-font-size,inherit);font-weight:var(--autocomplete-item-font-weight,normal);text-align:var(--autocomplete-item-text-align,left);border:none;display:block;background-color:var(--autocomplete-item-background-color,#fff);width:100%}"; }
};

export { TraimAccordion as traim_accordion, TraimAccordionPane as traim_accordion_pane, TraimAutocomplete as traim_autocomplete };
