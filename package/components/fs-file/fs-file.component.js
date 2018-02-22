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
var services_1 = require("../../services");
var common_1 = require("@firestitch/common");
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
            templateUrl: './fs-file.component.html'
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, common_1.FsUtil])
    ], FsFileComponent);
    return FsFileComponent;
}());
exports.FsFileComponent = FsFileComponent;
//# sourceMappingURL=fs-file.component.js.map