import { h, Host } from "@stencil/core";
import { TooltipAppearanceEnum, TooltipOrientationsEnum } from './traim-tooltip.enum';
export class TraimTooltip {
    constructor() {
        this.appearance = TooltipAppearanceEnum.bottom;
        this.orientation = TooltipOrientationsEnum.center;
        this.visibleOnHover = true;
        this.isVisible = false;
    }
    show() {
        this.isVisible = true;
    }
    render() {
        const appearanceClass = `is-${this.appearance}-appearance`;
        const orientationClass = `is-${this.orientation}-orientation`;
        const hoverClass = this.visibleOnHover ? 'is-hover' : '';
        const visibleClass = this.isVisible ? 'is-visible' : '';
        return (h(Host, { onClick: () => this.show() },
            h("div", { class: `tooltip ${appearanceClass} ${orientationClass} ${hoverClass} ${visibleClass}` },
                h("slot", { name: "tooltip-trigger" }),
                h("div", { class: "tooltip__display" },
                    h("slot", { name: "tooltip-display" })))));
    }
    static get is() { return "traim-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-tooltip.css"]
    }; }
    static get properties() { return {
        "appearance": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TooltipAppearanceEnum",
                "resolved": "TooltipAppearanceEnum.bottom | TooltipAppearanceEnum.left | TooltipAppearanceEnum.right | TooltipAppearanceEnum.top",
                "references": {
                    "TooltipAppearanceEnum": {
                        "location": "import",
                        "path": "./traim-tooltip.enum"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "appearance",
            "reflect": false,
            "defaultValue": "TooltipAppearanceEnum.bottom"
        },
        "orientation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TooltipOrientationsEnum",
                "resolved": "TooltipOrientationsEnum.center | TooltipOrientationsEnum.left | TooltipOrientationsEnum.right",
                "references": {
                    "TooltipOrientationsEnum": {
                        "location": "import",
                        "path": "./traim-tooltip.enum"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "orientation",
            "reflect": false,
            "defaultValue": "TooltipOrientationsEnum.center"
        },
        "content": {
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
            "attribute": "content",
            "reflect": false
        },
        "visibleOnHover": {
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
            "attribute": "visible-on-hover",
            "reflect": false,
            "defaultValue": "true"
        },
        "isVisible": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "is-visible",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
