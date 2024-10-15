import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'image-file-manipulation',
  templateUrl: './image-file-manipulation.component.html',
  styleUrls: ['./image-file-manipulation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageFileManipulationComponent {
  public files = [];

  constructor(private _message: FsMessage) {
  }

  public select(files) {
    this.files = this.files.concat(files);
  }

  public enhance(event) {
    this._message.success(`Enhance ${event.file.name}`);
  }

  public search(event) {
    this._message.success(`Search ${event.file.name}`);
  }

  public removed(files) {
    console.log('Removed', files);
    this._message.success('Removed');
  }
}
