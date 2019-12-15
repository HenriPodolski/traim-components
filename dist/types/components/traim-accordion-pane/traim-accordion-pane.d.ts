import { EventEmitter } from '../../stencil.core';
export declare class TraimAccordionPane {
    _isOpen: boolean;
    open: boolean;
    empty: boolean;
    header: string;
    onToggle: EventEmitter;
    componentWillLoad(): void;
    show(): Promise<void>;
    close(): Promise<void>;
    toggle(): void;
    isOpen(): Promise<boolean>;
    render(): any[];
}
