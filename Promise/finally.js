// 和 try catch finally 一样

try {
  
} catch (error) {
  
} finally{

}

const p = Promise.resolve(1)

p.then(()=>{
  console.log('then');
})
.catch(()=>{
  console.log('catch');
})
.finally(()=>{
  console.log('finally');
})