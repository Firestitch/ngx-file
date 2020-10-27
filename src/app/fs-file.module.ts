import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FsFileComponent } from './components/fs-file/fs-file.component';
import { FsFilePreviewsComponent } from './components/fs-file-previews/fs-file-previews.component';
import { FsFilePreviewComponent, } from './components/fs-file-preview/fs-file-preview.component';
import { FsFilePickerComponent, } from './components/fs-file-picker/fs-file-picker.component';
import { FsFilePreviewsBaseComponent, } from './components/fs-file-preview-base/fs-file-preview-base';
import { FsFileDragBaseComponent, } from './components/fs-file-drag-base/fs-file-drag-base';
import { FsFileImagePickerComponent } from './components/fs-file-image-picker/fs-file-image-picker.component';
import { FsFileImagePickerDialogComponent } from './components/fs-file-image-picker/fs-file-image-picker-dialog/fs-file-image-picker-dialog.component';
import { FsFileImagePickerPreviewComponent } from './components/fs-file-image-picker/fs-file-image-picker-preview/fs-file-image-picker-preview.component';
import { FsFileBouncingIconComponent } from './components/fs-file-bouncing-icon/fs-file-bouncing-icon.component';
import { FsFileDragoverMessageComponent } from './components/fs-file-dragover-message/fs-file-dragover-message.component';

import { FsFileLabelMessage } from './directives/fs-file-label-message.directive';
import { FsFilePreviewActionDirective } from './directives/fs-file-preview-action.directive';

import { CordovaService } from './services/cordova.service';
import { FS_FILE_MODULE_CONFIG } from './fs-file.providers';
import { FsFileModuleConfig } from './interfaces/module-config.interface';

import { FsLabelModule } from '@firestitch/label';
import { FsPromptModule } from '@firestitch/prompt';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    FsLabelModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FsPromptModule,
  ],
  exports: [
    FsFileComponent,
    FsFilePreviewsComponent,
    FsFilePreviewComponent,
    FsFilePreviewActionDirective,
    FsFilePickerComponent,
    FsFileImagePickerComponent,
    FsFileImagePickerPreviewComponent,
    FsFileLabelMessage,
  ],
  entryComponents: [
    FsFileImagePickerDialogComponent
  ],
  declarations: [
    FsFileComponent,
    FsFilePreviewsComponent,
    FsFilePreviewComponent,
    FsFilePreviewActionDirective,
    FsFileDragBaseComponent,
    FsFilePreviewsBaseComponent,
    FsFilePickerComponent,
    FsFileImagePickerComponent,
    FsFileImagePickerPreviewComponent,
    FsFileBouncingIconComponent,
    FsFileDragoverMessageComponent,
    FsFileImagePickerDialogComponent,
    FsFileLabelMessage,
  ],
  providers: [
    CordovaService
  ],
})
export class FsFileModule {
  static forRoot(config: FsFileModuleConfig = null): ModuleWithProviders {
    return {
      ngModule: FsFileModule,
      providers: [
        {
          provide: FS_FILE_MODULE_CONFIG,
          useValue: config || {
            allowDownload: true,
            allowRemove: true,
            dragoverMessage: true
          }
        }
      ]
    };
  }
}
