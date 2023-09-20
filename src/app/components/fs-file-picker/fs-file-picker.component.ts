import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  forwardRef
} from '@angular/core';
import { AbstractControl, AsyncValidator, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

import { Subject } from 'rxjs';

import { FsApiFile } from '@firestitch/api';
import { FsFilePickerSelectDirective } from '../../directives';
import { FsFileLabelDirective } from '../../directives/fs-file-label.directive';
import { FS_FILE_MODULE_CONFIG } from '../../injectors/file-config.injector';
import { FsFile } from '../../models/fs-file';
import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';


@Component({
  selector: 'fs-file-picker',
  templateUrl: 'fs-file-picker.component.html',
  styleUrls: ['fs-file-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FsFilePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FsFilePickerComponent,
      multi: true
    }
  ],
})
export class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit, ControlValueAccessor, AsyncValidator, OnDestroy {

  @ViewChild('fileInput')
  public fileInput: any;

  @ContentChildren(FsFileLabelDirective)
  public labels: QueryList<TemplateRef<any>>;

  @ContentChild(FsFilePickerSelectDirective, { read: TemplateRef })
  public filePickerSelectTemplate: TemplateRef<any>;

  @Input() public minWidth = 0;
  @Input() public minHeight = 0;
  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;
  @Input() public label;
  @Input() public showFilename = true;
  @Input() public allowDownload = false;
  @Input() public allowReupload = true;
  @Input() public multiple = false;
  @Input() public allowRemove = false;

  @Input('url') set url(url) {
    this.file = url ? new FsFile(url) : null;
  }

  @Input('file') set file(file: FsFile | FsApiFile | string) {
    if (file instanceof FsApiFile) {
      this._file = new FsFile(file);
    } else if (file instanceof FsFile) {
      this._file = file;
    } else if (file) {
      this._file = new FsFile(file);
    } else {
      this._file = null;
    }

    this.previewFile = this._file;
  }

  @Input()
  public accept: string | string[];

  public get file(): FsFile {
    return this._file;
  }

  @Input()
  public set disabled(value) {
    this._disabled = value;
  }

  public get disabled() {
    return this._disabled;
  }

  @Input()
  public set previewWidth(value: string | number) {
    this._previewWidth = Number.isInteger(value) ? `${value}px` : value?.toString() || '';
  }

  public get previewWidth() {
    return this._previewWidth;
  }

  @Input()
  public set previewHeight(value: string | number) {
    this._previewHeight = Number.isInteger(value) ? `${value}px` : value?.toString() || '';
  }

  public get previewHeight() {
    return this._previewHeight;
  }

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();
  @Output() public download = new EventEmitter<FsFile>();

  public onChange: any = () => { };
  public onTouch: any = () => { };
  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onTouch = fn; }
  public instruction = 'Drag & Drop your file or use the button below';
  public previewFile: FsFile;

  private _destroy$ = new Subject();
  private _disabled: boolean;
  private _previewWidth = '150px';
  private _file: FsFile;
  private _previewHeight = '150px';

  public constructor(
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) private _moduleConfig,
    private _cdRef: ChangeDetectorRef,
  ) {
    super();
  }

  public ngOnInit() {
    if (this._moduleConfig) {
      if (this.allowDownload === void 0) {
        this.allowDownload = this._moduleConfig.allowDownload
      }

      if (this.allowRemove === void 0) {
        this.allowRemove = this._moduleConfig.allowRemove
      }
    }
  }

  public validate(control: AbstractControl): Promise<ValidationErrors | null> | null {
    if (this.file?.typeImage && (this.minWidth || this.minHeight)) {
      // if(this.file.imageWidth < this.minWidth) {
      //   return { minWidth: `Minimum width ${this.minWidth}px` };
      // }

      // if(this.file.imageHeight < this.minHeight) {
      //   return { minWidth: `Minimum height ${this.minHeight}px` };
      // }      
    }

    return null;
  }

  public get previewPercent() {
    return String(this._previewWidth).match(/%/);
  }

  public writeValue(file): void {
    this.file = file;
    this._cdRef.markForCheck();
  }

  public selectFilePreview(fsFiles: FsFile[]) {
    this.previewFile = fsFiles[0];
  }

  public selectFile(fsFile: FsFile) {
    if (!this.multiple) {
      this.file = fsFile;
      this.onChange(fsFile);
    }

    this.select.emit(fsFile);
  }

  public removeFile() {
    this.file = null;
    this.previewFile = null;
    this.remove.emit(this.file);
    this.onChange(null);
  }

  public actionClick(event: { event: PointerEvent }) {
    event.event.stopPropagation();
  }

  public downloadClicked(event: { event: PointerEvent }) {
    event.event.stopPropagation();

    if (this.download.observers.length) {
      event.event.preventDefault();
      this.download.emit(this.file);
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
