export class FsFile {

  public progress = false;
  public imageWidth: number;
  public imageHeight: number;
  public file: File;
  public extension: string;
  public name: string;
  public type: string;
  public size: number;

  constructor(file: File) {
    this.file = file;
    this.name = file.name;
    this.size = file.size;
    this.type = file.type;
    const parts = this.file.name.split('.');
    if (parts.length > 1) {
      this.extension = parts[parts.length - 1];
    }
  }

  get typeImage(): any {
    return !!this.type.match(/^image/i);
  }

  public parseInfo(info) {
    this.imageWidth = info.width;
    this.imageHeight = info.height;
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
