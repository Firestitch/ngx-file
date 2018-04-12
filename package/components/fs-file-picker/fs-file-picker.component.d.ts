import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
export declare class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit {
    el: ElementRef;
    private _processor;
    private _accept;
    private _disabled;
    imageWidth: any;
    imageHeight: any;
    imageQuality: any;
    previewUrl: any;
    name: any;
    accept: string;
    disabled: boolean;
    previewWidth: number;
    previewHeight: number;
    select: EventEmitter<any>;
    remove: EventEmitter<{}>;
    fileInput: any;
    instruction: string;
    file: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    selectFile(file: any): void;
    removeFile(file: any): void;
}
