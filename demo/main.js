webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"attempts\":0,\"debug\":false,\"root\":null,\"includeRoot\":false}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".file-info-container .file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding-top: 10px;\n}\n\n.file-info-container .file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 5px;\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(119, 119, 119, .5);\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5px;\n  left: 5px;\n}\n\n.actions .action.top-right {\n  top: 5px;\n  right: 5px;\n}\n\n.actions .action.bottom-left {\n  bottom: 5px;\n  left: 5px;\n}\n\n.actions .action.bottom-right {\n  bottom: 5px;\n  right: 5px;\n}\n\n.actions .action.mat-mini-fab {\n  width: 30px;\n  height: 30px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-queue/fs-file-queue-preview/src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-queue-preview.component.scss"],"names":[],"mappings":"AAAA;EAGI,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;CCDH;;ADIC;EACE,oBAAA;EACA,iBAAA;EACA,wBAAA;EACA,aAAA;CCDH;;ADKD;EACE,mBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;EACA,oCAAA;CCFD;;ADIC;EACE,mBAAA;EACA,gBAAA;CCDH;;ADDC;EAKI,SAAA;EACA,UAAA;CCAL;;ADfD;EAmBM,SAAA;EACA,WAAA;CCAL;;ADpBD;EAwBM,YAAA;EACA,UAAA;CCAL;;ADhBC;EAoBI,YAAA;EACA,WAAA;CCAL;;ADrBC;EAyBI,YAAA;EACA,aAAA;EACA,6BAAA;CCAL;;ADpCD;EAuCQ,eAAA;EACA,6BAAA;CCCP;;ADKD;EAEI,WAAA;EACA,6BAAA;CCHH;;ADMC;EACE,mBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCHH","file":"fs-file-queue-preview.component.scss","sourcesContent":[".file-info-container {\n\n  .file-ext {\n    font-weight: bold;\n    text-align: center;\n    text-transform: uppercase;\n    padding-top: 10px;\n  }\n\n  .file-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 5px;\n  }\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(119, 119, 119, 0.5);\n\n  .action {\n    position: absolute;\n    cursor: pointer;\n\n    &.top-left {\n      top: 5px;\n      left: 5px;\n    }\n\n    &.top-right {\n      top: 5px;\n      right: 5px;\n    }\n\n    &.bottom-left {\n      bottom: 5px;\n      left: 5px;\n    }\n\n    &.bottom-right {\n      bottom: 5px;\n      right: 5px;\n    }\n\n    &.mat-mini-fab {\n      width: 30px;\n      height: 30px;\n      line-height: 15px !important;\n\n      .mat-button-wrapper {\n        padding: 4px 0;\n        line-height: 15px !important;\n      }\n    }\n  }\n}\n\n:host ::ng-deep {\n  .mat-button-wrapper {\n    padding: 0;\n    line-height: 15px !important;\n  }\n\n  .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -25%;\n  }\n}\n",".file-info-container .file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding-top: 10px;\n}\n\n.file-info-container .file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 5px;\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(119, 119, 119, 0.5);\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5px;\n  left: 5px;\n}\n\n.actions .action.top-right {\n  top: 5px;\n  right: 5px;\n}\n\n.actions .action.bottom-left {\n  bottom: 5px;\n  left: 5px;\n}\n\n.actions .action.bottom-right {\n  bottom: 5px;\n  right: 5px;\n}\n\n.actions .action.mat-mini-fab {\n  width: 30px;\n  height: 30px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-queue/fs-file-queue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  position: relative;\n  display: block;\n}\n\n.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 2px #a0a0a0 solid;\n  vertical-align: top;\n}\n\n.preview:hover .actions {\n  display: block;\n}\n\n.preview img {\n  display: block;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-queue/src/components/fs-file-queue/fs-file-queue.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-queue.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;CCCD;;ADED;EACE,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,0BAAA;EACA,oBAAA;CCCD;;ADND;EASM,eAAA;CCCL;;ADGC;EACE,eAAA;CCAH","file":"fs-file-queue.component.scss","sourcesContent":[".queue {\n  position: relative;\n  display: block;\n}\n\n.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 2px #a0a0a0 solid;\n  vertical-align: top;\n\n  &:hover {\n    .actions {\n      display: block;\n    }\n  }\n\n  img {\n    display: block;\n  }\n}\n",".queue {\n  position: relative;\n  display: block;\n}\n\n.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 2px #a0a0a0 solid;\n  vertical-align: top;\n}\n\n.preview:hover .actions {\n  display: block;\n}\n\n.preview img {\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/image-file-manipulation/image-file-manipulation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  margin-top: 10px;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/image-file-manipulation.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;CACD","file":"image-file-manipulation.component.css","sourcesContent":[".queue {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/multiple-file-select/multiple-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  margin-top: 15px;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/multiple-file-select.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;CACD","file":"multiple-file-select.component.css","sourcesContent":[".queue {\n  margin-top: 15px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/single-file-select/single-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"single-file-select.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Image container -->\n<ng-container *ngIf=\"file.typeImage; else nonImage\">\n  <img [src]=\"file.preview\" *ngIf=\"file.preview && !file.progress && file.typeImage; else dummyImage\">\n  <ng-template #dummyImage>\n    <img src=\"/assets/image.png\" [width]=\"previewWidth\" [height]=\"previewHeight\">\n    <mat-spinner class=\"spinner\" *ngIf=\"file.progress\" [diameter]=\"previewWidth/2\"></mat-spinner>\n  </ng-template>\n</ng-container>\n\n<!-- Non image container -->\n<ng-template #nonImage>\n  <div class=\"file-info-container\" [style.width.px]=\"previewWidth\" [style.height.px]=\"previewHeight\">\n    <div class=\"file-ext\">{{file.extension}}</div>\n    <div class=\"file-name\" [matTooltip]=\"file.name\">{{file.name}}</div>\n  </div>\n  <mat-spinner class=\"spinner\" *ngIf=\"file.progress\" [diameter]=\"previewWidth/2\"></mat-spinner>\n</ng-template>\n\n<!-- Actions -->\n<div class=\"actions\">\n  <button class=\"action\" mat-mini-fab color=\"primary\"\n          *ngFor=\"let action of filteredActions\"\n          [ngClass]=\"getActionClasses(action)\"\n          [matTooltip]=\"action.tooltip\"\n          (click)=\"callAction(action)\">\n    <ng-template [ngTemplateOutlet]=\"actionsTemplate[action.index]\"></ng-template>\n  </button>\n</div>\n"

