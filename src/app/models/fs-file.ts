import * as EXIF from '@firestitch/exif-js';

import * as FileAPI from 'fileapi';

import { createBlob } from '../helpers';


export class FsFile {

  public progress = false;
  public rotate: number;
  public extension: string;
  public type: string;
  public url = '';
  public size: number;

  private _file: any;
  private _name: string;
  private _fileExists = false;
  private _imageWidth: number;
  private _imageHeight: number;
  private _exifInfo: any;  

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

  public get imageWidth(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.imageInfo
        .then((data) => {
          resolve(data.exif);
        }, reject);
    });
  }

  public get imageHeight(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.imageInfo
        .then((data) => {
          resolve(data.height);
        }, reject);
    });
  }

  public get exifInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.imageInfo
        .then((data) => {
          resolve(data.exif);
        }, reject);
    });
  }

  public get typeImage() {
    return this.type.match(/^image/) !== null;
  }

  public get typeSvg() {
    return this.type.match(/\/svg/);
  }

  public get imageProcess() {
    return this.typeImage && !this.typeSvg;
  }

  public get exists() {
    return this._fileExists;
  }

  public get file() {
    return this._file;
  }

  public get name() {
    return this._name;
  }

  public set file(value) {
    this._file = value;
    this.size = value.size;
    this.name = value.name;
    this.type = value.type;
    this._checkIfFileExists();
  }

  public set name(name) {
    this._name = name;
    const parts = String(name).split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  public get imageInfo(): Promise<{ width: number; height: number; exif: any }> {
    if (!this.typeImage || this._exifInfo) {
      return Promise.resolve({
        width: this._imageWidth,
        height: this._imageHeight,
        exif: this._exifInfo,
      });
    }

    const exif = new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        var exif = EXIF.readFromBinaryFile(fr.result);
        resolve(exif);
      };

      fr.onerror = () => {
        reject(fr.error);
      }

      fr.readAsArrayBuffer(this.file);
    });

    const dims = new Promise((resolve, reject) => {
      FileAPI.getInfo(this.file, (err, info) => {
        if (!err) {
          resolve(info);
        } else {
          reject(err);
        }
      });
    });

    return new Promise((resolve, reject) => {
      Promise.all([exif, dims])
      .then((data: any) => {
        this._exifInfo = data[0] || {};
        this._imageWidth = data[1].width;
        this._imageHeight = data[1].height;

        resolve({
          width: this._imageWidth,
          height: this._imageHeight,
          exif: this._exifInfo,
        });
      },(err) => {
        reject(err);
      });
    });
  }

  public download() {
    const href = this.file instanceof File || this.file instanceof Blob ?
      URL.createObjectURL(this.file) :
      this.file;

    var link = document.createElement('a'); 
    link.href = href;
    link.download = this.name;
    document.body.appendChild(link); 
    link.click();
    link.remove();
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
