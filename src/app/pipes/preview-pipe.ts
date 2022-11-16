
import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';

import { FsFile } from '../models';


@Pipe({ name: 'previewImage' })
export class PreviewImagePipe implements PipeTransform {
  public transform(file) {    
    return new Observable((observer) => {
      const data = this._getData(file);

      if(typeof data === 'string') {
        observer.next(data);
        observer.complete();

        return;
      }

      if(data instanceof Blob || data instanceof File) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          observer.next(fileReader.result);
          observer.complete();
        }

        fileReader.onerror = (e) => {
          observer.error(e);
        }

        fileReader.readAsDataURL(data);
      }
    });
  }

  private _getData(file) {
    if(file instanceof FsFile) {
      return file.url ? file.url : file.file;
    }

    if(file instanceof Blob || file instanceof File) {
      return file;
    }

    return null;
  }
}

