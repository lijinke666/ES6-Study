/**
 * @name decorators
 * 试着写一写装饰器
 */

/**
 * 
 * @export
 * @param {number} [money=100] 
 * @returns 
 */
export function addMoney(money = 100){
    return function(target, key, descriptor){
        descriptor.value = money
        return descriptor;
    }
}