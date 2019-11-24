import { h } from "@stencil/core";
export class TraimAutocomplete {
    constructor() {
        this.items = [];
    }
    async setItems(items) {
        this.items = items;
        this.value ? this.open() : this.close();
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
    handleKeyDown(ev) {
        let idx = this.items.indexOf(this.activeItem);
        switch (ev.key) {
            case 'ArrowDown': {
                ev.preventDefault();
                this.open();
                if (idx < this.items.length - 1) {
                    this.activeItem = this.items[idx + 1];
                }
                break;
            }
            case 'ArrowUp': {
                ev.preventDefault();
                if (idx > 0) {
                    this.activeItem = this.items[idx - 1];
                }
                break;
            }
            case 'Enter': {
                if (this.activeItem) {
                    ev.preventDefault();
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
            h("input", { type: "search", class: "c-field", placeholder: this.placeholder, autocomplete: "off", value: this.value, onInput: (e) => this.search(e), onFocus: () => this.open(), onClick: () => this.open() }),
            this._isOpen && (h("div", { role: "menu", class: "c-card c-card--menu" }, this.items.map((item) => {
                const isActiveClass = this.activeItem === item ? 'c-card__control--active' : '';
                return (h("button", { role: "menuitem", class: `c-card__control ${isActiveClass}`, onClick: () => this.select(item) }, item.value));
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
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
