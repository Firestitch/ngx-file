import {
  EventEmitter,
  Component,
  Input,
  Output,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
} from '@angular/core';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../models';
import { FsFilePreviewsBaseComponent } from '../fs-file-preview-base/fs-file-preview-base';
import { ScaleExifImage } from '../../helpers';


@Component({
  selector: 'fs-file-preview',
  templateUrl: 'fs-file-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterViewInit {

  public file: FsFile;
  public preview: string;

  @Input() showFilename = true;

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

  constructor(
    private _cdRef: ChangeDetectorRef,
  ) {
    super();
  }

  public ngAfterViewInit() {
    this.cleanActions();
  }

  public callAction($event: Event, action) {

    if (action.click) {
      action.click.emit({ event: $event, file: this.file });
    }

    if (action.action == 'remove') {
      this.remove.emit({ event: $event, file: this.file });
    }
  }

  /**
   * Generate preview images for file
   * @param file {FsFile}
   */
  private generateFilePreview(file: FsFile) {

    if (file.url) {
      this.preview = file.url;
      return;
    }

    if (!this.file.typeImage) {
      return;
    }

    file.progress = true;

    FileAPI.Image.transform(file.file, [{
      width: this.previewWidth,
      height: this.previewHeight,
      preview: true,
      // quality: file.fileOptions.imageQuality
    }], true, (err, images) => {
      if (!err && images[0]) {
        const scaledCanvasImage = ScaleExifImage(
          images[0],
          file.exifInfo.Orientation,
          this.previewWidth,
          this.previewHeight
        );
        this.preview = scaledCanvasImage.toDataURL(file.type);

        file.progress = false;
      } else {
        console.log(`FsFilePreview: Image preview error for file ${file.name}`);
        file.progress = false;
      }

      this._cdRef.markForCheck();
    });
  }

  private cleanActions() {
    for (const action in this.actions) {
      if (this.actions.hasOwnProperty(action)) {
        if (this.actions[action].forTypes) {
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
}
