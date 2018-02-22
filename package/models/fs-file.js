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
//# sourceMappingURL=fs-file.js.map