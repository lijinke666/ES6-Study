/**
 * 实现promise 亮灯
 * 红灯三秒亮一次 绿灯一秒亮一次 黄灯2秒亮一次 
 * 不间断交替
 */

//灯
const red = () => console.log('red')
const green = () => console.log('green')
const yellow = () => console.log('yellow')

const promisify = (fn = () => { }) => (timer = 1) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            fn()
            res()
        }, timer * 1000)
    })
}

const redPromise = promisify(red)(3)
const greenPromise = promisify(green)(1)
const yellowPromise = promisify(yellow)(2)

const show = (...promiseFn) => {
    Promise
        .all(
            promiseFn.map((fn)=>{
                return fn
            })
        )
        .then((fn)=>{
            show(
                redPromise,
                greenPromise,
                yellowPromise
            )
        })
        .catch (err => console.error(err))
}
show(
    redPromise,
    greenPromise,
    yellowPromise
)