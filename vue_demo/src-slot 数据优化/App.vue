<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <todo-header @addTodo="addTodo" /> 给TodoHeader标签对象绑定addTodo -->
      <TodoHeader ref="header" />
      <todo-list :todos='todos'  />
      <!-- <TodoFooter :todos="todos" :selectAll="selectAll" :delFinish="delFinish" /> -->
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll" />
        <span slot="count"> 已完成{{completeSize}} / 全部{{todos.length}} </span>
        <button v-show="completeSize > 0" @click="delFinish"
      class="btn btn-danger" slot="delete">清除已完成任务</button>
      </todo-footer>

    </div>
  </div>
</template>

<!--
  绑定事件监听 --- 订阅消息
  触发事件 --- 发布消息
-->

<script>
import PubSub from 'pubsub-js';
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import storageUtil from "./util/storageUtil.js"

export default {
  data(){
    return{
      //从localStorage读取todos,用深度监视
      todos:storageUtil.readTodos()
    }
  },

  computed:{
    completeSize(){
      return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
    },
    isAllCheck:{
      get(){
        return this.completeSize === this.todos.length && this.completeSize>0 //===用于严格比较，数据类型不匹配都会返回false
      },
      set(value){ // value是当前checkbox的最新的值
        this.selectAll(value)
      }
    }
  },

  watch:{ //深度监视
    todos:{
      deep:true,//深度监视
      // handler:function(value){//value是todos最新的值
      //   // 将todos最新的值json数据保存到localStorage
      //   // window.localStorage.setItem('todos_key',JSON.stringify(value))
      //   storageUtil.saveTodos(value);
      // }
      handler:storageUtil.saveTodos,
    }
  },

  mounted(){// 执行异步代码
    // 给todo-header绑定addTodo事件监听
    // this.$on('addTodo',this.addTodo) 这里是给App.vue绑定监听 错误
    this.$refs.header.$on('addTodo',this.addTodo)

    // 订阅消息  组件间通信没有任何的要求或位置的限制(父组件甚至可以和孙组件通信)
    PubSub.subscribe('delTodo',(msg,index) => { //用箭头指向函数，自己无this就会用外面的this
      this.delTodo(index);
    })
  },

  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    delTodo(index){
      this.todos.splice(index,1)
    },
    delFinish(){
      // 删除所有选中的todo
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAll(isAll){
      // 项目全选与否
      this.todos.forEach(todo => todo.complete = isAll)
      // if(isAll)
      //   todos.complete = true
      // else 
      //   todos.complete = false
    }
  },

  components: {
    //下级的vue有哪些
    TodoHeader,
    TodoList,
    TodoFooter,
  },

  
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>