import {
  ElementRef,
  EventEmitter,
  Component,
  Input,
  Output,
  ViewChild
} from '@angular/core';

import { FsFileDragBaseComponent } from '../fs-file-drag-base';
import { InputProcessor } from '../../classes';
import { FsFile } from '../../models';
import { CordovaService } from '../../services';
import { createFile } from '../../helpers';


@Component({
  selector: 'fs-file-picker',
  templateUrl: 'fs-file-picker.component.html',
  styleUrls: [ 'fs-file-picker.component.scss' ],
})
export class FsFilePickerComponent extends FsFileDragBaseComponent {

  public inputProcessor = null;
  private _disabled: boolean;
  public instruction = 'Drag & Drop your file or use the button below';
  public _file: FsFile;


  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;

  @Input('file') set file(file) {
    this._file = file;
  }

  @Input()
  set accept(value) {
    this.inputProcessor.accept = value;
  }

  get accept() {
    return this.inputProcessor.accept || '*';
  }

  @Input()
  set disabled(value) {
    this._disabled = value;
  }

  get disabled() {
    return this._disabled;
  }

  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public allowDownload = true;
  @Input() public allowReupload = true;
  @Input() public allowRemove = true;

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();

  @ViewChild('fileInput') public fileInput: any;


  constructor(cordovaService: CordovaService, public el: ElementRef) {
    super(el);
    this.inputProcessor = new InputProcessor(cordovaService);
  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
  }

  public removeFile(file) {
    this._file = void 0;
    this.remove.emit(this._file);
  }
}
