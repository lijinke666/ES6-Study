/**
 * 学习ES7 decorator 装饰者模式
 */
import { addMoney } from "./decorator"

class people {
    constructor({ name, sex = "男", age = 18, money = 0 } = {}) {
        this.init(name, sex, age, money)
    }
    @addMoney(100)
    init(name, sex, age, money) {
        this.name = name
        this.sex = sex
        this.age = age
        this.money = money
    }
    showMoney(){
        console.log(this.money);
    }
}

const p = new people({name:"李金珂"})
console.log(p);
p.showMoney()