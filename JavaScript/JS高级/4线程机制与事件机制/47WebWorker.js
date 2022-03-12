var onmessage = function(event){//只能使用表达式函数赋值，不能使用函数声明
    console.log(this);//分线程的this不是window，有些window的方法在分线程不能使用
    var number = event.data;
    console.log('分线程接收到主线程发送的数据：'+number);
    // 计算
    // 1 1 2 3 5 8 ... f(n) = f(n-1) + f(n-2) ;(n>2) 当前数是其前两个数之和
    function fibonacci(n){
        // 当数字一大的时候容易卡顿，原因是计算量大，且递归效率低占用内存大
        return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2);//递归调用
    }
    var result = fibonacci(number);
    postMessage(result);
    console.log('分线程向主线程返回数据：'+result);
    console.log('分线程中的全局对象不是window，因此在分线程中不可能更新界面');
}