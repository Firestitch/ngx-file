webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.select mat-icon {\n  -webkit-transform: scale(1.8);\n          transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-picker/src/components/fs-file-picker/fs-file-picker.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-picker.component.scss"],"names":[],"mappings":"AAAA;EAGM,2BAAA;EACA,eAAA;CCDL;;ADHD;EAOQ,cAAA;CCAP;;ADPD;EAWQ,eAAA;CCAP;;ADXD;EAiBU,YAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,2BAAA;EACA,oBAAA;EACA,aAAA;CCFT;;ADSD;EACE,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,+BAAA;UAAA,uBAAA;CCND;;ADLD;EAeI,8BAAA;UAAA,sBAAA;EACA,YAAA;CCNH;;ADUD;EACE,gBAAA;EACA,eAAA;CCPD;;ADUD;EACE,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCPD","file":"fs-file-picker.component.scss","sourcesContent":[":host {\n  &.dragover {\n    .select {\n      border: 2px #07a8e6 dashed;\n      color: #07a8e6;\n\n      button {\n        display: none;\n      }\n\n      .mat-icon {\n        color: #07a8e6;\n      }\n    }\n    ::ng-deep {\n      .preview-container {\n        &:after {\n          content: \"\";\n          width: 98%;\n          display: block;\n          height: 98%;\n          position: absolute;\n          left: 0;\n          top: 0;\n          border: 2px #07a8e6 dashed;\n          background: #07a8e6;\n          opacity: 0.4;\n        }\n      }\n    }\n  }\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n\n\n  mat-icon {\n    transform: scale(1.8);\n    color: #ddd;\n  }\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(.75) translateZ(.001px);\n  transform-origin: 0 0;\n}\n",":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\n.select mat-icon {\n  transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, .5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-preview/src/components/fs-file-preview/fs-file-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-preview/src/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,gBAAA;EACA,gBAAA;CCDD;;ADID;EACE,oBAAA;EACA,iBAAA;EACA,wBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;CCDD;;ADID;EACE,mBAAA;EAWA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;CCXD;;ACSC;EFbF;IAII,eAAA;GCKD;CACF;;ACGC;EFbF;IAQI,cAAA;IACA,8BAAA;GCOD;CACF;;ADjBD;EAmBI,mBAAA;EACA,gBAAA;CCEH;;ADLC;EAMI,QAAA;EACA,UAAA;CCGL;;AD3BD;EA4BM,QAAA;EACA,UAAA;CCGL;;ADhCD;EAiCM,WAAA;EACA,SAAA;CCGL;;ADrCD;EAsCM,WAAA;EACA,UAAA;CCGL;;AD1CD;EA2CM,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;CCGL;;ADDK;EACE,eAAA;EACA,6BAAA;CCIP;;ADED;EAEI,kBAAA;EACA,oBAAA;EACA,sBAAA;CCAH;;ADGC;EACE,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;CCAH;;ADbD;EAgBM,gBAAA;CCCL;;ADjBD;;EAqBQ,eAAA;CCCP;;ADGG;EACE,eAAA;EACA,mBAAA;CCAL;;ADMD;EAEI,WAAA;EACA,6BAAA;CCJH;;ADCD;EAOI,mBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCJH;;ADQD;EACE;IACI,eAAA;IACA,iBAAA;GCLH;CACF","file":"fs-file-preview.component.scss","sourcesContent":["@import \"../../styles/mixins\";\n\n.file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n\n  @include apply-to(less-than, phone) {\n    display: block;\n  }\n\n  @include apply-to(greater-than, phone) {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  .action {\n\n    position: absolute;\n    cursor: pointer;\n\n    &.top-left {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.top-right {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.bottom-left {\n      bottom: 5%;\n      left: 5%;\n    }\n\n    &.bottom-right {\n      bottom: 5%;\n      right: 5%;\n    }\n\n    &.mat-mini-fab {\n      width: 22%;\n      height: 22%;\n      min-width: 30px;\n      min-height: 30px;\n      max-width: 42px;\n      max-height: 42px;\n      line-height: 15px !important;\n\n      .mat-button-wrapper {\n        padding: 4px 0;\n        line-height: 15px !important;\n      }\n    }\n  }\n}\n\n:host {\n  &:hover .file-name {\n    overflow: visible;\n    white-space: normal;\n    word-wrap: break-word;\n  }\n\n  &.preview {\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n    border: 1px #DDD solid;\n    vertical-align: top;\n    border-radius: 3px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover, &:focus {\n      .actions {\n        display: block;\n      }\n    }\n\n    img {\n      display: block;\n      border-radius: 3px;\n    }\n  }\n\n}\n\n:host ::ng-deep {\n  .mat-button-wrapper {\n    padding: 0;\n    line-height: 15px !important;\n  }\n\n  .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -25%;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n      display: block;\n      background: none;\n  }\n}\n",".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n","@import \"variables\";\n\n\n@mixin apply-to($ltgt, $device) {\n  $extrema: null;\n  $boundary-target: null;\n  $delta: null;\n\n  @if $ltgt == less-than {\n    $extrema: max;\n    $delta: -1;\n  } @else if $ltgt == greater-than {\n    $extrema: min;\n    $delta: +1;\n  }\n\n  @if $device == phone {\n    @if $ltgt == less-than {\n      $boundary-target: $phone-width-max;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-min;\n    }\n  } @else if $device == tablet {\n    @if $ltgt == less-than {\n      $boundary-target: $tablet-width-min;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-max;\n    }\n  } @else if $device == desktop {\n    $boundary-target: $desktop-width-min;\n  }\n\n  @media only screen and (#{$extrema}-width: $boundary-target) {\n    @content;\n  }\n}\n\n@mixin phone {\n  @media only screen and (max-width: #{$phone-width-max}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media only screen and (min-width: #{$tablet-width-min}) and (max-width: #{$tablet-width-max}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media only screen and (min-width: #{$desktop-width-min}) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-previews/fs-file-previews.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  position: relative;\n  display: block;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-previews/src/components/fs-file-previews/fs-file-previews.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-previews.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;CCCD","file":"fs-file-previews.component.scss","sourcesContent":[".queue {\n  position: relative;\n  display: block;\n}\n",".queue {\n  position: relative;\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/file-picker/file-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  margin-top: 10px;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/file-picker.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;CACD","file":"file-picker.component.css","sourcesContent":[".queue {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/image-file-manipulation/image-file-manipulation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  margin-top: 10px;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/image-file-manipulation.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;CACD","file":"image-file-manipulation.component.css","sourcesContent":[".queue {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/multiple-file-select/multiple-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  margin-top: 15px;\n}", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/multiple-file-select.component.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;CACD","file":"multiple-file-select.component.css","sourcesContent":[".queue {\n  margin-top: 15px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/single-file-select/single-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"single-file-select.component.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/components/fs-file-drag-base/fs-file-drag-base.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsFileDragBaseComponent = (function () {
    function FsFileDragBaseComponent(el) {
        this.el = el;
        this.fileOverTarget = false;
    }
    FsFileDragBaseComponent.prototype.onDragOverElement = function (event) {
        if (this.el.nativeElement.contains(event.target)) {
            this.fileOverTarget = true;
        }
    };
    FsFileDragBaseComponent.prototype.onDrop = function (event) {
        if (this.fileOverTarget) {
            event.preventDefault();
            event.stopPropagation();
            this.fileOverTarget = false;
        }
    };
    FsFileDragBaseComponent.prototype.onDragOver = function (event) {
        if (this.fileOverTarget) {
            event.preventDefault();
            event.stopPropagation();
            if (!this.el.nativeElement.contains(event.target)) {
                this.fileOverTarget = false;
            }
        }
    };
    __decorate([
        core_1.HostBinding('class.dragover'),
        __metadata("design:type", Object)
    ], FsFileDragBaseComponent.prototype, "fileOverTarget", void 0);
    __decorate([
        core_1.HostListener('dragenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FsFileDragBaseComponent.prototype, "onDragOverElement", null);
    __decorate([
        core_1.HostListener('window:drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FsFileDragBaseComponent.prototype, "onDrop", null);
    __decorate([
        core_1.HostListener('window:dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FsFileDragBaseComponent.prototype, "onDragOver", null);
    FsFileDragBaseComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-drag-base'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsFileDragBaseComponent);
    return FsFileDragBaseComponent;
}());
exports.FsFileDragBaseComponent = FsFileDragBaseComponent;


/***/ }),

/***/ "../src/components/fs-file-drag-base/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-drag-base/fs-file-drag-base.ts"));


/***/ }),

/***/ "../src/components/fs-file-picker/fs-file-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label\"\n     [ngStyle]=\"{'width.px': previewWidth || 150}\">\n  <ng-content select=\"[fs-file-label]\"></ng-content>\n</div>\n<fs-file-preview class=\"preview\"\n                 *ngIf=\"file; else preview\"\n                 (remove)=\"removeFile($event)\"\n                 [file]=\"file\"\n                 [previewWidth]=\"previewWidth\"\n                 [previewHeight]=\"previewHeight\">\n  <ng-template fs-file-preview-action placement=\"bottom-left\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action placement=\"bottom-right\" tooltip=\"Reupload\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n  </ng-template>\n</fs-file-preview>\n\n<ng-template #preview>\n  <div class=\"select\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n    <div class=\"instruction\">{{instruction}}</div>\n    <button mat-raised-button color=\"primary\">Upload</button>\n  </div>\n</ng-template>\n\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n\n"

/***/ }),

/***/ "../src/components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-picker/fs-file-picker.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-file-picker/fs-file-picker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var services_1 = __webpack_require__("../src/services/index.ts");
var fs_file_drag_base_1 = __webpack_require__("../src/components/fs-file-drag-base/index.ts");
var FsFilePickerComponent = (function (_super) {
    __extends(FsFilePickerComponent, _super);
    function FsFilePickerComponent(fsFile, el) {
        var _this = _super.call(this, el) || this;
        _this.fsFile = fsFile;
        _this.el = el;
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.select = new core_1.EventEmitter();
        _this.instruction = 'Drag & Drop your file or use the button below';
        return _this;
    }
    Object.defineProperty(FsFilePickerComponent.prototype, "multiple", {
        set: function (value) {
            this.fsFile.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "accept", {
        set: function (value) {
            this.fsFile.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "minSize", {
        set: function (value) {
            this.fsFile.minSize = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FsFilePickerComponent.prototype, "maxSize", {
        set: function (value) {
            this.fsFile.maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageMaxWidth", {
        set: function (value) {
            this.fsFile.imageMaxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageMaxHeight", {
        set: function (value) {
            this.fsFile.imageMaxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageQuality", {
        set: function (value) {
            this.fsFile.imageQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "imageFormat", {
        set: function (value) {
            this.fsFile.imageFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "disabled", {
        set: function (value) {
            this.fsFile.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    FsFilePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fsFile.initForElement(this.fileInput);
        this.fsFile.initDragNDropForElement(this.el);
        this.fsFile.select.subscribe(function (file) {
            _this.file = file;
            _this.select.emit(file);
        });
    };
    FsFilePickerComponent.prototype.removeFile = function (file) {
        this.file = void 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "multiple", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "accept", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "minSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "maxSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageMaxWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageMaxHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageQuality", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "imageFormat", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.Output('select'),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "select", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "fileInput", void 0);
    FsFilePickerComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-picker',
            template: __webpack_require__("../src/components/fs-file-picker/fs-file-picker.component.html"),
            styles: [__webpack_require__("../src/components/fs-file-picker/fs-file-picker.component.scss")],
            providers: [services_1.FsFileService]
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, core_1.ElementRef])
    ], FsFilePickerComponent);
    return FsFilePickerComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFilePickerComponent = FsFilePickerComponent;


/***/ }),

/***/ "../src/components/fs-file-picker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-picker/fs-file-picker.component.ts"));


/***/ }),

/***/ "../src/components/fs-file-preview-base/fs-file-preview-base.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var directives_1 = __webpack_require__("../src/directives/index.ts");
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


/***/ }),

/***/ "../src/components/fs-file-preview-base/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-preview-base/fs-file-preview-base.ts"));


/***/ }),

/***/ "../src/components/fs-file-preview/fs-file-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"previewWidth\" [style.height.px]=\"previewHeight\" class=\"preview-container\">\n\n  <!-- Progress container -->\n  <ng-container *ngIf=\"file.progress; else elsePreview\">\n    <mat-spinner class=\"spinner\" [diameter]=\"previewWidth/2\"></mat-spinner>\n  </ng-container>\n\n  <!-- Image container -->\n  <ng-template #elsePreview>\n    <ng-container *ngIf=\"file.typeImage; else nonImage\">\n      <img [src]=\"preview\">\n    </ng-container>\n\n    <!-- Non image container -->\n    <ng-template #nonImage>\n        <div class=\"file-ext\">{{file.extension}}</div>\n        <div class=\"file-name\" [matTooltip]=\"file.name\">{{file.name}}</div>\n    </ng-template>\n  </ng-template>\n</div>\n\n<!-- Actions -->\n<div class=\"actions\">\n  <button class=\"action\" mat-mini-fab color=\"primary\"\n          *ngFor=\"let action of filteredActions\"\n          [ngClass]=\"getActionClasses(action)\"\n          [matTooltip]=\"action.tooltip\"\n          (click)=\"callAction(action)\">\n    <ng-template [ngTemplateOutlet]=\"actionsTemplate[action.index]\"></ng-template>\n  </button>\n</div>\n"

/***/ }),

/***/ "../src/components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-preview/fs-file-preview.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-file-preview/fs-file-preview.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FileAPI = __webpack_require__("../node_modules/fileapi/dist/FileAPI.js");
var fs_file_1 = __webpack_require__("../src/models/fs-file.ts");
var fs_file_preview_base_1 = __webpack_require__("../src/components/fs-file-preview-base/index.ts");
var FsFilePreviewComponent = (function (_super) {
    __extends(FsFilePreviewComponent, _super);
    function FsFilePreviewComponent() {
        var _this = _super.call(this) || this;
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.remove = new core_1.EventEmitter();
        _this.filteredActions = [];
        return _this;
    }
    Object.defineProperty(FsFilePreviewComponent.prototype, "_actions", {
        set: function (value) {
            (_a = this.actions).push.apply(_a, value);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePreviewComponent.prototype, "_actionsTemplate", {
        set: function (value) {
            (_a = this.actionsTemplate).push.apply(_a, value);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePreviewComponent.prototype, "_file", {
        set: function (file) {
            this.file = file;
            this.generateFilePreview(file);
        },
        enumerable: true,
        configurable: true
    });
    FsFilePreviewComponent.prototype.ngAfterViewInit = function () {
        this.cleanActions();
    };
    FsFilePreviewComponent.prototype.getActionClasses = function (action) {
        if (action.placement) {
            return [action.placement];
        }
        else {
            return [];
        }
    };
    FsFilePreviewComponent.prototype.callAction = function (action) {
        switch (action.action) {
            case 'remove':
                {
                    this.remove.emit(this.file);
                }
                break;
            default: {
                if (action.click) {
                    action.click.emit(this.file);
                }
            }
        }
    };
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    FsFilePreviewComponent.prototype.generateFilePreview = function (file) {
        var _this = this;
        if (!this.file.typeImage) {
            return;
        }
        file.progress = true;
        FileAPI.Image(file.file)
            .preview(this.previewWidth, this.previewHeight)
            .get(function (err, img) {
            FileAPI.readAsDataURL(img, function (event) {
                switch (event.type) {
                    case 'load':
                        {
                            _this.preview = event.result;
                            file.progress = false;
                        }
                        break;
                    case 'error':
                        {
                            alert("Image preview error for file " + file.name);
                            file.progress = false;
                        }
                        break;
                }
            });
        });
    };
    FsFilePreviewComponent.prototype.cleanActions = function () {
        for (var action in this.actions) {
            if (this.actions.hasOwnProperty(action) && this.actions[action].forTypes) {
                // save original type
                var _a = this.file.type.split('/'), originalFileType = _a[0], originalContentType = _a[1];
                var types = this.actions[action].forTypes;
                // Looking for allowed type
                for (var i = 0; i < types.length; i++) {
                    var _b = types[i].split('/'), fileType = _b[0], contentType = _b[1];
                    var allowed = fileType === originalFileType && (contentType === originalContentType || contentType === '*');
                    if (allowed) {
                        this.filteredActions.push(this.actions[action]);
                        break;
                    }
                }
            }
            else {
                this.filteredActions.push(this.actions[action]);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePreviewComponent.prototype, "_actions", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePreviewComponent.prototype, "_actionsTemplate", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.Input('file'),
        __metadata("design:type", fs_file_1.FsFile),
        __metadata("design:paramtypes", [fs_file_1.FsFile])
    ], FsFilePreviewComponent.prototype, "_file", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "remove", void 0);
    FsFilePreviewComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-preview',
            template: __webpack_require__("../src/components/fs-file-preview/fs-file-preview.component.html"),
            styles: [__webpack_require__("../src/components/fs-file-preview/fs-file-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewComponent);
    return FsFilePreviewComponent;
}(fs_file_preview_base_1.FsFilePreviewsBaseComponent));
exports.FsFilePreviewComponent = FsFilePreviewComponent;


/***/ }),

/***/ "../src/components/fs-file-preview/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-preview/fs-file-preview.component.ts"));


/***/ }),

/***/ "../src/components/fs-file-previews/fs-file-previews.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file-preview\n  *ngFor=\"let file of files\"\n  [file]=\"file\"\n  [_actions]=\"actions\"\n  [_actionsTemplate]=\"actionsTemplate\"\n  [previewWidth]=\"previewWidth\"\n  [previewHeight]=\"previewHeight\"\n  (remove)=\"removeFile($event)\"\n  class=\"preview\">\n</fs-file-preview>\n"

/***/ }),

/***/ "../src/components/fs-file-previews/fs-file-previews.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../src/components/fs-file-previews/fs-file-previews.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/components/fs-file-previews/fs-file-previews.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var fs_file_preview_base_1 = __webpack_require__("../src/components/fs-file-preview-base/index.ts");
var FsFilePreviewsComponent = (function (_super) {
    __extends(FsFilePreviewsComponent, _super);
    function FsFilePreviewsComponent() {
        var _this = _super.call(this) || this;
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.queue = true;
        return _this;
    }
    FsFilePreviewsComponent.prototype.ngOnInit = function () {
    };
    FsFilePreviewsComponent.prototype.removeFile = function (file) {
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewsComponent.prototype, "files", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewsComponent.prototype, "previewWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePreviewsComponent.prototype, "previewHeight", void 0);
    __decorate([
        core_1.HostBinding('class.queue'),
        __metadata("design:type", Object)
    ], FsFilePreviewsComponent.prototype, "queue", void 0);
    FsFilePreviewsComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-previews',
            template: __webpack_require__("../src/components/fs-file-previews/fs-file-previews.component.html"),
            styles: [__webpack_require__("../src/components/fs-file-previews/fs-file-previews.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewsComponent);
    return FsFilePreviewsComponent;
}(fs_file_preview_base_1.FsFilePreviewsBaseComponent));
exports.FsFilePreviewsComponent = FsFilePreviewsComponent;


/***/ }),

/***/ "../src/components/fs-file-previews/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file-previews/fs-file-previews.component.ts"));


/***/ }),

