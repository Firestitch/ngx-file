import { Component } from '@angular/core';
import { FsApi, FsApiFile } from '@firestitch/api';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';
import { UploadService } from 'playground/app/services';
import { DialogComponent } from './dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'file-picker-existing-file',
  templateUrl: 'file-picker-existing-file.component.html',
  styleUrls: [ 'file-picker-existing-file.component.css' ],
})
export class FilePickerExistingFileComponent {

  public url = 'https://editorial.pxcrush.net/carsales/general/editorial/ferrari-sf90-stradale-0056.jpg?width=1024&height=683';
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');
  public apiFile: FsApiFile;

  public constructor(
    private _message: FsMessage,
    private _upload: UploadService,
    private _api: FsApi,
    private _dialog: MatDialog,
  ) {
    this.apiFile = this._api.createApiFile(`/assets/lamborghini-sian-roadster-t1-1024x576.jpg`);
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

  public openDialog() {
    this._dialog.open(DialogComponent, {
      data: {
      },
      width: '800px',
    });

  }

  public remove() {
    this._message.success('File was removed');
  }
}
