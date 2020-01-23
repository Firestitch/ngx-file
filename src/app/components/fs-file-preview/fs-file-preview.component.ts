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
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent extends FsFilePreviewsBaseComponent implements AfterContentInit {

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
    this._generateFilePreview(file);
  }

  @Output() public remove = new EventEmitter();

  constructor(
    private _cdRef: ChangeDetectorRef,
  ) {
    super();
  }

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

  /**
   * Generate preview images for file
   * @param file {FsFile}
   */
  private _generateFilePreview(file: FsFile) {

    this.preview = null;
    if (!file.typeImage) {
      return;
    }

    if(file.url) {
      this.preview = file.url;
      return;
    }

    if (!file.file) {
      return;
    }

    file.progress = true;
    this.preview = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

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
