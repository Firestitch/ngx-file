import { enableProdMode, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { FsApiModule } from '@firestitch/api';
import { FsExampleModule } from '@firestitch/example';
import { FS_FILE_CLICK_INTERCEPTOR, FsFileModule } from '@firestitch/file';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { CordovaClickInterceptor } from './app/interceptors/cordova-click-interceptor';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, 
      FsFileModule.forRoot({
      // allowDownload: true,
      // allowRemove: true,
      // dragoverMessage: true
      }), FsFormModule, FsApiModule, FormsModule, FsExampleModule.forRoot(), FsMessageModule.forRoot()),
    {
      provide: FS_FILE_CLICK_INTERCEPTOR,
      multi: true,
      useFactory: () => {
        return new CordovaClickInterceptor();
      },
    },
    provideAnimations(),
    provideRouter([]),
  ],
})
  .catch((err) => console.error(err));

