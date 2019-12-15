import { Component, Event, EventEmitter, Method, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'traim-accordion-pane',
  styleUrl: 'traim-accordion-pane.scss'
})
export class TraimAccordionPane {
  @State()
  _isOpen: boolean = false;

  @Prop()
  open: boolean = false;

  @Prop()
  empty: boolean = false;

  @Prop()
  header: string;

  @Event({ eventName: 'togglepane' })
  onToggle: EventEmitter;

  componentWillLoad() {
    this._isOpen = this.open;
  }

  @Method()
  async show() {
    this._isOpen = true;
  }

  @Method()
  async close() {
    this._isOpen = false;
  }

  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
  }

  @Method()
  async isOpen() {
    return this._isOpen;
  }

  render() {
    const isOpenClass = this._isOpen ? 'is-active' : '';
    const isEmptyClass = this.empty ? 'is-empty': '';

    return [
      <button
        role="heading"
        aria-expanded={this._isOpen.toString()}
        tabindex={!this.empty ? 0 : -1}
        class={`control ${isOpenClass} ${isEmptyClass}`}
        onClick={() => !this.empty && this.toggle()}
        innerHTML={this.header}>
      </button>,
      <section
        aria-hidden={!this._isOpen}
        class={`pane`}>
        <slot />
      </section>,
    ];
  }
}
