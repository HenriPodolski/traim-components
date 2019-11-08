import { r as registerInstance, c as createEvent, h } from './core-7b09a8d3.js';

const TraimAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.onSelect = createEvent(this, "select", 7);
        this.onSearch = createEvent(this, "search", 7);
    }
    setItems(items) {
        this.items = items;
        this.value ? this.open() : this.close();
    }
    select(item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.text;
        this.onSelect.emit(item);
        this.close();
    }
    search(e) {
        this.activeItem = null;
        this.value = e.target.value;
        const query = this.value;
        this.onSearch.emit(query);
    }
    open() {
        if (this.items.length) {
            this._isOpen = true;
        }
    }
    close() {
        this._isOpen = false;
    }
    handleKeyDown(ev) {
        let idx = this.items.indexOf(this.activeItem);
        switch (ev.key) {
            case 'ArrowDown': {
                ev.preventDefault();
                this.open();
                if (idx < this.items.length - 1) {
                    this.activeItem = this.items[idx + 1];
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (idx > 0) {
                    this.activeItem = this.items[idx - 1];
                }
                break;
            }
            case 'Enter': {
                if (this.activeItem) {
                    ev.preventDefault();
                    this.select(this.activeItem);
                }
            }
            case 'Escape': {
                this.close();
            }
        }
    }
    render() {
        return (h("div", { class: "o-field o-field--autocomplete" }, h("input", { type: "search", class: "c-field", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: (e) => this.search(e), onFocus: () => this.open(), onClick: () => this.open() }), this._isOpen && (h("div", { role: "menu", class: "c-card c-card--menu" }, this.items.map((item) => {
            const isActiveClass = this.activeItem === item ? 'c-card__control--active' : '';
            return (h("button", { role: "menuitem", class: `c-card__control ${isActiveClass}`, onClick: () => this.select(item) }, item.text));
        })))));
    }
    static get style() { return ":host{display:block}"; }
};

export { TraimAutocomplete as traim_autocomplete };
