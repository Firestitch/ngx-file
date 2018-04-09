import { FsFileConfig } from '../interfaces';
export declare class ProcessConfig {
    private _width;
    private _height;
    private _quality;
    private _format;
    constructor(config?: FsFileConfig);
    width: number;
    height: number;
    quality: any;
    format: string;
    parseConfig(config: FsFileConfig): void;
}