/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true,\"absolute\":false,\"fail\":false,\"silent\":false,\"keepQuery\":false,\"attempts\":0,\"debug\":false,\"root\":null,\"includeRoot\":false}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fs_file_1 = __webpack_require__("../src/models/fs-file.ts");
var FsFileQueuePreviewComponent = (function () {
    function FsFileQueuePreviewComponent() {
        this.deleted = new core_1.EventEmitter();
        this.filteredActions = [];
    }
    FsFileQueuePreviewComponent.prototype.ngOnInit = function () {
        this.cleanActions();
        if (!this.previewWidth) {
            this.previewWidth = this.file.previewWidth || 100;
        }
        if (!this.previewHeight) {
            this.previewHeight = this.file.previewHeight || 100;
        }
    };
    FsFileQueuePreviewComponent.prototype.getActionClasses = function (action) {
        if (action.placement) {
            return [action.placement];
        }
        else {
            return [];
        }
    };
    FsFileQueuePreviewComponent.prototype.callAction = function (action) {
        switch (action.action) {
            case 'remove':
                {
                    this.deleted.emit(this.file);
                }
                break;
            default: {
                if (action.click) {
                    action.click.emit(this.file);
                }
            }
        }
    };
    FsFileQueuePreviewComponent.prototype.cleanActions = function () {
        for (var action in this.actions) {
            if (this.actions.hasOwnProperty(action) && this.actions[action].forTypes) {
                // save original type
                var _a = this.file.type.split('/'), originalFileType = _a[0], originalContentType = _a[1];
                var types = this.actions[action].forTypes;
                // Looking for allowed type
                for (var i = 0; i < types.length; i++) {
                    var _b = types[i].split('/'), fileType = _b[0], contentType = _b[1];
                    var allowed = fileType === originalFileType && (contentType === originalContentType || contentType === '*');
                    if (allowed) {
                        this.filteredActions.push(this.actions[action]);
                        break;
                    }
                }
            }
            else {
                this.filteredActions.push(this.actions[action]);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueuePreviewComponent.prototype, "actions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueuePreviewComponent.prototype, "actionsTemplate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", fs_file_1.FsFile)
    ], FsFileQueuePreviewComponent.prototype, "file", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueuePreviewComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueuePreviewComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFileQueuePreviewComponent.prototype, "deleted", void 0);
    FsFileQueuePreviewComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-queue-preview',
            template: __webpack_require__("../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.html"),
            styles: [__webpack_require__("../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsFileQueuePreviewComponent);
    return FsFileQueuePreviewComponent;
}());
exports.FsFileQueuePreviewComponent = FsFileQueuePreviewComponent;


/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue-preview/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-queue/fs-file-queue-preview/fs-file-queue-preview.component.ts"));


/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file-queue-preview\n  *ngFor=\"let file of files\"\n  [file]=\"file\"\n  [actions]=\"actions\"\n  [actionsTemplate]=\"actionsTemplate\"\n  [previewWidth]=\"previewWidth\"\n  [previewHeight]=\"previewHeight\"\n  (deleted)=\"removeFile($event)\"\n  class=\"preview\">\n</fs-file-queue-preview>\n"

/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-queue/fs-file-queue.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-file-queue/fs-file-queue.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var directives_1 = __webpack_require__("../src/directives/index.ts");
var FsFileQueueComponent = (function () {
    function FsFileQueueComponent() {
        this.queue = true;
    }
    Object.defineProperty(FsFileQueueComponent.prototype, "actionsParams", {
        set: function (val) {
            this.actions = val.toArray().map(function (action, index) {
                var newAction = Object.assign({}, action);
                newAction.index = index;
                if (newAction.forTypes && !Array.isArray(newAction.forTypes)) {
                    newAction.forTypes = newAction.forTypes.split(',').map(function (type) { return type.trim(); });
                }
                return newAction;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileQueueComponent.prototype, "actionsTemplateRefs", {
        set: function (val) {
            this.actionsTemplate = val.toArray();
        },
        enumerable: true,
        configurable: true
    });
    FsFileQueueComponent.prototype.ngOnInit = function () {
    };
    FsFileQueueComponent.prototype.removeFile = function (file) {
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueueComponent.prototype, "files", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueueComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileQueueComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.HostBinding('class.queue'),
        __metadata("design:type", Object)
    ], FsFileQueueComponent.prototype, "queue", void 0);
    __decorate([
        core_1.ContentChildren(directives_1.FsFileQueueActionDirective),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], FsFileQueueComponent.prototype, "actionsParams", null);
    __decorate([
        core_1.ContentChildren(directives_1.FsFileQueueActionDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], FsFileQueueComponent.prototype, "actionsTemplateRefs", null);
    FsFileQueueComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-queue',
            template: __webpack_require__("../src/components/fs-file-queue/fs-file-queue.component.html"),
            styles: [__webpack_require__("../src/components/fs-file-queue/fs-file-queue.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FsFileQueueComponent);
    return FsFileQueueComponent;
}());
exports.FsFileQueueComponent = FsFileQueueComponent;


/***/ }),

/***/ "../src/components/fs-file-queue/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-queue/fs-file-queue.component.ts"));
__export(__webpack_require__("../src/components/fs-file-queue/fs-file-queue-preview/index.ts"));


/***/ }),

/***/ "../src/components/fs-file/fs-file.component.html":
/***/ (function(module, exports) {

module.exports = "<label [for]=\"uniqId\" (click)=\"fileInput.click()\">\n  <ng-content></ng-content>\n</label>\n<input type=\"file\" style=\"display: none\"\n       [id]=\"uniqId\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n"

/***/ }),

/***/ "../src/components/fs-file/fs-file.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var services_1 = __webpack_require__("../src/services/index.ts");
var common_1 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var FsFileComponent = (function () {
    function FsFileComponent(fsFile, fsUtil) {
        this.fsFile = fsFile;
        this.fsUtil = fsUtil;
        this.imageFixOrientation = true;
        this.uniqId = this.fsUtil.guid();
        this.selected = this.fsFile.selected;
    }
    Object.defineProperty(FsFileComponent.prototype, "multiple", {
        set: function (value) {
            this.fsFile.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "accept", {
        set: function (value) {
            this.fsFile.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "minSize", {
        set: function (value) {
            this.fsFile.minSize = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FsFileComponent.prototype, "maxSize", {
        set: function (value) {
            this.fsFile.maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageMaxWidth", {
        set: function (value) {
            this.fsFile.imageMaxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageMaxHeight", {
        set: function (value) {
            this.fsFile.imageMaxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageQuality", {
        set: function (value) {
            this.fsFile.imageQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageFormat", {
        set: function (value) {
            this.fsFile.imageFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "disabled", {
        set: function (value) {
            this.fsFile.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "preview", {
        set: function (value) {
            this.fsFile.preview = value;
        },
        enumerable: true,
        configurable: true
    });
    FsFileComponent.prototype.ngOnInit = function () {
        this.fsFile.initForElement(this.fileInput);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "multiple", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "accept", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "minSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "maxSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageMaxWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageMaxHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageQuality", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageFormat", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "preview", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileComponent.prototype, "imageFixOrientation", void 0);
    __decorate([
        core_1.Output('selected'),
        __metadata("design:type", core_1.EventEmitter)
    ], FsFileComponent.prototype, "selected", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FsFileComponent.prototype, "fileInput", void 0);
    FsFileComponent = __decorate([
        core_1.Component({
            selector: 'fs-file',
            providers: [services_1.FsFileService],
            template: __webpack_require__("../src/components/fs-file/fs-file.component.html")
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, common_1.FsUtil])
    ], FsFileComponent);
    return FsFileComponent;
}());
exports.FsFileComponent = FsFileComponent;


/***/ }),

/***/ "../src/components/fs-file/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file/fs-file.component.ts"));


/***/ }),

/***/ "../src/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file/index.ts"));
__export(__webpack_require__("../src/components/fs-file-queue/index.ts"));


/***/ }),

/***/ "../src/directives/fs-file-queue-action.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsFileQueueActionDirective = (function () {
    function FsFileQueueActionDirective() {
        this.index = null;
        this.click = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFileQueueActionDirective.prototype, "placement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFileQueueActionDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFileQueueActionDirective.prototype, "action", void 0);
    __decorate([
        core_1.Input('for-types'),
        __metadata("design:type", Object)
    ], FsFileQueueActionDirective.prototype, "forTypes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFileQueueActionDirective.prototype, "click", void 0);
    FsFileQueueActionDirective = __decorate([
        core_1.Directive({
            selector: '[fs-file-queue-action]'
        })
    ], FsFileQueueActionDirective);
    return FsFileQueueActionDirective;
}());
exports.FsFileQueueActionDirective = FsFileQueueActionDirective;


/***/ }),

/***/ "../src/directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/directives/fs-file-queue-action.directive.ts"));


/***/ }),

/***/ "../src/fs-component.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var common_2 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var components_1 = __webpack_require__("../src/components/index.ts");
var directives_1 = __webpack_require__("../src/directives/index.ts");
var FsFileModule = (function () {
    function FsFileModule() {
    }
    FsFileModule_1 = FsFileModule;
    FsFileModule.forRoot = function () {
        return {
            ngModule: FsFileModule_1,
            providers: []
        };
    };
    FsFileModule = FsFileModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                common_2.FsCommonModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatButtonModule,
            ],
            exports: [
                components_1.FsFileComponent,
                components_1.FsFileQueueComponent,
                directives_1.FsFileQueueActionDirective,
            ],
            entryComponents: [],
            declarations: [
                components_1.FsFileComponent,
                components_1.FsFileQueueComponent,
                components_1.FsFileQueuePreviewComponent,
                directives_1.FsFileQueueActionDirective,
            ],
            providers: [],
        })
    ], FsFileModule);
    return FsFileModule;
    var FsFileModule_1;
}());
exports.FsFileModule = FsFileModule;


