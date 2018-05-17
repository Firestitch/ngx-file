import { ElementRef, EventEmitter } from '@angular/core';
import * as FileAPI from 'fileapi';
import { FsFile } from '../models';
import { getCordovaCamera, isImageType, getCordovaCapture } from '../helpers';
import { filter } from 'lodash';
import { CordovaService } from '../services';


export class InputProcessor {
  public containerEl: any;
  public inputEl: any;
  public cordova = {  camera: null,
                      capture: null,
                      resolveLocalFileSystemURL: null };
  public accept = '*';
  public multiple = false;
  public capture: string = null;
  public disabled;

  public select = new EventEmitter();

  constructor(private cordovaService: CordovaService) {

    cordovaService.isReady().subscribe(() => {
      this.cordova.camera = getCordovaCamera();
      this.cordova.capture = getCordovaCapture();
      this.cordova.resolveLocalFileSystemURL = (<any>window).resolveLocalFileSystemURL;
    });
  }

  /**
   * Initialize service for target element
   * @param el
   */
  public registerInput(el: ElementRef) {
    if (!el) {
      return
    }

    this.inputEl = el.nativeElement;

    FileAPI.event.on(this.inputEl, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.inputEl.value = null;

      this.selectFiles(files);
    });
  }

  public registerDrop(el: ElementRef) {
    if (!el) {
      return
    }

    this.containerEl = el.nativeElement;
    FileAPI.event.on(this.containerEl, 'drop', (event) => {
      const files = FileAPI.getFiles(event);

      this.inputEl.value = null;

      this.selectFiles(files);
    });
  }

  public registerLabel(el: ElementRef) {

    if (!el) {
      return
    }

    FileAPI.event.on(el.nativeElement, 'click', () => {

      if (this.cordova.resolveLocalFileSystemURL) {
        if (this.capture === 'library' && this.cordova.camera) {
          return this.selectCordovaCameraLibrary();
        }

        if (this.capture !== null && this.cordova.capture) {

          if (this.isAcceptVideo()) {
            return this.selectCordovaCaptureVideo();
          }

          if (this.isAcceptImage()) {
            return this.selectCordovaCaptureImage();
          }
        }
      }

      this.inputEl.click();
    });
  }

  public cordovaCameraCleanup() {
    this.cordova.camera.cleanup();
  }

  public selectCordovaCaptureImage() {
    this.cordova.capture.captureImage((files) => {
      this.successCaptureFiles(files);
    },
    this.errorCaptureFiles, { limit: this.multiple ? 999 : 1 });
  }

  public selectCordovaCaptureVideo() {
    this.cordova.capture.captureVideo((files) => {
      this.successCaptureFiles(files);
    },
    this.errorCaptureFiles, { limit: this.multiple ? 999 : 1 });
  }

  public successCaptureFiles(files) {

    files.forEach((captureFile) => {
      this.getCordovaFile('file://' + captureFile.fullPath)
      .then((file) => {
        this.selectFiles([file]);
      }).catch(error => {
        console.log(error);
      })
    });
  }

  public errorCaptureFiles(error) {
    console.log(error);
  }

  public selectCordovaCameraLibrary() {

    const options: any = {
      destinationType: this.cordova.camera.DestinationType.FILE_URI,
      sourceType: this.cordova.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.cordova.camera.MediaType.ALLMEDIA
    };

    if (this.accept.length) {
      const video = this.isAcceptVideo();
      const image = this.isAcceptImage();

      if (video && !image) {
        options.mediaType = this.cordova.camera.MediaType.VIDEO;
      } else if (image && !video) {
        options.mediaType = this.cordova.camera.MediaType.PICURE;
      }
    }

    this.cordova.camera.getPicture(data => {

      this.getCordovaFile(data)
      .then((file) => {
        this.selectFiles([file]);
        this.cordovaCameraCleanup();
      }).catch(error => {
        console.log(error);
        this.cordovaCameraCleanup();
      });

    }, () => {
      this.cordovaCameraCleanup();
    }, options);
  }

  private getCordovaFile(data) {

    return new Promise((resolve, reject) => {

      this.cordova.resolveLocalFileSystemURL(data, fileEntry => {

        fileEntry.file(file => {

          if (isImageType(file.type)) {

            const reader = new FileReader();
            reader.onloadend = (encodedFile) => {
              const fileData = (<any>encodedFile.target).result.split('base64,').pop();
              const byteString = atob(fileData);
              let n = byteString.length;
              const u8arr = new Uint8Array(n);

              while (n--) {
                u8arr[n] = byteString.charCodeAt(n);
              }

              const blob = <any>(new Blob([u8arr], { type: file.type }));
              blob.name = file.name;
              resolve(blob);
            };

            reader.readAsDataURL(file);

          } else {
            resolve(file);
          }
        },
        (error) => {
          reject(error);
        });
      },
      (error) => {
        reject(error);
      });
    });
  }

  public isAcceptVideo() {
    return this.accept.match(/video/i);
  }

  public isAcceptImage() {
    return this.accept.match(/image/i);
  }

  public selectFiles(files) {
    files = files.map((f) => {
      return new FsFile(f);
    });

    if (files.length === 1) {
      files = files[0];
    }

    this.select.emit(files);
  }
}
