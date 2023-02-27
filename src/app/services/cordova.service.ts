import { Injectable, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Injectable()
export class CordovaService implements OnDestroy {

  public deviceReady: Observable<any>;
  public ready = null;

  private _destroy$ = new Subject();

  constructor() {
    this.deviceReady = fromEvent(document, 'deviceready');
  }

  public onReady(func) {
    this.isReady()
      .subscribe(func);
  }

  public isReady() {
    return (
      new Observable((observer) => {
        if ((<any>window).cordova) {
          this.ready = true;
        }

        if (this.ready) {
          observer.next();
          observer.complete();
          return;
        }

        this.deviceReady
          .pipe(
            takeUntil(this._destroy$),
          )
          .subscribe(() => {
            this.ready = true;
            observer.next();
            observer.complete();
          });
      })
    )
      .pipe(
        takeUntil(this._destroy$),
      );
  }
  
  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
