import { Observable, of } from 'rxjs';
import { FileClickHandler } from "./file-click-handler";
import { FileClickInterceptor } from "./file-click-interceptor";
import { InputProcessorService } from '../services';


export class ClickInterceptor extends FileClickInterceptor {

  public intercept(event: PointerEvent, inputProcessorService: InputProcessorService, next: FileClickHandler): Observable<any> {
    inputProcessorService.inputEl.click();

    return of(null);
  }

}
