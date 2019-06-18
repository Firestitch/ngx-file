import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { InputProcessor } from '../../classes/input-processor';
import { FsFile } from '../../models/fs-file';
import { CordovaService } from '../../services/cordova.service';

@Component({
  selector: 'fs-file-image-picker',
  templateUrl: './fs-file-image-picker.component.html',
  styleUrls: ['./fs-file-image-picker.component.scss']
})
export class FsFileImagePickerComponent {

  @Input() public imageQuality: number;
  @Input() public imageWidth = 150;
  @Input() public imageHeight = 150;
  @Input() public previewDiameter = 50;
  @Input() public previewFit = 'cover';
  @Input() public label = '';
  @Input() public minWidth = 0;
  @Input() public minHeight = 0;

  @Input('url') set url(url) {
    this._file = new FsFile(url);
    this._previousFile = new FsFile(url);
  }

  @Output() public select = new EventEmitter<any>();
  @Output() public error = new EventEmitter<any>();

  public inputProcessor = null;
  public _file: FsFile;
  public preview: string;

  private _previousFile: FsFile;

  constructor(private _cordovaService: CordovaService,
              private _ngZone: NgZone) {
    this.inputProcessor = new InputProcessor(_cordovaService, _ngZone);
  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
  }

  public cancel() {
    this._file = this._previousFile;
  }

}
