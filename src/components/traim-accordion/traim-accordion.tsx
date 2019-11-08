import { Component, Element, Event, EventEmitter, Listen, h, Prop } from '@stencil/core';

@Component({
  tag: 'traim-accordion',
  styleUrl: 'traim-accordion.scss'
})
export class TraimAccordion {
  @Element()
  private element: HTMLElement;

  @Prop()
  useCounter: boolean = false;

  @Event({ eventName: 'toggle' })
  onToggle: EventEmitter;

  @Listen('togglepane')
  onTogglePane(ev) {
    const accordion = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(accordion.children, pane);
    this.onToggle.emit({ idx, open });
  }

  render() {
    const useCounterClass = this.useCounter ? 'has-counter' : '';

    return (
      <div class={`accordion ${useCounterClass}`}>
        <slot />
      </div>
    );
  }
}
