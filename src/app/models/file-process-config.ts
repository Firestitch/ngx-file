import { FsFileProcessConfig } from "../interfaces";


export class FileProcessConfig {

  private _maxWidth: number;
  private _maxHeight: number;
  private _quality: number = 1;
  private _format: 'png' | 'jpg';
  private _minWidth: number;
  private _minHeight: number;
  private _orientate: boolean;

  constructor(config: FsFileProcessConfig = {}) {
    this.maxWidth = config.maxWidth;
    this.maxHeight = config.maxHeight;
    this.format = config.format;
    this.orientate = config.orientate;
    this.minWidth = config.minWidth;
    this.minHeight = config.minHeight;
  }

  public set maxWidth(value) {
    if (value !== void 0) {
      this._maxWidth = +value;
    }
  }

  public get maxWidth() {
    return this._maxWidth;
  }

  public set maxHeight(value) {
    if (value !== void 0) {
      this._maxHeight = +value;
    }
  }

  public get maxHeight() {
    return this._maxHeight;
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

  public set format(value: 'jpg' | 'png') {
    if (['jpg', 'png'].indexOf(value) > -1) {
      this._format = value
    }
  }

  public get format() {
    return this._format;
  }

  public get orientate() {
    return this._orientate;
  }

  public set orientate(value) {
    this._orientate = value;
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
}
