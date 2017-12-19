'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 元素是否可见
 * @param {Object} el 
 * @param {Boolean} partiallyVisible 是否部分可见
 */
var elementIsVisibleInViewport = exports.elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        bottom = _el$getBoundingClient.bottom,
        right = _el$getBoundingClient.right;

    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/**
 * 获取滚动条位置
 * @param {Object} el 
 */
var getScrollPosition = exports.getScrollPosition = function getScrollPosition() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return { x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop };
};

/**
 * 获取地址栏请求参数
 * @param {String} url 
 */
var getURLParameters = exports.getURLParameters = function getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
        return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
};

/**
 * 回到顶部
 */
var scrollToTop = exports.scrollToTop = function scrollToTop() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};