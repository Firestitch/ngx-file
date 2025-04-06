import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { FsFile } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';

import { of, tap } from 'rxjs';


@Component({
  selector: 'multiple-file-select',
  templateUrl: './multiple-file-select.component.html',
  styleUrls: ['./multiple-file-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleFileSelectComponent {

  public files = [];
  public filesJsonInfo = [];
  public hide = true;

  constructor(
    private _message: FsMessage,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public select(files) {
    this.files = [...this.files, ...files];
  }

  public remove = (file: FsFile) => {
    return of(null)
      .pipe( 
        tap(() => {
          this._message.success(`Removed ${file.name}`);
        }),
      );
  };

  public mapFile(file) {
    return file;
  }

  public error(error) {
    console.log(error);
  }

  public download(event: { event: MouseEvent; file: FsFile }) {
    event.event.stopPropagation();
    event.file.download();
  }
}
