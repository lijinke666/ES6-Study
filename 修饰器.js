
@testA
class A {

}


function testA(target) {
    target.name = '李金珂'
}

console.log(A.name);


@testB('赵日天')
class B {

}

function testB(name) {
    return function (target) {
        target.name = name
    }
}

function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
obj.isTestable // true