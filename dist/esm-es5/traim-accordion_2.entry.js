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
import { r as registerInstance, c as createEvent, h, g as getElement } from './core-04a1e93f.js';
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
        get: function () { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:100%;padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius);counter-reset:accordion}.accordion .control[aria-expanded]:before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right,6px);counter-increment:accordion;content:counter(accordion);width:var(--accordion-counter-size,20px);height:var(--accordion-counter-size,20px);background-color:var(--accordion-counter-background-color,#fff);border-radius:50%}"; },
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
export { TraimAccordion as traim_accordion, TraimAccordionPane as traim_accordion_pane };
