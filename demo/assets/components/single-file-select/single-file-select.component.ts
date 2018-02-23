import { Component } from '@angular/core';

@Component({
  selector: 'single-file-select',
  templateUrl: 'single-file-select.component.html',
  styleUrls: [ 'single-file-select.component.css' ]
})
export class SingleFileSelectComponent {
  public file = void 0;

  public select(file) {
    this.file = file;
  }
}
