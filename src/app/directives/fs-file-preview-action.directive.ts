import { Directive, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { FsFile } from '../models/fs-file';


@Directive({
  selector: '[fs-file-preview-action],[fs-file-action]',
})
export class FsFilePreviewActionDirective implements OnInit {

  @Input() public placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  @Input() public hide: boolean;
  @Input() public icon: string;
  @Input() public file: FsFile;
  @Input('for-types') public forTypes: string | string[];
  @Input() public actionDirective: FsFilePreviewActionDirective;

  @Output() public click = new EventEmitter<{ event: MouseEvent; file: FsFile }>();

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

  public ngOnInit() {
    if (this.actionDirective) {
      this.click = this.actionDirective.click;
      this.placement = this.actionDirective.placement;
      this.hide = this.actionDirective.hide;
      this.icon = this.actionDirective.icon;
      this.file = this.actionDirective.file;
      this.forTypes = this.actionDirective.forTypes;
    }
  }
}

