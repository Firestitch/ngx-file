import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';


@Component({
  selector: 'single-file-select',
  templateUrl: 'single-file-select.component.html',
  styleUrls: [ 'single-file-select.component.css' ]
})
export class SingleFileSelectComponent {
  public file;

  public select(fsFile: FsFile) {
    this.file = fsFile;
  }
}
