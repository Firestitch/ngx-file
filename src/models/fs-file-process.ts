import { FsFile } from './fs-file';


export class FsFileProcess {
  private _fileRef: FsFile;

  constructor(fileRef: FsFile, public name: string) {
    this._fileRef = fileRef;
  }

  complete() {
    const index = this._fileRef.processes.indexOf(this);
    if (index >= 0) {
      this._fileRef.processes.splice(index, 1);
    }
  }
}

