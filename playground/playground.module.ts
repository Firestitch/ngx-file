import './../tools/assets/playground.scss';
import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsFileModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsApiModule, FS_API_RESPONSE_HANDLER } from '@firestitch/api';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponseHandler } from './app/handlers/response.handler';
import { FsMessageModule } from '@firestitch/message';
import { ToastrModule } from 'ngx-toastr'

import {
  SingleFileSelectComponent,
  MultipleFileSelectComponent,
  ImageFileManipulationComponent,
  FilePickerComponent,
  FilePickerExistingFileComponent,
  FilePickerExistingUrlComponent,
  CaptureSingleComponent,
  CaptureMultipleComponent,
  CaptureCordovaComponent
} from './app/components';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsFileModule.forRoot({
      allowDownload: true,
      allowRemove: true
    }),
    FsApiModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
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
    CaptureCordovaComponent
  ],
  providers: [
    { provide: FS_API_RESPONSE_HANDLER, useClass: ResponseHandler },
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
