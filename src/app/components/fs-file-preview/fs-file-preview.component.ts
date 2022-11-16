import {
  EventEmitter,
  Component,
  Input,
  Output,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { isArray } from 'lodash-es';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../models';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base/fs-file-preview-base';
import { ScaleExifImage } from '../../helpers';


@Component({
  selector: 'fs-file-preview',
  templateUrl: 'fs-file-preview.component.html',
  styleUrls: ['fs-file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterContentInit {

  @Input() showFilename = true;
  @Input() public previewWidth: string | number = 150;
  @Input() public previewHeight: string | number = 150;
  @Input() public file: FsFile;

  @Input() set setActions(value) {
    this.actions.push(...value);
  }

  @Input() set setActionsTemplate(value) {
    this.actionsTemplate.push(...value);
  }

  @Output() public remove = new EventEmitter();

  public ngAfterContentInit() {
    this._cleanActions();
  }

  public callAction($event: Event, action) {
    if (action.click) {
      action.click.emit({ event: $event, file: this.file });
    }

    if (action.action == 'remove') {
      this.remove.emit({ event: $event, file: this.file });
    }
  }

  private _cleanActions() {
    this.actionTemplates.forEach(action => {
      if (action.forTypes) {
        // save original type
        const [originalFileType, originalContentType] = this.file.type.split('/');
        const types: any = isArray(action.forTypes) ? action.forTypes : [action.forTypes];

        // Looking for allowed type
        for (let i = 0; i < types.length; i++) {
          const [fileType, contentType] = types[i].split('/');
          const allowed = fileType === originalFileType && (contentType === originalContentType || contentType === '*');

          if (!allowed) {
            action.hide = true;
            break;
          }
        }
      }
    });
  }
}
