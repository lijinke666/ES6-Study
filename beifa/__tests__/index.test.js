/**
 * @name 倍发科技-程序面试
 * @description 2018/3/10
 * @author Jinke.Li (1359518268@qq.com)
 */

const checkerboard1 = [
    ['o', 'e', 'e'],
    ['o', 'x', 'o'],
    ['x', 'x', 'e']
]

const checkerboard2 = [
    ['x', 'o', 'o'],
    ['x', 'x', 'e'],
    ['e', 'o', 'e']
]

const checkerboard3 = [
    ['x', 'x', 'o'],
    ['e', 'e', 'e'],
    ['e', 'e', 'e']
]

const checkerboard4 = [
    ['o', 'o', 'o'],
    ['e', 'e', 'e'],
    ['e', 'e', 'e']
]

const assert = require("assert")

const {
    players,
    getWingResult
} = require("../index")

describe('李金珂家庭作业:)', function(){

    describe('#getWingResult()', () => {
        it('return  [ [2, 2], [0, 1], [0, 2] ]', () => {
            assert.deepStrictEqual(
                getWingResult(players.player1)(checkerboard1).sort(),
                [ [2, 2], [0, 1], [0, 2] ].sort()
            );
        })
        it('return   [ [2, 2], [1, 2], [2, 0] ]', () => {
            assert.deepEqual(
                getWingResult(players.player1)(checkerboard2).sort(),
                [ [2, 2], [1, 2], [2, 0] ].sort()
            );
        })
        it('return  []', () => {
            assert.deepEqual(
                getWingResult(players.player1)(checkerboard3).sort(),
                []
            );
        })
        it('return  []', () => {
            assert.deepEqual(
                getWingResult(players.player2)(checkerboard4).sort(),
                []
            );
        })
    });
})