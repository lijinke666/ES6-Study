/**
 * https://github.com/Chalarangelo/30-seconds-of-code
 */


/**
 * 数组最大值
 * @param {Array} arr 
 * arrayMax([10, 1, 5]) -> 10
 */
export const arrayMax = (arr) => Math.max(...arr)

/**
 * 数组最小值
 * @param {Array} arr 
 * arrayMin([10, 1, 5]) -> 1
 */
export const arrayMin = (arr) => Math.min(...arr)


/**
 * 数组分块
 * @param {Array} arr 
 * @param {Number} size 多少长度一组 
 * chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
 */
export function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
        arr.slice(i * size, i * size + size)
    })
}

/**
 * 移除 数组中 的 false 值
 * @param {Array} arr 
 * compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
 */
export const compact = (arr) => arr.filter(Boolean)

/**
 * 计算某个下标值 出现的 次数
 * @param {Array} arr 
 * @param {Number} value 
 * countOccurrences([1,1,2,1,2,3], 1) -> 3
 * 初始值 设为0 相等就 +1 
 */
export const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)

/**
 * 将多维数组 转为 1维
 * @param {*} arr 
 * deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
 */
export const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));