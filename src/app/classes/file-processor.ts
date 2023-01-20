import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { toInteger } from 'lodash-es';
import * as FileAPI from 'fileapi';

import { FileProcessConfig, FsFile } from '../models';
import { FsFileProcessConfig } from '../interfaces';


export class FileProcessor {

  public processFile(fsFile: FsFile, config: FileProcessConfig | FsFileProcessConfig): Observable<FsFile> {
    const processConfig = config instanceof FileProcessConfig ? config : new FileProcessConfig(config);

    return (
      fsFile.imageProcess ?
        from(this._applyTransforms(fsFile, processConfig)) :
        of(fsFile)
    )
    .pipe(
      switchMap((fsFile) => this._validate(fsFile, processConfig))
    );
  }

  public processFiles(fsFiles: FsFile[], config: FileProcessConfig | FsFileProcessConfig): Observable<FsFile[]> {
    const errors = [];
    return forkJoin(
        fsFiles.map((fsFile) => this.processFile(fsFile, config)
          .pipe(
            catchError((error) => {
              errors.push(error);
              return of(null);
            }),
          )
        )
      )
      .pipe(
        switchMap((fsFiles) => {
          if(errors.length) {
            const error = errors
              .reduce((accum, item) => {
                return [
                  ...accum,
                  item.error
                ];
              }, [])
              .join(', ');

              const code = errors
              .reduce((accum, item) => {
                return [
                  ...accum,
                  item.code
                ];
              }, [])
              .join(', ');  
              
            return throwError({ error, code, message: error });
          }

          return of(fsFiles);
        })
      );
  }

  private _validate(fsFile: FsFile, processConfig: FileProcessConfig): Observable<FsFile> {
    if (processConfig.minHeight || processConfig.minWidth) {
      return from(fsFile.imageInfo)
        .pipe( 
          switchMap((data) => {
            if(data.height < toInteger(processConfig.minHeight)) {
              return throwError({ error: `Height must be at least ${processConfig.minHeight}px.`, code: 'minHeight' });
            }

            if(data.width < toInteger(processConfig.minWidth)) {
              return throwError({ error: `Width must be at least ${processConfig.minWidth}px.`, code: 'minWidth' });
            }

            return of(fsFile);
          }),
        );
      }
    
      return of(fsFile);
  }

  private _transform(fsFile: FsFile, processConfig: FileProcessConfig): Promise<FsFile> {
    return new Promise((resolve, reject) => {
      if(
        !processConfig.orientate &&
        !processConfig.maxWidth && 
        !processConfig.maxHeight && 
        processConfig.quality === 1
      ) {
        return resolve(fsFile);
      }
      
      const transformConfig = this._generateTransformConfig(fsFile, processConfig);

      // Transform image by options and rotate if needed
      FileAPI.Image.transform(
        fsFile.file,
        [transformConfig],
        processConfig.orientate,  
        (err, images) => {
          // Process transformed files
          if (!err && images[0]) {
            const canvas: HTMLCanvasElement = images[0];
            const type = (processConfig.format) ? 'image/' + processConfig.format : fsFile.type;

            canvas.toBlob((blob) => {
              fsFile.file = new File([blob], fsFile.file.name, { type: fsFile.type });
              resolve(fsFile);
              
            }, type, processConfig.quality);
          } else {
            reject(err);
          }
        });
    });
  }

  private async _applyTransforms(fsFile: FsFile, processConfig: FileProcessConfig): Promise<FsFile> {
    return this._transform(fsFile, processConfig);
  }

  private _generateTransformConfig(file, config: FileProcessConfig) {
    return {
      // Resize
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
  
      // Quality for result image
      quality: config.quality || 1
    };
  }
}
