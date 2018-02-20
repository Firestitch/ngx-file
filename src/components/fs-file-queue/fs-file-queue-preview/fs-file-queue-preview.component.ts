import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { FsFile } from '../../../models/fs-file';

@Component({
  selector: 'fs-file-queue-preview',
  templateUrl: 'fs-file-queue-preview.component.html',
  styleUrls: [ 'fs-file-queue-preview.component.scss' ]
})
export class FsFileQueuePreviewComponent implements OnInit {

  @Input() public file: FsFile;

  constructor() {
  }

  public ngOnInit() {

  }
}
