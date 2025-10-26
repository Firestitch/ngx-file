import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';
import { FsFileActionsComponent } from '../fs-file-actions/fs-file-actions.component';
import { NgClass, AsyncPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { FsFileSrcPipe } from '../../pipes/preview-pipe';


@Component({
    selector: 'fs-file-preview',
    templateUrl: './fs-file-preview.component.html',
    styleUrls: ['./fs-file-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatProgressSpinner,
        MatIcon,
        MatTooltip,
        FsFileActionsComponent,
        AsyncPipe,
        FsFileSrcPipe,
    ],
})
export class FsFilePreviewComponent implements OnInit, OnChanges {

  @ViewChild(FsFileActionsComponent)
  public actionsComponent: FsFileActionsComponent;

  @Input() public actions = new QueryList<FsFilePreviewActionDirective>();

  @ContentChildren(FsFilePreviewActionDirective)
  public set actionDirectives(actionDirectives: QueryList<FsFilePreviewActionDirective>) {
    this.actions.reset([...actionDirectives.toArray(), ...this.actions.toArray()]);
  }

  @Input() public showFilename = true;
  @Input() public previewWidth: number = 150;
  @Input() public previewHeight: number = 150;
  @Input() public file: FsFile;
  @Input() public url: string;
  @Input() public filename: string;
  @Input() public showActionOn: 'hover' | 'always' = 'always';

  public loaded = false;
  public iconDim = 100;
  public extensionFontSize = 20;

  private _cdRef = inject(ChangeDetectorRef);

  public get typeImage(): boolean {
    return this.file?.typeImage && this.file?.exists;
  }

  public ngOnInit(): void {
    if (this.url || this.filename) {
      this.file = new FsFile(this.url, this.filename);
    }

    this.previewHeight = this.previewHeight || 150;
    this.previewWidth = this.previewWidth || 150;

    const iconDim = this.previewWidth * .7;
    if (iconDim < 100) {
      this.iconDim = iconDim;
      this.extensionFontSize = this.extensionFontSize * (iconDim / 100);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.file) {
      this.loaded = false;
    }
  }

  public previewLoaded() {
    this.loaded = true;
  }

  public previewError() {
    this.loaded = true;
  }

  public updateActionVisibility() {
    this.actionsComponent.updateActionVisibility();
    this._cdRef.markForCheck();
  }

}
