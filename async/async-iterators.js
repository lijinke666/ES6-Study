/**
 * @name 异步迭代器
 */

const p = value => {
  return new Promise(res => {
    setTimeout(() => {
      res(value);
    }, 500);
  });
};

//传统场景
const array = [1, 2, 3];

(async () => {
  for (let v of array) {
    //实际上 又变成了同步 没啥意义
    const value = await p(v);
    console.log(value);
    console.log('==========');
  }
})();

//以前 async 在 map  forEach 之类的 里面不能用 现在貌似可以了?
array.forEach(async v => {
  const value = await p(v);
    console.log(value);
    console.log('@@@@@@@');
});

//异步迭代
async function process(array) {
  for await (let v of array) {
    const value = await p(v);
    console.log('process:',value);
    console.log("*******")
  }
}

process(array)
