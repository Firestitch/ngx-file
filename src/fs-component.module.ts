import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsCommonModule } from '@firestitch/common';

import { FsFileComponent, FsFileQueueComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FsCommonModule,
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
