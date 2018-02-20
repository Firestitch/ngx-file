import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'fs-file-queue',
  templateUrl: 'fs-file-queue.component.html',
  styleUrls: [ 'fs-file-queue.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class FsFileQueueComponent implements OnInit {

  @Input() public files;
  @HostBinding('class.queue') queue = true;

  constructor() {
  }

  public ngOnInit() {

  }
}
