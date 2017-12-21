"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shallowClone = exports.cleanObj = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 去除指定的属性
 * @param {Object} obj 
 * @param {Array} keysToKeep 
 * @param {String} childIndicator 
 */
var cleanObj = exports.cleanObj = function cleanObj(obj) {
    var keysToKeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var childIndicator = arguments[2];

    (0, _keys2.default)(obj).forEach(function (key) {
        if (key === childIndicator) {
            cleanObj(obj[key], keysToKeep, childIndicator);
        } else if (!keysToKeep.includes(key)) {
            delete obj[key];
        }
    });
};

/**
 * 浅克隆
 * @param {Object} obj
 */
var shallowClone = exports.shallowClone = function shallowClone(obj) {
    return (0, _assign2.default)({}, obj);
};