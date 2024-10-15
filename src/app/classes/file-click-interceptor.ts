import { Observable } from 'rxjs';

import { InputProcessorService } from '../services';

import { FileClickHandler } from './file-click-handler';


export abstract class FileClickInterceptor {

  public abstract intercept(event: MouseEvent, inputProcessorService: InputProcessorService, next: FileClickHandler): Observable<any>;

}
