import { FsFileOptions } from '../interfaces';
import { isImageType } from '../helpers';

export class FsFile {

  public progress = false;
  public imageWidth: number;
  public imageHeight: number;
  public rotate: number;
  public exifInfo: any = {};
  public extension: string;
  public name: string;
  public type: string;
  public size: number;
  private _file: File;
  private _fileOptions: FsFileOptions;

  constructor(file: File, options: FsFileOptions) {
    this.file = file;
    this._fileOptions = Object.assign({}, options);
  }

  get file() {
    return this._file;
  }

  get fileOptions() {
    return this._fileOptions;
  }

  set file(value) {
    this._file = value;
    this.name = value.name;
    this.size = value.size;
    this.type = value.type;
    const parts = value.name.split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  get typeImage(): any {
    return isImageType(this.type);
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
    this.exifInfo = info.exif;
  }

  public toObject() {
    return {
      name: this.name,
      type: this.type,
      size: this.size,
      progress: this.progress,
      extension: this.extension,
      typeImage: this.typeImage,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight
    }
  }

}
