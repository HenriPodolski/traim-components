import { r as registerInstance, c as createEvent, h, g as getElement } from './core-04a1e93f.js';

const TraimTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onChange = createEvent(this, "changeTab", 7);
    }
    componentWillLoad() {
        this.tabs = Array.from(this.elem.querySelectorAll('traim-tab'));
    }
    changeTabHandler() {
        this.tabs = Array.from(this.elem.querySelectorAll('traim-tab'));
    }
    async currentTab() {
        return this.tabs.findIndex((tab) => tab.open);
    }
    async openTab(tabIndex) {
        if (!this.tabs[tabIndex].disabled) {
            this.tabs = this.tabs.map((tab) => {
                tab.open = false;
                return tab;
            });
            this.tabs[tabIndex].open = true;
            this.onChange.emit({ idx: tabIndex });
        }
    }
    render() {
        return (h("div", { class: "tabs" }, h("div", { role: "tablist", class: "tabs__tablist" }, h("nav", { class: "tabs__nav" }, h("ul", { class: "tabs__headings" }, this.tabs.map((tab, i) => {
            const openClass = tab.open ? 'is-active' : '';
            return (h("li", { class: "tabs__tab" }, h("button", { role: "tab", disabled: tab.disabled, class: `tabs__heading ${openClass}`, onClick: () => this.openTab(i) }, tab.header)));
        }))), h("slot", null))));
    }
    get elem() { return getElement(this); }
    static get style() { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.tabs__tablist[role=tablist]{display:block}.tabs__headings{display:-ms-flexbox;display:flex;text-align:center;list-style:none outside;margin:0;padding:0}.tabs__nav{overflow:hidden}.tabs__nav .tabs__headings{overflow-x:auto;overflow-y:hidden}.tabs__heading[role=tab]{position:relative;width:auto;margin:0;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--tab-padding-top,0) var(--tab-padding-left,0) var(--tab-padding-bottom,0) var(--tab-padding-right,0);display:block;-ms-flex:1;flex:1;margin:0 var(--tab-margin-left) 0 var(--tab-margin-right);cursor:pointer;white-space:nowrap;text-overflow:ellipsis;font-family:var(--tab-font-family,inherit);font-size:var(--tab-font-size,var(--text-font-size-medium));color:var(--tab-color);-webkit-transition:color .3s;transition:color .3s}.tabs__heading[role=tab]:disabled,.tabs__heading[role=tab][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.tabs__heading[role=tab]:first-of-type{margin:0 0 0 var(--tab-margin-right)}.tabs__heading[role=tab]:last-of-type{margin:0 var(--tab-margin-left) 0 0}.tabs__heading[role=tab]:after{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border-top-left-radius:var(--tab-border-radius,0);border-top-right-radius:var(--tab-border-radius,0);background-color:var(--tab-background-color);content:\"\";-webkit-transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,-webkit-transform .3s;transition:background-color .3s,transform .3s;transition:background-color .3s,transform .3s,-webkit-transform .3s;-webkit-transition-timing-function:ease,cubic-bezier(.7,0,.3,1);transition-timing-function:ease,cubic-bezier(.7,0,.3,1);-webkit-transform:translate3d(0,100%,0) translate3d(0,-3px,0);transform:translate3d(0,100%,0) translate3d(0,-3px,0)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover{color:var(--tab-hover-color)}.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover:after{background-color:var(--tab-active-background-color)}.tabs__heading[role=tab].is-active{color:var(--tab-active-color)}.tabs__heading[role=tab].is-active:after{-webkit-transform:translateZ(0);transform:translateZ(0);background-color:var(--tab-active-background-color)}"; }
};

export { TraimTabs as traim_tabs };
