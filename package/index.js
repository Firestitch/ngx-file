(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/file", [], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/file"] = factory();
	else
		root["@firestitch/file"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.select mat-icon {\n  -webkit-transform: scale(1.8);\n          transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-file/src/components/fs-file-picker/src/components/fs-file-picker/fs-file-picker.component.scss","/Users/mendor/work/fs-file/src/components/fs-file-picker/fs-file-picker.component.scss"],"names":[],"mappings":"AAAA;EAGM,2BAAA;EACA,eAAA;CCDL;;ADHD;EAOQ,cAAA;CCAP;;ADPD;EAWQ,eAAA;CCAP;;ADXD;EAiBU,YAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,2BAAA;EACA,oBAAA;EACA,aAAA;CCFT;;ADSD;EACE,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,+BAAA;UAAA,uBAAA;CCND;;ADLD;EAeI,8BAAA;UAAA,sBAAA;EACA,YAAA;CCNH;;ADUD;EACE,gBAAA;EACA,eAAA;CCPD;;ADUD;EACE,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCPD","file":"fs-file-picker.component.scss","sourcesContent":[":host {\n  &.dragover {\n    .select {\n      border: 2px #07a8e6 dashed;\n      color: #07a8e6;\n\n      button {\n        display: none;\n      }\n\n      .mat-icon {\n        color: #07a8e6;\n      }\n    }\n    ::ng-deep {\n      .preview-container {\n        &:after {\n          content: \"\";\n          width: 98%;\n          display: block;\n          height: 98%;\n          position: absolute;\n          left: 0;\n          top: 0;\n          border: 2px #07a8e6 dashed;\n          background: #07a8e6;\n          opacity: 0.4;\n        }\n      }\n    }\n  }\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n\n\n  mat-icon {\n    transform: scale(1.8);\n    color: #ddd;\n  }\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(.75) translateZ(.001px);\n  transform-origin: 0 0;\n}\n",":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\n.select mat-icon {\n  transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, .5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-file/src/components/fs-file-preview/src/components/fs-file-preview/fs-file-preview.component.scss","/Users/mendor/work/fs-file/src/components/fs-file-preview/fs-file-preview.component.scss","/Users/mendor/work/fs-file/src/components/fs-file-preview/src/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,gBAAA;EACA,gBAAA;CCDD;;ADID;EACE,oBAAA;EACA,iBAAA;EACA,wBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;CCDD;;ADID;EACE,mBAAA;EAWA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;CCXD;;ACSC;EFbF;IAII,eAAA;GCKD;CACF;;ACGC;EFbF;IAQI,cAAA;IACA,8BAAA;GCOD;CACF;;ADAC;EAEE,mBAAA;EACA,gBAAA;CCEH;;ADtBD;EAuBM,QAAA;EACA,UAAA;CCGL;;ADAG;EACE,QAAA;EACA,UAAA;CCGL;;ADAG;EACE,WAAA;EACA,SAAA;CCGL;;ADAG;EACE,WAAA;EACA,UAAA;CCGL;;ADAG;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;CCGL;;ADpDD;EAoDQ,eAAA;EACA,6BAAA;CCIP;;ADED;EAEI,kBAAA;EACA,oBAAA;EACA,sBAAA;CCAH;;ADJD;EAQI,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;CCAH;;ADbD;EAgBM,gBAAA;CCCL;;ADGK;;EACE,eAAA;CCCP;;ADGG;EACE,eAAA;EACA,mBAAA;EACA,qBAAA;KAAA,kBAAA;EACA,YAAA;EACA,aAAA;CCAL;;ADMD;EAEI,WAAA;EACA,6BAAA;CCJH;;ADOC;EACE,mBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCJH;;ADQD;EACE;IACI,eAAA;IACA,iBAAA;GCLH;CACF","file":"fs-file-preview.component.scss","sourcesContent":["@import \"../../styles/mixins\";\n\n.file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n\n  @include apply-to(less-than, phone) {\n    display: block;\n  }\n\n  @include apply-to(greater-than, phone) {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  .action {\n\n    position: absolute;\n    cursor: pointer;\n\n    &.top-left {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.top-right {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.bottom-left {\n      bottom: 5%;\n      left: 5%;\n    }\n\n    &.bottom-right {\n      bottom: 5%;\n      right: 5%;\n    }\n\n    &.mat-mini-fab {\n      width: 22%;\n      height: 22%;\n      min-width: 30px;\n      min-height: 30px;\n      max-width: 42px;\n      max-height: 42px;\n      line-height: 15px !important;\n\n      .mat-button-wrapper {\n        padding: 4px 0;\n        line-height: 15px !important;\n      }\n    }\n  }\n}\n\n:host {\n  &:hover .file-name {\n    overflow: visible;\n    white-space: normal;\n    word-wrap: break-word;\n  }\n\n  &.preview {\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n    border: 1px #DDD solid;\n    vertical-align: top;\n    border-radius: 3px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover, &:focus {\n      .actions {\n        display: block;\n      }\n    }\n\n    img {\n      display: block;\n      border-radius: 3px;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n}\n\n:host ::ng-deep {\n  .mat-button-wrapper {\n    padding: 0;\n    line-height: 15px !important;\n  }\n\n  .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -25%;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n      display: block;\n      background: none;\n  }\n}\n",".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n","@import \"variables\";\n\n\n@mixin apply-to($ltgt, $device) {\n  $extrema: null;\n  $boundary-target: null;\n  $delta: null;\n\n  @if $ltgt == less-than {\n    $extrema: max;\n    $delta: -1;\n  } @else if $ltgt == greater-than {\n    $extrema: min;\n    $delta: +1;\n  }\n\n  @if $device == phone {\n    @if $ltgt == less-than {\n      $boundary-target: $phone-width-max;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-min;\n    }\n  } @else if $device == tablet {\n    @if $ltgt == less-than {\n      $boundary-target: $tablet-width-min;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-max;\n    }\n  } @else if $device == desktop {\n    $boundary-target: $desktop-width-min;\n  }\n\n  @media only screen and (#{$extrema}-width: $boundary-target) {\n    @content;\n  }\n}\n\n@mixin phone {\n  @media only screen and (max-width: #{$phone-width-max}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media only screen and (min-width: #{$tablet-width-min}) and (max-width: #{$tablet-width-max}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media only screen and (min-width: #{$desktop-width-min}) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-previews/fs-file-previews.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  position: relative;\n  display: block;\n}\n\n", "", {"version":3,"sources":["/Users/mendor/work/fs-file/src/components/fs-file-previews/src/components/fs-file-previews/fs-file-previews.component.scss","/Users/mendor/work/fs-file/src/components/fs-file-previews/fs-file-previews.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;CCCD","file":"fs-file-previews.component.scss","sourcesContent":[".queue {\n  position: relative;\n  display: block;\n}\n",".queue {\n  position: relative;\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./classes/file-processor.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var FileAPI = __webpack_require__("fileapi");
__webpack_require__("fileapi/plugins/FileAPI.exif.js");
var Observable_1 = __webpack_require__("rxjs/Observable");
var switchMap_1 = __webpack_require__("rxjs/operators/switchMap");
var of_1 = __webpack_require__("rxjs/observable/of");
__webpack_require__("rxjs/add/observable/fromPromise");
var models_1 = __webpack_require__("./models/index.ts");
var helpers_1 = __webpack_require__("./helpers/index.ts");
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


/***/ }),

/***/ "./classes/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./classes/file-processor.ts"));
__export(__webpack_require__("./classes/input-processor.ts"));


/***/ }),

