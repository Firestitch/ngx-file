
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filePreviewMapFile' })
export class FilePreviewMapFilePipe implements PipeTransform {
  public transform(file, mapFile) {    
    if(mapFile) {
      return mapFile(file);
    }

    return file;
  }
}

