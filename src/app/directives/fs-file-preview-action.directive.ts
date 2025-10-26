import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, inject } from '@angular/core';

import { BehaviorSubject, Observable, map } from 'rxjs';

import { FsFile } from '../models/fs-file';


@Directive({
    selector: '[fs-file-preview-action],[fs-file-action]',
    standalone: true,
})
export class FsFilePreviewActionDirective implements OnChanges {
  templateRef = inject<TemplateRef<any>>(TemplateRef);


  @Input() public placement: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  @Input() public show: boolean = true;
  @Input() public icon: string;
  @Input() public tooltip: string;

  @Output() public click = new EventEmitter<{ event: MouseEvent; file: FsFile }>();

  private _show$ = new BehaviorSubject<boolean>(this.show);
  private _icon$ = new BehaviorSubject<string | undefined>(undefined);
  private _tooltip$ = new BehaviorSubject<string | undefined>(undefined);
  private _placement$ = new BehaviorSubject<string | undefined>(undefined);

  public get show$(): Observable<boolean> {
    return this._show$.asObservable();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.show) {
      this._show$.next(this.show);
    }

    if (changes.icon) {
      this._icon$.next(this.icon);
    }

    if (changes.tooltip) {
      this._tooltip$.next(this.tooltip);
    }

    if (changes.placement) {
      this._placement$.next(this.placement);
    }
  }

  public get icon$(): Observable<string | undefined> {
    return this._icon$.asObservable();
  }

  public get tooltip$(): Observable<string | undefined> {
    return this._tooltip$.asObservable();
  }

  public get tooltipDisabled$(): Observable<boolean> {
    return this.tooltip$
      .pipe(
        map((tooltip) => !tooltip),
      );
  }

  public get placement$(): Observable<string | undefined> {
    return this._placement$.asObservable();
  }

  public get hide$(): Observable<boolean> {
    return this.show$
      .pipe(
        map((show) => !show),
      );
  }
}

