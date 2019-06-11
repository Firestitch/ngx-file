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
  public url = '';
  public size: number;
  public typeImage: boolean;

  private _file: any;
  private _name: string;
  private _fileOptions: FsFileConfig;
  private _fileExists = false;

  constructor(obj?: any, filename?: string) {
    if (obj instanceof File || obj instanceof Blob) {
      this.file = obj;

    } else {

      const name = filename || obj;
      let type = '';

      if (name) {
        const match = name.toLowerCase().match(/([^\.]+)$/);
        this.extension = match ? match[1] : '';

        const mime = this.extension.match(/(jpe?g|png|gif|tiff?|bmp)/) ? 'image' : 'application';
        type = mime + '/' + this.extension;
      }

      const file = createBlob([''], filename, type);
      this.url = obj;
      this.file = file;
    }

    this._checkIfFileExists();
  }

  get exists() {
    return this._fileExists;
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
    this.typeImage = isImageType(this.type);
    this._checkIfFileExists();
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

  private _checkIfFileExists() {
    this._fileExists = !!this.name || !!this.url
  }
}
