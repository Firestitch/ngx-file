
import { Pipe, PipeTransform } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

import { FsApiFile } from '@firestitch/api';
import { switchMap } from 'rxjs/operators';
import { FsFile } from '../models';

import * as FileAPI from 'fileapi';


@Pipe({ name: 'fsFileSrc' })
export class FsFileSrcPipe implements PipeTransform {

  public transform(file, maxWidth?: number, maxHeight?: number) {
    return of(null)
      .pipe(
        switchMap(() => {
          const data = this._getData(file);

          if (typeof data === 'string') {
            return of(data);
          }

          if (data instanceof FsApiFile || data instanceof Blob) {
            return of(null)
              .pipe(
                switchMap(() => {
                  return data instanceof FsApiFile ? data.blob : of(data);
                }),
                switchMap((blob) => {
                  return new Observable((observer) => {
                    FileAPI.Image.transform(
                      blob,
                      [
                        {
                          maxWidth: maxWidth * 2,
                          maxHeight: maxHeight * 2,
                        }
                      ],
                      false,
                      (err, images) => {
                        if (!err && images[0]) {
                          const canvas: HTMLCanvasElement = images[0];

                          canvas.toBlob((canvasBlob) => {
                            observer.next(canvasBlob);
                            observer.complete();
                          }, 'image/jpg', 100);
                        } else {
                          observer.error(err);
                        }
                      });
                  })
                }),
                switchMap((data: any) => {
                  return new Observable((observer) => {
                    const fileReader = new FileReader();
                    fileReader.onload = () => {
                      observer.next(fileReader.result);
                      observer.complete();
                    }

                    fileReader.onerror = (e) => {
                      observer.error(e);
                    }

                    fileReader.readAsDataURL(data);
                  })
                })
              );

          }

          return throwError('Invalid file type');
        }),
      );
  }

  private _getData(file) {
    if (file instanceof FsFile) {
      if (file.apiFile) {
        return file.apiFile;
      }

      return file.url ? file.url : file.file;
    }

    if (file instanceof Blob || file instanceof File) {
      return file;
    }

    return null;
  }
}

