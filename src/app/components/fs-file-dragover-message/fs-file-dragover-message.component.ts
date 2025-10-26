import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsFileBouncingIconComponent } from '../fs-file-bouncing-icon/fs-file-bouncing-icon.component';


@Component({
    selector: 'fs-file-dragover-message',
    templateUrl: './fs-file-dragover-message.component.html',
    styleUrls: ['./fs-file-dragover-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsFileBouncingIconComponent],
})
export class FsFileDragoverMessageComponent {

}
