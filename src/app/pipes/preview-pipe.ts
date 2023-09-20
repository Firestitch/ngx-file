
import { Pipe, PipeTransform } from '@angular/core';

import { of, throwError } from 'rxjs';

import { FsApiFile } from '@firestitch/api';
import { map, switchMap } from 'rxjs/operators';
import { FsFile } from '../models';

import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'fsFileSrc' })
export class FsFileSrcPipe implements PipeTransform {

  public constructor(
    private _domSanitizer: DomSanitizer,
  ) { }

  public transform(file) {
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
                map((data: any) => {
                  return this._domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
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

