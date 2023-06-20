import { Observable } from 'rxjs';
import { FileClickHandler } from "./file-click-handler";
import { InputProcessorService } from "../services";


export abstract class FileClickInterceptor {

  public abstract intercept(event: PointerEvent, inputProcessorService: InputProcessorService, next: FileClickHandler): Observable<any>;

}
