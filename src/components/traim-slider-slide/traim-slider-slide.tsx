import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'traim-slider-slide',
  styleUrl: 'traim-slider-slide.scss',
  shadow: true
})
export class TraimSliderSlide {

  @Prop()
  current: boolean;

  @Prop()
  previous: boolean;

  render() {
    const activeClass = this.current ? 'is-active' : '';
    return (
      <Host>
        <div class={`slider-slide ${activeClass}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
