import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base/fs-file-preview-base';


@Component({
  selector: 'fs-file-previews',
  templateUrl: 'fs-file-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsComponent extends FsFilePreviewsBaseComponent {

  @Input() public files;
  @Input() public mapFile
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;

  @Output() public removed = new EventEmitter();

  @HostBinding('class.queue') queue = true;

  public removeFile(data) {
    const index = this.files.indexOf(data.file);
    if (index > -1) {
      this.files.splice(index, 1);
      this.removed.emit(this.files);
    }
  }
}
