/**
 * @name 倍发科技-程序面试
 * @description 2018/3/8
 * @author Jinke.Li (1359518268@qq.com)
 */

const initCheckerboard = (arr = new Array(9).fill('e'), size = 3) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
        return arr.slice(i * size, i * size + size)
    })
}

// console.log(initCheckerboard());

const players = {
    player1: "x",
    player2: "o"
}

const defaultCheckerboard = [
    ['o', 'e', 'e'],
    ['o', 'x', 'o'],
    ['x', 'x', 'e']
]

const getWingResult = (player = players.player1) => (checkerboard = defaultCheckerboard) => {
    //x,y 坐标
    const [x, y] = [[], []]
    //对角线
    const [cha1, cha2] = [[], []]

    /**
     * @return { [当前棋子]: [x坐标,y坐标] }
     */
    checkerboard.forEach((v, i) => {
        x.push(
            v.map((item, index) => ({ [item]: [i, index] }))
        )
        cha1.push(
            {
                [v[v.length - i - 1]]: [i, v.length - i - 1]
            }
        )
        cha2.push(
            {
                [v[i]]:[i,i]
            }
        )
        y.push(checkerboard.map(item => item[i]))
    })

    console.table(cha2);

    //所有的可能性 排除已有 另一个玩家落子的情况
    // const all = [...x, ...y, cha1, cha2].filter(
    //     item => !item.includes(
    //         Object.values(players).filter(_player => _player !== player)[0]
    //     )
    // )

    // const all = [...x, ...y, cha1, cha2]

    // console.log(all);

    // const t = all.map((v,i)=>{
    //     return v.filter(item=> item.includes("o"))
    // })
}


const result = getWingResult(players.player1)(defaultCheckerboard)

console.log(result);