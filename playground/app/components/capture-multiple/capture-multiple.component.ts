import { Component } from '@angular/core';


@Component({
  selector: 'capture-multiple',
  templateUrl: 'capture-multiple.component.html',
  styleUrls: [ 'capture-multiple.component.css' ]
})
export class CaptureMultipleComponent {
  public files = [];

  public select(files) {
    this.files = files;
  }
}
