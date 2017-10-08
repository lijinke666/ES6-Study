const proxy = new Proxy({},{
   get(target,property){
   	return 666
   },
    set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
})

proxy.time
proxy.name
