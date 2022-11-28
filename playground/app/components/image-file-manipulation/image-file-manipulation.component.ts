import { Component } from '@angular/core';

import { FileProcessor } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'image-file-manipulation',
  templateUrl: 'image-file-manipulation.component.html',
  styleUrls: [ 'image-file-manipulation.component.css' ]
})
export class ImageFileManipulationComponent {
  public files = [];

  private _fileProcessor = new FileProcessor();

  constructor(private _message: FsMessage) {
  }

  public select(files) {
    this.files = this.files.concat(files);

    this._fileProcessor.processFiles(this.files, {
      quality: .8,
      maxWidth: 1000,
      maxHeight: 1000
    }).subscribe((resFiles) => {
      console.log(resFiles);
    })
  }

  public enhance(event) {
    this._message.success(`Enhance ${event.file.name}`);
  }

  public search(event) {
    this._message.success(`Search ${event.file.name}`);
  }

  public removed(files) {
    console.log('Removed', files);
    this._message.success('Removed');
  }
}
