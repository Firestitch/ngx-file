import {
  EventEmitter,
  Component,
  Input,
  Output,
} from '@angular/core';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../../models/fs-file';
import { ScaleExifImage } from '../../../helpers';


@Component({
  selector: 'fs-file-image-picker-preview',
  templateUrl: 'fs-file-image-picker-preview.component.html',
  styleUrls: ['./fs-file-image-picker-preview.component.scss']
})
export class FsFileImagePickerPreviewComponent {

  public file: FsFile;
  public preview: string;

  @Input() public imageWidth = 500;
  @Input() public imageHeight = 500;
  @Input() public previewDiameter = 50;
  @Input() public imageQuality: number;

  @Input('file') set _file(file: FsFile) {
    this.file = file;
    this.generateFilePreview(file);
  }

  @Output() public select = new EventEmitter<any>();

  constructor() {

  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
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
      width: this.previewDiameter,
      height: this.previewDiameter,
      preview: true,
      // quality: file.fileOptions.imageQuality
    }], true, (err, images) => {
      if (!err && images[0]) {
        const scaledCanvasImage = ScaleExifImage(
          images[0],
          file.exifInfo.Orientation,
          this.previewDiameter,
          this.previewDiameter
        );
        this.preview = scaledCanvasImage.toDataURL(file.type);

        file.progress = false;
      } else {
        console.log(`FsFilePreview: Image preview error for file ${file.name}`);
        file.progress = false;
      }
    });
  }


}
