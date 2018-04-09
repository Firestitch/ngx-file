import 'fileapi/plugins/FileAPI.exif.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { FsFileConfig } from '../interfaces';
export declare class FileProcessor {
    constructor();
    /**
     * Process uploaded files
     * @param files
     * @param config
     */
    process(files: any, config: FsFileConfig): Observable<any>;
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    private getImageInfo(originFile);
    private transformFile(originFile, transformConfig, processConfig);
    /**
     * Process image file
     * @param file
     * @param resolve
     * @param reject
     * @param config
     */
    private applyTransforms(file, resolve, reject, config);
    private generateTransformParams(file, config);
    private alertImageProcessingError(file);
}
