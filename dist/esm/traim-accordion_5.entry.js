import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-bc9dc136.js';

const traimAccordionCss = ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:#ffa500;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000, 0.6);--box-shadow-high:0 5px 10px -3px rgba(#000, 0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000, 0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000, 0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.accordion{display:block;width:var(--accordion-width, 100%);padding:0;overflow:hidden;background-color:var(--color-background);border-radius:var(--border-radius)}.accordion.has-counter{counter-reset:accordion}.accordion.has-counter .control[aria-expanded]::before{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--accordion-counter-margin-right, 6px);width:var(--accordion-counter-size, 20px);height:var(--accordion-counter-size, 20px);background-color:var(--accordion-counter-background-color, white);border-radius:50%;counter-increment:accordion;content:counter(accordion)}";

const TraimAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onToggle = createEvent(this, "toggle", 7);
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
        return (h("div", { class: `accordion ${useCounterClass}` }, h("slot", null)));
    }
    get element() { return getElement(this); }
};
TraimAccordion.style = traimAccordionCss;

const traimAccordionPaneCss = ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:#ffa500;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000, 0.6);--box-shadow-high:0 5px 10px -3px rgba(#000, 0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000, 0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000, 0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.control[aria-expanded]{--button-color:var(--color-text);--button-background-color:var(--color-dark);color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;display:inline-block;max-width:100%;margin:0;padding:var(--spacing-small);overflow:hidden;font-size:1em;font-family:inherit;line-height:normal;white-space:nowrap;text-align:center;text-decoration:none;text-overflow:ellipsis;vertical-align:middle;border-radius:var(--border-radius);outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--button-color);background-color:var(--button-background-color);border:1px solid transparent;position:relative;display:block;width:100%;margin:0;padding:var(--spacing-small);text-align:inherit;text-decoration:inherit;border:0;border-radius:0}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:0.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:0.8}.control[aria-expanded]:disabled,.control[aria-expanded][disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]:not(:disabled):not([disabled]):not(:active):hover{opacity:0.9}.control[aria-expanded]:not(:disabled):not([disabled]):focus{border-color:var(--border-color-focus);-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.control[aria-expanded]:not(:disabled):not([disabled]):active{opacity:0.8}.control[aria-expanded][aria-expanded=true]{font-weight:var(--text-font-weight-heavy);opacity:0.8}.control[aria-expanded].is-active{opacity:0.8}.control[aria-expanded]::after{position:absolute;top:0.5em;right:0.5em;width:1em;height:1em;background-image:url(\"data:image/png;base64,R0lGODlhDwAUAIABAAAAAP///yH5BAEAAAEALAAAAAAPABQAAAIXjI+py+0Po5wH2HsXzmw//lHiSJZmUAAAOw==\");background-repeat:no-repeat;background-position:center;content:\"\"}.control[aria-expanded][aria-expanded=true]::after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.control[aria-expanded].is-empty::after{content:none}.control[aria-expanded].is-active{opacity:0.8}.pane{--card-item-color:var(--color-text);--card-item-background-color:transparent;margin:0;padding:var(--spacing-small);color:var(--card-item-color);background-color:var(--card-item-background-color);margin:0;padding:var(--spacing-small)}.pane:disabled,.pane[disabled]{cursor:not-allowed;opacity:var(--disabled-opacity)}.control[aria-expanded=false]+.pane{position:absolute;width:1px;height:1px;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%)}";

const TraimAccordionPane = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onToggle = createEvent(this, "togglepane", 7);
        this._isOpen = false;
        this.open = false;
        this.empty = false;
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
        const isEmptyClass = this.empty ? 'is-empty' : '';
        return [
            h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), tabindex: !this.empty ? 0 : -1, class: `control ${isOpenClass} ${isEmptyClass}`, onClick: () => !this.empty && this.toggle(), innerHTML: this.header }),
            h("section", { "aria-hidden": !this._isOpen, class: `pane` }, h("slot", null)),
        ];
    }
};
TraimAccordionPane.style = traimAccordionPaneCss;

