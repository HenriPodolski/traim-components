import { EventEmitter } from '../../stencil.core';
import { IAutoCompleteItem } from './interfaces';
export declare class TraimAutocomplete {
    placeholder: string;
    onSelect: EventEmitter;
    onSearch: EventEmitter;
    items: Array<IAutoCompleteItem>;
    selectedItem: IAutoCompleteItem;
    activeItem: IAutoCompleteItem;
    _isOpen: boolean;
    value: string;
    setItems(items: Array<IAutoCompleteItem>): void;
    select(item: IAutoCompleteItem): void;
    search(e: any): void;
    open(): void;
    close(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    render(): any;
}
