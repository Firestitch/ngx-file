"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FsFile = (function () {
    function FsFile(file) {
        this.progress = false;
        this.file = file;
        this.name = file.name;
        this.size = file.size;
        this.type = file.type;
        var parts = this.file.name.split('.');
        if (parts.length > 1) {
            this.extension = parts[parts.length - 1];
        }
    }
    Object.defineProperty(FsFile.prototype, "typeImage", {
        get: function () {
            return !!this.type
                .match(/^image\/(gif|jpeg|pjpeg|png|svg\+xml|tiff|vnd\.microsoft\.icon|vnd\.wap\.wbmp|webp)/i);
        },
        enumerable: true,
        configurable: true
    });
    FsFile.prototype.parseInfo = function (info) {
        this.imageWidth = info.width;
        this.imageHeight = info.height;
    };
    FsFile.prototype.toObject = function () {
        return {
            name: this.name,
            type: this.type,
            size: this.size,
            progress: this.progress,
            extension: this.extension,
            typeImage: this.typeImage,
            imageWidth: this.imageWidth,
            imageHeight: this.imageHeight
        };
    };
    return FsFile;
}());
exports.FsFile = FsFile;
//# sourceMappingURL=fs-file.js.map