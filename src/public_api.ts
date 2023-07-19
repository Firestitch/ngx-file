/*
 * Public API Surface of fs-menu
 */

export { FsFileModule } from './app/fs-file.module';
export { FsFile } from './app/models/fs-file';
export {
  isImageType,
  ScaleExifImage
} from './app/helpers';

export { FsFileComponent } from './app/components/fs-file/fs-file.component';
export { FsFilePreviewsComponent } from './app/components/fs-file-previews/fs-file-previews.component';
export { FsFilePreviewComponent, } from './app/components/fs-file-preview/fs-file-preview.component';
export { FsFilePickerComponent, } from './app/components/fs-file-picker/fs-file-picker.component';
export { FsFileImagePickerComponent } from './app/components/fs-file-image-picker/fs-file-image-picker.component';
export { FsFilePreviewsBaseComponent, } from './app/components/fs-file-preview-base/fs-file-preview-base';
export { FsFileDragBaseComponent, } from './app/components/fs-file-drag-base/fs-file-drag-base';
export { FsFilePreviewActionDirective } from './app/directives/fs-file-preview-action.directive';
export { FsFileHintDirective } from './app/directives/fs-file-hint.directive';
export { FsFileLabelDirective } from './app/directives/fs-file-label.directive';

export { FsFilePickerSelectDirective } from './app/directives';

export { FsFileProcessConfig } from './app/interfaces';
export { FS_FILE_CLICK_INTERCEPTOR } from './app/injectors';
export { FileProcessor, FileClickInterceptor, FileClickHandler } from './app/classes';
export { InputProcessorService } from './app/services';
