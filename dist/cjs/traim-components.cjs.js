'use strict';

const core = require('./core-fbc63386.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["traim-accordion_2.cjs",[[4,"traim-accordion",{"useCounter":[4,"use-counter"]},[[0,"togglepane","onTogglePane"]]],[4,"traim-accordion-pane",{"open":[4],"header":[1],"_isOpen":[32],"show":[64],"close":[64],"isOpen":[64]}]]],["traim-autocomplete.cjs",[[1,"traim-autocomplete",{"placeholder":[1],"items":[32],"selectedItem":[32],"activeItem":[32],"_isOpen":[32],"value":[32],"setItems":[64]},[[0,"keydown","handleKeyDown"]]]]],["traim-timeline.cjs",[[1,"traim-timeline",{"alternate":[4],"loading":[4]}]]],["traim-timeline-item.cjs",[[1,"traim-timeline-item",{"type":[1],"last":[4],"left":[4],"loading":[4]}]]]], options);
});
