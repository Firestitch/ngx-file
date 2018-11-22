import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
} from '@angular/material';

import { FsFileComponent } from './components/fs-file/fs-file.component';
import { FsFilePreviewsComponent } from './components/fs-file-previews/fs-file-previews.component';
import { FsFilePreviewComponent, } from './components/fs-file-preview/fs-file-preview.component';
import { FsFilePickerComponent, } from './components/fs-file-picker/fs-file-picker.component';
import { FsFilePreviewsBaseComponent, } from './components/fs-file-preview-base/fs-file-preview-base';
import { FsFileDragBaseComponent, } from './components/fs-file-drag-base/fs-file-drag-base';
import { FsFileImagePickerComponent } from './components/fs-file-image-picker/fs-file-image-picker.component';
import { FsFileImagePickerPreviewComponent } from './components/fs-file-image-picker/fs-file-image-picker-preview/fs-file-image-picker-preview.component';

import { FsFilePreviewActionDirective } from './directives/fs-file-preview-action.directive';

import { CordovaService } from './services/cordova.service';
import { FS_FILE_MODULE_CONFIG } from './fs-file.providers';
import { FsFileModuleConfig } from './interfaces/module-config.interface';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [
    FsFileComponent,
    FsFilePreviewsComponent,
    FsFilePreviewComponent,
    FsFilePreviewActionDirective,
    FsFilePickerComponent,
    FsFileImagePickerComponent,
    FsFileImagePickerPreviewComponent
  ],
  entryComponents: [
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
    FsFileImagePickerPreviewComponent
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
          }
        }
      ]
    };
  }
}
