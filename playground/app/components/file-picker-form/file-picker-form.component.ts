import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';


import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';

import { UploadService } from 'playground/app/services';


@Component({
  selector: 'file-picker-form',
  templateUrl: './file-picker-form.component.html',
  styleUrls: ['./file-picker-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerFormComponent {

  public file = null;

  constructor(
    private _message: FsMessage,
    private _upload: UploadService,
    private _cdRef: ChangeDetectorRef,
  ) {
  }

  public select(file: FsFile) {
    this._upload.upload(file)
      .subscribe(() => {
        this.file = file;
        this._cdRef.markForCheck();
      });
  }

  public clear() {
    this.file = null;
    this._message.success('File was removed');
  }
}
