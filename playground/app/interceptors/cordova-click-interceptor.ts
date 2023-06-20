import { FileClickHandler, FileClickInterceptor } from "@firestitch/file";
import { Observable, of } from "rxjs";
import { InputProcessorService } from "src/app";


export class CordovaClickInterceptor extends FileClickInterceptor {

  public intercept(event: PointerEvent, inputProcessorService: InputProcessorService, next: FileClickHandler): Observable<any> {

    // if (this.api !== 'html5' && (this.capture === 'camera' || this.capture === 'library')) {
    //   if (hasCordovaCameraSupport()) {
    //     // const cordovaProcessor = new CordovaProcessor(this, this._ngZone);

    //     // if (this.capture === 'library') {
    //     //   return cordovaProcessor.selectCordovaCameraLibrary();
    //     // }

    //     // if (this.isAcceptImage()) {
    //     //   return cordovaProcessor.selectCordovaCameraPicture();
    //     // }
    //   }

    //   // if (hasCordovaCaptureSupport()) {
    //   //   if (this.isAcceptVideo()) {
    //   //     return cordovaProcessor.selectCordovaCaptureVideo();
    //   //   }
    //   // }
    // }

    return next.handle(event, inputProcessorService);
  }

}
