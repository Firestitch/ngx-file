import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnInit,
} from '@angular/core';

import { FsFile } from '../../../models/fs-file';

@Component({
  selector: 'fs-file-queue-preview',
  templateUrl: 'fs-file-queue-preview.component.html',
  styleUrls: [ 'fs-file-queue-preview.component.scss' ]
})
export class FsFileQueuePreviewComponent implements OnInit {

  @Input() public actions;
  @Input() public actionsTemplate;
  @Input() public file: FsFile;
  @Input() public previewWidth;
  @Input() public previewHeight;

  @Output() public deleted = new EventEmitter();

  public filteredActions = [];

  constructor() {
  }

  public ngOnInit() {
    this.cleanActions();
  }

  public getActionClasses(action) {
    if (action.placement) {
      return [action.placement];
    } else {
      return [];
    }
  }

  public callAction(action) {
    switch (action.action) {
      case 'remove': {
        this.deleted.emit(this.file);
      } break;
      default: {
        if (action.click) {
          action.click.emit(this.file);
        }
      }
    }
  }

  private cleanActions() {
    for (const action in this.actions) {
      if (this.actions.hasOwnProperty(action) && this.actions[action].forTypes) {
        // save original type
        const [originalFileType, originalContentType] = this.file.type.split('/');
        const types = this.actions[action].forTypes;

        // Looking for allowed type
        for (let i = 0; i < types.length; i++) {
          const [fileType, contentType] = types[i].split('/');
          const allowed = fileType === originalFileType && (contentType === originalContentType || contentType === '*');

          if (allowed) {
            this.filteredActions.push(this.actions[action]);
            break;
          }
        }
      } else {
        this.filteredActions.push(this.actions[action]);
      }
    }
  }
}
