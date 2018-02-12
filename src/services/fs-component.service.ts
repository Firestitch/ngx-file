import { EventEmitter, Injectable } from '@angular/core';
import * as FileAPI from 'fileapi';
import { Subject } from 'rxjs/Subject';

const PROCESSORS = {
  0: 'imageType',
  1: 'imageQuality',
};

function* processors(list) {
  for (const item of list) {
    yield item;
  }
}

@Injectable()
export class FsFileService {

  public el: any;
  public selected  = new EventEmitter();

  private _options = {
    multiple: false,
    accept: [],
    minSize: void 0,
    maxSize: void 0,
    imageMaxWidth: void 0,
    imageMaxHeight: void 0,
    imageQuality: void 0,
    imageFormat: void 0,
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

  public initForElement(el: any) {
    this.el = el;
    this.onChanges();
  }

  public onChanges() {
    FileAPI.event.on(this.el, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      this.filterFiles(files).subscribe((result: any) => {
        if (result.files && result.files.length > 0) {
          const processedFiles = [];

          result.files.forEach((file) => {
            if (/^image/.test(file.type)) {
              const processorsIter = processors(Object.keys(PROCESSORS));
              const resFilePromise = new Promise((resolve, reject) => {
                this.applyProcessors(file, processorsIter, resolve, reject);
              });
              processedFiles.push(resFilePromise);
            } else {
              processedFiles.push(file);
            }
          });

          Promise.all(processedFiles).then((res) => {
            this.selected.next(res);
          })
        }
      })
    });
  }

  /**
   * Filter files
   * @param rawFiles
   * @returns {Subject<any>}
   */
  private filterFiles(rawFiles) {
    const result = new Subject();

    FileAPI.filterFiles(rawFiles, (file, info) => {
      let sizeRule = void 0;
      if (/^image/.test(file.type)) {
        sizeRule = this.checkResolutionRule(info);
      } else {
        sizeRule = true;
      }

      const fileSize = this.checkSize(file);

      return (sizeRule !== void 0 ? sizeRule : true) && fileSize;
    }, (files, rejected) => {
      result.next({ files: files, rejected: rejected });
      result.complete();
    });

    return result;
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
   * Change image format
   * @param file
   * @returns {Promise<any>}
   */
  private changeImageFormat(file) {
    return new Promise((resolve, reject) => {
      const image = FileAPI.Image(file);
      const fileType = (this._options.imageFormat) ? 'image/' + this._options.imageFormat : file.type;
      image.get((err, img) => {
        if (!err) {
          img.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: fileType }));
          }, fileType, this._options.imageQuality || 1)
        } else {
          reject(err);
        }
      });
    });
  }
  // private resizeImage(file) {
  //   return new Promise((resolve, reject) => {
  //     FileAPI.Image(file).resize(100, 100).get((err, img) => {
  //       if (!err) {
  //         resolve(img);
  //       } else {
  //         reject(err);
  //       }
  //     });
  //   });
  // }

  /**
   * Change image quality
   * @param file
   * @returns {Promise<any>}
   */
  private changeQuality(file) {
    return new Promise((resolve, reject) => {
      const image = FileAPI.Image(file);
      image.get((err, img) => {
        if (!err) {
          img.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: file.type }));
          }, file.type, this._options.imageQuality || 1)
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Process image file by sequence of available processors
   * @param file
   * @param processorsIter
   * @param resolve
   * @param reject
   */
  private applyProcessors(file, processorsIter, resolve, reject) {
    const nextValue = processorsIter.next();
    if (!nextValue.done) {
      switch (+nextValue.value) {
        case 0: {
          if (this._options.imageQuality !== void 0) {
            this.changeQuality(file).then((resultFile) => {
              this.applyProcessors(resultFile, processorsIter, resolve, reject);
            }).catch((error) => {
              reject(error);
            })
          } else {
            this.applyProcessors(file, processorsIter, resolve, reject);
          }
        } break;

        case 1: {
          if (this._options.imageFormat !== void 0) {
            this.changeImageFormat(file).then((resultFile) => {
              this.applyProcessors(resultFile, processorsIter, resolve, reject);
            }).catch((error) => {
              reject(error);
            })
          } else {
            this.applyProcessors(file, processorsIter, resolve, reject);
          }
        } break;
      }
    } else {
      resolve(file);
    }
  }
}
