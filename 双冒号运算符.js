//平时都是通过 call apply bind 来改变 this 指针
const name = "哈哈"
const obj = {
    name:"李金珂",
    sayName(){
        console.log(this.name);
        //return function 之后 this 指向 window
        return function(){
            console.log(this.name);
        }.bind(this)          //通过bind 把this 指向 指向 obj 
    }
}
obj.sayName()()

function log(...attr){
    //之前常常采用这种方式
    console.log.apply(null,attr)      //1234
    console.log.call(null,...attr);      //1234

    //现在这样既可
    console.log(...attr);
    ::console.log(...attr)
}

log(1,2,3,4)