import { Component, h, Host, Prop, State } from '@stencil/core';
import { TraimSliderAnimationEnum } from './traim-slider-animation.enum';

@Component({
  tag: 'traim-slider',
  styleUrl: 'traim-slider.scss',
  shadow: true
})
export class TraimSlider {
  @Prop()
  controls: boolean;

  @Prop()
  controlLeftText: string = 'Previous';

  @Prop()
  controlRightText: string = 'Next';

  @Prop()
  pagination: boolean;

  @Prop()
  animation: TraimSliderAnimationEnum = TraimSliderAnimationEnum.NONE;

  @Prop({
    mutable: true
  })
  activeSlideIndex: number = 0;

  @State()
  countSlides: number;

  @State()
  slides: HTMLElement[];

  slotWrapperElement!: HTMLElement;

  slotElement!: HTMLSlotElement;

  constructor() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  gotoSlide(slideIndex: number) {
    if (slideIndex < 0) {
      slideIndex = this.countSlides - 1;
    } else if (slideIndex > this.countSlides - 1) {
      slideIndex = 0;
    }

    const previousSlide = this.slides.find((slide) => slide.hasAttribute('previous'));

    if (previousSlide) {
      previousSlide.removeAttribute('previous');
    }

    if (this.slides[this.activeSlideIndex]) {
      this.slides[this.activeSlideIndex].removeAttribute('current');
      this.slides[this.activeSlideIndex].setAttribute('previous', 'true');
    }

    if (this.slides[slideIndex]) {
      this.slides[slideIndex].setAttribute('current', 'true');
      this.activeSlideIndex = slideIndex;
    }
  }

  componentDidLoad() {
    this.slotElement = this.slotWrapperElement.querySelector('slot');
    this.handleSlotChange();
    this.slotElement.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    this.slotElement.removeEventListener('slotchange', this.handleSlotChange);
  }

  handleSlotChange() {
    this.slides = this.slotElement.assignedElements() as HTMLElement[];
    this.countSlides = this.slides.length;
    console.log(this.slides, this.countSlides);
    this.gotoSlide(this.activeSlideIndex);
  }

  render() {
    const animationClass = this.animation;
    return (
      <Host>
        <div class={`slider ${animationClass}`}>
          <section ref={(el) => this.slotWrapperElement = el as HTMLElement} class={`slider__slides`}>
            <slot></slot>
          </section>
          {this.countSlides > 1 && this.controls && (
            <button onClick={() => this.gotoSlide(this.activeSlideIndex - 1)} role="button" class={`slider__button is-left`} aria-label={this.controlLeftText}>
              <span aria-hidden="true" class={`slider__button-inner`}>&#10094;</span>
            </button>
          )}
          {this.countSlides > 1 && this.controls && (
            <button onClick={() => this.gotoSlide(this.activeSlideIndex + 1)} role="button" class={`slider__button is-right`} aria-label={this.controlRightText}>
              <span aria-hidden="true" class={`slider__button-inner`}>&#10095;</span>
            </button>
          )}
        </div>
      </Host>
    );
  }

}
