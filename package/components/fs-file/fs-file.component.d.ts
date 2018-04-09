import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
export declare class FsFileComponent extends FsFileDragBaseComponent implements OnInit {
    el: ElementRef;
    private _inputProcessor;
    private _multiple;
    private _accept;
    private _disabled;
    private _processOptions;
    private _autoProcess;
    multiple: boolean;
    accept: string;
    disabled: boolean;
    imageWidth: any;
    imageHeight: any;
    imageQuality: any;
    select: EventEmitter<any>;
    fileInput: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
