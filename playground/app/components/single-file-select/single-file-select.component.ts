import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsFileComponent } from '../../../../src/app/components/fs-file/fs-file.component';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'single-file-select',
    templateUrl: './single-file-select.component.html',
    styleUrls: ['./single-file-select.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsFileComponent,
        MatButton,
        FsFormModule,
        JsonPipe,
    ],
})
export class SingleFileSelectComponent {
  public file;

  public select(fsFile: FsFile) {
    this.file = fsFile;
  }
}
