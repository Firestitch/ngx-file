import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnDestroy, OnInit,
  Optional,
  Output,
  ViewChild
} from '@angular/core';

import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject, observable, Observable } from 'rxjs';

import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';
import { CordovaService } from '../../services/cordova.service';
import { FileProcessor, InputProcessor } from '../../classes';
import { FS_FILE_MODULE_CONFIG } from '../../fs-file.providers';


@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
  styles: [':host label { cursor: pointer }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit, OnDestroy {

  public inputProcessor: InputProcessor = null;
  private _destroy$ = new Subject();

  private processOptions = {
    width: void 0,
    height: void 0,
    quality: 1,
    minHeight: 0,
    minWidth: 0
  };

  @Input()
  set minHeight(value) {
    this.processOptions.minHeight = value;
  }

  @Input()
  set minWidth(value) {
    this.processOptions.minWidth = value;
  }

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

  @Input()
  set allowClick(value) {
    this.inputProcessor.allowClick = value;
  }

  @Input()
  set allowDrop(value) {
    this.inputProcessor.allowDrop = value;
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
    }
  }

  @Input()
  set imageHeight(value) {
    if (value !== void 0) {
      this.processOptions.height = +value;
    }
  }

  @Input()
  set imageQuality(value) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this.processOptions.quality = val;
    }
  }

  @Output() public select = new EventEmitter();
  @Output() public error = new EventEmitter();
  @Output() public clicked = new EventEmitter();

  @ViewChild('fileInput', { static: true })
  public fileInput: any;

  @ViewChild('fileLabel', { static: true })
  public fileLabel: any;

  constructor(
    cordovaService: CordovaService,
    public el: ElementRef,
    ngZone: NgZone,
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) public moduleConfig,
  ) {
    super();
    this.inputProcessor = new InputProcessor(cordovaService, ngZone);

    this.initSelect();
  }

  public ngOnInit() {
    this.inputProcessor.registerInput(this.fileInput);
    this.inputProcessor.registerLabel(this.fileLabel);
    this.inputProcessor.registerDrop(this.el);
  }

  public ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private initSelect() {

    const fileProcessor = new FileProcessor();

    this.inputProcessor.clicked
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((event: KeyboardEvent) => {
      this.clicked.next(event);
    });

    this.inputProcessor.select
    .pipe(
      takeUntil(this._destroy$),
      switchMap((files) => {

        if (this.inputProcessor.multiple && !Array.isArray(files)) {
            files = [files];
        }

        return fileProcessor.process(files, this.processOptions);
      })
    )
    .subscribe((e) => {
      this.select.emit(e);
    },
    e => {
      this.error.emit(e);
      this.initSelect();
    })
  }
}
