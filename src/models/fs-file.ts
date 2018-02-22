export class FsFile {

  public progress = false;

  public imageWidth: null;
  public imageHeight: null;
  public previewWidth: null;
  public previewHeight: null;

  private _file: File;
  private _preview: string;
  private _ext: string;

  constructor(file: File) {
    this.file = file;
  }

  set file(value) {
    this._file = value;
    const parts = this._file.name.split('.');
    if (parts.length > 1) {
      this._ext = parts[parts.length - 1];
    }
  }

  get file() {
    return this._file;
  }

  get name() {
    return this.file.name;
  }

  get type() {
    return this.file.type;
  }

  get size() {
    return this.file.size;
  }

  set preview(value) {
    this._preview = value;
  }

  get preview() {
    return this._preview;
  }

  get extension() {
    return this._ext;
  }

  get typeImage() {
    return this.type.match(/^image/i);
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
  }

  public toJson() {
    return {
      file: this.file,
      name: this.name,
      type: this.type,
      size: this.size,
      progress: this.progress,
      preview: this.preview,
      extrension: this.extension,
      typeImage: this.typeImage,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight,
      previewWidth: this.previewWidth,
      previewHeight: this.previewHeight,
    }
  }

}
