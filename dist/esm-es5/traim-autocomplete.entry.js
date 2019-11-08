import { r as registerInstance, c as createEvent, h } from './core-7b09a8d3.js';
var TraimAutocomplete = /** @class */ (function () {
    function TraimAutocomplete(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.onSelect = createEvent(this, "select", 7);
        this.onSearch = createEvent(this, "search", 7);
    }
    TraimAutocomplete.prototype.setItems = function (items) {
        this.items = items;
        this.value ? this.open() : this.close();
    };
    TraimAutocomplete.prototype.select = function (item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.text;
        this.onSelect.emit(item);
        this.close();
    };
    TraimAutocomplete.prototype.search = function (e) {
        this.activeItem = null;
        this.value = e.target.value;
        var query = this.value;
        this.onSearch.emit(query);
    };
    TraimAutocomplete.prototype.open = function () {
        if (this.items.length) {
            this._isOpen = true;
        }
    };
    TraimAutocomplete.prototype.close = function () {
        this._isOpen = false;
    };
    TraimAutocomplete.prototype.handleKeyDown = function (ev) {
        var idx = this.items.indexOf(this.activeItem);
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
    };
    TraimAutocomplete.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "o-field o-field--autocomplete" }, h("input", { type: "search", class: "c-field", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: function (e) { return _this.search(e); }, onFocus: function () { return _this.open(); }, onClick: function () { return _this.open(); } }), this._isOpen && (h("div", { role: "menu", class: "c-card c-card--menu" }, this.items.map(function (item) {
            var isActiveClass = _this.activeItem === item ? 'c-card__control--active' : '';
            return (h("button", { role: "menuitem", class: "c-card__control " + isActiveClass, onClick: function () { return _this.select(item); } }, item.text));
        })))));
    };
    Object.defineProperty(TraimAutocomplete, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return TraimAutocomplete;
}());
export { TraimAutocomplete as traim_autocomplete };
