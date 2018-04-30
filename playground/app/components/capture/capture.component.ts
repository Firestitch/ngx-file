import { Component } from '@angular/core';

@Component({
  selector: 'capture',
  templateUrl: 'capture.component.html',
  styleUrls: [ 'capture.component.css' ]
})
export class CaptureComponent {
  public file = void 0;

  public select(file) {
    this.file = file;
  }
}
