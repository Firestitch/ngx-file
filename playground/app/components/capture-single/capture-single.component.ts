import { Component } from '@angular/core';
import { FsFileComponent } from '../../../../src/app/components/fs-file/fs-file.component';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { FsFilePreviewComponent } from '../../../../src/app/components/fs-file-preview/fs-file-preview.component';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'capture-single',
    templateUrl: 'capture-single.component.html',
    styleUrls: ['capture-single.component.css'],
    standalone: true,
    imports: [FsFileComponent, MatButton, FsFormModule, FsFilePreviewComponent, JsonPipe]
})
export class CaptureSingleComponent {
  public file = void 0;

  public select(file) {
    this.file = file;
  }
}
