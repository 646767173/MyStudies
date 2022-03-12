/*
    文件系统(File System)
    -文件系统简单来说就是通过Node来操作系统中的文件
    -使用文件系统，需要引入fs模块，
        fs是核心模块，直接引入即可

    文件的写入，
        1.打开文件
            fs.openSync(path,flags[,mode])
            -path 要打开的文件路径
            -flags 打开文件要做的操作的类型
                r 只读
                w 读写
            -mode 设置操作权限，一般不传
            返回值：
                -是这个文件的一个描述符，通过对描述符来对文件进行各种操作
        2.写入内容
            fs.writeSync(fd,string[,position[,encoding]])
            -fd 文件的描述符
            -string 要写入的字符串内容
            -position 写入的位置
            -encoding 编码格式
        3.保存并关闭文件
            fs.closeSync(fd)
            -fd 文件描述符
*/ 

var fs = require('fs')
// console.log(fs)

var fd = fs.openSync('hello.txt',"w")//1.打开文件

fs.writeSync(fd,"今天天气针不戳")//2.写入内容

fs.closeSync(fd)//3.关闭并保存

/*
    fs模块中的所有操作都有两种形式
    -同步(sync)和异步
        -同步文件系统会阻塞程序的执行，除非操作完成，否则不向下执行代码
        -异步文件系统不会阻塞程序执行，操作完成时通过回调函数返回结果

*/ 