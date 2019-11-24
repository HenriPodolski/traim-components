import { EventEmitter } from '../../stencil.core';
import { IAutoCompleteItem } from './interfaces';
export declare class TraimAutocomplete {
    placeholder: string;
    items: Array<IAutoCompleteItem>;
    onSelect: EventEmitter;
    onSearch: EventEmitter;
    selectedItem: IAutoCompleteItem;
    activeItem: IAutoCompleteItem;
    _isOpen: boolean;
    value: string;
    setItems(items: Array<IAutoCompleteItem>): Promise<void>;
    select(item: IAutoCompleteItem): void;
    search(e: any): void;
    open(): void;
    close(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    render(): any;
}
