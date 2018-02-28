import {
  ElementRef,
  EventEmitter,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FsFileService} from '../../services';
import {FsFileDragBaseComponent} from '../fs-file-drag-base';

@Component({
  selector: 'fs-file-picker',
  templateUrl: 'fs-file-picker.component.html',
  styleUrls: [ 'fs-file-picker.component.scss' ],
  providers: [FsFileService]
})
export class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit {

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

  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;

  @Output('select') public select = new EventEmitter<any>();

  @ViewChild('fileInput') public fileInput: any;

  public instruction = 'Drag & Drop your file or use the button below';
  public file;

  constructor(public fsFile: FsFileService, public el: ElementRef) {
    super(el);
  }

  public ngOnInit() {
    this.fsFile.initForElement(this.fileInput);
    this.fsFile.initDragNDropForElement(this.el);

    this.fsFile.select.subscribe((file) => {
      this.file = file;
      this.select.emit(file);
    });
  }

  public removeFile(file) {
    this.file = void 0;
  }
}
