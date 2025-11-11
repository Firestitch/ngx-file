import { AsyncPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
  inject,
} from '@angular/core';

import { MatMiniFabAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';


@Component({
  selector: 'fs-file-actions',
  templateUrl: './fs-file-actions.component.html',
  styleUrls: ['./fs-file-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTooltip,
    NgClass,
    MatMiniFabAnchor,
    MatIcon,
    AsyncPipe,
  ],
})
export class FsFileActionsComponent {

  @Input() public actions = new QueryList<FsFilePreviewActionDirective>();
  @Input() public file: FsFile;

  @ContentChildren(FsFilePreviewActionDirective)
  public set actionDirectives(actionDirectives: QueryList<FsFilePreviewActionDirective>) {
    this.actions.reset([...actionDirectives.toArray(), ...this.actions.toArray()]);
  }

  private _cdRef = inject(ChangeDetectorRef);

  public callAction(event: MouseEvent, action: FsFilePreviewActionDirective) {
    if (action.click.observers.length) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      action.click.emit({ event, file: this.file });
    }
  }

  public updateActionVisibility() {
    this._cdRef.markForCheck();
  }
}
