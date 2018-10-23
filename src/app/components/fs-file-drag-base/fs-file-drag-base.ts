import {Component, ElementRef, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'fs-file-drag-base',
  template: ''
})
export class FsFileDragBaseComponent {

  constructor(public el: ElementRef) {
  }

  @HostBinding('class.dragover') public fileOverTarget = false;

  @HostListener('dragenter', ['$event'])
  public onDragOverElement(event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.fileOverTarget = true;
    }
  }

  @HostListener('window:drop', ['$event'])
  public onDrop(event) {
    if (this.fileOverTarget) {
      event.preventDefault();
      event.stopPropagation();
      this.fileOverTarget = false;
    }
  }

  @HostListener('window:dragover', ['$event'])
  public onDragOver(event) {
    if (this.fileOverTarget) {
      event.preventDefault();
      event.stopPropagation();

      if (!this.el.nativeElement.contains(event.target)) {
        this.fileOverTarget = false;
      }
    }
  }
}
