import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
} from '@angular/core';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';


@Component({
  selector: 'fs-file-previews',
  templateUrl: './fs-file-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsComponent {

  @ContentChildren(FsFilePreviewActionDirective)
  public previewActions: QueryList<FsFilePreviewActionDirective>;

  @Input() public files: FsFile[] | any[];
  @Input() public mapFile: (file: any) => FsFile;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public showActionOn: 'hover' | 'always' = 'hover';

  @Output() public removed = new EventEmitter();

  @HostBinding('class.queue') public queue = true;

  public removeFile(data) {
    const index = this.files.indexOf(data.file);
    if (index > -1) {
      this.files.splice(index, 1);
      this.removed.emit(this.files);
    }
  }
}
