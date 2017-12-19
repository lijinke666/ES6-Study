/**
 * 创建任意长度 任意类型的 序列化数组
 * @param {Number} length=0 要生成的长度
 * @param {String} valueType="number" 生成value 的类型 
 * @param {Number} startWith=0 起始值 
 */
function createAnySerializeArray(length = 0, valueType = "number", startWith = 0) {
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

    return [...new Array(len+startWith)]
        .map((v, i) => _valueType(i))
        .filter((_,i)=> i >= startWith)
}

const array = createAnySerializeArray(5, 'number', 2)

console.log(array);