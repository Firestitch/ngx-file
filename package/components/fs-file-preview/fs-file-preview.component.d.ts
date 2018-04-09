import { EventEmitter, AfterViewInit } from '@angular/core';
import { FsFile } from '../../models';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base';
export declare class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterViewInit {
    file: FsFile;
    preview: string;
    _actions: any;
    _actionsTemplate: any;
    previewWidth: number;
    previewHeight: number;
    _file: FsFile;
    remove: EventEmitter<{}>;
    filteredActions: any[];
    constructor();
    ngAfterViewInit(): void;
    getActionClasses(action: any): any[];
    callAction(action: any): void;
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    private generateFilePreview(file);
    private cleanActions();
}
