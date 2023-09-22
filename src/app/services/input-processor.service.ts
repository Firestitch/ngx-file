import { ElementRef, EventEmitter, Inject, Injectable, Optional } from '@angular/core';

import { Subject } from 'rxjs';

import * as FileAPI from 'fileapi';
import { FileClickHandler, FileClickInterceptor } from '../classes';
import { ClickInterceptor } from '../classes/click-interceptor';
import { FS_FILE_CLICK_INTERCEPTOR } from '../injectors';
import { FsFile } from '../models';


@Injectable()
export class InputProcessorService {

  public containerEl: any;
  public inputEl: HTMLInputElement;
  public multiple = false;
  public api: 'html5' | 'any' | 'cordova' = null;
  public capture: 'camera' | 'library';
  public disabled;
  public allowClick = true;
  public allowDrop = true;
  public select = new EventEmitter<FsFile | FsFile[]>();
  public clicked = new EventEmitter();

  private _accept = '*';
  private _acceptableTypes = new Map();
  private _acceptableExts = new Set();
  private _declinedFiles$ = new Subject<File[]>();

  constructor(
    @Optional() @Inject(FS_FILE_CLICK_INTERCEPTOR) private _clickInterceptors: FileClickInterceptor[],
  ) { }

  public get accept() {
    return this._accept;
  }

  public set accept(value) {
    value = value || '*';
    this._acceptableTypes.clear();
    this._acceptableExts.clear();
    this.parseAcceptTypes(value);

    this._accept = [
      ...Array.from(this._acceptableTypes)
        .reduce((accum, [key, values]) => {
          return [
            ...accum,
            ...Array.from(values)
              .map((value) => `${key}/${value}`),
          ];
        }, []),
      ...Array.from(this._acceptableExts).values(),
    ].join(',');
  }

  public get declinedFiles$() {
    return this._declinedFiles$.asObservable();
  }

  /**
   * Initialize service for target element
   * @param el
   */
  public registerInput(el: ElementRef) {
    if (!el) {
      return
    }

    this.inputEl = el.nativeElement;

    FileAPI.event.on(this.inputEl, 'change', (event) => {
      if (!this.allowClick) {
        return;
      }

      const files = FileAPI.getFiles(event);

      if (files) {
        this.selectFiles(files);
      }

      this.inputEl.value = null;
    });
  }

  public registerDrop(el: ElementRef) {
    if (!el) {
      return
    }

    this.containerEl = el.nativeElement;
    FileAPI.event.on(this.containerEl, 'drop', (event) => {

      if (!this.allowDrop) {
        return;
      }

      const files = FileAPI.getFiles(event);

      if (files) {
        this.selectFiles(files);
      }

      this.inputEl.value = null;

    });
  }

  public registerLabel(el: ElementRef) {
    if (!el) {
      return
    }

    FileAPI.event.on(el.nativeElement, 'click', (event) => {
      if (!this.allowClick) {
        return;
      }

      if (!event.defaultPrevented) {
        this.clicked.next(event);

        const interceptors: FileClickInterceptor[] = [
          ...this._clickInterceptors || [],
          new ClickInterceptor()
        ];

        const interceptorChain: FileClickHandler = interceptors.reduceRight(
          (next: FileClickHandler, interceptor: FileClickInterceptor) => new FileClickHandler(next, interceptor), null);

        interceptorChain.handle(event, this)
          .subscribe();
      }
    });
  }

  public isAcceptVideo() {
    return this.accept.match(/video/i) || this.accept === '*';
  }

  public isAcceptImage() {
    return this.accept.match(/image/i) || this.accept === '*';
  }

  public selectFiles(files: File[]) {
    const declinedFiles = [];
    const fsFiles = files
      .map((file) => new FsFile(file))
      .filter((file) => {
        const nameParts = file.name.split('.');
        let ext;
        if (nameParts && Array.isArray(nameParts)) {
          ext = nameParts[nameParts.length - 1];
        }

        ext = (ext + '').toLowerCase();
        const acceptableFile = this.checkAcceptableTypes(file.type, ext);

        if (!acceptableFile) {
          declinedFiles.push(file);
        }

        return acceptableFile;
      });

    if (declinedFiles.length > 0) {
      this._declinedFiles$.next(declinedFiles);
    }

    if (files.length === 1) {
      this.select.emit(fsFiles[0]);
    } else if (files.length > 0) {
      this.select.emit(fsFiles);
    }
  }

  /**
   * Check if file mimetype or extention is acceptable by @accept field
   * @param targetType
   * @param targetExt
   * @returns boolean
   */
  private checkAcceptableTypes(targetType, targetExt) {
    targetType = targetType.trim();
    const [type, ext] = targetType.split('/');
    const acceptableType = this._acceptableTypes.get(type);

    return this.accept === '*'
      || this.accept === '*/*'
      || (!!acceptableType && (acceptableType.has('*') || acceptableType.has(ext)))
      || this._acceptableExts.has(`.${targetExt}`);
  }

  /**
   * Parset and store acceptable types for feature filter
   * @param types
   */
  private parseAcceptTypes(value) {
    let types = [];
    if (typeof value === 'string') {
      types = value.split(/[,;]/);
    }

    if (!types.length) {
      return;
    }

    types = types
      .map((type) => type.trim());

    types.forEach((part) => {
      if (part === '*') {
        this._acceptableExts.add('*');
      } else if (part.indexOf('/') !== -1) {
        const [type, ext] = part.split('/');
        if (this._acceptableTypes.has(type)) {
          const existedType = this._acceptableTypes.get(type);

          if (!existedType.has(ext)) {
            existedType.add(ext);
          }
        } else {
          const extensions = new Set();
          this._acceptableTypes.set(type, extensions);
          extensions.add(ext);
        }
      } else if (part.indexOf('.') !== -1) {
        part = part.replace(/^\*/, '');
        if (!this._acceptableExts.has(part)) {
          this._acceptableExts.add(part);
        }
      } else if (part.match(/[a-z0-9]{3,4}/i)) {
        if (!this._acceptableExts.has(part)) {
          this._acceptableExts.add(`.${part}`);
        }
      }
    })
  }
}
