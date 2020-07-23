import { EventEmitter } from '../../stencil-public-runtime';
export declare class TraimTab {
    header: string;
    disabled: boolean;
    open: boolean;
    onTabHeaderChange: EventEmitter;
    watchHeader(): void;
    render(): any;
}
