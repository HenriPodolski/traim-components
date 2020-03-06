import { TraimSliderAnimationEnum } from './traim-slider-animation.enum';
export declare class TraimSlider {
    controls: boolean;
    controlLeftText: string;
    controlRightText: string;
    pagination: boolean;
    animation: TraimSliderAnimationEnum;
    activeSlideIndex: number;
    countSlides: number;
    slides: HTMLElement[];
    slotWrapperElement: HTMLElement;
    slotElement: HTMLSlotElement;
    constructor();
    gotoSlide(slideIndex: number): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleSlotChange(): void;
    render(): any;
}