/***/ "./classes/input-processor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var FileAPI = __webpack_require__("fileapi");
var fs_file_1 = __webpack_require__("./models/fs-file.ts");
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


/***/ }),

/***/ "./components/fs-file-drag-base/fs-file-drag-base.ts":
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
var core_1 = __webpack_require__("@angular/core");
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
            selector: 'fs-file-drag-base',
            template: ''
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsFileDragBaseComponent);
    return FsFileDragBaseComponent;
}());
exports.FsFileDragBaseComponent = FsFileDragBaseComponent;


/***/ }),

/***/ "./components/fs-file-drag-base/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file-drag-base/fs-file-drag-base.ts"));


/***/ }),

/***/ "./components/fs-file-picker/fs-file-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label\"\n     [ngStyle]=\"{'width.px': previewWidth || 150}\">\n  <ng-content select=\"[fs-file-label]\"></ng-content>\n</div>\n<fs-file-preview class=\"preview\"\n                 *ngIf=\"file; else preview\"\n                 (remove)=\"removeFile($event)\"\n                 [file]=\"file\"\n                 [previewWidth]=\"previewWidth\"\n                 [previewHeight]=\"previewHeight\">\n  <ng-template fs-file-preview-action placement=\"bottom-left\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action placement=\"bottom-right\" tooltip=\"Reupload\">\n      <fs-file  (select)=\"selectFile($event)\"\n                [imageWidth]=\"imageWidth\"\n                [imageHeight]=\"imageHeight\"\n                [imageQuality]=\"imageQuality\">\n        <mat-icon>cloud_upload</mat-icon></fs-file>\n  </ng-template>\n</fs-file-preview>\n\n<ng-template #preview>\n    <fs-file  (select)=\"selectFile($event)\"\n              [imageWidth]=\"imageWidth\"\n              [imageHeight]=\"imageHeight\"\n              [imageQuality]=\"imageQuality\">\n    <div class=\"select\">\n      <mat-icon>cloud_upload</mat-icon>\n      <div class=\"instruction\">{{instruction}}</div>\n      <div class=\"mat-raised-button mat-primary\">Upload</div>\n    </div>\n  </fs-file>\n</ng-template>\n\n"

