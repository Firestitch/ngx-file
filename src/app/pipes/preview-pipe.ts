
import { Pipe, PipeTransform } from '@angular/core';

import { FsApiFile } from '@firestitch/api';

import { of, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { FsFile } from '../models';


@Pipe({
    name: 'fsFileSrc',
    standalone: true
})
export class FsFileSrcPipe implements PipeTransform {

  public transform(file: FsFile) {
    if (file.previewUrl) {
      return of(file.previewUrl);
    }

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
                map((blob) => {
                  return URL.createObjectURL(blob);
                }),
                tap((src) => {
                  file.previewUrl = src;
                }),
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

