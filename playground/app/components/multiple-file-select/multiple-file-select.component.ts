import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'multiple-file-select',
  templateUrl: 'multiple-file-select.component.html',
  styleUrls: ['multiple-file-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleFileSelectComponent {

  public files = [];
  public filesJsonInfo = [];
  public hide = true;

  public constructor(
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public select(files) {
    this.files = [...this.files, ...files];
  }

  public removed(event) {
    this._message.success('Removed');
  }

  public mapFile(file) {
    return file;
  }

  public error(error) {
    console.log(error);
  }

  public download(event: { file?: FsFile, event?: PointerEvent }) {
    event.file.download();
  }
}
