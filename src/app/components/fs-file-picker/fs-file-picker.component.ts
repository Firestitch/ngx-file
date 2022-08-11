import {
  EventEmitter,
  Component,
  Input,
  Output,
  ViewChild,
  Inject,
  Optional,
  OnInit,
  NgZone,
  ChangeDetectionStrategy,
  forwardRef,
  ChangeDetectorRef,
  QueryList,
  ContentChildren,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

import { FsFileLabelDirective } from '../../directives/fs-file-label.directive';
import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';
import { InputProcessor } from '../../classes';
import { FsFile } from '../../models/fs-file';
import { CordovaService } from '../../services/cordova.service';
import { FS_FILE_MODULE_CONFIG } from '../../fs-file.providers';
import { from, Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';


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
export class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {

  @ViewChild('fileInput') 
  public fileInput: any;

  @ContentChildren(FsFileLabelDirective)
  public labels: QueryList<TemplateRef<any>>;

  @Input() public minWidth = 0;
  @Input() public minHeight = 0;
  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;
  @Input() public label;
  @Input() public showFilename = true;
  @Input() public allowDownload = false;
  @Input() public allowReupload = true;
  @Input() public allowRemove = false;

  @Input('url') set url(url) {
    this.file = url ? new FsFile(url) : null;
  }

  @Input('file') set file(file) {
    if(file) {
      if(file instanceof FsFile) {
        this._file = file;
          
      } else {
        this._file = new FsFile(file);
      }
    } else {
      this._file = null;
    }
  }

  @Input()
  public set accept(value) {
    this.inputProcessor.accept = value;
  }

  public get accept() {
    return this.inputProcessor.accept || '*';
  }
  
  public get file() {
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

  public onChange: any = () => {};
  public onTouch: any = () => {};
  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onTouch = fn; }
  public inputProcessor = null;
  public instruction = 'Drag & Drop your file or use the button below';
  public _file: FsFile;

  private _destroy$ = new Subject();
  private _disabled: boolean;  
  private _previewWidth = '150px';
  private _previewHeight = '150px';

  public constructor(
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) private _moduleConfig,
    private _cordovaService: CordovaService,
    private _ngZone: NgZone,
    private _cdRef: ChangeDetectorRef,
  ) {
    super();
    this.inputProcessor = new InputProcessor(_cordovaService, _ngZone);
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

  public validate(control: AbstractControl): ValidationErrors | null { 
    if(this.file?.typeImage && (this.minWidth || this.minHeight)) {
      if(this.file.imageWidth < this.minWidth) {
        return { minWidth: `Minimum width ${this.minWidth}px` };
      }

      if(this.file.imageHeight < this.minHeight) {
        return { minWidth: `Minimum height ${this.minHeight}px` };
      }      
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

  public selectFile(fsFile: FsFile) {
    of(true)    
    .pipe(
      switchMap(() => {
        return this.minWidth || this.minHeight ? from(fsFile.updateImageInfo()) : of(true);
      }),
      takeUntil(this._destroy$),
    )
    .subscribe(() => {
      this.file = fsFile;
      this.select.emit(fsFile);
      this.onChange(fsFile);
    });
  }

  public removeFile() {
    this.file = void 0;
    this.remove.emit(this.file);
    this.onChange(null);
  }

  public actionClick(event: { event: PointerEvent }) {
    event.event.stopPropagation();
  }

  public downloadClicked(event: { event: PointerEvent }) {
    event.event.stopPropagation();

    if(this.download.observers.length) {
      event.event.preventDefault();
      this.download.emit(this.file);
    }
  }
  
  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

}
