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
var directives_1 = require("../../directives");
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
            templateUrl: 'fs-file-queue.component.html',
            styleUrls: ['fs-file-queue.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FsFileQueueComponent);
    return FsFileQueueComponent;
}());
exports.FsFileQueueComponent = FsFileQueueComponent;
//# sourceMappingURL=fs-file-queue.component.js.map