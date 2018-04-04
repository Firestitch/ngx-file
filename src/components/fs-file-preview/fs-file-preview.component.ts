import {
  EventEmitter,
  Component,
  Input,
  Output,
  AfterViewInit,
} from '@angular/core';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../models/fs-file';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base';
import { ScaleExifImage } from '../../helpers';

@Component({
  selector: 'fs-file-preview',
  templateUrl: 'fs-file-preview.component.html',
  styleUrls: [ 'fs-file-preview.component.scss' ]
})
export class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterViewInit {

  public file: FsFile;
  public preview: string;

  @Input() set _actions(value) {
    this.actions.push(...value);
  }
  @Input() set _actionsTemplate(value) {
    this.actionsTemplate.push(...value);
  }
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input('file') set _file(file: FsFile) {
    this.file = file;
    this.generateFilePreview(file);
  }

  @Output() public remove = new EventEmitter();

  public filteredActions = [];

  constructor() {
    super();
  }

  public ngAfterViewInit() {
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
        this.remove.emit(this.file);
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

    FileAPI.Image.transform(file.file, [{
      maxWidth: this.previewWidth,
      maxHeight: this.previewHeight
    }], file.fileOptions.autoOrientation, (err, images) => {
      if (!err && images[0]) {
        if (file.fileOptions.autoOrientation) {
          const scaledCanvasImage = ScaleExifImage(images[0], file.exifInfo.Orientation, this.previewWidth, this.previewHeight);
          this.preview = scaledCanvasImage.toDataURL(file.type);
        } else {
          this.preview = images[0].toDataURL(file.type);
        }

        file.progress = false;
      } else {
        alert(`Image preview error for file ${file.name}`);
        file.progress = false;
      }
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
