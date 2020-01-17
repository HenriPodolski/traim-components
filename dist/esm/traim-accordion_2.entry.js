import { r as registerInstance, c as createEvent, h, g as getElement } from './core-2d640435.js';

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

export { TraimAccordion as traim_accordion, TraimAccordionPane as traim_accordion_pane };
