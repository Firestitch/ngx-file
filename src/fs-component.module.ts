import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsCommonModule } from '@firestitch/common';

import { FsFileComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FsCommonModule,
  ],
  exports: [
    FsFileComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsFileComponent,
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
