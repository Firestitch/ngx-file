import { FsFile } from './fs-file';

export class FsFileProcess {
  private fsFile: FsFile;

  constructor(fsFile: FsFile) {
    this.fsFile = fsFile;
  }

  complete() {
    const index = this.fsFile.processes.indexOf(this);
    if (index >= 0) {
      this.fsFile.processes.splice(index, 1);
    }
  }
}

