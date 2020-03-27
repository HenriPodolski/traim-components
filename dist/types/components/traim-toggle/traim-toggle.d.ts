import { EventEmitter } from '../../stencil.core';
export declare class TraimToggle {
    toggled: boolean;
    _toggled: boolean;
    onChange: EventEmitter;
    componentDidLoad(): void;
    isToggled(): Promise<boolean>;
    toggle(): void;
    handleToggle(e: any): void;
    render(): any;
}