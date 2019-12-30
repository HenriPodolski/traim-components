import { a as patchEsm, b as bootstrapLazy } from './core-04a1e93f.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["traim-accordion_2",[[4,"traim-accordion",{"useCounter":[4,"use-counter"]},[[0,"togglepane","onTogglePane"]]],[4,"traim-accordion-pane",{"open":[4],"empty":[4],"header":[1],"_isOpen":[32],"show":[64],"close":[64],"isOpen":[64]}]]],["traim-autocomplete",[[1,"traim-autocomplete",{"placeholder":[1],"items":[1040],"selectedItem":[32],"activeItem":[32],"_isOpen":[32],"value":[32],"setItems":[64]},[[0,"keydown","handleKeyDown"]]]]],["traim-tab",[[1,"traim-tab",{"header":[1537],"disabled":[4],"open":[4]}]]],["traim-tabs",[[1,"traim-tabs",{"tabs":[32],"currentTab":[64],"openTab":[64]},[[0,"changeTabHeader","changeTabHandler"]]]]],["traim-timeline",[[1,"traim-timeline",{"alternate":[4],"loading":[4]}]]],["traim-timeline-item",[[1,"traim-timeline-item",{"type":[1],"last":[4],"left":[4],"loading":[4]}]]],["traim-tooltip",[[1,"traim-tooltip",{"appearance":[1],"orientation":[1],"content":[1],"visibleOnHover":[4,"visible-on-hover"],"isVisible":[1540,"is-visible"]}]]]], options);
  });
};

export { defineCustomElements };
