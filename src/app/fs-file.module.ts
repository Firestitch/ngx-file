import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsLabelModule } from '@firestitch/label';

import { FsFileActionsComponent } from './components/fs-file-actions/fs-file-actions.component';
import { FsFileBouncingIconComponent } from './components/fs-file-bouncing-icon/fs-file-bouncing-icon.component';
import { FsFileDragBaseComponent } from './components/fs-file-drag-base/fs-file-drag-base';
import { FsFileDragoverMessageComponent } from './components/fs-file-dragover-message/fs-file-dragover-message.component';
import { FsFileImagePickerDialogComponent } from './components/fs-file-image-picker/fs-file-image-picker-dialog/fs-file-image-picker-dialog.component';
import { FsFileImagePickerComponent } from './components/fs-file-image-picker/fs-file-image-picker.component';
import { FsFilePickerComponent } from './components/fs-file-picker/fs-file-picker.component';
import { FsFilePreviewComponent } from './components/fs-file-preview/fs-file-preview.component';
import { FsFilePreviewsComponent } from './components/fs-file-previews/fs-file-previews.component';
import { FsFileComponent } from './components/fs-file/fs-file.component';
import { FsFilePickerSelectDirective } from './directives';
import { FsFileHintDirective } from './directives/fs-file-hint.directive';
import { FsFileLabelDirective } from './directives/fs-file-label.directive';
import { FsFilePreviewActionDirective } from './directives/fs-file-preview-action.directive';
import { FS_FILE_MODULE_CONFIG } from './injectors';
import { FsFileModuleConfig } from './interfaces/module-config.interface';
import { FilePreviewMapFilePipe, FsFileSrcPipe } from './pipes';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FsLabelModule,
        FsFileComponent,
        FsFilePreviewsComponent,
        FsFilePreviewComponent,
        FsFilePreviewActionDirective,
        FsFileDragBaseComponent,
        FsFilePickerComponent,
        FsFileImagePickerComponent,
        FsFileBouncingIconComponent,
        FsFileDragoverMessageComponent,
        FsFileImagePickerDialogComponent,
        FsFileHintDirective,
        FsFileLabelDirective,
        FsFileSrcPipe,
        FilePreviewMapFilePipe,
        FsFilePickerSelectDirective,
        FsFileActionsComponent,
    ],
    exports: [
        FsFileComponent,
        FsFilePreviewsComponent,
        FsFilePreviewComponent,
        FsFilePreviewActionDirective,
        FsFilePickerComponent,
        FsFileImagePickerComponent,
        FsFileHintDirective,
        FsFileLabelDirective,
        FsFilePickerSelectDirective,
        FsFileSrcPipe,
        FsFileActionsComponent,
    ],
})
export class FsFileModule {
  public static forRoot(config: FsFileModuleConfig = null): ModuleWithProviders<FsFileModule> {
    return {
      ngModule: FsFileModule,
      providers: [
        {
          provide: FS_FILE_MODULE_CONFIG,
          useValue: config || {
            allowDownload: true,
            allowRemove: true,
            dragoverMessage: true,
          },
        },
      ],
    };
  }
}
