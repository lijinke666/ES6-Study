
  const name = "xx.jpg".replace(/(.*)\.(jpg)/,"test.$2")
  //两个括号就代表两个捕获组 依次是 $1 $2 $3 .....
  console.log(name);    //test.jpg


  const match =  /(.*)\.(jpg)/.exec('xx.jpg')
  console.log(match[1]);  //xx
  console.log(match[2]);  //jpg


  //上面两种不好阅读 最新的提案支持 给捕获组命名

  const name2 = "xx.jpg".replace(/(?<name>.*)\.(?<extname>jpg)/,"$<name>.$<extname>")

  console.log(name2);  //xx.jpg

  //这样更好阅读
  const match2 =  /(?<name>.*)\.(?<extname>jpg)/.exec('xx.jpg')
  console.log(match2);
  console.log(match2.groups.name);  //xx
  console.log(match2.groups.extname);  //jpg

  