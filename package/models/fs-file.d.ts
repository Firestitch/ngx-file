import { FsFileOptions } from '../interfaces';
export declare class FsFile {
    progress: boolean;
    imageWidth: number;
    imageHeight: number;
    rotate: number;
    exifInfo: any;
    extension: string;
    name: string;
    type: string;
    size: number;
    private _file;
    private _fileOptions;
    constructor(file: File, options: FsFileOptions);
    file: File;
    readonly fileOptions: FsFileOptions;
    readonly typeImage: any;
    parseInfo(info: any): void;
    toObject(): {
        name: string;
        type: string;
        size: number;
        progress: boolean;
        extension: string;
        typeImage: any;
        imageWidth: number;
        imageHeight: number;
    };
}
