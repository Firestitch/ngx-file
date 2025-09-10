import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FsFileHintDirective, FsFileLabelDirective, FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models/fs-file';

import { FsFileImagePickerDialogComponent } from './fs-file-image-picker-dialog/fs-file-image-picker-dialog.component';


@Component({
  selector: 'fs-file-image-picker',
  templateUrl: './fs-file-image-picker.component.html',
  styleUrls: ['./fs-file-image-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileImagePickerComponent {

  @ContentChild(FsFileLabelDirective, { read: TemplateRef })
  public labelTemplate: TemplateRef<any>;

  @ContentChild(FsFileHintDirective, { read: TemplateRef })
  public hintTemplate: TemplateRef<any>;

  @ContentChildren(FsFilePreviewActionDirective)
  public set actionDirectives(actionDirectives: QueryList<FsFilePreviewActionDirective>) {
    this.actions.reset([...actionDirectives.toArray(), ...this.actions.toArray()]);
  }

  @Input() public imageQuality: number;
  @Input() public borderRadius = '100%';
  @Input() public imageWidth;
  @Input() public imageHeight;
  @Input() public previewDiameter = 80;
  @Input() public previewFit = 'cover';
  @Input() public label = '';
  @Input() public minWidth = 0;
  @Input() public minHeight = 0;
  @Input() public disabled = false; 
  @Input() public actions = new QueryList<FsFilePreviewActionDirective>();
  @Input() public showUploadAction = true;
  @Input() public showReuploadAction = true;

  @Input('url') public set url(url) {
    this._previousFile = this._file;
    this._file = url ? new FsFile(url) : null;
  }

  @Output() public select = new EventEmitter<any>();
  @Output() public error = new EventEmitter<any>();
  @Output() public selectUrl = new EventEmitter<any>();

  public _file: FsFile;
  public preview: string;
  public processing = false;

  private _previousFile: FsFile;

  constructor(
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) {
  }

  public get file(): FsFile {
    return this._file;
  }
  
  public beforeProcessing(fsFiles: FsFile[]) {
    this.processing = true;
  }

  public selectFile(file): void {
    this._previousFile = this._file;
    this._file = file;
    this.processing = false;
    
    setTimeout(() => {
      this.select.emit(file);
    });    
  }

  public cancel(): void {
    this._file = this._previousFile;
    this._previousFile = null;
    this._cdRef.markForCheck();
  }

  public clicked(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    if (event.shiftKey) {
      event.preventDefault();

      this._dialog.open(FsFileImagePickerDialogComponent, {
        data: {
          file: this._file,
          selectUrl: this.selectUrl,
        },
        width: '500px',
        autoFocus: false,
      });
    }
  }

}
