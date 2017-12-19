"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _array = require("../array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Array', function () {

    describe('#arrayMax()', function () {
        it('should return max value of the array', function () {
            (0, _assert2.default)((0, _array.arrayMax)([1, 2, 3]) === 3);
        });
    });
    describe('#arrayMin()', function () {
        it('should return min value of the array', function () {
            (0, _assert2.default)((0, _array.arrayMin)([1, 2, 3]) === 1);
        });
    });
});