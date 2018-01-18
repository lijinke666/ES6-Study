const arr = [1,2,3,"4"]

//去除非数字的value
const testArr = arr.filter(value => Object.is(typeof value,"number"))

console.log(testArr);  //[ 1, 2, 3 ]

//大于2的value
const testArr2 = arr.filter(value => value > 2)
console.log(testArr2);    //[ 3, '4' ]


//数组去重
const arr2 = [1,2,2,4,5]
//当前值的下标 是否 等于他的当前索引  这个方法有点骚
const result = arr2.filter((item,i,arr)=> arr.indexOf(item) === i)
console.log(result);     //[ 1, 2, 4, 5 ]