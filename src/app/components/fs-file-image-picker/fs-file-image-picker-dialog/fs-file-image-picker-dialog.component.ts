import {
  Component, Inject, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

import { FsFile } from '../../../models/fs-file';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  templateUrl: 'fs-file-image-picker-dialog.component.html',
  styleUrls: ['./fs-file-image-picker-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileImagePickerDialogComponent {

  public file: FsFile;
  public reverseUrl = '';
  public height;
  public width;
  public selectUrl: EventEmitter<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    if (data.file) {
      this.reverseUrl = 'https://images.google.com/searchbyimage?image_url=' + encodeURIComponent(data.file.url);
    }
    this.selectUrl = this.data.selectUrl;
  }

  imageLoad(event: any) {
    this.height = event.target.naturalHeight;
    this.width = event.target.naturalWidth;
  }

  upload() {

  }
}
