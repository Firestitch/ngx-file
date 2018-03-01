import { ElementRef } from '@angular/core';
export declare class FsFileDragBaseComponent {
    el: ElementRef;
    constructor(el: ElementRef);
    fileOverTarget: boolean;
    onDragOverElement(event: any): void;
    onDrop(event: any): void;
    onDragOver(event: any): void;
}
