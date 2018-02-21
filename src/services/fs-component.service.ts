import { EventEmitter, Injectable } from '@angular/core';
import * as FileAPI from 'fileapi';
import { Subject } from 'rxjs/Subject';
import {FsFile} from '../models/fs-file';

const PROCESSORS = {
  0: 'imageInfo',
  1: 'imageType',
  2: 'imageQuality',
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
    disabled: false,
    multiple: false,
    preview: false,
    previewSizes: { width: null, height: null },
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

  set disabled(value) {
    this._options.disabled = value;
  }

  get disabled() {
    return this._options.disabled;
  }

  set preview(value) {
    if (typeof(value) === 'boolean' || value === 'true') {
      this._options.preview = value;
      this._options.previewSizes.width = 100;
      this._options.previewSizes.height = 100;
    } else if (typeof value == 'string' || value instanceof String) {
      const [width, height] = value.split('x').map((val) => +val);
      this._options.preview = true;

      if (width && height) {
        this._options.previewSizes.width = width;
        this._options.previewSizes.height = height;
      } else if (width && !height) {
        this._options.previewSizes.width = width;
        this._options.previewSizes.height = width;
      } else if (height && !width) {
        this._options.previewSizes.width = height;
        this._options.previewSizes.height = height;
      } else {
        this._options.preview = false;
      }
    }
  }

  public initForElement(el: any) {
    this.el = el;
    this.onChanges();
  }

  public onChanges() {
    FileAPI.event.on(this.el, 'change', (event) => {
      const files = FileAPI.getFiles(event);

      this.filterFiles(files).then((result: any) => {
        if (result.files && result.files.length > 0) {

          result.files = result.files.map((f) => new FsFile(f));

          this.selected.next(result.files);

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

          Promise.all(processedFiles).then((resFiles) => {
            const previewPromises = [];

            resFiles.forEach((file) => {
              if (this._options.preview) {
                const filePromise = new Promise((resolve, reject) => {
                  FileAPI.Image(file.file)
                    .preview(this._options.previewSizes.width, this._options.previewSizes.height)
                    .get((err, img) => {
                      FileAPI.readAsDataURL(img, (event) => {
                        if (event.type === 'load') {
                          file.preview = event.result;
                          file.previewWidth = this._options.previewSizes.width;
                          file.previewHeight = this._options.previewSizes.height;
                          file.progress = false;

                          resolve(file)
                        }
                      });
                    });
                });
                previewPromises.push(filePromise);
              } else {
                previewPromises.push(file);
              }
            });

            Promise.all(previewPromises).then((resultFiles) => {
              console.log('done', resultFiles);
            })

            // FileAPI.readAsDataURL(file, (evt) => {
            //   if (evt.type === 'load') {
            //     const previewUrl = URL.createObjectURL(file);
            //     const newImg = document.createElement('img');
            //
            //     newImg.onload = function() {
            //       // no longer need to read the blob so it's revoked
            //       URL.revokeObjectURL(previewUrl);
            //     };
            //
            //     newImg.src = previewUrl;
            //     document.body.appendChild(newImg);
            //   }
            // })
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
    return new Promise((resolve, reject) => {
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
   * Change image format
   * @param file
   * @returns {Promise<any>}
   */
  private changeImageFormat(originFile: FsFile) {
    return new Promise((resolve, reject) => {
      const image = FileAPI.Image(originFile.file);
      const fileType = (this._options.imageFormat) ? 'image/' + this._options.imageFormat : originFile.type;
      image.get((err, img) => {
        if (!err) {
          img.toDataUrl((blob) => {
            originFile.file = new File([blob], originFile.name, { type: fileType });
            resolve(originFile);
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
   * Get image info
   * @param originFile
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

  /**
   * Change image quality
   * @param file
   * @returns {Promise<any>}
   */
  private changeQuality(originFile: FsFile) {
    return new Promise((resolve, reject) => {
      const image = FileAPI.Image(originFile.file);
      image.get((err, img) => {
        if (!err) {
          img.toBlob((blob) => {
            originFile.file = new File([blob], originFile.name, { type: originFile.type });
            resolve(originFile);
          }, originFile.type, this._options.imageQuality || 1)
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
      file.progress = true;
      switch (+nextValue.value) {
        case 0: {
          this.getImageInfo(file).then((result) => {
            file.parseInfo(result);
            this.applyProcessors(file, processorsIter, resolve, reject);
          }).catch((error) => {
            reject(error);
          })
        } break;

        case 1: {
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

        case 2: {
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
      file.progress = this._options.preview;
      resolve(file);
    }
  }
}
