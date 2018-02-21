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
import {FsFileQueueActionDirective} from '../../directives';

@Component({
  selector: 'fs-file-queue',
  templateUrl: 'fs-file-queue.component.html',
  styleUrls: [ 'fs-file-queue.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class FsFileQueueComponent implements OnInit {

  @Input() public files;
  @Input() public previewWidth;
  @Input() public previewHeight;

  @HostBinding('class.queue') queue = true;

  public actions;
  public actionsTemplate;

  @ContentChildren(FsFileQueueActionDirective)
  private set actionsParams(val: QueryList<FsFileQueueActionDirective>) {
    this.actions = val.toArray().map((action, index) => {
      const newAction = Object.assign({}, action);
      newAction.index = index;
      if (newAction.forTypes && !Array.isArray(newAction.forTypes)) {
        newAction.forTypes = newAction.forTypes.split(',').map((type) => type.trim());
      }

      return newAction;
    });
  }

  @ContentChildren(FsFileQueueActionDirective, {read: TemplateRef})
  private set actionsTemplateRefs(val: QueryList<FsFileQueueActionDirective>) {
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
