import { FsFileConfig } from '../interfaces';

export class ProcessConfig {
  // private _minSize: number;
  // private _maxSize: number;
  private _width: number;
  private _height: number;
  private _quality: number;
  private _format: string;
  private _minWidth: number;
  private _minHeight: number;
  // private _autoOrientation: boolean;
  // private _resize: boolean;

  constructor(config: FsFileConfig = {}) {
    this.parseConfig(config);
  }

  // set minSize(value) {
  //   if (value !== void 0) {
  //     this._minSize = value;
  //   }
  // }
  //
  // set maxSize(value) {
  //   if (value !== void 0) {
  //     this._maxSize = value;
  //   }
  // }

  get shouldProcess(): boolean {
    return this._width !== undefined
      || this._height !== undefined
      || this._quality !== undefined
      || this._format !== undefined
      || this._minHeight !== undefined
      || this._minWidth !== undefined;
  }

  set width(value) {
    if (value !== void 0) {
      this._width = +value;
    }
  }

  get width() {
    return this._width;
  }

  set height(value) {
    if (value !== void 0) {
      this._height = +value;
    }
  }

  get height() {
    return this._height;
  }

  set quality(value: any) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this._quality = val;
    }
  }

  get quality() {
    return this._quality;
  }

  set format(value) {
    if (['jpg', 'png'].indexOf(value) > -1) {
      this._format = value
    }
  }

  get format() {
    return this._format;
  }

  set minWidth(value) {
    this._minWidth = value;
  }

  get minWidth() {
    return this._minWidth;
  }

  set minHeight(value) {
    this._minHeight = value;
  }

  get minHeight() {
    return this._minHeight;
  }
  // set autoOrientation(value) {
  //   this._autoOrientation = value;
  // }
  //
  // get autoOrientation() {
  //   return this._autoOrientation;
  // }

  // set resize(value) {
  //   if (typeof(value) === 'boolean') {
  //     this._resize = value;
  //   } else {
  //     this._resize = value === 'true';
  //   }
  // }
  //
  // get resize() {
  //   return this._resize;
  // }

  public parseConfig(config: FsFileConfig) {
    // this.minSize = config.minSize;
    // this.maxSize = config.maxSize;
    // this.resize = config.resize;
    this.width = config.width;
    this.height = config.height;
    this.quality = config.quality;
    this.format = config.format;
    this.minWidth = config.minWidth;
    this.minHeight = config.minHeight;
    // this.autoOrientation = config.autoOrientation;
  }
}
