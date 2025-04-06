import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { FsFilePreviewActionDirective } from '../../directives';


@Component({
  selector: 'fs-file-actions',
  templateUrl: './fs-file-actions.component.html',
  styleUrls: ['./fs-file-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileActionsComponent implements AfterContentInit {

  @ContentChildren(FsFilePreviewActionDirective)
  public childrenActions: QueryList<FsFilePreviewActionDirective>;

  public ngAfterContentInit() {
    // this._cleanActions();
  }

  public callAction(event: MouseEvent, action: FsFilePreviewActionDirective) {
    if (action.click.observers.length) {
      event.stopImmediatePropagation();
      event.stopPropagation();

      action.click.emit({ event, file: action.file });
    }

    // if (action.action === 'remove') {
    // //  this.remove.emit({ event: $event, file: this.file });
    // }
  }

  // private _cleanActions() {
  //   this.previewActions
  //     .forEach((action) => {
  //       if (action.forTypes) {
  //         const [originalFileType, originalContentType] = this.file.type.split('/');
  //         const types: string[] = Array.isArray(action.forTypes) ?
  //           action.forTypes :
  //           [action.forTypes];

  //         action.hide = types
  //           .some((type) => {
  //             const [fileType, contentType] = type.split('/');
  //             const allowed = fileType === originalFileType &&
  //               (contentType === originalContentType || contentType === '*');

  //             return !allowed;
  //           });
  //       }
  //     });
  // }
}
