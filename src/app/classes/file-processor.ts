import { loadJs } from '@firestitch/common';

import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FsFileProcessConfig } from '../interfaces';
import { FileProcessConfig, FsFile } from '../models';

export class FileProcessor {

  public processFile(
    fsFile: FsFile, 
    config: FileProcessConfig | FsFileProcessConfig,
  ): Observable<FsFile> {
    const processConfig = config instanceof FileProcessConfig ? 
      config : new FileProcessConfig(config);

    return this._transform(fsFile, processConfig)
      .pipe(
        switchMap((item) => this._validate(item, processConfig)),
      );
  }

  public processFiles(
    fsFiles: FsFile[], 
    config: FileProcessConfig | FsFileProcessConfig,
  ): Observable<FsFile[]> {
    const errors = [];

    return forkJoin(
      fsFiles.map((fsFile) => this.processFile(fsFile, config)
        .pipe(
          catchError((error) => {
            errors.push(error);

            return of(null);
          }),
        ),
      ),
    )
      .pipe(
        switchMap((result) => {
          if (errors.length) {
            const error = errors
              .reduce((accum, item) => {
                return [
                  ...accum,
                  item.error,
                ];
              }, [])
              .join(', ');

            const code = errors
              .reduce((accum, item) => {
                return [
                  ...accum,
                  item.code,
                ];
              }, [])
              .join(', ');

            return throwError(() => ({ error, code, message: error }));
          }

          return of(result);
        }),
      );
  }

  private _validate(fsFile: FsFile, processConfig: FileProcessConfig): Observable<FsFile> {
    if (processConfig.minHeight || processConfig.minWidth) {
      return from(fsFile.imageInfo)
        .pipe(
          switchMap((data) => {
            if (data.height < Number(processConfig.minHeight || 0)) {
              return throwError(() => ({
                error: `Height must be at least ${processConfig.minHeight}px.`, code: 'minHeight', 
              }));
            }

            if (data.width < Number(processConfig.minWidth || 0)) {
              return throwError(() => ({ 
                error: `Width must be at least ${processConfig.minWidth}px.`, code: 'minWidth', 
              }));
            }

            return of(fsFile);
          }),
        );
    }

    return of(fsFile);
  }

  private _transformHeic(fsFile: FsFile): Observable<FsFile> {
    if(fsFile.isExtension(['heic','heif']) && fsFile.file instanceof Blob) {
      return loadJs('/assets/file/heic2any.js')
        .pipe(
          switchMap(() => {
            const result = (window as any)
              .heic2any({ blob: fsFile.file, multiple: false, toType: 'image/jpeg' });

            return from(result);
          }),
          map((blob: Blob) => {
            const ext = blob.type?.split('/') || [];
            const name = fsFile.name.replace(/(heic|heif)$/i, ext[1] || 'jpg');

            return new FsFile(blob, name);
          }),
          catchError(() => {
            const message = 'Failed to convert HEIC/HEIF to JPEG';
            console.error(message);

            return throwError(() => new Error(message));
          }),
        );
    }

    return of(fsFile);
  }

  private _transform(fsFile: FsFile, processConfig: FileProcessConfig): Observable<FsFile> {
    return this._transformHeic(fsFile)
      .pipe(
        switchMap((response)=> this._transformImage(response, processConfig)),
      );
  }

  private _transformImage(fsFile: FsFile, processConfig: FileProcessConfig): Observable<FsFile> {
    if (
      !fsFile.imageProcessable || 
      (
        !processConfig.orientate &&
        !processConfig.maxWidth &&
        !processConfig.maxHeight &&
        processConfig.quality === 1
      )
    ) {
      return of(fsFile);
    }

    return from(fsFile.exifInfo)
      .pipe(
        switchMap((exifInfo: any) => {
          const config = this._generateTransformConfig(processConfig);
        
          return this
            ._processTransformImage(
              fsFile, 
              config.maxWidth,
              config.maxHeight,
              config.quality,
              config.orientate ? exifInfo?.Orientation?.value : 0,
            );
        }),
      );
  }

  private _processTransformImage(
    fsFile: FsFile, 
    maxWidth: number,
    maxHeight: number,
    quality: number,
    orientation: number,
  ): Observable<FsFile> {   
    if(!maxWidth && !maxHeight && quality === 1 && orientation === undefined) {
      return of(fsFile);
    }

    return fsFile.dataUrl$
      .pipe(
        switchMap((dataUrl) => {
          return new Observable<FsFile>((observer) => {
            const image = new Image();
            image.onerror = () => {
              observer.error(new Error('Image not found'));
            };

            image.onload = () => {
              const canvas = document.createElement('canvas');
              this._updateCanvas(canvas, image, orientation, maxWidth, maxHeight);

              canvas
                .toBlob((blob) => {
                  fsFile.file = new File([blob], fsFile.file.name, { type: fsFile.type });
                  observer.next(fsFile);
                  observer.complete();
                },
                fsFile.type,
                quality,
                );
            };

            image.src = dataUrl;
          });
        }),
      );
  }

  private _updateCanvas(
    canvas: HTMLCanvasElement, 
    image: HTMLImageElement, 
    orientation: number, 
    maxWidth: number, 
    maxHeight: number,
  ) {
    const calculateSize = (w, h) => {
      if (w > h) {
        if (w > maxWidth) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        }
      } else {
        if (h > maxHeight) {
          w = Math.round((w * maxHeight) / h);
          h = maxHeight;
        }
      }

      return { width: w, height: h };
    };

    const ctx = canvas.getContext('2d');
    if (orientation > 4 && orientation < 9) {
      canvas.width = image.height;
      canvas.height = image.width;
    } else {
      canvas.width = image.width;
      canvas.height = image.height;
    }
  
    switch (orientation) {
      case 2: ctx.transform(-1, 0, 0, 1, image.width, 0); break;
      case 3: ctx.transform(-1, 0, 0, -1, image.width, image.height); break;
      case 4: ctx.transform(1, 0, 0, -1, 0, image.height); break;
      case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
      case 6: ctx.transform(0, 1, -1, 0, image.height, 0); break;
      case 7: ctx.transform(0, -1, -1, 0, image.height, image.width); break;
      case 8: ctx.transform(0, -1, 1, 0, 0, image.width); break;
      default: break;
    }

    const size = calculateSize(image.width, image.height);
    canvas.width = size.width;
    canvas.height = size.height;
    ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
    ctx.restore();
  }

  private _generateTransformConfig(config: FileProcessConfig) {
    return {
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      quality: config.quality || 1,
      orientate: config.orientate,
    };
  }
}
