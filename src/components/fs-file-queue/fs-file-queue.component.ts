import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'fs-file-queue',
  templateUrl: 'fs-file-queue.component.html'
})
export class FsFileQueueComponent implements OnInit {

  @Input() public files;

  constructor() {
  }

  public ngOnInit() {

  }
}
