import { Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html',
  styleUrls: [ 'first-example.component.css' ]
})
export class FirstExampleComponent {
  public test = [];

  public selected(files) {
    this.test= files;
    console.log('selected', files);
    // files.forEach((file) => {
    //   console.log(JSON.stringify(file));
    // });
  }
}
