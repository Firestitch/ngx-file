import { Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { FsFile } from '../models';


@Directive({
  selector: '[fs-file-preview-action]',
})
export class FsFilePreviewActionDirective {

  @Input() public placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  @Input() public action: string;
  @Input() public hide: boolean;
  @Input('for-types') public forTypes: string | string[];

  @Output() public click = new EventEmitter<{ file: FsFile; event: MouseEvent; index: number }>();

  constructor(
    public templateRef: TemplateRef<any>,
  ) { }
}

