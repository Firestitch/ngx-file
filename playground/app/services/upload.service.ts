import { Injectable, inject } from '@angular/core';

import { FsApi } from '@firestitch/api';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private _api = inject(FsApi);


  public upload(file) {
    return this._api.post('https://specify.firestitch.dev/api/dummy/upload', { file: file.file });
  }
}

