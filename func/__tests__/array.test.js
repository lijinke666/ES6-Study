/**
 * @author 李金珂
 * @description 常用的代码片段单元测试
 * :)
 */
const assert = require("assert")

const {
    arrayMax,
    arrayMin,
    chunk,
    compact,
    countOccurrences,
    flatten,
    deepFlatten,
    distinctArray,
    createAnySerializeArray,
    filterNonUnique,
    without,
    arraySum
} = require("../lib/array")

describe('Array', function(){

    describe('#arrayMax()', () => {
        it('需要返回数组中最大的值 3', () => {
            assert(arrayMax([1,2,3]) === 3);
        })
    });
    describe('#arrayMin()', () => {
        it('需要返回数组中最小的值 1', () => {
            assert(arrayMin([1,2,3]) === 1);
        })
    });
    describe('#chunk()', () => {
        it('需要代码分组, [[1,2],[3,4],[5]]', () => {
            assert.deepEqual(
                chunk([1,2,3,4,5],2),
                [[1,2],[3,4],[5]]
            );
        })
    });
    describe('#compact()', () => {
        it('需要移除数组中的false值,返回 [1,2,3]', () => {
            assert.deepEqual(
                compact(
                    [1,2,3,false,"",undefined,null],
                ),
                [1,2,3]
            );
        })
    });
    describe('#countOccurrences()', () => {
        it('需要计算某个下标值出现的次数,返回 3', () => {
            assert(countOccurrences([1,1,2,1,2,3], 1) === 3);
        })
    });
    describe('#flatten()', () => {
        it('需要将多维数组将为1维数组,返回 [1,2,3,4,5]', () => {
            assert.deepEqual(
                flatten([[1,2,3],[4],5]),
                [1,2,3,4,5]
            );
        })
    });
    describe('#deepFlatten()', () => {
        it('需要将多维数组将为1维数组,返回 [1,2,3,4,5]', () => {
            assert.deepEqual(
                deepFlatten([1,[2],[[3],4],5]),
                [1,2,3,4,5]
            );
        })
    });
    describe('#distinctArray()', () => {
        it('需要数组去重,返回 [1,2,{a:1},[1]]', () => {
            assert.deepEqual(
                distinctArray([1,1,2,2,{a:1},{a:1},[1],[1]]),
                [1,2,{a:1},[1]]
            );
        })
    });
    describe('#createAnySerializeArray()', () => {
        it('需要创建长度为6,从0开始, 类型为number的序列化数组,返回 [0,1,2,3,4,5]', () => {
            assert.deepEqual(
                createAnySerializeArray(6),
                [0,1,2,3,4,5]
            );
        })
        it('需要创建长度为3,从1开始, 类型为string的序列化数组,返回 ["1","2","3"]', () => {
            assert.deepStrictEqual(
                createAnySerializeArray(3,"string",1),
                ["1","2","3"]
            );
        })
    });
    describe('#filterNonUnique()', () => {
        it('需要找出数组中的非唯一值,返回 [1,3,5]', () => {
            assert.deepEqual(
                filterNonUnique([1,2,2,3,4,4,5]),
                [1,3,5]
            );
        })
    });
    describe('#without()', () => {
        it('找出在给定值之外的 值,返回 [4,5]', () => {
            assert.deepEqual(
                without([1,2,3,4,5],1,2,3),
                [4,5]
            );
        })
    });
    describe('#arraySum()', () => {
        it('数组下标求和,返回 10', () => {
            assert( arraySum([1,2,3,4])  === 10)
        })
    });
});