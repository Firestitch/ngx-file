import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';
import { FsFilePickerComponent } from '../../../../src/app/components/fs-file-picker/fs-file-picker.component';
import { FsFileLabelDirective } from '../../../../src/app/directives/fs-file-label.directive';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'file-picker-existing-url',
    templateUrl: './file-picker-existing-url.component.html',
    styleUrls: ['./file-picker-existing-url.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsFilePickerComponent,
        FsFileLabelDirective,
        JsonPipe,
    ],
})
export class FilePickerExistingUrlComponent {

  public previewUrl = `${window.location.origin}/assets/Ferrari-SF90_Stradale-2020-1600-01.jpg`;
  public file = new FsFile(this.previewUrl);

  constructor(
    private _message: FsMessage,
  ) {}

  public select(file) {
    this.file = file;
  }

  public remove() {
    this._message.success('File was removed');
  }
}
