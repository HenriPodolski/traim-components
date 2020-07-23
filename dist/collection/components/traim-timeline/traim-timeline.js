import { Component, h, Prop } from '@stencil/core';
export class TraimTimeline {
    render() {
        const alternateClass = this.alternate ? 'is-alternate' : '';
        const loadingClass = this.loading ? 'is-loading' : '';
        return (h("ol", { class: `timeline ${alternateClass} ${loadingClass}` },
            h("slot", null)));
    }
    static get is() { return "traim-timeline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-timeline.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-timeline.css"]
    }; }
    static get properties() { return {
        "alternate": {
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
            "attribute": "alternate",
            "reflect": false
        },
        "loading": {
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
            "attribute": "loading",
            "reflect": false
        }
    }; }
}
