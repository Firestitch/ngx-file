import { EventEmitter, AfterViewInit } from '@angular/core';
import { FsFile } from '../../models/fs-file';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base';
import { FsFileService } from '../../services';
export declare class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterViewInit {
    private _fileService;
    file: FsFile;
    preview: string;
    _actions: any;
    _actionsTemplate: any;
    previewWidth: number;
    previewHeight: number;
    _file: FsFile;
    remove: EventEmitter<{}>;
    filteredActions: any[];
    constructor(_fileService: FsFileService);
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
