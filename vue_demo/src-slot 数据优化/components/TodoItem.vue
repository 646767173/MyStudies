<template>
<!-- 
    onmouseenter    onmouseleave
    ↑这一组是对于整个大组件，即使鼠标进入组件包含的小组件内也不会触发离开leave，必须离开大组件
    onmouseover     onmouseout
    ↑这一组是当鼠标进入大组件就会触发，然后鼠标进入包含的小组件内也会触发离开out，从小组件进入大组件又触发over
 -->
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <label>
        <input type="checkbox" v-model="todo.complete" />
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="delItem">删除</button>
    </li>
</template>

<script>
import PubSub from 'pubsub-js';

export default {
    props:{
        todo:Object,
        index:Number
    },
    data(){
        return{
            bgColor:'white', //默认背景颜色
            isShow:false,

        } 
    },
    methods:{
        handleEnter(isEnter){
            if(isEnter){
                this.bgColor = '#aaaaaa'
                this.isShow = true
            }else{
                this.bgColor = 'white'
                this.isShow = false
            }
        },
        delItem(){
            const {todo,index,delTodo} = this
            if(window.confirm(`确认删除${todo.title}吗？`))
              // delTodo(index)
              // 发布消息
              PubSub.publish('delTodo',index)
        }
    }
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
