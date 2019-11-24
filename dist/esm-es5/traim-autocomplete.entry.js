var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h } from './core-7b09a8d3.js';
var TraimAutocomplete = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.onSelect = createEvent(this, "selectAutocompleteItem", 7);
        this.onSearch = createEvent(this, "searchAutocompleteItem", 7);
    }
    class_1.prototype.setItems = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.items = items;
                this.value ? this.open() : this.close();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.select = function (item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.key;
        this.onSelect.emit(item);
        this.close();
    };
    class_1.prototype.search = function (e) {
        this.activeItem = null;
        this.value = e.target.value;
        var query = this.value;
        this.onSearch.emit(query);
    };
    class_1.prototype.open = function () {
        if (this.items.length) {
            this._isOpen = true;
        }
    };
    class_1.prototype.close = function () {
        this._isOpen = false;
    };
    class_1.prototype.handleKeyDown = function (ev) {
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
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "autocomplete" }, h("input", { type: "search", class: "c-field", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: function (e) { return _this.search(e); }, onFocus: function () { return _this.open(); }, onClick: function () { return _this.open(); } }), this._isOpen && (h("div", { role: "menu", class: "c-card c-card--menu" }, this.items.map(function (item) {
            var isActiveClass = _this.activeItem === item ? 'c-card__control--active' : '';
            return (h("button", { role: "menuitem", class: "c-card__control " + isActiveClass, onClick: function () { return _this.select(item); } }, item.value));
        })))));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{display:block}.autocomplete .c-field{border-radius:0}.autocomplete:not(:first-child) .c-field{border-left-width:0}.autocomplete:first-child .c-field{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}.autocomplete:last-child .c-field{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { TraimAutocomplete as traim_autocomplete };
