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
  forwardRef,
} from '@angular/core';
import {
  AbstractControl, AsyncValidator, ControlValueAccessor,
  NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors,
} from '@angular/forms';

import { FsApiFile } from '@firestitch/api';

import { Subject } from 'rxjs';

import { FsFilePickerSelectDirective, FsFilePreviewActionDirective } from '../../directives';
import { FsFileLabelDirective } from '../../directives/fs-file-label.directive';
import { FS_FILE_MODULE_CONFIG } from '../../injectors/file-config.injector';
import { FsFile } from '../../models/fs-file';
import { FsFileDragBaseComponent } from '../fs-file-drag-base/fs-file-drag-base';


@Component({
  selector: 'fs-file-picker',
  templateUrl: './fs-file-picker.component.html',
  styleUrls: ['./fs-file-picker.component.scss'],
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
      multi: true,
    },
  ],
})
export class FsFilePickerComponent
  extends FsFileDragBaseComponent
  implements OnInit, ControlValueAccessor, AsyncValidator, OnDestroy {

  @ViewChild('fileInput')
  public fileInput: any;

  @ContentChildren(FsFileLabelDirective)
  public labels: QueryList<TemplateRef<any>>;

  @ContentChild(FsFilePickerSelectDirective, { read: TemplateRef })
  public filePickerSelectTemplate: TemplateRef<any>;

  @ContentChildren(FsFilePreviewActionDirective)
  public set actionDirectives(actionDirectives: QueryList<FsFilePreviewActionDirective>) {
    this.actions.reset([...actionDirectives.toArray(), ...this.actions.toArray()]);
  }

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
  @Input() public showReuploadAction = true;
  @Input() public actions = new QueryList<FsFilePreviewActionDirective>();
  @Input() public showActionOn: 'hover' | 'always' = 'hover';

  @Input('url') public set url(url) {
    this.file = url ? new FsFile(url) : null;
  }

  @Input('file') public set file(file: FsFile | FsApiFile | string) {
    if (file instanceof FsApiFile) {
      this._file = new FsFile(file);
    } else if (file instanceof FsFile) {
      this._file = file;
    } else if (file) {
      this._file = new FsFile(file);
    } else {
      this._file = null;
    }
  }

  public get file(): FsFile {
    return this._file;
  }

  @Input()
  public accept: string | string[];


  @Input()
  public set disabled(value) {
    this._disabled = value;
  }

  public get disabled() {
    return this._disabled;
  }

  @Input()
  public previewHeight = 150;

  @Input()
  public previewWidth = 150;

  @Input()
  public uploadIcon = 'upload';

  @Output() public select = new EventEmitter<any>();
  @Output() public remove = new EventEmitter<FsFile>();
  @Output() public download = new EventEmitter<FsFile>();

  public instruction = 'Drag & Drop your file or use the button below';
  public processing = false;

  private _destroy$ = new Subject();
  private _disabled: boolean;
  private _file: FsFile;

  constructor(
    @Optional() @Inject(FS_FILE_MODULE_CONFIG) private _moduleConfig,
    private _cdRef: ChangeDetectorRef,
  ) {
    super();
  }

  public onChange: any = () => {
    //
  };

  public onTouch: any = () => {
    //
  };

  public registerOnChange(fn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn): void {
    this.onTouch = fn;
  }

  public ngOnInit() {
    if (this._moduleConfig) {
      if (this.allowDownload === undefined) {
        this.allowDownload = this._moduleConfig.allowDownload;
      }

      if (this.allowRemove === undefined) {
        this.allowRemove = this._moduleConfig.allowRemove;
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
  
  public clear(): void {
    this.file = null;
    this._cdRef.markForCheck();
  }

  public writeValue(file): void {
    this.file = file;
  }

  public beforeProcessing(fsFiles: FsFile[]) {
    this.processing = true;
  }

  public declined() {
    this.processing = false;
    this.file = null;
    this.onChange(null);
    this._cdRef.markForCheck();
  }

  public selectFile(fsFile: FsFile) {
    if (!this.multiple) {
      this.file = fsFile;
      this.onChange(fsFile);
    }

    this.processing = false;
    this.select.emit(fsFile);
  }

  public removeFile(e: { event: MouseEvent }) {
    e.event.stopPropagation();
    e.event.preventDefault();
    this.onChange(null);
    this.clear();
  }

  public actionClick(event: { event: MouseEvent }) {
    event.event.stopPropagation();
  }

  public downloadClicked(event: { event: MouseEvent; file: FsFile }) {
    event.event.stopPropagation();

    if (this.download.observers.length) {
      event.event.preventDefault();
      this.download.emit(event.file);
    } else if (event.file?.url) {
      window.open(event.file.url, '_blank');
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
