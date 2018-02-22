import { Component } from '@angular/core';

@Component({
  selector: 'multiple-file-select',
  templateUrl: 'multiple-file-select.component.html',
  styleUrls: [ 'multiple-file-select.component.css' ]
})
export class MultipleFileSelectComponent {
  public files = [];
  public filesJsonInfo = [];

  public selected(files) {
    this.files.push(...files);
    this.filesJsonInfo.push(...files.map((file) => file.toJson()));
  }
}