import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FsFilePreviewActionDirective } from '../../directives/fs-file-preview-action.directive';
import { Input } from '@angular/core';

@Component({
  selector: 'fs-file-previews-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewsBaseComponent {

  public actions = [];
  public actionsTemplate = [];

  @ContentChildren(FsFilePreviewActionDirective)
  set setActionTemplates(value: QueryList<FsFilePreviewActionDirective>) {
    this.actionTemplates.push(...value.toArray());
  }

  @ContentChildren(FsFilePreviewActionDirective, { read: TemplateRef })
  set setActionTemplateRefs(value: QueryList<TemplateRef<any>>) {
    this.actionTemplateRefs.push(...value.toArray());
  }

  @Input() actionTemplates = [];
  @Input() actionTemplateRefs = [];
}
