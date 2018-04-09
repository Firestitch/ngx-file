import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
export declare class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit {
    el: ElementRef;
    private _processor;
    private _multiple;
    private _accept;
    private _disabled;
    multiple: boolean;
    accept: string;
    disabled: boolean;
    previewWidth: number;
    previewHeight: number;
    select: EventEmitter<any>;
    fileInput: any;
    instruction: string;
    file: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    removeFile(file: any): void;
}
