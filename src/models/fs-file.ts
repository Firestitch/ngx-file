export class FsFile {

  public progress = false;
  public imageWidth: number;
  public imageHeight: number;
  public rotate: number;
  public exifInfo: any = {};
  public extension: string;
  public name: string;
  public type: string;
  public size: number;
  private _file: File;

  constructor(file: File) {
    this.file = file;
  }

  get file() {
    return this._file;
  }

  set file(value) {
    this._file = value;
    this.name = value.name;
    this.size = value.size;
    this.type = value.type;
    const parts = value.name.split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  get typeImage(): any {
    return !!this.type
      .match(/^image\/(gif|jpeg|pjpeg|png|svg\+xml|tiff|vnd\.microsoft\.icon|vnd\.wap\.wbmp|webp)/i);
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
    this.exifInfo = info.exif;
  }

  public toObject() {
    return {
      name: this.name,
      type: this.type,
      size: this.size,
      progress: this.progress,
      extension: this.extension,
      typeImage: this.typeImage,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight
    }
  }

}