/***/ "../src/components/fs-file/fs-file.component.html":
/***/ (function(module, exports) {

module.exports = "<label (click)=\"fileInput.click()\">\n  <ng-content></ng-content>\n</label>\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n"

/***/ }),

/***/ "../src/components/fs-file/fs-file.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var services_1 = __webpack_require__("../src/services/index.ts");
var fs_file_drag_base_1 = __webpack_require__("../src/components/fs-file-drag-base/index.ts");
var FsFileComponent = (function (_super) {
    __extends(FsFileComponent, _super);
    function FsFileComponent(fsFile, el) {
        var _this = _super.call(this, el) || this;
        _this.fsFile = fsFile;
        _this.el = el;
        _this.imageFixOrientation = true;
        _this.select = _this.fsFile.select;
        return _this;
    }
    Object.defineProperty(FsFileComponent.prototype, "multiple", {
        set: function (value) {
            this.fsFile.multiple = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "accept", {
        set: function (value) {
            this.fsFile.accept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "minSize", {
        set: function (value) {
            this.fsFile.minSize = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FsFileComponent.prototype, "maxSize", {
        set: function (value) {
            this.fsFile.maxSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageMaxWidth", {
        set: function (value) {
            this.fsFile.imageMaxWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageMaxHeight", {
        set: function (value) {
            this.fsFile.imageMaxHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageQuality", {
        set: function (value) {
            this.fsFile.imageQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageFormat", {
        set: function (value) {
            this.fsFile.imageFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "disabled", {
        set: function (value) {
            this.fsFile.disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    FsFileComponent.prototype.ngOnInit = function () {
        this.fsFile.initForElement(this.fileInput);
        this.fsFile.initDragNDropForElement(this.el);
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
    ], FsFileComponent.prototype, "minSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "maxSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageMaxWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageMaxHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageQuality", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageFormat", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFileComponent.prototype, "imageFixOrientation", void 0);
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
            providers: [services_1.FsFileService],
            template: __webpack_require__("../src/components/fs-file/fs-file.component.html")
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, core_1.ElementRef])
    ], FsFileComponent);
    return FsFileComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFileComponent = FsFileComponent;


/***/ }),

/***/ "../src/components/fs-file/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file/fs-file.component.ts"));


/***/ }),

/***/ "../src/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/components/fs-file/index.ts"));
__export(__webpack_require__("../src/components/fs-file-previews/index.ts"));
__export(__webpack_require__("../src/components/fs-file-preview/index.ts"));
__export(__webpack_require__("../src/components/fs-file-picker/index.ts"));


/***/ }),

/***/ "../src/directives/fs-file-preview-action.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FsFilePreviewActionDirective = (function () {
    function FsFilePreviewActionDirective() {
        this.index = null;
        this.click = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFilePreviewActionDirective.prototype, "placement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFilePreviewActionDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsFilePreviewActionDirective.prototype, "action", void 0);
    __decorate([
        core_1.Input('for-types'),
        __metadata("design:type", Object)
    ], FsFilePreviewActionDirective.prototype, "forTypes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePreviewActionDirective.prototype, "click", void 0);
    FsFilePreviewActionDirective = __decorate([
        core_1.Directive({
            selector: '[fs-file-preview-action]'
        })
    ], FsFilePreviewActionDirective);
    return FsFilePreviewActionDirective;
}());
exports.FsFilePreviewActionDirective = FsFilePreviewActionDirective;


/***/ }),

