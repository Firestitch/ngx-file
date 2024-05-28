import { FsApiFile } from '@firestitch/api';

import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as FileAPI from 'fileapi';
import { Exif } from '../classes/exif';


export class FsFile {

  public progress = false;
  public rotate: number;
  public extension: string;
  public type: string;
  public url = '';
  public size: number;

  private _file: File;
  private _name: string;
  private _fileExists = false;
  private _imageWidth: number;
  private _imageHeight: number;
  private _exifInfo: any;
  private _apiFile: FsApiFile;

  constructor(obj?: File|Blob|string|FsApiFile, filename?: string) {
    this._init(obj, filename);
    this._checkIfFileExists();
  }

  public get imageWidth(): Promise<number> {
    return from(this.dims)
      .pipe(
        map((dims) => dims.width),
      )
      .toPromise();       
  }

  public get imageHeight(): Promise<number> {
    return from(this.dims)
      .pipe(
        map((dims) => dims.height),
      )
    .toPromise();       
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

  public isExtension(extension): boolean {
    const extensions = (
      Array.isArray(extension) ? extension : [extension]
    )
    .map((extension) => extension.toLowerCase());
    
    return extensions.indexOf(this.extension) !== -1;
  }

  public get file(): File {
    return this._file;
  }

  public set file(value: File) {
    this._file = value;
    this.size = value.size;
    this.type = value.type;
    this.name = value.name;
    this._checkIfFileExists();
  }

  public get name() {
    return this._name;
  }

  public set name(name) {
    this._name = name;
    const parts = String(name).split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1].toLowerCase();
    }
  }

  public get dims(): Promise<{ width: number; height: number }> {
    if (this._imageHeight || this._imageWidth) {
      return of({
        width: this._imageWidth,
        height: this._imageHeight,
      })
      .toPromise();
    }

    return new Observable<any>((observer) => {
      FileAPI.getInfo(this.file, (err, info) => {
        if (!err) {
          observer.next(info);
          observer.complete();
        } else {
          observer.error(err);
        }
      });
    })
    .pipe(
      tap((dims) => {
        this._imageWidth = dims.width;
        this._imageHeight = dims.height;
      }),
    )
    .toPromise();
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
        const exif = (new Exif()).readFromBinaryFile(fr.result);
        if(exif) {
          observer.next(exif);
          observer.complete();
        } else {
          observer.error('Failed to read from binary file');
        }
      };

      fr.onerror = () => {
        observer.error(fr.error);
      };

      fr.readAsArrayBuffer(this.file);
    });

    return from(this.dims)
      .pipe(
        catchError(null),
        switchMap(() => exif$
          .pipe(
            tap((exif) => {
              this._exifInfo = exif || {};
            }),
            catchError(() => of(true)),
          ),
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

    const link = document.createElement('a');
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
      imageHeight: this.imageHeight,
    };
  }

  public get base64Url(): Observable<string> {
    if(this._apiFile) {
      return this._apiFile.base64Url;
    }

    if(this.file instanceof File) {
      return new Observable<string>((observer) => {
        const reader = new FileReader();
        reader.readAsDataURL(this._file);
        reader.onload = () => {
          observer.next(reader.result as string);
          observer.complete();
        };
        reader.onerror = (error) => observer.error(error);
      });
    }

    return throwError('Unable to create base64Url');
  }

  public get blobUrl(): Observable<string> {
    if(this._apiFile) {
      return this._apiFile.blobUrl;
    }

    if(this.file instanceof File) {
      return of(URL.createObjectURL(this.file));
    }

    return throwError('Unable to create blobUrl');
  }

  private _checkIfFileExists() {
    this._fileExists = !!this.url || !!this.size || !!this.apiFile;
  }

  private _init(obj?: File|Blob|string|FsApiFile, filename?: string) {
    if (obj instanceof File) {
      return this.file = obj;
    }

    let type;
    let fileBlob = [];
    if (obj instanceof Blob) {
      fileBlob = [obj];

      if(obj.type) {
        type = obj.type;

        if(!filename) {
          filename = `file.${  obj.type.split('/').pop()}`;
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
      this.extension = match ? match[1].toLowerCase() : '';
      type = `${this._getExtensionMime()}/${this.extension}`;
    }

    this.file = new File(fileBlob, filename || '', { type });
  }

  private _getExtensionMime() {
    return this.extension.match(/(jpe?g|png|gif|tiff?|bmp|svg|heic|heif)/) ? 'image' : 'application';
  }
}
