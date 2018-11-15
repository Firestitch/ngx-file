import { Component } from '@angular/core';

import { FsFile } from 'fs-file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-picker-existing-url',
  templateUrl: 'file-picker-existing-url.component.html',
  styleUrls: [ 'file-picker-existing-url.component.css' ]
})
export class FilePickerExistingUrlComponent {

  public previewUrl = 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/cars-road-test/2016/02/41ae14b2673874e7e212502954b88910/lp610_4_white_005.jpg';
  public file = new FsFile(this.previewUrl);

  public constructor(private fsMessage: FsMessage) {}

  public select(file) {
    this.file = file;
  }

  public remove() {
    this.fsMessage.success('File was removed');
  }
}
