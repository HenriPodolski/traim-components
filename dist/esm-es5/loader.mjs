import { a as patchEsm, b as bootstrapLazy } from './core-7b09a8d3.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["traim-accordion_2", [[4, "traim-accordion", { "useCounter": [4, "use-counter"] }, [[0, "togglepane", "onTogglePane"]]], [4, "traim-accordion-pane", { "open": [4], "header": [1], "_isOpen": [32], "show": [64], "close": [64], "isOpen": [64] }]]], ["traim-autocomplete", [[1, "traim-autocomplete", { "placeholder": [1], "items": [32], "selectedItem": [32], "activeItem": [32], "_isOpen": [32], "value": [32], "setItems": [64] }, [[0, "keydown", "handleKeyDown"]]]]], ["traim-timeline", [[1, "traim-timeline", { "alternate": [4], "loading": [4] }]]], ["traim-timeline-item", [[1, "traim-timeline-item", { "type": [1], "last": [4], "left": [4], "loading": [4] }]]]], options);
    });
};
export { defineCustomElements };
