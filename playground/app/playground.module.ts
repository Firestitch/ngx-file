import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FsApiModule } from '@firestitch/api';
import { FsExampleModule } from '@firestitch/example';
import { FS_FILE_CLICK_INTERCEPTOR, FsFileModule } from '@firestitch/file';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  CaptureMultipleComponent,
  CaptureSingleComponent,
  DialogComponent,
  FileImagePickerComponent,
  FilePickerExistingFileComponent,
  FilePickerExistingUrlComponent,
  FilePickerFormComponent,
  FilePreviewComponent,
  ImageFileManipulationComponent,
  MultipleFileSelectComponent,
  SingleFileSelectComponent,
} from './components';
import { CordovaClickInterceptor } from './interceptors/cordova-click-interceptor';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsFileModule.forRoot({
      // allowDownload: true,
      // allowRemove: true,
      // dragoverMessage: true
    }),
    FsFormModule,
    FsApiModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  declarations: [
    AppComponent,
    SingleFileSelectComponent,
    MultipleFileSelectComponent,
    ImageFileManipulationComponent,
    FilePickerExistingFileComponent,
    FilePickerExistingUrlComponent,
    CaptureSingleComponent,
    CaptureMultipleComponent,
    FileImagePickerComponent,
    DialogComponent,
    FilePreviewComponent,
    FilePickerFormComponent,
  ],
  providers: [
    {
      provide: FS_FILE_CLICK_INTERCEPTOR,
      multi: true,
      useFactory: () => {
        return new CordovaClickInterceptor();
      },
    },
  ],
})
export class PlaygroundModule {

  constructor() {
    document.addEventListener('deviceready', function () {

      if ((<any>navigator).splashscreen) {
        setTimeout(function () {
          (<any>navigator).splashscreen.hide();
        }, 200);
      }

      if ((<any>window).StatusBar) {
        (<any>window).StatusBar.overlaysWebView(false);
      }
    }, false);
  }
}
