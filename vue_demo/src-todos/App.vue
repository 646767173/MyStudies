<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <todo-list :todos='todos' :delTodo="delTodo" />
      <TodoFooter :todos="todos" :selectAll="selectAll" :delFinish="delFinish" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data(){//数据应当是动态的 所以将原先写死的静态数据删除了
    //从localStorage读取todos,用深度监视
    return{//todos最后必须是一个数组
      todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },

  watch:{
    todos:{
      deep:true,//深度监视
      handler:function(value){// value是todos最新的值
        // 把todos最新的值的JSON格式保存在localStorage中
        window.localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
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