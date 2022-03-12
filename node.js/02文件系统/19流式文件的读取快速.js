/*
    流式文件读取
    也适合一些比较大文件去读取，可以分多次将文件读取到内存中
*/

var fs = require('fs')
//创建一个可读流
var rs = fs.createReadStream('C:/Users/Whitney/Desktop/105.mp3');

//创建一个写入流 
var ws = fs.createWriteStream("热爱105℃的你.mp3")

//rs有一个方法pipe，直译管道，可以让可读流的管道直接接到指定的写入流
rs.pipe(ws);
