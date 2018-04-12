import {
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { FsFilePreviewActionDirective } from '../../directives';
import {FsFilePreviewsBaseComponent} from '../fs-file-preview-base';

@Component({
  selector: 'fs-file-previews',
  templateUrl: 'fs-file-previews.component.html',
  styleUrls: [ 'fs-file-previews.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class FsFilePreviewsComponent extends FsFilePreviewsBaseComponent implements OnInit {

  @Input() public files;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;

  @HostBinding('class.queue') queue = true;

  constructor() {
    super();
  }

  public ngOnInit() {
  }

  public removeFile(file) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
}
