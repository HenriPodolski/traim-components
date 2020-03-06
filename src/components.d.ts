/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IAutoCompleteItem,
} from './components/traim-autocomplete/interfaces';
import {
  TraimSliderAnimationEnum,
} from './components/traim-slider/traim-slider-animation.enum';
import {
  TooltipAppearanceEnum,
  TooltipOrientationsEnum,
} from './components/traim-tooltip/traim-tooltip.enum';

export namespace Components {
  interface TraimAccordion {
    'useCounter': boolean;
  }
  interface TraimAccordionPane {
    'close': () => Promise<void>;
    'empty': boolean;
    'header': string;
    'isOpen': () => Promise<boolean>;
    'open': boolean;
    'show': () => Promise<void>;
  }
  interface TraimAutocomplete {
    'emptyMessage': string;
    'items': IAutoCompleteItem[];
    'itemsJSON': string;
    'placeholder': string;
    'reset': boolean;
    'setItems': (items: IAutoCompleteItem[]) => Promise<void>;
    'uid': string;
  }
  interface TraimSlider {
    'activeSlideIndex': number;
    'animation': TraimSliderAnimationEnum;
    'controlLeftText': string;
    'controlRightText': string;
    'controls': boolean;
    'pagination': boolean;
  }
  interface TraimSliderSlide {
    'current': boolean;
    'previous': boolean;
  }
  interface TraimTab {
    'disabled': boolean;
    'header': string;
    'open': boolean;
  }
  interface TraimTabs {
    'currentTab': () => Promise<number>;
    'openTab': (tabIndex: number) => Promise<void>;
  }
  interface TraimTimeline {
    'alternate': boolean;
    'loading': boolean;
  }
  interface TraimTimelineItem {
    'last': boolean;
    'left': boolean;
    'loading': boolean;
    'type': string;
  }
  interface TraimTooltip {
    'appearance': TooltipAppearanceEnum;
    'content': string;
    'isVisible': boolean;
    'orientation': TooltipOrientationsEnum;
    'visibleOnHover': boolean;
  }
}

declare global {


  interface HTMLTraimAccordionElement extends Components.TraimAccordion, HTMLStencilElement {}
  var HTMLTraimAccordionElement: {
    prototype: HTMLTraimAccordionElement;
    new (): HTMLTraimAccordionElement;
  };

  interface HTMLTraimAccordionPaneElement extends Components.TraimAccordionPane, HTMLStencilElement {}
  var HTMLTraimAccordionPaneElement: {
    prototype: HTMLTraimAccordionPaneElement;
    new (): HTMLTraimAccordionPaneElement;
  };

  interface HTMLTraimAutocompleteElement extends Components.TraimAutocomplete, HTMLStencilElement {}
  var HTMLTraimAutocompleteElement: {
    prototype: HTMLTraimAutocompleteElement;
    new (): HTMLTraimAutocompleteElement;
  };

  interface HTMLTraimSliderElement extends Components.TraimSlider, HTMLStencilElement {}
  var HTMLTraimSliderElement: {
    prototype: HTMLTraimSliderElement;
    new (): HTMLTraimSliderElement;
  };

  interface HTMLTraimSliderSlideElement extends Components.TraimSliderSlide, HTMLStencilElement {}
  var HTMLTraimSliderSlideElement: {
    prototype: HTMLTraimSliderSlideElement;
    new (): HTMLTraimSliderSlideElement;
  };

  interface HTMLTraimTabElement extends Components.TraimTab, HTMLStencilElement {}
  var HTMLTraimTabElement: {
    prototype: HTMLTraimTabElement;
    new (): HTMLTraimTabElement;
  };

  interface HTMLTraimTabsElement extends Components.TraimTabs, HTMLStencilElement {}
  var HTMLTraimTabsElement: {
    prototype: HTMLTraimTabsElement;
    new (): HTMLTraimTabsElement;
  };

  interface HTMLTraimTimelineElement extends Components.TraimTimeline, HTMLStencilElement {}
  var HTMLTraimTimelineElement: {
    prototype: HTMLTraimTimelineElement;
    new (): HTMLTraimTimelineElement;
  };

  interface HTMLTraimTimelineItemElement extends Components.TraimTimelineItem, HTMLStencilElement {}
  var HTMLTraimTimelineItemElement: {
    prototype: HTMLTraimTimelineItemElement;
    new (): HTMLTraimTimelineItemElement;
  };

  interface HTMLTraimTooltipElement extends Components.TraimTooltip, HTMLStencilElement {}
  var HTMLTraimTooltipElement: {
    prototype: HTMLTraimTooltipElement;
    new (): HTMLTraimTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'traim-accordion': HTMLTraimAccordionElement;
    'traim-accordion-pane': HTMLTraimAccordionPaneElement;
    'traim-autocomplete': HTMLTraimAutocompleteElement;
    'traim-slider': HTMLTraimSliderElement;
    'traim-slider-slide': HTMLTraimSliderSlideElement;
    'traim-tab': HTMLTraimTabElement;
    'traim-tabs': HTMLTraimTabsElement;
    'traim-timeline': HTMLTraimTimelineElement;
    'traim-timeline-item': HTMLTraimTimelineItemElement;
    'traim-tooltip': HTMLTraimTooltipElement;
  }
}

