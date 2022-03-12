'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.teach = teach;
// 分别暴露
var school = exports.school = 'Zhku';
function teach() {
    console.log('我们可以教你开发技术！！');
}

// 统一暴露
var name = 'hahaha';
function sayName() {
    console.log(name);
};
exports.name = name;
exports.sayName = sayName;

// 默认暴露 就是对外暴露default对象，里面的内容都是default对象的属性

exports.default = { // 外面要使用时，就需要通过default.访问里面的内容
    age: 18,
    change: function change() {
        console.log('我们一起改变世界！！');
    }
};