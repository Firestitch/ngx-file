import { EventEmitter, OnInit } from '@angular/core';
import { FsFile } from '../../../models/fs-file';
export declare class FsFileQueuePreviewComponent implements OnInit {
    actions: any;
    actionsTemplate: any;
    file: FsFile;
    previewWidth: any;
    previewHeight: any;
    deleted: EventEmitter<{}>;
    filteredActions: any[];
    constructor();
    ngOnInit(): void;
    getActionClasses(action: any): any[];
    callAction(action: any): void;
    private cleanActions();
}
