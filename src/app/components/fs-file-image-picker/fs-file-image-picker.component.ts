import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { InputProcessor } from '../../classes/input-processor';
import { FsFile } from '../../models/fs-file';
import { CordovaService } from '../../services/cordova.service';

@Component({
  selector: 'fs-file-image-picker',
  templateUrl: './fs-file-image-picker.component.html',
})
export class FsFileImagePickerComponent {
  @Input() public imageQuality: number;
  @Input() public imageWidth = 150;
  @Input() public imageHeight = 150;
  @Input() public previewDiameter = 50;

  @Input('url') set url(url) {
    this._file = new FsFile(url);
  }

  @Output() public select = new EventEmitter<any>();

  public inputProcessor = null;
  public _file: FsFile;
  public preview: string;

  constructor(private _cordovaService: CordovaService,
              private _ngZone: NgZone) {
    this.inputProcessor = new InputProcessor(_cordovaService, _ngZone);
  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
  }

}
