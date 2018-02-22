import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import { FsFileService } from '../../services';
import { FsUtil } from '@firestitch/common';

@Component({
  selector: 'fs-file',
  providers: [FsFileService],
  templateUrl: './fs-file.component.html'
})
export class FsFileComponent implements OnInit {

  @Input()
  set multiple(value) {
    this.fsFile.multiple = value;
  }

  @Input()
  set accept(value) {
    this.fsFile.accept = value;
  }

  @Input()
  set minSize(value) {
    this.fsFile.minSize = value;
  };

  @Input()
  set maxSize(value) {
    this.fsFile.maxSize = value
  }

  @Input()
  set imageMaxWidth(value) {
    this.fsFile.imageMaxWidth = value
  }

  @Input()
  set imageMaxHeight(value) {
    this.fsFile.imageMaxHeight = value
  }

  @Input()
  set imageQuality(value) {
    this.fsFile.imageQuality = value;
  }

  @Input()
  set imageFormat(value) {
    this.fsFile.imageFormat = value;
  }

  @Input()
  set disabled(value) {
    this.fsFile.disabled = value;
  }

  @Input()
  set preview(value) {
    this.fsFile.preview = value;
  }

  @Input() imageFixOrientation = true;

  @Output('selected') public selected: EventEmitter<any>;

  @ViewChild('fileInput') public fileInput: any;

  public uniqId = this.fsUtil.guid();

  constructor(public fsFile: FsFileService, public fsUtil: FsUtil) {
    this.selected = this.fsFile.selected;
  }

  public ngOnInit() {
    this.fsFile.initForElement(this.fileInput);
  }
}
