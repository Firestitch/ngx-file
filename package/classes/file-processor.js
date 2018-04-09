"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var FileAPI = require("fileapi");
require("fileapi/plugins/FileAPI.exif.js");
var Observable_1 = require("rxjs/Observable");
var switchMap_1 = require("rxjs/operators/switchMap");
var of_1 = require("rxjs/observable/of");
require("rxjs/add/observable/fromPromise");
var models_1 = require("../models");
var helpers_1 = require("../helpers");
var FileProcessor = (function () {
    function FileProcessor() {
    }
    /**
     * Process uploaded files
     * @param files
     * @param config
     */
    FileProcessor.prototype.process = function (files, config) {
        var _this = this;
        var multiple = true;
        var processConfig = new models_1.ProcessConfig(config);
        if (!Array.isArray(files)) {
            files = [files];
            multiple = false;
        }
        var processedFiles = [];
        files.forEach(function (file) {
            if (file.typeImage) {
                var resFilePromise = new Promise(function (resolve, reject) {
                    _this.applyTransforms(file, resolve, reject, processConfig);
                });
                processedFiles.push(resFilePromise);
            }
            else {
                processedFiles.push(file);
            }
        });
        return Observable_1.Observable.fromPromise(Promise.all(processedFiles)).pipe(switchMap_1.switchMap(function (resultFiles) {
            if (!multiple && resultFiles[0]) {
                return of_1.of(resultFiles[0]);
            }
            return of_1.of(resultFiles);
        }));
    };
    /**
     * Retrun information about image (width/height)
     * @param {FsFile} originFile
     * @returns {Promise<any>}
     */
    FileProcessor.prototype.getImageInfo = function (originFile) {
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
    FileProcessor.prototype.transformFile = function (originFile, transformConfig, processConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // Transform image by options and rotate if needed
                        FileAPI.Image.transform(originFile.file, [transformConfig], true, // AutoRotate
                        function (err, images) {
                            // Process transformed files
                            if (!err && images[0]) {
                                var canvasImage = void 0;
                                canvasImage = helpers_1.ScaleExifImage(images[0], originFile.exifInfo.Orientation);
                                // Convert to blob for create File object
                                canvasImage.toBlob(function (blob) {
                                    // Save as file to FsFile
                                    originFile.file = new File([blob], originFile.name, { type: originFile.type });
                                    // Update FsFile info
                                    _this.getImageInfo(originFile).then(function (result) {
                                        originFile.parseInfo(result);
                                        resolve(originFile);
                                    }).catch(function (error) {
                                        reject({ error: error, originFile: originFile });
                                    });
                                }, transformConfig.type, canvasImage.quality);
                            }
                            else {
                                reject(err);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * Process image file
     * @param file
     * @param resolve
     * @param reject
     * @param config
     */
    FileProcessor.prototype.applyTransforms = function (file, resolve, reject, config) {
        return __awaiter(this, void 0, void 0, function () {
            var fileInfo, params, resultFile, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getImageInfo(file)];
                    case 1:
                        fileInfo = _a.sent();
                        file.parseInfo(fileInfo);
                        params = this.generateTransformParams(file, config);
                        return [4 /*yield*/, this.transformFile(file, params, config)];
                    case 2:
                        resultFile = _a.sent();
                        resolve(resultFile);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileProcessor.prototype.generateTransformParams = function (file, config) {
        var transformParams = {};
        // Type for result image
        transformParams.type = (config.format) ? 'image/' + config.format : file.type;
        // Resize
        transformParams.maxWidth = config.width;
        transformParams.maxHeight = config.height;
        // Quality for result image
        if (config.quality !== void 0) {
            transformParams.quality = config.quality || 1;
        }
        return transformParams;
    };
    FileProcessor.prototype.alertImageProcessingError = function (file) {
        alert("File " + file.name + " can't be processed as image. File was rejected");
    };
    return FileProcessor;
}());
exports.FileProcessor = FileProcessor;
//# sourceMappingURL=file-processor.js.map