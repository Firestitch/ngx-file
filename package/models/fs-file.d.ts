import { FsFileConfig } from '../interfaces';
export declare class FsFile {
    progress: boolean;
    imageWidth: number;
    imageHeight: number;
    rotate: number;
    exifInfo: any;
    extension: string;
    type: string;
    url: string;
    size: number;
    private _file;
    private _name;
    private _fileOptions;
    constructor(file: File, options?: FsFileConfig);
    file: File;
    name: string;
    fileOptions: FsFileConfig;
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
