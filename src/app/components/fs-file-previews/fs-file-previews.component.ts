import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  inject,
  Input,
  QueryList,
} from '@angular/core';

import { Observable } from 'rxjs';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';


@Component({
  selector: 'fs-file-previews',
  templateUrl: './fs-file-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsComponent {

  @ContentChildren(FsFilePreviewActionDirective)
  public actions: QueryList<FsFilePreviewActionDirective>;

  @Input() public files: FsFile[] | any[];
  @Input() public mapFile: (file: any) => FsFile;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public remove: (file: FsFile) => Observable<any>;
  @Input() public showActionOn: 'hover' | 'always' = 'always';

  @HostBinding('class.queue') public queue = true;

  private _cdRef = inject(ChangeDetectorRef);

  public removeFile(event: { file: FsFile }) {
    this.remove(event.file)
      .subscribe(() => {
        this.files = this.files
          .filter((f) => f !== event.file);
        this._cdRef.markForCheck();
      });
  }
}
