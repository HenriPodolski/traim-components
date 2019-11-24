import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'traim-tab',
  styleUrl: 'traim-tab.scss',
  shadow: true
})
export class TraimTab {
  @Prop()
  header: string;

  @Prop()
  disabled: boolean;

  @Prop()
  open: boolean;

  render() {
    return (
      <div role="tabpanel" hidden={!this.open} class={`tab`}>
        <slot />
      </div>
    );
  }
}
