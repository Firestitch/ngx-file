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
var core_1 = require("@angular/core");
var fs_file_1 = require("../../../models/fs-file");
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
            templateUrl: 'fs-file-queue-preview.component.html',
            styleUrls: ['fs-file-queue-preview.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FsFileQueuePreviewComponent);
    return FsFileQueuePreviewComponent;
}());
exports.FsFileQueuePreviewComponent = FsFileQueuePreviewComponent;
//# sourceMappingURL=fs-file-queue-preview.component.js.map