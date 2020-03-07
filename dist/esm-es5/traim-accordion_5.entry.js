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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './core-705deb91.js';
var TraimAccordion = /** @class */ (function () {
    function TraimAccordion(hostRef) {
        registerInstance(this, hostRef);
        this.useCounter = false;
        this.onToggle = createEvent(this, "toggle", 7);
    }
    TraimAccordion.prototype.onTogglePane = function (ev) {
        var accordion = this.element.children[0];
        var open = ev.detail;
        var pane = ev.target;
        var idx = [].indexOf.call(accordion.children, pane);
        this.onToggle.emit({ idx: idx, open: open });
    };
    TraimAccordion.prototype.render = function () {
        var useCounterClass = this.useCounter ? 'has-counter' : '';
        return (h("div", { class: "accordion " + useCounterClass }, h("slot", null)));
    };
    Object.defineProperty(TraimAccordion.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraimAccordion, "style", {
        get: function () { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width,100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]:before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right,6px);width:var(--accordion-counter-size,20px);height:var(--accordion-counter-size,20px);background-color:var(--accordion-counter-background-color,#fff);border-radius:50%;counter-increment:accordion;content:counter(accordion)}"; },
        enumerable: true,
        configurable: true
    });
    return TraimAccordion;
}());
var TraimAccordionPane = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this._isOpen = false;
        this.open = false;
        this.empty = false;
        this.onToggle = createEvent(this, "togglepane", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this._isOpen = this.open;
    };
    class_1.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._isOpen = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._isOpen = false;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.toggle = function () {
        this._isOpen ? this.close() : this.show();
        this.onToggle.emit(this._isOpen);
    };
    class_1.prototype.isOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._isOpen];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var isOpenClass = this._isOpen ? 'is-active' : '';
        var isEmptyClass = this.empty ? 'is-empty' : '';
        return [
            h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), tabindex: !this.empty ? 0 : -1, class: "control " + isOpenClass + " " + isEmptyClass, onClick: function () { return !_this.empty && _this.toggle(); }, innerHTML: this.header }),
            h("section", { "aria-hidden": !this._isOpen, class: "pane" }, h("slot", null)),
        ];
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);display:inline-block;max-width:100%;overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:.8}.control[aria-expanded]:after{position:absolute;top:.5em;right:.5em;width:1em;height:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:50%;content:\"\"}.control[aria-expanded][aria-expanded=true]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty:after{content:none}.control[aria-expanded].is-active{opacity:.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var TraimAutocomplete = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.items = [];
        this.handleOuterClick = this.handleOuterClick.bind(this);
        this.onSelect = createEvent(this, "selectAutocomplete", 7);
        this.onSearch = createEvent(this, "searchAutocomplete", 7);
    }
    class_2.prototype.resetChangedHandler = function (newValue) {
        this.reset = newValue;
        if (this.reset) {
            this.resetField();
        }
    };
    class_2.prototype.emptyMessageChangedHandler = function (newValue) {
        this.emptyMessage = newValue;
    };
    class_2.prototype.itemsChangedHandler = function (newValue) {
        if (!newValue.length) {
            if (this.emptyMessage) {
                this.empty();
            }
            else {
                this.close();
            }
        }
        this.setItems(newValue);
    };
    class_2.prototype.setItems = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.items = items;
                this.value || this.emptyMessage ? this.open() : this.close();
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.connectedCallback = function () {
        if (this.itemsJSON && !this.items.length) {
            try {
                var items = JSON.parse(this.itemsJSON);
                this.setItems(items);
                this.itemsJSON = '';
            }
            catch (e) {
                console.warn('Could not parse data in item-json for <traim-autocomplete>', e);
            }
        }
    };
    class_2.prototype.select = function (item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.value.title;
        this.onSelect.emit(item);
        this.close();
    };
    class_2.prototype.search = function (e) {
        var _this = this;
        this.activeItem = null;
        this.value = e.target.value;
        var query = this.value;
        this.onSearch.emit(query);
        if (this.value) {
            var found = this.items.find(function (item) {
                return item.value.title.toLowerCase() === _this.value.toLowerCase();
            });
            if (found) {
                this.select(found);
            }
        }
    };
    class_2.prototype.open = function () {
        if (this.items.length || this.emptyMessage) {
            this._isOpen = true;
        }
    };
    class_2.prototype.close = function () {
        this._isOpen = false;
    };
    class_2.prototype.empty = function () {
        console.log('Empty message');
    };
    class_2.prototype.resetField = function () {
        this.el.shadowRoot.getElementById(this.uid).value = '';
        this.activeItem = null;
        this.value = '';
        this.onSearch.emit('');
    };
    class_2.prototype.handleOuterClick = function (evt) {
        var eventElement = evt.target;
        if (eventElement.matches("[for=\"" + this.uid + "\"]")) {
            var focusEl = this.el.shadowRoot.getElementById(this.uid);
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
    };
    class_2.prototype.handleKeyDown = function (evt) {
        var idx = this.items.indexOf(this.activeItem);
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
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "autocomplete" }, h("input", { id: this.uid, name: this.uid, type: "search", class: "autocomplete__input", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: function (e) { return _this.search(e); }, onFocus: function () { return _this.open(); }, onClick: function () { return _this.open(); } }), (this._isOpen) && (h("div", { role: "menu", class: "autocomplete__list" }, this.items.map(function (item) {
            var isActiveClass = _this.activeItem === item ? 'is-active' : '';
            return (h("button", { role: "menuitem", class: "autocomplete__list-item " + isActiveClass, onClick: function () { return _this.select(item); } }, item.value.title));
        }), this.emptyMessage && this.items.length === 0 && (h("div", { role: "menuitem", "aria-disabled": true, class: "autocomplete__empty" }, this.emptyMessage))))));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "reset": ["resetChangedHandler"],
                "emptyMessage": ["emptyMessageChangedHandler"],
                "items": ["itemsChangedHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{display:var(--autocomplete-display,block);-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--autocomplete-input-min-width,150px);width:var(--autocomplete-input-width,auto);max-width:var(--autocomplete-input-max-width,300px)}.autocomplete{position:relative;display:-ms-flexbox;display:flex}.autocomplete__input{width:100%;font-family:var(--autocomplete-input-font-family,Arial);font-size:var(--autocomplete-input-font-size,inherit);font-weight:var(--autocomplete-input-font-weight,normal);text-transform:var(--autocomplete-input-text-transform,none);padding:var(--autocomplete-input-padding-horizontal,3px) var(--autocomplete-input-padding-vertical,6px)}.autocomplete__input::-webkit-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::-moz-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input:-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__input::placeholder{color:var(--autocomplete-input-placeholder-color,grey)}.autocomplete__list{position:absolute;width:100%;top:100%;left:-1px;list-style:none outside;padding-left:0;margin:0;background-color:#fff;z-index:1;border-left:1px solid var(--autocomplete-list-border-color,#d3d3d3);border-right:1px solid var(--autocomplete-list-border-color,#d3d3d3);border-bottom:1px solid var(--autocomplete-list-border-color,#d3d3d3)}.autocomplete__list-item{-webkit-appearance:none;padding:var(--autocomplete-item-padding-horizontal,6px) var(--autocomplete-item-padding-vertical,12px);cursor:pointer;font-family:var(--autocomplete-item-font-family,inherit);font-size:var(--autocomplete-item-font-size,inherit);font-weight:var(--autocomplete-item-font-weight,normal);text-align:var(--autocomplete-item-text-align,left);border:none;display:block;background-color:var(--autocomplete-item-background-color,#fff);width:100%}.autocomplete__list-item:focus,.autocomplete__list-item:hover{background-color:var(--autocomplete-user-action-item-background-color,rgba(0,149,198,.3))}.autocomplete__list-item:focus{outline:2px solid var(--autocomplete-user-action-item-outline-color,rgba(0,149,198,.8));outline-offset:-2px}.autocomplete__list-item.is-active{background-color:var(--autocomplete-active-item-background-color,rgba(0,149,198,.3))}.autocomplete__empty{padding:var(--autocomplete-item-padding-horizontal,6px) var(--autocomplete-item-padding-vertical,12px);font-family:var(--autocomplete-item-font-family,inherit);font-size:var(--autocomplete-item-font-size,inherit);font-weight:var(--autocomplete-item-font-weight,normal);text-align:var(--autocomplete-item-text-align,left);border:none;display:block;background-color:var(--autocomplete-item-background-color,#fff);width:100%}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var TraimSliderAnimationEnum;
(function (TraimSliderAnimationEnum) {
    TraimSliderAnimationEnum["NONE"] = "";
    TraimSliderAnimationEnum["FADE"] = "is-fade-animation";
    TraimSliderAnimationEnum["SLIDE"] = "is-slide-animation";
})(TraimSliderAnimationEnum || (TraimSliderAnimationEnum = {}));
var TraimSlider = /** @class */ (function () {
    function TraimSlider(hostRef) {
        registerInstance(this, hostRef);
        this.controlLeftText = 'Previous';
        this.controlRightText = 'Next';
        this.animation = TraimSliderAnimationEnum.NONE;
        this.itemsPerSlide = 1;
        this.activeSlideIndex = 0;
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    TraimSlider.prototype.watchItemsPerSlide = function () {
        this.handleSlotChange();
    };
    TraimSlider.prototype.gotoSlide = function (slideIndex) {
        var _this = this;
        if (slideIndex < 0) {
            slideIndex = this.countSlides - 1;
        }
        else if (slideIndex > this.countSlides - 1) {
            slideIndex = 0;
        }
        var previousSlides = this.slideItems.filter(function (slide) { return slide.hasAttribute('previous'); });
        var currentSlides = this.slideItems.filter(function (slide) { return slide.hasAttribute('current'); });
        if (previousSlides.length) {
            previousSlides.forEach(function (previousSlide) { return previousSlide.removeAttribute('previous'); });
        }
        if (currentSlides.length) {
            currentSlides.forEach(function (currentSlide) {
                currentSlide.removeAttribute('current');
                currentSlide.setAttribute('previous', 'true');
            });
        }
        if (this.slideIndexes[slideIndex]) {
            // examples:
            // base 1: [[0], [1], [2]]
            // base 2: [[0,1], [2,3], [4,5]]
            // base 3: [[0,1,2], [3,4,5], [5,6,7]]
            this.slideIndexes[slideIndex].forEach(function (slideItemIndex) {
                if (_this.slideItems[slideItemIndex]) {
                    _this.slideItems[slideItemIndex].setAttribute('current', 'true');
                }
            });
            this.activeSlideIndex = slideIndex;
        }
    };
    TraimSlider.prototype.componentDidLoad = function () {
        if (!this.slotElement) {
            this.slotElement = this.slidesWrapperElement.querySelector('slot');
            this.slotElement.addEventListener('slotchange', this.handleSlotChange);
        }
        this.handleSlotChange();
    };
    TraimSlider.prototype.disconnectedCallback = function () {
        this.slotElement.removeEventListener('slotchange', this.handleSlotChange);
    };
    TraimSlider.prototype.handleSlotChange = function () {
        this.setupSlides();
    };
    TraimSlider.prototype.setupSlides = function () {
        var _this = this;
        this.slideItems = this.slotElement.assignedElements();
        this.countSlides = Math.floor(this.slideItems.length / this.itemsPerSlide);
        this.countSlides = this.countSlides ? this.countSlides : 1;
        this.slideIndexes = __spreadArrays(Array(this.countSlides).keys()).map(function (i) {
            var startItem = i * _this.itemsPerSlide;
            return __spreadArrays(Array(_this.itemsPerSlide).keys()).map(function (j) { return startItem + j; });
        });
        var fractions = __spreadArrays(Array(this.itemsPerSlide).keys()).map(function () {
            return '1fr';
        });
        this.slidesWrapperElement.style.gridTemplateColumns = fractions.join(' ');
        this.gotoSlide(this.activeSlideIndex);
    };
    TraimSlider.prototype.render = function () {
        var _this = this;
        var animationClass = this.animation;
        return (h(Host, null, h("div", { class: "slider " + animationClass }, h("section", { ref: function (el) { return _this.slidesWrapperElement = el; }, class: "slider__slides" }, h("slot", null)), this.countSlides > 1 && this.controls && (h("button", { onClick: function () { return _this.gotoSlide(_this.activeSlideIndex - 1); }, role: "button", class: "slider__button is-left", "aria-label": this.controlLeftText }, h("span", { "aria-hidden": "true", class: "slider__button-inner" }, "\u276E"))), this.countSlides > 1 && this.controls && (h("button", { onClick: function () { return _this.gotoSlide(_this.activeSlideIndex + 1); }, role: "button", class: "slider__button is-right", "aria-label": this.controlRightText }, h("span", { "aria-hidden": "true", class: "slider__button-inner" }, "\u276F"))))));
    };
    Object.defineProperty(TraimSlider, "watchers", {
        get: function () {
            return {
                "itemsPerSlide": ["watchItemsPerSlide"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraimSlider, "style", {
        get: function () { return ":host{display:block}.slider{position:relative}.slider__slides{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-column-gap:24px}.slider__button{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--slider-control-button-font-size,14px);padding:var(--slider-padding-horizontal,8px) var(--slider-padding-vertical,16px);color:var(--slider-control-button-color,#000);background-color:var(--slider-control-button-background-color,#f1f1f1)}.slider__button:hover{background-color:var(--slider-control-button-hover-background-color,#ccc)}.slider__button.is-left{left:0}.slider__button.is-right{right:0}"; },
        enumerable: true,
        configurable: true
    });
    return TraimSlider;
}());
var TraimSliderSlide = /** @class */ (function () {
    function TraimSliderSlide(hostRef) {
        registerInstance(this, hostRef);
    }
    TraimSliderSlide.prototype.render = function () {
        var activeClass = this.current ? 'is-active' : '';
        return (h(Host, null, h("div", { class: "slider-slide " + activeClass }, h("slot", null))));
    };
    Object.defineProperty(TraimSliderSlide, "style", {
        get: function () { return ":host{display:block}.slider-slide{display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:40px}.slider-slide.is-active{display:-ms-flexbox;display:flex}"; },
        enumerable: true,
        configurable: true
    });
    return TraimSliderSlide;
}());
export { TraimAccordion as traim_accordion, TraimAccordionPane as traim_accordion_pane, TraimAutocomplete as traim_autocomplete, TraimSlider as traim_slider, TraimSliderSlide as traim_slider_slide };
