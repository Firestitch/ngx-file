import { Observable } from 'rxjs';

import { InputProcessorService } from '../services';

import { FileClickInterceptor } from './file-click-interceptor';


export class FileClickHandler {

  constructor(
    private _next: FileClickHandler,
    private _interceptor: FileClickInterceptor,
  ) {}

  public handle(event: MouseEvent, inputProcessorService: InputProcessorService): Observable<MouseEvent> {
    return this._interceptor.intercept(event, inputProcessorService, this._next);
  }

}
