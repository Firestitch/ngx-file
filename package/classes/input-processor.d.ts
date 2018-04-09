import { ElementRef, EventEmitter } from '@angular/core';
export declare class InputProcessor {
    containerEl: any;
    inputEl: any;
    select: EventEmitter<{}>;
    constructor(inputEl?: ElementRef, dragDrop?: ElementRef);
    /**
     * Initialize service for target element
     * @param el
     */
    initForElement(el: ElementRef): void;
    initDragNDropForElement(el: ElementRef): void;
    /**
     * Fire when input was changed
     */
    onChanges(): void;
    /**
     * Fire when on root element was dropped file
     */
    onDrop(): void;
    selectFiles(files: any): void;
}
