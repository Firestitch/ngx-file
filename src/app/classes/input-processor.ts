import { ElementRef, EventEmitter, NgZone } from '@angular/core';

import { Subject } from 'rxjs';

import * as FileAPI from 'fileapi';
import { FsFile } from '../models';
import {
  getCordovaCamera,
  getCordovaCapture,
  getCordovaResolveLocalFileSystemURL,
  hasCordovaCameraSupport,
  hasCordovaCaptureSupport,
} from '../helpers';
import { CordovaService } from '../services/cordova.service';


export class InputProcessor {

  public containerEl: any;
  public inputEl: any;
  public multiple = false;
  public api: 'html5' | 'any' | 'cordova' = null;
  public capture: string = null;
  public disabled;
  public allowClick = true;
  public allowDrop = true;
  public select = new EventEmitter();
  public clicked = new EventEmitter();
  public cordova = {  
    camera: null,
    capture: null,
    resolveLocalFileSystemURL: null 
  };

  private _accept = '*';
  private _acceptableTypes = new Map();
  private _acceptableExts = new Set();
  private _declinedFiles$ = new Subject<File[]>();

  constructor(private cordovaService: CordovaService, private ngZone: NgZone) {
    cordovaService.isReady()
      .subscribe(() => {
        this.cordova.camera = getCordovaCamera();
        this.cordova.capture = getCordovaCapture();
        this.cordova.resolveLocalFileSystemURL = getCordovaResolveLocalFileSystemURL();
      });
  }

  public get accept() {
    return this._accept;
  }

  public set accept(value) {
    this._acceptableTypes.clear();
    this._acceptableExts.clear();

    this.parseAcceptTypes(value);
    this._accept = [
      ...Array.from(this._acceptableTypes)
        .reduce((accum, [ key, values ]) => {
          return [
            ...accum, 
            ...Array.from(values)
              .map((value) => `${key}/${value}`),
          ];
        },[]),
      ...Array.from(this._acceptableExts).values(),
    ].join(',');
  }

  public get declinedFiles$() {
    return this._declinedFiles$.asObservable();
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

      if (!this.allowClick) {
        return;
      }

      const declinedFiles = [];
      const files = FileAPI.getFiles(event)
        .filter(file => {
          const nameParts = file.name.split('.');
          let ext;
          if (nameParts && Array.isArray(nameParts)) {
            ext = nameParts[nameParts.length - 1];
          }

          ext = (ext + '').toLowerCase();
          const acceptableFile = this.checkAcceptableTypes(file.type, ext);

          if (!acceptableFile) {
            declinedFiles.push(file);
          }

          return acceptableFile;
        });

      if (declinedFiles.length > 0) {
        this._declinedFiles$.next(declinedFiles);
      }

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

      if (!this.allowDrop) {
        return;
      }

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

    FileAPI.event.on(el.nativeElement, 'click', (event) => {
      if (!this.allowClick) {
        return;
      }

      if (this.api !== 'html5' && (this.capture === 'camera' || this.capture === 'library')) {

        if (hasCordovaCameraSupport()) {
          if (this.capture === 'library') {
            return this.selectCordovaCameraLibrary();
          }

          if (this.isAcceptImage()) {
            return this.selectCordovaCameraPicture();
          }
        }

        if (hasCordovaCaptureSupport()) {

          if (this.isAcceptVideo()) {
            return this.selectCordovaCaptureVideo();
          }
        }
      }

      this.clicked.next(event);

      if (!event.defaultPrevented) {
        this.inputEl.click();
      }
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

            const blob = new File([u8arr], file.name, { type: file.type });
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
   * @returns boolean
   */
  private checkAcceptableTypes(targetType, targetExt) {
    targetType = targetType.trim();
    const [ type, ext ] = targetType.split('/');
    const acceptableType = this._acceptableTypes.get(type);

    return this.accept === '*'
            || this.accept === '*/*'
            || (!!acceptableType && (acceptableType.has('*') || acceptableType.has(ext)))
            || this._acceptableExts.has(`.${targetExt}`);
  }

  /**
   * Parset and store acceptable types for feature filter
   * @param types
   */
  private parseAcceptTypes(value) {
    let types = [];
    if (typeof value === 'string') { 
      types = value.split(/[,;]/);
    }
    
    if(!types.length) {
      return;
    }

    types = types
      .map((type) => type.trim());

    types.forEach((part) => {
      if (part.indexOf('/') !== -1) {
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
      } else if(part.indexOf('.') !== -1) {
        part = part.replace(/^\*/,'');
        if (!this._acceptableExts.has(part)) {
          this._acceptableExts.add(part);
        }
      } else if(part.match(/[a-z0-9]{3,4}/i)) {
        if (!this._acceptableExts.has(part)) {
          this._acceptableExts.add(`.${part}`);
        }
      }
    })
  }
}
