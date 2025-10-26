import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MatButton } from '@angular/material/button';

import { FsFormModule } from '@firestitch/form';
import { FsMessage } from '@firestitch/message';

import { FsFilePreviewsComponent } from '../../../../src/app/components/fs-file-previews/fs-file-previews.component';
import { FsFileComponent } from '../../../../src/app/components/fs-file/fs-file.component';
import { FsFilePreviewActionDirective } from '../../../../src/app/directives/fs-file-preview-action.directive';


@Component({
  selector: 'image-file-manipulation',
  templateUrl: './image-file-manipulation.component.html',
  styleUrls: ['./image-file-manipulation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsFileComponent,
    MatButton,
    FsFormModule,
    FsFilePreviewsComponent,
    FsFilePreviewActionDirective,
  ],
})
export class ImageFileManipulationComponent {

  public files = [];
  
  private _message = inject(FsMessage);

  public select(files) {
    this.files = this.files.concat(files);
  }

  public enhance(event) {
    this._message.success(`Enhance ${event.file.name}`);
  }

  public search(event) {
    this._message.success(`Search ${event.file.name}`);
  }

  public removed(files) {
    console.log('Removed', files);
    this._message.success('Removed');
  }
}
