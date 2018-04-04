import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import * as FileAPI from 'fileapi';
import 'fileapi/plugins/FileAPI.exif.js';
import { Subject } from 'rxjs/Subject';
import { FsFile } from '../models/fs-file';
import { ScaleExifImage } from '../helpers';
import { FsFileOptions } from '../interfaces';


@Injectable()
export class FsFileService {

  public containerEl: any;
  public el: any;
  public select  = new EventEmitter();

  private _options: FsFileOptions = {
    disabled: false,
    multiple: false,
    preview: false,
    accept: [],
    minSize: void 0,
    maxSize: void 0,
    imageMaxWidth: void 0,
    imageMaxHeight: void 0,
    imageQuality: void 0,
    imageFormat: void 0,
    autoOrientation: true,
  };

  constructor() {
  }

  set multiple(value) {
    if (typeof(value) === 'boolean') {
      this._options.multiple = value;
    } else {
      this._options.multiple = value === 'true';
    }
  }

  get multiple() {
    return this._options.multiple;
  }

  set accept(value) {
    this._options.accept = this._options.accept.concat(value.split(','));
  }

  get accept() {
    return this._options.accept.join(', ') || '*';
  }

  set minSize(value) {
    if (value !== void 0) {
      this._options.minSize = value;
    }
  }

  set maxSize(value) {
    if (value !== void 0) {
      this._options.maxSize = value;
    }
  }

  set imageMaxWidth(value) {
    if (value !== void 0) {
      this._options.imageMaxWidth = +value;
    }
  }

  set imageMaxHeight(value) {
    if (value !== void 0) {
      this._options.imageMaxHeight = +value;
    }
  }

  set imageQuality(value) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this._options.imageQuality = val;
    }
  }

  set imageFormat(value) {
    if (['jpg', 'png'].indexOf(value) > -1) {
      this._options.imageFormat = value
    }
  }

  set disabled(value) {
    this._options.disabled = value;
  }

  get disabled() {
    return this._options.disabled;
  }

  set autoOrientation(value) {
    this._options.autoOrientation = value;
  }

  get autoOrientation() {
    return this._options.autoOrientation;
  }

  /**
   * Initialize service for target element
   * @param el
   */
  public initForElement(el: ElementRef) {
    this.el = el.nativeElement;
    this.onChanges();
  }

  public initDragNDropForElement(el: ElementRef) {
    this.containerEl = el.nativeElement;
    this.onDrop();
  }

  /**
   * Fire when input was changed
   */
  public onChanges() {
    FileAPI.event.on(this.el, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.el.value = null;

      this.filterFiles(files).then((result: any) => {
        if (result.files && result.files.length > 0) {
          this.processFiles(result.files);
        }
      })
    });
  }

  /**
   * Fire when on root element was dropped file
   */
  public onDrop() {
    FileAPI.event.on(this.containerEl, 'drop', (event) => {
      const files = FileAPI.getFiles(event);

      // Clear input value
      this.el.value = null;

      this.filterFiles(files).then((result: any) => {
        if (result.files && result.files.length > 0) {
          this.processFiles(result.files);
        }
      })
    });
  }

  /**
   * Process uploaded files
   * @param files
   */
  private processFiles(files) {

    files = files.map((f) => {
      return new FsFile(f, this._options);
    });

    this.select.next(this._options.multiple ? files : files[0]);

    files.forEach((file: FsFile) => {

      if (file.typeImage) {
        const resFilePromise = new Promise((resolve, reject) => {
          this.applyTransforms(file, resolve, reject);
        });
        resFilePromise.then(
          () => {console.log(files)},
          (error) => {
            if (error && error.originFile) {
              this.alertImageProcessingError(error.originFile.file);
            }
          }
        );
      }
    });
  }

  /**
   * Filter files
   * @param rawFiles
   * @returns {Subject<any>}
   */
  private filterFiles(rawFiles) {
    return new Promise((resolve) => {
      FileAPI.filterFiles(rawFiles, (file, info) => {
        let sizeRule = void 0;
        if (file.typeImage) {
          sizeRule = this.checkResolutionRule(info);
        } else {
          sizeRule = true;
        }

        const fileSize = this.checkSize(file);

        return (sizeRule !== void 0 ? sizeRule : true) && fileSize;
      }, (files, rejected) => {
        resolve({ files: files, rejected: rejected });
      });
    });
  }

  /**
   * Check file resolution restrictions
   * @param info
   * @returns {boolean}
   */
  private checkResolutionRule(info) {
    if (this._options.imageMaxWidth && this._options.imageMaxHeight) {
      return info.width <= this._options.imageMaxWidth && info.height <= this._options.imageMaxHeight;
    } else if (this._options.imageMaxWidth) {
      return info.width <= this._options.imageMaxWidth;
    } else if (this._options.imageMaxHeight) {
      return info.height <= this._options.imageMaxHeight;
    } else {
      return true;
    }
  }

  /**
   * Check filesize restrictions
   * @param file
   * @returns {boolean}
   */
  private checkSize(file) {
    return (this._options.minSize !== void 0 ? file.size as number >= (this._options.minSize * FileAPI.KB) : true)
      && (this._options.maxSize !== void 0 ? file.size <= (this._options.maxSize * FileAPI.KB) : true);
  }

  /**
   * Retrun information about image (width/height)
   * @param {FsFile} originFile
   * @returns {Promise<any>}
   */
  private getImageInfo(originFile: FsFile) {
    return new Promise((resolve, reject) => {
      FileAPI.getInfo(originFile.file, (err, info) => {
        if (!err) {
          resolve(info);
        } else {
          reject(err);
        }
      });
    });
  }

  private async transformFile(originFile: FsFile, transformOptions: any) {
    return new Promise((resolve, reject) => {
      // Transform image by options and rotate if needed
      FileAPI.Image.transform(
        originFile.file,
        [transformOptions],
        this._options.autoOrientation,
        (err, images) => {
          // Process transformed files
          if (!err && images[0]) {
            let canvasImage;

            // Check orientation (scale)
            if (this._options.autoOrientation) {
              canvasImage = ScaleExifImage(images[0], originFile.exifInfo.Orientation);
            } else {
              canvasImage = images[0];
            }

            // Convert to blob for create File object
            canvasImage.toBlob((blob) => {
              // Save as file to FsFile
              originFile.file = new File([blob], originFile.name, { type: originFile.type });

              // Update FsFile info

              this.getImageInfo(originFile).then((result) => {
                originFile.parseInfo(result);
                resolve(originFile);
              }).catch((error) => {
                reject({ error, originFile });
              });
            }, transformOptions.type, canvasImage.quality)
          } else {
            reject(err);
          }
      });
    });
  }

  /**
   * Process image file
   * @param file
   * @param resolve
   * @param reject
   */
  private async applyTransforms(file: FsFile, resolve, reject) {
    file.progress = this._options.preview;

    try {
      const fileInfo = await this.getImageInfo(file);
      file.parseInfo(fileInfo);

      const params = this.generateTransformParams(file);
      const resultFile = await this.transformFile(file, params);

      resolve(resultFile);
    } catch (err) {
      reject(err);
    }
  }

  private generateTransformParams(file) {
    const transformParams: any = {};

    // Type for result image
    transformParams.type = (this._options.imageFormat) ? 'image/' + this._options.imageFormat : file.type;

    // Quality for result image
    if (this._options.imageQuality !== void 0) {
      transformParams.quality = this._options.imageQuality || 1;
    }

    return transformParams;
  }

  private alertImageProcessingError(file) {
    alert(`File ${file.name} can't be processed as image. File was rejected`);
  }
}
