import { Component } from '@angular/core';

import { FsApi } from '@firestitch/api';
import { FsMessage } from '@firestitch/message';

import { hasCordovaCaptureSupport, hasCordovaCameraSupport } from 'fs-file';
import { CordovaService } from 'fs-file';
import { FileProcessor } from 'fs-file';


@Component({
  selector: 'capture-cordova',
  templateUrl: 'capture-cordova.component.html',
  styleUrls: [ 'capture-cordova.component.css' ]
})
export class CaptureCordovaComponent {

  public file = void 0;
  public hasCordovaCaptureSupport = false;
  public hasCordovaCameraSupport = false;

  public constructor(private cordovaService: CordovaService, private fsApi: FsApi, private fsMessage: FsMessage) {
    this.cordovaService.onReady(() => {
      this.hasCordovaCaptureSupport = hasCordovaCaptureSupport();
      this.hasCordovaCameraSupport = hasCordovaCameraSupport();
    });
  }

  public select(fsFile) {
    this.file = fsFile;

    const fileProcessor = new FileProcessor();

    fileProcessor.process([fsFile], {
      quality: .8,
      width: 2048,
      height: 2048
    }).subscribe(fsFiles => {
       this.fsApi.post('https://ngxboilerplate.firestitch.com/api/dummy/upload', { file: fsFiles[0].file })
      .subscribe(event => {
        this.fsMessage.success('Successfully uploaded the file');
      });
    });
  }
}
