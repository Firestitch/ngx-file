import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';

import { FsFile } from '../models/fs-file';


@Directive({
  selector: '[fs-file-preview-action],[fs-file-action]',
})
export class FsFilePreviewActionDirective implements OnChanges {

  @Input() public placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  @Input() public hide: boolean;
  @Input() public icon: string;
  @Input() public file: FsFile;
  @Input() public actionDirective: FsFilePreviewActionDirective;

  @Output() public click = new EventEmitter<{ event: MouseEvent; file: FsFile }>();

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.actionDirective) {
      this.click = this.actionDirective.click;
      this.placement = this.actionDirective.placement;
      this.icon = this.actionDirective.icon;
      this.file = this.actionDirective.file;
    }
  }
}

