import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'traim-timeline',
  styleUrl: 'traim-timeline.scss',
  shadow: true
})
export class TraimTimeline {

  @Prop()
  alternate: boolean;

  @Prop()
  loading: boolean;

  render() {
    const alternateClass = this.alternate ? 'is-alternate' : '';
    const loadingClass = this.loading ? 'is-loading' : '';

    return (
      <ol class={`timeline ${alternateClass} ${loadingClass}`}>
        <slot />
      </ol>
    );
  }
}
