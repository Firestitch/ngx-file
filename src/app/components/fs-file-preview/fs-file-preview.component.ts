import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
} from '@angular/core';

import { FsFilePreviewActionDirective } from '../../directives';
import { FsFile } from '../../models';


@Component({
  selector: 'fs-file-preview',
  templateUrl: './fs-file-preview.component.html',
  styleUrls: ['./fs-file-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFilePreviewComponent implements OnInit, OnChanges {

  @ContentChildren(FsFilePreviewActionDirective)
  public actions: QueryList<FsFilePreviewActionDirective>;

  @Input() public showFilename = true;
  @Input() public previewWidth: number = 150;
  @Input() public previewHeight: number = 150;
  @Input() public file: FsFile;
  @Input() public url: string;
  @Input() public showActionOn: 'hover' | 'always' = 'always';

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

  public previewLoaded() {
    this.loaded = true;
  }

  public previewError() {
    this.loaded = true;
  }

}
