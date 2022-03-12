/*
    当我们使用npm下载的包时，直接使用包名即可 var math = require("math")

    node在使用模块名字引入模块时，会先去当前目录的node_modules中寻找是否含有该模块
        如果有，则直接使用，如果没有，则去上一级目录的node_modules中寻找
        如果有就用，如果又没有则继续去上一级找
        一直到磁盘根目录去找，如果还是没有则报错

*/ 

var math = require("math");
console.log(math.add(2,3))
//如果此时我删除了该项目目录下的math包，他就会像上面说的一样去往上级目录找