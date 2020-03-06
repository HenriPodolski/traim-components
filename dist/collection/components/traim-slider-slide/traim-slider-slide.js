import { Host, h } from "@stencil/core";
export class TraimSliderSlide {
    render() {
        const activeClass = this.current ? 'is-active' : '';
        return (h(Host, null,
            h("div", { class: `slider-slide ${activeClass}` },
                h("slot", null))));
    }
    static get is() { return "traim-slider-slide"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-slider-slide.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-slider-slide.css"]
    }; }
    static get properties() { return {
        "current": {
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
            "attribute": "current",
            "reflect": false
        },
        "previous": {
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
            "attribute": "previous",
            "reflect": false
        }
    }; }
}
