import { ElementRef, EventEmitter } from '@angular/core';
import 'fileapi/plugins/FileAPI.exif.js';
export declare class FsFileService {
    containerEl: any;
    el: any;
    select: EventEmitter<{}>;
    private _options;
    constructor();
    multiple: boolean;
    accept: string;
    minSize: any;
    maxSize: any;
    imageMaxWidth: any;
    imageMaxHeight: any;
    imageQuality: any;
    imageFormat: any;
    disabled: boolean;
    autoOrientation: boolean;
    /**
     * Initialize service for target element
     * @param el
     */
    initForElement(el: ElementRef): void;
    initDragNDropForElement(el: ElementRef): void;
    /**
     * Fire when input was changed
     */
    onChanges(): void;
    /**
     * Fire when on root element was dropped file
     */
    onDrop(): void;
    /**
     * Process uploaded files
     * @param files
     */
    private processFiles(files);
    /**
     * Filter files
     * @param rawFiles
     * @returns {Subject<any>}
     */
    private filterFiles(rawFiles);
    /**
     * Check file resolution restrictions
     * @param info
     * @returns {boolean}
     */
    private checkResolutionRule(info);
    /**
     * Check filesize restrictions
     * @param file
     * @returns {boolean}
     */
    private checkSize(file);
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    private getImageInfo(originFile);
    private transformFile(originFile, transformOptions);
    /**
     * Process image file
     * @param file
     * @param resolve
     * @param reject
     */
    private applyTransforms(file, resolve, reject);
    private generateTransformParams(file);
    private alertImageProcessingError(file);
}
