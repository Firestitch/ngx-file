import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerComponent {
  
  public file;

  public select(file) {
    this.file = file;
  }

  public view(file) {
    //
  }
}
