import { Component } from '@angular/core';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'multiple-file-select',
  templateUrl: 'multiple-file-select.component.html',
  styleUrls: [ 'multiple-file-select.component.css' ]
})
export class MultipleFileSelectComponent {
  public files = [];
  public filesJsonInfo = [];

  public constructor(private fsMessage: FsMessage) {}

  public select(files) {
    this.files.push(...files);
  }

  public removed(event: MouseEvent) {
    this.fsMessage.success('Removed');
  }
}
