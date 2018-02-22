import { Component } from '@angular/core';

@Component({
  selector: 'image-file-manipulation',
  templateUrl: 'image-file-manipulation.component.html',
  styleUrls: [ 'image-file-manipulation.component.css' ]
})
export class ImageFileManipulationComponent {
  public files = [];
  public filesJsonInfo = [];

  public selected(files) {
    this.files.push(...files);
    this.filesJsonInfo.push(...files.map((file) => file.toJson()));
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
