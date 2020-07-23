import { Component, h, Element, Event, State, Method, Listen } from '@stencil/core';
export class TraimTabs {
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
        return (h("div", { class: "tabs" },
            h("div", { role: "tablist", class: "tabs__tablist" },
                h("nav", { class: "tabs__nav" },
                    h("ul", { class: "tabs__headings" }, this.tabs.map((tab, i) => {
                        const openClass = tab.open ? 'is-active' : '';
                        return (h("li", { class: "tabs__tab" },
                            h("button", { role: "tab", disabled: tab.disabled, class: `tabs__heading ${openClass}`, onClick: () => this.openTab(i) }, tab.header)));
                    }))),
                h("slot", null))));
    }
    static get is() { return "traim-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-tabs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-tabs.css"]
    }; }
    static get states() { return {
        "tabs": {}
    }; }
    static get events() { return [{
            "method": "onChange",
            "name": "changeTab",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "currentTab": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "openTab": {
            "complexType": {
                "signature": "(tabIndex: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "elem"; }
    static get listeners() { return [{
            "name": "changeTabHeader",
            "method": "changeTabHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
