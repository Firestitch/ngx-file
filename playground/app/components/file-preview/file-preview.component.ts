import { Component } from '@angular/core';

import { FsFile } from '@firestitch/file';


@Component({
  selector: 'file-preview',
  templateUrl: './file-preview.component.html',
})
export class FilePreviewComponent {

  public file = new FsFile(null, 'Insurance Documentation.pdf');
}
