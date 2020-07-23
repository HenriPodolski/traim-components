import { EventEmitter } from '../../stencil-public-runtime';
export declare class TraimTabs {
    elem: HTMLElement;
    tabs: any[];
    onChange: EventEmitter;
    componentWillLoad(): void;
    changeTabHandler(): void;
    currentTab(): Promise<number>;
    openTab(tabIndex: number): Promise<void>;
    render(): any;
}
