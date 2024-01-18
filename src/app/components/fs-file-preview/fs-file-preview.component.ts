import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';

import { isArray } from 'lodash-es';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';


@Component({
  selector: 'fs-file-preview',
  templateUrl: './fs-file-preview.component.html',
  styleUrls: ['./fs-file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent implements AfterContentInit, OnInit, OnChanges {

  @ContentChildren(FsFilePreviewActionDirective)
  public childrenPreviewActions: QueryList<FsFilePreviewActionDirective>;

  @Input() public previewActions: FsFilePreviewActionDirective[] = [];
  @Input() public showFilename = true;
  @Input() public previewWidth: number = 150;
  @Input() public previewHeight: number = 150;
  @Input() public file: FsFile;
  @Input() public url: string;
  @Input() public index: number;
  @Input() public showActionOn: 'hover' | 'always' = 'hover';

  @Output() public remove = new EventEmitter<{ event: MouseEvent; file: FsFile }>();

  public loaded = false;
  public iconDim = 100;
  public extensionFontSize = 20;

  public get typeImage(): boolean {
    return this.file?.typeImage && this.file?.exists;
  }

  public ngOnInit(): void {
    if (this.url) {
      this.file = new FsFile(this.url);
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

  public ngAfterContentInit() {
    this._cleanActions();
  }

  public previewLoaded() {
    this.loaded = true;
  }

  public previewError() {
    this.loaded = true;
  }

  public callAction($event: MouseEvent, previewAction: FsFilePreviewActionDirective) {
    if (previewAction.click.observers.length) {
      $event.stopImmediatePropagation();
      $event.stopPropagation();

      previewAction.click.emit({ event: $event, file: this.file, index: this.index });
    }

    if (previewAction.action === 'remove') {
      this.remove.emit({ event: $event, file: this.file });
    }
  }

  private _cleanActions() {
    this.previewActions
      .forEach((action) => {
        if (action.forTypes) {
          // save original type
          const [originalFileType, originalContentType] = this.file.type.split('/');
          const types: any = isArray(action.forTypes) ? action.forTypes : [action.forTypes];

          // Looking for allowed type
          for (let i = 0; i < types.length; i++) {
            const [fileType, contentType] = types[i].split('/');
            const allowed = fileType === originalFileType && (contentType === originalContentType || contentType === '*');

            if (!allowed) {
              action.hide = true;
              break;
            }
          }
        }
      });
  }
}
