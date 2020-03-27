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
import { r as registerInstance, c as createEvent, h } from './core-705deb91.js';
var TraimToggle = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.toggled = false;
        this._toggled = false;
        this.onChange = createEvent(this, "changed", 7);
    }
    class_1.prototype.componentDidLoad = function () {
        this._toggled = this.toggled;
    };
    class_1.prototype.isToggled = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._toggled];
            });
        });
    };
    class_1.prototype.toggle = function () {
        this._toggled = !this._toggled;
    };
    class_1.prototype.handleToggle = function (e) {
        e.preventDefault();
        this.toggle();
        this.onChange.emit(this._toggled);
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("label", { class: "toggle", onClick: function (e) { return _this.handleToggle(e); } }, h("input", { type: "checkbox", "aria-checked": this._toggled.toString(), checked: this._toggled }), h("div", { class: "toggle__track" }, h("div", { class: "toggle__handle" })), h("slot", null)));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "toggled": ["toggle"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input:not(:checked)+.toggle__track{background-color:var(--color-dark,#eee)}input:not(:checked)+.toggle__track .toggle__handle{-webkit-transform:translateZ(0);transform:translateZ(0)}input:disabled+.toggle__track,input:disabled+.toggle__track .toggle__handle{cursor:not-allowed;opacity:var(--disabled-opacity,.5)}input:active+.toggle__track,input:focus+.toggle__track{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff));box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff))}input:active+.toggle__track .toggle__handle,input:focus+.toggle__track .toggle__handle{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c);box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c)}.toggle input{position:absolute;opacity:0}.toggle__track{--toggle-track-color:var(--color-default,#74748c);-ms-flex:0 1 auto;flex:0 1 auto;padding-right:var(--grid-gutter,8px);padding-left:var(--grid-gutter,8px);position:relative;height:.5em;margin:0 .5em;background-color:var(--toggle-track-color)}.toggle__handle,.toggle__track{width:1em;border-radius:var(--border-radius-rounded,30em)}.toggle__handle{position:absolute;top:-.25em;left:0;height:1em;background-color:#fff;-webkit-box-shadow:0 1px 3px 1px var(--color-default,#74748c);box-shadow:0 1px 3px 1px var(--color-default,#74748c);-webkit-transform:translateX(100%);transform:translateX(100%)}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { TraimToggle as traim_toggle };
