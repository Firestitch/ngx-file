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
var FsFilePreviewsBaseComponent = (function () {
    function FsFilePreviewsBaseComponent() {
        this.actions = [];
        this.actionsTemplate = [];
    }
    Object.defineProperty(FsFilePreviewsBaseComponent.prototype, "actionsParams", {
        set: function (val) {
            var actions = val.toArray().map(function (action, index) {
                var newAction = Object.assign({}, action);
                newAction.index = index;
                if (newAction.forTypes && !Array.isArray(newAction.forTypes)) {
                    newAction.forTypes = newAction.forTypes.split(',').map(function (type) { return type.trim(); });
                }
                return newAction;
            });
            (_a = this.actions).push.apply(_a, actions);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePreviewsBaseComponent.prototype, "actionsTemplateRefs", {
        set: function (val) {
            (_a = this.actionsTemplate).push.apply(_a, val.toArray());
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChildren(directives_1.FsFilePreviewActionDirective),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], FsFilePreviewsBaseComponent.prototype, "actionsParams", null);
    __decorate([
        core_1.ContentChildren(directives_1.FsFilePreviewActionDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], FsFilePreviewsBaseComponent.prototype, "actionsTemplateRefs", null);
    FsFilePreviewsBaseComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-previews-base'
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewsBaseComponent);
    return FsFilePreviewsBaseComponent;
}());
exports.FsFilePreviewsBaseComponent = FsFilePreviewsBaseComponent;
//# sourceMappingURL=fs-file-preview-base.js.map