import { FsFileConfig } from '../interfaces';
import { isImageType } from '../helpers';
import { FsFileProcess } from './fs-file-process';


export class FsFile {

  process() {
    const process = new FsFileProcess(this);
    this.processes.push(process);
    return process;
  }

  public processes = [];
  public uploading = false;
  public imageWidth: number;
  public imageHeight: number;
  public rotate: number;
  public exifInfo: any = {};
  public extension: string;
  public type: string;
  public url: string;
  public size: number;
  private _file: File;
  private _name: string;
  private _fileOptions: FsFileConfig;

  toJSON() {
    return {  name: this._name,
              type: this.type,
              size: this.size,
              extension: this.extension,
              typeImage: this.typeImage,
              imageWidth: this.imageWidth,
              imageHeight: this.imageHeight};
  }

  constructor(file: File, options?: FsFileConfig) {
    this.file = file;
    if (options) {
      this.fileOptions = Object.assign({}, options);
    }
  }

  get file() {
    return this._file;
  }

  get name() {
    return this._name;
  }

  set fileOptions(value) {
    this._fileOptions = value;
  }

  get fileOptions() {
    return this._fileOptions;
  }

  set file(value) {
    this._file = value;
    this.size = value.size;
    if (value.name.match(/^http/)) {
      this.url = value.name;
      const match = value.name.match(/(jpe?g|png|gif|tiff?)$/i);
      if (match) {
        this.type = 'image/' + match[1];
      }
    } else {
      this.name = value.name;
      this.type = value.type;
    }
  }

  get typeImage(): any {
    return isImageType(this.type);
  }

  set name(name) {
    this._name = name;
    const parts = name.split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
    this.exifInfo = info.exif;
  }
}
