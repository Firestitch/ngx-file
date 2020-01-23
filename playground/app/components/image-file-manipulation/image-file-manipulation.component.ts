import { Component } from '@angular/core';

import { FileProcessor, FsFile } from '@firestitch/file';
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

    this._fileProcessor.process(this.files, {
      quality: .8,
      width: 1000,
      height: 1000
    }).subscribe((resFiles) => {
      console.log(resFiles);
    })
  }

  public enhance(fsFile: FsFile) {
    this._message.success(`Enhance ${fsFile.file.name}`);
  }

  public search(fsFile: FsFile) {
    this._message.success(`Search ${fsFile.file.name}`);
  }

  public removed(files) {
    console.log('Removed', files);
    this._message.success('Removed');
  }
}
