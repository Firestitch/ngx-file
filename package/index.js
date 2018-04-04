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

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.select mat-icon {\n  -webkit-transform: scale(1.8);\n          transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  -webkit-transform: scale(0.75) translateZ(0.001px);\n          transform: scale(0.75) translateZ(0.001px);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-picker/src/components/fs-file-picker/fs-file-picker.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-picker.component.scss"],"names":[],"mappings":"AAAA;EAGM,2BAAA;EACA,eAAA;CCDL;;ADHD;EAOQ,cAAA;CCAP;;ADPD;EAWQ,eAAA;CCAP;;ADXD;EAiBU,YAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,2BAAA;EACA,oBAAA;EACA,aAAA;CCFT;;ADSD;EACE,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,cAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,+BAAA;UAAA,uBAAA;CCND;;ADLD;EAeI,8BAAA;UAAA,sBAAA;EACA,YAAA;CCNH;;ADUD;EACE,gBAAA;EACA,eAAA;CCPD;;ADUD;EACE,mDAAA;UAAA,2CAAA;EACA,8BAAA;UAAA,sBAAA;CCPD","file":"fs-file-picker.component.scss","sourcesContent":[":host {\n  &.dragover {\n    .select {\n      border: 2px #07a8e6 dashed;\n      color: #07a8e6;\n\n      button {\n        display: none;\n      }\n\n      .mat-icon {\n        color: #07a8e6;\n      }\n    }\n    ::ng-deep {\n      .preview-container {\n        &:after {\n          content: \"\";\n          width: 98%;\n          display: block;\n          height: 98%;\n          position: absolute;\n          left: 0;\n          top: 0;\n          border: 2px #07a8e6 dashed;\n          background: #07a8e6;\n          opacity: 0.4;\n        }\n      }\n    }\n  }\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n\n\n  mat-icon {\n    transform: scale(1.8);\n    color: #ddd;\n  }\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(.75) translateZ(.001px);\n  transform-origin: 0 0;\n}\n",":host.dragover .select {\n  border: 2px #07a8e6 dashed;\n  color: #07a8e6;\n}\n\n:host.dragover .select button {\n  display: none;\n}\n\n:host.dragover .select .mat-icon {\n  color: #07a8e6;\n}\n\n:host.dragover ::ng-deep .preview-container:after {\n  content: \"\";\n  width: 98%;\n  display: block;\n  height: 98%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border: 2px #07a8e6 dashed;\n  background: #07a8e6;\n  opacity: 0.4;\n}\n\n.select {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  width: 150px;\n  height: 150px;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 10px;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\n.select mat-icon {\n  transform: scale(1.8);\n  color: #ddd;\n}\n\n.instruction {\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.label {\n  transform: scale(0.75) translateZ(0.001px);\n  transform-origin: 0 0;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, .5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-preview/src/components/fs-file-preview/fs-file-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-preview/src/styles/_mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,gBAAA;EACA,gBAAA;CCDD;;ADID;EACE,oBAAA;EACA,iBAAA;EACA,wBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;CCDD;;ADID;EACE,mBAAA;EAWA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;CCXD;;ACSC;EFbF;IAII,eAAA;GCKD;CACF;;ACGC;EFbF;IAQI,cAAA;IACA,8BAAA;GCOD;CACF;;ADjBD;EAmBI,mBAAA;EACA,gBAAA;CCEH;;ADLC;EAMI,QAAA;EACA,UAAA;CCGL;;AD3BD;EA4BM,QAAA;EACA,UAAA;CCGL;;ADhCD;EAiCM,WAAA;EACA,SAAA;CCGL;;ADrCD;EAsCM,WAAA;EACA,UAAA;CCGL;;AD1CD;EA2CM,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;CCGL;;ADDK;EACE,eAAA;EACA,6BAAA;CCIP;;ADED;EAEI,kBAAA;EACA,oBAAA;EACA,sBAAA;CCAH;;ADGC;EACE,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;CCAH;;ADbD;EAgBM,gBAAA;CCCL;;ADjBD;;EAqBQ,eAAA;CCCP;;ADGG;EACE,eAAA;EACA,mBAAA;CCAL;;ADMD;EAEI,WAAA;EACA,6BAAA;CCJH;;ADCD;EAOI,mBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCJH;;ADQD;EACE;IACI,eAAA;IACA,iBAAA;GCLH;CACF","file":"fs-file-preview.component.scss","sourcesContent":["@import \"../../styles/mixins\";\n\n.file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n\n  @include apply-to(less-than, phone) {\n    display: block;\n  }\n\n  @include apply-to(greater-than, phone) {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n\n  .action {\n\n    position: absolute;\n    cursor: pointer;\n\n    &.top-left {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.top-right {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.bottom-left {\n      bottom: 5%;\n      left: 5%;\n    }\n\n    &.bottom-right {\n      bottom: 5%;\n      right: 5%;\n    }\n\n    &.mat-mini-fab {\n      width: 22%;\n      height: 22%;\n      min-width: 30px;\n      min-height: 30px;\n      max-width: 42px;\n      max-height: 42px;\n      line-height: 15px !important;\n\n      .mat-button-wrapper {\n        padding: 4px 0;\n        line-height: 15px !important;\n      }\n    }\n  }\n}\n\n:host {\n  &:hover .file-name {\n    overflow: visible;\n    white-space: normal;\n    word-wrap: break-word;\n  }\n\n  &.preview {\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n    border: 1px #DDD solid;\n    vertical-align: top;\n    border-radius: 3px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover, &:focus {\n      .actions {\n        display: block;\n      }\n    }\n\n    img {\n      display: block;\n      border-radius: 3px;\n    }\n  }\n\n}\n\n:host ::ng-deep {\n  .mat-button-wrapper {\n    padding: 0;\n    line-height: 15px !important;\n  }\n\n  .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -25%;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n      display: block;\n      background: none;\n  }\n}\n",".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n@media only screen and (max-width: 767.98px) {\n  .actions {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  .actions {\n    display: none;\n    background: rgba(0, 0, 0, 0.5);\n  }\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions,\n:host.preview:focus .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n","@import \"variables\";\n\n\n@mixin apply-to($ltgt, $device) {\n  $extrema: null;\n  $boundary-target: null;\n  $delta: null;\n\n  @if $ltgt == less-than {\n    $extrema: max;\n    $delta: -1;\n  } @else if $ltgt == greater-than {\n    $extrema: min;\n    $delta: +1;\n  }\n\n  @if $device == phone {\n    @if $ltgt == less-than {\n      $boundary-target: $phone-width-max;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-min;\n    }\n  } @else if $device == tablet {\n    @if $ltgt == less-than {\n      $boundary-target: $tablet-width-min;\n    } @else if $ltgt == greater-than {\n      $boundary-target: $tablet-width-max;\n    }\n  } @else if $device == desktop {\n    $boundary-target: $desktop-width-min;\n  }\n\n  @media only screen and (#{$extrema}-width: $boundary-target) {\n    @content;\n  }\n}\n\n@mixin phone {\n  @media only screen and (max-width: #{$phone-width-max}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media only screen and (min-width: #{$tablet-width-min}) and (max-width: #{$tablet-width-max}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media only screen and (min-width: #{$desktop-width-min}) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-previews/fs-file-previews.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".queue {\n  position: relative;\n  display: block;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-previews/src/components/fs-file-previews/fs-file-previews.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-previews.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,eAAA;CCCD","file":"fs-file-previews.component.scss","sourcesContent":[".queue {\n  position: relative;\n  display: block;\n}\n",".queue {\n  position: relative;\n  display: block;\n}\n\n"],"sourceRoot":""}]);

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

module.exports = "<div class=\"label\"\n     [ngStyle]=\"{'width.px': previewWidth || 150}\">\n  <ng-content select=\"[fs-file-label]\"></ng-content>\n</div>\n<fs-file-preview class=\"preview\"\n                 *ngIf=\"file; else preview\"\n                 (remove)=\"removeFile($event)\"\n                 [file]=\"file\"\n                 [previewWidth]=\"previewWidth\"\n                 [previewHeight]=\"previewHeight\">\n  <ng-template fs-file-preview-action placement=\"bottom-left\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action placement=\"bottom-right\" tooltip=\"Reupload\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n  </ng-template>\n</fs-file-preview>\n\n<ng-template #preview>\n  <div class=\"select\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n    <div class=\"instruction\">{{instruction}}</div>\n    <button mat-raised-button type=\"button\" color=\"primary\">Upload</button>\n  </div>\n</ng-template>\n\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n\n"

/***/ }),

/***/ "./components/fs-file-picker/fs-file-picker.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-picker/fs-file-picker.component.scss");

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
var services_1 = __webpack_require__("./services/index.ts");
var fs_file_drag_base_1 = __webpack_require__("./components/fs-file-drag-base/index.ts");
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
            template: __webpack_require__("./components/fs-file-picker/fs-file-picker.component.html"),
            styles: [__webpack_require__("./components/fs-file-picker/fs-file-picker.component.scss")],
            providers: [services_1.FsFileService]
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, core_1.ElementRef])
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

