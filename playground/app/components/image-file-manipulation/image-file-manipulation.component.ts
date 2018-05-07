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
    this.files = this.files.concat(files);

    this._fileProcessor.process(this.files, {
      quality: .8,
      width: 1000,
      height: 1000
    }).subscribe((resFiles) => {
      console.log(resFiles);
    })
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
