import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsFileModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  SingleFileSelectComponent,
  MultipleFileSelectComponent,
  ImageFileManipulationComponent,
  FilePickerComponent,
  FilePickerExistingFileComponent,
  FilePickerExistingUrlComponent,
  CaptureComponent
} from './app/components';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsFileModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    FlexLayoutModule
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
    CaptureComponent
  ],
  providers: [
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
