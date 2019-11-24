import { r as registerInstance, c as createEvent, h, g as getElement } from './core-7b09a8d3.js';

const TraimTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onChange = createEvent(this, "changeTab", 7);
    }
    componentWillLoad() {
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
        return (h("div", { class: "tabs" }, h("div", { role: "tablist", class: "tabs__tablist" }, h("div", { class: "tabs__nav" }, h("div", { class: "tabs__headings" }, this.tabs.map((tab, i) => {
            const openClass = tab.open ? 'is-active' : '';
            return (h("button", { role: "tab", disabled: tab.disabled, class: `tabs__heading ${openClass}`, onClick: () => this.openTab(i) }, tab.header));
        }))), h("slot", null))));
    }
    get elem() { return getElement(this); }
    static get style() { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.tabs__tablist[role=tablist]{display:block}.tabs__headings{display:-ms-flexbox;display:flex;text-align:center}.tabs__nav{overflow:hidden}.tabs__nav .tabs__headings{margin-bottom:-1em;padding-bottom:1em;overflow-x:auto;overflow-y:hidden}.tabs__heading[role=tab]{--tab-heading-border-color:var(--color-default);width:auto;padding:0;overflow:visible;color:inherit;font:inherit;line-height:normal;text-align:inherit;text-decoration:inherit;vertical-align:inherit;background:inherit;border:0;border-radius:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;-ms-flex:1;flex:1;margin:0;padding:var(--spacing-medium);white-space:nowrap;border-bottom:var(--spacing-xsmall) solid var(--color-background);border-radius:var(--border-radius) var(--border-radius) 0 0}.tabs__heading[role=tab]:disabled,.tabs__heading[role=tab][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.tabs__heading[role=tab]:not(:disabled):not([disabled]):active{background-color:transparent}.tabs__heading[role=tab]:not(:disabled):not([disabled]):not(:active):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.tabs__heading[role=tab]:not(:disabled):not([disabled]):not(:active):hover{background-color:transparent}.tabs__heading[role=tab].is-active,.tabs__heading[role=tab]:not(:disabled):not(.is-active):hover{border-bottom-color:var(--tab-heading-border-color)}.tabs__heading[role=tab].is-active{background-color:var(--color-background)}"; }
};

export { TraimTabs as traim_tabs };
