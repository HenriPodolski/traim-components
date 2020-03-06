import { r as registerInstance, h, H as Host } from './core-705deb91.js';
var TooltipAppearanceEnum;
(function (TooltipAppearanceEnum) {
    TooltipAppearanceEnum["top"] = "top";
    TooltipAppearanceEnum["left"] = "left";
    TooltipAppearanceEnum["right"] = "right";
    TooltipAppearanceEnum["bottom"] = "bottom";
})(TooltipAppearanceEnum || (TooltipAppearanceEnum = {}));
var TooltipOrientationsEnum;
(function (TooltipOrientationsEnum) {
    TooltipOrientationsEnum["left"] = "left";
    TooltipOrientationsEnum["right"] = "right";
    TooltipOrientationsEnum["center"] = "center";
})(TooltipOrientationsEnum || (TooltipOrientationsEnum = {}));
var TraimTooltip = /** @class */ (function () {
    function TraimTooltip(hostRef) {
        registerInstance(this, hostRef);
        this.appearance = TooltipAppearanceEnum.bottom;
        this.orientation = TooltipOrientationsEnum.center;
        this.visibleOnHover = true;
        this.isVisible = false;
    }
    TraimTooltip.prototype.show = function () {
        this.isVisible = true;
    };
    TraimTooltip.prototype.render = function () {
        var _this = this;
        var appearanceClass = "is-" + this.appearance + "-appearance";
        var orientationClass = "is-" + this.orientation + "-orientation";
        var hoverClass = this.visibleOnHover ? 'is-hover' : '';
        var visibleClass = this.isVisible ? 'is-visible' : '';
        return (h(Host, { onClick: function () { return _this.show(); } }, h("div", { class: "tooltip " + appearanceClass + " " + orientationClass + " " + hoverClass + " " + visibleClass }, h("slot", { name: "tooltip-trigger" }), h("div", { class: "tooltip__display" }, h("slot", { name: "tooltip-display" })))));
    };
    Object.defineProperty(TraimTooltip, "style", {
        get: function () { return ":root{--screen-limit-xsmall:20em;--screen-limit-small:30em;--screen-limit-medium:48em;--screen-limit-large:64em;--screen-limit-xlarge:78em;--screen-limit-super:116em;--spacing-super:3em;--spacing-xlarge:2em;--spacing-large:1.5em;--spacing-medium:1em;--spacing-small:0.5em;--spacing-xsmall:0.25em;--spacing-tiny:0.125em;--grid-gutter:1em;--color-default:#74748c;--color-quiet:#a6a6bf;--color-text:#000;--color-dark:#eee;--color-background:#f9f9f9;--color-light:#fdfdfd;--color-link:#4267ff;--color-outline:#4267ff;--color-brand:#2c3e50;--color-info:#4267ff;--color-warning:orange;--color-success:#088a05;--color-error:#ee0202;--color-highlight:#ffef14;--color-disabled:var(--color-default);--color-disabled-background:#f2f2f4;--color-transparent:transparent;--border-width:1px;--border-style:solid;--border-color:var(--color-default);--border-radius:4px;--border-radius-rounded:30em;--box-shadow:0 0 1px rgba(#000,0.6);--box-shadow-high:0 5px 10px -3px rgba(#000,0.4);--box-shadow-higher:0 10px 25px -4px rgba(#000,0.4);--box-shadow-highest:0 20px 55px -8px rgba(#000,0.4);--border-color-focus:var(--color-outline);--box-shadow-focus:inset 0 0 0 2px var(--color-outline);--disabled-opacity:0.5;--z-over-content:100;--z-over-control:200;--z-over-page:300;--z-over-screen:400;--z-over-everything:500;--text-font-family-sans-serif:sans-serif;--text-font-family-serif:serif;--text-font-family-mono:monospace;--text-font-family:var(--text-font-family-sans-serif);--text-font-size-super:2em;--text-font-size-xlarge:1.5em;--text-font-size-large:1.25em;--text-font-size-medium:1em;--text-font-size-small:0.8em;--text-font-size-xsmall:0.67em;--text-font-weight:normal;--text-font-weight-heavy:bold;--text-line-height:1.55}.tooltip{position:relative;overflow:visible;display:inline-block}.tooltip__display{position:absolute;z-index:var(--z-over-page);visibility:hidden}.tooltip__display:before{content:\" \";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent}.tooltip.is-visible .tooltip__display{visibility:visible}.tooltip:after,.tooltip:before{z-index:var(--z-over-page);visibility:hidden}.tooltip:before{position:absolute;border:.6em solid transparent;content:\"\"}.tooltip:after{position:absolute;padding:.25em .5em;color:#fff;line-height:1.45;white-space:nowrap;background-color:#000;border:1px solid #000;border-radius:var(--border-radius);content:attr(aria-label);visibility:hidden}.tooltip:hover:after,.tooltip:hover:before{visibility:visible}.tooltip.is-top-appearance:before{top:0;left:50%;border-top-color:#000;-webkit-transform:translate(-50%,-1em);transform:translate(-50%,-1em)}.tooltip.is-top-appearance:after{top:0}.tooltip.is-top-appearance.is-right-orientation:after{left:0;-webkit-transform:translateY(-3em);transform:translateY(-3em)}.tooltip.is-top-appearance.is-center-orientation:after{left:50%;-webkit-transform:translate(-50%,-3em);transform:translate(-50%,-3em)}.tooltip.is-top-appearance.is-left-orientation:after{left:100%;-webkit-transform:translate(-100%,-3em);transform:translate(-100%,-3em)}.tooltip.is-right-appearance:before{top:50%;left:100%;border-right-color:#000;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tooltip.is-right-appearance:after{top:50%;left:100%;-webkit-transform:translate(1em,-50%);transform:translate(1em,-50%)}.tooltip.is-bottom-appearance:before{bottom:0;left:50%;border-bottom-color:#000;-webkit-transform:translate(-50%,1em);transform:translate(-50%,1em)}.tooltip.is-bottom-appearance:after{bottom:0}.tooltip.is-bottom-appearance.is-right-orientation:after{left:0;-webkit-transform:translateY(3em);transform:translateY(3em)}.tooltip.is-bottom-appearance.is-center-orientation:after{left:50%;-webkit-transform:translate(-50%,3em);transform:translate(-50%,3em)}.tooltip.is-bottom-appearance.is-left-orientation:after{left:100%;-webkit-transform:translate(-100%,3em);transform:translate(-100%,3em)}.tooltip.is-left-appearance:before{top:50%;right:100%;border-left-color:#000;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.tooltip.is-left-appearance:after{top:50%;right:100%;-webkit-transform:translate(-1em,-50%);transform:translate(-1em,-50%)}"; },
        enumerable: true,
        configurable: true
    });
    return TraimTooltip;
}());
export { TraimTooltip as traim_tooltip };
