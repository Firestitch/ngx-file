import { Component } from '@angular/core';
import { FileProcessor } from '../../../../src/classes';

@Component({
  selector: 'image-file-manipulation',
  templateUrl: 'image-file-manipulation.component.html',
  styleUrls: [ 'image-file-manipulation.component.css' ]
})
export class ImageFileManipulationComponent {
  public files = [];

  private _fileProcessor = new FileProcessor();

  constructor() {
  }

  public select(files) {
    this.files.push(files);

    this._fileProcessor.processFiles(this.files, {
      quality: .1,
      width: 2500,
      height: 2500
    }).subscribe((resFiles) => {
      console.log(resFiles);
    })
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
