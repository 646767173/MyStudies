/*
    模块化
    -在node中，一个js文件就是一个模块
    -在node中，每一个js文件中的js代码都是独立运行在一个函数中
        而不是全局作用于，使用一个模块中的变量和函数在其他模块中无法访问
        向外部暴露属性或方法 exports，只需要将要暴露的设置为exports属性即可

    我们通过require()函数来引入外部模块
        require()可以传入一个文件的路径作为参数，node会自动根据该路径来引入外部模块
        这里路径如果使用相对路径，必须以.或..开头
    我们使用require()引入模块后，该函数会返回一个对象，对象代表的是引入的模块
*/
var a =10;//当去掉 var 就是一个全局变量
/*
    在node中有一个全局对象global，它的作用和网页中的window类似
        在全局中创建的变量都会作为global的属性保存
        在全局中创建的函数都会作为global的方法保存

    当node在执行模块中的代码时，会自动在最外层帮我们添加一个函数包裹着我们
    function(exports,require,module,__filename,__dirname){
        我们输入的东西
    }

    我们的模块代码都是包装在一个函数里面执行的，同时还有5个实参
    exports,该对象用来将变量或函数暴露到外部
    require,一个用来引入外部模块的函数
    module,代表的是当前模块本身 exports是它的属性 module.exports == exports
    __filename,当前模块的完整路径
    __dirname,模块所在文件夹的完整路径
*/ 
console.log(global.a)

// arguments.callee 这个属性保存的是当前执行的函数对象

console.log(arguments.callee + "")


var module1 = require("./6.1module1");
console.log(module1);

/*
    模块标识
    模块分为两大类：
        -核心模块：由node引擎提供给的模块，核心模块的标识就是模块的名字
        -文件模块：由用户自己创建的模块，标识就是我们的路径
*/ 