import { FsApiFile } from '@firestitch/api';

import { from, lastValueFrom, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

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
  private _apiFile: FsApiFile;
  private _imageInfo: { width: number; height: number; exif: any };

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

  public get typeImage() {
    return this.type.match(/^image/) !== null;
  }

  public get typeSvg() {
    return this.type.match(/\/svg/);
  }

  public get imageProcessable() {
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
      .map((data) => data.toLowerCase());
    
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

  public get exifInfo(): Promise<any> {
    if (this._imageInfo) {
      return Promise.resolve(this._imageInfo?.exif);
    }

    return lastValueFrom(
      from(this._getImageInfo())
        .pipe(
          map((data) => data.exif),
        ),
    );
  }

  public get dims(): Promise<{ width: number; height: number }> {
    if (this._imageInfo) {
      return Promise.resolve({
        width: this._imageInfo.width,
        height: this._imageInfo.height,
      });
    }

    return lastValueFrom(
      from(this._getImageInfo())
        .pipe(
          map((data) => ({
            width: data.width,
            height: data.height,
          })),
        ),
    );
  }

  public _getImageInfo(): Promise<{ width: number; height: number,  exif: any }> {
    return lastValueFrom(
      new Observable<ArrayBuffer>((observer) => {
        const fr = new FileReader;

        fr.onload = () => {
          observer.next(fr.result as ArrayBuffer);
          observer.complete();
        };

        fr.onerror = () => {
          observer.error(fr.error);
        };

        fr.readAsArrayBuffer(this.file); 
      })
        .pipe(
          switchMap((arrayBuffer: ArrayBuffer) => {
            return new Observable<{ width: number; height: number }>((observer) => {
              const img = new Image;
      
              img.onload = () => {
                observer.next({
                  width: img.width,
                  height: img.height,
                });
                observer.complete();
              };

              img.onerror = (e) => {
                observer.error(e);
              };
    
              img.src = window.URL.createObjectURL(this.file); 
            })
              .pipe(
                catchError(() => {
                  return of({ width: 0, height: 0 });
                }),
                map((dims) => {
                  let exif = null;
                  
                  try {
                    exif = (new Exif()).readFromBinaryFile(arrayBuffer);
                  } catch (error) {
                    console.error(error);
                  }

                  return {
                    width: dims.width,
                    height: dims.height,
                    exif,
                  };
                }),
              );
          }),
          tap((data) => {
            this._imageInfo = data;
          }),
        ),
    );
  }

  public get imageInfo(): Promise<{ width: number; height: number; exif: any }> {
    if (this._imageInfo) {
      return Promise.resolve(this._imageInfo);
    }

    return this._getImageInfo();
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

    return throwError(() => new Error('Unable to create base64Url'));
  }

  public get blobUrl(): Observable<string> {
    if(this._apiFile) {
      return this._apiFile.blobUrl;
    }

    if(this.file instanceof File) {
      return of(URL.createObjectURL(this.file));
    }

    return throwError(() => new Error('Unable to create blobUrl'));
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
      const match = filename.toLowerCase().match(/([^.]+)$/);
      this.extension = match ? match[1].toLowerCase() : '';
      type = `${this._getExtensionMime()}/${this.extension}`;
    }

    this.file = new File(fileBlob, filename || '', { type });
  }

  private _getExtensionMime() {
    return this.extension.match(/(jpe?g|png|gif|tiff?|bmp|svg|heic|heif)/) ? 'image' : 'application';
  }
}
