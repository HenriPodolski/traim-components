import { EventEmitter } from '../../stencil.core';
import { IAutoCompleteItem } from './interfaces';
export declare class TraimAutocomplete {
    placeholder: string;
    uid: string;
    itemsJSON: string;
    items: Array<IAutoCompleteItem>;
    onSelect: EventEmitter;
    onSearch: EventEmitter;
    selectedItem: IAutoCompleteItem;
    activeItem: IAutoCompleteItem;
    _isOpen: boolean;
    value: string;
    private el;
    setItems(items: Array<IAutoCompleteItem>): Promise<void>;
    constructor();
    connectedCallback(): void;
    select(item: IAutoCompleteItem): void;
    search(e: any): void;
    open(): void;
    close(): void;
    handleOuterClick(evt: Event): void;
    handleKeyDown(evt: KeyboardEvent): void;
    render(): any;
}
