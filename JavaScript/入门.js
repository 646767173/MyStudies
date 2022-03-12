/*
    js简介
    JS即JavaScript
    
    一、
    JS是弱类型，弱类型就是数据类型是可变的
    Java是强类型,强类型在定义变量时就已经确定好了数据类型是不可变的

    二、
    特点
    1.交互性    它可以做的是信息的动态交互
    2.安全性    不允许直接访问本地硬盘
    3.跨平台性  只要是可以解释JS的浏览器都可以执行，与平台、操作系统无关

    三、
    JS中三种定义变量的方式const， var， let的区别
    const定义的变量不能更改，且必须初始化
    var定义的变量可以变，不初始化会默认undefined
    let是块级作用域，函数内部使用let定义后，对函数外部的没有影响
    
    JavaScript中定义一个变量会用var，需要定义常量则用const
    使用var会造成变量穿透，作用到别的区域，这时则需要用let来解决变量穿透问题

    变量类型:
    数值型 number
    字符串 string
    对象    object
    布尔    boolean
    函数    function

    四、
    特殊的：
        undefined   未定义，js变量未赋值的初始值都是undefined
        null        空值
        NAN         Not A Number 非数字非数值，当 number类型 * 非number类型 返回的是数据类型就是NAN

    五、
    typeof() JS中的函数，返回值是变量的数值类型

    六、
    关系比较运算
        等于：      ==      简单的字面值的比较
        全等于：    ===     还会要求数据类型相等

        &&且运算
            1.当表达式全为真，返回值为最后一个表达式的值
            2.当表达式有一个为假，返回第一个为假的表达式的值

        ||或运算
            1.当表达式全为假，返回最后一个表达式的值
            2.当表达式有一个为真，返回第一个为真的表达式的值

        且、或运算，当运算有结果时，后面的表达式就不再执行

    七、
    JS格式数组
        JS数组会自动进行扩展，即使一开始没有定义数组长度，
        后面也可以通过给数组下标赋值来扩展数组长度

    八、
    JavaScript中函数的重载会覆盖上一次的函数
        !!!!每一个函数都要一个prototype属性，默认指向一个Object空对象（即原型对象）
        !!!原型对象里面有一个属性constructor，它指向函数对象
        !!function函数里面有 arguments隐形参数
        不需要定义，但却可以直接用来获取所有参数的变量，称之为隐形参数
        通过在
            function haha(){
                alert( arguments[0] );
                alert( arguments[1] );
                alert( arguments[2] );
                var a = arguments[0];
                var b = arguments[1];
                var c = arguments[2];
                alert(a + b +c);
            }
            haha("abc",123,true)
        使用

    九、
    JavaScript里面，对象定义属性和函数标准格式如下
        const duixiang = new obj();
        obj.name = "name";
        obj.age = 18;
        obj.func = new function(){
            alert("姓名：" + this.name + "，年龄：" + this.age );
            //其中this是当前对象，即obj，JS中 在所有定义的函数里都可以用this指向函数的当前对象。
        };
            methods:{
                doSomething(abc){
                    this.name = abc;
                    alert(this.abc);

                }
            }



    十、
    JS中的事件
        常用事件：
        onload 加载完成事件：           常用于页面加载完后，做JS代码的初始化操作
        onclick 单击事件：              常用于按钮的点击响应操作
        onblur 失去焦点事件：           常用于输入框失去焦点后验证其输入信息是否合法
        onchange 内容发生改变事件：     常用于下拉列表和输入框内容发生改变后操作
        onsubmit 表单提交事件：        常用于表单提交前，对输入表单项进行合法性校验

    事件的注册/事件的绑定
    事件的静态注册：
        通过html标签属性直接赋予事件响应后的代码，为静态注册
    事件的动态注册：
        先通过js代码获取标签的dom对象，再通过dom对象.事件名 = function(){} 来赋予事件响应后代码，为动态注册
            动态注册步骤：
                1.获取标签对象
                2.标签对象.事件名 = function(){}

        
*/