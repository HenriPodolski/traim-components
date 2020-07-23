import { Component, h, Prop } from '@stencil/core';
export class TraimTimelineItem {
    render() {
        const typeClass = this.type ? `is-${this.type}` : '';
        const lastClass = this.last ? `is-last` : '';
        const leftClass = this.left ? `is-left` : '';
        const loadingClass = this.loading && !this.last ? `is-loading` : '';
        return (h("li", { class: `timeline-item ${typeClass} ${leftClass} ${lastClass} ${loadingClass}` },
            h("div", { class: "timeline-item__body" },
                h("slot", null))));
    }
    static get is() { return "traim-timeline-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-timeline-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-timeline-item.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "last": {
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
            "attribute": "last",
            "reflect": false
        },
        "left": {
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
            "attribute": "left",
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
