class A{
    constructor(props){
        this.name = '李金珂'
        console.log(props);         //哈哈    b继承了a  super(props) 这里能接收到
    }
    sayName(){
        console.log(this.name);
    }
}

class B extends A{
    constructor(props){
        super(props)
    }
    _sayName(){
        super.sayName()          //super 调用父级的方法
    }
}

const b = new B('哈哈')
b.sayName()          //李金珂
b._sayName()         //李金珂