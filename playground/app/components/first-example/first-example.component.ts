import { Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html',
  styleUrls: [ 'first-example.component.css' ]
})
export class FirstExampleComponent {
  public files = [];

  public selected(files) {
    this.files.push(...files);
  }

  public enhance(file) {
    console.log('enhance', file);
  }
}
