import { Component, h, Host, Prop } from '@stencil/core';
import { TooltipAppearanceEnum, TooltipOrientationsEnum } from './traim-tooltip.enum';

@Component({
  tag: 'traim-tooltip',
  styleUrl: 'traim-tooltip.scss',
  shadow: true
})
export class TraimTooltip {

  @Prop()
  appearance: TooltipAppearanceEnum = TooltipAppearanceEnum.bottom;

  @Prop()
  orientation: TooltipOrientationsEnum = TooltipOrientationsEnum.center;

  @Prop()
  content: string;

  @Prop()
  visibleOnHover: boolean = true;

  @Prop({ mutable: true, reflect: true })
  isVisible: boolean = false;

  show() {
    this.isVisible = true;
  }

  render() {
    const appearanceClass = `is-${this.appearance}-appearance`;
    const orientationClass = `is-${this.orientation}-orientation`;
    const hoverClass = this.visibleOnHover ? 'is-hover' : '';
    const visibleClass = this.isVisible ? 'is-visible' : '';

    return (
      <Host onClick={() => this.show()} >
        <div class={`tooltip ${appearanceClass} ${orientationClass} ${hoverClass} ${visibleClass}`}>
          <slot name="tooltip-trigger" />
          <div class="tooltip__display">
            <slot name="tooltip-display" />
          </div>
        </div>
      </Host>
    );
  }

}
