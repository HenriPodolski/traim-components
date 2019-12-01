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
import { r as registerInstance, c as createEvent, h, g as getElement } from './core-849a1660.js';
var TraimTabs = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.onChange = createEvent(this, "changeTab", 7);
    }
    class_1.prototype.componentWillLoad = function () {
        this.tabs = Array.from(this.elem.querySelectorAll('traim-tab'));
    };
    class_1.prototype.changeTabHandler = function () {
        this.tabs = Array.from(this.elem.querySelectorAll('traim-tab'));
    };
    class_1.prototype.currentTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.tabs.findIndex(function (tab) { return tab.open; })];
            });
        });
    };
    class_1.prototype.openTab = function (tabIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.tabs[tabIndex].disabled) {
                    this.tabs = this.tabs.map(function (tab) {
                        tab.open = false;
                        return tab;
                    });
                    this.tabs[tabIndex].open = true;
                    this.onChange.emit({ idx: tabIndex });
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "tabs" }, h("div", { role: "tablist", class: "tabs__tablist" }, h("nav", { class: "tabs__nav" }, h("ul", { class: "tabs__headings" }, this.tabs.map(function (tab, i) {
            var openClass = tab.open ? 'is-active' : '';
            return (h("li", { class: "tabs__tab" }, h("button", { role: "tab", disabled: tab.disabled, class: "tabs__heading " + openClass, onClick: function () { return _this.openTab(i); } }, tab.header)));
        }))), h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "elem", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.tabs__tablist[role=tablist]{display:block}.tabs__headings{display:-ms-flexbox;display:flex;text-align:center;list-style:none outside;margin:0;padding:0}.tabs__nav{overflow:hidden}.tabs__nav .tabs__headings{overflow-x:auto;overflow-y:hidden}.tabs__heading[role=tab]{position:relative;width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--tab-padding-top,0) var(--tab-padding-left,0) var(--tab-padding-bottom,0) var(--tab-padding-right,0);display:block;-ms-flex:1;flex:1;margin:0 var(--tab-margin-left) 0 var(--tab-margin-right);cursor:pointer;white-space:nowrap;text-overflow:ellipsis;font-family:var(--tab-font-family,inherit);font-size:var(--tab-font-size,var(--text-font-size-medium));color:var(--tab-color);-webkit-transition:color .3s;transition:color .3s}.tabs__heading[role=tab]:disabled,.tabs__heading[role=tab][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.tabs__heading[role=tab]:first-of-type{margin:0 0 0 var(--tab-margin-right)}.tabs__heading[role=tab]:last-of-type{margin:0 var(--tab-margin-left) 0 0}.tabs__heading[role=tab]:after{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border-top-left-radius:var(--tab-border-radius,0);border-top-right-radius:var(--tab-border-radius,0);background-color:var(--tab-background-color);content:\"\";-webkit-transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,transform .3s;transition:background-color .3s,transform .3s,-webkit-transform .3s;-webkit-transition-timing-function:ease,cubic-bezier(.7,0,.3,1);transition-timing-function:ease,cubic-bezier(.7,0,.3,1);-webkit-transform:translate3d(0,100%,0) translate3d(0,-3px,0);transform:translate3d(0,100%,0) translate3d(0,-3px,0)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover{color:var(--tab-hover-color)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover:after{background-color:var(--tab-active-background-color)}.tabs__heading[role=tab].is-active{color:var(--tab-active-color)}.tabs__heading[role=tab].is-active:after{-webkit-transform:translateZ(0);transform:translateZ(0);background-color:var(--tab-active-background-color)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { TraimTabs as traim_tabs };
