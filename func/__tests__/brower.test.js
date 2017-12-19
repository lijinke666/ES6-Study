const assert = require("assert")

const {
    getURLParameters
} = require("../lib/brower")

describe('Browser', function(){

    describe('#getURLParameters()', () => {
        it('需要获取地址中的请求参数,返回{name:"李金珂",age:18}', () => {
            assert.deepEqual(
                getURLParameters("http://www.baidu.com?name=李金珂&age=18"),
                {
                    name:"李金珂",
                    age:18
                }
            );
        })
    });
})