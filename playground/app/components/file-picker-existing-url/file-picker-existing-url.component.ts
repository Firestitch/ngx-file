import { Component } from '@angular/core';

@Component({
  selector: 'file-picker-existing-url',
  templateUrl: 'file-picker-existing-url.component.html',
  styleUrls: [ 'file-picker-existing-url.component.css' ]
})
export class FilePickerExistingUrlComponent {
  public file;
  public previewUrl = 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/lamboextra-1234.jpg';

  public select(file) {
    this.file = file;
  }

  public remove() {
    alert('File was removed');
  }
}
