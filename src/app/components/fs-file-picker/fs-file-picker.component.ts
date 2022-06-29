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
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FsFileLabelDirective } from '../../directives/fs-file-label.directive';
import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';
import { InputProcessor } from '../../classes';
import { FsFile } from '../../models/fs-file';
import { CordovaService } from '../../services/cordova.service';
import { FS_FILE_MODULE_CONFIG } from '../../fs-file.providers';


@Component({
  selector: 'fs-file-picker',
  templateUrl: 'fs-file-picker.component.html',
  styleUrls: ['fs-file-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsFilePickerComponent),
    multi: true,
  }],  
})
export class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit, ControlValueAccessor {

  @ViewChild('fileInput') 
  public fileInput: any;

  @ContentChildren(FsFileLabelDirective)
  public labels: QueryList<TemplateRef<any>>;

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
  public set previewWidth(value) {
    this._previewWidth = Number.isInteger(value) ? `${value}px` : value;
  }

  public get previewWidth() {
    return this._previewWidth;
  }
  
  @Input()
  public set previewHeight(value) {
    this._previewHeight = Number.isInteger(value) ? `${value}px` : value;
  }

  public get previewHeight() {
    return this._previewHeight;
  }

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();

  public onChange: any = () => {};
  public onTouch: any = () => {};
  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onTouch = fn; }
  public inputProcessor = null;
  public instruction = 'Drag & Drop your file or use the button below';
  public _file: FsFile;

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

  public get previewPercent() {
    return !Number.isInteger(this._previewWidth);
  }

  public writeValue(file): void {
    this.file = file;
    this._cdRef.markForCheck();
  }

  public selectFile(file) {
    this.file = file;
    this.select.emit(file);
    this.onChange(file);
  }

  public removeFile() {
    this.file = void 0;
    this.remove.emit(this.file);
    this.onChange(null);
  }

  public actionClick(data) {
    data.event.stopPropagation();
  }

  private _isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

}