/***/ }),

/***/ "./components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-picker/fs-file-picker.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-file-picker/fs-file-picker.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var fs_file_drag_base_1 = __webpack_require__("./components/fs-file-drag-base/index.ts");
var classes_1 = __webpack_require__("./classes/index.ts");
var models_1 = __webpack_require__("./models/index.ts");
var FsFilePickerComponent = (function (_super) {
    __extends(FsFilePickerComponent, _super);
    function FsFilePickerComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.el = el;
        _this._processor = new classes_1.InputProcessor();
        _this._accept = [];
        _this.previewWidth = 150;
        _this.previewHeight = 150;
        _this.select = new core_1.EventEmitter();
        _this.remove = new core_1.EventEmitter();
        _this.instruction = 'Drag & Drop your file or use the button below';
        return _this;
    }
    Object.defineProperty(FsFilePickerComponent.prototype, "previewUrl", {
        set: function (url) {
            this.file = new models_1.FsFile(new File([''], url));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "name", {
        set: function (name) {
            this.file = new models_1.FsFile(new File([''], name));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "accept", {
        get: function () {
            return this._accept.join(', ') || '*';
        },
        set: function (value) {
            this._accept = this._accept.concat(value.split(','));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFilePickerComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    FsFilePickerComponent.prototype.ngOnInit = function () {
        // this._processor.initForElement(this.fileInput);
        // this._processor.initDragNDropForElement(this.el);
        // this._processor.select.subscribe((file) => {
        //   this.file = file;
        //   this.select.emit(file);
        // });
    };
    FsFilePickerComponent.prototype.selectFile = function (file) {
        this.file = file;
        this.select.emit(file);
    };
    FsFilePickerComponent.prototype.removeFile = function (file) {
        this.file = void 0;
        this.remove.emit(this.file);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "imageWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "imageHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "imageQuality", void 0);
    __decorate([
        core_1.Input('previewUrl'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "previewUrl", null);
    __decorate([
        core_1.Input('name'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "name", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFilePickerComponent.prototype, "accept", null);
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
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "remove", void 0);
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], FsFilePickerComponent.prototype, "fileInput", void 0);
    FsFilePickerComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-picker',
            template: __webpack_require__("./components/fs-file-picker/fs-file-picker.component.html"),
            styles: [__webpack_require__("./components/fs-file-picker/fs-file-picker.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsFilePickerComponent);
    return FsFilePickerComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFilePickerComponent = FsFilePickerComponent;


/***/ }),

/***/ "./components/fs-file-picker/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file-picker/fs-file-picker.component.ts"));


/***/ }),

/***/ "./components/fs-file-preview-base/fs-file-preview-base.ts":
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
var core_1 = __webpack_require__("@angular/core");
var directives_1 = __webpack_require__("./directives/index.ts");
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
            selector: 'fs-file-previews-base',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewsBaseComponent);
    return FsFilePreviewsBaseComponent;
}());
exports.FsFilePreviewsBaseComponent = FsFilePreviewsBaseComponent;


/***/ }),

