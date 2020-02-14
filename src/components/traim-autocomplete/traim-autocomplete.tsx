import { Component, Event, Element, EventEmitter, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { IAutoCompleteItem } from './interfaces';

@Component({
  tag: 'traim-autocomplete',
  styleUrl: 'traim-autocomplete.scss',
  shadow: true
})
export class TraimAutocomplete {
  @Prop()
  placeholder: string;

  @Prop()
  uid: string;

  @Prop({
    attribute: 'items-json',
    mutable: true
  })
  itemsJSON: string;

  @Prop({ mutable: true })
  items: IAutoCompleteItem[] = [];

  @Prop()
  emptyMessage: string;

  @Watch('items')
  itemsChangedHandler(newValue: IAutoCompleteItem[]) {
    if (!newValue.length) {
      if (this.emptyMessage) {
        this.empty();
      } else {
        this.close();
      }
    }
    this.setItems(newValue);
  }

  @Event({ eventName: 'selectAutocomplete' })
  onSelect: EventEmitter;

  @Event({ eventName: 'searchAutocomplete' })
  onSearch: EventEmitter;

  @State()
  selectedItem: IAutoCompleteItem;

  @State()
  activeItem: IAutoCompleteItem;

  @State()
  _isOpen: boolean;

  @State()
  value: string;

  @Element() private el: HTMLElement;

  @Method()
  async setItems(items: Array<IAutoCompleteItem>) {
    this.items = items;
    this.value ? this.open() : this.close();
  }

  constructor() {
    this.handleOuterClick = this.handleOuterClick.bind(this);
  }

  connectedCallback() {
    if (this.itemsJSON && !this.items.length) {
      try {
        const items = JSON.parse(this.itemsJSON);
        this.setItems(items);
        this.itemsJSON = '';
      } catch (e) {
        console.warn('Could not parse data in item-json for <traim-autocomplete>', e);
      }
    }
  }

  select(item: IAutoCompleteItem) {
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
    if (this.items.length) {
      this._isOpen = true;
    }
  }

  close() {
    this._isOpen = false;
  }

  empty() {
    console.log('Empty message');
  }

  @Listen('click', {target: 'window'})
  handleOuterClick(evt: Event) {
    const eventElement: HTMLElement = evt.target as HTMLElement;
    if (eventElement.matches(`[for="${this.uid}"]`)) {
      const focusEl: HTMLElement = this.el.shadowRoot.getElementById(this.uid);

      if (focusEl) {
        focusEl.focus();
      }
    } else if (!this.el.contains(eventElement)) {
      this.close();
    }
  }

  @Listen('keydown')
  handleKeyDown(evt: KeyboardEvent) {
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
    return (
      <div class="autocomplete">
        <input
          id={this.uid}
          name={this.uid}
          type="search"
          class="autocomplete__input"
          placeholder={this.placeholder}
          autocomplete="off"
          value={this.value}
          onInput={(e: UIEvent) => this.search(e)}
          onFocus={() => this.open()}
          onClick={() => this.open()}
        />
        {this._isOpen && (
          <div role="menu" class="autocomplete__list">
            {this.items.map((item) => {
              const isActiveClass = this.activeItem === item ? 'is-active' : '';
              return (
                <button role="menuitem" class={`autocomplete__list-item ${isActiveClass}`} onClick={() => this.select(item)}>
                  {item.value.title}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