/***/ "../src/directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/directives/fs-file-preview-action.directive.ts"));


/***/ }),

/***/ "../src/fs-component.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var common_2 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
var components_1 = __webpack_require__("../src/components/index.ts");
var directives_1 = __webpack_require__("../src/directives/index.ts");
var FsFileModule = (function () {
    function FsFileModule() {
    }
    FsFileModule_1 = FsFileModule;
    FsFileModule.forRoot = function () {
        return {
            ngModule: FsFileModule_1,
            providers: []
        };
    };
    FsFileModule = FsFileModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                common_2.FsCommonModule,
                material_1.MatIconModule,
                material_1.MatTooltipModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatButtonModule,
            ],
            exports: [
                components_1.FsFileComponent,
                components_1.FsFilePreviewsComponent,
                components_1.FsFilePreviewComponent,
                directives_1.FsFilePreviewActionDirective,
                components_1.FsFilePickerComponent
            ],
            entryComponents: [],
            declarations: [
                components_1.FsFileComponent,
                components_1.FsFilePreviewsComponent,
                components_1.FsFilePreviewComponent,
                directives_1.FsFilePreviewActionDirective,
                components_1.FsFilePickerComponent
            ],
            providers: [],
        })
    ], FsFileModule);
    return FsFileModule;
    var FsFileModule_1;
}());
exports.FsFileModule = FsFileModule;


