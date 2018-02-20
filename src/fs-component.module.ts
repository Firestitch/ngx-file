import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { FsCommonModule } from '@firestitch/common';

import {
  FsFileComponent,
  FsFileQueueComponent,
  FsFileQueuePreviewComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    FsCommonModule,
    MatIconModule,
  ],
  exports: [
    FsFileComponent,
    FsFileQueueComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsFileComponent,
    FsFileQueueComponent,
    FsFileQueuePreviewComponent,
  ],
  providers: [
  ],
})
export class FsFileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsFileModule,
      providers: []
    };
  }
}
