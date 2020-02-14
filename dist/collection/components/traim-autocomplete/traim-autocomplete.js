import { h } from "@stencil/core";
export class TraimAutocomplete {
    constructor() {
        this.items = [];
        this.handleOuterClick = this.handleOuterClick.bind(this);
    }
    async setItems(items) {
        this.items = items;
        this.value ? this.open() : this.close();
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
        this.value = item.key;
        this.onSelect.emit(item);
        this.close();
    }
    search(e) {
        this.activeItem = null;
        this.value = e.target.value;
        const query = this.value;
        this.onSearch.emit(query);
    }
    open() {
        if (this.items.length) {
            this._isOpen = true;
        }
    }
    close() {
        this._isOpen = false;
    }
    handleOuterClick(evt) {
        const eventElement = evt.target;
        if (eventElement.matches(`[for="${this.uid}"]`)) {
            const focusEl = this.el.shadowRoot.getElementById(this.uid);
            if (focusEl) {
                focusEl.focus();
            }
        }
        else if (eventElement !== this.el || !this.el.contains(eventElement)) {
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
                }
            }
            case 'Escape': {
                this.close();
            }
        }
    }
    render() {
        return (h("div", { class: "autocomplete" },
            h("input", { id: this.uid, name: this.uid, type: "search", class: "autocomplete__input", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: (e) => this.search(e), onFocus: () => this.open(), onClick: () => this.open() }),
            this._isOpen && (h("div", { role: "menu", class: "autocomplete__list" }, this.items.map((item) => {
                const isActiveClass = this.activeItem === item ? 'is-active' : '';
                return (h("button", { role: "menuitem", class: `autocomplete__list-item ${isActiveClass}`, onClick: () => this.select(item) }, item.value.title));
            })))));
    }
    static get is() { return "traim-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["traim-autocomplete.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["traim-autocomplete.css"]
    }; }
    static get properties() { return {
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false
        },
        "uid": {
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
            "attribute": "uid",
            "reflect": false
        },
        "itemsJSON": {
            "type": "string",
            "mutable": true,
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
            "attribute": "items-json",
            "reflect": false
        },
        "items": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Array<IAutoCompleteItem>",
                "resolved": "IAutoCompleteItem[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "IAutoCompleteItem": {
                        "location": "import",
                        "path": "./interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get states() { return {
        "selectedItem": {},
        "activeItem": {},
        "_isOpen": {},
        "value": {}
    }; }
    static get events() { return [{
            "method": "onSelect",
            "name": "selectAutocompleteItem",
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
        }, {
            "method": "onSearch",
            "name": "searchAutocompleteItem",
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
        "setItems": {
            "complexType": {
                "signature": "(items: IAutoCompleteItem[]) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Array": {
                        "location": "global"
                    },
                    "IAutoCompleteItem": {
                        "location": "import",
                        "path": "./interfaces"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleOuterClick",
            "target": "window",
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
