const assert = require("assert")

const {
    cleanObj,
    shallowClone
} = require("../lib/object")

describe('Object', function(){

    describe('#cleanObj()', () => {
        it('需要清除 age,返回{name:"李金珂"}', () => {
            assert.deepEqual(
                cleanObj({name:"李金珂",age:18},["age"],"age"),
                {
                    name:"李金珂"
                }
            );
        })
    });
    describe('#shallowClone()', () => {
        it('浅克隆 {name:"李金珂"}', () => {
            assert.deepEqual(
                shallowClone({name:"李金珂"}),
                {
                    name:"李金珂"
                }
            );
        })
    });
})