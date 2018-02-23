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

@Component({
  selector: 'fs-file-previews',
  templateUrl: 'fs-file-previews.component.html',
  styleUrls: [ 'fs-file-previews.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class FsFilePreviewsComponent implements OnInit {

  @Input() public files;
  @Input() public previewWidth = 150;
  @Input() public previewHeight = 150;

  @HostBinding('class.queue') queue = true;

  public actions;
  public actionsTemplate;

  @ContentChildren(FsFilePreviewActionDirective)
  private set actionsParams(val: QueryList<FsFilePreviewActionDirective>) {
    this.actions = val.toArray().map((action, index) => {
      const newAction = Object.assign({}, action);
      newAction.index = index;
      if (newAction.forTypes && !Array.isArray(newAction.forTypes)) {
        newAction.forTypes = newAction.forTypes.split(',').map((type) => type.trim());
      }

      return newAction;
    });
  }

  @ContentChildren(FsFilePreviewActionDirective, {read: TemplateRef})
  private set actionsTemplateRefs(val: QueryList<FsFilePreviewActionDirective>) {
    this.actionsTemplate = val.toArray();
  }

  constructor() {
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
