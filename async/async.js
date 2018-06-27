/**
 * @name async
 * @description https://zhuanlan.zhihu.com/p/33932184?group_id=951215251652378624
 */


/**
 * @description async 函数返回的是一个 Promise 对象
 * await 后面跟着 Promise 如果不是 调用 Promise.resolve() 进行包装
 */
 const fn = async (name)=> name
 
 console.log(fn('test'));  //Promise { 'test' }

 fn('name').then((name)=> console.log(name));       //name

 (async ()=>{
    console.log(await fn('name'))
 })()        //name

 /**
 * @description 如果 async 函数当中执行出现错误的话，返回的 Promise 就会被 reject。
 * await 后面跟着 Promise 如果不是 调用 Promise.reject() 进行包装
 */

// const errFn = async ()=> {
//      throw new Error('error')
// }

// errFn.catch((err)=> console.log(err))     //error

// const handleErr = async ()=> {
//     try {
//         await Promise.reject('error!!')
//     } catch (error) {
//         console.log(error);
//     }
// }

// handleErr()


 /**
 * @description Promise 的 then 属于 microtasks queue 比 setTimeout 的时间循环 优先级高  
 * 所以 先打印 num;  timer 函数内部 虽然 await 返回 Promise 本质还是同步函数 所以 先打印1
 * @return 1,2,100
 */
const timer = async ()=> {
    let num = await 1
    console.log(num)
    num++
    return num
}
timer().then(num => console.log(num))
setTimeout(() => console.log(100),0);
