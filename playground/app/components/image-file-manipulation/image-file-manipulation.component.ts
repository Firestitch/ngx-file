import { Component } from '@angular/core';
import { FileProcessor } from '../../../../src/classes';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';


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
    this.files[0].uploading = true;
    setTimeout(() => {
      this.files[0].uploading = false;
    }, 10000);

    // of([1, 2, 3]).
    //   pipe(
    //     delay(10000)
    // ).subscribe(() => {
    //   console.log('test');
    // })

    // this._fileProcessor.process(this.files, {
    //   quality: .8,
    //   width: 1000,
    //   height: 1000
    // }).subscribe((resFiles) => {
    //   console.log(resFiles);
    // })
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
