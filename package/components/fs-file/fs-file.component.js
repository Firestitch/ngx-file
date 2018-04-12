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
var fs_file_drag_base_1 = require("../fs-file-drag-base");
var classes_1 = require("../../classes");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var lodash_1 = require("lodash");
var FsFileComponent = (function (_super) {
    __extends(FsFileComponent, _super);
    function FsFileComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.el = el;
        _this._inputProcessor = new classes_1.InputProcessor();
        _this._accept = [];
        _this._processOptions = {
            width: void 0,
            height: void 0,
            quality: 1,
        };
        _this._autoProcess = false;
        var fileProcessor = new classes_1.FileProcessor();
        _this.select = _this._inputProcessor.select.pipe(operators_1.switchMap(function (files) {
            if (_this._multiple && !lodash_1.isArray(files)) {
                files = [files];
            }
            if (_this._autoProcess) {
                return fileProcessor.process(files, _this._processOptions);
            }
            else {
                return of_1.of(files);
            }
        }));
        return _this;
        // this.select = this.fsFile.select;
    }
    Object.defineProperty(FsFileComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            // TODO This should be a helper function in @firestitch/common
            if (typeof (value) === 'boolean') {
                this._multiple = value;
            }
            else {
                this._multiple = value === 'true';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "accept", {
        get: function () {
            return this._accept.join(', ') || '*';
        },
        set: function (value) {
            this._accept = this._accept.concat(value.split(','));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageWidth", {
        set: function (value) {
            if (value !== void 0) {
                this._processOptions.width = +value;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageHeight", {
        set: function (value) {
            if (value !== void 0) {
                this._processOptions.height = +value;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageQuality", {
        set: function (value) {
            var val = parseFloat(value);
            if (!isNaN(val)) {
                this._processOptions.quality = val;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    FsFileComponent.prototype.ngOnInit = function () {
        this._inputProcessor.initForElement(this.fileInput);
        this._inputProcessor.initDragNDropForElement(this.el);
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
    ], FsFileComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageQuality", null);
    __decorate([
        core_1.Output('select'),
        __metadata("design:type", core_1.EventEmitter)
    ], FsFileComponent.prototype, "select", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FsFileComponent.prototype, "fileInput", void 0);
    FsFileComponent = __decorate([
        core_1.Component({
            selector: 'fs-file',
            templateUrl: './fs-file.component.html',
            styles: [':host label { cursor: pointer }']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsFileComponent);
    return FsFileComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFileComponent = FsFileComponent;
//# sourceMappingURL=fs-file.component.js.map