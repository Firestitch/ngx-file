import { Observable, of } from 'rxjs';
import { FileClickInterceptor } from "./file-click-interceptor";
import { InputProcessorService } from "../services";


export class FileClickHandler {

  public constructor(
    private _next: FileClickHandler,
    private _interceptor: FileClickInterceptor
  ) {}

  public handle(event: PointerEvent, inputProcessorService: InputProcessorService): Observable<PointerEvent> {
    return this._interceptor.intercept(event, inputProcessorService, this._next);
  }

}
