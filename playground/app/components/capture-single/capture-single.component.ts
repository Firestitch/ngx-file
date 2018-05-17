import { Component } from '@angular/core';


@Component({
  selector: 'capture-single',
  templateUrl: 'capture-single.component.html',
  styleUrls: [ 'capture-single.component.css' ]
})
export class CaptureSingleComponent {
  public file = void 0;

  public select(file) {
    this.file = file;
  }
}
