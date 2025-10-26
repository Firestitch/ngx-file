import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';


import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';

import { UploadService } from 'playground/app/services';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { FsFilePickerComponent } from '../../../../src/app/components/fs-file-picker/fs-file-picker.component';
import { FsFileLabelDirective } from '../../../../src/app/directives/fs-file-label.directive';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'file-picker-form',
    templateUrl: './file-picker-form.component.html',
    styleUrls: ['./file-picker-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        FsFilePickerComponent,
        FsFileLabelDirective,
        MatButton,
    ],
})
export class FilePickerFormComponent {
  private _message = inject(FsMessage);
  private _upload = inject(UploadService);
  private _cdRef = inject(ChangeDetectorRef);


  public file = null;

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
