import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsFilePreviewComponent } from '../../../../src/app/components/fs-file-preview/fs-file-preview.component';
import { FsFilePreviewActionDirective } from '../../../../src/app/directives/fs-file-preview-action.directive';


@Component({
    selector: 'file-preview',
    templateUrl: './file-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsFilePreviewComponent, FsFilePreviewActionDirective],
})
export class FilePreviewComponent {
  public file = new FsFile(null, 'Insurance Documentation.pdf');
}


