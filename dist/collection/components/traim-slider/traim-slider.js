import { h, Host } from "@stencil/core";
import { TraimSliderAnimationEnum } from './traim-slider-animation.enum';
export class TraimSlider {
    constructor() {
        this.controlLeftText = 'Previous';
        this.controlRightText = 'Next';
        this.animation = TraimSliderAnimationEnum.NONE;
        this.itemsPerSlide = 1;
        this.activeSlideIndex = 0;
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    watchItemsPerSlide() {
        this.handleSlotChange();
    }
    gotoSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = this.countSlides - 1;
        }
        else if (slideIndex > this.countSlides - 1) {
            slideIndex = 0;
        }
        const previousSlides = this.slideItems.filter((slide) => slide.hasAttribute('previous'));
        const currentSlides = this.slideItems.filter((slide) => slide.hasAttribute('current'));
        if (previousSlides.length) {
            previousSlides.forEach((previousSlide) => previousSlide.removeAttribute('previous'));
        }
        if (currentSlides.length) {
            currentSlides.forEach((currentSlide) => {
                currentSlide.removeAttribute('current');
                currentSlide.setAttribute('previous', 'true');
            });
        }
        if (this.slideIndexes[slideIndex]) {
            // examples:
            // base 1: [[0], [1], [2]]
            // base 2: [[0,1], [2,3], [4,5]]
            // base 3: [[0,1,2], [3,4,5], [5,6,7]]
            this.slideIndexes[slideIndex].forEach((slideItemIndex) => {
                if (this.slideItems[slideItemIndex]) {
                    this.slideItems[slideItemIndex].setAttribute('current', 'true');
                }
            });
            this.activeSlideIndex = slideIndex;
        }
    }
    componentDidLoad() {
        if (!this.slotElement) {
            this.slotElement = this.slidesWrapperElement.querySelector('slot');
            this.slotElement.addEventListener('slotchange', this.handleSlotChange);
        }
        this.handleSlotChange();
    }
    disconnectedCallback() {
        this.slotElement.removeEventListener('slotchange', this.handleSlotChange);
    }
    handleSlotChange() {
        this.setupSlides();
    }
    setupSlides() {
        this.slideItems = this.slotElement.assignedElements();
        this.countSlides = Math.floor(this.slideItems.length / this.itemsPerSlide);
        this.countSlides = this.countSlides ? this.countSlides : 1;
        this.slideIndexes = [...Array(this.countSlides).keys()].map((i) => {
            const startItem = i * this.itemsPerSlide;
            return [...Array(this.itemsPerSlide).keys()].map((j) => startItem + j);
        });
        const fractions = [...Array(this.itemsPerSlide).keys()].map(() => {
            return '1fr';
        });
        this.slidesWrapperElement.style.gridTemplateColumns = fractions.join(' ');
        this.gotoSlide(this.activeSlideIndex);
    }
    render() {
        const animationClass = this.animation;
        return (h(Host, null,
            h("div", { class: `slider ${animationClass}` },
                h("section", { ref: (el) => this.slidesWrapperElement = el, class: `slider__slides` },
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
        "itemsPerSlide": {
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
            "attribute": "items-per-slide",
            "reflect": false,
            "defaultValue": "1"
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
        "slideItems": {},
        "slideIndexes": {}
    }; }
    static get watchers() { return [{
            "propName": "itemsPerSlide",
            "methodName": "watchItemsPerSlide"
        }]; }
}
