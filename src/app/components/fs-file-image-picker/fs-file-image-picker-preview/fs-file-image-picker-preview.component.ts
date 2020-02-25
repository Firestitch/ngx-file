import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnInit, ChangeDetectionStrategy,
} from '@angular/core';

import { FsFile } from '../../../models/fs-file';


@Component({
  selector: 'fs-file-image-picker-preview',
  templateUrl: 'fs-file-image-picker-preview.component.html',
  styleUrls: ['./fs-file-image-picker-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileImagePickerPreviewComponent implements OnInit {

  public preview: string;
  public updateStyle;

  @Input() public imageWidth = 500;
  @Input() public imageHeight = 500;
  @Input() public previewFit = 'cover';
  @Input() public previewDiameter = 50;
  @Input() public imageQuality: number;
  @Input() public minWidth = 0;
  @Input() public minHeight = 0;
  @Input() public file: FsFile;

  @Output() public select = new EventEmitter<any>();
  @Output() public error = new EventEmitter<any>();
  @Output() public clicked = new EventEmitter<any>();

  constructor() {}

  public selectFile(file) {
    this.file = file;
    this.select.emit(file);
  }

  public ngOnInit() {

    let fontSize = this.previewDiameter / 100;

    if (fontSize < .5) {
      fontSize = .5;
    }

    if (fontSize > 1.5) {
      fontSize = 1;
    }

    this.updateStyle = { fontSize: (fontSize * 12) + 'px' };
  }
}
