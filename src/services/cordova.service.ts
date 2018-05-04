import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { tap } from 'rxjs/operators';


@Injectable()
export class CordovaService {
  deviceReady: Observable<any>;
  ready = null;

  constructor() {

    this.deviceReady = Observable.fromEvent(document, 'deviceready')
        .pipe( tap(() => {
            this.ready = true;
        }));
  }

  public isReady() {
    return new Observable((observer) => {
      if (this.ready === null) {
        this.deviceReady.subscribe(() => {
          this.ready = true;
          observer.next();
        })
      } else {
        observer.next();
      }
    })
  }
}
