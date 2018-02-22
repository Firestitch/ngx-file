import { ElementRef, EventEmitter } from '@angular/core';
export declare class FsFileService {
    el: any;
    selected: EventEmitter<{}>;
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
    preview: any;
    /**
     * Initialize service for target element
     * @param el
     */
    initForElement(el: ElementRef): void;
    /**
     * Fire when input was changed
     */
    onChanges(): void;
    /**
     * Process uploaded files
     * @param files
     */
    private processFiles(files);
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    private generateFilePreview(file);
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
     * Change image format
     * @param originFile
     * @returns {Promise<any>}
     */
    private changeImageFormat(originFile);
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    private getImageInfo(originFile);
    /**
     * Change image quality
     * @param originFile
     * @returns {Promise<any>}
     */
    private changeQuality(originFile);
    /**
     * Process image file by sequence of available processors
     * @param file
     * @param processorsIter
     * @param resolve
     * @param reject
     */
    private applyProcessors(file, processorsIter, resolve, reject);
}
