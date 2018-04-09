"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileAPI = require("fileapi");
var fs_file_1 = require("../models/fs-file");
var InputProcessor = (function () {
    function InputProcessor(inputEl, dragDrop) {
        this.select = new core_1.EventEmitter();
        this.initForElement(inputEl);
        this.initDragNDropForElement(dragDrop);
    }
    /**
     * Initialize service for target element
     * @param el
     */
    InputProcessor.prototype.initForElement = function (el) {
        if (!el) {
            return;
        }
        this.inputEl = el.nativeElement;
        this.onChanges();
    };
    InputProcessor.prototype.initDragNDropForElement = function (el) {
        if (!el) {
            return;
        }
        this.containerEl = el.nativeElement;
        this.onDrop();
    };
    /**
     * Fire when input was changed
     */
    InputProcessor.prototype.onChanges = function () {
        var _this = this;
        FileAPI.event.on(this.inputEl, 'change', function (event) {
            var files = FileAPI.getFiles(event);
            // Clear input value
            _this.inputEl.value = null;
            _this.selectFiles(files);
            // this.filterFiles(files).then((result: any) => {
            //   if (result.files && result.files.length > 0) {
            //     this.processFiles(result.files);
            //   }
            // })
        });
    };
    /**
     * Fire when on root element was dropped file
     */
    InputProcessor.prototype.onDrop = function () {
        var _this = this;
        FileAPI.event.on(this.containerEl, 'drop', function (event) {
            var files = FileAPI.getFiles(event);
            // Clear input value
            _this.inputEl.value = null;
            _this.selectFiles(files);
            // this.filterFiles(files).then((result: any) => {
            //   if (result.files && result.files.length > 0) {
            //     // this.processFiles(result.files);
            //   }
            // })
        });
    };
    InputProcessor.prototype.selectFiles = function (files) {
        files = files.map(function (f) {
            return new fs_file_1.FsFile(f);
        });
        if (files.length === 1) {
            files = files[0];
        }
        this.select.emit(files);
    };
    return InputProcessor;
}());
exports.InputProcessor = InputProcessor;
//# sourceMappingURL=input-processor.js.map