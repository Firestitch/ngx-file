import {
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FsFilePreviewActionDirective } from '../../directives/fs-file-preview-action.directive';

@Component({
  selector: 'fs-file-previews-base',
  template: ''
})
export class FsFilePreviewsBaseComponent {

  public actions = [];
  public actionsTemplate = [];

  @ContentChildren(FsFilePreviewActionDirective)
  private set actionsParams(val: QueryList<FsFilePreviewActionDirective>) {
    const actions = val.toArray().map((action, index) => {
      const newAction = Object.assign({}, action);
      newAction.index = index;
      if (newAction.forTypes && !Array.isArray(newAction.forTypes)) {
        newAction.forTypes = newAction.forTypes.split(',').map((type) => type.trim());
      }

      return newAction;
    });

    this.actions.push(...actions);
  }

  @ContentChildren(FsFilePreviewActionDirective, {read: TemplateRef})
  private set actionsTemplateRefs(val: QueryList<FsFilePreviewActionDirective>) {
    this.actionsTemplate.push(...val.toArray());
  }

  constructor() {
  }
}
