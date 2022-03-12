//  入口JS：创建Vue实例
import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*
    路由：映射关系 键值对 即 键唯一，值允许重复 1对1的关系
    key——————value 
    key是path 路径

    value  是
    后台路由————处理请求的回调函数
    前台路由————组件

    路由器：管理路由的
*/ 

new Vue({ //配置对象的属性名都是固定的属性名，不能随便修改
    el: '#app',
    components: {App},
    template: '<App/>',
    router
})