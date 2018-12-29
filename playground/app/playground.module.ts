import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule, FsMessage } from '@firestitch/message';
import { FsApiModule, FS_API_RESPONSE_HANDLER } from '@firestitch/api';

import { ToastrModule } from 'ngx-toastr'

import { FsFileModule } from 'fs-file';
import { AppMaterialModule } from './material.module';
import { ResponseHandler } from './handlers/response.handler';
import { AppComponent } from './app.component';

import {
  SingleFileSelectComponent,
  MultipleFileSelectComponent,
  ImageFileManipulationComponent,
  FilePickerComponent,
  FilePickerExistingFileComponent,
  FilePickerExistingUrlComponent,
  CaptureSingleComponent,
  CaptureMultipleComponent,
  CaptureCordovaComponent,
  FileImagePickerComponent,
} from './components';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsFileModule.forRoot({
      allowDownload: true,
      allowRemove: true,
      dragoverMessage: true
    }),
    FsApiModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FlexLayoutModule,
    FsMessageModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    SingleFileSelectComponent,
    MultipleFileSelectComponent,
    ImageFileManipulationComponent,
    FilePickerComponent,
    FilePickerExistingFileComponent,
    FilePickerExistingUrlComponent,
    CaptureSingleComponent,
    CaptureMultipleComponent,
    CaptureCordovaComponent,
    FileImagePickerComponent,
  ],
  providers: [
    { provide: FS_API_RESPONSE_HANDLER, useClass: ResponseHandler, deps: [FsMessage] },
  ],
})
export class PlaygroundModule {

  constructor() {
    document.addEventListener('deviceready', function() {

      if ((<any>navigator).splashscreen) {
        setTimeout(function() {
          (<any>navigator).splashscreen.hide();
        }, 200);
      }

      if ((<any>window).StatusBar) {
        (<any>window).StatusBar.overlaysWebView(false);
      }
    }, false);
  }
}
