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
 * @param {Array} arr 
 * deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
 */
export const deepFlatten = (arr) => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))

/**
 * 数组去重 支持复合类型
 * @param {Array} arr 
 */
export const distinctArray = (arr) => {
    if (!Array.isArray(targetArray)) {
        return targetArray
    }
    if (targetArray.some((item) => Object.is(typeof item, "object"))) {
        return targetArray
            .map((item) => JSON.stringify(item))
            .filter((item, idx, arry) => idx === arry.findIndex((current) => current === item))
            .map((item) => JSON.parse(item))
    }
    return [...new Set(targetArray)]
}


/**
 * 创建任意长度 任意类型的 序列化数组
 * @param {Number} length=0 要生成的长度
 * @param {String} valueType="number" 生成value 的类型 
 * @param {Number} startWith=0 起始值 
 */
export function createAnySerializeArray(length = 0, valueType = "number", startWith = 0) {
    const type = valueType.toLocaleLowerCase()
    const len = length >> 0         //位运算 如果是数字 可以取整 如果是非数字 值为0
    let _valueType = null

    if (!Object.is('number', typeof len)) throw new Error('length should be a number!')

    switch (type) {
        case "number":
            _valueType = v => v
            break;
        case "function":
            _valueType = () => f => f
            break
        case "string":
            _valueType = v => v.toString()
            break
        case "array":
            _valueType = v => [v]
            break
        case "boolean":
            _valueType = (v) => !!v
            break
        default:
            throw new Error('Unknown type of thr valueType!')
            break;
    }

    const result = [...new Array(len)]
        .map((v, i) => _valueType(i))
        .splice(startWith)

    const diff = new Array(startWith)
        .fill(0)
        .map((v, i) => _valueType(len + i))

    result.push(...diff)
    return result
}
