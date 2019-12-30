import { r as registerInstance, h } from './core-04a1e93f.js';

const TraimTimeline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const alternateClass = this.alternate ? 'is-alternate' : '';
        const loadingClass = this.loading ? 'is-loading' : '';
        return (h("ol", { class: `timeline ${alternateClass} ${loadingClass}` }, h("slot", null)));
    }
    static get style() { return ":host{display:block}.timeline{margin:.55em 0 0;padding:0}.timeline.is-alternate .timeline-item:after,.timeline.is-alternate .timeline-item:before{left:50%;content:\"\"}.timeline.is-alternate .timeline-item:after{margin:0 0 0 -.25em}.timeline.is-alternate .timeline-item__body{left:50%;width:50%}.timeline.is-alternate .timeline-itemis-left .timeline-item__body{left:0;margin:0 0 0 -1em;text-align:right}.timeline.is-loading .timeline-item.is-last:before{border-left-style:dashed;content:\"\"}.timeline.is-loading .timeline-item.is-loading:after{background-color:transparent;border:2px solid var(--color-default)}.timeline.is-loading .timeline-item.is-loading .timeline-item__body{color:var(--color-text)}"; }
};

export { TraimTimeline as traim_timeline };
