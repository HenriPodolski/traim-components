import { EventEmitter } from '../../stencil-public-runtime';
export declare class TraimAccordion {
    private element;
    useCounter: boolean;
    onToggle: EventEmitter;
    onTogglePane(ev: any): void;
    render(): any;
}
