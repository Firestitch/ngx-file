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
  styleUrls: ['./fs-file-previews.component.scss'],
  templateUrl: './fs-file-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsComponent {

  @ContentChildren(FsFilePreviewActionDirective)
  public set actionDirectives(actionDirectives: QueryList<FsFilePreviewActionDirective>) {
    this.actions.reset([...actionDirectives.toArray(), ...this.actions.toArray()]);
  }

  @Input() public files: FsFile[] | any[];
  @Input() public mapFile: (file: any) => FsFile;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public actions = new QueryList<FsFilePreviewActionDirective>();
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
