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
import { FileProcessor, InputProcessor } from '../../classes';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit {

  private _inputProcessor = new InputProcessor();
  private _multiple: boolean;
  private _accept = [];
  private _disabled: boolean;

  private _processOptions = {
    width: void 0,
    height: void 0,
    quality: 1,
  };

  private _autoProcess = false;

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

  @Input()
  set imageWidth(value) {
    if (value !== void 0) {
      this._processOptions.width = +value;
      this._autoProcess = true;
    }
  }

  @Input()
  set imageHeight(value) {
    if (value !== void 0) {
      this._processOptions.height = +value;
      this._autoProcess = true;
    }
  }

  @Input()
  set imageQuality(value) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this._processOptions.quality = val;
      this._autoProcess = true;
    }
  }

  @Output('select') public select: EventEmitter<any>;

  @ViewChild('fileInput') public fileInput: any;

  constructor(public el: ElementRef) {
    super(el);

    const filePorcessor = new FileProcessor();

    this.select = this._inputProcessor.select.pipe(
      switchMap((files) => {
        if (this._autoProcess) {
          return filePorcessor.process(files, this._processOptions);
        } else {
          return of(files);
        }
      })
    ) as any;
    // this.select = this.fsFile.select;
  }

  public ngOnInit() {
    this._inputProcessor.initForElement(this.fileInput);
    this._inputProcessor.initDragNDropForElement(this.el);
  }
}
