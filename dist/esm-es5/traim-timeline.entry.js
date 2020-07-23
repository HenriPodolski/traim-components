import { r as registerInstance, h } from './index-bc9dc136.js';
var traimTimelineCss = ":host{display:block}.timeline{margin:0.55em 0 0;padding:0}.timeline.is-alternate .timeline-item::before,.timeline.is-alternate .timeline-item::after{left:50%;content:\"\"}.timeline.is-alternate .timeline-item::after{margin:0 0 0 -0.25em}.timeline.is-alternate .timeline-item__body{left:50%;width:50%}.timeline.is-alternate .timeline-itemis-left .timeline-item__body{left:0;margin:0 0 0 -1em;text-align:right}.timeline.is-loading .timeline-item.is-last::before{border-left-style:dashed;content:\"\"}.timeline.is-loading .timeline-item.is-loading::after{background-color:transparent;border:2px solid var(--color-default)}.timeline.is-loading .timeline-item.is-loading .timeline-item__body{color:var(--color-text)}";
var TraimTimeline = /** @class */ (function () {
    function TraimTimeline(hostRef) {
        registerInstance(this, hostRef);
    }
    TraimTimeline.prototype.render = function () {
        var alternateClass = this.alternate ? 'is-alternate' : '';
        var loadingClass = this.loading ? 'is-loading' : '';
        return (h("ol", { class: "timeline " + alternateClass + " " + loadingClass }, h("slot", null)));
    };
    return TraimTimeline;
}());
TraimTimeline.style = traimTimelineCss;
export { TraimTimeline as traim_timeline };
