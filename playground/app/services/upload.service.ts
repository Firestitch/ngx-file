import { Injectable } from "@angular/core";
import { FsApi } from "@firestitch/api";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _api: FsApi) {}

  public upload(file) {
    return this._api.post('https://specify.dev.firestitch.com/api/dummy/upload', { file: file.file });
  }
}

