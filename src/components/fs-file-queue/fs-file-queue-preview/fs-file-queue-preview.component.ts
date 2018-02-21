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

  constructor() {
  }

  public ngOnInit() {
    console.log(this.actions);
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
}
