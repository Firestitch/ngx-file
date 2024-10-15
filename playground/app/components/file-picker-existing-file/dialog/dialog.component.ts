import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FsApi } from '@firestitch/api';


@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {

  public fileApi;

  constructor(
    private _api: FsApi,
  ) {}

  public ngOnInit(): void {
    this.fileApi = this._api.createApiFile('/assets/lamborghini-sian-roadster-t1-1024x576.jpg');
  }

}