/***/ }),

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-component.module.ts"));
__export(__webpack_require__("../src/components/index.ts"));
__export(__webpack_require__("../src/services/index.ts"));
__export(__webpack_require__("../src/directives/index.ts"));


/***/ }),

/***/ "../src/models/fs-file.ts":
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "../src/services/fs-file.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FileAPI = __webpack_require__("../node_modules/fileapi/dist/FileAPI.js");
var fs_file_1 = __webpack_require__("../src/models/fs-file.ts");
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


/***/ }),

/***/ "../src/services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/services/fs-file.service.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../tools/components/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-title\">{{title}}</div>\n<mat-tab-group>\n  <mat-tab label=\"Examples\">\n      <div class=\"examples-body\">\n        <ng-content></ng-content>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Docs\" *ngIf=\"loaded\">\n    <div class=\"iframe-container\">\n      <iframe class=\"iframe-example ng-star-inserted\" [src]=\"submoduleUrl\"></iframe>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../tools/components/examples/examples.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var FsExamplesComponent = (function () {
    function FsExamplesComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.loaded = false;
    }
    FsExamplesComponent.prototype.ngOnInit = function () {
        this._submoduleUrl = this.sanitizer
            .bypassSecurityTrustResourceUrl("https://" + this.submoduleName + ".components.firestitch.com/docs");
        this.loaded = true;
    };
    Object.defineProperty(FsExamplesComponent.prototype, "submoduleUrl", {
        get: function () {
            return this._submoduleUrl;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('name'),
        __metadata("design:type", String)
    ], FsExamplesComponent.prototype, "submoduleName", void 0);
    FsExamplesComponent = __decorate([
        core_1.Component({
            selector: 'fs-examples',
            template: __webpack_require__("../tools/components/examples/examples.component.html")
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], FsExamplesComponent);
    return FsExamplesComponent;
}());
exports.FsExamplesComponent = FsExamplesComponent;


/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-examples title=\"Files\" name=\"file\">\n  <div class=\"example\">\n    <fs-example title=\"File\" componentName=\"single-file-select\">\n      <single-file-select></single-file-select>\n    </fs-example>\n  </div>\n\n  <div class=\"example\">\n    <fs-example title=\"Multiple With Preview\" componentName=\"multiple-file-select\">\n      <multiple-file-select></multiple-file-select>\n    </fs-example>\n  </div>\n\n  <div class=\"example\">\n    <fs-example title=\"Image Resampling\" componentName=\"multiple-file-select\">\n      <image-file-manipulation></image-file-manipulation>\n    </fs-example>\n  </div>\n\n  <div class=\"example\">\n    <fs-example title=\"File Picker\" componentName=\"file-picker\">\n      <file-picker></file-picker>\n    </fs-example>\n  </div>  \n</fs-examples>\n\n\n\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/components/file-picker/file-picker.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/file-picker/file-picker.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/file-picker/file-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file-picker (select)=\"select($event)\">\n    <div fs-file-label>File Picker Label</div>\n</fs-file-picker>\n\n<fieldset *ngIf=\"file\">\n  <legend>File</legend>\n  <pre>{{ file | json }}</pre>\n</fieldset>\n"

/***/ }),

