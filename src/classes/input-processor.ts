import { ElementRef, EventEmitter, Optional, Inject } from '@angular/core';
import * as FileAPI from 'fileapi';
import { FsFile } from '../models/fs-file';
import { getCordovaCamera, isImageType } from '../helpers';
import { filter } from 'lodash';
import { CordovaService } from '../services';

export class InputProcessor {
  public containerEl: any;
  public inputEl: any;
  public cordovaCamera = null;
  public fileSelectApi = 'browser';
  public accept = [];
  public multiple: boolean = false;
  public capture: string = null;
  public disabled;

  public select  = new EventEmitter();

  constructor(private cordovaService: CordovaService) {

    cordovaService.isReady().subscribe(() => {
      this.cordovaCamera = getCordovaCamera();
    });    
  }

  /**
   * Initialize service for target element
   * @param el
   */
  public registerInput(el: ElementRef) {
    if (!el) { return }

    this.inputEl = el.nativeElement;

    FileAPI.event.on(this.inputEl, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.inputEl.value = null;

      this.selectFiles(files);
    });
  }

  public registerDrop(el: ElementRef) {
    if (!el) { return }

    this.containerEl = el.nativeElement;
    FileAPI.event.on(this.containerEl, 'drop', (event) => {
      const files = FileAPI.getFiles(event);

      this.inputEl.value = null;

      this.selectFiles(files);
    });
  }

  public registerLabel(el: ElementRef) {

    if (!el) { return }    

    FileAPI.event.on(el.nativeElement, 'click', (event) => {

      if (this.capture === 'library' && this.cordovaCamera && (<any>window).resolveLocalFileSystemURL) {
        this.selectCordovaLibrary();
      } else {
        this.inputEl.click();
      }
    });
  }

  public cordovaCleanup() {
    this.cordovaCamera.cleanup();
  }

  public selectCordovaLibrary() {

    const options: any = {  destinationType: this.cordovaCamera.DestinationType.FILE_URI,
                            sourceType: this.cordovaCamera.PictureSourceType.PHOTOLIBRARY,
                            mediaType: this.cordovaCamera.MediaType.ALLMEDIA };
  
    if (this.accept.length) {
      const video = filter(this.accept,(value) => { return value.match(/video/i); }).length;
      const image = filter(this.accept,(value) => { return value.match(/image/i); }).length;
      
      if(video && !image) {
        options.mediaType = this.cordovaCamera.MediaType.VIDEO;
      } else if(image && !video) {
        options.mediaType = this.cordovaCamera.MediaType.PICURE;
      }                  
    }

    this.cordovaCamera.getPicture(data => {
      
      (<any>window).resolveLocalFileSystemURL(data, fileEntry => {

        fileEntry.file(file => {

          if(isImageType(file.type)) {

            const reader = new FileReader();
            reader.onloadend = (encodedFile) => {
              const data = (<any>encodedFile.target).result.split("base64,").pop();
              const byteString = atob(data);                  
              let n = byteString.length;
              const u8arr = new Uint8Array(n);

              while (n--) {
                u8arr[n] = byteString.charCodeAt(n);
              }

              const blob = <any>(new Blob([u8arr], { type:file.type }));
              blob.name = file.name;
              this.selectFiles([blob]);
              this.cordovaCleanup();
            };

            reader.readAsDataURL(file);
          
          } else {
            this.selectFiles([file]);
            this.cordovaCleanup();
          }
        
        }, (error) => {              
          this.cordovaCleanup();
        });
      },
      (error) => { 
        this.cordovaCleanup();
      });

    }, (error) => { 
      this.cordovaCleanup();
    }, options);
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

  // /**
  //  * Filter files
  //  * @param rawFiles
  //  * @returns {Subject<any>}
  //  */
  // private filterFiles(rawFiles) {
  //   return new Promise((resolve) => {
  //     FileAPI.filterFiles(rawFiles, (file, info) => {
  //       let sizeRule = void 0;
  //
  //       if (isImageType(file.type) && !this.resize) {
  //         sizeRule = this.checkResolutionRule(info);
  //       } else {
  //         sizeRule = true;
  //       }
  //
  //       const fileSize = this.checkSize(file);
  //
  //       return (sizeRule !== void 0 ? sizeRule : true) && fileSize;
  //     }, (files, rejected) => {
  //       resolve({ files: files, rejected: rejected });
  //     });
  //   });
  // }

  // /**
  //  * Check filesize restrictions
  //  * @param file
  //  * @returns {boolean}
  //  */
  // private checkSize(file) {
  //   return (this._options.minSize !== void 0 ? file.size as number >= (this._options.minSize * FileAPI.KB) : true)
  //     && (this._options.maxSize !== void 0 ? file.size <= (this._options.maxSize * FileAPI.KB) : true);
  // }
}
