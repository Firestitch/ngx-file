import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsFileModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {
  SingleFileSelectComponent,
  MultipleFileSelectComponent,
  ImageFileManipulationComponent,
  FilePickerComponent,
  FilePickerExistingFileComponent,
  FilePickerExistingUrlComponent,
} from './app/components';

import { FsExamplesComponent } from '../tools/components/examples/examples.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsFileModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule
  ],
  entryComponents: [
  ],
  declarations: [
    FsExamplesComponent,

    AppComponent,
    SingleFileSelectComponent,
    MultipleFileSelectComponent,
    ImageFileManipulationComponent,
    FilePickerComponent,
    FilePickerExistingFileComponent,
    FilePickerExistingUrlComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
