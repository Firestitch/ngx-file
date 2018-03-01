import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FsFileService } from '../../services';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
export declare class FsFileComponent extends FsFileDragBaseComponent implements OnInit {
    fsFile: FsFileService;
    el: ElementRef;
    multiple: any;
    accept: any;
    minSize: any;
    maxSize: any;
    imageMaxWidth: any;
    imageMaxHeight: any;
    imageQuality: any;
    imageFormat: any;
    disabled: any;
    imageFixOrientation: boolean;
    select: EventEmitter<any>;
    fileInput: any;
    constructor(fsFile: FsFileService, el: ElementRef);
    ngOnInit(): void;
}
