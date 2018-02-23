import { Component } from '@angular/core';

@Component({
  selector: 'file-picker',
  templateUrl: 'file-picker.component.html',
  styleUrls: [ 'file-picker.component.css' ]
})
export class FilePickerComponent {
  public file = null;
  
  public select(file) {
    this.file = file;
  }
}
