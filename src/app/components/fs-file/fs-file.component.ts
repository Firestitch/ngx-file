import {
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

import { FsMessage, MessageMode } from '@firestitch/message';

import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';
import { CordovaService } from '../../services/cordova.service';
import { FileProcessor, InputProcessor } from '../../classes';
import { FS_FILE_MODULE_CONFIG } from '../../fs-file.providers';
import { FileProcessConfig } from '../../models';


@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
  styleUrls: ['./fs-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit, OnDestroy {

  public inputProcessor: InputProcessor = null;

  private _destroy$ = new Subject();
  private processConfig = new FileProcessConfig();

  @Input()
  public set minHeight(value) {
    this.processConfig.minHeight = value;
  }

  @Input()
  public set minWidth(value) {
    this.processConfig.minWidth = value;
  }

  @Input()
  public set orientate(value) {
    this.processConfig.orientate = value;
  }

  @Input()
  public set multiple(value) {
    // TODO This should be a helper function in @firestitch/common
    if (typeof(value) === 'boolean') {
      this.inputProcessor.multiple = value;
    } else {
      this.inputProcessor.multiple = value === 'true';
    }
  }

  public get multiple() {
    return this.inputProcessor.multiple;
  }

  public get api() {
    return this.inputProcessor.api;
  }

  @Input()
  public set capture(value) {
    this.inputProcessor.capture = value;
  }

  @Input()
  public set allowClick(value) {
    this.inputProcessor.allowClick = value;
  }

  @Input()
  public set allowDrop(value) {
    this.inputProcessor.allowDrop = value;
  }

  public get capture() {
    return this.inputProcessor.capture;
  }

  /**
   * Accept Examples
   * 
   * image/*,audio/*,video/*,image/jpg,.pdf
   */
  @Input()
  public set accept(value: string | string[]) {
    this.inputProcessor.accept = Array.isArray(value) ? value.join(',') : value;
  }

  public get accept() {
    return this.inputProcessor.accept || '*';
  }

  @Input()
  public set disabled(value) {
    this.inputProcessor.disabled = value;
  }

  public get disabled() {
    return this.inputProcessor.disabled;
  }

  @Input()
  public set imageWidth(value) {
    this.processConfig.maxWidth = +value;
  }

  @Input()
  public set imageHeight(value) {
    this.processConfig.maxHeight = +value;
  }

  @Input()
  public set imageQuality(value) {
    this.processConfig.quality = value;
  }

  @Output() public select = new EventEmitter();
  @Output() public error = new EventEmitter();
  @Output() public clicked = new EventEmitter();
  @Output() public declined = new EventEmitter<File[]>();

  @ViewChild('fileInput', { static: true })
  public fileInput: any;

  @ViewChild('fileLabel', { static: true })
  public fileLabel: any;

  constructor(
    cordovaService: CordovaService,
    public el: ElementRef,
    ngZone: NgZone,
    @Optional()
    @Inject(FS_FILE_MODULE_CONFIG)
    public moduleConfig,
    private _message: FsMessage,
  ) {
    super();
    this.inputProcessor = new InputProcessor(cordovaService, ngZone);
    this.initSelect();
  }

  public ngOnInit() {
    this.inputProcessor.registerInput(this.fileInput);
    this.inputProcessor.registerLabel(this.fileLabel);
    this.inputProcessor.registerDrop(this.el);
    this.listenDeclinedFiles();
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
      switchMap((files) => {
        if (!Array.isArray(files)) {
            files = [files];
        }

        return fileProcessor.processFiles(files, this.processConfig);
      }),
      map((fsFiles) => {
        return this.inputProcessor.multiple ? fsFiles : fsFiles[0]; 
      }),
      takeUntil(this._destroy$),
    )
    .subscribe((e) => {
      this.select.emit(e);
    },
    (e) => {
      this.error.emit(e);
      this.initSelect();
    })
  }

  private listenDeclinedFiles(): void {
    this.inputProcessor
      .declinedFiles$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((files) => {
        this.declined.next(files);

        files.forEach((file) => {
          this._message.error(
            `Upload file type is not supported for ${file.name}`,
            {
              mode: MessageMode.Toast,
              positionClass: 'toast-bottom-right',
            }
          )
        })
      })
  }
}
