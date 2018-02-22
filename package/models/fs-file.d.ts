export declare class FsFile {
    progress: boolean;
    imageWidth: null;
    imageHeight: null;
    previewWidth: null;
    previewHeight: null;
    private _file;
    private _preview;
    private _ext;
    constructor(file: File);
    file: File;
    readonly name: string;
    readonly type: string;
    readonly size: number;
    preview: string;
    readonly extension: string;
    readonly typeImage: RegExpMatchArray;
    parseInfo(info: any): void;
    toJson(): {
        file: File;
        name: string;
        type: string;
        size: number;
        progress: boolean;
        preview: string;
        extrension: string;
        typeImage: RegExpMatchArray;
        imageWidth: null;
        imageHeight: null;
        previewWidth: null;
        previewHeight: null;
    };
}
