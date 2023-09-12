
import { Pipe, PipeTransform } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FsFile } from '../models';
import { FsApiFile } from '@firestitch/api';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'fsFileSrc' })
export class FileSrcPipe implements PipeTransform {

  public constructor(
    private _sanitizer: DomSanitizer
  ) {
  }

  public transform(file) {    
    const data = this._getData(file);
    if(data instanceof FsApiFile) {
      return data.blobUrl
        .pipe(
          map((data)=> this._sanitizer.bypassSecurityTrustUrl(data)),
        );
    } else if(typeof data === 'string') {
      return of(data);
    } else if(data instanceof File) {
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
      });
    }

    return of(null);
  }

  private _getData(file) {
    if(file instanceof FsFile) {
      if(file.apiFile) {
        return file.apiFile;
      }

      return file.url ? file.url : file.file;
    }

    if(file instanceof Blob || file instanceof File) {
      return file;
    }

    return null;
  }
}

