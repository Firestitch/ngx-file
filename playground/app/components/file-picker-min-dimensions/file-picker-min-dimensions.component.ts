import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';

import { FsFilePickerComponent } from '../../../../src/app/components/fs-file-picker/fs-file-picker.component';


@Component({
  selector: 'file-picker-min-dimensions',
  templateUrl: './file-picker-min-dimensions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsFilePickerComponent,
    JsonPipe,
  ],
})
export class FilePickerMinDimensionsComponent {

  public file;

  private _message = inject(FsMessage);
  private _cdRef = inject(ChangeDetectorRef);

  public select(file) {
    this.file = file;
    this._cdRef.markForCheck();
  }

  public error(e) {
    this._message.error(e.error);
  }
}
