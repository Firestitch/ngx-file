import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
import { InputProcessor } from '../../classes';

@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit {

  private _processor = new InputProcessor();
  private _multiple: boolean;
  private _accept = [];
  private _disabled: boolean;

  @Input()
  set multiple(value) {
    if (typeof(value) === 'boolean') {
      this._multiple = value;
    } else {
      this._multiple = value === 'true';
    }
  }

  get multiple() {
    return this._multiple;
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

  @Output('select') public select: EventEmitter<any>;

  @ViewChild('fileInput') public fileInput: any;

  constructor(public el: ElementRef) {
    super(el);
    this.select = this._processor.select;
    // this.select = this.fsFile.select;
  }

  public ngOnInit() {
    this._processor.initForElement(this.fileInput);
    this._processor.initDragNDropForElement(this.el);
  }
}
