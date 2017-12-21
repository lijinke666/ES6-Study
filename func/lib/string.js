'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HumpTounderline = exports.underlineToHump = exports.capitalize = exports.anagrams = undefined;

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 生成一个字符串 所有的字母顺序
 * @param {String} str 
 * "ab" => ['ab','ba']
 */
var anagrams = exports.anagrams = function anagrams(str) {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str.split('').reduce(function (acc, letter, i) {
    return acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(function (val) {
      return letter + val;
    }));
  }, []);
};

/**
 * 首字母大写
 * @param {*} string 
 * @param {*} lowerRest 
 */
var capitalize = exports.capitalize = function capitalize(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      first = _ref2[0],
      rest = _ref2.slice(1);

  var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
};

/**
 * 下划线转驼峰
 * @author 李金珂
 * @param {*} str 
 */
var underlineToHump = exports.underlineToHump = function underlineToHump() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.replace(/_([a-z])/g, function (_, a) {
    return a.toLocaleUpperCase();
  });
};

/**
 * 驼峰转下划线
 * @author 李金珂
 * @param {*} str 
 */
var HumpTounderline = exports.HumpTounderline = function HumpTounderline() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.replace(/([A-Z])/g, function (_, a) {
    return '_' + a.toLocaleLowerCase();
  });
};