import { TooltipAppearanceEnum, TooltipOrientationsEnum } from './traim-tooltip.enum';
export declare class TraimTooltip {
    appearance: TooltipAppearanceEnum;
    orientation: TooltipOrientationsEnum;
    content: string;
    visibleOnHover: boolean;
    isVisible: boolean;
    show(): void;
    render(): any;
}
