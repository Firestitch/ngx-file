import { ElementRef, EventEmitter } from '@angular/core';
import * as FileAPI from 'fileapi';
import { FsFile } from '../models/fs-file';


export class InputProcessor {
  public containerEl: any;
  public inputEl: any;

  public select  = new EventEmitter();

  constructor(inputEl?: ElementRef, dragDrop?: ElementRef) {
    this.initForElement(inputEl);
    this.initDragNDropForElement(dragDrop);
  }

  /**
   * Initialize service for target element
   * @param el
   */
  public initForElement(el: ElementRef) {
    if (!el) { return }

    this.inputEl = el.nativeElement;
    this.onChanges();
  }

  public initDragNDropForElement(el: ElementRef) {
    if (!el) { return }

    this.containerEl = el.nativeElement;
    this.onDrop();
  }


  /**
   * Fire when input was changed
   */
  public onChanges() {
    FileAPI.event.on(this.inputEl, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.inputEl.value = null;

      this.selectFiles(files);

      // this.filterFiles(files).then((result: any) => {
      //   if (result.files && result.files.length > 0) {
      //     this.processFiles(result.files);
      //   }
      // })
    });
  }

  /**
   * Fire when on root element was dropped file
   */
  public onDrop() {
    FileAPI.event.on(this.containerEl, 'drop', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.inputEl.value = null;

      this.selectFiles(files);

      // this.filterFiles(files).then((result: any) => {
      //   if (result.files && result.files.length > 0) {
      //     // this.processFiles(result.files);
      //   }
      // })
    });
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
