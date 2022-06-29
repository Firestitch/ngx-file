import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';


@Component({
  selector: 'file-picker-model',
  templateUrl: 'file-picker-model.component.html',
  styleUrls: [ 'file-picker-model.component.css' ]
})
export class FilePickerModelComponent {

  public file: any = 'https://cdn.hipwallpaper.com/i/30/77/AKPMDF.jpg';
  //public file = new FsFile(null, 'test.png');
}

