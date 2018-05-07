import { Component } from '@angular/core';


@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ]
})
export class FilePickerExistingFileComponent {
  public file;

  public select(file) {
    this.file = file;
  }

  public remove() {
    alert('File was removed');
  }
}
