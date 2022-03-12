var fs = require('fs')


/*  1.
    fs.existsSync(path)
    检查一个文件是否存在
*/
// var isExists = fs.existsSync('a.mp3')
// console.log(isExists)


/*  2.
    fs.stat(path,callback)
    fs.statSync(path)
        -获取文件的状态
        -它会给我们返回一个对象，其中保存了该对象的文件状态相关信息
*/ 
fs.stat('a.mp3',function(err,stat){
    /*
        stat.size表示文件大小
        stat这个对象还有很多自带的方法
        isFile()、isDirectory()判断是否是文件或文件夹等...
    */
    if(!err){
        // console.log(stat);//显示文件状态信息
        console.log(stat.isFile());//使用内置方法
    }
})
/*  3.
    fs.unlink(path,callback)
    fs.unlinkSync(path)
        -删除文件
*/
// fs.unlinkSync('hello.txt')


/* 4. 
    fs.readdir(path[,options],callback)
    fs.readdirSync(path[,options])
        -读取一个目录的目录结构
            files是一个字符串数组，每一个元素代表目录里的文件或文件夹名字
*/
fs.readdir('.',function(err,files){
    if(!err){
        console.log(files)
    }
})


/* 5. 
    fs.truncate(path,len,callback)    
    fs.truncateSync(path,len)    
        -截断文件，将文件修改为指定len的字节大小
*/
// fs.truncateSync("hello2.txt",3);

/* 6. 
    fs.mkdir(path[,mode],callback)
    fs.mkdirSync(path[,mode])
    创建一个目录

    fs.rmdir(path[,mode],callback)
    fs.rmdirSync(path[,mode])
    删除一个目录
*/

/* 7.
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        -进行重命名
        -oldPath 旧的
        -newPath 新的
        callback
            同时修改路径的话还能实现剪切功能

    fs.rename("a.mp3","105.mp3",function(err){
        if(!err){
            console.log("修改成功！")
        }
    })
*/ 

/* 8.
    fs.watchFile(filename[,options],listener)
        -监视文件的修改
            -filename要监视的文件名
            -options配置选项
                -options对象里面有一个interval，表示文件比较的间隔，默认每间隔5000ms触发一次
            -listener 回调函数，当文件发生变化的时候，回调函数会执行
        否则会一直在监听
            在回调函数中会有两个参数：
                curr 当前文件的状态
                prev 修改前文件状态
                都是stats状态对象
*/ 
fs.watchFile("hello2.txt",function(curr,prev){
    console.log("修改前文件大小："+prev.size)
    console.log("修改后文件大小："+curr.size)
})