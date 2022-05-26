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

  public inputProcessor = null;
  public instruction = 'Drag & Drop your file or use the button below';
  public _file: FsFile;
  
  private _disabled: boolean;  

  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;
  @Input() public label;
  @Input() public showFilename = true;

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
  set disabled(value) {
    this._disabled = value;
  }

  get disabled() {
    return this._disabled;
  }

  @Input('width') set setWidth(value) {
    this.width = this._isNumeric(value) ? `${value}px` : value;
  }

  @Input('height') set setHeight(value) {
    this.height = this._isNumeric(value) ? `${value}px` : value;
  }

  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;
  @Input() public allowDownload = false;
  @Input() public allowReupload = true;
  @Input() public allowRemove = false;

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();

  public width = '150px';
  public height = '150px';
  public onChange: any = () => {};
  public onTouch: any = () => {};

  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onTouch = fn; }

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
