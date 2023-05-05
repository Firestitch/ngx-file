import {
  EventEmitter,
  Component,
  Input,
  Output,
  AfterContentInit,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';

import { isArray } from 'lodash-es';

import { FsFile } from '../../models';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base/fs-file-preview-base';


@Component({
  selector: 'fs-file-preview',
  templateUrl: 'fs-file-preview.component.html',
  styleUrls: ['fs-file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterContentInit, OnInit {

  public loaded = false;

  @Input() showFilename = true;
  @Input() public previewWidth: string | number = 150;
  @Input() public previewHeight: string | number = 150;
  @Input() public file: FsFile;
  @Input() public url: string;
  @Input() public index: number;

  @Input() set setActions(value) {
    this.actions.push(...value);
  }

  @Input() set setActionsTemplate(value) {
    this.actionsTemplate.push(...value);
  }

  @Output() public remove = new EventEmitter<{ event: MouseEvent, file: FsFile, index: number }>();

  public ngOnInit(): void {
    if(this.url) {
      this.file = new FsFile(this.url);
    }
  }

  public ngAfterContentInit() {
    this._cleanActions();
  }

  public previewLoaded() {
    this.loaded = true;
  }

  public callAction($event: MouseEvent, action, index) {
    if (action.click) {
      action.click.emit({ event: $event, file: this.file, index });
    }

    if (action.action == 'remove') {
      this.remove.emit({ event: $event, file: this.file, index });
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
