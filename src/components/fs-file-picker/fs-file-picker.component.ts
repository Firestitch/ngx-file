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


  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;

  @Input('previewUrl') set previewUrl(url) {
    this.file = new FsFile(createFile([''], url));
  }

  @Input('name') set name(name) {
    this.file = new FsFile(createFile([''], name));
  }

  @Input()
  set accept(value) {
    this._accept = this._accept.concat(value.split(','));
  }

  get accept() {
    return this._accept.join(', ') || '*';
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

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();

  @ViewChild('fileInput') public fileInput: any;


  public inputProcessor = null;
  private _accept = [];
  private _disabled: boolean;


  constructor(cordovaService: CordovaService, public el: ElementRef) {
    super(el);
    this.inputProcessor = new InputProcessor(cordovaService);
  }

  public instruction = 'Drag & Drop your file or use the button below';
  public file;

  public selectFile(file) {
    this.file = file;
    this.select.emit(file);
  }

  public removeFile(file) {
    this.file = void 0;
    this.remove.emit(this.file);
  }
}
