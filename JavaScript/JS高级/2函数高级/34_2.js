(function(){
    // 私有数据
    var msg = 'I am hhh';
    // 操作数据的函数
    function doSomething(){
        console.log(msg.toUpperCase()+' doSomething()');
    }
    function doOtherthing(){
        console.log(msg.toLowerCase()+' doOtherthing()');
    }
    // 匿名函数向外暴露(添加为全局变量的属性)
    window.myModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})()
// 使用这种匿名函数的方式更好，一引入JS文件就可以使用方法了