import { Component } from '@angular/core';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';
import { UploadService } from 'playground/app/services';


@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ],
})
export class FilePickerExistingFileComponent {

  public url = 'https://editorial.pxcrush.net/carsales/general/editorial/ferrari-sf90-stradale-0056.jpg?width=1024&height=683';
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');

  public constructor(
    private _message: FsMessage,
    private _upload: UploadService
  ) {
  }

  public select(file: FsFile) {

    file.progress = true;
    this._upload.upload(file)
    .subscribe(() => {
      this.file = file;
      file.progress = false;
    });
  }

  public download(fsFile) {
    this._message.success('Downloaded');
  }

  public remove() {
    this._message.success('File was removed');
  }
}
