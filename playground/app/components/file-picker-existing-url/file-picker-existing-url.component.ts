import { Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-picker-existing-url',
  templateUrl: 'file-picker-existing-url.component.html',
  styleUrls: [ 'file-picker-existing-url.component.css' ]
})
export class FilePickerExistingUrlComponent {

  public previewUrl = 'https://editorial.pxcrush.net/carsales/general/editorial/ferrari-sf90-stradale-0056.jpg?width=1024&height=683';
  public file = new FsFile(this.previewUrl);

  public constructor(private fsMessage: FsMessage) {}

  public select(file) {
    this.file = file;
  }

  public remove() {
    this.fsMessage.success('File was removed');
  }
}