/***/ "./components/fs-file-preview-base/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file-preview-base/fs-file-preview-base.ts"));


/***/ }),

/***/ "./components/fs-file-preview/fs-file-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]=\"previewWidth\" [style.height.px]=\"previewHeight\" class=\"preview-container\">\n\n  <!-- Image container -->\n  <ng-container *ngIf=\"file.typeImage; else nonImage\">\n    <img [src]=\"preview\" *ngIf=\"preview\">\n    <mat-spinner class=\"spinner\" *ngIf=\"file.progress\" [diameter]=\"previewWidth/2\"></mat-spinner>\n  </ng-container>\n\n  <!-- Non image container -->\n  <ng-template #nonImage>\n    <div class=\"file-ext\">{{file.extension}}</div>\n    <div class=\"file-name\" [matTooltip]=\"file.name\">{{file.name}}</div>\n  </ng-template>\n</div>\n\n<!-- Actions -->\n<div class=\"actions\">\n  <button type=\"button\" class=\"action\" mat-mini-fab color=\"primary\"\n          *ngFor=\"let action of filteredActions\"\n          [ngClass]=\"getActionClasses(action)\"\n          [matTooltip]=\"action.tooltip\"\n          (click)=\"callAction(action)\">\n    <ng-template [ngTemplateOutlet]=\"actionsTemplate[action.index]\"></ng-template>\n  </button>\n</div>\n"

/***/ }),

/***/ "./components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-preview/fs-file-preview.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-file-preview/fs-file-preview.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var FileAPI = __webpack_require__("fileapi");
var models_1 = __webpack_require__("./models/index.ts");
var fs_file_preview_base_1 = __webpack_require__("./components/fs-file-preview-base/index.ts");
var helpers_1 = __webpack_require__("./helpers/index.ts");
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
        if (action.click) {
            action.click.emit(this.file);
        }
        if (action.action == 'remove') {
            this.remove.emit(this.file);
        }
    };
    /**
     * Generate preview images for file
     * @param {FsFile} file
     */
    FsFilePreviewComponent.prototype.generateFilePreview = function (file) {
        var _this = this;
        if (file.url) {
            this.preview = file.url;
            return;
        }
        if (!this.file.typeImage) {
            return;
        }
        file.progress = true;
        FileAPI.Image.transform(file.file, [{
                width: this.previewWidth,
                height: this.previewHeight,
                preview: true,
            }], true, function (err, images) {
            if (!err && images[0]) {
                var scaledCanvasImage = helpers_1.ScaleExifImage(images[0], file.exifInfo.Orientation, _this.previewWidth, _this.previewHeight);
                _this.preview = scaledCanvasImage.toDataURL(file.type);
                file.progress = false;
            }
            else {
                alert("Image preview error for file " + file.name);
                file.progress = false;
            }
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
        __metadata("design:type", models_1.FsFile),
        __metadata("design:paramtypes", [models_1.FsFile])
    ], FsFilePreviewComponent.prototype, "_file", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsFilePreviewComponent.prototype, "remove", void 0);
    FsFilePreviewComponent = __decorate([
        core_1.Component({
            selector: 'fs-file-preview',
            template: __webpack_require__("./components/fs-file-preview/fs-file-preview.component.html"),
            styles: [__webpack_require__("./components/fs-file-preview/fs-file-preview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewComponent);
    return FsFilePreviewComponent;
}(fs_file_preview_base_1.FsFilePreviewsBaseComponent));
exports.FsFilePreviewComponent = FsFilePreviewComponent;


/***/ }),

/***/ "./components/fs-file-preview/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file-preview/fs-file-preview.component.ts"));


/***/ }),

/***/ "./components/fs-file-previews/fs-file-previews.component.html":
/***/ (function(module, exports) {

module.exports = "<fs-file-preview\n  *ngFor=\"let file of files\"\n  [file]=\"file\"\n  [_actions]=\"actions\"\n  [_actionsTemplate]=\"actionsTemplate\"\n  [previewWidth]=\"previewWidth\"\n  [previewHeight]=\"previewHeight\"\n  (remove)=\"removeFile($event)\"\n  class=\"preview\">\n</fs-file-preview>\n"

/***/ }),