module.exports = "<div [style.width.px]=\"previewWidth\" [style.height.px]=\"previewHeight\" class=\"preview-container\">\n\n  <!-- Progress container -->\n  <ng-container *ngIf=\"file.progress; else elsePreview\">\n    <mat-spinner class=\"spinner\" [diameter]=\"previewWidth/2\"></mat-spinner>\n  </ng-container>\n\n  <!-- Image container -->\n  <ng-template #elsePreview>\n    <ng-container *ngIf=\"file.typeImage; else nonImage\">\n      <img [src]=\"preview\">\n    </ng-container>\n\n    <!-- Non image container -->\n    <ng-template #nonImage>\n        <div class=\"file-ext\">{{file.extension}}</div>\n        <div class=\"file-name\" [matTooltip]=\"file.name\">{{file.name}}</div>\n    </ng-template>\n  </ng-template>\n</div>\n\n<!-- Actions -->\n<div class=\"actions\">\n  <button type=\"button\" class=\"action\" mat-mini-fab color=\"primary\"\n          *ngFor=\"let action of filteredActions\"\n          [ngClass]=\"getActionClasses(action)\"\n          [matTooltip]=\"action.tooltip\"\n          (click)=\"callAction(action)\">\n    <ng-template [ngTemplateOutlet]=\"actionsTemplate[action.index]\"></ng-template>\n  </button>\n</div>\n"

