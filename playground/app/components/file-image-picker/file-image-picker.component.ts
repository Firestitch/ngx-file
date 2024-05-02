import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import { FsFileImagePickerComponent } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-image-picker',
  templateUrl: './file-image-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileImagePickerComponent {

  @ViewChild('imagePicker', { static: true })
  public imagePicker: FsFileImagePickerComponent;

  public file;
  public url = 'https://i.etsystatic.com/40403146/r/il/27fde4/4577393439/il_fullxfull.4577393439_7at9.jpg';

  constructor(
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public select(file) {
    this.file = file;
    console.log('Select File', file);
    this._cdRef.markForCheck();
  }

  public cancel() {
    this.imagePicker.cancel();
  }

  public error(e) {
    this._message.error(e.message);
  }

  public selectUrl(url) {
    this._message.info(`Image URL: ${  url}`);
  }
}
