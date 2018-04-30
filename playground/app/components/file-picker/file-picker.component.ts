import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'file-picker',
  templateUrl: 'file-picker.component.html',
  styleUrls: [ 'file-picker.component.css' ]
})
export class FilePickerComponent {
  public file = void 0;

  public select(file) {

    return Observable.create(observer => {
      this.file = file;
      observer.complete();
    });
  }
}
