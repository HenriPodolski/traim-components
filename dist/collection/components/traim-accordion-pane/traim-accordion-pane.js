import { h } from "@stencil/core";
export class TraimAccordionPane {
    constructor() {
        this._isOpen = false;
        this.open = false;
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
        return [
            h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `control ${isOpenClass}`, onClick: () => this.toggle(), innerHTML: this.header }),
            h("section", { "aria-hidden": !this._isOpen, class: `pane` },
                h("slot", null)),
        ];
    }
    static get is() { return "traim-accordion-pane"; }
    static get originalStyleUrls() { return {
        "$": ["traim-accordion-pane.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-accordion-pane.css"]
    }; }
    static get properties() { return {
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
            "reflect": false,
            "defaultValue": "false"
        },
        "header": {
            "type": "string",
            "mutable": false,
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
            "reflect": false
        }
    }; }
    static get states() { return {
        "_isOpen": {}
    }; }
    static get events() { return [{
            "method": "onToggle",
            "name": "togglepane",
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
        "show": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
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
        },
        "isOpen": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
