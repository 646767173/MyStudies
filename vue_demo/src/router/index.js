/* 
    路由器模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Msg from '../views/Msg.vue'
import MsgDetail from '../views/MsgDetail.vue'


Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active', //指定选中的路由链接class
    // n个路由
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [//嵌套路由
                {
                    // path:'/new', //path最左侧的/永远代表根路由
                    path: '/home/news',
                    component: News
                },
                {
                    path: 'msg', //简化写法
                    component: Msg,
                    children: [
                        {
                            path: '/home/msg/detail/:id',  // param传参方式 所以要:id
                            component: MsgDetail
                        }
                    ]
                },
                {
                    path: '',
                    redirect: '/home/news'
                }
            ]
        },
        {
            path: '/',
            redirect: '/about'
        }
    ]

})