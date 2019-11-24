/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  IAutoCompleteItem,
} from './components/traim-autocomplete/interfaces';

export namespace Components {
  interface TraimAccordion {
    'useCounter': boolean;
  }
  interface TraimAccordionPane {
    'close': () => Promise<void>;
    'header': string;
    'isOpen': () => Promise<boolean>;
    'open': boolean;
    'show': () => Promise<void>;
  }
  interface TraimAutocomplete {
    'items': Array<IAutoCompleteItem>;
    'placeholder': string;
    'setItems': (items: IAutoCompleteItem[]) => Promise<void>;
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
  interface HTMLElementTagNameMap {
    'traim-accordion': HTMLTraimAccordionElement;
    'traim-accordion-pane': HTMLTraimAccordionPaneElement;
    'traim-autocomplete': HTMLTraimAutocompleteElement;
    'traim-tab': HTMLTraimTabElement;
    'traim-tabs': HTMLTraimTabsElement;
    'traim-timeline': HTMLTraimTimelineElement;
    'traim-timeline-item': HTMLTraimTimelineItemElement;
  }
}

declare namespace LocalJSX {
  interface TraimAccordion {
    'onToggle'?: (event: CustomEvent<any>) => void;
    'useCounter'?: boolean;
  }
  interface TraimAccordionPane {
    'header'?: string;
    'onTogglepane'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
  }
  interface TraimAutocomplete {
    'items'?: Array<IAutoCompleteItem>;
    'onSearchAutocompleteItem'?: (event: CustomEvent<any>) => void;
    'onSelectAutocompleteItem'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
  }
  interface TraimTab {
    'disabled'?: boolean;
    'header'?: string;
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

  interface IntrinsicElements {
    'traim-accordion': TraimAccordion;
    'traim-accordion-pane': TraimAccordionPane;
    'traim-autocomplete': TraimAutocomplete;
    'traim-tab': TraimTab;
    'traim-tabs': TraimTabs;
    'traim-timeline': TraimTimeline;
    'traim-timeline-item': TraimTimelineItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'traim-accordion': LocalJSX.TraimAccordion & JSXBase.HTMLAttributes<HTMLTraimAccordionElement>;
      'traim-accordion-pane': LocalJSX.TraimAccordionPane & JSXBase.HTMLAttributes<HTMLTraimAccordionPaneElement>;
      'traim-autocomplete': LocalJSX.TraimAutocomplete & JSXBase.HTMLAttributes<HTMLTraimAutocompleteElement>;
      'traim-tab': LocalJSX.TraimTab & JSXBase.HTMLAttributes<HTMLTraimTabElement>;
      'traim-tabs': LocalJSX.TraimTabs & JSXBase.HTMLAttributes<HTMLTraimTabsElement>;
      'traim-timeline': LocalJSX.TraimTimeline & JSXBase.HTMLAttributes<HTMLTraimTimelineElement>;
      'traim-timeline-item': LocalJSX.TraimTimelineItem & JSXBase.HTMLAttributes<HTMLTraimTimelineItemElement>;
    }
  }
}


