import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PlaygroundModule } from './app/playground.module';
import { environment } from './environments/environment';
import { FS_FILE_CLICK_INTERCEPTOR, FsFileModule } from '@firestitch/file';
import { CordovaClickInterceptor } from './app/interceptors/cordova-click-interceptor';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsFormModule } from '@firestitch/form';
import { FsApiModule } from '@firestitch/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsFileModule.forRoot({
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
    ]
})
  .catch(err => console.error(err));

