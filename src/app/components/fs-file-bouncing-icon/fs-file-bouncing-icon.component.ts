import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'fs-file-bouncing-icon',
  templateUrl: './fs-file-bouncing-icon.component.html',
  styleUrls: ['./fs-file-bouncing-icon.component.scss']
})
export class FsFileBouncingIconComponent implements OnInit {

  @Input() public icon: string = null;
  @Input() public size = '70px';
  @Input() public color: string = null;

  constructor() { }

  public ngOnInit() {

  }

}
