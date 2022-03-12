/* 
            定义了全局定时器标识后
            全部定时器标识都在这里
            这样导致了无法同时启动不同的定时器
        */
// var timer;因此我们不使用全局对象了，而是使用元素对象的属性来存储标识
/*
    创建一个可以执行简单动画的函数
    参数1-移动的元素对象
    参数2-元素移动的目标距离(也是纯数字)
    参数3-元素水平移动的速度(纯数字，函数自动判断正负)
    参数4-要修改的样式字符串 比如 left top height width
    参数5-动画执行完毕后的回调函数
*/
function move(obj, target, speed, attr, callback) {
    // 开启之前关闭当前元素上一个定时器(防止叠加效应)
    clearInterval(obj.timer);
    // 获取obj原来的left值
    var current = parseInt(getStyle(obj, attr));
    // 判断速度的正负值，从0-800速度为正，从800-0速度为负
    if (current > target)
        speed = -speed;
    // 开启一个定时器用来执行动画效果
    obj.timer = setInterval(() => {
        // 获取obj原来的样式值
        var oldValue = parseInt(getStyle(obj, attr));
        // 在旧值的基础上加距离
        var newValue = oldValue + speed;
        // 当元素向左移动时，判断newValue是否小于target
        // 当元素向右移动时，判断newValue是否大于target
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        // 将新值设置给obj
        obj.style[attr] = newValue + 'px';
        if (newValue == target) {
            // 达到目的，关闭定时器
            clearInterval(obj.timer);
            // 动画完毕，执行回调函数
            callback && callback();
        }
    }, 30);//每30ms调用一次
}
function getStyle(obj, name) {
    if (window.getComputedStyle)//不加window会找不到方法而报错
        // 其他高于IE8的浏览器
        return getComputedStyle(obj, null)[name];
    else
        // IE8及以下版本浏览器
        return obj.currentStyle[name];
}
/* 
                定义一个为元素添加类的函数
                参数
                    -obj    要添加的对象
                    -cn     要添加的样式类
            */
function addClass(obj, cn) {
    // 用之前先检查类中有没有cn
    if (!hasClass(obj, cn)) {
        // 没有就添加，有则不用添加
        obj.className += ' ' + cn;
    }
}

/* 
    定义一个检查元素有无类的函数
    参数
        -obj    要添加的对象
        -cn     要检查的样式类
*/
function hasClass(obj, cn) {
    // 检查里面有没有cn，创建一个正则表达式，是否有独立的cn
    var reg = new RegExp('\\b' + cn + '\\b');
    return reg.test(obj.className);
}

/* 
    定义一个删除元素中指定类的函数
    参数
        -obj    要添加的对象
        -cn     要检查的样式类
*/
function removeClass(obj, cn) {
    var reg = new RegExp('\\b' + cn + '\\b');
    if (reg) {
        // 如果有，则用空串去替代它
        obj.className = obj.className.replace(reg, '');
    }
}

/* 
    定义一个切换元素中指定类的函数(有则删除，无则添加)
    参数
        -obj    目标元素对象
        -cn     要指定的样式类
*/
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}