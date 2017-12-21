/**
 * 去除指定的属性
 * @param {Object} obj 
 * @param {Array} keysToKeep 
 * @param {String} childIndicator 
 */
export const cleanObj = (obj, keysToKeep = [], childIndicator) => {
    Object.keys(obj).forEach(key => {
        if (key === childIndicator) {
            cleanObj(obj[key], keysToKeep, childIndicator);
        } else if (!keysToKeep.includes(key)) {
            delete obj[key];
        }
    })
}

/**
 * 浅克隆
 * @param {Object} obj
 */
export const shallowClone = (obj) => Object.assign({}, obj)
