import { Component, ViewChild } from '@angular/core';
import { FsFileImagePickerComponent } from '@firestitch/file';
import { FsMessage } from '@firestitch/message';


@Component({
  selector: 'file-image-picker',
  templateUrl: 'file-image-picker.component.html',
})
export class FileImagePickerComponent {
  @ViewChild('imagePicker', { static: true }) 
  public imagePicker: FsFileImagePickerComponent;

  public constructor(private message: FsMessage) {}

  public file = void 0;
  public url = 'https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg';

  public select(file) {
    this.file = file;
    console.log('Select File', file);
  }

  public cancel() {
    this.imagePicker.cancel();
  }

  public error(e) {
    this.message.error(e.message);
  }

  public selectUrl(url) {
    this.message.info('Image URL: ' + url);
  }
}
