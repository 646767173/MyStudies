/*
    流式文件读取
    也适合一些比较大文件去读取，可以分多次将文件读取到内存中
*/

var fs = require('fs')
//创建一个可读流
var rs = fs.createReadStream('C:/Users/Whitney/Desktop/105.mp3');

//创建一个写入流 
var ws = fs.createWriteStream("a.mp3")

// 监听流的开启与关闭
rs.once("open",function(){
    console.log('可读流打开了')
})
rs.once("close",function(){
    console.log('可读流关闭了');
    //数据读取完毕，同时关闭读写流
    ws.end();
})
ws.once("open",function(){
    console.log('写入流打开了')
})
ws.once("close",function(){
    console.log('写入流关闭了')
})

//如果要读取一个可读流的数据，要绑定一个data事件，绑定后会自动开始读取
// 文件很小的话，就会只读一次,最多一次会读取65536，分多次读

rs.on('data',function(msg){//这里要用一个参数去接收读取到的数据，比如msg
    console.log(msg.length)
    // 如果想要把读取到的流写到别的地方去，也需要创建一个新的写入流
    ws.write(msg);

})//自动读取，读取完了就会自动关闭
