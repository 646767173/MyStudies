//1. 引入express
const { response, request } = require('express');
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
    response.send('Hello ajax-get');
});

app.post('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头（否则自定义的请求头无效）
    response.setHeader('Access-Control-Allow-Headers','*');

    //设置响应体
    response.send('Hello ajax-post');
});
//all表示可以接收任何的请求 无论是get/delete还是post
app.all('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头（可自定义，需要设置否则自定义的请求头无效）
    response.setHeader('Access-Control-Allow-Headers','*');

    //设置响应体
    response.send('Hello ajax-all');
});

app.all('/json-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头（可自定义，需要设置否则自定义的请求头无效）
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data = {
        name:'Guang'
    };
    //需要将对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体,send只能发送 字符串和巴特儿
    response.send(str);
});

//针对ie缓存
app.get('/ie',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
    response.send('Hello ie-2');
});

//延时响应
app.all('/delay',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    setTimeout(() => {
        //设置响应体
        response.send('Hello ie延时');
    }, 1000);
    
});

//jQuery服务
app.all('/jquery-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jQuery-get!');
    const data = {name:'jquery何汉光'}
    response.send(JSON.stringify(data));
});

//axios服务
app.all('/axios',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jQuery-get!');
    const data = {name:'axios何汉光'}
    response.send(JSON.stringify(data));
});

//fetch服务
app.all('/fetch',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // response.send('Hello jQuery-get!');
    const data = {name:'fetch何汉光'}
    response.send(JSON.stringify(data));
});

//jsonp服务
app.get('/jsonp',(request,response)=>{
    //response.send('console.log("hello jsonp")')
    const data ={
        name:'jsonpHE'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果，不能直接返数据否则无法处理
    response.end(`handle(${str})`);//用end是因为不会加特殊响应头
});

//用户名检测是否存在
app.all('/check-username',(request,response)=>{
    const data ={
        exist:1,
        msg:'用户名已存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果，不能直接返数据否则无法处理
    response.end(`handle(${str})`);//用end是因为不会加特殊响应头
});

//jquery发送jsonp服务
app.all('/jquery-jsonp',(request,response)=>{
    const data ={
        name:'Guang',
        city:['北京','上海','广州','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = request.query.callback;

    //返回结果，不能直接返数据否则无法处理
    response.end(`${cb}(${str})`);//用end是因为不会加特殊响应头
});

//cors官方跨域
app.get('/cors',(request,response)=>{
    //设置响应头  设置允许跨域,CORS跨域本身
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Method','*');
    //response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:2200');

    //设置响应体
    response.send('Hello CORS');
});

//4. 监听端口，启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...");
})