/***/ "./components/fs-file-previews/fs-file-previews.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--3-1!../node_modules/postcss-loader/lib/index.js??ref--3-2!../node_modules/resolve-url-loader/index.js??ref--3-3!../node_modules/sass-loader/lib/loader.js??ref--3-4!./components/fs-file-previews/fs-file-previews.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./components/fs-file-previews/fs-file-previews.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var fs_file_preview_base_1 = __webpack_require__("./components/fs-file-preview-base/index.ts");
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
            template: __webpack_require__("./components/fs-file-previews/fs-file-previews.component.html"),
            styles: [__webpack_require__("./components/fs-file-previews/fs-file-previews.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FsFilePreviewsComponent);
    return FsFilePreviewsComponent;
}(fs_file_preview_base_1.FsFilePreviewsBaseComponent));
exports.FsFilePreviewsComponent = FsFilePreviewsComponent;


/***/ }),

/***/ "./components/fs-file-previews/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file-previews/fs-file-previews.component.ts"));


/***/ }),

/***/ "./components/fs-file/fs-file.component.html":
/***/ (function(module, exports) {

module.exports = "<label (click)=\"fileInput.click()\">\n  <ng-content></ng-content>\n</label>\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"disabled\"\n       [multiple]=\"multiple\"\n       [attr.accept]=\"accept\"\n       #fileInput\n>\n"

/***/ }),

/***/ "./components/fs-file/fs-file.component.ts":
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
var core_1 = __webpack_require__("@angular/core");
var fs_file_drag_base_1 = __webpack_require__("./components/fs-file-drag-base/index.ts");
var classes_1 = __webpack_require__("./classes/index.ts");
var operators_1 = __webpack_require__("rxjs/operators");
var of_1 = __webpack_require__("rxjs/observable/of");
var lodash_1 = __webpack_require__("lodash");
var FsFileComponent = (function (_super) {
    __extends(FsFileComponent, _super);
    function FsFileComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.el = el;
        _this._inputProcessor = new classes_1.InputProcessor();
        _this._accept = [];
        _this._processOptions = {
            width: void 0,
            height: void 0,
            quality: 1,
        };
        _this._autoProcess = false;
        var fileProcessor = new classes_1.FileProcessor();
        _this.select = _this._inputProcessor.select.pipe(operators_1.switchMap(function (files) {
            if (_this._multiple && !lodash_1.isArray(files)) {
                files = [files];
            }
            if (_this._autoProcess) {
                return fileProcessor.process(files, _this._processOptions);
            }
            else {
                return of_1.of(files);
            }
        }));
        return _this;
        // this.select = this.fsFile.select;
    }
    Object.defineProperty(FsFileComponent.prototype, "multiple", {
        get: function () {
            return this._multiple;
        },
        set: function (value) {
            // TODO This should be a helper function in @firestitch/common
            if (typeof (value) === 'boolean') {
                this._multiple = value;
            }
            else {
                this._multiple = value === 'true';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "accept", {
        get: function () {
            return this._accept.join(', ') || '*';
        },
        set: function (value) {
            this._accept = this._accept.concat(value.split(','));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageWidth", {
        set: function (value) {
            if (value !== void 0) {
                this._processOptions.width = +value;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageHeight", {
        set: function (value) {
            if (value !== void 0) {
                this._processOptions.height = +value;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFileComponent.prototype, "imageQuality", {
        set: function (value) {
            var val = parseFloat(value);
            if (!isNaN(val)) {
                this._processOptions.quality = val;
                this._autoProcess = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    FsFileComponent.prototype.ngOnInit = function () {
        this._inputProcessor.initForElement(this.fileInput);
        this._inputProcessor.initDragNDropForElement(this.el);
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
    ], FsFileComponent.prototype, "disabled", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "imageQuality", null);
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
            template: __webpack_require__("./components/fs-file/fs-file.component.html"),
            styles: [':host label { cursor: pointer }']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsFileComponent);
    return FsFileComponent;
}(fs_file_drag_base_1.FsFileDragBaseComponent));
exports.FsFileComponent = FsFileComponent;


/***/ }),

/***/ "./components/fs-file/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file/fs-file.component.ts"));


/***/ }),

/***/ "./components/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./components/fs-file/index.ts"));
__export(__webpack_require__("./components/fs-file-previews/index.ts"));
__export(__webpack_require__("./components/fs-file-preview/index.ts"));
__export(__webpack_require__("./components/fs-file-picker/index.ts"));
__export(__webpack_require__("./components/fs-file-drag-base/index.ts"));
__export(__webpack_require__("./components/fs-file-preview-base/index.ts"));


/***/ }),

