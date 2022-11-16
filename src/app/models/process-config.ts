import { FsFileConfig } from '../interfaces';

export class ProcessConfig {

  private _width: number;
  private _height: number;
  private _quality: number;
  private _format: string;
  private _minWidth: number;
  private _minHeight: number;

  constructor(config: FsFileConfig = {}) {
    this.parseConfig(config);
  }

  public set width(value) {
    if (value !== void 0) {
      this._width = +value;
    }
  }

  public get width() {
    return this._width;
  }

  public set height(value) {
    if (value !== void 0) {
      this._height = +value;
    }
  }

  public get height() {
    return this._height;
  }

  public set quality(value: any) {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      this._quality = val;
    }
  }

  public get quality() {
    return this._quality;
  }

  public set format(value) {
    if (['jpg', 'png'].indexOf(value) > -1) {
      this._format = value
    }
  }

  public get format() {
    return this._format;
  }

  public set minWidth(value) {
    this._minWidth = value;
  }

  public get minWidth() {
    return this._minWidth;
  }

  public set minHeight(value) {
    this._minHeight = value;
  }

  public get minHeight() {
    return this._minHeight;
  }

  public parseConfig(config: FsFileConfig) {
    this.width = config.width;
    this.height = config.height;
    this.quality = config.quality;
    this.format = config.format;
    this.minWidth = config.minWidth;
    this.minHeight = config.minHeight;
  }
}
