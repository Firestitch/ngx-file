import {
  Component, Inject
} from '@angular/core';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../../models/fs-file';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  templateUrl: 'fs-file-image-picker-dialog.component.html',
  styleUrls: ['./fs-file-image-picker-dialog.component.scss']
})
export class FsFileImagePickerDialogComponent {

  public file: FsFile;
  public reverseUrl = '';


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<FsFileImagePickerDialogComponent>) {
    if (data.file) {
      this.reverseUrl = 'https://images.google.com/searchbyimage?image_url=' + encodeURIComponent(data.file.url);
    }
  }
}
