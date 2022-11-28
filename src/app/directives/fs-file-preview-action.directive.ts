import {Directive, EventEmitter, Input, Output} from '@angular/core';
import { FsFile } from '../models';


@Directive({
  selector: '[fs-file-preview-action]'
})
export class FsFilePreviewActionDirective {

  @Input() public placement: string;
  @Input() public tooltip: string;
  @Input() public action: string;
  @Input() public hide: boolean;
  @Input('for-types') public forTypes: string | string[];

  @Output() public click = new EventEmitter<{ file: FsFile, event: PointerEvent }>();
}

