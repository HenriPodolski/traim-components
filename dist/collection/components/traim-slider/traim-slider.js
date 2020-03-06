import { h, Host } from "@stencil/core";
import { TraimSliderAnimationEnum } from './traim-slider-animation.enum';
export class TraimSlider {
    constructor() {
        this.controlLeftText = 'Previous';
        this.controlRightText = 'Next';
        this.animation = TraimSliderAnimationEnum.NONE;
        this.activeSlideIndex = 0;
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    gotoSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = this.countSlides - 1;
        }
        else if (slideIndex > this.countSlides - 1) {
            slideIndex = 0;
        }
        const previousSlide = this.slides.find((slide) => slide.hasAttribute('previous'));
        if (previousSlide) {
            previousSlide.removeAttribute('previous');
        }
        if (this.slides[this.activeSlideIndex]) {
            this.slides[this.activeSlideIndex].removeAttribute('current');
            this.slides[this.activeSlideIndex].setAttribute('previous', 'true');
        }
        if (this.slides[slideIndex]) {
            this.slides[slideIndex].setAttribute('current', 'true');
            this.activeSlideIndex = slideIndex;
        }
    }
    componentDidLoad() {
        this.slotElement = this.slotWrapperElement.querySelector('slot');
        this.handleSlotChange();
        this.slotElement.addEventListener('slotchange', this.handleSlotChange);
    }
    disconnectedCallback() {
        this.slotElement.removeEventListener('slotchange', this.handleSlotChange);
    }
    handleSlotChange() {
        this.slides = this.slotElement.assignedElements();
        this.countSlides = this.slides.length;
        console.log(this.slides, this.countSlides);
        this.gotoSlide(this.activeSlideIndex);
    }
    render() {
        const animationClass = this.animation;
        return (h(Host, null,
            h("div", { class: `slider ${animationClass}` },
                h("section", { ref: (el) => this.slotWrapperElement = el, class: `slider__slides` },
                    h("slot", null)),
                this.countSlides > 1 && this.controls && (h("button", { onClick: () => this.gotoSlide(this.activeSlideIndex - 1), role: "button", class: `slider__button is-left`, "aria-label": this.controlLeftText },
                    h("span", { "aria-hidden": "true", class: `slider__button-inner` }, "\u276E"))),
                this.countSlides > 1 && this.controls && (h("button", { onClick: () => this.gotoSlide(this.activeSlideIndex + 1), role: "button", class: `slider__button is-right`, "aria-label": this.controlRightText },
                    h("span", { "aria-hidden": "true", class: `slider__button-inner` }, "\u276F"))))));
    }
    static get is() { return "traim-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-slider.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-slider.css"]
    }; }
    static get properties() { return {
        "controls": {
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
            "attribute": "controls",
            "reflect": false
        },
        "controlLeftText": {
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
            "attribute": "control-left-text",
            "reflect": false,
            "defaultValue": "'Previous'"
        },
        "controlRightText": {
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
            "attribute": "control-right-text",
            "reflect": false,
            "defaultValue": "'Next'"
        },
        "pagination": {
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
            "attribute": "pagination",
            "reflect": false
        },
        "animation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TraimSliderAnimationEnum",
                "resolved": "TraimSliderAnimationEnum.FADE | TraimSliderAnimationEnum.NONE | TraimSliderAnimationEnum.SLIDE",
                "references": {
                    "TraimSliderAnimationEnum": {
                        "location": "import",
                        "path": "./traim-slider-animation.enum"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "animation",
            "reflect": false,
            "defaultValue": "TraimSliderAnimationEnum.NONE"
        },
        "activeSlideIndex": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active-slide-index",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "countSlides": {},
        "slides": {}
    }; }
}
