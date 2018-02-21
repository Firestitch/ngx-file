import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatProgressSpinnerModule, MatTooltipModule} from '@angular/material';

import { FsCommonModule } from '@firestitch/common';

import {
  FsFileComponent,
  FsFileQueueComponent,
  FsFileQueuePreviewComponent
} from './components';
import { FsFileQueueActionDirective } from './directives';


@NgModule({
  imports: [
    CommonModule,
    FsCommonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    FsFileComponent,
    FsFileQueueComponent,
    FsFileQueueActionDirective,
  ],
  entryComponents: [
  ],
  declarations: [
    FsFileComponent,
    FsFileQueueComponent,
    FsFileQueuePreviewComponent,

    FsFileQueueActionDirective,
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
