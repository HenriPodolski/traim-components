import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
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
    attribute: 'items-per-slide',
    mutable: true
  })
  itemsPerSlide: number = 1;

  @Watch('itemsPerSlide')
  watchItemsPerSlide() {
    this.handleSlotChange();
  }

  @Prop({
    mutable: true
  })
  activeSlideIndex: number = 0;

  @State()
  countSlides: number;

  @State()
  slideItems: HTMLElement[];

  @State()
  slideIndexes: number[][];

  slidesWrapperElement!: HTMLElement;

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

    const previousSlides = this.slideItems.filter((slide) => slide.hasAttribute('previous'));
    const currentSlides = this.slideItems.filter((slide) => slide.hasAttribute('current'));

    if (previousSlides.length) {
      previousSlides.forEach((previousSlide) => previousSlide.removeAttribute('previous'));
    }

    if (currentSlides.length) {
      currentSlides.forEach((currentSlide) => {
        currentSlide.removeAttribute('current');
        currentSlide.setAttribute('previous', 'true');
      });
    }

    if (this.slideIndexes[slideIndex]) {
      // examples:
      // base 1: [[0], [1], [2]]
      // base 2: [[0,1], [2,3], [4,5]]
      // base 3: [[0,1,2], [3,4,5], [5,6,7]]
      this.slideIndexes[slideIndex].forEach((slideItemIndex) => {
        if (this.slideItems[slideItemIndex]) {
          this.slideItems[slideItemIndex].setAttribute('current', 'true');
        }
      });

      this.activeSlideIndex = slideIndex;
    }
  }

  componentDidLoad() {
    if (!this.slotElement) {
      this.slotElement = this.slidesWrapperElement.querySelector('slot');
      this.slotElement.addEventListener('slotchange', this.handleSlotChange);
    }

    this.handleSlotChange();
  }

  disconnectedCallback() {
    this.slotElement.removeEventListener('slotchange', this.handleSlotChange);
  }

  handleSlotChange() {
    this.setupSlides();
  }

  setupSlides() {
    this.slideItems = this.slotElement.assignedElements() as HTMLElement[];
    this.countSlides = Math.floor(this.slideItems.length / this.itemsPerSlide);
    this.countSlides = this.countSlides ? this.countSlides : 1;
    this.slideIndexes = [...Array(this.countSlides).keys()].map((i) => {
      const startItem = i * this.itemsPerSlide;
      return [...Array(this.itemsPerSlide).keys()].map((j) => startItem + j)
    });

    const fractions = [...Array(this.itemsPerSlide).keys()].map(() => {
      return '1fr';
    });

    this.slidesWrapperElement.style.gridTemplateColumns = fractions.join(' ');

    this.gotoSlide(this.activeSlideIndex);
  }

  render() {
    const animationClass = this.animation;
    return (
      <Host>
        <div class={`slider ${animationClass}`}>
          <section ref={(el) => this.slidesWrapperElement = el as HTMLElement} class={`slider__slides`}>
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
