import { FsFileConfig } from '../interfaces';
import { createBlob } from '../helpers';


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

  private _file: any;
  private _name: string;
  private _fileOptions: FsFileConfig;
  private _fileExists = false;

  constructor(obj?: File|Blob|string, filename?: string) {
    if (obj instanceof File || obj instanceof Blob) {
      this.file = obj;
    } else {
      if(obj) {
        const url = new URL(obj);
        filename = filename || url.pathname.split('/').pop();
        this.url = url.href;
      }

      let type = '';
      if (filename) {
        const match = filename.toLowerCase().match(/([^\.]+)$/);
        this.extension = match ? match[1] : '';

        const mime = this.extension.match(/(jpe?g|png|gif|tiff?|bmp|svg)/) ? 'image' : 'application';
        type = mime + '/' + this.extension;
      }

      this.file = createBlob([''], filename, type);
    }

    this._checkIfFileExists();
  }

  get typeImage() {
    return this.type.match(/^image/) !== null;
  }

  get typeSvg() {
    return this.type.match(/\/svg/);
  }

  get imageProcess() {
    return this.typeImage && !this.typeSvg;
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
    this._checkIfFileExists();
  }

  set name(name) {
    this._name = name;
    const parts = String(name).split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  public toObject() {
    return {
      name: this._name,
      type: this.type,
      size: this.size,
      progress: this.progress,
      extension: this.extension,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight
    }
  }

  private _checkIfFileExists() {
    this._fileExists = !!this.name || !!this.url
  }
}
