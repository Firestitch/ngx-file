import { Component } from '@angular/core';

@Component({
  selector: 'image-file-manipulation',
  templateUrl: 'image-file-manipulation.component.html',
  styleUrls: [ 'image-file-manipulation.component.css' ]
})
export class ImageFileManipulationComponent {
  public files = [];
  public filesJsonInfo = [];

  public select(files) {
    this.files.push(...files);
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
