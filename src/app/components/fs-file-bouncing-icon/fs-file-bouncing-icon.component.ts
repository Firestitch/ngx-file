import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgStyle } from '@angular/common';


@Component({
    selector: 'fs-file-bouncing-icon',
    templateUrl: './fs-file-bouncing-icon.component.html',
    styleUrls: ['./fs-file-bouncing-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIcon, NgStyle],
})
export class FsFileBouncingIconComponent implements OnInit {

  @Input() public icon: string = null;
  @Input() public size = '70px';
  @Input() public color: string = null;

  constructor() { }

  public ngOnInit() {

  }

}
