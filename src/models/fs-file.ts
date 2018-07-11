import { FsFileConfig } from '../interfaces';
import { isImageType, createBlob } from '../helpers';


export class FsFile {

  public progress = false;
  public imageWidth: number;
  public imageHeight: number;
  public rotate: number;
  public exifInfo: any = {};
  public extension: string;
  public type: string;
  public url: string;
  public size: number;
  private _file: any;
  private _name: string;
  private _fileOptions: FsFileConfig;

  constructor(obj?: any, name?: string, type?: string) {
    if (obj instanceof File || obj instanceof Blob) {
      this.file = obj;

    } else {

      const filename = name || obj;

      if (!type) {
        const match = filename.match(/(jpe?g|png|gif|tiff?)$/i);
        if (match) {
          type = match[1];
        }
      }

      if (type) {
        type = 'image/' + type;
      }

      const file = createBlob([''], name, type);
      this.url = obj;

      this.file = file;
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
    this.name = value.name;
    this.type = value.type;
  }

  get typeImage(): any {
    return isImageType(this.type);
  }

  set name(name) {
    this._name = name;
    const parts = String(name).split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
    this.exifInfo = info.exif;
  }

  public toObject() {
    return {
      name: this._name,
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
