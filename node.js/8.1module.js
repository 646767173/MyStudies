
module.exports = {
    name ="hahaha",
    age=18,
    sayName:function(){
        console.log("i am hahaha")
    }
}

/*
    类似一个深拷贝和浅拷贝的关系，
    虽然，exports现在与module.exports是指向同一个对象，
    但是如果我上面把module. 去掉，
        exports = {
            name ="hahaha",
            age=18,
            sayName:function(){
                console.log("i am hahaha")
            }
        }
    则相当于exports主动断开与module.exports指向同一对象的关联，
    此时exports再怎么修改都与module无关，因为改变了变量，它不再指向同一个地址了
    所以如果要批量操作暴露，必须使用module.exports，exports只能逐个通过.属性的方式暴露
        因为当你修改属性，就是在堆中去改对象中的属性而已，但修改变量就是改变栈中的值，
        而栈的值正是堆的内存地址，一旦修改就失去了联系
*/ 