/***/ "./app/components/file-picker/file-picker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var FilePickerComponent = (function () {
    function FilePickerComponent() {
        this.file = void 0;
    }
    FilePickerComponent.prototype.select = function (file) {
    };
    FilePickerComponent = __decorate([
        core_1.Component({
            selector: 'file-picker',
            template: __webpack_require__("./app/components/file-picker/file-picker.component.html"),
            styles: [__webpack_require__("./app/components/file-picker/file-picker.component.css")]
        })
    ], FilePickerComponent);
    return FilePickerComponent;
}());
exports.FilePickerComponent = FilePickerComponent;


/***/ }),

/***/ "./app/components/file-picker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/file-picker/file-picker.component.ts"));


/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/image-file-manipulation/image-file-manipulation.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.html":
/***/ (function(module, exports) {

module.exports = "Options/restrictions:\n<ul>\n  <li>Accept: <b>image/*</b></li>\n  <li>Multiple: <b>true</b></li>\n  <li>Reduce quality to: <b>0.1</b></li>\n  <li>Resample max width: <b>2500</b></li>\n  <li>Resample max height: <b>2500</b></li>\n  <li>Preview: <b>200x200</b></li>\n</ul>\n<fs-file (select)=\"select($event)\"\n         accept=\"image/*\"\n         multiple=\"true\"\n         imageQuality=\".1\"\n         imageMaxWidth=\"2500\"\n         imageMaxHeight=\"2500\"\n>\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fs-file-previews [files]=\"files\" width=\"200\" height=\"200\">\n  <ng-template fs-file-preview-action placement=\"top-right\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action\n               placement=\"bottom-right\"\n               (click)=\"enhance($event)\"\n               tooltip=\"Enhance\"\n               for-types=\"image/*\">\n    <mat-icon>brush</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action placement=\"bottom-left\" action=\"zoom\" tooltip=\"Zoom\" for-types=\"image/*\">\n    <mat-icon>search</mat-icon>\n  </ng-template>\n</fs-file-previews>\n\n<fieldset *ngIf=\"files.length > 0\">\n  <legend>Files</legend>\n  <pre>{{ files | json }}</pre>\n</fieldset>\n"

/***/ }),

