// 分别暴露
export let school = 'Zhku';
export function teach(){
    console.log('我们可以教你开发技术！！');
}


// 统一暴露
let name = 'hahaha';
function sayName(){
    console.log(name);
};
export {name,sayName}

// 默认暴露 就是对外暴露default对象，里面的内容都是default对象的属性
export default{ // 外面要使用时，就需要通过default.访问里面的内容
    age:18,
    change(){
        console.log('我们一起改变世界！！');
    }
}