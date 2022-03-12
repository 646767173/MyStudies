/*
    使用localStorage存储数据的工具模块
    1.函数 --一个功能
    2.对象 --多个功能
    包装二选一
    选择依据，向外暴露功能个数
*/ 

const TODOS_KEY = "todos_key"

export default{
    saveTodos (todos) {//存储todos
        window.localStorage.setItem('TODOS_KEY',JSON.stringify(todos))
    },
    readTodos () {//读取todos
        return JSON.parse(window.localStorage.getItem('TODOS_KEY') || '[]')//todos最后必须是一个数组
    }
}
