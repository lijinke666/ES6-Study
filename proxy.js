const proxy = new Proxy({},{
   get(target,property){
   	return 666
   }
})

proxy.time
proxy.name
