function myModule(){
    // 私有数据
    var msg = 'I am hhh';
    // 操作数据的函数
    function doSomething(){
        console.log(msg.toUpperCase()+' doSomething()');
    }
    function doOtherthing(){
        console.log(msg.toLowerCase()+' doOtherthing()');
    }
    // 向外暴露的一个含有n个方法的对象
    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }

}