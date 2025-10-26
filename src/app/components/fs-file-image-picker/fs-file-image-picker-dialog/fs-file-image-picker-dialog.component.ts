import {
  Component, Inject, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

import { FsFile } from '../../../models/fs-file';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsLabelModule } from '@firestitch/label';
import { MatButton, MatAnchor } from '@angular/material/button';


@Component({
    templateUrl: 'fs-file-image-picker-dialog.component.html',
    styleUrls: ['./fs-file-image-picker-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsLabelModule,
        MatDialogActions,
        MatButton,
        MatDialogClose,
        MatAnchor,
    ],
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
