<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
    data(){
        return{
            comments:[//更新数据的行为（方法）应该在其数据的原组件处
                {
                    name:'Bob',
                    content:'Vue针不戳'
                },
                {
                    name:'Jack',
                    content:'Vue针不戳！'
                },
                {
                    name:'Tom',
                    content:'Vue针不戳！！'
                },
            ]
        }
    },
    methods:{
        //添加评论
        addComment(comment){
            this.comments.unshift(comment);
        },
        //删除指定下标评论
        delComment(index){
            this.comments.splice(index,1);
        }
    },
    components:{
        Add,
        List
    }
};
</script>

<style>
</style>