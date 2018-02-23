import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'fs-file-picker',
  templateUrl: 'fs-file-picker.component.html',
  styleUrls: [ 'fs-file-picker.component.scss' ]
})
export class FsFilePickerComponent implements OnInit {

  @Input() accept;
  @Input() imageMaxWidth;
  @Input() imageMaxHeight;
  @Input() imageQuality;

  public instruction = 'Drag & Drop your file or use the button below';
  public file;

  constructor() {
  }

  public ngOnInit() {
  }

  public select(file) {
    this.file = file;
  }
}
