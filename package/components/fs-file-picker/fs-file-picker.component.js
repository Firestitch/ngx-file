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
var services_1 = require("../../services");
var fs_file_drag_base_1 = require("../fs-file-drag-base");
var FsFilePickerComponent = (function (_super) {
    __extends(FsFilePickerComponent, _super);
    function FsFilePickerComponent(fsFile, el) {
        var _this = _super.call(this, el) || this;
        _this.fsFile = fsFile;
        _this.el = el;
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.select = new core_1.EventEmitter();
        _this.instruction = 'Drag & Drop your file or use the button below';
        return _this;
    }
    Object.defineProperty(FsFilePickerComponent.prototype, "multiple", {
        set: function (value) {
            this.fsFile.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "accept", {
        set: function (value) {
            this.fsFile.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "minSize", {
        set: function (value) {
            this.fsFile.minSize = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FsFilePickerComponent.prototype, "maxSize", {
        set: function (value) {
            this.fsFile.maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageMaxWidth", {
        set: function (value) {
            this.fsFile.imageMaxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageMaxHeight", {
        set: function (value) {
            this.fsFile.imageMaxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageQuality", {
        set: function (value) {
            this.fsFile.imageQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageFormat", {
        set: function (value) {
            this.fsFile.imageFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "disabled", {
        set: function (value) {
            this.fsFile.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    FsFilePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fsFile.initForElement(this.fileInput);
        this.fsFile.initDragNDropForElement(this.el);
        this.fsFile.select.subscribe(function (file) {
            _this.file = file;
            _this.select.emit(file);
        });
    };
    FsFilePickerComponent.prototype.removeFile = function (file) {
        this.file = void 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "multiple", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "accept", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "minSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "maxSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageMaxWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageMaxHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageQuality", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageFormat", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.Output('select'),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "select", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "fileInput", void 0);
    FsFilePickerComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-picker',
            templateUrl: 'fs-file-picker.component.html',
            styleUrls: ['fs-file-picker.component.css'],
            providers: [services_1.FsFileService]
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, core_1.ElementRef])
    ], FsFilePickerComponent);
    return FsFilePickerComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFilePickerComponent = FsFilePickerComponent;
//# sourceMappingURL=fs-file-picker.component.js.map