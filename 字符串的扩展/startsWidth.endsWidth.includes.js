//@es-check
/**
 * includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
 */

 //传统的 indexOf()

 const api = '/api/getUserInfo'

 console.log(api.indexOf('/api')!==-1);       //true

 //es6
 console.log(api.includes('/api'));       //true
 console.log(api.includes('/ljk'));       //false

 //判断 一个字符串是否已 xx 开头  以前可以用正则 /^\/api/
 console.log(/^\/api/.test(api));       //true
 //结尾
 console.log(/Info$/.test(api));        //true

 //现在
 console.log(api.startsWith('/api'));      //true
 console.log(api.endsWith('Info'));