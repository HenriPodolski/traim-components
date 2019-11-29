'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-12dc5aec.js');

const TraimTimeline = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const alternateClass = this.alternate ? 'is-alternate' : '';
        const loadingClass = this.loading ? 'is-loading' : '';
        return (core.h("ol", { class: `timeline ${alternateClass} ${loadingClass}` }, core.h("slot", null)));
    }
    static get style() { return ":host{display:block}.timeline{margin:.55em 0 0;padding:0}.timeline.is-alternate .timeline-item:after,.timeline.is-alternate .timeline-item:before{left:50%;content:\"\"}.timeline.is-alternate .timeline-item:after{margin:0 0 0 -.25em}.timeline.is-alternate .timeline-item__body{left:50%;width:50%}.timeline.is-alternate .timeline-itemis-left .timeline-item__body{left:0;margin:0 0 0 -1em;text-align:right}.timeline.is-loading .timeline-item.is-last:before{border-left-style:dashed;content:\"\"}.timeline.is-loading .timeline-item.is-loading:after{background-color:transparent;border:2px solid var(--color-default)}.timeline.is-loading .timeline-item.is-loading .timeline-item__body{color:var(--color-text)}"; }
};

exports.traim_timeline = TraimTimeline;
