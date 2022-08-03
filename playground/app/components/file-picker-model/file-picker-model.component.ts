import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';


@Component({
  selector: 'file-picker-model',
  templateUrl: 'file-picker-model.component.html',
  styleUrls: [ 'file-picker-model.component.css' ]
})
export class FilePickerModelComponent {

  public file: any = '';
  //public file = new FsFile(null, 'test.png');
}

