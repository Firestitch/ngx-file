import { Component } from '@angular/core';


@Component({
  selector: 'multiple-file-select',
  templateUrl: 'multiple-file-select.component.html',
  styleUrls: [ 'multiple-file-select.component.css' ]
})
export class MultipleFileSelectComponent {
  public files = [];
  public filesJsonInfo = [];

  public select(files) {
    console.log(files);
    this.files.push(...files);
  }

  public removed(fsFile) {
    console.log('Removed', fsFile);
  }
}