/***/ }),

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-component.module.ts"));
__export(__webpack_require__("../src/components/index.ts"));
__export(__webpack_require__("../src/services/index.ts"));
__export(__webpack_require__("../src/directives/index.ts"));


/***/ }),

/***/ "../src/models/fs-file.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FsFile = (function () {
    function FsFile(file) {
        this.progress = false;
        this.file = file;
    }
    Object.defineProperty(FsFile.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
            var parts = this._file.name.split('.');
            if (parts.length > 1) {
                this._ext = parts[parts.length - 1];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "name", {
        get: function () {
            return this.file.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "type", {
        get: function () {
            return this.file.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "size", {
        get: function () {
            return this.file.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "preview", {
        get: function () {
            return this._preview;
        },
        set: function (value) {
            this._preview = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "extension", {
        get: function () {
            return this._ext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "typeImage", {
        get: function () {
            return this.type.match(/^image/i);
        },
        enumerable: true,
        configurable: true
    });
    FsFile.prototype.parseInfo = function (info) {
        this.imageWidth = info.width;
        this.imageHeight = info.height;
    };
    FsFile.prototype.toJson = function () {
        return {
            file: this.file,
            name: this.name,
            type: this.type,
            size: this.size,
            progress: this.progress,
            preview: this.preview,
            extrension: this.extension,
            typeImage: this.typeImage,
            imageWidth: this.imageWidth,
            imageHeight: this.imageHeight,
            previewWidth: this.previewWidth,
            previewHeight: this.previewHeight,
        };
    };
    return FsFile;
}());
exports.FsFile = FsFile;


/***/ }),

/***/ "../src/services/fs-component.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FileAPI = __webpack_require__("../node_modules/fileapi/dist/FileAPI.js");
var fs_file_1 = __webpack_require__("../src/models/fs-file.ts");
var PROCESSORS = {
    0: 'imageInfo',
    1: 'imageType',
    2: 'imageQuality',
};
function processors(list) {
    var _i, list_1, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, list_1 = list;
                _a.label = 1;
            case 1:
                if (!(_i < list_1.length)) return [3 /*break*/, 4];
                item = list_1[_i];
                return [4 /*yield*/, item];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var FsFileService = (function () {
    function FsFileService() {
        this.selected = new core_1.EventEmitter();
        this._options = {
            disabled: false,
            multiple: false,
            preview: false,
            previewSizes: { width: null, height: null },
            accept: [],
            minSize: void 0,
            maxSize: void 0,
            imageMaxWidth: void 0,
            imageMaxHeight: void 0,
            imageQuality: void 0,
            imageFormat: void 0,
        };
    }
    Object.defineProperty(FsFileService.prototype, "multiple", {
        get: function () {
            return this._options.multiple;
        },
        set: function (value) {
            if (typeof (value) === 'boolean') {
                this._options.multiple = value;
            }
            else {
                this._options.multiple = value === 'true';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "accept", {
        get: function () {
            return this._options.accept.join(', ') || '*';
        },
        set: function (value) {
            this._options.accept = this._options.accept.concat(value.split(','));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "minSize", {
        set: function (value) {
            if (value !== void 0) {
                this._options.minSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "maxSize", {
        set: function (value) {
            if (value !== void 0) {
                this._options.maxSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageMaxWidth", {
        set: function (value) {
            if (value !== void 0) {
                this._options.imageMaxWidth = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageMaxHeight", {
        set: function (value) {
            if (value !== void 0) {
                this._options.imageMaxHeight = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageQuality", {
        set: function (value) {
            var val = parseFloat(value);
            if (!isNaN(val)) {
                this._options.imageQuality = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageFormat", {
        set: function (value) {
            if (['jpg', 'png'].indexOf(value) > -1) {
                this._options.imageFormat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "disabled", {
        get: function () {
            return this._options.disabled;
        },
        set: function (value) {
            this._options.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "preview", {
        set: function (value) {
            if (typeof (value) === 'boolean' || value === 'true') {
                this._options.preview = value;
                this._options.previewSizes.width = 100;
                this._options.previewSizes.height = 100;
            }
            else if (typeof value == 'string' || value instanceof String) {
                var _a = value.split('x').map(function (val) { return +val; }), width = _a[0], height = _a[1];
                this._options.preview = true;
                if (width && height) {
                    this._options.previewSizes.width = width;
                    this._options.previewSizes.height = height;
                }
                else if (width && !height) {
                    this._options.previewSizes.width = width;
                    this._options.previewSizes.height = width;
                }
                else if (height && !width) {
                    this._options.previewSizes.width = height;
                    this._options.previewSizes.height = height;
                }
                else {
                    this._options.preview = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize service for target element
     * @param el
     */
    FsFileService.prototype.initForElement = function (el) {
        this.el = el.nativeElement;
        this.onChanges();
    };
    /**
     * Fire when input was changed
     */
    FsFileService.prototype.onChanges = function () {
        var _this = this;
        FileAPI.event.on(this.el, 'change', function (event) {
            var files = FileAPI.getFiles(event);
            // Clear input value
            _this.el.value = null;
            _this.filterFiles(files).then(function (result) {
                if (result.files && result.files.length > 0) {
                    _this.processFiles(result.files);
                }
            });
        });
    };
    /**
     * Process uploaded files
     * @param files
     */
    FsFileService.prototype.processFiles = function (files) {
        var _this = this;
        files = files.map(function (f) {
            var file = new fs_file_1.FsFile(f);
            file.previewWidth = _this._options.previewSizes.width;
            file.previewHeight = _this._options.previewSizes.height;
            return file;
        });
        this.selected.next(files);
        var processedFiles = [];
        files.forEach(function (file) {
            if (/^image/.test(file.type)) {
                var processorsIter_1 = processors(Object.keys(PROCESSORS));
                var resFilePromise = new Promise(function (resolve, reject) {
                    _this.applyProcessors(file, processorsIter_1, resolve, reject);
                });
                processedFiles.push(resFilePromise);
            }
            else {
                processedFiles.push(file);
            }
        });
        Promise.all(processedFiles).then(function (resFiles) {
            if (_this._options.preview) {
                resFiles
                    .filter(function (file) { return file.typeImage; })
                    .forEach(function (file) {
                    _this.generateFilePreview(file);
                });
            }
        });
    };
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    FsFileService.prototype.generateFilePreview = function (file) {
        FileAPI.Image(file.file)
            .preview(this._options.previewSizes.width, this._options.previewSizes.height)
            .get(function (err, img) {
            FileAPI.readAsDataURL(img, function (event) {
                if (event.type === 'load') {
                    file.preview = event.result;
                    file.progress = false;
                }
            });
        });
    };
    /**
     * Filter files
     * @param rawFiles
     * @returns {Subject<any>}
     */
    FsFileService.prototype.filterFiles = function (rawFiles) {
        var _this = this;
        return new Promise(function (resolve) {
            FileAPI.filterFiles(rawFiles, function (file, info) {
                var sizeRule = void 0;
                if (/^image/.test(file.type)) {
                    sizeRule = _this.checkResolutionRule(info);
                }
                else {
                    sizeRule = true;
                }
                var fileSize = _this.checkSize(file);
                return (sizeRule !== void 0 ? sizeRule : true) && fileSize;
            }, function (files, rejected) {
                resolve({ files: files, rejected: rejected });
            });
        });
    };
    /**
     * Check file resolution restrictions
     * @param info
     * @returns {boolean}
     */
    FsFileService.prototype.checkResolutionRule = function (info) {
        if (this._options.imageMaxWidth && this._options.imageMaxHeight) {
            return info.width <= this._options.imageMaxWidth && info.height <= this._options.imageMaxHeight;
        }
        else if (this._options.imageMaxWidth) {
            return info.width <= this._options.imageMaxWidth;
        }
        else if (this._options.imageMaxHeight) {
            return info.height <= this._options.imageMaxHeight;
        }
        else {
            return true;
        }
    };
    /**
     * Check filesize restrictions
     * @param file
     * @returns {boolean}
     */
    FsFileService.prototype.checkSize = function (file) {
        return (this._options.minSize !== void 0 ? file.size >= (this._options.minSize * FileAPI.KB) : true)
            && (this._options.maxSize !== void 0 ? file.size <= (this._options.maxSize * FileAPI.KB) : true);
    };
    /**
     * Change image format
     * @param originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.changeImageFormat = function (originFile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var image = FileAPI.Image(originFile.file);
            var fileType = (_this._options.imageFormat) ? 'image/' + _this._options.imageFormat : originFile.type;
            image.get(function (err, img) {
                if (!err) {
                    img.toDataUrl(function (blob) {
                        originFile.file = new File([blob], originFile.name, { type: fileType });
                        resolve(originFile);
                    }, fileType, _this._options.imageQuality || 1);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.getImageInfo = function (originFile) {
        return new Promise(function (resolve, reject) {
            FileAPI.getInfo(originFile.file, function (err, info) {
                if (!err) {
                    resolve(info);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Change image quality
     * @param originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.changeQuality = function (originFile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var image = FileAPI.Image(originFile.file);
            image.get(function (err, img) {
                if (!err) {
                    img.toBlob(function (blob) {
                        originFile.file = new File([blob], originFile.name, { type: originFile.type });
                        resolve(originFile);
                    }, originFile.type, _this._options.imageQuality || 1);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Process image file by sequence of available processors
     * @param file
     * @param processorsIter
     * @param resolve
     * @param reject
     */
    FsFileService.prototype.applyProcessors = function (file, processorsIter, resolve, reject) {
        var _this = this;
        var nextValue = processorsIter.next();
        if (!nextValue.done) {
            file.progress = true;
            switch (+nextValue.value) {
                case 0:
                    {
                        this.getImageInfo(file).then(function (result) {
                            file.parseInfo(result);
                            _this.applyProcessors(file, processorsIter, resolve, reject);
                        }).catch(function (error) {
                            reject(error);
                        });
                    }
                    break;
                case 1:
                    {
                        if (this._options.imageQuality !== void 0) {
                            this.changeQuality(file).then(function (resultFile) {
                                _this.applyProcessors(resultFile, processorsIter, resolve, reject);
                            }).catch(function (error) {
                                reject(error);
                            });
                        }
                        else {
                            this.applyProcessors(file, processorsIter, resolve, reject);
                        }
                    }
                    break;
                case 2:
                    {
                        if (this._options.imageFormat !== void 0) {
                            this.changeImageFormat(file).then(function (resultFile) {
                                _this.applyProcessors(resultFile, processorsIter, resolve, reject);
                            }).catch(function (error) {
                                reject(error);
                            });
                        }
                        else {
                            this.applyProcessors(file, processorsIter, resolve, reject);
                        }
                    }
                    break;
            }
        }
        else {
            file.progress = this._options.preview;
            resolve(file);
        }
    };
    FsFileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FsFileService);
    return FsFileService;
}());
exports.FsFileService = FsFileService;


/***/ }),

/***/ "../src/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/services/fs-component.service.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Files</h1>\n<div class=\"example\">\n    <fs-example title=\"Single File Select\" componentName=\"single-file-select\">\n        <single-file-select></single-file-select>\n    </fs-example>\n</div>\n\n<div class=\"example\">\n  <fs-example title=\"Multiple File Select\" componentName=\"multiple-file-select\">\n    <multiple-file-select></multiple-file-select>\n  </fs-example>\n</div>\n\n<div class=\"example\">\n  <fs-example title=\"Image File Manipulation\" componentName=\"multiple-file-select\">\n    <image-file-manipulation></image-file-manipulation>\n  </fs-example>\n</div>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/image-file-manipulation/image-file-manipulation.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.html":
/***/ (function(module, exports) {

module.exports = "Options/restrictions:\n<ul>\n  <li>Accept: <b>image/*</b></li>\n  <li>Multiple: <b>true</b></li>\n  <li>Reduce quality to: <b>0.1</b></li>\n  <li>Min size (KB): <b>100</b></li>\n  <li>Max size (KB): <b>3000</b></li>\n  <li>Max width: <b>2500</b></li>\n  <li>Max height: <b>2500</b></li>\n  <li>Preview: <b>200x200</b></li>\n</ul>\n<fs-file (selected)=\"selected($event)\"\n         accept=\"image/*\"\n         multiple=\"true\"\n         imageQuality=\".1\"\n         minSize=\"100\"\n         maxSize=\"3000\"\n         imageMaxWidth=\"2500\"\n         imageMaxHeight=\"2500\"\n         preview=\"200\"\n>\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fs-file-queue [files]=\"files\">\n  <ng-template fs-file-queue-action placement=\"top-right\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-queue-action\n               placement=\"bottom-right\"\n               (click)=\"enhance($event)\"\n               tooltip=\"Enhance\"\n               for-types=\"image/*\">\n    <mat-icon>brush</mat-icon>\n  </ng-template>\n  <ng-template fs-file-queue-action placement=\"bottom-left\" action=\"zoom\" tooltip=\"Zoom\" for-types=\"image/*\">\n    <mat-icon>search</mat-icon>\n  </ng-template>\n</fs-file-queue>\n\n<fieldset *ngIf=\"filesJsonInfo.length > 0\">\n  <legend>File</legend>\n  <pre>{{ filesJsonInfo | json }}</pre>\n</fieldset>\n"

/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var ImageFileManipulationComponent = (function () {
    function ImageFileManipulationComponent() {
        this.files = [];
        this.filesJsonInfo = [];
    }
    ImageFileManipulationComponent.prototype.selected = function (files) {
        (_a = this.files).push.apply(_a, files);
        (_b = this.filesJsonInfo).push.apply(_b, files.map(function (file) { return file.toJson(); }));
        var _a, _b;
    };
    ImageFileManipulationComponent.prototype.enhance = function (file) {
        console.log('enhance', file);
    };
    ImageFileManipulationComponent = __decorate([
        core_1.Component({
            selector: 'image-file-manipulation',
            template: __webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.html"),
            styles: [__webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.css")]
        })
    ], ImageFileManipulationComponent);
    return ImageFileManipulationComponent;
}());
exports.ImageFileManipulationComponent = ImageFileManipulationComponent;


/***/ }),

/***/ "./app/components/image-file-manipulation/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.ts"));


/***/ }),

/***/ "./app/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/single-file-select/index.ts"));
__export(__webpack_require__("./app/components/multiple-file-select/index.ts"));
__export(__webpack_require__("./app/components/image-file-manipulation/index.ts"));


/***/ }),

/***/ "./app/components/multiple-file-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.ts"));


/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/multiple-file-select/multiple-file-select.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file (selected)=\"selected($event)\" multiple=\"true\">\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fs-file-queue [files]=\"files\">\n  <ng-template fs-file-queue-action placement=\"top-right\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n</fs-file-queue>\n\n<fieldset *ngIf=\"filesJsonInfo.length > 0\">\n  <legend>File</legend>\n  <pre>{{ filesJsonInfo | json }}</pre>\n</fieldset>\n"

/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var MultipleFileSelectComponent = (function () {
    function MultipleFileSelectComponent() {
        this.files = [];
        this.filesJsonInfo = [];
    }
    MultipleFileSelectComponent.prototype.selected = function (files) {
        (_a = this.files).push.apply(_a, files);
        (_b = this.filesJsonInfo).push.apply(_b, files.map(function (file) { return file.toJson(); }));
        var _a, _b;
    };
    MultipleFileSelectComponent = __decorate([
        core_1.Component({
            selector: 'multiple-file-select',
            template: __webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.html"),
            styles: [__webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.css")]
        })
    ], MultipleFileSelectComponent);
    return MultipleFileSelectComponent;
}());
exports.MultipleFileSelectComponent = MultipleFileSelectComponent;


/***/ }),

/***/ "./app/components/single-file-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/single-file-select/single-file-select.component.ts"));


/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/single-file-select/single-file-select.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file (selected)=\"selected($event)\">\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fieldset *ngIf=\"file\">\n  <legend>File</legend>\n  <pre>{{ file.toJson() | json }}</pre>\n</fieldset>\n\n"

/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var SingleFileSelectComponent = (function () {
    function SingleFileSelectComponent() {
        this.file = void 0;
    }
    SingleFileSelectComponent.prototype.selected = function (files) {
        this.file = files[0];
    };
    SingleFileSelectComponent = __decorate([
        core_1.Component({
            selector: 'single-file-select',
            template: __webpack_require__("./app/components/single-file-select/single-file-select.component.html"),
            styles: [__webpack_require__("./app/components/single-file-select/single-file-select.component.css")]
        })
    ], SingleFileSelectComponent);
    return SingleFileSelectComponent;
}());
exports.SingleFileSelectComponent = SingleFileSelectComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var components_1 = __webpack_require__("./app/components/index.ts");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsFileModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent,
                components_1.SingleFileSelectComponent,
                components_1.MultipleFileSelectComponent,
                components_1.ImageFileManipulationComponent,
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map