/*
    异步文件写入
        fs.open(path,flags[,mode],callback)
            -callback 回调函数
            -异步调用的结果都是通过回调函数的参数返回的
                回调函数有两个参数：
                    err 错误对象，如果没有错误则为null
                    fd 文件的描述符
*/ 
var fs = require('fs')

//1打开文件 这里的 r或w 是字符串格式，必须要加引号
fs.open('hello2.txt','w',function(err,fd){//异步方法的open 不可能有返回值
    // 判断是否出错
    if(err){
        console.log(err)
    }
    else{
        //如果没有出错，则对文件进行写入操作
        fs.write(fd,'今天天气超级好,这是异步写入的',function(err){
            if(!err){
                console.log('写入成功')
                fs.close(fd,function(err){
                    if(!err)
                        console.log('保存并关闭成功')
                })
            }
        })
    }
})

console.log('我比回调函数先执行噢，因为是异步操作回调函数会在我后面才执行')