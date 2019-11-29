import { h } from "@stencil/core";
export class TraimTab {
    watchHeader() {
        this.onTabHeaderChange.emit({});
    }
    render() {
        return (h("div", { role: "tabpanel", hidden: !this.open, class: `tab` },
            h("slot", null)));
    }
    static get is() { return "traim-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-tab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-tab.css"]
    }; }
    static get properties() { return {
        "header": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "header",
            "reflect": true
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "open": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "open",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "onTabHeaderChange",
            "name": "changeTabHeader",
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
    static get watchers() { return [{
            "propName": "header",
            "methodName": "watchHeader"
        }]; }
}