declare namespace LocalJSX {
  interface TraimAccordion {
    'onToggle'?: (event: CustomEvent<any>) => void;
    'useCounter'?: boolean;
  }
  interface TraimAccordionPane {
    'empty'?: boolean;
    'header'?: string;
    'onTogglepane'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
  }
  interface TraimAutocomplete {
    'emptyMessage'?: string;
    'items'?: IAutoCompleteItem[];
    'itemsJSON'?: string;
    'onSearchAutocomplete'?: (event: CustomEvent<any>) => void;
    'onSelectAutocomplete'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'reset'?: boolean;
    'uid'?: string;
  }
  interface TraimSlider {
    'activeSlideIndex'?: number;
    'animation'?: TraimSliderAnimationEnum;
    'controlLeftText'?: string;
    'controlRightText'?: string;
    'controls'?: boolean;
    'pagination'?: boolean;
  }
  interface TraimSliderSlide {
    'current'?: boolean;
    'previous'?: boolean;
  }
  interface TraimTab {
    'disabled'?: boolean;
    'header'?: string;
    'onChangeTabHeader'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
  }
  interface TraimTabs {
    'onChangeTab'?: (event: CustomEvent<any>) => void;
  }
  interface TraimTimeline {
    'alternate'?: boolean;
    'loading'?: boolean;
  }
  interface TraimTimelineItem {
    'last'?: boolean;
    'left'?: boolean;
    'loading'?: boolean;
    'type'?: string;
  }
  interface TraimTooltip {
    'appearance'?: TooltipAppearanceEnum;
    'content'?: string;
    'isVisible'?: boolean;
    'orientation'?: TooltipOrientationsEnum;
    'visibleOnHover'?: boolean;
  }

  interface IntrinsicElements {
    'traim-accordion': TraimAccordion;
    'traim-accordion-pane': TraimAccordionPane;
    'traim-autocomplete': TraimAutocomplete;
    'traim-slider': TraimSlider;
    'traim-slider-slide': TraimSliderSlide;
    'traim-tab': TraimTab;
    'traim-tabs': TraimTabs;
    'traim-timeline': TraimTimeline;
    'traim-timeline-item': TraimTimelineItem;
    'traim-tooltip': TraimTooltip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'traim-accordion': LocalJSX.TraimAccordion & JSXBase.HTMLAttributes<HTMLTraimAccordionElement>;
      'traim-accordion-pane': LocalJSX.TraimAccordionPane & JSXBase.HTMLAttributes<HTMLTraimAccordionPaneElement>;
      'traim-autocomplete': LocalJSX.TraimAutocomplete & JSXBase.HTMLAttributes<HTMLTraimAutocompleteElement>;
      'traim-slider': LocalJSX.TraimSlider & JSXBase.HTMLAttributes<HTMLTraimSliderElement>;
      'traim-slider-slide': LocalJSX.TraimSliderSlide & JSXBase.HTMLAttributes<HTMLTraimSliderSlideElement>;
      'traim-tab': LocalJSX.TraimTab & JSXBase.HTMLAttributes<HTMLTraimTabElement>;
      'traim-tabs': LocalJSX.TraimTabs & JSXBase.HTMLAttributes<HTMLTraimTabsElement>;
      'traim-timeline': LocalJSX.TraimTimeline & JSXBase.HTMLAttributes<HTMLTraimTimelineElement>;
      'traim-timeline-item': LocalJSX.TraimTimelineItem & JSXBase.HTMLAttributes<HTMLTraimTimelineItemElement>;
      'traim-tooltip': LocalJSX.TraimTooltip & JSXBase.HTMLAttributes<HTMLTraimTooltipElement>;
    }
  }
}


