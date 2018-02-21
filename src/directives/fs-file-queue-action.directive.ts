import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[fs-file-queue-action]'
})
export class FsFileQueueActionDirective {
  @Input() public placement: string;
  @Input() public tooltip: string;
  @Input() public action: string;
  @Output() public click = new EventEmitter();
}

