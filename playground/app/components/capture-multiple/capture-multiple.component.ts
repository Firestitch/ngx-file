import { Component } from '@angular/core';
import { FsFileComponent } from '../../../../src/app/components/fs-file/fs-file.component';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { MatHint } from '@angular/material/form-field';
import { FsFilePreviewsComponent } from '../../../../src/app/components/fs-file-previews/fs-file-previews.component';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'capture-multiple',
    templateUrl: 'capture-multiple.component.html',
    styleUrls: ['capture-multiple.component.css'],
    standalone: true,
    imports: [FsFileComponent, MatButton, FsFormModule, MatHint, FsFilePreviewsComponent, JsonPipe]
})
export class CaptureMultipleComponent {
  public files = [];

  public select(files) {
    this.files = files;
  }
}
