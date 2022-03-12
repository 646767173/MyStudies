/*
    同步、异步、简单文件写入都不适合
    大文件的写入，性能较差，容易导致内存溢出
*/
var fs = require('fs')

//要创建一个文件可写流 fs.createWriteStream(path[,options]) path文件路径
var ws = fs.createWriteStream('hello4.txt')

//流式文件的写入
ws.once("open",function(){//once 一次性事件
    console.log('流打开了')
});
ws.once("close",function(){//once 一次性事件
    console.log('流关闭了')
});

//通过ws往文件中输出内容
ws.write('我真帅！')
ws.write('我真好看！')
ws.write('我真的好看！')

ws.end();//关闭流不能用close，要用end