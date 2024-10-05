import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy, OnInit,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';

import { FsMessage, MessageMode } from '@firestitch/message';

import { Subject, of } from 'rxjs';
import { catchError, map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { FileProcessor } from '../../classes';
import { FS_FILE_MODULE_CONFIG } from '../../injectors';
import { FsFileModuleConfig } from '../../interfaces';
import { FileProcessConfig, FsFile } from '../../models';
import { InputProcessorService } from '../../services';
import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';


@Component({
  selector: 'fs-file',
  templateUrl: './fs-file.component.html',
  styleUrls: ['./fs-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [InputProcessorService],
})
export class FsFileComponent extends FsFileDragBaseComponent implements OnInit, OnDestroy {

  @Output() public select = new EventEmitter();
  @Output() public error = new EventEmitter();
  @Output() public beforeProcessing = new EventEmitter<FsFile[]>();
  @Output() public clicked = new EventEmitter();
  @Output() public declined = new EventEmitter<File[]>();

  @ViewChild('fileInput', { static: true })
  public fileInput: ElementRef;

  @ViewChild('fileContainer', { static: true })
  public fileContainer: ElementRef;

  @Input()
  public set minHeight(value) {
    this._processConfig.minHeight = value;
  }

  @Input()
  public set minWidth(value) {
    this._processConfig.minWidth = value;
  }

  @Input()
  public set orientate(value) {
    this._processConfig.orientate = value;
  }

  @Input()
  public set multiple(value) {
    // TODO This should be a helper function in @firestitch/common
    this.inputProcessor.multiple = typeof (value) === 'boolean' ? value : value === 'true';
  }

  public get multiple() {
    return this.inputProcessor.multiple;
  }

  public get api() {
    return this.inputProcessor.api;
  }

  @Input()
  public set capture(value: 'camera' | 'library') {
    this.inputProcessor.capture = value;
  }

  public get capture() {
    return this.inputProcessor.capture;
  }

  @Input()
  public set allowClick(value) {
    this.inputProcessor.allowClick = value;
  }

  @Input()
  public set allowDrop(value) {
    this.inputProcessor.allowDrop = value;
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
    return this.inputProcessor.accept;
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
    this._processConfig.maxWidth = +value;
  }

  @Input()
  public set imageHeight(value) {
    this._processConfig.maxHeight = +value;
  }

  @Input()
  public set imageQuality(value) {
    this._processConfig.quality = value;
  }

  private _destroy$ = new Subject();
  private _processConfig = new FileProcessConfig();

  constructor(
    public el: ElementRef,
    public inputProcessor: InputProcessorService,
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) public moduleConfig: FsFileModuleConfig,
    private _message: FsMessage,
  ) {
    super();
    this._initSelect();
  }

  public ngOnInit() {
    this.inputProcessor.registerInput(this.fileInput);
    this.inputProcessor.registerLabel(this.fileContainer);
    this.inputProcessor.registerDrop(this.el);
    this._listenDeclinedFiles();
  }

  public ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _initSelect() {
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
        map((files) => {
          return Array.isArray(files) ? files : [files];
        }),
        tap((files) => {
          this.beforeProcessing.emit(files);
        }),
        switchMap((files) => {
          return fileProcessor.processFiles(files, this._processConfig);
        }),
        map((fsFiles) => {
          return this.inputProcessor.multiple ? fsFiles : fsFiles[0];
        }),
        tap((e) => {
          this.select.emit(e);
        }),
        catchError((e) => {
          this.error.emit(e);
          this._initSelect();

          return of(null);
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  private _listenDeclinedFiles(): void {
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
            },
          );
        });
      });
  }
}
