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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileAPI = require("fileapi");
var fs_file_1 = require("../models/fs-file");
var PROCESSORS = {
    0: 'imageInfo',
    1: 'imageType',
    2: 'imageQuality',
};
function processors(list) {
    var _i, list_1, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, list_1 = list;
                _a.label = 1;
            case 1:
                if (!(_i < list_1.length)) return [3 /*break*/, 4];
                item = list_1[_i];
                return [4 /*yield*/, item];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var FsFileService = (function () {
    function FsFileService() {
        this.select = new core_1.EventEmitter();
        this._options = {
            disabled: false,
            multiple: false,
            preview: false,
            accept: [],
            minSize: void 0,
            maxSize: void 0,
            imageMaxWidth: void 0,
            imageMaxHeight: void 0,
            imageQuality: void 0,
            imageFormat: void 0,
        };
    }
    Object.defineProperty(FsFileService.prototype, "multiple", {
        get: function () {
            return this._options.multiple;
        },
        set: function (value) {
            if (typeof (value) === 'boolean') {
                this._options.multiple = value;
            }
            else {
                this._options.multiple = value === 'true';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "accept", {
        get: function () {
            return this._options.accept.join(', ') || '*';
        },
        set: function (value) {
            this._options.accept = this._options.accept.concat(value.split(','));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "minSize", {
        set: function (value) {
            if (value !== void 0) {
                this._options.minSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "maxSize", {
        set: function (value) {
            if (value !== void 0) {
                this._options.maxSize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageMaxWidth", {
        set: function (value) {
            if (value !== void 0) {
                this._options.imageMaxWidth = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageMaxHeight", {
        set: function (value) {
            if (value !== void 0) {
                this._options.imageMaxHeight = +value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageQuality", {
        set: function (value) {
            var val = parseFloat(value);
            if (!isNaN(val)) {
                this._options.imageQuality = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "imageFormat", {
        set: function (value) {
            if (['jpg', 'png'].indexOf(value) > -1) {
                this._options.imageFormat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileService.prototype, "disabled", {
        get: function () {
            return this._options.disabled;
        },
        set: function (value) {
            this._options.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize service for target element
     * @param el
     */
    FsFileService.prototype.initForElement = function (el) {
        this.el = el.nativeElement;
        this.onChanges();
    };
    FsFileService.prototype.initDragNDropForElement = function (el) {
        this.containerEl = el.nativeElement;
        this.onDrop();
    };
    /**
     * Fire when input was changed
     */
    FsFileService.prototype.onChanges = function () {
        var _this = this;
        FileAPI.event.on(this.el, 'change', function (event) {
            var files = FileAPI.getFiles(event);
            // Clear input value
            _this.el.value = null;
            _this.filterFiles(files).then(function (result) {
                if (result.files && result.files.length > 0) {
                    _this.processFiles(result.files);
                }
            });
        });
    };
    /**
     * Fire when on root element was dropped file
     */
    FsFileService.prototype.onDrop = function () {
        var _this = this;
        FileAPI.event.on(this.containerEl, 'drop', function (event) {
            var files = FileAPI.getFiles(event);
            // Clear input value
            _this.el.value = null;
            _this.filterFiles(files).then(function (result) {
                if (result.files && result.files.length > 0) {
                    _this.processFiles(result.files);
                }
            });
        });
    };
    /**
     * Process uploaded files
     * @param files
     */
    FsFileService.prototype.processFiles = function (files) {
        var _this = this;
        files = files.map(function (f) {
            return new fs_file_1.FsFile(f);
        });
        this.select.next(this._options.multiple ? files : files[0]);
        var processedFiles = [];
        files.forEach(function (file) {
            if (file.typeImage) {
                var processorsIter_1 = processors(Object.keys(PROCESSORS));
                var resFilePromise = new Promise(function (resolve, reject) {
                    _this.applyProcessors(file, processorsIter_1, resolve, reject);
                });
                resFilePromise.then(function () { }, function (error) {
                    _this.alertImageProcessingError(error.file);
                });
            }
        });
    };
    /**
     * Filter files
     * @param rawFiles
     * @returns {Subject<any>}
     */
    FsFileService.prototype.filterFiles = function (rawFiles) {
        var _this = this;
        return new Promise(function (resolve) {
            FileAPI.filterFiles(rawFiles, function (file, info) {
                var sizeRule = void 0;
                if (file.typeImage) {
                    sizeRule = _this.checkResolutionRule(info);
                }
                else {
                    sizeRule = true;
                }
                var fileSize = _this.checkSize(file);
                return (sizeRule !== void 0 ? sizeRule : true) && fileSize;
            }, function (files, rejected) {
                resolve({ files: files, rejected: rejected });
            });
        });
    };
    /**
     * Check file resolution restrictions
     * @param info
     * @returns {boolean}
     */
    FsFileService.prototype.checkResolutionRule = function (info) {
        if (this._options.imageMaxWidth && this._options.imageMaxHeight) {
            return info.width <= this._options.imageMaxWidth && info.height <= this._options.imageMaxHeight;
        }
        else if (this._options.imageMaxWidth) {
            return info.width <= this._options.imageMaxWidth;
        }
        else if (this._options.imageMaxHeight) {
            return info.height <= this._options.imageMaxHeight;
        }
        else {
            return true;
        }
    };
    /**
     * Check filesize restrictions
     * @param file
     * @returns {boolean}
     */
    FsFileService.prototype.checkSize = function (file) {
        return (this._options.minSize !== void 0 ? file.size >= (this._options.minSize * FileAPI.KB) : true)
            && (this._options.maxSize !== void 0 ? file.size <= (this._options.maxSize * FileAPI.KB) : true);
    };
    /**
     * Change image format
     * @param originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.changeImageFormat = function (originFile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var image = FileAPI.Image(originFile.file);
            var fileType = (_this._options.imageFormat) ? 'image/' + _this._options.imageFormat : originFile.type;
            image.get(function (err, img) {
                if (!err) {
                    img.toDataUrl(function (blob) {
                        originFile.file = new File([blob], originFile.name, { type: fileType });
                        resolve(originFile);
                    }, fileType, _this._options.imageQuality || 1);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.getImageInfo = function (originFile) {
        return new Promise(function (resolve, reject) {
            FileAPI.getInfo(originFile.file, function (err, info) {
                if (!err) {
                    resolve(info);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Change image quality
     * @param originFile
     * @returns {Promise<any>}
     */
    FsFileService.prototype.changeQuality = function (originFile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var image = FileAPI.Image(originFile.file);
            image.get(function (err, img) {
                if (!err) {
                    img.toBlob(function (blob) {
                        originFile.file = new File([blob], originFile.name, { type: originFile.type });
                        resolve(originFile);
                    }, originFile.type, _this._options.imageQuality || 1);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    /**
     * Process image file by sequence of available processors
     * @param file
     * @param processorsIter
     * @param resolve
     * @param reject
     */
    FsFileService.prototype.applyProcessors = function (file, processorsIter, resolve, reject) {
        var _this = this;
        var nextValue = processorsIter.next();
        if (!nextValue.done) {
            file.progress = true;
            switch (+nextValue.value) {
                case 0:
                    {
                        this.getImageInfo(file).then(function (result) {
                            file.parseInfo(result);
                            _this.applyProcessors(file, processorsIter, resolve, reject);
                        }).catch(function (error) {
                            reject({ error: error, file: file });
                        });
                    }
                    break;
                case 1:
                    {
                        if (this._options.imageQuality !== void 0) {
                            this.changeQuality(file).then(function (resultFile) {
                                _this.applyProcessors(resultFile, processorsIter, resolve, reject);
                            }).catch(function (error) {
                                reject({ error: error, file: file });
                            });
                        }
                        else {
                            this.applyProcessors(file, processorsIter, resolve, reject);
                        }
                    }
                    break;
                case 2:
                    {
                        if (this._options.imageFormat !== void 0) {
                            this.changeImageFormat(file).then(function (resultFile) {
                                _this.applyProcessors(resultFile, processorsIter, resolve, reject);
                            }).catch(function (error) {
                                reject({ error: error, file: file });
                            });
                        }
                        else {
                            this.applyProcessors(file, processorsIter, resolve, reject);
                        }
                    }
                    break;
            }
        }
        else {
            file.progress = this._options.preview;
            resolve(file);
        }
    };
    FsFileService.prototype.alertImageProcessingError = function (file) {
        alert("File " + file.name + " can't be processed as image. File was rejected");
    };
    FsFileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FsFileService);
    return FsFileService;
}());
exports.FsFileService = FsFileService;
//# sourceMappingURL=fs-file.service.js.map