/***/ "./directives/fs-file-preview-action.directive.ts":
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
var core_1 = __webpack_require__("@angular/core");
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

/***/ "./directives/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./directives/fs-file-preview-action.directive.ts"));


/***/ }),

/***/ "./fs-file.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var material_1 = __webpack_require__("@angular/material");
var common_2 = __webpack_require__("@firestitch/common");
var components_1 = __webpack_require__("./components/index.ts");
var directives_1 = __webpack_require__("./directives/index.ts");
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
                components_1.FsFileDragBaseComponent,
                components_1.FsFilePreviewsBaseComponent,
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

/***/ "./helpers/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./helpers/scale-exif-image.ts"));
__export(__webpack_require__("./helpers/is-image-type.ts"));


/***/ }),

/***/ "./helpers/is-image-type.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isImageType(type) {
    return type
        .match(/^image\/(gif|jpe?g|pjpeg|png|svg\+xml|tiff|vnd\.microsoft\.icon|vnd\.wap\.wbmp|webp)/i);
}
exports.isImageType = isImageType;


/***/ }),

/***/ "./helpers/scale-exif-image.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ScaleExifImage(canvas, orientation, maxWidth, maxHeight) {
    if (maxWidth === void 0) { maxWidth = null; }
    if (maxHeight === void 0) { maxHeight = null; }
    var width = canvas.width;
    var height = canvas.height;
    if (maxWidth) {
        if (maxWidth < width) {
            width = maxWidth;
        }
    }
    if (maxHeight) {
        if (maxHeight < height) {
            height = maxHeight;
        }
    }
    var rotatedImage = document.createElement('canvas');
    rotatedImage.width = width;
    rotatedImage.height = height;
    var rotatedCtx = rotatedImage.getContext('2d');
    switch (orientation) {
        case 2:
        case 4:
        case 5:
        case 7:
            rotatedCtx.scale(-1, 1);
            rotatedCtx.drawImage(canvas, 0, 0, width, height, -width, 0, width, height);
            return rotatedImage;
        default:
            return canvas;
    }
}
exports.ScaleExifImage = ScaleExifImage;


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-file.module.ts"));
__export(__webpack_require__("./components/index.ts"));
__export(__webpack_require__("./classes/index.ts"));
__export(__webpack_require__("./directives/index.ts"));


/***/ }),

/***/ "./models/fs-file.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__("./helpers/index.ts");
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
            this.size = value.size;
            if (value.name.match(/^http/)) {
                this.url = value.name;
                var match = value.name.match(/(jpe?g|png|gif|tiff?)$/i);
                if (match) {
                    this.type = 'image/' + match[1];
                }
            }
            else {
                this.name = value.name;
                this.type = value.type;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsFile.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            var parts = name.split('.');
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
            name: this._name,
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

/***/ "./models/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./models/process-config.ts"));
__export(__webpack_require__("./models/fs-file.ts"));


/***/ }),

/***/ "./models/process-config.ts":
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ }),

/***/ "@firestitch/common":
/***/ (function(module, exports) {

module.exports = require("@firestitch/common");

/***/ }),

/***/ "fileapi":
/***/ (function(module, exports) {

module.exports = require("fileapi");

/***/ }),

/***/ "fileapi/plugins/FileAPI.exif.js":
/***/ (function(module, exports) {

module.exports = require("fileapi/plugins/FileAPI.exif.js");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),

/***/ "rxjs/add/observable/fromPromise":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/fromPromise");

/***/ }),

/***/ "rxjs/observable/of":
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/of");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "rxjs/operators/switchMap":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators/switchMap");

/***/ })

/******/ });
});
//# sourceMappingURL=index.map