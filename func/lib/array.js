"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arraySum = exports.without = exports.filterNonUnique = exports.distinctArray = exports.flatten = exports.deepFlatten = exports.countOccurrences = exports.compact = exports.arrayMin = exports.arrayMax = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _is = require("babel-runtime/core-js/object/is");

var _is2 = _interopRequireDefault(_is);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

exports.chunk = chunk;
exports.createAnySerializeArray = createAnySerializeArray;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * https://github.com/Chalarangelo/30-seconds-of-code
 */

/**
 * 数组最大值
 * @param {Array} arr 
 * arrayMax([10, 1, 5]) -> 10
 */
var arrayMax = exports.arrayMax = function arrayMax(arr) {
    return Math.max.apply(Math, (0, _toConsumableArray3.default)(arr));
};

/**
 * 数组最小值
 * @param {Array} arr 
 * arrayMin([10, 1, 5]) -> 1
 */
var arrayMin = exports.arrayMin = function arrayMin(arr) {
    return Math.min.apply(Math, (0, _toConsumableArray3.default)(arr));
};

/**
 * 数组分块
 * @param {Array} arr 
 * @param {Number} size 多少长度一组 
 * chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
 */
function chunk(arr) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return (0, _from2.default)({ length: Math.ceil(arr.length / size) }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    });
}

/**
 * 移除 数组中 的 false 值
 * @param {Array} arr 
 * compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
 */
var compact = exports.compact = function compact(arr) {
    return arr.filter(Boolean);
};

/**
 * 计算某个下标值 出现的 次数
 * @param {Array} arr 
 * @param {Number} value 
 * countOccurrences([1,1,2,1,2,3], 1) -> 3
 * 初始值 设为0 相等就 +1 
 */
var countOccurrences = exports.countOccurrences = function countOccurrences(arr, value) {
    return arr.reduce(function (a, v) {
        return v === value ? a + 1 : a + 0;
    }, 0);
};

/**
 * 将多维数组 转为 1维
 * @param {Array} arr 
 * deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
 */
var deepFlatten = exports.deepFlatten = function deepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, (0, _toConsumableArray3.default)(arr.map(function (v) {
        return Array.isArray(v) ? deepFlatten(v) : v;
    })));
};

var a = function a() {
    (0, _classCallCheck3.default)(this, a);
};

/**
 * 将二维数组 转为 1维
 * @param {Array} arr 
 */


var flatten = exports.flatten = function flatten(arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(next);
    });
};

/**
 * 数组去重 支持复合类型
 * @param {Array} arr 
 */
var distinctArray = exports.distinctArray = function distinctArray(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (arr.some(function (item) {
        return (0, _is2.default)(typeof item === "undefined" ? "undefined" : (0, _typeof3.default)(item), "object");
    })) {
        return arr.map(function (item) {
            return (0, _stringify2.default)(item);
        }).filter(function (item, idx, arry) {
            return idx === arry.findIndex(function (current) {
                return current === item;
            });
        }).map(function (item) {
            return JSON.parse(item);
        });
    }
    return [].concat((0, _toConsumableArray3.default)(new _set2.default(arr)));
};

/**
 * 创建任意长度 任意类型的 序列化数组
 * @author jinke.li
 * @param {Number} length=0 要生成的长度
 * @param {String} valueType="number" 生成value 的类型 
 * @param {Number} startWith=0 起始值 
 */
function createAnySerializeArray() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var valueType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "number";
    var startWith = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var type = valueType.toLocaleLowerCase();
    var len = length >> 0; //位运算 如果是数字 可以取整 如果是非数字 值为0
    var _valueType = null;

    if (!(0, _is2.default)('number', typeof len === "undefined" ? "undefined" : (0, _typeof3.default)(len))) throw new Error('length should be a number!');

    switch (type) {
        case "number":
            _valueType = function _valueType(v) {
                return v;
            };
            break;
        case "function":
            _valueType = function _valueType() {
                return function (f) {
                    return f;
                };
            };
            break;
        case "string":
            _valueType = function _valueType(v) {
                return v.toString();
            };
            break;
        case "array":
            _valueType = function _valueType(v) {
                return [v];
            };
            break;
        case "boolean":
            _valueType = function _valueType(v) {
                return !!v;
            };
            break;
        default:
            throw new Error('Unknown type of thr valueType!');
            break;
    }

    var result = [].concat((0, _toConsumableArray3.default)(new Array(len + startWith))).map(function (v, i) {
        return _valueType(i);
    }).filter(function (_, i) {
        return i >= startWith;
    });

    return result;
}

/**
 * 找出数组中的非唯一值
 * @param {Array} arr 
 * filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
 */
var filterNonUnique = exports.filterNonUnique = function filterNonUnique(arr) {
    return arr.filter(function (i) {
        return arr.indexOf(i) === arr.lastIndexOf(i);
    });
};

/**
 * 找出在给定值之外的 值
 * @param {Array} arr 
 * @param {any} args 
 */
var without = exports.without = function without(arr) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return arr.filter(function (v) {
        return !args.includes(v);
    });
};

/**
 * 数组总和
 * @param {Array} arr 
 */
var arraySum = exports.arraySum = function arraySum(arr) {
    return arr.reduce(function (acc, val) {
        return acc + val;
    }, 0);
};