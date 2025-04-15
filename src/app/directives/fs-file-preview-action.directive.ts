import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { FsFile } from '../models/fs-file';


@Directive({
  selector: '[fs-file-preview-action],[fs-file-action]',
})
export class FsFilePreviewActionDirective {

  @Input() public placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  @Input() public show: boolean = true;
  @Input() public icon: string;
  @Input() public tooltip: string;

  @Output() public click = new EventEmitter<{ event: MouseEvent; file: FsFile }>();

  constructor(
    public templateRef: TemplateRef<any>,
  ) {
  }
}