const traimAutocompleteCss = ":host{display:var(--autocomplete-display, block);-webkit-box-sizing:border-box;box-sizing:border-box;min-width:var(--autocomplete-input-min-width, 150px);width:var(--autocomplete-input-width, auto);max-width:var(--autocomplete-input-max-width, 300px)}.autocomplete{position:relative;display:-ms-flexbox;display:flex}.autocomplete__input{width:100%;font-family:var(--autocomplete-input-font-family, Arial);font-size:var(--autocomplete-input-font-size, inherit);font-weight:var(--autocomplete-input-font-weight, normal);text-transform:var(--autocomplete-input-text-transform, none);padding:var(--autocomplete-input-padding-horizontal, 3px) var(--autocomplete-input-padding-vertical, 6px)}.autocomplete__input::-webkit-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::-moz-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input:-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::-ms-input-placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__input::placeholder{color:var(--autocomplete-input-placeholder-color, grey)}.autocomplete__list{position:absolute;width:100%;top:100%;left:-1px;list-style:none outside;padding-left:0;margin:0;background-color:white;z-index:1;border-left:1px solid var(--autocomplete-list-border-color, lightgray);border-right:1px solid var(--autocomplete-list-border-color, lightgray);border-bottom:1px solid var(--autocomplete-list-border-color, lightgray)}.autocomplete__list-item{-webkit-appearance:none;padding:var(--autocomplete-item-padding-horizontal, 6px) var(--autocomplete-item-padding-vertical, 12px);cursor:pointer;font-family:var(--autocomplete-item-font-family, inherit);font-size:var(--autocomplete-item-font-size, inherit);font-weight:var(--autocomplete-item-font-weight, normal);text-align:var(--autocomplete-item-text-align, left);border:none;display:block;background-color:var(--autocomplete-item-background-color, white);width:100%}.autocomplete__list-item:hover,.autocomplete__list-item:focus{background-color:var(--autocomplete-user-action-item-background-color, rgba(0, 149, 198, 0.3))}.autocomplete__list-item:focus{outline:2px solid var(--autocomplete-user-action-item-outline-color, rgba(0, 149, 198, 0.8));outline-offset:-2px}.autocomplete__list-item.is-active{background-color:var(--autocomplete-active-item-background-color, rgba(0, 149, 198, 0.3))}.autocomplete__empty{padding:var(--autocomplete-item-padding-horizontal, 6px) var(--autocomplete-item-padding-vertical, 12px);font-family:var(--autocomplete-item-font-family, inherit);font-size:var(--autocomplete-item-font-size, inherit);font-weight:var(--autocomplete-item-font-weight, normal);text-align:var(--autocomplete-item-text-align, left);border:none;display:block;background-color:var(--autocomplete-item-background-color, white);width:100%}";

const TraimAutocomplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onSelect = createEvent(this, "selectAutocomplete", 7);
        this.onSearch = createEvent(this, "searchAutocomplete", 7);
        this.items = [];
        this.handleOuterClick = this.handleOuterClick.bind(this);
    }
    resetChangedHandler(newValue) {
        this.reset = newValue;
        if (this.reset) {
            this.resetField();
        }
    }
    emptyMessageChangedHandler(newValue) {
        this.emptyMessage = newValue;
    }
    selectedItemChangedHandler(newValue) {
        console.log('selectedItem', newValue);
        if (newValue.key && newValue.value && newValue.value.title) {
            this.select(newValue);
        }
    }
    itemsChangedHandler(newValue) {
        if (!newValue.length) {
            if (this.emptyMessage) {
                this.empty();
            }
            else {
                this.close();
            }
        }
        this.setItems(newValue);
    }
    async setItems(items) {
        this.items = items;
        this.value || this.emptyMessage ? this.open() : this.close();
    }
    connectedCallback() {
        if (this.itemsJSON && !this.items.length) {
            try {
                const items = JSON.parse(this.itemsJSON);
                this.setItems(items);
                this.itemsJSON = '';
            }
            catch (e) {
                console.warn('Could not parse data in item-json for <traim-autocomplete>', e);
            }
        }
    }
    select(item) {
        this.activeItem = item;
        this.selectedItem = item;
        this.value = item.value.title;
        this.onSelect.emit(item);
        this.close();
    }
    search(e) {
        this.activeItem = null;
        this.value = e.target.value;
        const query = this.value;
        this.onSearch.emit(query);
        if (this.value) {
            const found = this.items.find((item) => {
                return item.value.title.toLowerCase() === this.value.toLowerCase();
            });
            if (found) {
                this.select(found);
            }
        }
    }
    open() {
        if (this.items.length || this.emptyMessage) {
            this._isOpen = true;
        }
    }
    close() {
        this._isOpen = false;
    }
    empty() {
        console.log('Empty message');
    }
    resetField() {
        this.el.shadowRoot.getElementById(this.uid).value = '';
        this.activeItem = null;
        this.value = '';
        this.onSearch.emit('');
    }
    handleOuterClick(evt) {
        const eventElement = evt.target;
        if (eventElement.matches(`[for="${this.uid}"]`)) {
            const focusEl = this.el.shadowRoot.getElementById(this.uid);
            if (focusEl) {
                focusEl.focus();
            }
        }
        else if (!this.el.contains(eventElement)) {
            if (eventElement.matches('[type="reset"]') &&
                eventElement.form.contains(this.el)) {
                this.resetField();
            }
            this.close();
        }
    }
    handleKeyDown(evt) {
        let idx = this.items.indexOf(this.activeItem);
        switch (evt.key) {
            case 'ArrowDown': {
                evt.preventDefault();
                this.open();
                if (idx < this.items.length - 1) {
                    this.activeItem = this.items[idx + 1];
                }
                break;
            }
            case 'ArrowUp': {
                evt.preventDefault();
                if (idx > 0) {
                    this.activeItem = this.items[idx - 1];
                }
                break;
            }
            case 'Enter': {
                if (this.activeItem) {
                    evt.preventDefault();
                    this.select(this.activeItem);
                    this.close();
                }
                break;
            }
            case 'Escape': {
                this.close();
                break;
            }
        }
    }
    render() {
        return (h("div", { class: "autocomplete" }, h("input", { id: this.uid, name: this.uid, type: "search", class: "autocomplete__input", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: (e) => this.search(e), onFocus: () => this.open(), onClick: () => this.open() }), (this._isOpen) && (h("div", { role: "menu", class: "autocomplete__list" }, this.items.map((item) => {
            const isActiveClass = this.activeItem === item ? 'is-active' : '';
            return (h("button", { role: "menuitem", class: `autocomplete__list-item ${isActiveClass}`, onClick: () => this.select(item) }, item.value.title));
        }), this.emptyMessage && this.items.length === 0 && (h("div", { role: "menuitem", "aria-disabled": true, class: "autocomplete__empty" }, this.emptyMessage))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "reset": ["resetChangedHandler"],
        "emptyMessage": ["emptyMessageChangedHandler"],
        "selectedItem": ["selectedItemChangedHandler"],
        "items": ["itemsChangedHandler"]
    }; }
};
TraimAutocomplete.style = traimAutocompleteCss;

var TraimSliderAnimationEnum;
(function (TraimSliderAnimationEnum) {
    TraimSliderAnimationEnum["NONE"] = "";
    TraimSliderAnimationEnum["FADE"] = "is-fade-animation";
    TraimSliderAnimationEnum["SLIDE"] = "is-slide-animation";
})(TraimSliderAnimationEnum || (TraimSliderAnimationEnum = {}));

const traimSliderCss = ":host{display:block}.slider{position:relative}.slider__slides{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-column-gap:24px}.slider__button{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--slider-control-button-font-size, 14px);padding:var(--slider-padding-horizontal, 8px) var(--slider-padding-vertical, 16px);color:var(--slider-control-button-color, #000);background-color:var(--slider-control-button-background-color, #F1F1F1)}.slider__button:hover{background-color:var(--slider-control-button-hover-background-color, #CCC)}.slider__button.is-left{left:var(--slider-control-button-left, 0)}.slider__button.is-right{right:var(--slider-control-button-right, 0)}";

const TraimSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("div", { class: `slider ${animationClass}` }, h("section", { ref: (el) => this.slidesWrapperElement = el, class: `slider__slides` }, h("slot", null)), this.countSlides > 1 && this.controls && (h("button", { onClick: () => this.gotoSlide(this.activeSlideIndex - 1), role: "button", class: `slider__button is-left`, "aria-label": this.controlLeftText }, h("span", { "aria-hidden": "true", class: `slider__button-inner` }, "\u276E"))), this.countSlides > 1 && this.controls && (h("button", { onClick: () => this.gotoSlide(this.activeSlideIndex + 1), role: "button", class: `slider__button is-right`, "aria-label": this.controlRightText }, h("span", { "aria-hidden": "true", class: `slider__button-inner` }, "\u276F"))))));
    }
    static get watchers() { return {
        "itemsPerSlide": ["watchItemsPerSlide"]
    }; }
};
TraimSlider.style = traimSliderCss;

const traimSliderSlideCss = ":host{display:block}.slider-slide{display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:40px}.slider-slide.is-active{display:-ms-flexbox;display:flex}";

const TraimSliderSlide = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const activeClass = this.current ? 'is-active' : '';
        return (h(Host, null, h("div", { class: `slider-slide ${activeClass}` }, h("slot", null))));
    }
};
TraimSliderSlide.style = traimSliderSlideCss;

export { TraimAccordion as traim_accordion, TraimAccordionPane as traim_accordion_pane, TraimAutocomplete as traim_autocomplete, TraimSlider as traim_slider, TraimSliderSlide as traim_slider_slide };
