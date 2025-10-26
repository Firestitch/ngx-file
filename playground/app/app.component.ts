import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { SingleFileSelectComponent } from './components/single-file-select/single-file-select.component';
import { MultipleFileSelectComponent } from './components/multiple-file-select/multiple-file-select.component';
import { FilePickerFormComponent } from './components/file-picker-form/file-picker-form.component';
import { ImageFileManipulationComponent } from './components/image-file-manipulation/image-file-manipulation.component';
import { FilePickerExistingFileComponent } from './components/file-picker-existing-file/file-picker-existing-file.component';
import { FileImagePickerComponent } from './components/file-image-picker/file-image-picker.component';
import { FilePreviewComponent } from './components/file-preview/file-preview.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        SingleFileSelectComponent,
        MultipleFileSelectComponent,
        FilePickerFormComponent,
        ImageFileManipulationComponent,
        FilePickerExistingFileComponent,
        FileImagePickerComponent,
        FilePreviewComponent,
    ],
})
export class AppComponent {
  private _iconRegistry = inject(MatIconRegistry);


  public config = environment;

  constructor() {
    this._iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
