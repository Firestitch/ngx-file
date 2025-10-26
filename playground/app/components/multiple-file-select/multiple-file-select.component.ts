import { ChangeDetectionStrategy, ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';

import { guid } from '@firestitch/common';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';

import { FsFilePreviewComponent } from '../../../../src/app/components/fs-file-preview/fs-file-preview.component';
import { FsFileComponent } from '../../../../src/app/components/fs-file/fs-file.component';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { FsFilePreviewActionDirective } from '../../../../src/app/directives/fs-file-preview-action.directive';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'multiple-file-select',
    templateUrl: './multiple-file-select.component.html',
    styleUrls: ['./multiple-file-select.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsFileComponent,
        MatButton,
        FsFormModule,
        FsFilePreviewComponent,
        FsFilePreviewActionDirective,
        JsonPipe,
    ],
})
export class MultipleFileSelectComponent {

  @ViewChildren(FsFilePreviewComponent)
  public filePreviews: QueryList<FsFilePreviewComponent>;

  public files: { id: string; file: FsFile; default: boolean }[] = [];

  constructor(
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) { 
  }

  public select(files) {
    this.files = [
      ...this.files,
      ...files
        .map((f) => {
          return { id: guid(), file: f, default: false };
        }),
    ];

    const defaultFile = files.find((f) => f.default);
    if (!defaultFile && files.length > 1) {
      this.files[0].default = true;
    }
  }

  public show = (file: FsFile) => {
    return !(file as any).default;
  };

  public remove(event: { file: FsFile }) {
    this.files = this.files
      .filter((f) => f.file !== event.file);
    this._cdRef.markForCheck();
    this._message.success(`Removed ${event.file.name}`);
  }

  public default(item) {
    this.files = this.files
      .map((file) => {
        return {
          ...file,
          default: file.id === item.id,
        };
      });

    this.filePreviews.forEach((filePreview) => {
      filePreview.updateActionVisibility();
    });
  }

  public download(event: { event: MouseEvent; file: FsFile }) {
    event.event.stopPropagation();
    event.file.download();
  }
}