/***/ "./app/components/image-file-manipulation/image-file-manipulation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var ImageFileManipulationComponent = (function () {
    function ImageFileManipulationComponent() {
        this.files = [];
        this.filesJsonInfo = [];
    }
    ImageFileManipulationComponent.prototype.select = function (files) {
        (_a = this.files).push.apply(_a, files);
        var _a;
    };
    ImageFileManipulationComponent.prototype.enhance = function (file) {
        console.log('enhance', file);
    };
    ImageFileManipulationComponent = __decorate([
        core_1.Component({
            selector: 'image-file-manipulation',
            template: __webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.html"),
            styles: [__webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.css")]
        })
    ], ImageFileManipulationComponent);
    return ImageFileManipulationComponent;
}());
exports.ImageFileManipulationComponent = ImageFileManipulationComponent;


/***/ }),

/***/ "./app/components/image-file-manipulation/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/image-file-manipulation/image-file-manipulation.component.ts"));


/***/ }),

/***/ "./app/components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/single-file-select/index.ts"));
__export(__webpack_require__("./app/components/multiple-file-select/index.ts"));
__export(__webpack_require__("./app/components/image-file-manipulation/index.ts"));
__export(__webpack_require__("./app/components/file-picker/index.ts"));


/***/ }),

/***/ "./app/components/multiple-file-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.ts"));


