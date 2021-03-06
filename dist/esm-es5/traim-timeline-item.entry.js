import { r as registerInstance, h } from './index-bc9dc136.js';
var traimTimelineItemCss = ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:#ffa500;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000, 0.6);--box-shadow-high:0 5px 10px -3px rgba(#000, 0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000, 0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000, 0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.timeline-item{--timeline-item-color:var(--color-default);position:relative;padding:0 0 1.5em;list-style:none}.timeline-item::before{position:absolute;top:0;left:0.25em;height:100%;margin-left:-1px;border-left:1px solid var(--color-default);content:\"\"}.timeline-item.is-last::before,.timeline-item.is-loading::before{border-left-style:none;content:\"\"}.timeline-item::after{position:absolute;top:0;width:0.5em;height:0.5em;background-color:var(--timeline-item-color);border-radius:100%;-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff;content:\"\"}.timeline-item__body{position:relative;top:-0.55em;margin:0 0 0 1em}";
var TraimTimelineItem = /** @class */ (function () {
    function TraimTimelineItem(hostRef) {
        registerInstance(this, hostRef);
    }
    TraimTimelineItem.prototype.render = function () {
        var typeClass = this.type ? "is-" + this.type : '';
        var lastClass = this.last ? "is-last" : '';
        var leftClass = this.left ? "is-left" : '';
        var loadingClass = this.loading && !this.last ? "is-loading" : '';
        return (h("li", { class: "timeline-item " + typeClass + " " + leftClass + " " + lastClass + " " + loadingClass }, h("div", { class: "timeline-item__body" }, h("slot", null))));
    };
    return TraimTimelineItem;
}());
TraimTimelineItem.style = traimTimelineItemCss;
export { TraimTimelineItem as traim_timeline_item };
