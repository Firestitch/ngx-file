import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FsFileService } from '../../services';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';

@Component({
  selector: 'fs-file',
  providers: [FsFileService],
  templateUrl: './fs-file.component.html'
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit {

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

  @Input() imageFixOrientation = true;

  @Output('select') public select: EventEmitter<any>;

  @ViewChild('fileInput') public fileInput: any;

  constructor(public fsFile: FsFileService, public el: ElementRef) {
    super(el);
    this.select = this.fsFile.select;
  }

  public ngOnInit() {
    this.fsFile.initForElement(this.fileInput);
    this.fsFile.initDragNDropForElement(this.el);
  }
}