/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/multiple-file-select/multiple-file-select.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file (select)=\"select($event)\" multiple=\"true\">\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fs-file-previews [files]=\"files\">\n  <ng-template fs-file-preview-action placement=\"top-right\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n</fs-file-previews>\n\n<fieldset *ngIf=\"filesJsonInfo.length > 0\">\n  <legend>Files</legend>\n  <pre>{{ filesJsonInfo | json }}</pre>\n</fieldset>\n"

/***/ }),

/***/ "./app/components/multiple-file-select/multiple-file-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var MultipleFileSelectComponent = (function () {
    function MultipleFileSelectComponent() {
        this.files = [];
        this.filesJsonInfo = [];
    }
    MultipleFileSelectComponent.prototype.select = function (files) {
        (_a = this.files).push.apply(_a, files);
        var _a;
    };
    MultipleFileSelectComponent = __decorate([
        core_1.Component({
            selector: 'multiple-file-select',
            template: __webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.html"),
            styles: [__webpack_require__("./app/components/multiple-file-select/multiple-file-select.component.css")]
        })
    ], MultipleFileSelectComponent);
    return MultipleFileSelectComponent;
}());
exports.MultipleFileSelectComponent = MultipleFileSelectComponent;


/***/ }),

/***/ "./app/components/single-file-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./app/components/single-file-select/single-file-select.component.ts"));


