//http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html

// 第一种  构造函数绑定
function a() {
    this.name = "李金珂"
    this.age = 21
    this.sayHello = function(){
        console.log(`我是:${this.name},今年:${this.age}`);
    }
}

function b(){
    a.call(this)
    this.name = '赵日天'
}

const _a = new a()
const _b = new b()
_b.sayHello()       //我是:赵日天,今年:21
_a.sayHello()      //我是:李金珂,今年:21

// 第二种 prototype

//师傅 tony 老师
function tony(){
    this.name = 'tony'
    this.skill = '洗剪吹',
    this.say = function(){
        console.log(`下面有请:${this.name},为我们:${this.skill}`);
    }
}
//学徒 john 约翰
function john(){
    this.name = 'john'
}


john.prototype = new tony()
john.prototype.constructor = john
const j = new john()
/**
 * john {
  prototype: tony { name: 'tony', skill: '洗剪吹', say: [Function] } }
 */  
j.say()      //下面有请:john,为我们:洗剪吹

//第三种 直接继承prototype

function f(){}
function h(){
    this.name = 'h'
    this.say = function(){
        console.log(this.name);
    }
}
h.prototype.age = 18

f.prototype = h.prototype
const _f = new f()

console.log(_f.age); //18