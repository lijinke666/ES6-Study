/**
 * 生成一个字符串 所有的字母顺序
 * @param {String} str 
 * "ab" => ['ab','ba']
 */
export const anagrams = (str) => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
        acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
}


/**
 * 首字母大写
 * @param {*} string 
 * @param {*} lowerRest 
 */
export const capitalize = ([first, ...rest], lowerRest = false) => {
    return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
}

/**
 * 下划线转驼峰
 * @author 李金珂
 * @param {*} str 
 */
export const underlineToHump = (str="") => str.replace(/_([a-z])/g,(_,a)=> a.toLocaleUpperCase())

/**
 * 驼峰转下划线
 * @author 李金珂
 * @param {*} str 
 */
export const HumpTounderline = (str="") => str.replace(/([A-Z])/g,(_,a)=> '_'+ a.toLocaleLowerCase())

