import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ]
})
export class FilePickerExistingFileComponent {
  public url = 'https://cdn.hipwallpaper.com/i/30/77/AKPMDF.jpg';
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');

  public constructor(private fsMessage: FsMessage) {}

  public select(file) {
    this.file = file;
  }

  public remove() {
    this.fsMessage.success('File was removed');
  }
}
