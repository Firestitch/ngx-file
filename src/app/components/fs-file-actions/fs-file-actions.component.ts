import {
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
export class FsFileActionsComponent {

  @ContentChildren(FsFilePreviewActionDirective)
  public actions: QueryList<FsFilePreviewActionDirective>;

  public callAction(event: MouseEvent, action: FsFilePreviewActionDirective) {
    if (action.click.observers.length) {
      event.stopImmediatePropagation();
      event.stopPropagation();

      action.click.emit({ event, file: action.file });
    }
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
