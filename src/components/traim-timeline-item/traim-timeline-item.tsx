import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'traim-timeline-item',
  styleUrl: 'traim-timeline-item.scss',
  shadow: true
})
export class TraimTimelineItem {

  @Prop()
  type: string;

  @Prop()
  last: boolean;

  @Prop()
  left: boolean;

  @Prop()
  loading: boolean;

  render() {
    const typeClass = this.type ? `is-${this.type}` : '';
    const lastClass = this.last ? `is-last` : '';
    const leftClass = this.left ? `is-left` : '';
    const loadingClass = this.loading && !this.last ? `is-loading` : '';

    return (
      <li class={`timeline-item ${typeClass} ${leftClass} ${lastClass} ${loadingClass}`}>
        <div class="timeline-item__body">
          <slot />
        </div>
      </li>
    );
  }
}
