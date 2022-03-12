//  入口JS：创建Vue实例
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

// 注册成标签(全局注册)
Vue.component(Button.name,Button)

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})