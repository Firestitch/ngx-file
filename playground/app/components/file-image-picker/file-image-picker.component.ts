import { Component, ViewChild } from '@angular/core';
import { FsFileImagePickerComponent } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-image-picker',
  templateUrl: 'file-image-picker.component.html',
})
export class FileImagePickerComponent {
  @ViewChild('imagePicker') public imagePicker: FsFileImagePickerComponent;

  public constructor(private message: FsMessage) {}

  public file = void 0;
  public url = 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/cars-road-test/2016/02/41ae14b2673874e7e212502954b88910/lp610_4_white_005.jpg';

  public select(file) {
    this.file = file;
  }

  public cancel() {
    this.imagePicker.cancel();
  }

  public error(e) {
    this.message.error(e.error);
  }

  public selectUrl(url) {
    this.message.info('Image URL: ' + url);
  }
}
