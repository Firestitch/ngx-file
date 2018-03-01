export declare class FsFile {
    progress: boolean;
    imageWidth: number;
    imageHeight: number;
    file: File;
    extension: string;
    name: string;
    type: string;
    size: number;
    constructor(file: File);
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
