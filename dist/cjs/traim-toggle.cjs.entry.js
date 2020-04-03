'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-33fffc51.js');

const TraimToggle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.toggled = false;
        this._toggled = false;
        this.onChange = core.createEvent(this, "changed", 7);
    }
    componentDidLoad() {
        this._toggled = this.toggled;
    }
    async isToggled() {
        return this._toggled;
    }
    watchToggled(newValue) {
        this._toggled = newValue;
    }
    toggle() {
        this._toggled = !this._toggled;
    }
    handleToggle(e) {
        e.preventDefault();
        this.toggle();
        this.onChange.emit(this._toggled);
    }
    render() {
        return (core.h("label", { class: "toggle", onClick: (e) => this.handleToggle(e) }, core.h("input", { type: "checkbox", "aria-checked": this._toggled.toString(), checked: this._toggled }), core.h("div", { class: "toggle__track" }, core.h("div", { class: "toggle__handle" })), core.h("slot", null)));
    }
    static get watchers() { return {
        "toggled": ["watchToggled"]
    }; }
    static get style() { return ".toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input:not(:checked)+.toggle__track{background-color:var(--color-dark,#eee)}input:not(:checked)+.toggle__track .toggle__handle{-webkit-transform:translateZ(0);transform:translateZ(0)}input:disabled+.toggle__track,input:disabled+.toggle__track .toggle__handle{cursor:not-allowed;opacity:var(--disabled-opacity,.5)}input:active+.toggle__track,input:focus+.toggle__track{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff));box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff))}input:active+.toggle__track .toggle__handle,input:focus+.toggle__track .toggle__handle{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c);box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c)}.toggle input{position:absolute;opacity:0}.toggle__track{-ms-flex:0 1 auto;flex:0 1 auto;padding-right:var(--grid-gutter,8px);padding-left:var(--grid-gutter,8px);position:relative;height:.5em;margin:0 .5em;background-color:var(--toggle-track-color,#74748c)}.toggle__handle,.toggle__track{width:1em;border-radius:var(--border-radius-rounded,30em)}.toggle__handle{position:absolute;top:-.25em;left:0;height:1em;background-color:#fff;-webkit-box-shadow:0 1px 3px 1px var(--color-default,#74748c);box-shadow:0 1px 3px 1px var(--color-default,#74748c);-webkit-transform:translateX(100%);transform:translateX(100%)}"; }
};

exports.traim_toggle = TraimToggle;
