import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'traim-tab',
  styleUrl: 'traim-tab.scss',
  shadow: true
})
export class TraimTab {
  @Prop({reflect: true, mutable: true})
  header: string;

  @Prop()
  disabled: boolean;

  @Prop()
  open: boolean;

  @Event({ eventName: 'changeTabHeader' })
  onTabHeaderChange: EventEmitter;

  @Watch('header')
  watchHeader() {
    this.onTabHeaderChange.emit({});
  }

  render() {
    return (
      <div role="tabpanel" hidden={!this.open} class={`tab`}>
        <slot />
      </div>
    );
  }
}
