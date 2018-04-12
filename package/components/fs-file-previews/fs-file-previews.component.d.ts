import { OnInit } from '@angular/core';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base';
export declare class FsFilePreviewsComponent extends FsFilePreviewsBaseComponent implements OnInit {
    files: any;
    previewWidth: number;
    previewHeight: number;
    queue: boolean;
    constructor();
    ngOnInit(): void;
    removeFile(file: any): void;
}
