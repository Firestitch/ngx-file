// import { ElementRef, EventEmitter, NgZone } from '@angular/core';

// import { Subject } from 'rxjs';

// import { FsFile } from '../models';
// import {
//   getCordovaCamera,
//   getCordovaCapture,
//   getCordovaResolveLocalFileSystemURL,
//   hasCordovaCameraSupport,
//   hasCordovaCaptureSupport,
// } from '../helpers';
// import { CordovaService } from '../services/cordova.service';
// import { FsCordova } from '@firestitch/cordova';
// import { InputProcessor } from './input-processor';

// const NativeFile = (window as any).File;
// const NativeFileReader = (window as any).FileReader;

// export class CordovaProcessor {

//   public cordova = {  
//     camera: null,
//     capture: null,
//     resolveLocalFileSystemURL: null 
//   };

//   constructor(
//     private _inputProcessor: InputProcessor, 
//     private _ngZone: NgZone
//   ) {
//   //   this._cordovaService
//   //     .isReady()
//   //     .subscribe(() => {
//   //       this.cordova.camera = getCordovaCamera();
//   //       this.cordova.capture = getCordovaCapture();
//   //       this.cordova.resolveLocalFileSystemURL = getCordovaResolveLocalFileSystemURL();
//   //     });
//   }

//   public cordovaCameraCleanup() {
//     this.cordova.camera.cleanup();
//   }

//   public selectCordovaCaptureImage() {
//     this.cordova.capture.captureImage((files) => {
//       this.successCaptureFiles(files);
//     },
//     this.errorCaptureFiles, { limit: 1 });
//   }

//   public selectCordovaCaptureVideo() {
//     this.cordova.capture.captureVideo((files) => {
//       this.successCaptureFiles(files);
//     },
//     this.errorCaptureFiles, { limit: 1 });
//   }

//   public successCaptureFiles(files) {

//     files.forEach((captureFile) => {

//       this.getCordovaFile(captureFile.fullPath)
//       .then((file) => {
//         this._ngZone.run(() => {
//           this._inputProcessor.selectFiles([file]);
//         });
//       }).catch(error => {
//         console.log(error);
//       })
//     });
//   }

//   public errorCaptureFiles(error) {
//     console.log(error);
//   }

//   public selectCordovaCameraLibrary() {
//     return this
//       .selectCordovaCamera(this.cordova.camera.PictureSourceType.PHOTOLIBRARY, this.cordova.camera.MediaType.ALLMEDIA);
//   }

//   public selectCordovaCameraPicture() {
//     return this
//       .selectCordovaCamera(this.cordova.camera.PictureSourceType.CAMERA, this.cordova.camera.MediaType.PICTURE);
//   }

//   public selectCordovaCamera(sourceType, mediaType) {

//       //       this.cordova.camera = getCordovaCamera();
//   //       this.cordova.capture = getCordovaCapture();
//   //       this.cordova.resolveLocalFileSystemURL = getCordovaResolveLocalFileSystemURL();


//     const options: any = {
//       destinationType: this.cordova.camera.DestinationType.FILE_URI,
//       encodingType: this.cordova.camera.DestinationType.JPEG,
//       sourceType: sourceType,
//       mediaType: mediaType,
//       quality: 100,
//       correctOrientation: false
//     };

//     if (this._inputProcessor.accept.length) {
//       const video = this._inputProcessor.isAcceptVideo();
//       const image = this._inputProcessor.isAcceptImage();

//       if (video && !image) {
//         options.mediaType = this.cordova.camera.MediaType.VIDEO;
//       } else if (image && !video) {
//         options.mediaType = this.cordova.camera.MediaType.PICTURE;
//       }
//     }

//     this.cordova.camera.getPicture(data => {

//       this.getCordovaFile(data)
//       .then((file) => {
//         this._ngZone.run(() => {
//           this._inputProcessor.selectFiles([file]);
//         });
//         this.cordovaCameraCleanup();
//       }).catch(error => {
//         console.log(error);
//         this.cordovaCameraCleanup();
//       });

//     }, () => {
//       this.cordovaCameraCleanup();
//     }, options);
//   }

//   private getCordovaFile(path) {

//     if (!path.match(/^file:/)) {
//       path = 'file://'.concat(path);
//     }

//     return new Promise((resolve, reject) => {
//       this.cordova.resolveLocalFileSystemURL(path, (fileEntry) => {

//         fileEntry.file((file) => {
          
//           const reader = new NativeFileReader();
//           reader.onloadend = (encodedFile) => {
//             const fileData = (<any>encodedFile.target).result.split('base64,').pop();
//             const byteString = atob(fileData);
//             let n = byteString.length;
//             const u8arr = new Uint8Array(n);

//             while (n--) {
//               u8arr[n] = byteString.charCodeAt(n);
//             }

//             const blob = new File([u8arr], file.name, { type: file.type });
//             resolve(blob);
//           };

//           reader.readAsDataURL(file);
//         },
//         (error) => {
//           reject(error);
//         });
//       },
//       (error) => {
//         reject(error);
//       });
//     });
//   }

// }
