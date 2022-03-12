/*
    Buffer(缓冲区)
        -Buffer的结构和数组很像，操作的方法也和数组类似
        -数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据
        -使用Buffer不需要引入模块，可以直接使用
        -在Buffer中存储的是二进制数据，但是显示时会呈现16进制的形式(因为二进制的话太长了)

    Buffer中一个元素就占用内存的一个字节(byte)
    一个汉字占用3个字节，一个英文字母占1个字节
*/ 
var str = "I am HHG"
var buf = Buffer.from(str)//将str字符串存储到buffer缓冲区中

// console.log(str.length)
// console.log(buf.length)

// 创建一个指定大小的buffer
// buffer构造函数都是不推荐使用的，弃用的
// var buf2 = new Buffer(1024)//10个字节的buffer
// console.log(buf2)

//创建一个10字节的buffer ， alloc是去底层分配10个字节的内存，并清空原始数据
var buf2 = Buffer.alloc(10)
// 通过索引来操作buf中的元素
buf2[0] = 88//这个88是十进制，显示会变成十六进制58
buf2[1] = 255
buf2[2] = 0xaa;//十六进制
buf2[10] = 0x22;//最长的是9，所以使用10 没有用
buf2[4] = 444 // 超最大值的时候，只会取后8位的二进制数
console.log(buf2)

console.log(buf2[2])//但是只要数据在页面或者控制台输出，就一定是十进制形式

// Buffer的大小一旦确定，则不能修改，buffer实际上是对底层内存的直接操作

var buf3 = Buffer.allocUnsafe(10)//allocUnsafe 其实是直接从内存里分配10个字节内存且未去清空原始数据(不安全，因为可能原来的数据是密码)
console.log(buf3)

// 接受用户的请求，请求时二进制数据，全部存到buffer缓冲区中