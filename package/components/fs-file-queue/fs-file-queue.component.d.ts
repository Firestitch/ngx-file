import { OnInit } from '@angular/core';
export declare class FsFileQueueComponent implements OnInit {
    files: any;
    previewWidth: any;
    previewHeight: any;
    queue: boolean;
    actions: any;
    actionsTemplate: any;
    private actionsParams;
    private actionsTemplateRefs;
    constructor();
    ngOnInit(): void;
    removeFile(file: any): void;
}
