import { EventEmitter, OnInit } from '@angular/core';
import { FsFileService } from '../../services';
import { FsUtil } from '@firestitch/common';
export declare class FsFileComponent implements OnInit {
    fsFile: FsFileService;
    fsUtil: FsUtil;
    multiple: any;
    accept: any;
    minSize: any;
    maxSize: any;
    imageMaxWidth: any;
    imageMaxHeight: any;
    imageQuality: any;
    imageFormat: any;
    disabled: any;
    preview: any;
    imageFixOrientation: boolean;
    selected: EventEmitter<any>;
    fileInput: any;
    uniqId: string;
    constructor(fsFile: FsFileService, fsUtil: FsUtil);
    ngOnInit(): void;
}
