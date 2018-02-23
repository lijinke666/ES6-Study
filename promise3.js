//Promise 返回一个 Promise 对象
const rePromise = ()=>{
    return new Promise((res,rej)=>{
        return Promise.resolve(2)
    })
}

rePromise()
.then((data)=>{
    console.log(data);
})
.then((data)=>{
    console.log('data',data);
})
.catch((err)=>{
    console.log(err);
})