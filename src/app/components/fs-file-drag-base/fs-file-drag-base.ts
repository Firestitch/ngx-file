import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  OnDestroy
} from '@angular/core';


@Component({
  selector: 'fs-file-drag-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsFileDragBaseComponent implements OnDestroy {
  private dragging = 0;
  private dragover = null;
  private drop = null;

  @HostBinding('class.dragover') public fileOverTarget = false;

  @HostListener('dragenter', ['$event'])
  public onDragOverElement(event) {

    if (!this.dragover && !this.drop) {
      this.dragover = this.onWindowDragOver.bind(this);
      this.drop = this.onWindowDrop.bind(this);
      window.addEventListener('dragover', this.dragover);
      window.addEventListener('drop', this.drop);
    }

    this.dragging++;
    this.fileOverTarget = true;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeaveElement(event) {
    this.dragging--;
    if (this.dragging === 0) {
      this.fileOverTarget = false;
    }
  }

  @HostListener('drop', ['$event'])
  public onDropElement(event: Event) {
    this.fileOverTarget = false;
  }

  // // Disable dropping files into th browser window ie file://...
  public onWindowDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.ngOnDestroy();
    this.dragging = 0;
    return false;
  }

  // // Disable dropping files into th browser window ie file://...
  public onWindowDragOver(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  public ngOnDestroy() {
    window.removeEventListener('dragover',this.dragover);
    window.removeEventListener('drop',this.drop);
    this.drop = null;
    this.dragover = null;
  }
}
