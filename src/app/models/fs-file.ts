import { FsApiFile } from '@firestitch/api';
import * as EXIF from '@firestitch/exif-js';

import * as FileAPI from 'fileapi';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';


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
  private _apiFile: FsApiFile;

  constructor(obj?: File|Blob|string|FsApiFile, filename?: string) {    
    if (obj instanceof File) {
      this.file = obj;
    } else {
      let type;
      let fileBlob = [];

      if (obj instanceof Blob) {
        fileBlob = [obj];

        if(obj.type) {
          type = obj.type;

          if(!filename) {
            filename = 'file.' + obj.type.split('/').pop();
          }
        }

      } else if(typeof obj === 'string') {
        const url = new URL(obj);
        filename = filename || url.pathname.split('/').pop();
        this.url = url.href;
      } else if (obj instanceof FsApiFile) {
        this._apiFile = obj;
        filename = filename || this._apiFile.name;
      }

      if (filename) {
        const match = filename.toLowerCase().match(/([^\.]+)$/);
        this.extension = match ? match[1] : '';

        const mime = this.extension.match(/(jpe?g|png|gif|tiff?|bmp|svg)/) ? 'image' : 'application';
        type = mime + '/' + this.extension;
      }

      this.file = new File(fileBlob, filename, { type });
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

  public get apiFile(): FsApiFile {
    return this._apiFile;
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

  public set file(value: File) {
    this._file = value;
    this.size = value.size;
    this.type = value.type;
    this.name = value.name;
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

    const exif$ = new Observable<any>((observer) => {
      const fr = new FileReader();
      fr.onload = () => {
        const exif = EXIF.readFromBinaryFile(fr.result);
        if(exif) {
          observer.next(exif);
          observer.complete();
        } else {
          observer.error('Failed to read from binary file');
        }
      };

      fr.onerror = () => {
        observer.error(fr.error);
      }

      fr.readAsArrayBuffer(this.file);
    });

    const dims$ = new Observable<any>((observer) => {
      FileAPI.getInfo(this.file, (err, info) => {
        if (!err) {
          observer.next(info);
          observer.complete();
        } else {
          observer.error(err);        
        }
      });
    });

    return of(true)
      .pipe(
        switchMap(() => dims$
          .pipe(
            tap((dims) => {
            this._imageWidth = dims.width;
            this._imageHeight = dims.height;
            }),

            catchError(() => of(true)),
          )
        ),
        switchMap(() => exif$
          .pipe(
            tap((exif) => {
              this._exifInfo = exif || {};
            }),
            catchError(() => of(true)),
          )
        ),
        map(() => ({
          width: this._imageWidth,
          height: this._imageHeight,
          exif: this._exifInfo,
        })),
      )
      .toPromise();
  }

  public download() {
    const href = this.file instanceof File ?
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
    this._fileExists = !!this.url || !!this.size || !!this.apiFile;
  }
}
