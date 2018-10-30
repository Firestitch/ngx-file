import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  AfterViewInit,
  Output,
  ViewChild,
  NgZone
} from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { isArray } from 'lodash';

import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';
import { CordovaService } from '../../services/cordova.service';
import { FileProcessor, InputProcessor } from '../../classes';


@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
  styles: [':host label { cursor: pointer }']
})
export class FsFileComponent extends FsFileDragBaseComponent implements AfterViewInit {

  public inputProcessor: InputProcessor = null;
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

  get api() {
    return this.inputProcessor.api;
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
    this.inputProcessor.accept = value;
  }

  get accept() {
    return this.inputProcessor.accept || '*';
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

  constructor(cordovaService: CordovaService, public el: ElementRef, ngZone: NgZone) {
    super(el);
    this.inputProcessor = new InputProcessor(cordovaService, ngZone);

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