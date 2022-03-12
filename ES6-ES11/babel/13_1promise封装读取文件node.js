'use strict';

// 1.引入fs模块
var fs = require('fs');

/* // 2.调用方法读取文件
fs.readFile('./我想问的问题.txtx',(err,data)=>{
    // 如果失败则抛出错误
    if(err) throw err;
    // 如果没有出错，输出data
    console.log(data.toString());
}) */

// 使用promise封装
var p = new Promise(function (resolve, reject) {
    fs.readFile('./我想问的问题.txt', function (err, data) {
        // 如果失败则抛出错误
        if (err) reject(err);
        // 如果没有出错，输出data
        resolve(data);
    });
});
p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.error(reason + '\n读取失败！！');
});