import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'file-picker-model',
  templateUrl: 'file-picker-model.component.html',
  styleUrls: [ 'file-picker-model.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePickerModelComponent {

  public file: any = '';
}

