import {
  Component, Inject
} from '@angular/core';

import * as FileAPI from 'fileapi';

import { FsFile } from '../../../models/fs-file';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FsPrompt } from '@firestitch/prompt';
import { InputProcessor } from '../../../classes';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';


@Component({
  templateUrl: 'fs-file-image-picker-dialog.component.html',
  styleUrls: ['./fs-file-image-picker-dialog.component.scss']
})
export class FsFileImagePickerDialogComponent {

  public file: FsFile;
  public reverseUrl = '';
  public height;
  public width;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<FsFileImagePickerDialogComponent>,
              public prompt: FsPrompt,
              private httpBackend: HttpBackend
              ) {
    if (data.file) {
      this.reverseUrl = 'https://images.google.com/searchbyimage?image_url=' + encodeURIComponent(data.file.url);
    }
  }

  imageLoad(event: any) {
    this.height = event.target.naturalHeight;
    this.width = event.target.naturalWidth;
  }

  upload() {
    this.prompt.input({
      label: 'Image URL',
      title: 'Upload Via URL',
      commitLabel: 'Create',
      required: true
    }).subscribe((value: string) => {
      const inputProcessor: InputProcessor = this.data.InputProcessor;
      const httpClient = new HttpClient(this.httpBackend);

      const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:8000');

      httpClient.get(value, { headers: headers  })
      .subscribe(response => {
        debugger;
        //inputProcessor.selectFiles([]);
      });
    });
  }
}
