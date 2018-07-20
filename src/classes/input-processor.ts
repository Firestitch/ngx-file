import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import * as FileAPI from 'fileapi';
import { FsFile } from '../models';
import {  getCordovaCamera,
          isImageType,
          getCordovaCapture,
          createBlob,
          getCordovaResolveLocalFileSystemURL,
          hasCordovaCameraSupport,
          hasCordovaCaptureSupport
         } from '../helpers';
import { CordovaService } from '../services';


export class InputProcessor {
  public containerEl: any;
  public inputEl: any;
  public cordova = {  camera: null,
                      capture: null,
                      resolveLocalFileSystemURL: null };

  public multiple = false;
  public api: 'html5' | 'any' | 'cordova' = null;
  public capture: string = null;
  public disabled;

  public select = new EventEmitter();

  private _accept = '*';
  private _acceptableTypes = new Map();
  private _acceptableExts = new Set();

  constructor(private cordovaService: CordovaService, private ngZone: NgZone) {

    cordovaService.isReady().subscribe(() => {
      this.cordova.camera = getCordovaCamera();
      this.cordova.capture = getCordovaCapture();
      this.cordova.resolveLocalFileSystemURL = getCordovaResolveLocalFileSystemURL();
    });
  }

  get accept() {
    return this._accept;
  }

  set accept(value) {
    this._acceptableTypes.clear();
    this._acceptableExts.clear();
    this.parseAcceptTypes(value);
    this._accept = value.trim();
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
      const files = FileAPI.getFiles(event)
        .filter(file => {
          const nameParts = file.name.split('.');
          let ext;
          if (nameParts && Array.isArray(nameParts)) {
            ext = nameParts[nameParts.length - 1];
          }

          return this.checkAcceptableTypes(file.type, ext)
        });


      if (files && files.length > 0) {
        // Clear input value
        this.inputEl.value = null;

        this.selectFiles(files);
      }
    });
  }

  public registerDrop(el: ElementRef) {
    if (!el) {
      return
    }

    this.containerEl = el.nativeElement;
    FileAPI.event.on(this.containerEl, 'drop', (event) => {
      const files = FileAPI.getFiles(event)
        .filter(file => {
          const nameParts = file.name.split('.');
          let ext;
          if (nameParts && Array.isArray(nameParts)) {
            ext = nameParts[nameParts.length - 1];
          }

          return this.checkAcceptableTypes(file.type, ext)
        });

      if (files && files.length > 0) {
        this.inputEl.value = null;

        this.selectFiles(files);
      }
    });
  }

  public registerLabel(el: ElementRef) {

    if (!el) {
      return
    }

    FileAPI.event.on(el.nativeElement, 'click', () => {

      if (this.api === 'cordova' || !this.api) {

        if (hasCordovaCameraSupport()) {
          if (this.capture === 'library') {
            return this.selectCordovaCameraLibrary();
          }

          if (this.isAcceptImage()) {
            return this.selectCordovaCameraPicture();
          }
        }

        if (hasCordovaCaptureSupport()) {

          if (this.capture !== null) {
            if (this.isAcceptVideo()) {
              return this.selectCordovaCaptureVideo();
            }
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
    this.errorCaptureFiles, { limit: 1 });
  }

  public selectCordovaCaptureVideo() {
    this.cordova.capture.captureVideo((files) => {
      this.successCaptureFiles(files);
    },
    this.errorCaptureFiles, { limit: 1 });
  }

  public successCaptureFiles(files) {

    files.forEach((captureFile) => {

      this.getCordovaFile(captureFile.fullPath)
      .then((file) => {
        this.ngZone.run(() => {
          this.selectFiles([file]);
        });
      }).catch(error => {
        console.log(error);
      })
    });
  }

  public errorCaptureFiles(error) {
    console.log(error);
  }

  public selectCordovaCameraLibrary() {
    return this.selectCordovaCamera(this.cordova.camera.PictureSourceType.PHOTOLIBRARY,
                                    this.cordova.camera.MediaType.ALLMEDIA);
  }

  public selectCordovaCameraPicture() {
    return this.selectCordovaCamera(this.cordova.camera.PictureSourceType.CAMERA,
                                    this.cordova.camera.MediaType.PICTURE);
  }

  public selectCordovaCamera(sourceType, mediaType) {

    const options: any = {
      destinationType: this.cordova.camera.DestinationType.FILE_URI,
      encodingType: this.cordova.camera.DestinationType.JPEG,
      sourceType: sourceType,
      mediaType: mediaType,
      quality: 100,
      correctOrientation: false
    };

    if (this.accept.length) {
      const video = this.isAcceptVideo();
      const image = this.isAcceptImage();

      if (video && !image) {
        options.mediaType = this.cordova.camera.MediaType.VIDEO;
      } else if (image && !video) {
        options.mediaType = this.cordova.camera.MediaType.PICTURE;
      }
    }

    this.cordova.camera.getPicture(data => {

      this.getCordovaFile(data)
      .then((file) => {
        this.ngZone.run(() => {
          this.selectFiles([file]);
        });
        this.cordovaCameraCleanup();
      }).catch(error => {
        console.log(error);
        this.cordovaCameraCleanup();
      });

    }, () => {
      this.cordovaCameraCleanup();
    }, options);
  }

  private getCordovaFile(path) {

    if (!path.match(/^file:/)) {
      path = 'file://'.concat(path);
    }

    return new Promise((resolve, reject) => {

      this.cordova.resolveLocalFileSystemURL(path, fileEntry => {

        fileEntry.file(file => {

          const reader = new FileReader();
          reader.onloadend = (encodedFile) => {
            const fileData = (<any>encodedFile.target).result.split('base64,').pop();
            const byteString = atob(fileData);
            let n = byteString.length;
            const u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = byteString.charCodeAt(n);
            }

            const blob = createBlob([u8arr], file.name, file.type);
            resolve(blob);
          };

          reader.readAsDataURL(file);
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

  /**
   * Check if file mimetype or extention is acceptable by @accept field
   * @param targetType
   * @param targetExt
   * @returns {boolean}
   */
  private checkAcceptableTypes(targetType, targetExt) {
    targetType = targetType.trim();
    const [ type, ext ] = targetType.split('/');
    const acceptableType = this._acceptableTypes.get(type);

    return this.accept === '*'
      || (!!acceptableType && (acceptableType.has('*') || acceptableType.has(ext)))
      || this._acceptableExts.has(`.${targetExt}`);
  }

  /**
   * Parset and store acceptable types for feature filter
   * @param types
   */
  private parseAcceptTypes(types) {
    if (typeof types !== 'string' && types.length === 0) { return }

    const parts = types.split(',').map(type => type.trim());

    parts.forEach((part) => {
      const hasSlash = part.indexOf('/') > -1;
      const hasDot = part.indexOf('.') === 0;

      if (hasSlash) {
        const [ type, ext ] = part.split('/');
        if (this._acceptableTypes.has(type)) {
          const existedType = this._acceptableTypes.get(type);

          if (!existedType.has(ext)) {
            existedType.add(ext);
          }
        } else {
          const extensions = new Set();
          this._acceptableTypes.set(type, extensions);
          extensions.add(ext);
        }
      }

      if (hasDot) {
        if (!this._acceptableExts.has(part)) {
          this._acceptableExts.add(part);
        }
      }
    })
  }
}
