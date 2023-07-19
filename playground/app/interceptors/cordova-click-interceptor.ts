import { FileClickHandler, FileClickInterceptor } from "@firestitch/file";
import { Observable, of } from "rxjs";
import { InputProcessorService } from "src/app";


export class CordovaClickInterceptor extends FileClickInterceptor {

  public intercept(event: PointerEvent, inputProcessorService: InputProcessorService, next: FileClickHandler): Observable<any> {

    return next.handle(event, inputProcessorService);
  }

}
