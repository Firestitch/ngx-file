"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessConfig = (function () {
    // private _autoOrientation: boolean;
    // private _resize: boolean;
    function ProcessConfig(config) {
        if (config === void 0) { config = {}; }
        this.parseConfig(config);
    }
    Object.defineProperty(ProcessConfig.prototype, "width", {
        get: function () {
            return this._width;
        },
        // set minSize(value) {
        //   if (value !== void 0) {
        //     this._minSize = value;
        //   }
        // }
        //
        // set maxSize(value) {
        //   if (value !== void 0) {
        //     this._maxSize = value;
        //   }
        // }
        set: function (value) {
            if (value !== void 0) {
                this._width = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessConfig.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value !== void 0) {
                this._height = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessConfig.prototype, "quality", {
        get: function () {
            return this._quality;
        },
        set: function (value) {
            var val = parseFloat(value);
            if (!isNaN(val)) {
                this._quality = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProcessConfig.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (value) {
            if (['jpg', 'png'].indexOf(value) > -1) {
                this._format = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    // set autoOrientation(value) {
    //   this._autoOrientation = value;
    // }
    //
    // get autoOrientation() {
    //   return this._autoOrientation;
    // }
    // set resize(value) {
    //   if (typeof(value) === 'boolean') {
    //     this._resize = value;
    //   } else {
    //     this._resize = value === 'true';
    //   }
    // }
    //
    // get resize() {
    //   return this._resize;
    // }
    ProcessConfig.prototype.parseConfig = function (config) {
        // this.minSize = config.minSize;
        // this.maxSize = config.maxSize;
        // this.resize = config.resize;
        this.width = config.width;
        this.height = config.height;
        this.quality = config.quality;
        this.format = config.format;
        // this.autoOrientation = config.autoOrientation;
    };
    return ProcessConfig;
}());
exports.ProcessConfig = ProcessConfig;
//# sourceMappingURL=process-config.js.map