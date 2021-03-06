import { b as bootstrapLazy } from './index-bc9dc136.js';
import { a as patchEsm } from './patch-214bce34.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["traim-accordion_5",[[4,"traim-accordion",{"useCounter":[4,"use-counter"]},[[0,"togglepane","onTogglePane"]]],[4,"traim-accordion-pane",{"open":[4],"empty":[4],"header":[1],"_isOpen":[32],"show":[64],"close":[64],"isOpen":[64]}],[1,"traim-autocomplete",{"placeholder":[1],"uid":[1],"itemsJSON":[1025,"items-json"],"reset":[4],"emptyMessage":[1,"empty-message"],"items":[1040],"selectedItem":[1040],"activeItem":[32],"_isOpen":[32],"value":[32],"setItems":[64]},[[8,"click","handleOuterClick"],[0,"keydown","handleKeyDown"]]],[1,"traim-slider",{"controls":[4],"controlLeftText":[1,"control-left-text"],"controlRightText":[1,"control-right-text"],"pagination":[4],"animation":[1],"itemsPerSlide":[1026,"items-per-slide"],"activeSlideIndex":[1026,"active-slide-index"],"countSlides":[32],"slideItems":[32],"slideIndexes":[32]}],[1,"traim-slider-slide",{"current":[4],"previous":[4]}]]],["traim-tab",[[1,"traim-tab",{"header":[1537],"disabled":[4],"open":[4]}]]],["traim-tabs",[[1,"traim-tabs",{"tabs":[32],"currentTab":[64],"openTab":[64]},[[0,"changeTabHeader","changeTabHandler"]]]]],["traim-timeline",[[1,"traim-timeline",{"alternate":[4],"loading":[4]}]]],["traim-timeline-item",[[1,"traim-timeline-item",{"type":[1],"last":[4],"left":[4],"loading":[4]}]]],["traim-toggle",[[1,"traim-toggle",{"toggled":[4],"_toggled":[32],"isToggled":[64]}]]],["traim-tooltip",[[1,"traim-tooltip",{"appearance":[1],"orientation":[1],"content":[1],"visibleOnHover":[4,"visible-on-hover"],"isVisible":[1540,"is-visible"]}]]]], options);
  });
};

export { defineCustomElements };
