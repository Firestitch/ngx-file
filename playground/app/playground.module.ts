import { NgModule } from '@angular/core';


@NgModule()
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
