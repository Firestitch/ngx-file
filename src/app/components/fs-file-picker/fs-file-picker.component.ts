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
  ChangeDetectionStrategy
} from '@angular/core';

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
})
export class FsFilePickerComponent extends FsFileDragBaseComponent implements OnInit {

  @ViewChild('fileInput') public fileInput: any;

  public inputProcessor = null;
  public instruction = 'Drag & Drop your file or use the button below';
  public _file: FsFile;
  
  private _disabled: boolean;  

  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public imageQuality;
  @Input() public showFilename = true;

  @Input('url') set url(url) {
    this._file = url ? new FsFile(url) : null;
  }

  @Input('file') set file(file) {
    this._file = file;
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
  @Input() public allowDownload;
  @Input() public allowReupload = true;
  @Input() public allowRemove;

  public width = '150px';
  public height = '150px';

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter();

  constructor(
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) public moduleConfig,
    cordovaService: CordovaService,
    ngZone: NgZone,
  ) {
    super();
    this.inputProcessor = new InputProcessor(cordovaService, ngZone);
  }

  public ngOnInit() {
    // Setup module default config
    if (this.moduleConfig) {
      if (this.allowDownload === void 0) {
        this.allowDownload = this.moduleConfig.allowDownload
      }

      if (this.allowRemove === void 0) {
        this.allowRemove = this.moduleConfig.allowRemove
      }
    }

  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
  }

  public removeFile() {
    this._file = void 0;
    this.remove.emit(this._file);
  }

  public actionClick(data) {
    data.event.stopPropagation();
  }

  private _isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

}
