import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList, TemplateRef, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { FsFileHintDirective, FsFileLabelDirective, FsFilePreviewActionDirective } from '../../directives';
import { FsFilePickerSelectDirective } from '../../directives/fs-file-picker-select.directive';
import { FsFilePreviewActionDirective as FsFilePreviewActionDirective_1 } from '../../directives/fs-file-preview-action.directive';
import { FsFile } from '../../models/fs-file';
import { FsFileActionsComponent } from '../fs-file-actions/fs-file-actions.component';
import { FsFilePickerComponent } from '../fs-file-picker/fs-file-picker.component';

import { FsFileImagePickerDialogComponent } from './fs-file-image-picker-dialog/fs-file-image-picker-dialog.component';


@Component({
  selector: 'fs-file-image-picker',
  templateUrl: './fs-file-image-picker.component.html',
  styleUrls: ['./fs-file-image-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsFilePickerComponent,
    FsFilePickerSelectDirective,
    MatIcon,
    FsFileActionsComponent,
    FsFilePreviewActionDirective_1,
  ],
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
  @Input() public showActionOn: 'hover' | 'always' = 'always';

  /**
   * Border color of the avatar circle.
   * - `undefined` (default): use the standard border color from the stylesheet.
   * - `null`: show no border at all.
   * - a color string: use it as the border color.
   */
  @Input() public borderColor: string;

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
  private _dialog = inject(MatDialog);
  private _cdRef = inject(ChangeDetectorRef);

  public get file(): FsFile {
    return this._file;
  }

  @HostBinding('style.--fs-file-image-picker-border-color')
  public get _borderColorVar(): string | null {
    return this.borderColor === null ? 'transparent' : this.borderColor;
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
