"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var FsFile = (function () {
    function FsFile(file, options) {
        this.progress = false;
        this.exifInfo = {};
        this.file = file;
        if (options) {
            this.fileOptions = Object.assign({}, options);
        }
    }
    Object.defineProperty(FsFile.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (value) {
            this._file = value;
            this.name = value.name;
            this.size = value.size;
            this.type = value.type;
            var parts = value.name.split('.');
            if (parts.length > 1) {
                this.extension = parts[parts.length - 1];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "fileOptions", {
        get: function () {
            return this._fileOptions;
        },
        set: function (value) {
            this._fileOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "typeImage", {
        get: function () {
            return helpers_1.isImageType(this.type);
        },
        enumerable: true,
        configurable: true
    });
    FsFile.prototype.parseInfo = function (info) {
        this.imageWidth = info.width;
        this.imageHeight = info.height;
        this.exifInfo = info.exif;
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