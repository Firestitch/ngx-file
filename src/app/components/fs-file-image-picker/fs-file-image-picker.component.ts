import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output
} from '@angular/core';
import { InputProcessor } from '../../classes/input-processor';
import { FsFile } from '../../models/fs-file';
import { CordovaService } from '../../services/cordova.service';
import { MatDialog } from '@angular/material/dialog';
import { FsFileImagePickerDialogComponent } from './fs-file-image-picker-dialog/fs-file-image-picker-dialog.component';


@Component({
  selector: 'fs-file-image-picker',
  templateUrl: './fs-file-image-picker.component.html',
  styleUrls: ['./fs-file-image-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input() public allowUpload = true;

  @Input('url') set url(url) {
    this._file = new FsFile(url);
    this._previousFile = new FsFile(url);
  }

  @Output() public select = new EventEmitter<any>();
  @Output() public error = new EventEmitter<any>();
  @Output() public selectUrl = new EventEmitter<any>();

  public inputProcessor: InputProcessor = null;
  public _file: FsFile;
  public preview: string;

  private _previousFile: FsFile;

  constructor(private _cordovaService: CordovaService,
              private _ngZone: NgZone,
              private dialog: MatDialog) {
    this.inputProcessor = new InputProcessor(_cordovaService, _ngZone);
  }

  public selectFile(file) {
    this._file = file;
    this.select.emit(file);
  }

  public cancel() {
    this._file = this._previousFile;
  }

  public clicked(event: KeyboardEvent) {

    if (!this.allowUpload) {
      return;
    }

    if (event.shiftKey) {
      event.preventDefault();

      this.dialog.open(FsFileImagePickerDialogComponent, {
        data: {
          file: this._file,
          selectUrl: this.selectUrl
        },
        width: '500px',
        autoFocus: false
      });
    }
  }

}
