import { Component } from '@angular/core';

import { FsApi } from '@firestitch/api';
import { FsMessage } from '@firestitch/message';

import { hasCordovaCaptureSupport, hasCordovaCameraSupport } from '@firestitch/file';
//import { CordovaService } from '@firestitch/file';
import { FileProcessor } from '@firestitch/file';


@Component({
  selector: 'capture-cordova',
  templateUrl: 'capture-cordova.component.html',
  styleUrls: [ 'capture-cordova.component.css' ]
})
export class CaptureCordovaComponent {

  // public file = void 0;
  // public hasCordovaCaptureSupport = false;
  // public hasCordovaCameraSupport = false;

  // public constructor(private cordovaService: CordovaService, private fsApi: FsApi, private fsMessage: FsMessage) {
  //   this.cordovaService.onReady(() => {
  //     this.hasCordovaCaptureSupport = hasCordovaCaptureSupport();
  //     this.hasCordovaCameraSupport = hasCordovaCameraSupport();
  //   });
  // }

  // public select(fsFile) {
  //   this.file = fsFile;

  //   const fileProcessor = new FileProcessor();

  //   fileProcessor.processFile(fsFile, {
  //     quality: .8,
  //     maxWidth: 2048,
  //     maxHeight: 2048
  //   })
  //   .subscribe((fsFile) => {
  //      this.fsApi.post('https://boilerplate.firestitch.com/api/dummy/upload', { file: fsFile.file })
  //     .subscribe((event) => {
  //       this.fsMessage.success('Successfully uploaded the file');
  //     });
  //   });
  //}
}
