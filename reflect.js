
//将对象的操作 函数化

console.log('assign' in Object);

//新写法
Reflect.has(Object,'assign')

const obj = {name:1}
//删除对象属性

delete obj.name         //旧写法

//新写法
Reflect.deleteProperty(obj,'name')



//getters  setter
const get = {
    name:'ljk',
    get _name(){
        return this.name
    },
    set test(value){
        return `test:${value}`
    }
}
console.log(get.name);
console.log(Reflect.get(get,'name'));
console.log(Reflect.get(get,'_name'));   //
console.log(Reflect.get(get,'_name',{name:'xxxx'}));   //传入第三个参数 可以更改 上下文
console.log(Reflect.set(get,'test',1));