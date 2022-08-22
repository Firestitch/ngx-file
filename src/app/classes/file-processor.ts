import * as FileAPI from 'fileapi';
import * as EXIF from '@firestitch/exif-js';

import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { toInteger } from 'lodash-es';


import { ProcessConfig, FsFile } from '../models';
import { ScaleExifImage, createBlob } from '../helpers';
import { FsFileConfig } from '../interfaces';


export class FileProcessor {

  constructor() {}

  /**
   * Process uploaded files
   * @param files
   * @param config
   */
  public process(files, config: FsFileConfig): Observable<any> {
    let multiple = true;
    const processConfig = new ProcessConfig(config);

    if (!Array.isArray(files)) {
      files = [files];
      multiple = false;
    }

    const processedFiles = [];
    files.forEach((file: FsFile) => {

      if (file.file && file.imageProcess && processConfig.shouldProcess) {
        const resFilePromise = new Promise((resolve, reject) => {
          this.applyTransforms(file, resolve, reject, processConfig);
        });

        processedFiles.push(resFilePromise);
      } else {
        processedFiles.push(file);
      }
    });

    return from(Promise.all(processedFiles))
    .pipe(
      switchMap((resultFiles) => {
        if (!multiple && resultFiles[0]) { return of(resultFiles[0]) }
        return of(resultFiles);
      })
    );
  }

  private async transformFile(originFile: FsFile, transformConfig: any, processConfig: ProcessConfig): Promise<FsFile> {
    return new Promise((resolve, reject) => {
      // Transform image by options and rotate if needed
      FileAPI.Image.transform(
        originFile.file,
        [transformConfig],
        true, // AutoRotate
        (err, images) => {
          // Process transformed files
          if (!err && images[0]) {
            originFile.exifInfo
            .then((exifInfo) => {
              let canvasImage;
              canvasImage = ScaleExifImage(images[0], exifInfo.Orientation);

              // Convert to blob for create File object
              canvasImage.toBlob((blob) => {
                // Save as file to FsFile
                originFile.file = createBlob([blob], originFile.file.name, originFile.type);

                // Update FsFile info
                originFile.imageInfo
                  .then(() => {
                    resolve(originFile);
                  }).catch((error) => {
                    reject({ error, originFile });
                  });
              }, transformConfig.type, canvasImage.quality);
            }, reject);

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
   * @param config
   */
  private async applyTransforms(fsFile: FsFile, resolve, reject, config: ProcessConfig) {
    try {
      await fsFile.imageInfo;

      const params = this.generateTransformParams(fsFile, config);
      const resultFile: any = await this.transformFile(fsFile, params, config);
      const codes = [];
      const errors = [];

      if (config.minHeight && fsFile.imageHeight < toInteger(config.minHeight)) {
        codes.push('minHeight');
        errors.push(`Height must be at least ${config.minHeight}px.`);
      }

      if (config.minWidth && fsFile.imageWidth < toInteger(config.minWidth)) {
        codes.push('minWidth');
        errors.push(`Width must be at least ${config.minWidth}px.`);
      }

      if (codes.length) {
        throw { codes: codes, error: errors.join(' ') };
      }

      resolve(resultFile);

    } catch (err) {
      reject(err);
    }
  }

  private generateTransformParams(file, config: ProcessConfig) {
    const transformParams: any = {};

    // Type for result image
    transformParams.type = (config.format) ? 'image/' + config.format : file.type;

    // Resize
    transformParams.maxWidth = config.width;
    transformParams.maxHeight = config.height;

    // Quality for result image
    if (config.quality !== void 0) {
      transformParams.quality = config.quality || 1;
    }

    return transformParams;
  }
}
