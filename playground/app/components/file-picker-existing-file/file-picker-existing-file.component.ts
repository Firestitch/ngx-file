import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';
import { UploadService } from 'playground/app/services';


@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ]
})
export class FilePickerExistingFileComponent {
  public url = 'https://cdn.hipwallpaper.com/i/30/77/AKPMDF.jpg';
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');

  public constructor(private _message: FsMessage,
                     private _upload: UploadService) {}

  public select(file: FsFile) {
    file.progress = true;
    this._upload.upload(file)
    .subscribe(() => {
      this.file = file;
      file.progress = false;
    });
  }

  public remove() {
    this._message.success('File was removed');
  }
}
