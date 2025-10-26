import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FsApi, FsApiFile } from '@firestitch/api';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';

import { UploadService } from 'playground/app/services';

import { DialogComponent } from './dialog';
import { FsFilePickerComponent } from '../../../../src/app/components/fs-file-picker/fs-file-picker.component';
import { FsFileLabelDirective } from '../../../../src/app/directives/fs-file-label.directive';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'file-picker-existing-file',
    templateUrl: './file-picker-existing-file.component.html',
    styleUrls: ['./file-picker-existing-file.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsFilePickerComponent,
        FsFileLabelDirective,
        JsonPipe,
    ],
})
export class FilePickerExistingFileComponent {
  private _message = inject(FsMessage);
  private _upload = inject(UploadService);
  private _api = inject(FsApi);
  private _dialog = inject(MatDialog);
  private _cdRef = inject(ChangeDetectorRef);


  public url = `${window.location.origin}/assets/Ferrari-SF90_Stradale-2020-1600-01.jpg`;
  public file = new FsFile('http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf', 'Document.pdf');
  public apiFile: FsApiFile;

  constructor() {
    this.apiFile = this._api
      .createApiFile('/assets/lamborghini-sian-roadster-t1-1024x576.jpg', { 
        name: 'lamborghini-sian-roadster-t1-1024x576.jpg',
      });
  }

  public select(file: FsFile) {
    this._upload.upload(file)
      .subscribe(() => {
        this.file = file;
        this._cdRef.markForCheck();
      });
  }

  public download() {
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
