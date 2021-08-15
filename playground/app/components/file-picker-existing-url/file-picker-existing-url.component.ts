import { Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-picker-existing-url',
  templateUrl: 'file-picker-existing-url.component.html',
  styleUrls: [ 'file-picker-existing-url.component.css' ]
})
export class FilePickerExistingUrlComponent {

  public previewUrl = 'https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg';
  public file = new FsFile(this.previewUrl);

  public constructor(private fsMessage: FsMessage) {}

  public select(file) {
    this.file = file;
  }

  public remove() {
    this.fsMessage.success('File was removed');
  }
}
