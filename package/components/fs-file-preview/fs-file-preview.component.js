"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var FileAPI = require("fileapi");
var models_1 = require("../../models");
var fs_file_preview_base_1 = require("../fs-file-preview-base");
var helpers_1 = require("../../helpers");
var FsFilePreviewComponent = (function (_super) {
    __extends(FsFilePreviewComponent, _super);
    function FsFilePreviewComponent() {
        var _this = _super.call(this) || this;
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.remove = new core_1.EventEmitter();
        _this.filteredActions = [];
        return _this;
    }
    Object.defineProperty(FsFilePreviewComponent.prototype, "_actions", {
        set: function (value) {
            (_a = this.actions).push.apply(_a, value);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePreviewComponent.prototype, "_actionsTemplate", {
        set: function (value) {
            (_a = this.actionsTemplate).push.apply(_a, value);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePreviewComponent.prototype, "_file", {
        set: function (file) {
            this.file = file;
            this.generateFilePreview(file);
        },
        enumerable: true,
        configurable: true
    });
    FsFilePreviewComponent.prototype.ngAfterViewInit = function () {
        this.cleanActions();
    };
    FsFilePreviewComponent.prototype.getActionClasses = function (action) {
        if (action.placement) {
            return [action.placement];
        }
        else {
            return [];
        }
    };
    FsFilePreviewComponent.prototype.callAction = function (action) {
        if (action.click) {
            action.click.emit(this.file);
        }
        if (action.action == 'remove') {
            this.remove.emit(this.file);
        }
    };
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    FsFilePreviewComponent.prototype.generateFilePreview = function (file) {
        var _this = this;
        if (file.url) {
            this.preview = file.url;
            return;
        }
        if (!this.file.typeImage) {
            return;
        }
        file.progress = true;
        FileAPI.Image.transform(file.file, [{
                width: this.previewWidth,
                height: this.previewHeight,
                preview: true,
            }], true, function (err, images) {
            if (!err && images[0]) {
                var scaledCanvasImage = helpers_1.ScaleExifImage(images[0], file.exifInfo.Orientation, _this.previewWidth, _this.previewHeight);
                _this.preview = scaledCanvasImage.toDataURL(file.type);
                file.progress = false;
            }
            else {
                alert("Image preview error for file " + file.name);
                file.progress = false;
            }
        });
    };
    FsFilePreviewComponent.prototype.cleanActions = function () {
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePreviewComponent.prototype, "_actions", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePreviewComponent.prototype, "_actionsTemplate", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.Input('file'),
        __metadata("design:type", models_1.FsFile),
        __metadata("design:paramtypes", [models_1.FsFile])
    ], FsFilePreviewComponent.prototype, "_file", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "remove", void 0);
    FsFilePreviewComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-preview',
            templateUrl: 'fs-file-preview.component.html',
            styleUrls: ['fs-file-preview.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewComponent);
    return FsFilePreviewComponent;
}(fs_file_preview_base_1.FsFilePreviewsBaseComponent));
exports.FsFilePreviewComponent = FsFilePreviewComponent;
//# sourceMappingURL=fs-file-preview.component.js.map