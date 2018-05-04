import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  AfterViewInit,
  Output,
  ViewChild
} from '@angular/core';
import { FsFileDragBaseComponent } from '../fs-file-drag-base';
import { FileProcessor, InputProcessor } from '../../classes';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { isArray } from 'lodash';
import { CordovaService } from '../../services';

@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
  styles: [':host label { cursor: pointer }']
})
export class FsFileComponent extends FsFileDragBaseComponent implements AfterViewInit {

  private inputProcessor = null;
  private autoProcess = false;

  private processOptions = {
    width: void 0,
    height: void 0,
    quality: 1,
  };



  @Input()
  set multiple(value) {
    // TODO This should be a helper function in @firestitch/common
    if (typeof(value) === 'boolean') {
      this.inputProcessor.multiple = value;
    } else {
      this.inputProcessor.multiple = value === 'true';
    }
  }

  get multiple() {
    return this.inputProcessor.multiple;
  }

  @Input()
  set capture(value) {
    this.inputProcessor.capture = value;
  }

  get capture() {
    return this.inputProcessor.capture;
  }

  @Input()
  set accept(value) {
    this.inputProcessor.accept = this.inputProcessor.accept.concat(value.split(','));
  }

  get accept() {
    return this.inputProcessor.accept.join(', ') || '*';
  }

  @Input()
  set disabled(value) {
    this.inputProcessor.disabled = value;
  }

  get disabled() {
    return this.inputProcessor.disabled;
  }

  @Input()
  set imageWidth(value) {
    if (value !== void 0) {
      this.processOptions.width = +value;
      this.autoProcess = true;
    }
  }

  @Input()
  set imageHeight(value) {
    if (value !== void 0) {
      this.processOptions.height = +value;
      this.autoProcess = true;
    }
  }

  @Input()
  set imageQuality(value) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this.processOptions.quality = val;
      this.autoProcess = true;
    }
  }

  @Output('select') public select: EventEmitter<any>;

  @ViewChild('fileInput') public fileInput: any;
  @ViewChild('fileLabel') public fileLabel: any;

  constructor(cordovaService: CordovaService, public el: ElementRef) {
    super(el);
    this.inputProcessor = new InputProcessor(cordovaService);

    const fileProcessor = new FileProcessor();

    this.select = this.inputProcessor.select.pipe(
      switchMap((files) => {
        if (this.inputProcessor.multiple && !isArray(files)) {
            files = [files];
        }

        if (this.autoProcess) {
          return fileProcessor.process(files, this.processOptions);
        } else {
          return of(files);
        }
      })
    ) as any;
    // this.select = this.fsFile.select;
  }

  public ngAfterViewInit() {
    this.inputProcessor.registerInput(this.fileInput);
    this.inputProcessor.registerLabel(this.fileLabel);
    this.inputProcessor.registerDrop(this.el);
  }
}
