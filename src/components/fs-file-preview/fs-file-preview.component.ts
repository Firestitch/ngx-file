import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import * as FileAPI from 'fileapi';
import { FsFile } from '../../models/fs-file';

@Component({
  selector: 'fs-file-preview',
  templateUrl: 'fs-file-preview.component.html',
  styleUrls: [ 'fs-file-preview.component.scss' ]
})
export class FsFilePreviewComponent implements OnInit {

  public file: FsFile;
  public preview: string;
  @Input() public actions;
  @Input() public actionsTemplate;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input('file') set _file(file: FsFile) {
    this.file = file;
    this.generateFilePreview(file);
  }

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

  /**
   * Generate preview images for file
   * @param {FsFile} file
   */
  private generateFilePreview(file: FsFile) {
    if (!this.file.typeImage) {
      return;
    }
    file.progress = true;
    FileAPI.Image(file.file)
      .preview(this.previewWidth, this.previewHeight)
      .get((err, img) => {
        FileAPI.readAsDataURL(img, (event) => {
          if (event.type === 'load') {
            this.preview = event.result;
            file.progress = false;
          }
        });
      });
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
