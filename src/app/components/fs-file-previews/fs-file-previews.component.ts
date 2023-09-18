import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { FsFile } from '../../models';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base/fs-file-preview-base';


@Component({
  selector: 'fs-file-previews',
  templateUrl: 'fs-file-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsComponent extends FsFilePreviewsBaseComponent {

  @Input() public files: FsFile[] | any[];
  @Input() public mapFile: (file: any) => FsFile;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public showActionOn: 'hover' | 'always' = 'hover';

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
