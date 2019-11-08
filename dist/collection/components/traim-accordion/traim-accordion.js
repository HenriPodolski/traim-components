import { h } from "@stencil/core";
export class TraimAccordion {
    constructor() {
        this.useCounter = false;
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
        return (h("div", { class: `accordion ${useCounterClass}` },
            h("slot", null)));
    }
    static get is() { return "traim-accordion"; }
    static get originalStyleUrls() { return {
        "$": ["traim-accordion.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-accordion.css"]
    }; }
    static get properties() { return {
        "useCounter": {
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
            "attribute": "use-counter",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "onToggle",
            "name": "toggle",
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
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "togglepane",
            "method": "onTogglePane",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
