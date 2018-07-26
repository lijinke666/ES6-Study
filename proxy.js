const target = {}
const proxy = new Proxy(target, {
  get(target, property) {
    return 666
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
})

proxy.name = 11
console.log(proxy.name);
