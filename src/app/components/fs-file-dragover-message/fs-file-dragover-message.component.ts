import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'fs-file-dragover-message',
  templateUrl: './fs-file-dragover-message.component.html',
  styleUrls: ['./fs-file-dragover-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileDragoverMessageComponent implements OnInit {

  constructor() { }

  public ngOnInit() {

  }

}
