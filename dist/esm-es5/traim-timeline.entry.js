import { r as registerInstance, h } from './core-849a1660.js';
var TraimTimeline = /** @class */ (function () {
    function TraimTimeline(hostRef) {
        registerInstance(this, hostRef);
    }
    TraimTimeline.prototype.render = function () {
        var alternateClass = this.alternate ? 'is-alternate' : '';
        var loadingClass = this.loading ? 'is-loading' : '';
        return (h("ol", { class: "timeline " + alternateClass + " " + loadingClass }, h("slot", null)));
    };
    Object.defineProperty(TraimTimeline, "style", {
        get: function () { return ":host{display:block}.timeline{margin:.55em 0 0;padding:0}.timeline.is-alternate .timeline-item:after,.timeline.is-alternate .timeline-item:before{left:50%;content:\"\"}.timeline.is-alternate .timeline-item:after{margin:0 0 0 -.25em}.timeline.is-alternate .timeline-item__body{left:50%;width:50%}.timeline.is-alternate .timeline-itemis-left .timeline-item__body{left:0;margin:0 0 0 -1em;text-align:right}.timeline.is-loading .timeline-item.is-last:before{border-left-style:dashed;content:\"\"}.timeline.is-loading .timeline-item.is-loading:after{background-color:transparent;border:2px solid var(--color-default)}.timeline.is-loading .timeline-item.is-loading .timeline-item__body{color:var(--color-text)}"; },
        enumerable: true,
        configurable: true
    });
    return TraimTimeline;
}());
export { TraimTimeline as traim_timeline };
