const assert = require("assert")

const {
    anagrams,
    capitalize,
    underlineToHump,
    HumpTounderline
} = require("../lib/string")

describe('String', function(){

    describe('#anagrams()', () => {
        it('指定一个字符串,给出所有的字母顺序组合排列', () => {
            assert.deepEqual(
                anagrams('ab'),
                ['ab','ba']
            );
        })
        it('指定一个字符串,给出所有的字母顺序组合排列2', () => {
            assert.deepEqual(
                anagrams('abc'),
                ['abc','acb','bac','bca','cab','cba']
            );
        })
    });
    describe('#capitalize()', () => {
        it('首字母大写 helloworld => Helloworld', () => {
            assert(capitalize('helloworld') === "Helloworld")
        })
        it('首字母大写 helloworld => Helloworld', () => {
            assert(capitalize('helloworld',true) === "Helloworld")
        })
    });
    describe('#underlineToHump()', () => {
        it('下划线 test_str => testStr', () => {
            assert(underlineToHump('test_str') === "testStr")
        })
        it('下划线 test_str_hah_xixi => testStrHahXixi', () => {
            assert(underlineToHump('test_str_hah_xixi') === "testStrHahXixi")
        })
    });
    describe('#HumpTounderline()', () => {
        it('驼峰 testStr => test_str', () => {
            assert(HumpTounderline('testStr') === "test_str")
        })
        it('驼峰 testStrStr  => test_str_str', () => {
            assert(HumpTounderline('testStrStr') === "test_str_str")
        })
    });
})