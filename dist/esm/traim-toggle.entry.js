import { r as registerInstance, c as createEvent, h } from './core-705deb91.js';

const TraimToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggled = false;
        this._toggled = false;
        this.onChange = createEvent(this, "changed", 7);
    }
    componentDidLoad() {
        this._toggled = this.toggled;
    }
    async isToggled() {
        return this._toggled;
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
        return (h("label", { class: "toggle", onClick: (e) => this.handleToggle(e) }, h("input", { type: "checkbox", "aria-checked": this._toggled.toString(), checked: this._toggled }), h("div", { class: "toggle__track" }, h("div", { class: "toggle__handle" })), h("slot", null)));
    }
    static get watchers() { return {
        "toggled": ["toggle"]
    }; }
    static get style() { return ".toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input:not(:checked)+.toggle__track{background-color:var(--color-dark,#eee)}input:not(:checked)+.toggle__track .toggle__handle{-webkit-transform:translateZ(0);transform:translateZ(0)}input:disabled+.toggle__track,input:disabled+.toggle__track .toggle__handle{cursor:not-allowed;opacity:var(--disabled-opacity,.5)}input:active+.toggle__track,input:focus+.toggle__track{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff));box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff))}input:active+.toggle__track .toggle__handle,input:focus+.toggle__track .toggle__handle{border-color:var(--border-color-focus,#4267ff);-webkit-box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c);box-shadow:var(--box-shadow-focus,inset 0 0 0 1px var(--color-outline,#4267ff)),0 1px 3px 1px var(--color-default,#74748c)}.toggle input{position:absolute;opacity:0}.toggle__track{-ms-flex:0 1 auto;flex:0 1 auto;padding-right:var(--grid-gutter,8px);padding-left:var(--grid-gutter,8px);position:relative;height:.5em;margin:0 .5em;background-color:var(--toggle-track-color,#74748c)}.toggle__handle,.toggle__track{width:1em;border-radius:var(--border-radius-rounded,30em)}.toggle__handle{position:absolute;top:-.25em;left:0;height:1em;background-color:#fff;-webkit-box-shadow:0 1px 3px 1px var(--color-default,#74748c);box-shadow:0 1px 3px 1px var(--color-default,#74748c);-webkit-transform:translateX(100%);transform:translateX(100%)}"; }
};

export { TraimToggle as traim_toggle };
