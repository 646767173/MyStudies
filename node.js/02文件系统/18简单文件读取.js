/*
    1同步文件读取
    2异步文件读取
    3简单文件读取
    fs.readFile(path[,options],callback)
    fs.readFileSync(path[,options])
        -path 读取文件的路径
        -options 读取的选项
        -callback 回调函数，通过回调函数将读取的内容

    4流式文件读取
    

*/
var fs = require('fs')
fs.readFile('hello4.txt',function(err,data){
    if(!err){
        // console.log(data.toString())
        fs.writeFile('hello5.txt',data,function(err){//把读取出来的data又写入到新文件中
            if(!err)
                console.log('写入成功')
        })
    }

})