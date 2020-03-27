import { h } from "@stencil/core";
export class TraimToggle {
    constructor() {
        this.toggled = false;
        this._toggled = false;
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
        return (h("label", { class: "toggle", onClick: (e) => this.handleToggle(e) },
            h("input", { type: "checkbox", "aria-checked": this._toggled.toString(), checked: this._toggled }),
            h("div", { class: "toggle__track" },
                h("div", { class: "toggle__handle" })),
            h("slot", null)));
    }
    static get is() { return "traim-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-toggle.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-toggle.css"]
    }; }
    static get properties() { return {
        "toggled": {
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
            "attribute": "toggled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "_toggled": {}
    }; }
    static get events() { return [{
            "method": "onChange",
            "name": "changed",
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
        "isToggled": {
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
    static get watchers() { return [{
            "propName": "toggled",
            "methodName": "toggle"
        }]; }
}