/***/ }),

/***/ "./components/fs-file-preview/fs-file-preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-preview/fs-file-preview.component.scss");

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
var fs_file_1 = __webpack_require__("./models/fs-file.ts");
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
        FileAPI.Image.transform(file.file, [{
                maxWidth: this.previewWidth,
                maxHeight: this.previewHeight
            }], file.fileOptions.autoOrientation, function (err, images) {
            if (!err && images[0]) {
                if (file.fileOptions.autoOrientation) {
                    var scaledCanvasImage = helpers_1.ScaleExifImage(images[0], file.exifInfo.Orientation, _this.previewWidth, _this.previewHeight);
                    _this.preview = scaledCanvasImage.toDataURL(file.type);
                }
                else {
                    _this.preview = images[0].toDataURL(file.type);
                }
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


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./components/fs-file-previews/fs-file-previews.component.scss");

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

module.exports = "<label (click)=\"fileInput.click()\">\n  <ng-content></ng-content>\n</label>\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n"

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
var services_1 = __webpack_require__("./services/index.ts");
var fs_file_drag_base_1 = __webpack_require__("./components/fs-file-drag-base/index.ts");
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
    Object.defineProperty(FsFileComponent.prototype, "autoOrientation", {
        set: function (value) {
            this.fsFile.autoOrientation = value;
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
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FsFileComponent.prototype, "autoOrientation", null);
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
            template: __webpack_require__("./components/fs-file/fs-file.component.html"),
            providers: [
                services_1.FsFileService,
            ]
        }),
        __metadata("design:paramtypes", [services_1.FsFileService, core_1.ElementRef])
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
__export(__webpack_require__("./services/index.ts"));
__export(__webpack_require__("./directives/index.ts"));


/***/ }),

/***/ "./models/fs-file.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FsFile = (function () {
    function FsFile(file, options) {
        this.progress = false;
        this.exifInfo = {};
        this.file = file;
        this._fileOptions = Object.assign({}, options);
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
        enumerable: true,
        configurable: true
    });
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


/***/ }),

/***/ "./services/fs-file.service.ts":
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
var core_1 = __webpack_require__("@angular/core");
var FileAPI = __webpack_require__("fileapi");
__webpack_require__("fileapi/plugins/FileAPI.exif.js");
var fs_file_1 = __webpack_require__("./models/fs-file.ts");
var helpers_1 = __webpack_require__("./helpers/index.ts");
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
            autoOrientation: true,
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
    Object.defineProperty(FsFileService.prototype, "autoOrientation", {
        get: function () {
            return this._options.autoOrientation;
        },
        set: function (value) {
            this._options.autoOrientation = value;
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
            return new fs_file_1.FsFile(f, _this._options);
        });
        this.select.next(this._options.multiple ? files : files[0]);
        files.forEach(function (file) {
            if (file.typeImage) {
                var resFilePromise = new Promise(function (resolve, reject) {
                    _this.applyTransforms(file, resolve, reject);
                });
                resFilePromise.then(function () { console.log(files); }, function (error) {
                    if (error && error.originFile) {
                        _this.alertImageProcessingError(error.originFile.file);
                    }
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
    FsFileService.prototype.transformFile = function (originFile, transformOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // Transform image by options and rotate if needed
                        FileAPI.Image.transform(originFile.file, [transformOptions], _this._options.autoOrientation, function (err, images) {
                            // Process transformed files
                            if (!err && images[0]) {
                                var canvasImage = void 0;
                                // Check orientation (scale)
                                if (_this._options.autoOrientation) {
                                    canvasImage = helpers_1.ScaleExifImage(images[0], originFile.exifInfo.Orientation);
                                }
                                else {
                                    canvasImage = images[0];
                                }
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
                                }, transformOptions.type, canvasImage.quality);
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
     */
    FsFileService.prototype.applyTransforms = function (file, resolve, reject) {
        return __awaiter(this, void 0, void 0, function () {
            var fileInfo, params, resultFile, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file.progress = this._options.preview;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.getImageInfo(file)];
                    case 2:
                        fileInfo = _a.sent();
                        file.parseInfo(fileInfo);
                        params = this.generateTransformParams(file);
                        return [4 /*yield*/, this.transformFile(file, params)];
                    case 3:
                        resultFile = _a.sent();
                        resolve(resultFile);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FsFileService.prototype.generateTransformParams = function (file) {
        var transformParams = {};
        // Type for result image
        transformParams.type = (this._options.imageFormat) ? 'image/' + this._options.imageFormat : file.type;
        // Quality for result image
        if (this._options.imageQuality !== void 0) {
            transformParams.quality = this._options.imageQuality || 1;
        }
        return transformParams;
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

/***/ "./services/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./services/fs-file.service.ts"));


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

/***/ })

/******/ });
});
//# sourceMappingURL=index.map