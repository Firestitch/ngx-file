(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/material"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/file", ["@angular/core", "@angular/common", "@angular/material"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/file"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/material"));
	else
		root["@firestitch/file"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/material"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_material__) {
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

/***/ "../node_modules/@firestitch/common/common.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("@angular/core"), __webpack_require__("@angular/common")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.common = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsArray = (function () {
    function FsArray() {
    }
    /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    FsArray.prototype.nameValue = /**
     * @param {?} array
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (array, name, value) {
        var /** @type {?} */ list = [];
        if (name || value) {
            var /** @type {?} */ nameFn_1 = typeof name === 'function' ? name : function (item) { return item[name]; };
            var /** @type {?} */ valueFn_1 = typeof value === 'function' ? value : function (item) { return item[value]; };
            array.forEach(function (item) {
                list.push({ name: nameFn_1(item), value: valueFn_1(item) });
            });
        }
        else {
            array.forEach(function (name, value) {
                list.push({ name: name, value: value });
            });
        }
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.remove = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var /** @type {?} */ idx = this.indexOf(array, query);
        if (idx >= 0) {
            return array.splice(idx, 1);
        }
        return idx;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.indexOf = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_1 = query;
            query = function (item) {
                return _this.compare(queryObj_1, item);
            };
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = array.length; i < len; i++) {
            if (query(array[i])) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    FsArray.prototype.compare = /**
     * @param {?} query
     * @param {?} item
     * @return {?}
     */
    function (query, item) {
        var /** @type {?} */ value = true;
        for (var /** @type {?} */ key in query) {
            value = value && item[key] == query[key];
        }
        return value;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.filter = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        var _this = this;
        if (typeof query !== 'function') {
            var /** @type {?} */ queryObj_2 = query;
            query = function (item) {
                return _this.compare(queryObj_2, item);
            };
        }
        var /** @type {?} */ isarray = Array.isArray(array);
        var /** @type {?} */ list = isarray ? [] : {};
        if (isarray)
            array.forEach(function (item, idx) {
                if (query(item)) {
                    list.push(item);
                }
            });
        else
            Object.keys(array).forEach(function (key) {
                if (query(array[key])) {
                    list[key] = array[key];
                }
            });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    FsArray.prototype.index = /**
     * @param {?} array
     * @param {?} property
     * @return {?}
     */
    function (array, property) {
        var /** @type {?} */ list = {};
        array.forEach(function (item, idx) {
            list[item[property]] = item;
        });
        return list;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    FsArray.prototype.sort = /**
     * @param {?} array
     * @param {?} query
     * @param {?=} reverse
     * @return {?}
     */
    function (array, query, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (typeof query !== 'function') {
            var /** @type {?} */ queryStr_1 = query;
            query = function (a, b) {
                if (reverse) {
                    if (a[queryStr_1] < b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] > b[queryStr_1]) {
                        return -1;
                    }
                }
                else {
                    if (a[queryStr_1] > b[queryStr_1]) {
                        return 1;
                    }
                    else if (a[queryStr_1] < b[queryStr_1]) {
                        return -1;
                    }
                }
                return 0;
            };
        }
        array.sort(query);
        return array;
    };
    /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    FsArray.prototype.rsort = /**
     * @param {?} array
     * @param {?} query
     * @return {?}
     */
    function (array, query) {
        return this.sort(array, query, true);
    };
    /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    FsArray.prototype.list = /**
     * @param {?} array
     * @param {?} property
     * @param {?=} index
     * @return {?}
     */
    function (array, property, index) {
        if (index === void 0) { index = null; }
        var /** @type {?} */ list = index ? {} : [];
        array.forEach(function (item, idx) {
            if (index) {
                list[item[index]] = item[property];
            }
            else {
                list.push(item[property]);
            }
        });
        return list;
    };
    /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    FsArray.prototype.applyDepth = /**
     * @param {?} objects
     * @param {?} parent_property
     * @param {?=} id_property
     * @param {?=} depth_property
     * @return {?}
     */
    function (objects, parent_property, id_property, depth_property) {
        if (id_property === void 0) { id_property = 'id'; }
        if (depth_property === void 0) { depth_property = 'depth'; }
        var /** @type {?} */ keyed = {};
        objects.forEach(function (object) {
            if (!object[parent_property])
                object[depth_property] = 0;
            keyed[object[id_property]] = object;
        });
        Object.keys(keyed).forEach(function (key) {
            Object.keys(keyed).forEach(function (key) {
                if (!keyed[key][depth_property]) {
                    if (keyed[key][parent_property]) {
                        keyed[key][depth_property] = keyed[keyed[key][parent_property]][depth_property] + 1;
                    }
                }
            });
        });
        return keyed;
    };
    /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    FsArray.prototype.inArray = /**
     * @param {?} values
     * @param {?} array
     * @return {?}
     */
    function (values, array) {
        if (!Array.isArray(values)) {
            values = [values];
        }
        for (var /** @type {?} */ i = 0, /** @type {?} */ len = values.length; i < len; i++) {
            if (array.indexOf(values[i]) >= 0) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    FsArray.prototype.keyExists = /**
     * @param {?} array
     * @param {?} key
     * @return {?}
     */
    function (array, key) {
        return array.hasOwnProperty(key);
    };
    /**
     * @param {?} array
     * @return {?}
     */
    FsArray.prototype.length = /**
     * @param {?} array
     * @return {?}
     */
    function (array) {
        return array.length;
    };
    /**
     * @param {?} unordered
     * @return {?}
     */
    FsArray.prototype.ksort = /**
     * @param {?} unordered
     * @return {?}
     */
    function (unordered) {
        Object.keys(unordered).sort().forEach(function (key) {
            var /** @type {?} */ value = unordered[key];
            delete unordered[key];
            unordered[key] = value;
        });
    };
    FsArray.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsArray.ctorParameters = function () { return []; };
    return FsArray;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsMath = (function () {
    function FsMath() {
    }
    /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    FsMath.prototype.round = /**
     * @param {?} number
     * @param {?} precision
     * @return {?}
     */
    function (number, precision) {
        precision = precision || 0;
        var /** @type {?} */ factor = Math.pow(10, precision);
        var /** @type {?} */ tempNumber = number * factor;
        var /** @type {?} */ roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    FsMath.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsMath.ctorParameters = function () { return []; };
    return FsMath;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KEY_CANCEL = 3;
var KEY_HELP = 6;
var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_CLEAR = 12;
var KEY_RETURN = 13;
var KEY_ENTER = 14;
var KEY_SHIFT = 16;
var KEY_CONTROL = 17;
var KEY_ALT = 18;
var KEY_PAUSE = 19;
var KEY_CAPS_LOCK = 20;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_PAGE_UP = 33;
var KEY_PAGE_DOWN = 34;
var KEY_END = 35;
var KEY_HOME = 36;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_PRINTSCREEN = 44;
var KEY_INSERT = 45;
var KEY_DELETE = 46;
var KEY_0 = 48;
var KEY_1 = 49;
var KEY_2 = 50;
var KEY_3 = 51;
var KEY_4 = 52;
var KEY_5 = 53;
var KEY_6 = 54;
var KEY_7 = 55;
var KEY_8 = 56;
var KEY_9 = 57;
var KEY_SEMICOLON = 59;
var KEY_EQUALS = 61;
var FsUtil = (function () {
    function FsUtil() {
        this.intervals = {};
    }
    /**
     * @param {?=} pattern
     * @return {?}
     */
    FsUtil.prototype.guid = /**
     * @param {?=} pattern
     * @return {?}
     */
    function (pattern) {
        pattern = pattern || 'xxxxxx';
        return pattern.replace(/[xy]/g, function (c) {
            var /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    /**
     * @return {?}
     */
    FsUtil.prototype.uuid = /**
     * @return {?}
     */
    function () {
        return this.guid('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    };
    /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    FsUtil.prototype.resolve = /**
     * @param {?} promise
     * @param {?=} defaults
     * @return {?}
     */
    function (promise, defaults) {
        if (defaults === void 0) { defaults = []; }
        var /** @type {?} */ result = defaults;
        return new Promise(function (resolve) {
            promise.then(function (data) {
                Object.keys(data).forEach(function (key) { return result[key] = data[key]; });
                resolve(result);
            });
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.int = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.float = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }
        return value;
    };
    /**
     * @param {?} string
     * @return {?}
     */
    FsUtil.prototype.string = /**
     * @param {?} string
     * @return {?}
     */
    function (string) {
        if (string === null || string === undefined) {
            string = '';
        }
        return (string).toString();
    };
    /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FsUtil.prototype.isEmpty = /**
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    function (value, options) {
        options = options || {};
        return value === undefined ||
            value === null ||
            value === false ||
            value === '' ||
            !this.string(value).length ||
            (this.isObject(value) &&
                (value.constructor.name === 'Object' && !Object.keys(value).length)) ||
            (!options.zero && (value === 0 || value === '0'));
    };
    /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    FsUtil.prototype.isInt = /**
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    function (value, type) {
        var /** @type {?} */ int = !!this.string(value).match(/^\d+$/);
        if (!int) {
            return false;
        }
        if (type) {
            return Number.isInteger(value);
        }
        return true;
    };
    /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    FsUtil.prototype.each = /**
     * @param {?} object
     * @param {?} func
     * @return {?}
     */
    function (object, func) {
        if (!this.isArray(object) && !this.isObject(object)) {
            return;
        }
        Object.keys(object).forEach(function (key) {
            func(object[key], key);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isObject = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && typeof value === 'object' && !this.isArray(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isArray = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Array;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isNumeric = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).length && !!this.string(value).match(/^-?\d*\.?\d*$/);
    };
    /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    FsUtil.prototype.isClass = /**
     * @param {?} value
     * @param {?} cls
     * @return {?}
     */
    function (value, cls) {
        if (this.isObject(value)) {
            if (this.isString(cls)) {
                if (value.constructor) {
                    if (value.constructor.name === cls) {
                        return true;
                    }
                }
            }
            else {
                if (value instanceof cls) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.isBoolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === true || value === false;
    };
    /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    FsUtil.prototype.value = /**
     * @param {?} object
     * @param {?} key
     * @param {?} def
     * @return {?}
     */
    function (object, key, def) {
        if (this.isObject(object) || this.isArray(object)) {
            if (object.hasOwnProperty(key)) {
                return object[key];
            }
        }
        return def;
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    FsUtil.prototype.interval = /**
     * @param {?} fn
     * @param {?} delay
     * @param {?} name
     * @return {?}
     */
    function (fn, delay, name) {
        var /** @type {?} */ instance = setInterval(fn, delay);
        if (name) {
            this.intervals[name] = instance;
        }
        return function () {
            window.clearInterval(instance);
        };
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FsUtil.prototype.clearInterval = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ instance = this.intervals[name];
        if (instance) {
            window.clearInterval(instance);
        }
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    FsUtil.prototype.throttle = /**
     * @param {?} func
     * @param {?} wait
     * @return {?}
     */
    function (func, wait) {
        var /** @type {?} */ waiting = false; // Initially, we're not waiting
        return function () {
            // We return a throttled function
            if (!waiting) {
                // If we're not waiting
                func.apply(null, arguments); // Execute users function
                waiting = true; // Prevent future invocations
                setTimeout(function () {
                    // After a period of time
                    waiting = false; // And allow future invocations
                }, wait);
            }
        };
    };
    /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    FsUtil.prototype.debounce = /**
     * @param {?} func
     * @param {?} wait
     * @param {?} immediate
     * @return {?}
     */
    function (func, wait, immediate) {
        var /** @type {?} */ timeout;
        return function () {
            var /** @type {?} */ context = this, /** @type {?} */ args = arguments;
            var /** @type {?} */ later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var /** @type {?} */ callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    /**
     * @param {?} object
     * @return {?}
     */
    FsUtil.prototype.length = /**
     * @param {?} object
     * @return {?}
     */
    function (object) {
        if (this.isObject(object)) {
            return Object.keys(object).length;
        }
        if (this.isArray(object)) {
            return object.length;
        }
        return 0;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.boolean = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.string(value).toLowerCase() !== 'false' && !!value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtil.prototype.stringify = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JSON.stringify(value);
    };
    FsUtil.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsUtil.ctorParameters = function () { return []; };
    return FsUtil;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsValidate = (function () {
    function FsValidate(fsUtil) {
        this.fsUtil = fsUtil;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FsValidate.prototype.phone = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
        return valid || !String(value).length;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FsValidate.prototype.email = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return !!this.fsUtil.string(value).match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    FsValidate.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FsValidate.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsValidate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsUtilStringifyPipe = (function () {
    function FsUtilStringifyPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FsUtilStringifyPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.FsUtil.stringify(value);
    };
    FsUtilStringifyPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilStringify'
                },] },
    ];
    /** @nocollapse */
    FsUtilStringifyPipe.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsUtilStringifyPipe;
}());
var FsUtilGuidPipe = (function () {
    function FsUtilGuidPipe(FsUtil$$1) {
        this.FsUtil = FsUtil$$1;
    }
    /**
     * @return {?}
     */
    FsUtilGuidPipe.prototype.transform = /**
     * @return {?}
     */
    function () {
        return this.FsUtil.guid();
    };
    FsUtilGuidPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'fsUtilGuid'
                },] },
    ];
    /** @nocollapse */
    FsUtilGuidPipe.ctorParameters = function () { return [
        { type: FsUtil, },
    ]; };
    return FsUtilGuidPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FsCommonModule = (function () {
    function FsCommonModule() {
    }
    /**
     * @return {?}
     */
    FsCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FsCommonModule,
            providers: [
                FsArray,
                FsUtil,
                FsMath,
                FsValidate
            ]
        };
    };
    FsCommonModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ],
                    providers: [
                        FsArray,
                        FsUtil,
                        FsMath,
                        FsValidate
                    ],
                    exports: [
                        FsUtilStringifyPipe,
                        FsUtilGuidPipe
                    ]
                },] },
    ];
    /** @nocollapse */
    FsCommonModule.ctorParameters = function () { return []; };
    return FsCommonModule;
}());

exports.FsCommonModule = FsCommonModule;
exports.FsUtilStringifyPipe = FsUtilStringifyPipe;
exports.FsUtilGuidPipe = FsUtilGuidPipe;
exports.KEY_CANCEL = KEY_CANCEL;
exports.KEY_HELP = KEY_HELP;
exports.KEY_BACKSPACE = KEY_BACKSPACE;
exports.KEY_TAB = KEY_TAB;
exports.KEY_CLEAR = KEY_CLEAR;
exports.KEY_RETURN = KEY_RETURN;
exports.KEY_ENTER = KEY_ENTER;
exports.KEY_SHIFT = KEY_SHIFT;
exports.KEY_CONTROL = KEY_CONTROL;
exports.KEY_ALT = KEY_ALT;
exports.KEY_PAUSE = KEY_PAUSE;
exports.KEY_CAPS_LOCK = KEY_CAPS_LOCK;
exports.KEY_ESCAPE = KEY_ESCAPE;
exports.KEY_SPACE = KEY_SPACE;
exports.KEY_PAGE_UP = KEY_PAGE_UP;
exports.KEY_PAGE_DOWN = KEY_PAGE_DOWN;
exports.KEY_END = KEY_END;
exports.KEY_HOME = KEY_HOME;
exports.KEY_LEFT = KEY_LEFT;
exports.KEY_UP = KEY_UP;
exports.KEY_RIGHT = KEY_RIGHT;
exports.KEY_DOWN = KEY_DOWN;
exports.KEY_PRINTSCREEN = KEY_PRINTSCREEN;
exports.KEY_INSERT = KEY_INSERT;
exports.KEY_DELETE = KEY_DELETE;
exports.KEY_0 = KEY_0;
exports.KEY_1 = KEY_1;
exports.KEY_2 = KEY_2;
exports.KEY_3 = KEY_3;
exports.KEY_4 = KEY_4;
exports.KEY_5 = KEY_5;
exports.KEY_6 = KEY_6;
exports.KEY_7 = KEY_7;
exports.KEY_8 = KEY_8;
exports.KEY_9 = KEY_9;
exports.KEY_SEMICOLON = KEY_SEMICOLON;
exports.KEY_EQUALS = KEY_EQUALS;
exports.FsUtil = FsUtil;
exports.FsArray = FsArray;
exports.FsMath = FsMath;
exports.FsValidate = FsValidate;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

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
exports.push([module.i, ".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, .5);\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-file/src/components/fs-file-preview/src/components/fs-file-preview/fs-file-preview.component.scss","/Users/Basters/dev/firestitch/fs-file/fs-file-preview.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,gBAAA;EACA,gBAAA;CCCD;;ADED;EACE,oBAAA;EACA,iBAAA;EACA,wBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;CCCD;;ADED;EACE,mBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;EACA,8BAAA;CCCD;;ADRD;EAWI,mBAAA;EACA,gBAAA;CCCH;;ADbD;EAeM,QAAA;EACA,UAAA;CCEL;;ADTC;EAWI,QAAA;EACA,UAAA;CCEL;;ADvBD;EAyBM,WAAA;EACA,SAAA;CCEL;;ADnBC;EAqBI,WAAA;EACA,UAAA;CCEL;;ADjCD;EAmCM,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;CCEL;;AD3CD;EA4CQ,eAAA;EACA,6BAAA;CCGP;;ADIS;EACN,kBAAA;EACA,oBAAA;EACA,sBAAA;CCDH;;ADHD;EAQI,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,mBAAA;CCDH;;ADGG;EACE,gBAAA;CCAL;;ADIK;EACE,eAAA;CCDP;;ADKG;EACE,eAAA;EACA,mBAAA;CCFL;;ADQD;EAEI,WAAA;EACA,6BAAA;CCNH;;ADSC;EACE,mBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;CCNH;;ADUD;EACE;IACI,eAAA;IACA,iBAAA;GCPH;CACF","file":"fs-file-preview.component.scss","sourcesContent":[".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n\n  .action {\n\n    position: absolute;\n    cursor: pointer;\n\n    &.top-left {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.top-right {\n      top: 5%;\n      right: 5%;\n    }\n\n    &.bottom-left {\n      bottom: 5%;\n      left: 5%;\n    }\n\n    &.bottom-right {\n      bottom: 5%;\n      right: 5%;\n    }\n\n    &.mat-mini-fab {\n      width: 22%;\n      height: 22%;\n      min-width: 30px;\n      min-height: 30px;\n      max-width: 42px;\n      max-height: 42px;\n      line-height: 15px !important;\n\n      .mat-button-wrapper {\n        padding: 4px 0;\n        line-height: 15px !important;\n      }\n    }\n  }\n}\n\n:host {\n  &:hover .file-name {\n    overflow: visible;\n    white-space: normal;\n    word-wrap: break-word;\n  }\n\n  &.preview {\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n    border: 1px #DDD solid;\n    vertical-align: top;\n    border-radius: 3px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover {\n      .actions {\n        display: block;\n      }\n    }\n\n    img {\n      display: block;\n      border-radius: 3px;\n    }\n  }\n\n}\n\n:host ::ng-deep {\n  .mat-button-wrapper {\n    padding: 0;\n    line-height: 15px !important;\n  }\n\n  .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -25%;\n    margin-top: -25%;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n      display: block;\n      background: none;\n  }\n}\n",".file-ext {\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 25px;\n}\n\n.file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.actions {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.actions .action {\n  position: absolute;\n  cursor: pointer;\n}\n\n.actions .action.top-left {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.top-right {\n  top: 5%;\n  right: 5%;\n}\n\n.actions .action.bottom-left {\n  bottom: 5%;\n  left: 5%;\n}\n\n.actions .action.bottom-right {\n  bottom: 5%;\n  right: 5%;\n}\n\n.actions .action.mat-mini-fab {\n  width: 22%;\n  height: 22%;\n  min-width: 30px;\n  min-height: 30px;\n  max-width: 42px;\n  max-height: 42px;\n  line-height: 15px !important;\n}\n\n.actions .action.mat-mini-fab .mat-button-wrapper {\n  padding: 4px 0;\n  line-height: 15px !important;\n}\n\n:host:hover .file-name {\n  overflow: visible;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n:host.preview {\n  display: inline-block;\n  position: relative;\n  margin-right: 10px;\n  border: 1px #DDD solid;\n  vertical-align: top;\n  border-radius: 3px;\n}\n\n:host.preview:last-child {\n  margin-right: 0;\n}\n\n:host.preview:hover .actions {\n  display: block;\n}\n\n:host.preview img {\n  display: block;\n  border-radius: 3px;\n}\n\n:host ::ng-deep .mat-button-wrapper {\n  padding: 0;\n  line-height: 15px !important;\n}\n\n:host ::ng-deep .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -25%;\n}\n\n@media only screen and (max-width: 550px) {\n  .actions {\n    display: block;\n    background: none;\n  }\n}\n\n"],"sourceRoot":""}]);

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

/***/ "../node_modules/fileapi/dist/FileAPI.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! FileAPI 2.0.25 - BSD | git://github.com/mailru/FileAPI.git
 * FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
 */

/*
 * JavaScript Canvas to Blob 2.0.5
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/*jslint nomen: true, regexp: true */
/*global window, atob, Blob, ArrayBuffer, Uint8Array */

(function (window) {
    'use strict';
    var CanvasPrototype = window.HTMLCanvasElement &&
            window.HTMLCanvasElement.prototype,
        hasBlobConstructor = window.Blob && (function () {
            try {
                return Boolean(new Blob());
            } catch (e) {
                return false;
            }
        }()),
        hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array &&
            (function () {
                try {
                    return new Blob([new Uint8Array(100)]).size === 100;
                } catch (e) {
                    return false;
                }
            }()),
        BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder ||
            window.MozBlobBuilder || window.MSBlobBuilder,
        dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob &&
            window.ArrayBuffer && window.Uint8Array && function (dataURI) {
                var byteString,
                    arrayBuffer,
                    intArray,
                    i,
                    mimeString,
                    bb;
                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                    // Convert base64 to raw binary data held in a string:
                    byteString = atob(dataURI.split(',')[1]);
                } else {
                    // Convert base64/URLEncoded data component to raw binary data:
                    byteString = decodeURIComponent(dataURI.split(',')[1]);
                }
                // Write the bytes of the string to an ArrayBuffer:
                arrayBuffer = new ArrayBuffer(byteString.length);
                intArray = new Uint8Array(arrayBuffer);
                for (i = 0; i < byteString.length; i += 1) {
                    intArray[i] = byteString.charCodeAt(i);
                }
                // Separate out the mime component:
                mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // Write the ArrayBuffer (or ArrayBufferView) to a blob:
                if (hasBlobConstructor) {
                    return new Blob(
                        [hasArrayBufferViewSupport ? intArray : arrayBuffer],
                        {type: mimeString}
                    );
                }
                bb = new BlobBuilder();
                bb.append(arrayBuffer);
                return bb.getBlob(mimeString);
            };
    if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                    callback(dataURLtoBlob(this.toDataURL(type, quality)));
                } else {
                    callback(this.mozGetAsFile('blob', type));
                }
            };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
                callback(dataURLtoBlob(this.toDataURL(type, quality)));
            };
        }
    }
    window.dataURLtoBlob = dataURLtoBlob;
})(window);

/*jslint evil: true */
/*global window, URL, webkitURL, ActiveXObject */

(function (window, undef){
	'use strict';

	var
		gid = 1,
		noop = function (){},

		document = window.document,
		doctype = document.doctype || {},
		userAgent = window.navigator.userAgent,
		safari = /safari\//i.test(userAgent) && !/chrome\//i.test(userAgent),
		iemobile = /iemobile\//i.test(userAgent),
		insecureChrome = !safari && /chrome\//i.test(userAgent) && window.location.protocol === 'http:',

		// https://github.com/blueimp/JavaScript-Load-Image/blob/master/load-image.js#L48
		apiURL = (window.createObjectURL && window) || (window.URL && URL.revokeObjectURL && URL) || (window.webkitURL && webkitURL),

		Blob = window.Blob,
		File = window.File,
		FileReader = window.FileReader,
		FormData = window.FormData,


		XMLHttpRequest = window.XMLHttpRequest,
		jQuery = window.jQuery,

		html5 =    !!(File && (FileReader && (window.Uint8Array || FormData || XMLHttpRequest.prototype.sendAsBinary)))
				&& !(safari && /windows/i.test(userAgent) && !iemobile), // BugFix: https://github.com/mailru/FileAPI/issues/25

		cors = html5 && ('withCredentials' in (new XMLHttpRequest)),

		chunked = html5 && !!Blob && !!(Blob.prototype.webkitSlice || Blob.prototype.mozSlice || Blob.prototype.slice),

		normalize = ('' + ''.normalize).indexOf('[native code]') > 0,

		// https://github.com/blueimp/JavaScript-Canvas-to-Blob
		dataURLtoBlob = window.dataURLtoBlob,


		_rimg = /img/i,
		_rcanvas = /canvas/i,
		_rimgcanvas = /img|canvas/i,
		_rinput = /input/i,
		_rdata = /^data:[^,]+,/,

		_toString = {}.toString,
		_supportConsoleLog,
		_supportConsoleLogApply,


		Math = window.Math,

		_SIZE_CONST = function (pow){
			pow = new window.Number(Math.pow(1024, pow));
			pow.from = function (sz){ return Math.round(sz * this); };
			return	pow;
		},

		_elEvents = {}, // element event listeners
		_infoReader = [], // list of file info processors

		_readerEvents = 'abort progress error load loadend',
		_xhrPropsExport = 'status statusText readyState response responseXML responseText responseBody'.split(' '),

		currentTarget = 'currentTarget', // for minimize
		preventDefault = 'preventDefault', // and this too

		_isArray = function (ar) {
			return	ar && ('length' in ar);
		},

		/**
		 * Iterate over a object or array
		 */
		_each = function (obj, fn, ctx){
			if( obj ){
				if( _isArray(obj) ){
					for( var i = 0, n = obj.length; i < n; i++ ){
						if( i in obj ){
							fn.call(ctx, obj[i], i, obj);
						}
					}
				}
				else {
					for( var key in obj ){
						if( obj.hasOwnProperty(key) ){
							fn.call(ctx, obj[key], key, obj);
						}
					}
				}
			}
		},

		/**
		 * Merge the contents of two or more objects together into the first object
		 */
		_extend = function (dst){
			var args = arguments, i = 1, _ext = function (val, key){ dst[key] = val; };
			for( ; i < args.length; i++ ){
				_each(args[i], _ext);
			}
			return  dst;
		},

		/**
		 * Add event listener
		 */
		_on = function (el, type, fn){
			if( el ){
				var uid = api.uid(el);

				if( !_elEvents[uid] ){
					_elEvents[uid] = {};
				}

				var isFileReader = (FileReader && el) && (el instanceof FileReader);
				_each(type.split(/\s+/), function (type){
					if( jQuery && !isFileReader){
						jQuery.event.add(el, type, fn);
					} else {
						if( !_elEvents[uid][type] ){
							_elEvents[uid][type] = [];
						}

						_elEvents[uid][type].push(fn);

						if( el.addEventListener ){ el.addEventListener(type, fn, false); }
						else if( el.attachEvent ){ el.attachEvent('on'+type, fn); }
						else { el['on'+type] = fn; }
					}
				});
			}
		},


		/**
		 * Remove event listener
		 */
		_off = function (el, type, fn){
			if( el ){
				var uid = api.uid(el), events = _elEvents[uid] || {};

				var isFileReader = (FileReader && el) && (el instanceof FileReader);
				_each(type.split(/\s+/), function (type){
					if( jQuery && !isFileReader){
						jQuery.event.remove(el, type, fn);
					}
					else {
						var fns = events[type] || [], i = fns.length;

						while( i-- ){
							if( fns[i] === fn ){
								fns.splice(i, 1);
								break;
							}
						}

						if( el.addEventListener ){ el.removeEventListener(type, fn, false); }
						else if( el.detachEvent ){ el.detachEvent('on'+type, fn); }
						else { el['on'+type] = null; }
					}
				});
			}
		},


		_one = function(el, type, fn){
			_on(el, type, function _(evt){
				_off(el, type, _);
				fn(evt);
			});
		},


		_fixEvent = function (evt){
			if( !evt.target ){ evt.target = window.event && window.event.srcElement || document; }
			if( evt.target.nodeType === 3 ){ evt.target = evt.target.parentNode; }
			return  evt;
		},


		_supportInputAttr = function (attr){
			var input = document.createElement('input');
			input.setAttribute('type', "file");
			return attr in input;
		},


		/**
		 * FileAPI (core object)
		 */
		api = {
			version: '2.0.25',

			cors: false,
			html5: true,
			media: false,
			formData: true,
			multiPassResize: true,
			insecureChrome: insecureChrome,

			debug: false,
			pingUrl: false,
			multiFlash: false,
			flashAbortTimeout: 0,
			withCredentials: true,

			staticPath: './dist/',

			flashUrl: 0, // @default: './FileAPI.flash.swf'
			flashImageUrl: 0, // @default: './FileAPI.flash.image.swf'

			postNameConcat: function (name, idx){
				return	name + (idx != null ? '['+ idx +']' : '');
			},

			ext2mime: {
				  jpg:	'image/jpeg'
				, tif:	'image/tiff'
				, txt:	'text/plain'
			},

			// Fallback for flash
			accept: {
				  'image/*': 'art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd'
				, 'audio/*': 'm4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs'
				, 'video/*': 'm4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl'
			},

			uploadRetry : 0,
			networkDownRetryTimeout : 5000, // milliseconds, don't flood when network is down

			chunkSize : 0,
			chunkUploadRetry : 0,
			chunkNetworkDownRetryTimeout : 2000, // milliseconds, don't flood when network is down

			KB: _SIZE_CONST(1),
			MB: _SIZE_CONST(2),
			GB: _SIZE_CONST(3),
			TB: _SIZE_CONST(4),

			EMPTY_PNG: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=',

			expando: 'fileapi' + (new Date).getTime(),

			uid: function (obj){
				return	obj
					? (obj[api.expando] = obj[api.expando] || api.uid())
					: (++gid, api.expando + gid)
				;
			},

			log: function (){
				if( api.debug && _supportConsoleLog ){
					if( _supportConsoleLogApply ){
						console.log.apply(console, arguments);
					}
					else {
						console.log([].join.call(arguments, ' '));
					}
				}
			},

			/**
			 * Create new image
			 *
			 * @param {String} [src]
			 * @param {Function} [fn]   1. error -- boolean, 2. img -- Image element
			 * @returns {HTMLElement}
			 */
			newImage: function (src, fn){
				var img = document.createElement('img');
				if( fn ){
					api.event.one(img, 'error load', function (evt){
						fn(evt.type == 'error', img);
						img = null;
					});
				}
				img.src = src;
				return	img;
			},

			/**
			 * Get XHR
			 * @returns {XMLHttpRequest}
			 */
			getXHR: function (){
				var xhr;

				if( XMLHttpRequest ){
					xhr = new XMLHttpRequest;
				}
				else if( window.ActiveXObject ){
					try {
						xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
					} catch (e) {
						xhr = new ActiveXObject('Microsoft.XMLHTTP');
					}
				}

				return  xhr;
			},

			isArray: _isArray,

			support: {
				dnd:     cors && ('ondrop' in document.createElement('div')),
				cors:    cors,
				html5:   html5,
				chunked: chunked,
				dataURI: true,
				accept:   _supportInputAttr('accept'),
				multiple: _supportInputAttr('multiple')
			},

			event: {
				  on: _on
				, off: _off
				, one: _one
				, fix: _fixEvent
			},


			throttle: function(fn, delay) {
				var id, args;

				return function _throttle(){
					args = arguments;

					if( !id ){
						fn.apply(window, args);
						id = setTimeout(function (){
							id = 0;
							fn.apply(window, args);
						}, delay);
					}
				};
			},


			F: function (){},


			parseJSON: function (str){
				var json;
				if( window.JSON && JSON.parse ){
					json = JSON.parse(str);
				}
				else {
					json = (new Function('return ('+str.replace(/([\r\n])/g, '\\$1')+');'))();
				}
				return json;
			},


			trim: function (str){
				str = String(str);
				return	str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
			},

			/**
			 * Simple Defer
			 * @return	{Object}
			 */
			defer: function (){
				var
					  list = []
					, result
					, error
					, defer = {
						resolve: function (err, res){
							defer.resolve = noop;
							error	= err || false;
							result	= res;

							while( res = list.shift() ){
								res(error, result);
							}
						},

						then: function (fn){
							if( error !== undef ){
								fn(error, result);
							} else {
								list.push(fn);
							}
						}
				};

				return	defer;
			},

			queue: function (fn){
				var
					  _idx = 0
					, _length = 0
					, _fail = false
					, _end = false
					, queue = {
						inc: function (){
							_length++;
						},

						next: function (){
							_idx++;
							setTimeout(queue.check, 0);
						},

						check: function (){
							(_idx >= _length) && !_fail && queue.end();
						},

						isFail: function (){
							return _fail;
						},

						fail: function (){
							!_fail && fn(_fail = true);
						},

						end: function (){
							if( !_end ){
								_end = true;
								fn();
							}
						}
					}
				;
				return queue;
			},


			/**
			 * For each object
			 *
			 * @param	{Object|Array}	obj
			 * @param	{Function}		fn
			 * @param	{*}				[ctx]
			 */
			each: _each,


			/**
			 * Async for
			 * @param {Array} array
			 * @param {Function} callback
			 */
			afor: function (array, callback){
				var i = 0, n = array.length;

				if( _isArray(array) && n-- ){
					(function _next(){
						callback(n != i && _next, array[i], i++);
					})();
				}
				else {
					callback(false);
				}
			},


			/**
			 * Merge the contents of two or more objects together into the first object
			 *
			 * @param	{Object}	dst
			 * @return	{Object}
			 */
			extend: _extend,


			/**
			 * Is file?
			 * @param  {File}  file
			 * @return {Boolean}
			 */
			isFile: function (file){
				return _toString.call(file) === '[object File]';
			},


			/**
			 * Is blob?
			 * @param   {Blob}  blob
			 * @returns {Boolean}
			 */
			isBlob: function (blob) {
				return this.isFile(blob) || (_toString.call(blob) === '[object Blob]');
			},


			/**
			 * Is canvas element
			 *
			 * @param	{HTMLElement}	el
			 * @return	{Boolean}
			 */
			isCanvas: function (el){
				return	el && _rcanvas.test(el.nodeName);
			},


			getFilesFilter: function (filter){
				filter = typeof filter == 'string' ? filter : (filter.getAttribute && filter.getAttribute('accept') || '');
				return	filter ? new RegExp('('+ filter.replace(/\./g, '\\.').replace(/,/g, '|') +')$', 'i') : /./;
			},



			/**
			 * Read as DataURL
			 *
			 * @param {File|Element} file
			 * @param {Function} fn
			 */
			readAsDataURL: function (file, fn){
				if( api.isCanvas(file) ){
					_emit(file, fn, 'load', api.toDataURL(file));
				}
				else {
					_readAs(file, fn, 'DataURL');
				}
			},


			/**
			 * Read as Binary string
			 *
			 * @param {File} file
			 * @param {Function} fn
			 */
			readAsBinaryString: function (file, fn){
				if( _hasSupportReadAs('BinaryString') ){
					_readAs(file, fn, 'BinaryString');
				} else {
					// Hello IE10!
					_readAs(file, function (evt){
						if( evt.type == 'load' ){
							try {
								// dataURL -> binaryString
								evt.result = api.toBinaryString(evt.result);
							} catch (e){
								evt.type = 'error';
								evt.message = e.toString();
							}
						}
						fn(evt);
					}, 'DataURL');
				}
			},


			/**
			 * Read as ArrayBuffer
			 *
			 * @param {File} file
			 * @param {Function} fn
			 */
			readAsArrayBuffer: function(file, fn){
				_readAs(file, fn, 'ArrayBuffer');
			},


			/**
			 * Read as text
			 *
			 * @param {File} file
			 * @param {String} encoding
			 * @param {Function} [fn]
			 */
			readAsText: function(file, encoding, fn){
				if( !fn ){
					fn	= encoding;
					encoding = 'utf-8';
				}

				_readAs(file, fn, 'Text', encoding);
			},


			/**
			 * Convert image or canvas to DataURL
			 *
			 * @param   {Element}  el      Image or Canvas element
			 * @param   {String}   [type]  mime-type
			 * @return  {String}
			 */
			toDataURL: function (el, type){
				if( typeof el == 'string' ){
					return  el;
				}
				else if( el.toDataURL ){
					return  el.toDataURL(type || 'image/png');
				}
			},


			/**
			 * Canvert string, image or canvas to binary string
			 *
			 * @param   {String|Element} val
			 * @return  {String}
			 */
			toBinaryString: function (val){
				return  window.atob(api.toDataURL(val).replace(_rdata, ''));
			},


			/**
			 * Read file or DataURL as ImageElement
			 *
			 * @param	{File|String}	file
			 * @param	{Function}		fn
			 * @param	{Boolean}		[progress]
			 */
			readAsImage: function (file, fn, progress){
				if( api.isBlob(file) ){
					if( apiURL ){
						/** @namespace apiURL.createObjectURL */
						var data = apiURL.createObjectURL(file);
						if( data === undef ){
							_emit(file, fn, 'error');
						}
						else {
							api.readAsImage(data, fn, progress);
						}
					}
					else {
						api.readAsDataURL(file, function (evt){
							if( evt.type == 'load' ){
								api.readAsImage(evt.result, fn, progress);
							}
							else if( progress || evt.type == 'error' ){
								_emit(file, fn, evt, null, { loaded: evt.loaded, total: evt.total });
							}
						});
					}
				}
				else if( api.isCanvas(file) ){
					_emit(file, fn, 'load', file);
				}
				else if( _rimg.test(file.nodeName) ){
					if( file.complete ){
						_emit(file, fn, 'load', file);
					}
					else {
						var events = 'error abort load';
						_one(file, events, function _fn(evt){
							if( evt.type == 'load' && apiURL ){
								/** @namespace apiURL.revokeObjectURL */
								apiURL.revokeObjectURL(file.src);
							}

							_off(file, events, _fn);
							_emit(file, fn, evt, file);
						});
					}
				}
				else if( file.iframe ){
					_emit(file, fn, { type: 'error' });
				}
				else {
					// Created image
					var img = api.newImage(file.dataURL || file);
					api.readAsImage(img, fn, progress);
				}
			},


			/**
			 * Make file by name
			 *
			 * @param	{String}	name
			 * @return	{Array}
			 */
			checkFileObj: function (name){
				var file = {}, accept = api.accept;

				if( typeof name == 'object' ){
					file = name;
				}
				else {
					file.name = (name + '').split(/\\|\//g).pop();
				}

				if( file.type == null ){
					file.type = file.name.split('.').pop();
				}

				_each(accept, function (ext, type){
					ext = new RegExp(ext.replace(/\s/g, '|'), 'i');
					if( ext.test(file.type) || api.ext2mime[file.type] ){
						file.type = api.ext2mime[file.type] || (type.split('/')[0] +'/'+ file.type);
					}
				});

				return	file;
			},


			/**
			 * Get drop files
			 *
			 * @param	{Event}	evt
			 * @param	{Function} callback
			 */
			getDropFiles: function (evt, callback){
				var
					  files = []
					, all = []
					, items
					, dataTransfer = _getDataTransfer(evt)
					, transFiles = dataTransfer.files
					, transItems = dataTransfer.items
					, entrySupport = _isArray(transItems) && transItems[0] && _getAsEntry(transItems[0])
					, queue = api.queue(function (){ callback(files, all); })
				;

				if( entrySupport ){
					if( normalize && transFiles ){
						var
							i = transFiles.length
							, file
							, entry
						;

						items = new Array(i);
						while( i-- ){
							file = transFiles[i];

							try {
								entry = _getAsEntry(transItems[i]);
							}
							catch( err ){
								api.log('[err] getDropFiles: ', err);
								entry = null;
							}

							if( _isEntry(entry) ){
								// OSX filesystems use Unicode Normalization Form D (NFD),
								// and entry.file(…) can't read the files with the same names
								if( entry.isDirectory || (entry.isFile && file.name == file.name.normalize('NFC')) ){
									items[i] = entry;
								}
								else {
									items[i] = file;
								}
							}
							else {
								items[i] = file;
							}
						}
					}
					else {
						items = transItems;
					}
				}
				else {
					items = transFiles;
				}

				_each(items || [], function (item){
					queue.inc();

					try {
						if( entrySupport && _isEntry(item) ){
							_readEntryAsFiles(item, function (err, entryFiles, allEntries){
								if( err ){
									api.log('[err] getDropFiles:', err);
								} else {
									files.push.apply(files, entryFiles);
								}
								all.push.apply(all, allEntries);

								queue.next();
							});
						}
						else {
							_isRegularFile(item, function (yes, err){
								if( yes ){
									files.push(item);
								}
								else {
									item.error = err;
								}
								all.push(item);

								queue.next();
							});
						}
					}
					catch( err ){
						queue.next();
						api.log('[err] getDropFiles: ', err);
					}
				});

				queue.check();
			},


			/**
			 * Get file list
			 *
			 * @param	{HTMLInputElement|Event}	input
			 * @param	{String|Function}	[filter]
			 * @param	{Function}			[callback]
			 * @return	{Array|Null}
			 */
			getFiles: function (input, filter, callback){
				var files = [];

				if( callback ){
					api.filterFiles(api.getFiles(input), filter, callback);
					return null;
				}

				if( input.jquery ){
					// jQuery object
					input.each(function (){
						files = files.concat(api.getFiles(this));
					});
					input	= files;
					files	= [];
				}

				if( typeof filter == 'string' ){
					filter	= api.getFilesFilter(filter);
				}

				if( input.originalEvent ){
					// jQuery event
					input = _fixEvent(input.originalEvent);
				}
				else if( input.srcElement ){
					// IE Event
					input = _fixEvent(input);
				}


				if( input.dataTransfer ){
					// Drag'n'Drop
					input = input.dataTransfer;
				}
				else if( input.target ){
					// Event
					input = input.target;
				}

				if( input.files ){
					// Input[type="file"]
					files = input.files;

					if( !html5 ){
						// Partial support for file api
						files[0].blob	= input;
						files[0].iframe	= true;
					}
				}
				else if( !html5 && isInputFile(input) ){
					if( api.trim(input.value) ){
						files = [api.checkFileObj(input.value)];
						files[0].blob   = input;
						files[0].iframe = true;
					}
				}
				else if( _isArray(input) ){
					files	= input;
				}

				return	api.filter(files, function (file){ return !filter || filter.test(file.name); });
			},


			/**
			 * Get total file size
			 * @param	{Array}	files
			 * @return	{Number}
			 */
			getTotalSize: function (files){
				var size = 0, i = files && files.length;
				while( i-- ){
					size += files[i].size;
				}
				return	size;
			},


			/**
			 * Get image information
			 *
			 * @param	{File}		file
			 * @param	{Function}	fn
			 */
			getInfo: function (file, fn){
				var info = {}, readers = _infoReader.concat();

				if( api.isBlob(file) ){
					(function _next(){
						var reader = readers.shift();
						if( reader ){
							if( reader.test(file.type) ){
								reader(file, function (err, res){
									if( err ){
										fn(err);
									}
									else {
										_extend(info, res);
										_next();
									}
								});
							}
							else {
								_next();
							}
						}
						else {
							fn(false, info);
						}
					})();
				}
				else {
					fn('not_support_info', info);
				}
			},


			/**
			 * Add information reader
			 *
			 * @param {RegExp} mime
			 * @param {Function} fn
			 */
			addInfoReader: function (mime, fn){
				fn.test = function (type){ return mime.test(type); };
				_infoReader.push(fn);
			},


			/**
			 * Filter of array
			 *
			 * @param	{Array}		input
			 * @param	{Function}	fn
			 * @return	{Array}
			 */
			filter: function (input, fn){
				var result = [], i = 0, n = input.length, val;

				for( ; i < n; i++ ){
					if( i in input ){
						val = input[i];
						if( fn.call(val, val, i, input) ){
							result.push(val);
						}
					}
				}

				return	result;
			},


			/**
			 * Filter files
			 *
			 * @param	{Array}		files
			 * @param	{Function}	eachFn
			 * @param	{Function}	resultFn
			 */
			filterFiles: function (files, eachFn, resultFn){
				if( files.length ){
					// HTML5 or Flash
					var queue = files.concat(), file, result = [], deleted = [];

					(function _next(){
						if( queue.length ){
							file = queue.shift();
							api.getInfo(file, function (err, info){
								(eachFn(file, err ? false : info) ? result : deleted).push(file);
								_next();
							});
						}
						else {
							resultFn(result, deleted);
						}
					})();
				}
				else {
					resultFn([], files);
				}
			},


			upload: function (options){
				options = _extend({
					  jsonp: 'callback'
					, prepare: api.F
					, beforeupload: api.F
					, upload: api.F
					, fileupload: api.F
					, fileprogress: api.F
					, filecomplete: api.F
					, progress: api.F
					, complete: api.F
					, pause: api.F
					, imageOriginal: true
					, chunkSize: api.chunkSize
					, chunkUploadRetry: api.chunkUploadRetry
					, uploadRetry: api.uploadRetry
				}, options);


				if( options.imageAutoOrientation && !options.imageTransform ){
					options.imageTransform = { rotate: 'auto' };
				}


				var
					  proxyXHR = new api.XHR(options)
					, dataArray = this._getFilesDataArray(options.files)
					, _this = this
					, _total = 0
					, _loaded = 0
					, _nextFile
					, _complete = false
				;


				// calc total size
				_each(dataArray, function (data){
					_total += data.size;
				});

				// Array of files
				proxyXHR.files = [];
				_each(dataArray, function (data){
					proxyXHR.files.push(data.file);
				});

				// Set upload status props
				proxyXHR.total	= _total;
				proxyXHR.loaded	= 0;
				proxyXHR.filesLeft = dataArray.length;

				// emit "beforeupload"  event
				options.beforeupload(proxyXHR, options);

				// Upload by file
				_nextFile = function (){
					var
						  data = dataArray.shift()
						, _file = data && data.file
						, _fileLoaded = false
						, _fileOptions = _simpleClone(options)
					;

					proxyXHR.filesLeft = dataArray.length;

					if( _file && _file.name === api.expando ){
						_file = null;
						api.log('[warn] FileAPI.upload() — called without files');
					}

					if( ( proxyXHR.statusText != 'abort' || proxyXHR.current ) && data ){
						// Mark active job
						_complete = false;

						// Set current upload file
						proxyXHR.currentFile = _file;

						// Prepare file options
						if (_file && options.prepare(_file, _fileOptions) === false) {
							_nextFile.call(_this);
							return;
						}
						_fileOptions.file = _file;

						_this._getFormData(_fileOptions, data, function (form){
							if( !_loaded ){
								// emit "upload" event
								options.upload(proxyXHR, options);
							}

							var xhr = new api.XHR(_extend({}, _fileOptions, {

								upload: _file ? function (){
									// emit "fileupload" event
									options.fileupload(_file, xhr, _fileOptions);
								} : noop,

								progress: _file ? function (evt){
									if( !_fileLoaded ){
										// For ignore the double calls.
										_fileLoaded = (evt.loaded === evt.total);

										// emit "fileprogress" event
										options.fileprogress({
											  type:   'progress'
											, total:  data.total = evt.total
											, loaded: data.loaded = evt.loaded
										}, _file, xhr, _fileOptions);

										// emit "progress" event
										options.progress({
											  type:   'progress'
											, total:  _total
											, loaded: proxyXHR.loaded = (_loaded + data.size * (evt.loaded/evt.total)) || 0
										}, _file, xhr, _fileOptions);
									}
								} : noop,

								complete: function (err){
									_each(_xhrPropsExport, function (name){
										proxyXHR[name] = xhr[name];
									});

									if( _file ){
										data.total = (data.total || data.size);
										data.loaded	= data.total;

										if( !err ) {
											// emulate 100% "progress"
											this.progress(data);

											// fixed throttle event
											_fileLoaded = true;

											// bytes loaded
											_loaded += data.size; // data.size != data.total, it's desirable fix this
											proxyXHR.loaded = _loaded;
										}

										// emit "filecomplete" event
										options.filecomplete(err, xhr, _file, _fileOptions);
									}

									// upload next file
									setTimeout(function () {_nextFile.call(_this);}, 0);
								}
							})); // xhr


							// ...
							proxyXHR.abort = function (current){
								if (!current) { dataArray.length = 0; }
								this.current = current;
								xhr.abort();
							};

							// Start upload
							xhr.send(form);
						});
					}
					else {
						var successful = proxyXHR.status == 200 || proxyXHR.status == 201 || proxyXHR.status == 204;
						options.complete(successful ? false : (proxyXHR.statusText || 'error'), proxyXHR, options);
						// Mark done state
						_complete = true;
					}
				};


				// Next tick
				setTimeout(_nextFile, 0);


				// Append more files to the existing request
				// first - add them to the queue head/tail
				proxyXHR.append = function (files, first) {
					files = api._getFilesDataArray([].concat(files));

					_each(files, function (data) {
						_total += data.size;
						proxyXHR.files.push(data.file);
						if (first) {
							dataArray.unshift(data);
						} else {
							dataArray.push(data);
						}
					});

					proxyXHR.statusText = "";

					if( _complete ){
						_nextFile.call(_this);
					}
				};


				// Removes file from queue by file reference and returns it
				proxyXHR.remove = function (file) {
				    var i = dataArray.length, _file;
				    while( i-- ){
						if( dataArray[i].file == file ){
							_file = dataArray.splice(i, 1);
							_total -= _file.size;
						}
					}
					return	_file;
				};

				return proxyXHR;
			},


			_getFilesDataArray: function (data){
				var files = [], oFiles = {};

				if( isInputFile(data) ){
					var tmp = api.getFiles(data);
					oFiles[data.name || 'file'] = data.getAttribute('multiple') !== null ? tmp : tmp[0];
				}
				else if( _isArray(data) && isInputFile(data[0]) ){
					_each(data, function (input){
						oFiles[input.name || 'file'] = api.getFiles(input);
					});
				}
				else {
					oFiles = data;
				}

				_each(oFiles, function add(file, name){
					if( _isArray(file) ){
						_each(file, function (file){
							add(file, name);
						});
					}
					else if( file && (file.name || file.image) ){
						files.push({
							  name: name
							, file: file
							, size: file.size
							, total: file.size
							, loaded: 0
						});
					}
				});

				if( !files.length ){
					// Create fake `file` object
					files.push({ file: { name: api.expando } });
				}

				return	files;
			},


			_getFormData: function (options, data, fn){
				var
					  file = data.file
					, name = data.name
					, filename = file.name
					, filetype = file.type
					, trans = api.support.transform && options.imageTransform
					, Form = new api.Form
					, queue = api.queue(function (){ fn(Form); })
					, isOrignTrans = trans && _isOriginTransform(trans)
					, postNameConcat = api.postNameConcat
				;

				// Append data
				_each(options.data, function add(val, name){
					if( typeof val == 'object' ){
						_each(val, function (v, i){
							add(v, postNameConcat(name, i));
						});
					}
					else {
						Form.append(name, val);
					}
				});

				(function _addFile(file/**Object*/){
					if( file.image ){ // This is a FileAPI.Image
						queue.inc();

						file.toData(function (err, image){
							// @todo: требует рефакторинга и обработки ошибки
							if (file.file) {
								image.type = file.file.type;
								image.quality = file.matrix.quality;
								filename = file.file && file.file.name;
							}

							filename = filename || (new Date).getTime()+'.png';

							_addFile(image);
							queue.next();
						});
					}
					else if( api.Image && trans && (/^image/.test(file.type) || _rimgcanvas.test(file.nodeName)) ){
						queue.inc();

						if( isOrignTrans ){
							// Convert to array for transform function
							trans = [trans];
						}

						api.Image.transform(file, trans, options.imageAutoOrientation, function (err, images){
							if( isOrignTrans && !err ){
								if( !dataURLtoBlob && !api.flashEngine ){
									// Canvas.toBlob or Flash not supported, use multipart
									Form.multipart = true;
								}

								Form.append(name, images[0], filename,  trans[0].type || filetype);
							}
							else {
								var addOrigin = 0;

								if( !err ){
									_each(images, function (image, idx){
										if( !dataURLtoBlob && !api.flashEngine ){
											Form.multipart = true;
										}

										if( !trans[idx].postName ){
											addOrigin = 1;
										}

										Form.append(trans[idx].postName || postNameConcat(name, idx), image, filename, trans[idx].type || filetype);
									});
								}

								if( err || options.imageOriginal ){
									Form.append(postNameConcat(name, (addOrigin ? 'original' : null)), file, filename, filetype);
								}
							}

							queue.next();
						});
					}
					else if( filename !== api.expando ){
						Form.append(name, file, filename);
					}
				})(file);

				queue.check();
			},


			reset: function (inp, notRemove){
				var parent, clone;

				if( jQuery ){
					clone = jQuery(inp).clone(true).insertBefore(inp).val('')[0];
					if( !notRemove ){
						jQuery(inp).remove();
					}
				} else {
					parent  = inp.parentNode;
					clone   = parent.insertBefore(inp.cloneNode(true), inp);
					clone.value = '';

					if( !notRemove ){
						parent.removeChild(inp);
					}

					_each(_elEvents[api.uid(inp)], function (fns, type){
						_each(fns, function (fn){
							_off(inp, type, fn);
							_on(clone, type, fn);
						});
					});
				}

				return  clone;
			},


			/**
			 * Load remote file
			 *
			 * @param   {String}    url
			 * @param   {Function}  fn
			 * @return  {XMLHttpRequest}
			 */
			load: function (url, fn){
				var xhr = api.getXHR();
				if( xhr ){
					xhr.open('GET', url, true);

					if( xhr.overrideMimeType ){
				        xhr.overrideMimeType('text/plain; charset=x-user-defined');
					}

					_on(xhr, 'progress', function (/**Event*/evt){
						/** @namespace evt.lengthComputable */
						if( evt.lengthComputable ){
							fn({ type: evt.type, loaded: evt.loaded, total: evt.total }, xhr);
						}
					});

					xhr.onreadystatechange = function(){
						if( xhr.readyState == 4 ){
							xhr.onreadystatechange = null;
							if( xhr.status == 200 ){
								url = url.split('/');
								/** @namespace xhr.responseBody */
								var file = {
								      name: url[url.length-1]
									, size: xhr.getResponseHeader('Content-Length')
									, type: xhr.getResponseHeader('Content-Type')
								};
								file.dataURL = 'data:'+file.type+';base64,' + api.encode64(xhr.responseBody || xhr.responseText);
								fn({ type: 'load', result: file }, xhr);
							}
							else {
								fn({ type: 'error' }, xhr);
							}
					    }
					};
				    xhr.send(null);
				} else {
					fn({ type: 'error' });
				}

				return  xhr;
			},

			encode64: function (str){
				var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', outStr = '', i = 0;

				if( typeof str !== 'string' ){
					str	= String(str);
				}

				while( i < str.length ){
					//all three "& 0xff" added below are there to fix a known bug
					//with bytes returned by xhr.responseText
					var
						  byte1 = str.charCodeAt(i++) & 0xff
						, byte2 = str.charCodeAt(i++) & 0xff
						, byte3 = str.charCodeAt(i++) & 0xff
						, enc1 = byte1 >> 2
						, enc2 = ((byte1 & 3) << 4) | (byte2 >> 4)
						, enc3, enc4
					;

					if( isNaN(byte2) ){
						enc3 = enc4 = 64;
					} else {
						enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
						enc4 = isNaN(byte3) ? 64 : byte3 & 63;
					}

					outStr += b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);
				}

				return  outStr;
			}

		} // api
	;


	function _emit(target, fn, name, res, ext){
		var evt = {
			  type:		name.type || name
			, target:	target
			, result:	res
		};
		_extend(evt, ext);
		fn(evt);
	}


	function _hasSupportReadAs(method){
		return	FileReader && !!FileReader.prototype['readAs' + method];
	}


	function _readAs(file, fn, method, encoding){
		if( api.isBlob(file) && _hasSupportReadAs(method) ){
			var Reader = new FileReader;

			// Add event listener
			_on(Reader, _readerEvents, function _fn(evt){
				var type = evt.type;
				if( type == 'progress' ){
					_emit(file, fn, evt, evt.target.result, { loaded: evt.loaded, total: evt.total });
				}
				else if( type == 'loadend' ){
					_off(Reader, _readerEvents, _fn);
					Reader = null;
				}
				else {
					_emit(file, fn, evt, evt.target.result);
				}
			});


			try {
				// ReadAs ...
				if( encoding ){
					Reader['readAs' + method](file, encoding);
				}
				else {
					Reader['readAs' + method](file);
				}
			}
			catch (err){
				_emit(file, fn, 'error', undef, { error: err.toString() });
			}
		}
		else {
			_emit(file, fn, 'error', undef, { error: 'filreader_not_support_' + method });
		}
	}


	function _isRegularFile(file, callback){
		// http://stackoverflow.com/questions/8856628/detecting-folders-directories-in-javascript-filelist-objects
		if( !file.type && (safari || ((file.size % 4096) === 0 && (file.size <= 102400))) ){
			if( FileReader ){
				try {
					var reader = new FileReader();

					_one(reader, _readerEvents, function (evt){
						var isFile = evt.type != 'error';
						if( isFile ){
							if ( reader.readyState == null || reader.readyState === reader.LOADING ) {
								reader.abort();
							}
							callback(isFile);
						}
						else {
							callback(false, reader.error);
						}
					});

					reader.readAsDataURL(file);
				} catch( err ){
					callback(false, err);
				}
			}
			else {
				callback(null, new Error('FileReader is not supported'));
			}
		}
		else {
			callback(true);
		}
	}


	function _isEntry(item){
		return item && (item.isFile || item.isDirectory);
	}


	function _getAsEntry(item){
		var entry;
		if( item.getAsEntry ){ entry = item.getAsEntry(); }
		else if( item.webkitGetAsEntry ){ entry = item.webkitGetAsEntry(); }
		return	entry;
	}


	function _readEntryAsFiles(entry, callback){
		if( !entry ){
			// error
			var err = new Error('invalid entry');
			entry = new Object(entry);
			entry.error = err;
			callback(err.message, [], [entry]);
		}
		else if( entry.isFile ){
			// Read as file
			entry.file(function (file){
				// success
				file.fullPath = entry.fullPath;
				callback(false, [file], [file]);
			}, function (err){
				// error
				entry.error = err;
				callback('FileError.code: ' + err.code, [], [entry]);
			});
		}
		else if( entry.isDirectory ){
			var
				reader = entry.createReader()
				, firstAttempt = true
				, files = []
				, all = [entry]
			;

			var onerror = function (err){
				// error
				entry.error = err;
				callback('DirectoryError.code: ' + err.code, files, all);
			};
			var ondone = function ondone(entries){
				if( firstAttempt ){
					firstAttempt = false;
					if( !entries.length ){
						entry.error = new Error('directory is empty');
					}
				}

				// success
				if( entries.length ){
					api.afor(entries, function (next, entry){
						_readEntryAsFiles(entry, function (err, entryFiles, allEntries){
							if( !err ){
								files = files.concat(entryFiles);
							}
							all = all.concat(allEntries);

							if( next ){
								next();
							}
							else {
								reader.readEntries(ondone, onerror);
							}
						});
					});
				}
				else {
					callback(false, files, all);
				}
			};

			reader.readEntries(ondone, onerror);
		}
		else {
			_readEntryAsFiles(_getAsEntry(entry), callback);
		}
	}


	function _simpleClone(obj){
		var copy = {};
		_each(obj, function (val, key){
			if( val && (typeof val === 'object') && (val.nodeType === void 0) ){
				val = _extend({}, val);
			}
			copy[key] = val;
		});
		return	copy;
	}


	function isInputFile(el){
		return	_rinput.test(el && el.tagName);
	}


	function _getDataTransfer(evt){
		return	(evt.originalEvent || evt || '').dataTransfer || {};
	}


	function _isOriginTransform(trans){
		var key;
		for( key in trans ){
			if( trans.hasOwnProperty(key) ){
				if( !(trans[key] instanceof Object || key === 'overlay' || key === 'filter') ){
					return	true;
				}
			}
		}
		return	false;
	}


	// Add default image info reader
	api.addInfoReader(/^image/, function (file/**File*/, callback/**Function*/){
		if( !file.__dimensions ){
			var defer = file.__dimensions = api.defer();

			api.readAsImage(file, function (evt){
				var img = evt.target;
				defer.resolve(evt.type == 'load' ? false : 'error', {
					  width:  img.width
					, height: img.height
				});
                img.src = api.EMPTY_PNG;
				img = null;
			});
		}

		file.__dimensions.then(callback);
	});


	/**
	 * Drag'n'Drop special event
	 *
	 * @param	{HTMLElement}	el
	 * @param	{Function}		onHover
	 * @param	{Function}		onDrop
	 */
	api.event.dnd = function (el, onHover, onDrop){
		var _id, _type;

		if( !onDrop ){
			onDrop = onHover;
			onHover = api.F;
		}

		if( FileReader ){
			// Hover
			_on(el, 'dragenter dragleave dragover', onHover.ff = onHover.ff || function (evt){
				var
					  types = _getDataTransfer(evt).types
					, i = types && types.length
					, debounceTrigger = false
				;

				while( i-- ){
					if( ~types[i].indexOf('File') ){
						evt[preventDefault]();

						if( _type !== evt.type ){
							_type = evt.type; // Store current type of event

							if( _type != 'dragleave' ){
								onHover.call(evt[currentTarget], true, evt);
							}

							debounceTrigger = true;
						}

						break; // exit from "while"
					}
				}

				if( debounceTrigger ){
					clearTimeout(_id);
					_id = setTimeout(function (){
						onHover.call(evt[currentTarget], _type != 'dragleave', evt);
					}, 50);
				}
			});


			// Drop
			_on(el, 'drop', onDrop.ff = onDrop.ff || function (evt){
				evt[preventDefault]();

				_type = 0;

				api.getDropFiles(evt, function (files, all){
					onDrop.call(evt[currentTarget], files, all, evt);
				});
				
				onHover.call(evt[currentTarget], false, evt);
			});
		}
		else {
			api.log("Drag'n'Drop -- not supported");
		}
	};


	/**
	 * Remove drag'n'drop
	 * @param	{HTMLElement}	el
	 * @param	{Function}		onHover
	 * @param	{Function}		onDrop
	 */
	api.event.dnd.off = function (el, onHover, onDrop){
		_off(el, 'dragenter dragleave dragover', onHover.ff);
		_off(el, 'drop', onDrop.ff);
	};


	// Support jQuery
	if( jQuery && !jQuery.fn.dnd ){
		jQuery.fn.dnd = function (onHover, onDrop){
			return this.each(function (){
				api.event.dnd(this, onHover, onDrop);
			});
		};

		jQuery.fn.offdnd = function (onHover, onDrop){
			return this.each(function (){
				api.event.dnd.off(this, onHover, onDrop);
			});
		};
	}

	// @export
	window.FileAPI  = _extend(api, window.FileAPI);


	// Debug info
	api.log('FileAPI: ' + api.version);
	api.log('protocol: ' + window.location.protocol);
	api.log('doctype: [' + doctype.name + '] ' + doctype.publicId + ' ' + doctype.systemId);


	// @detect 'x-ua-compatible'
	_each(document.getElementsByTagName('meta'), function (meta){
		if( /x-ua-compatible/i.test(meta.getAttribute('http-equiv')) ){
			api.log('meta.http-equiv: ' + meta.getAttribute('content'));
		}
	});


	// Configuration
	try {
		_supportConsoleLog = !!console.log;
		_supportConsoleLogApply = !!console.log.apply;
	}
	catch (err) {}

	if( !api.flashUrl ){ api.flashUrl = api.staticPath + 'FileAPI.flash.swf'; }
	if( !api.flashImageUrl ){ api.flashImageUrl = api.staticPath + 'FileAPI.flash.image.swf'; }
	if( !api.flashWebcamUrl ){ api.flashWebcamUrl = api.staticPath + 'FileAPI.flash.camera.swf'; }
})(window, void 0);

/*global window, FileAPI, document */

(function (api, document, undef) {
	'use strict';

	var
		min = Math.min,
		round = Math.round,
		getCanvas = function () { return document.createElement('canvas'); },
		support = false,
		exifOrientation = {
			  8:	270
			, 3:	180
			, 6:	90
			, 7:	270
			, 4:	180
			, 5:	90
		}
	;

	try {
		support = getCanvas().toDataURL('image/png').indexOf('data:image/png') > -1;
	}
	catch (e){}


	function Image(file){
		if( file instanceof Image ){
			var img = new Image(file.file);
			api.extend(img.matrix, file.matrix);
			return	img;
		}
		else if( !(this instanceof Image) ){
			return	new Image(file);
		}

		this.file   = file;
		this.size   = file.size || 100;

		this.matrix	= {
			sx: 0,
			sy: 0,
			sw: 0,
			sh: 0,
			dx: 0,
			dy: 0,
			dw: 0,
			dh: 0,
			resize: 0, // min, max OR preview
			deg: 0,
			quality: 1, // jpeg quality
			filter: 0
		};
	}


	Image.prototype = {
		image: true,
		constructor: Image,

		set: function (attrs){
			api.extend(this.matrix, attrs);
			return	this;
		},

		crop: function (x, y, w, h){
			if( w === undef ){
				w	= x;
				h	= y;
				x = y = 0;
			}
			return	this.set({ sx: x, sy: y, sw: w, sh: h || w });
		},

		resize: function (w, h, strategy){
			if( /min|max|height|width/.test(h) ){
				strategy = h;
				h = w;
			}

			return	this.set({ dw: w, dh: h || w, resize: strategy });
		},

		preview: function (w, h){
			return	this.resize(w, h || w, 'preview');
		},

		rotate: function (deg){
			return	this.set({ deg: deg });
		},

		filter: function (filter){
			return	this.set({ filter: filter });
		},

		overlay: function (images){
			return	this.set({ overlay: images });
		},

		clone: function (){
			return	new Image(this);
		},

		_load: function (image, fn){
			var self = this;

			if( /img|video/i.test(image.nodeName) ){
				fn.call(self, null, image);
			}
			else {
				api.readAsImage(image, function (evt){
					fn.call(self, evt.type != 'load', evt.result);
				});
			}
		},

		_apply: function (image, fn){
			var
				  canvas = getCanvas()
				, m = this.getMatrix(image)
				, ctx = canvas.getContext('2d')
				, width = image.videoWidth || image.width
				, height = image.videoHeight || image.height
				, deg = m.deg
				, dw = m.dw
				, dh = m.dh
				, w = width
				, h = height
				, filter = m.filter
				, copy // canvas copy
				, buffer = image
				, overlay = m.overlay
				, queue = api.queue(function (){ image.src = api.EMPTY_PNG; fn(false, canvas); })
				, renderImageToCanvas = api.renderImageToCanvas
			;

			// Normalize angle
			deg = deg - Math.floor(deg/360)*360;

			// For `renderImageToCanvas`
			image._type = this.file.type;

			while(m.multipass && min(w/dw, h/dh) > 2 ){
				w = (w/2 + 0.5)|0;
				h = (h/2 + 0.5)|0;

				copy = getCanvas();
				copy.width  = w;
				copy.height = h;

				if( buffer !== image ){
					renderImageToCanvas(copy, buffer, 0, 0, buffer.width, buffer.height, 0, 0, w, h);
					buffer = copy;
				}
				else {
					buffer = copy;
					renderImageToCanvas(buffer, image, m.sx, m.sy, m.sw, m.sh, 0, 0, w, h);
					m.sx = m.sy = m.sw = m.sh = 0;
				}
			}


			canvas.width  = (deg % 180) ? dh : dw;
			canvas.height = (deg % 180) ? dw : dh;

			canvas.type = m.type;
			canvas.quality = m.quality;

			ctx.rotate(deg * Math.PI / 180);
			renderImageToCanvas(ctx.canvas, buffer
				, m.sx, m.sy
				, m.sw || buffer.width
				, m.sh || buffer.height
				, (deg == 180 || deg == 270 ? -dw : 0)
				, (deg == 90 || deg == 180 ? -dh : 0)
				, dw, dh
			);
			dw = canvas.width;
			dh = canvas.height;

			// Apply overlay
			overlay && api.each([].concat(overlay), function (over){
				queue.inc();
				// preload
				var img = new window.Image, fn = function (){
					var
						  x = over.x|0
						, y = over.y|0
						, w = over.w || img.width
						, h = over.h || img.height
						, rel = over.rel
					;

					// center  |  right  |  left
					x = (rel == 1 || rel == 4 || rel == 7) ? (dw - w + x)/2 : (rel == 2 || rel == 5 || rel == 8 ? dw - (w + x) : x);

					// center  |  bottom  |  top
					y = (rel == 3 || rel == 4 || rel == 5) ? (dh - h + y)/2 : (rel >= 6 ? dh - (h + y) : y);

					api.event.off(img, 'error load abort', fn);

					try {
						ctx.globalAlpha = over.opacity || 1;
						ctx.drawImage(img, x, y, w, h);
					}
					catch (er){}

					queue.next();
				};

				api.event.on(img, 'error load abort', fn);
				img.src = over.src;

				if( img.complete ){
					fn();
				}
			});

			if( filter ){
				queue.inc();
				Image.applyFilter(canvas, filter, queue.next);
			}

			queue.check();
		},

		getMatrix: function (image){
			var
				  m  = api.extend({}, this.matrix)
				, sw = m.sw = m.sw || image.videoWidth || image.naturalWidth ||  image.width
				, sh = m.sh = m.sh || image.videoHeight || image.naturalHeight || image.height
				, dw = m.dw = m.dw || sw
				, dh = m.dh = m.dh || sh
				, sf = sw/sh, df = dw/dh
				, strategy = m.resize
			;

			if( strategy == 'preview' ){
				if( dw != sw || dh != sh ){
					// Make preview
					var w, h;

					if( df >= sf ){
						w	= sw;
						h	= w / df;
					} else {
						h	= sh;
						w	= h * df;
					}

					if( w != sw || h != sh ){
						m.sx	= ~~((sw - w)/2);
						m.sy	= ~~((sh - h)/2);
						sw		= w;
						sh		= h;
					}
				}
			}
			else if( strategy == 'height' ){
				dw = dh * sf;
			}
			else if( strategy == 'width' ){
				dh = dw / sf;
			}
			else if( strategy ){
				if( !(sw > dw || sh > dh) ){
					dw = sw;
					dh = sh;
				}
				else if( strategy == 'min' ){
					dw = round(sf < df ? min(sw, dw) : dh*sf);
					dh = round(sf < df ? dw/sf : min(sh, dh));
				}
				else {
					dw = round(sf >= df ? min(sw, dw) : dh*sf);
					dh = round(sf >= df ? dw/sf : min(sh, dh));
				}
			}

			m.sw = sw;
			m.sh = sh;
			m.dw = dw;
			m.dh = dh;
			m.multipass = api.multiPassResize;
			return	m;
		},

		_trans: function (fn){
			this._load(this.file, function (err, image){
				if( err ){
					fn(err);
				}
				else {
					try {
						this._apply(image, fn);
					} catch (err){
						api.log('[err] FileAPI.Image.fn._apply:', err);
						fn(err);
					}
				}
			});
		},


		get: function (fn){
			if( api.support.transform ){
				var _this = this, matrix = _this.matrix;

				if( matrix.deg == 'auto' ){
					api.getInfo(_this.file, function (err, info){
						// rotate by exif orientation
						matrix.deg = exifOrientation[info && info.exif && info.exif.Orientation] || 0;
						_this._trans(fn);
					});
				}
				else {
					_this._trans(fn);
				}
			}
			else {
				fn('not_support_transform');
			}

			return this;
		},


		toData: function (fn){
			return this.get(fn);
		}

	};


	Image.exifOrientation = exifOrientation;


	Image.transform = function (file, transform, autoOrientation, fn){
		function _transform(err, img){
			// img -- info object
			var
				  images = {}
				, queue = api.queue(function (err){
					fn(err, images);
				})
			;

			if( !err ){
				api.each(transform, function (params, name){
					if( !queue.isFail() ){
						var ImgTrans = new Image(img.nodeType ? img : file), isFn = typeof params == 'function';

						if( isFn ){
							params(img, ImgTrans);
						}
						else if( params.width ){
							ImgTrans[params.preview ? 'preview' : 'resize'](params.width, params.height, params.strategy);
						}
						else {
							if( params.maxWidth && (img.width > params.maxWidth || img.height > params.maxHeight) ){
								ImgTrans.resize(params.maxWidth, params.maxHeight, 'max');
							}
						}

						if( params.crop ){
							var crop = params.crop;
							ImgTrans.crop(crop.x|0, crop.y|0, crop.w || crop.width, crop.h || crop.height);
						}

						if( params.rotate === undef && autoOrientation ){
							params.rotate = 'auto';
						}

						ImgTrans.set({ type: ImgTrans.matrix.type || params.type || file.type || 'image/png' });

						if( !isFn ){
							ImgTrans.set({
								  deg: params.rotate
								, overlay: params.overlay
								, filter: params.filter
								, quality: params.quality || 1
							});
						}

						queue.inc();
						ImgTrans.toData(function (err, image){
							if( err ){
								queue.fail();
							}
							else {
								images[name] = image;
								queue.next();
							}
						});
					}
				});
			}
			else {
				queue.fail();
			}
		}


		// @todo: Оло-ло, нужно рефакторить это место
		if( file.width ){
			_transform(false, file);
		} else {
			api.getInfo(file, _transform);
		}
	};


	// @const
	api.each(['TOP', 'CENTER', 'BOTTOM'], function (x, i){
		api.each(['LEFT', 'CENTER', 'RIGHT'], function (y, j){
			Image[x+'_'+y] = i*3 + j;
			Image[y+'_'+x] = i*3 + j;
		});
	});


	/**
	 * Trabsform element to canvas
	 *
	 * @param    {Image|HTMLVideoElement}   el
	 * @returns  {Canvas}
	 */
	Image.toCanvas = function(el){
		var canvas		= document.createElement('canvas');
		canvas.width	= el.videoWidth || el.width;
		canvas.height	= el.videoHeight || el.height;
		canvas.getContext('2d').drawImage(el, 0, 0);
		return	canvas;
	};


	/**
	 * Create image from DataURL
	 * @param  {String}  dataURL
	 * @param  {Object}  size
	 * @param  {Function}  callback
	 */
	Image.fromDataURL = function (dataURL, size, callback){
		var img = api.newImage(dataURL);
		api.extend(img, size);
		callback(img);
	};


	/**
	 * Apply filter (caman.js)
	 *
	 * @param  {Canvas|Image}   canvas
	 * @param  {String|Function}  filter
	 * @param  {Function}  doneFn
	 */
	Image.applyFilter = function (canvas, filter, doneFn){
		if( typeof filter == 'function' ){
			filter(canvas, doneFn);
		}
		else if( window.Caman ){
			// http://camanjs.com/guides/
			window.Caman(canvas.tagName == 'IMG' ? Image.toCanvas(canvas) : canvas, function (){
				if( typeof filter == 'string' ){
					this[filter]();
				}
				else {
					api.each(filter, function (val, method){
						this[method](val);
					}, this);
				}
				this.render(doneFn);
			});
		}
	};


	/**
	 * For load-image-ios.js
	 */
	api.renderImageToCanvas = function (canvas, img, sx, sy, sw, sh, dx, dy, dw, dh){
		try {
			return canvas.getContext('2d').drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
		} catch (ex) {
			api.log('renderImageToCanvas failed');
			throw ex;
		}
	};


	// @export
	api.support.canvas = api.support.transform = support;
	api.Image = Image;
})(FileAPI, document);

/*
 * JavaScript Load Image iOS scaling fixes 1.0.3
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * iOS image scaling fixes based on
 * https://github.com/stomita/ios-imagefile-megapixel
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, bitwise: true */
/*global FileAPI, window, document */

(function (factory) {
	'use strict';
	factory(FileAPI);
}(function (loadImage) {
    'use strict';

    // Only apply fixes on the iOS platform:
    if (!window.navigator || !window.navigator.platform ||
             !(/iP(hone|od|ad)/).test(window.navigator.platform)) {
        return;
    }

    var originalRenderMethod = loadImage.renderImageToCanvas;

    // Detects subsampling in JPEG images:
    loadImage.detectSubsampling = function (img) {
        var canvas,
            context;
        if (img.width * img.height > 1024 * 1024) { // only consider mexapixel images
            canvas = document.createElement('canvas');
            canvas.width = canvas.height = 1;
            context = canvas.getContext('2d');
            context.drawImage(img, -img.width + 1, 0);
            // subsampled image becomes half smaller in rendering size.
            // check alpha channel value to confirm image is covering edge pixel or not.
            // if alpha value is 0 image is not covering, hence subsampled.
            return context.getImageData(0, 0, 1, 1).data[3] === 0;
        }
        return false;
    };

    // Detects vertical squash in JPEG images:
    loadImage.detectVerticalSquash = function (img, subsampled) {
        var naturalHeight = img.naturalHeight || img.height,
            canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            data,
            sy,
            ey,
            py,
            alpha;
        if (subsampled) {
            naturalHeight /= 2;
        }
        canvas.width = 1;
        canvas.height = naturalHeight;
        context.drawImage(img, 0, 0);
        data = context.getImageData(0, 0, 1, naturalHeight).data;
        // search image edge pixel position in case it is squashed vertically:
        sy = 0;
        ey = naturalHeight;
        py = naturalHeight;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        return (py / naturalHeight) || 1;
    };

    // Renders image to canvas while working around iOS image scaling bugs:
    // https://github.com/blueimp/JavaScript-Load-Image/issues/13
    loadImage.renderImageToCanvas = function (
        canvas,
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
    ) {
        if (img._type === 'image/jpeg') {
            var context = canvas.getContext('2d'),
                tmpCanvas = document.createElement('canvas'),
                tileSize = 1024,
                tmpContext = tmpCanvas.getContext('2d'),
                subsampled,
                vertSquashRatio,
                tileX,
                tileY;
            tmpCanvas.width = tileSize;
            tmpCanvas.height = tileSize;
            context.save();
            subsampled = loadImage.detectSubsampling(img);
            if (subsampled) {
                sourceX /= 2;
                sourceY /= 2;
                sourceWidth /= 2;
                sourceHeight /= 2;
            }
            vertSquashRatio = loadImage.detectVerticalSquash(img, subsampled);
            if (subsampled || vertSquashRatio !== 1) {
                sourceY *= vertSquashRatio;
                destWidth = Math.ceil(tileSize * destWidth / sourceWidth);
                destHeight = Math.ceil(
                    tileSize * destHeight / sourceHeight / vertSquashRatio
                );
                destY = 0;
                tileY = 0;
                while (tileY < sourceHeight) {
                    destX = 0;
                    tileX = 0;
                    while (tileX < sourceWidth) {
                        tmpContext.clearRect(0, 0, tileSize, tileSize);
                        tmpContext.drawImage(
                            img,
                            sourceX,
                            sourceY,
                            sourceWidth,
                            sourceHeight,
                            -tileX,
                            -tileY,
                            sourceWidth,
                            sourceHeight
                        );
                        context.drawImage(
                            tmpCanvas,
                            0,
                            0,
                            tileSize,
                            tileSize,
                            destX,
                            destY,
                            destWidth,
                            destHeight
                        );
                        tileX += tileSize;
                        destX += destWidth;
                    }
                    tileY += tileSize;
                    destY += destHeight;
                }
                context.restore();
                return canvas;
            }
        }
        return originalRenderMethod(
            canvas,
            img,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            destX,
            destY,
            destWidth,
            destHeight
        );
    };

}));

/*global window, FileAPI */

(function (api, window){
	"use strict";

	var
		  document = window.document
		, FormData = window.FormData
		, Form = function (){ this.items = []; }
		, encodeURIComponent = window.encodeURIComponent
	;


	Form.prototype = {

		append: function (name, blob, file, type){
			this.items.push({
				  name: name
				, blob: blob && blob.blob || (blob == void 0 ? '' : blob)
				, file: blob && (file || blob.name)
				, type:	blob && (type || blob.type)
			});
		},

		each: function (fn){
			var i = 0, n = this.items.length;
			for( ; i < n; i++ ){
				fn.call(this, this.items[i]);
			}
		},

		toData: function (fn, options){
		    // allow chunked transfer if we have only one file to send
		    // flag is used below and in XHR._send
		    options._chunked = api.support.chunked && options.chunkSize > 0 && api.filter(this.items, function (item){ return item.file; }).length == 1;

			if( !api.support.html5 ){
				api.log('FileAPI.Form.toHtmlData');
				this.toHtmlData(fn);
			}
			else if( !api.formData || this.multipart || !FormData ){
				api.log('FileAPI.Form.toMultipartData');
				this.toMultipartData(fn);
			}
			else if( options._chunked ){
				api.log('FileAPI.Form.toPlainData');
				this.toPlainData(fn);
			}
			else {
				api.log('FileAPI.Form.toFormData');
				this.toFormData(fn);
			}
		},

		_to: function (data, complete, next, arg){
			var queue = api.queue(function (){
				complete(data);
			});

			this.each(function (file){
				try{
					next(file, data, queue, arg);
				}
				catch( err ){
					api.log('FileAPI.Form._to: ' + err.message);
					complete(err);
				}
			});

			queue.check();
		},


		toHtmlData: function (fn){
			this._to(document.createDocumentFragment(), fn, function (file, data/**DocumentFragment*/){
				var blob = file.blob, hidden;

				if( file.file ){
					api.reset(blob, true);
					// set new name
					blob.name = file.name;
					blob.disabled = false;
					data.appendChild(blob);
				}
				else {
					hidden = document.createElement('input');
					hidden.name  = file.name;
					hidden.type  = 'hidden';
					hidden.value = blob;
					data.appendChild(hidden);
				}
			});
		},

		toPlainData: function (fn){
			this._to({}, fn, function (file, data, queue){
				if( file.file ){
					data.type = file.file;
				}

				if( file.blob.toBlob ){
				    // canvas
					queue.inc();
					_convertFile(file, function (file, blob){
						data.name = file.name;
						data.file = blob;
						data.size = blob.length;
						data.type = file.type;
						queue.next();
					});
				}
				else if( file.file ){
				    // file
					data.name = file.blob.name;
					data.file = file.blob;
					data.size = file.blob.size;
					data.type = file.type;
				}
				else {
				    // additional data
				    if( !data.params ){
				        data.params = [];
				    }
				    data.params.push(encodeURIComponent(file.name) +"="+ encodeURIComponent(file.blob));
				}

				data.start = -1;
				data.end = data.file && data.file.FileAPIReadPosition || -1;
				data.retry = 0;
			});
		},

		toFormData: function (fn){
			this._to(new FormData, fn, function (file, data, queue){
				if( file.blob && file.blob.toBlob ){
					queue.inc();
					_convertFile(file, function (file, blob){
						data.append(file.name, blob, file.file);
						queue.next();
					});
				}
				else if( file.file ){
					data.append(file.name, file.blob, file.file);
				}
				else {
					data.append(file.name, file.blob);
				}

				if( file.file ){
					data.append('_'+file.name, file.file);
				}
			});
		},


		toMultipartData: function (fn){
			this._to([], fn, function (file, data, queue, boundary){
				queue.inc();
				_convertFile(file, function (file, blob){
					data.push(
						  '--_' + boundary + ('\r\nContent-Disposition: form-data; name="'+ file.name +'"'+ (file.file ? '; filename="'+ encodeURIComponent(file.file) +'"' : '')
						+ (file.file ? '\r\nContent-Type: '+ (file.type || 'application/octet-stream') : '')
						+ '\r\n'
						+ '\r\n'+ (file.file ? blob : encodeURIComponent(blob))
						+ '\r\n')
					);
					queue.next();
				}, true);
			}, api.expando);
		}
	};


	function _convertFile(file, fn, useBinaryString){
		var blob = file.blob, filename = file.file;

		if( filename ){
			if( !blob.toDataURL ){
				// The Blob is not an image.
				api.readAsBinaryString(blob, function (evt){
					if( evt.type == 'load' ){
						fn(file, evt.result);
					}
				});
				return;
			}

			var
				  mime = { 'image/jpeg': '.jpe?g', 'image/png': '.png' }
				, type = mime[file.type] ? file.type : 'image/png'
				, ext  = mime[type] || '.png'
				, quality = blob.quality || 1
			;

			if( !filename.match(new RegExp(ext+'$', 'i')) ){
				// Does not change the current extension, but add a new one.
				filename += ext.replace('?', '');
			}

			file.file = filename;
			file.type = type;

			if( !useBinaryString && blob.toBlob ){
				blob.toBlob(function (blob){
					fn(file, blob);
				}, type, quality);
			}
			else {
				fn(file, api.toBinaryString(blob.toDataURL(type, quality)));
			}
		}
		else {
			fn(file, blob);
		}
	}


	// @export
	api.Form = Form;
})(FileAPI, window);

/*global window, FileAPI, Uint8Array */

(function (window, api){
	"use strict";

	var
		  noop = function (){}
		, document = window.document

		, XHR = function (options){
			this.uid = api.uid();
			this.xhr = {
				  abort: noop
				, getResponseHeader: noop
				, getAllResponseHeaders: noop
			};
			this.options = options;
		},

		_xhrResponsePostfix = { '': 1, XML: 1, Text: 1, Body: 1 }
	;


	XHR.prototype = {
		status: 0,
		statusText: '',
		constructor: XHR,

		getResponseHeader: function (name){
			return this.xhr.getResponseHeader(name);
		},

		getAllResponseHeaders: function (){
			return this.xhr.getAllResponseHeaders() || {};
		},

		end: function (status, statusText){
			var _this = this, options = _this.options;

			_this.end		=
			_this.abort		= noop;
			_this.status	= status;

			if( statusText ){
				_this.statusText = statusText;
			}

			api.log('xhr.end:', status, statusText);
			options.complete(status == 200 || status == 201 ? false : _this.statusText || 'unknown', _this);

			if( _this.xhr && _this.xhr.node ){
				setTimeout(function (){
					var node = _this.xhr.node;
					try { node.parentNode.removeChild(node); } catch (e){}
					try { delete window[_this.uid]; } catch (e){}
					window[_this.uid] = _this.xhr.node = null;
				}, 9);
			}
		},

		abort: function (){
			this.end(0, 'abort');

			if( this.xhr ){
				this.xhr.aborted = true;
				this.xhr.abort();
			}
		},

		send: function (FormData){
			var _this = this, options = this.options;

			FormData.toData(function (data){
				if( data instanceof Error ){
					_this.end(0, data.message);
				}
				else{
					// Start uploading
					options.upload(options, _this);
					_this._send.call(_this, options, data);
				}
			}, options);
		},

		_send: function (options, data){
			var _this = this, xhr, uid = _this.uid, onLoadFnName = _this.uid + "Load", url = options.url;

			api.log('XHR._send:', data);

			if( !options.cache ){
				// No cache
				url += (~url.indexOf('?') ? '&' : '?') + api.uid();
			}

			if( data.nodeName ){
				var jsonp = options.jsonp;

				// prepare callback in GET
				url = url.replace(/([a-z]+)=(\?)/i, '$1='+uid);

				// legacy
				options.upload(options, _this);

				var
					onPostMessage = function (evt){
						if( ~url.indexOf(evt.origin) ){
							try {
								var result = api.parseJSON(evt.data);
								if( result.id == uid ){
									complete(result.status, result.statusText, result.response);
								}
							} catch( err ){
								complete(0, err.message);
							}
						}
					},

					// jsonp-callack
					complete = window[uid] = function (status, statusText, response){
						_this.readyState	= 4;
						_this.responseText	= response;
						_this.end(status, statusText);

						api.event.off(window, 'message', onPostMessage);
						window[uid] = xhr = transport = window[onLoadFnName] = null;
					}
				;

				_this.xhr.abort = function (){
					try {
						if( transport.stop ){ transport.stop(); }
						else if( transport.contentWindow.stop ){ transport.contentWindow.stop(); }
						else { transport.contentWindow.document.execCommand('Stop'); }
					}
					catch (er) {}
					complete(0, "abort");
				};

				api.event.on(window, 'message', onPostMessage);

				window[onLoadFnName] = function (){
					try {
						var
							  win = transport.contentWindow
							, doc = win.document
							, result = win.result || api.parseJSON(doc.body.innerHTML)
						;
						complete(result.status, result.statusText, result.response);
					} catch (e){
						api.log('[transport.onload]', e);
					}
				};

				xhr = document.createElement('div');
				xhr.innerHTML = '<form target="'+ uid +'" action="'+ url +'" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;">'
							+ '<iframe name="'+ uid +'" src="javascript:false;" onload="window.' + onLoadFnName + ' && ' + onLoadFnName + '();"></iframe>'
							+ (jsonp && (options.url.indexOf('=?') < 0) ? '<input value="'+ uid +'" name="'+jsonp+'" type="hidden"/>' : '')
							+ '</form>'
				;

				// get form-data & transport
				var
					  form = xhr.getElementsByTagName('form')[0]
					, transport = xhr.getElementsByTagName('iframe')[0]
				;

				form.appendChild(data);

				api.log(form.parentNode.innerHTML);

				// append to DOM
				document.body.appendChild(xhr);

				// keep a reference to node-transport
				_this.xhr.node = xhr;

				// send
				_this.readyState = 2; // loaded
				try {
					form.submit();
				} catch (err) {
					api.log('iframe.error: ' + err);
				}
				form = null;
			}
			else {
				// Clean url
				url = url.replace(/([a-z]+)=(\?)&?/i, '');

				// html5
				if (this.xhr && this.xhr.aborted) {
					api.log("Error: already aborted");
					return;
				}
				xhr = _this.xhr = api.getXHR();

				if (data.params) {
					url += (url.indexOf('?') < 0 ? "?" : "&") + data.params.join("&");
				}

				xhr.open('POST', url, true);

				if( api.withCredentials ){
					xhr.withCredentials = "true";
				}

				if( !options.headers || !options.headers['X-Requested-With'] ){
					xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				}

				api.each(options.headers, function (val, key){
					xhr.setRequestHeader(key, val);
				});


				if ( options._chunked ) {
					// chunked upload
					if( xhr.upload ){
						xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
							if (!data.retry) {
								// show progress only for correct chunk uploads
								options.progress({
									  type:			evt.type
									, total:		data.size
									, loaded:		data.start + evt.loaded
									, totalSize:	data.size
								}, _this, options);
							}
						}, 100), false);
					}

					xhr.onreadystatechange = function (){
						var lkb = parseInt(xhr.getResponseHeader('X-Last-Known-Byte'), 10);

						_this.status     = xhr.status;
						_this.statusText = xhr.statusText;
						_this.readyState = xhr.readyState;

						if( xhr.readyState == 4 ){
							for( var k in _xhrResponsePostfix ){
								_this['response'+k]  = xhr['response'+k];
							}
							xhr.onreadystatechange = null;

							if (!xhr.status || xhr.status - 201 > 0) {
								api.log("Error: " + xhr.status);
								// some kind of error
								// 0 - connection fail or timeout, if xhr.aborted is true, then it's not recoverable user action
								// up - server error
								if (((!xhr.status && !xhr.aborted) || 500 == xhr.status || 416 == xhr.status) && ++data.retry <= options.chunkUploadRetry) {
									// let's try again the same chunk
									// only applicable for recoverable error codes 500 && 416
									var delay = xhr.status ? 0 : api.chunkNetworkDownRetryTimeout;

									// inform about recoverable problems
									options.pause(data.file, options);

									// smart restart if server reports about the last known byte
									api.log("X-Last-Known-Byte: " + lkb);
									if (lkb) {
										data.end = lkb;
									} else {
										data.end = data.start - 1;
										if (416 == xhr.status) {
											data.end = data.end - options.chunkSize;
										}
									}

									setTimeout(function () {
										_this._send(options, data);
									}, delay);
								} else {
									// no mo retries
									_this.end(xhr.status);
								}
							} else {
								// success
								data.retry = 0;

								if (data.end == data.size - 1) {
									// finished
									_this.end(xhr.status);
								} else {
									// next chunk

									// shift position if server reports about the last known byte
									api.log("X-Last-Known-Byte: " + lkb);
									if (lkb) {
										data.end = lkb;
									}
									data.file.FileAPIReadPosition = data.end;

									setTimeout(function () {
										_this._send(options, data);
									}, 0);
								}
							}

							xhr = null;
						}
					};

					data.start = data.end + 1;
					data.end = Math.max(Math.min(data.start + options.chunkSize, data.size) - 1, data.start);

					// Retrieve a slice of file
					var
						  file = data.file
						, slice = (file.slice || file.mozSlice || file.webkitSlice).call(file, data.start, data.end + 1)
					;

					if( data.size && !slice.size ){
						setTimeout(function (){
							_this.end(-1);
						});
					} else {
						xhr.setRequestHeader("Content-Range", "bytes " + data.start + "-" + data.end + "/" + data.size);
						xhr.setRequestHeader("Content-Disposition", 'attachment; filename=' + encodeURIComponent(data.name));
						xhr.setRequestHeader("Content-Type", data.type || "application/octet-stream");

						xhr.send(slice);
					}

					file = slice = null;
				} else {
					// single piece upload
					if( xhr.upload ){
						// https://github.com/blueimp/jQuery-File-Upload/wiki/Fixing-Safari-hanging-on-very-high-speed-connections-%281Gbps%29
						xhr.upload.addEventListener('progress', api.throttle(function (/**Event*/evt){
							options.progress(evt, _this, options);
						}, 100), false);
					}

					xhr.onreadystatechange = function (){
						_this.status     = xhr.status;
						_this.statusText = xhr.statusText;
						_this.readyState = xhr.readyState;

						if( xhr.readyState == 4 ){
							for( var k in _xhrResponsePostfix ){
								_this['response'+k]  = xhr['response'+k];
							}
							xhr.onreadystatechange = null;

							if (!xhr.status || xhr.status > 201) {
								api.log("Error: " + xhr.status);
								if (((!xhr.status && !xhr.aborted) || 500 == xhr.status) && (options.retry || 0) < options.uploadRetry) {
									options.retry = (options.retry || 0) + 1;
									var delay = api.networkDownRetryTimeout;

									// inform about recoverable problems
									options.pause(options.file, options);

									setTimeout(function () {
										_this._send(options, data);
									}, delay);
								} else {
									//success
									_this.end(xhr.status);
								}
							} else {
								//success
								_this.end(xhr.status);
							}

							xhr = null;
						}
					};

					if( api.isArray(data) ){
						// multipart
						xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=_'+api.expando);
						var rawData = data.join('') +'--_'+ api.expando +'--';

						/** @namespace  xhr.sendAsBinary  https://developer.mozilla.org/ru/XMLHttpRequest#Sending_binary_content */
						if( xhr.sendAsBinary ){
							xhr.sendAsBinary(rawData);
						}
						else {
							var bytes = Array.prototype.map.call(rawData, function(c){ return c.charCodeAt(0) & 0xff; });
							xhr.send(new Uint8Array(bytes).buffer);

						}
					} else {
						// FormData
						xhr.send(data);
					}
				}
			}
		}
	};


	// @export
	api.XHR = XHR;
})(window, FileAPI);

/**
 * @class	FileAPI.Camera
 * @author	RubaXa	<trash@rubaxa.org>
 * @support	Chrome 21+, FF 18+, Opera 12+
 */

/*global window, FileAPI, jQuery */
/** @namespace LocalMediaStream -- https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API#LocalMediaStream */
(function (window, api){
	"use strict";

	var
		URL = window.URL || window.webkitURL,

		document = window.document,
		navigator = window.navigator,

		getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia,

		html5 = !!getMedia
	;


	// Support "media"
	api.support.media = html5;


	var Camera = function (video){
		this.video = video;
	};


	Camera.prototype = {
		isActive: function (){
			return	!!this._active;
		},


		/**
		 * Start camera streaming
		 * @param	{Function}	callback
		 */
		start: function (callback){
			var
				  _this = this
				, video = _this.video
				, _successId
				, _failId
				, _complete = function (err){
					_this._active = !err;
					clearTimeout(_failId);
					clearTimeout(_successId);
//					api.event.off(video, 'loadedmetadata', _complete);
					callback && callback(err, _this);
				}
			;

			getMedia.call(navigator, { video: true }, function (stream/**LocalMediaStream*/){
				// Success
				_this.stream = stream;

//				api.event.on(video, 'loadedmetadata', function (){
//					_complete(null);
//				});

				// Set camera stream
				video.src = URL.createObjectURL(stream);

				// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
				// See crbug.com/110938.
				_successId = setInterval(function (){
					if( _detectVideoSignal(video) ){
						_complete(null);
					}
				}, 1000);

				_failId = setTimeout(function (){
					_complete('timeout');
				}, 5000);

				// Go-go-go!
				video.play();
			}, _complete/*error*/);
		},


		/**
		 * Stop camera streaming
		 */
		stop: function (){
			try {
				this._active = false;
				this.video.pause();

				try {
					this.stream.stop();
				} catch (err) {
					api.each(this.stream.getTracks(), function (track) {
						track.stop();
					});
				}

				this.stream = null;
			} catch( err ){
				api.log('[FileAPI.Camera] stop:', err);
			}
		},


		/**
		 * Create screenshot
		 * @return {FileAPI.Camera.Shot}
		 */
		shot: function (){
			return	new Shot(this.video);
		}
	};


	/**
	 * Get camera element from container
	 *
	 * @static
	 * @param	{HTMLElement}	el
	 * @return	{Camera}
	 */
	Camera.get = function (el){
		return	new Camera(el.firstChild);
	};


	/**
	 * Publish camera element into container
	 *
	 * @static
	 * @param	{HTMLElement}	el
	 * @param	{Object}		options
	 * @param	{Function}		[callback]
	 */
	Camera.publish = function (el, options, callback){
		if( typeof options == 'function' ){
			callback = options;
			options = {};
		}

		// Dimensions of "camera"
		options = api.extend({}, {
			  width:	'100%'
			, height:	'100%'
			, start:	true
		}, options);


		if( el.jquery ){
			// Extract first element, from jQuery collection
			el = el[0];
		}


		var doneFn = function (err){
			if( err ){
				callback(err);
			}
			else {
				// Get camera
				var cam = Camera.get(el);
				if( options.start ){
					cam.start(callback);
				}
				else {
					callback(null, cam);
				}
			}
		};


		el.style.width	= _px(options.width);
		el.style.height	= _px(options.height);


		if( api.html5 && html5 && !api.insecureChrome ){
			// Create video element
			var video = document.createElement('video');

			// Set dimensions
			video.style.width	= _px(options.width);
			video.style.height	= _px(options.height);

			// Clean container
			if( window.jQuery ){
				jQuery(el).empty();
			} else {
				el.innerHTML = '';
			}

			// Add "camera" to container
			el.appendChild(video);

			// end
			doneFn();
		}
		else {
			Camera.fallback(el, options, doneFn);
		}
	};


	Camera.fallback = function (el, options, callback){
		callback('not_support_camera');
	};

	Camera.checkAlreadyCaptured = (function () {
		var	mediaDevices = navigator.mediaDevices,
			MediaStreamTrack = window.MediaStreamTrack,
			navigatorEnumerateDevices = navigator.enumerateDevices,
			enumerateDevices;

		if (mediaDevices && mediaDevices.enumerateDevices) {
			enumerateDevices = function (callback) {
				mediaDevices.enumerateDevices().then(callback);
			};
		} else if (MediaStreamTrack && MediaStreamTrack.getSources) {
			enumerateDevices = MediaStreamTrack.getSources.bind(MediaStreamTrack);
		} else if (navigatorEnumerateDevices) {
			enumerateDevices = navigatorEnumerateDevices.bind(navigator);
		} else {
			enumerateDevices = function (fn) {
				fn([]);
			};
		}

		return function (callback) {
			enumerateDevices(function (devices) {
				var deviceExists = devices.some(function (device) {
					return (device.kind === 'videoinput' || device.kind === 'video') && device.label;
				});

				callback(deviceExists);
			});
		};

	})();


	/**
	 * @class	FileAPI.Camera.Shot
	 */
	var Shot = function (video){
		var canvas	= video.nodeName ? api.Image.toCanvas(video) : video;
		var shot	= api.Image(canvas);
		shot.type	= 'image/png';
		shot.width	= canvas.width;
		shot.height	= canvas.height;
		shot.size	= canvas.width * canvas.height * 4;
		return	shot;
	};


	/**
	 * Add "px" postfix, if value is a number
	 *
	 * @private
	 * @param	{*}  val
	 * @return	{String}
	 */
	function _px(val){
		return	val >= 0 ? val + 'px' : val;
	}


	/**
	 * @private
	 * @param	{HTMLVideoElement} video
	 * @return	{Boolean}
	 */
	function _detectVideoSignal(video){
		var canvas = document.createElement('canvas'), ctx, res = false;
		try {
			ctx = canvas.getContext('2d');
			ctx.drawImage(video, 0, 0, 1, 1);
			res = ctx.getImageData(0, 0, 1, 1).data[4] != 255;
		}
		catch( err ){
			api.log('[FileAPI.Camera] detectVideoSignal:', err);
		}
		return	res;
	}


	// @export
	Camera.Shot	= Shot;
	api.Camera	= Camera;
})(window, FileAPI);

/**
 * FileAPI fallback to Flash
 *
 * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
 */

/*global window, ActiveXObject, FileAPI */
(function (window, jQuery, api) {
	"use strict";

	var
		  document = window.document
		, location = window.location
		, navigator = window.navigator
		, _each = api.each
	;


	api.support.flash = (function (){
		var mime = navigator.mimeTypes, has = false;

		if( navigator.plugins && typeof navigator.plugins['Shockwave Flash'] == 'object' ){
			has	= navigator.plugins['Shockwave Flash'].description && !(mime && mime['application/x-shockwave-flash'] && !mime['application/x-shockwave-flash'].enabledPlugin);
		}
		else {
			try {
				has	= !!(window.ActiveXObject && new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
			}
			catch(er){
				api.log('Flash -- does not supported.');
			}
		}

		if( has && /^file:/i.test(location) ){
			api.log('[warn] Flash does not work on `file:` protocol.');
		}

		return	has;
	})();


	   api.support.flash
	&& (0
		|| !api.html5 || !api.support.html5
		|| (api.cors && !api.support.cors)
		|| (api.media && !api.support.media)
		|| api.insecureChrome
	)
	&& (function (){
		var
			  _attr  = api.uid()
			, _retry = 0
			, _files = {}
			, _rhttp = /^https?:/i

			, flash = {
				_fn: {},


				/**
				 * Initialization & preload flash object
				 */
				init: function (){
					var child = document.body && document.body.firstChild;

					if( child ){
						do {
							if( child.nodeType == 1 ){
								api.log('FlashAPI.state: awaiting');

								var dummy = document.createElement('div');

								dummy.id = '_' + _attr;

								_css(dummy, {
									  top: 1
									, right: 1
									, width: 5
									, height: 5
									, position: 'absolute'
									, zIndex: 2147483647+'' // set max zIndex
								});

								child.parentNode.insertBefore(dummy, child);
								flash.publish(dummy, _attr);

								return;
							}
						}
						while( child = child.nextSibling );
					}

					if( _retry < 10 ){
						setTimeout(flash.init, ++_retry*50);
					}
				},


				/**
				 * Publish flash-object
				 *
				 * @param {HTMLElement} el
				 * @param {String} id
				 * @param {Object} [opts]
				 */
				publish: function (el, id, opts){
					opts = opts || {};
					el.innerHTML = _makeFlashHTML({
						  id: id
						, src: _getUrl(api.flashUrl, 'r=' + api.version)
//						, src: _getUrl('http://v.demidov.boom.corp.mail.ru/uploaderfileapi/FlashFileAPI.swf?1')
						, wmode: opts.camera ? '' : 'transparent'
						, flashvars: 'callback=' + (opts.onEvent || 'FileAPI.Flash.onEvent')
							+ '&flashId='+ id
							+ '&storeKey='+ navigator.userAgent.match(/\d/ig).join('') +'_'+ api.version
							+ (flash.isReady || (api.pingUrl ? '&ping='+api.pingUrl : ''))
							+ '&timeout='+api.flashAbortTimeout
							+ (opts.camera ? '&useCamera=' + _getUrl(api.flashWebcamUrl) : '')
							+ '&debug='+(api.debug?"1":"")
					}, opts);
				},


				ready: function (){
					api.log('FlashAPI.state: ready');

					flash.ready = api.F;
					flash.isReady = true;
					flash.patch();
					flash.patchCamera && flash.patchCamera();
					api.event.on(document, 'mouseover', flash.mouseover);
					api.event.on(document, 'click', function (evt){
						if( flash.mouseover(evt) ){
							evt.preventDefault
								? evt.preventDefault()
								: (evt.returnValue = true)
							;
						}
					});
				},


				getEl: function (){
					return	document.getElementById('_'+_attr);
				},


				getWrapper: function (node){
					do {
						if( /js-fileapi-wrapper/.test(node.className) ){
							return	node;
						}
					}
					while( (node = node.parentNode) && (node !== document.body) );
				},


				mouseover: function (evt){
					var target = api.event.fix(evt).target;

					if( /input/i.test(target.nodeName) && target.type == 'file' && !target.disabled ){
						var
							  state = target.getAttribute(_attr)
							, wrapper = flash.getWrapper(target)
						;

						if( api.multiFlash ){
							// check state:
							//   p — published
							//   i — initialization
							//   r — ready
							if( state == 'i' || state == 'r' ){
								// publish fail
								return	false;
							}
							else if( state != 'p' ){
								// set "init" state
								target.setAttribute(_attr, 'i');

								var dummy = document.createElement('div');

								if( !wrapper ){
									api.log('[err] FlashAPI.mouseover: js-fileapi-wrapper not found');
									return;
								}

								_css(dummy, {
									  top:    0
									, left:   0
									, width:  target.offsetWidth
									, height: target.offsetHeight
									, zIndex: 2147483647+'' // set max zIndex
									, position: 'absolute'
								});

								wrapper.appendChild(dummy);
								flash.publish(dummy, api.uid());

								// set "publish" state
								target.setAttribute(_attr, 'p');
							}

							return	true;
						}
						else if( wrapper ){
							// Use one flash element
							var box = _getDimensions(wrapper);

							_css(flash.getEl(), box);

							// Set current input
							flash.curInp = target;
						}
					}
					else if( !/object|embed/i.test(target.nodeName) ){
						_css(flash.getEl(), { top: 1, left: 1, width: 5, height: 5 });
					}
				},

				onEvent: function (evt){
					var type = evt.type;

					if( type == 'ready' ){
						try {
							// set "ready" state
							flash.getInput(evt.flashId).setAttribute(_attr, 'r');
						} catch (e){
						}

						flash.ready();
						setTimeout(function (){ flash.mouseenter(evt); }, 50);
						return	true;
					}
					else if( type === 'ping' ){
						api.log('(flash -> js).ping:', [evt.status, evt.savedStatus], evt.error);
					}
					else if( type === 'log' ){
						api.log('(flash -> js).log:', evt.target);
					}
					else if( type in flash ){
						setTimeout(function (){
							api.log('FlashAPI.event.'+evt.type+':', evt);
							flash[type](evt);
						}, 1);
					}
				},


				mouseenter: function (evt){
					var node = flash.getInput(evt.flashId);

					if( node ){
						// Set multiple mode
						flash.cmd(evt, 'multiple', node.getAttribute('multiple') != null);


						// Set files filter
						var accept = [], exts = {};

						_each((node.getAttribute('accept') || '').split(/,\s*/), function (mime){
							api.accept[mime] && _each(api.accept[mime].split(' '), function (ext){
								exts[ext] = 1;
							});
						});

						_each(exts, function (i, ext){
							accept.push( ext );
						});

						flash.cmd(evt, 'accept', accept.length ? accept.join(',')+','+accept.join(',').toUpperCase() : '*');
					}
				},


				get: function (id){
					return	document[id] || window[id] || document.embeds[id];
				},


				getInput: function (id){
					if( api.multiFlash ){
						try {
							var node = flash.getWrapper(flash.get(id));
							if( node ){
								return node.getElementsByTagName('input')[0];
							}
						} catch (e){
							api.log('[err] Can not find "input" by flashId:', id, e);
						}
					} else {
						return	flash.curInp;
					}
				},


				select: function (evt){
					var
						  inp = flash.getInput(evt.flashId)
						, uid = api.uid(inp)
						, files = evt.target.files
						, event
					;

					_each(files, function (file){
						api.checkFileObj(file);
					});

					_files[uid] = files;

					if( document.createEvent ){
						event = document.createEvent('Event');
						event.files = files;
						event.initEvent('change', true, true);
						inp.dispatchEvent(event);
					}
					else if( jQuery ){
						jQuery(inp).trigger({ type: 'change', files: files });
					}
					else {
						event = document.createEventObject();
						event.files = files;
						inp.fireEvent('onchange', event);
					}
				},


				cmd: function (id, name, data, last){
					try {
						api.log('(js -> flash).'+name+':', data);
						return flash.get(id.flashId || id).cmd(name, data);
					} catch (err){
						api.log('(js -> flash).onError:', err.toString());
						if( !last ){
							// try again
							setTimeout(function (){ flash.cmd(id, name, data, true); }, 50);
						}
					}
				},


				patch: function (){
					api.flashEngine = true;

					// FileAPI
					_inherit(api, {
						getFiles: function (input, filter, callback){
							if( callback ){
								api.filterFiles(api.getFiles(input), filter, callback);
								return null;
							}

							var files = api.isArray(input) ? input : _files[api.uid(input.target || input.srcElement || input)];


							if( !files ){
								// Файлов нету, вызываем родительский метод
								return	this.parent.apply(this, arguments);
							}


							if( filter ){
								filter	= api.getFilesFilter(filter);
								files	= api.filter(files, function (file){ return filter.test(file.name); });
							}

							return	files;
						},


						getInfo: function (file, fn){
							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else if( file.isShot ){
								fn(null, file.info = {
									width: file.width,
									height: file.height
								});
							}
							else {
								if( !file.__info ){
									var defer = file.__info = api.defer();

									flash.cmd(file, 'getFileInfo', {
										  id: file.id
										, callback: _wrap(function _(err, info){
											_unwrap(_);
											defer.resolve(err, file.info = info);
										})
									});
								}

								file.__info.then(fn);
							}
						}
					});


					// FileAPI.Image
					api.support.transform = true;
					api.Image && _inherit(api.Image.prototype, {
						get: function (fn, scaleMode){
							this.set({ scaleMode: scaleMode || 'noScale' }); // noScale, exactFit
							return this.parent(fn);
						},

						_load: function (file, fn){
							api.log('FlashAPI.Image._load:', file);

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								var _this = this;
								api.getInfo(file, function (err){
									fn.call(_this, err, file);
								});
							}
						},

						_apply: function (file, fn){
							api.log('FlashAPI.Image._apply:', file);

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								var m = this.getMatrix(file.info), doneFn = fn;

								flash.cmd(file, 'imageTransform', {
									  id: file.id
									, matrix: m
									, callback: _wrap(function _(err, base64){
										api.log('FlashAPI.Image._apply.callback:', err);
										_unwrap(_);

										if( err ){
											doneFn(err);
										}
										else if( !api.support.html5 && (!api.support.dataURI || base64.length > 3e4) ){
											_makeFlashImage({
												  width:	(m.deg % 180) ? m.dh : m.dw
												, height:	(m.deg % 180) ? m.dw : m.dh
												, scale:	m.scaleMode
											}, base64, doneFn);
										}
										else {
											if( m.filter ){
												doneFn = function (err, img){
													if( err ){
														fn(err);
													}
													else {
														api.Image.applyFilter(img, m.filter, function (){
															fn(err, this.canvas);
														});
													}
												};
											}

											api.newImage('data:'+ file.type +';base64,'+ base64, doneFn);
										}
									})
								});
							}
						},

						toData: function (fn){
							var
								  file = this.file
								, info = file.info
								, matrix = this.getMatrix(info)
							;
							api.log('FlashAPI.Image.toData');

							if( _isHtmlFile(file) ){
								this.parent.apply(this, arguments);
							}
							else {
								if( matrix.deg == 'auto' ){
									matrix.deg = api.Image.exifOrientation[info && info.exif && info.exif.Orientation] || 0;
								}

								fn.call(this, !file.info, {
									  id:		file.id
									, flashId:	file.flashId
									, name:		file.name
									, type:		file.type
									, matrix:	matrix
								});
							}
						}
					});


					api.Image && _inherit(api.Image, {
						fromDataURL: function (dataURL, size, callback){
							if( !api.support.dataURI || dataURL.length > 3e4 ){
								_makeFlashImage(
									  api.extend({ scale: 'exactFit' }, size)
									, dataURL.replace(/^data:[^,]+,/, '')
									, function (err, el){ callback(el); }
								);
							}
							else {
								this.parent(dataURL, size, callback);
							}
						}
					});

					// FileAPI.Form
					_inherit(api.Form.prototype, {
						toData: function (fn){
							var items = this.items, i = items.length;

							for( ; i--; ){
								if( items[i].file && _isHtmlFile(items[i].blob) ){
									return this.parent.apply(this, arguments);
								}
							}

							api.log('FlashAPI.Form.toData');
							fn(items);
						}
					});


					// FileAPI.XHR
					_inherit(api.XHR.prototype, {
						_send: function (options, formData){
							if(
								   formData.nodeName
								|| formData.append && api.support.html5
								|| api.isArray(formData) && (typeof formData[0] === 'string')
							){
								// HTML5, Multipart or IFrame
								return	this.parent.apply(this, arguments);
							}


							var
								  data = {}
								, files = {}
								, _this = this
								, flashId
								, fileId
							;

							_each(formData, function (item){
								if( item.file ){
									files[item.name] = item = _getFileDescr(item.blob);
									fileId  = item.id;
									flashId = item.flashId;
								}
								else {
									data[item.name] = item.blob;
								}
							});

							if( !fileId ){
								flashId = _attr;
							}

							if( !flashId ){
								api.log('[err] FlashAPI._send: flashId -- undefined');
								return this.parent.apply(this, arguments);
							}
							else {
								api.log('FlashAPI.XHR._send: '+ flashId +' -> '+ fileId);
							}

							_this.xhr = {
								headers: {},
								abort: function (){ flash.cmd(flashId, 'abort', { id: fileId }); },
								getResponseHeader: function (name){ return this.headers[name]; },
								getAllResponseHeaders: function (){ return this.headers; }
							};

							var queue = api.queue(function (){
								flash.cmd(flashId, 'upload', {
									  url: _getUrl(options.url.replace(/([a-z]+)=(\?)&?/i, ''))
									, data: data
									, files: fileId ? files : null
									, headers: options.headers || {}
									, callback: _wrap(function upload(evt){
										var type = evt.type, result = evt.result;

										api.log('FlashAPI.upload.'+type);

										if( type == 'progress' ){
											evt.loaded = Math.min(evt.loaded, evt.total); // @todo fixme
											evt.lengthComputable = true;
											options.progress(evt);
										}
										else if( type == 'complete' ){
											_unwrap(upload);

											if( typeof result == 'string' ){
												_this.responseText	= result.replace(/%22/g, "\"").replace(/%5c/g, "\\").replace(/%26/g, "&").replace(/%25/g, "%");
											}

											_this.end(evt.status || 200);
										}
										else if( type == 'abort' || type == 'error' ){
											_this.end(evt.status || 0, evt.message);
											_unwrap(upload);
										}
									})
								});
							});


							// #2174: FileReference.load() call while FileReference.upload() or vice versa
							_each(files, function (file){
								queue.inc();
								api.getInfo(file, queue.next);
							});

							queue.check();
						}
					});
				}
			}
		;


		function _makeFlashHTML(opts){
			return ('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+(opts.width || '100%')+'" height="'+(opts.height || '100%')+'">'
				+ '<param name="movie" value="#src#" />'
				+ '<param name="flashvars" value="#flashvars#" />'
				+ '<param name="swliveconnect" value="true" />'
				+ '<param name="allowscriptaccess" value="always" />'
				+ '<param name="allownetworking" value="all" />'
				+ '<param name="menu" value="false" />'
				+ '<param name="wmode" value="#wmode#" />'
				+ '<embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="'+(opts.width || '100%')+'" height="'+(opts.height || '100%')+'" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed>'
				+ '</object>').replace(/#(\w+)#/ig, function (a, name){ return opts[name]; })
			;
		}


		function _css(el, css){
			if( el && el.style ){
				var key, val;
				for( key in css ){
					val = css[key];
					if( typeof val == 'number' ){
						val += 'px';
					}
					try { el.style[key] = val; } catch (e) {}
				}
			}
		}


		function _inherit(obj, methods){
			_each(methods, function (fn, name){
				var prev = obj[name];
				obj[name] = function (){
					this.parent = prev;
					return fn.apply(this, arguments);
				};
			});
		}

		function _isHtmlFile(file){
			return	file && !file.flashId;
		}

		function _wrap(fn){
			var id = fn.wid = api.uid();
			flash._fn[id] = fn;
			return	'FileAPI.Flash._fn.'+id;
		}


		function _unwrap(fn){
			try {
				flash._fn[fn.wid] = null;
				delete	flash._fn[fn.wid];
			}
			catch(e){}
		}


		function _getUrl(url, params){
			if( !_rhttp.test(url) ){
				if( /^\.\//.test(url) || '/' != url.charAt(0) ){
					var path = location.pathname;
					path = path.substr(0, path.lastIndexOf('/'));
					url = (path +'/'+ url).replace('/./', '/');
				}

				if( '//' != url.substr(0, 2) ){
					url = '//' + location.host + url;
				}

				if( !_rhttp.test(url) ){
					url = location.protocol + url;
				}
			}

			if( params ){
				url += (/\?/.test(url) ? '&' : '?') + params;
			}

			return	url;
		}


		function _makeFlashImage(opts, base64, fn){
			var
				  key
				, flashId = api.uid()
				, el = document.createElement('div')
				, attempts = 10
			;

			for( key in opts ){
				el.setAttribute(key, opts[key]);
				el[key] = opts[key];
			}

			_css(el, opts);

			opts.width	= '100%';
			opts.height	= '100%';

			el.innerHTML = _makeFlashHTML(api.extend({
				  id: flashId
				, src: _getUrl(api.flashImageUrl, 'r='+ api.uid())
				, wmode: 'opaque'
				, flashvars: 'scale='+ opts.scale +'&callback='+_wrap(function _(){
					_unwrap(_);
					if( --attempts > 0 ){
						_setImage();
					}
					return true;
				})
			}, opts));

			function _setImage(){
				try {
					// Get flash-object by id
					var img = flash.get(flashId);
					img.setImage(base64);
				} catch (e){
					api.log('[err] FlashAPI.Preview.setImage -- can not set "base64":', e);
				}
			}

			fn(false, el);
			el = null;
		}


		function _getFileDescr(file){
			return	{
				  id: file.id
				, name: file.name
				, matrix: file.matrix
				, flashId: file.flashId
			};
		}


		function _getDimensions(el){
			var
				  box = el.getBoundingClientRect()
				, body = document.body
				, docEl = (el && el.ownerDocument).documentElement
			;

			return {
				  top:		box.top + (window.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || body.clientTop || 0)
				, left:		box.left + (window.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || body.clientLeft || 0)
				, width:	box.right - box.left
				, height:	box.bottom - box.top
			};
		}

		// @export
		api.Flash = flash;


		// Check dataURI support
		api.newImage('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', function (err, img){
			api.support.dataURI = !(img.width != 1 || img.height != 1);
			flash.init();
		});
	})();
})(window, window.jQuery, FileAPI);

/**
 * FileAPI fallback to Flash
 *
 * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
 */

/*global window, FileAPI */
(function (window, jQuery, api) {
    "use strict";

    var _each = api.each,
        _cameraQueue = [];

    if (api.support.flash && (api.media && (!api.support.media || !api.html5 || api.insecureChrome))) {
        (function () {
            function _wrap(fn) {
                var id = fn.wid = api.uid();
                api.Flash._fn[id] = fn;
                return 'FileAPI.Flash._fn.' + id;
            }


            function _unwrap(fn) {
                try {
                    api.Flash._fn[fn.wid] = null;
                    delete api.Flash._fn[fn.wid];
                } catch (e) {
                }
            }

            var flash = api.Flash;
            api.extend(api.Flash, {

                patchCamera: function () {
                    api.Camera.fallback = function (el, options, callback) {
                        var camId = api.uid();
                        api.log('FlashAPI.Camera.publish: ' + camId);
                        flash.publish(el, camId, api.extend(options, {
                            camera: true,
                            onEvent: _wrap(function _(evt) {
                                if (evt.type === 'camera') {
                                    _unwrap(_);

                                    if (evt.error) {
                                        api.log('FlashAPI.Camera.publish.error: ' + evt.error);
                                        callback(evt.error);
                                    } else {
                                        api.log('FlashAPI.Camera.publish.success: ' + camId);
                                        callback(null);
                                    }
                                }
                            })
                        }));
                    };
                    // Run
                    _each(_cameraQueue, function (args) {
                        api.Camera.fallback.apply(api.Camera, args);
                    });
                    _cameraQueue = [];


                    // FileAPI.Camera:proto
                    api.extend(api.Camera.prototype, {
                        _id: function () {
                            return this.video.id;
                        },

                        start: function (callback) {
                            var _this = this;
                            flash.cmd(this._id(), 'camera.on', {
                                callback: _wrap(function _(evt) {
                                    _unwrap(_);

                                    if (evt.error) {
                                        api.log('FlashAPI.camera.on.error: ' + evt.error);
                                        callback(evt.error, _this);
                                    } else {
                                        api.log('FlashAPI.camera.on.success: ' + _this._id());
                                        _this._active = true;
                                        callback(null, _this);
                                    }
                                })
                            });
                        },

                        stop: function () {
                            this._active = false;
                            flash.cmd(this._id(), 'camera.off');
                        },

                        shot: function () {
                            api.log('FlashAPI.Camera.shot:', this._id());

                            var shot = api.Flash.cmd(this._id(), 'shot', {});
                            shot.type = 'image/png';
                            shot.flashId = this._id();
                            shot.isShot = true;

                            return new api.Camera.Shot(shot);
                        }
                    });
                }
            });

            api.Camera.fallback = function () {
                _cameraQueue.push(arguments);
            };

        }());
    }
}(window, window.jQuery, FileAPI));
if( true ){ !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function (){ return FileAPI; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }

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
            selector: 'fs-file-drag-base'
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

module.exports = "<div class=\"label\"\n     [ngStyle]=\"{'width.px': previewWidth || 150}\">\n  <ng-content select=\"[fs-file-label]\"></ng-content>\n</div>\n<fs-file-preview class=\"preview\"\n                 *ngIf=\"file; else preview\"\n                 (remove)=\"removeFile($event)\"\n                 [file]=\"file\"\n                 [previewWidth]=\"previewWidth\"\n                 [previewHeight]=\"previewHeight\">\n  <ng-template fs-file-preview-action placement=\"bottom-left\" action=\"remove\" tooltip=\"Remove\">\n    <mat-icon>close</mat-icon>\n  </ng-template>\n  <ng-template fs-file-preview-action placement=\"bottom-right\" tooltip=\"Reupload\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n  </ng-template>\n</fs-file-preview>\n\n<ng-template #preview>\n  <div class=\"select\" (click)=\"fileInput.click()\">\n    <mat-icon>cloud_upload</mat-icon>\n    <div class=\"instruction\">{{instruction}}</div>\n    <button mat-raised-button color=\"primary\">Upload</button>\n  </div>\n</ng-template>\n\n<input type=\"file\"\n       [hidden]=\"true\"\n       [disabled]=\"fsFile.disabled\"\n       [multiple]=\"fsFile.multiple\"\n       [attr.accept]=\"fsFile.accept\"\n       #fileInput\n>\n\n"

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
            selector: 'fs-file-previews-base'
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

module.exports = "<div [style.width.px]=\"previewWidth\" [style.height.px]=\"previewHeight\" class=\"preview-container\">\n\n  <!-- Progress container -->\n  <ng-container *ngIf=\"file.progress; else elsePreview\">\n    <mat-spinner class=\"spinner\" [diameter]=\"previewWidth/2\"></mat-spinner>\n  </ng-container>\n\n  <!-- Image container -->\n  <ng-template #elsePreview>\n    <ng-container *ngIf=\"file.typeImage; else nonImage\">\n      <img [src]=\"preview\">\n    </ng-container>\n\n    <!-- Non image container -->\n    <ng-template #nonImage>\n        <div class=\"file-ext\">{{file.extension}}</div>\n        <div class=\"file-name\" [matTooltip]=\"file.name\">{{file.name}}</div>\n    </ng-template>\n  </ng-template>\n</div>\n\n<!-- Actions -->\n<div class=\"actions\">\n  <button class=\"action\" mat-mini-fab color=\"primary\"\n          *ngFor=\"let action of filteredActions\"\n          [ngClass]=\"getActionClasses(action)\"\n          [matTooltip]=\"action.tooltip\"\n          (click)=\"callAction(action)\">\n    <ng-template [ngTemplateOutlet]=\"actionsTemplate[action.index]\"></ng-template>\n  </button>\n</div>\n"

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
var FileAPI = __webpack_require__("../node_modules/fileapi/dist/FileAPI.js");
var fs_file_1 = __webpack_require__("./models/fs-file.ts");
var fs_file_preview_base_1 = __webpack_require__("./components/fs-file-preview-base/index.ts");
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
            template: __webpack_require__("./components/fs-file/fs-file.component.html")
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

/***/ "./fs-component.module.ts":
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
var common_2 = __webpack_require__("../node_modules/@firestitch/common/common.umd.js");
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

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-component.module.ts"));
__export(__webpack_require__("./components/index.ts"));
__export(__webpack_require__("./services/index.ts"));
__export(__webpack_require__("./directives/index.ts"));


/***/ }),

/***/ "./models/fs-file.ts":
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
var FileAPI = __webpack_require__("../node_modules/fileapi/dist/FileAPI.js");
var fs_file_1 = __webpack_require__("./models/fs-file.ts");
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

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map