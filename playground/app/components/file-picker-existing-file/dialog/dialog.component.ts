import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { FsApi } from '@firestitch/api';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsFilePickerComponent } from '../../../../../src/app/components/fs-file-picker/fs-file-picker.component';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';


@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsFilePickerComponent,
        MatDialogActions,
        MatButton,
        FsFormModule,
        MatDialogClose,
    ],
})
export class DialogComponent implements OnInit {
  private _api = inject(FsApi);


  public fileApi;

  public ngOnInit(): void {
    this.fileApi = this._api.createApiFile('/assets/lamborghini-sian-roadster-t1-1024x576.jpg');
  }

}
