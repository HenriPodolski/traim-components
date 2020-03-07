import { TraimSliderAnimationEnum } from './traim-slider-animation.enum';
export declare class TraimSlider {
    controls: boolean;
    controlLeftText: string;
    controlRightText: string;
    pagination: boolean;
    animation: TraimSliderAnimationEnum;
    itemsPerSlide: number;
    watchItemsPerSlide(): void;
    activeSlideIndex: number;
    countSlides: number;
    slideItems: HTMLElement[];
    slideIndexes: number[][];
    slidesWrapperElement: HTMLElement;
    slotElement: HTMLSlotElement;
    constructor();
    gotoSlide(slideIndex: number): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleSlotChange(): void;
    setupSlides(): void;
    render(): any;
}
