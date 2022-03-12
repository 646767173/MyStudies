const { fstat } = require("fs");

/*
    简单文件写入
        fs.writeFile(file,data[,options],callback) 异步
        fs.writeFileSync(file,data[,options]) 同步
            -file   要操作的文件的路径
            -data   要写入的数据
            -options    选项，可以对写入进行一些设置,是一个对象{},有三个内容
                encoding 编码格式 默认utf-8
                mode 权限 默认0o666
                flag 操作模式r/w 默认'w'
            -callback   回调函数
*/ 

var fs = require('fs')
//writeFile把前面3步的操作都封装好了

// 想往磁盘的其他位置写入文件也可以，需要写绝对路径  目录用 \\ 或 /
fs.writeFile('hello3.txt','这是通过writeFile写入的内容',{flag:'a'},function(err){
    if(!err)
        console.log("写入成功")
})
/* 
    这里的flag是w，默认情况下，是会将原来存在于文件中的内容全部清空，再重新写
    所以如果根本不想重新写，则需要将flag改为a，就会在原有内容后追加写入，如果文件不存在就会自动创建
    也有r+，不过r+文件如果不存在则会异常
*/