/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!./app/components/single-file-select/single-file-select.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file (select)=\"select($event)\">\n  <button mat-raised-button color=\"primary\">Select File</button>\n</fs-file>\n\n<fieldset *ngIf=\"file\">\n  <legend>File</legend>\n  <pre>{{ file | json }}</pre>\n</fieldset>\n\n"

/***/ }),

/***/ "./app/components/single-file-select/single-file-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var SingleFileSelectComponent = (function () {
    function SingleFileSelectComponent() {
        this.file = void 0;
    }
    SingleFileSelectComponent.prototype.select = function (file) {
        this.file = file;
    };
    SingleFileSelectComponent = __decorate([
        core_1.Component({
            selector: 'single-file-select',
            template: __webpack_require__("./app/components/single-file-select/single-file-select.component.html"),
            styles: [__webpack_require__("./app/components/single-file-select/single-file-select.component.css")]
        })
    ], SingleFileSelectComponent);
    return SingleFileSelectComponent;
}());
exports.SingleFileSelectComponent = SingleFileSelectComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
//import { FlexLayoutModule } from '@angular/flex-layout';
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var components_1 = __webpack_require__("./app/components/index.ts");
var examples_component_1 = __webpack_require__("../tools/components/examples/examples.component.ts");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsFileModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                examples_component_1.FsExamplesComponent,
                app_component_1.AppComponent,
                components_1.SingleFileSelectComponent,
                components_1.MultipleFileSelectComponent,
                components_1.ImageFileManipulationComponent,
                components_1.FilePickerComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map