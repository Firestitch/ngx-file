import { Component } from '@angular/core';


@Component({
  selector: 'file-image-picker',
  templateUrl: 'file-image-picker.component.html',
})
export class FileImagePickerComponent {
  public file = void 0;
  public url = 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/cars-road-test/2016/02/41ae14b2673874e7e212502954b88910/lp610_4_white_005.jpg';
  // public url = null;

  public select(file) {
    this.file = file;
  }
}
