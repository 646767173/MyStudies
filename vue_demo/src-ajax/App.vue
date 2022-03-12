<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      repoName:'',
      repoUrl:''
    }
  },
  mounted(){
    // 发送ajax请求获取数据
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`; //接口1
    // const url = `https://api.github.com/search/users?q=aa`; //接口2
/*    this.$http.get(url).then(
      response => {
        const result = response.data;
        // 得先得到排在第一受欢迎的repo对象
        const mostRepo = result.items[0];
        this.repoUrl = mostRepo.html_url;
        this.repoName = mostRepo.name;
      },
      response => {
        alert("请求失败！")
      }
    )*/

    //使用axios发ajax请求
    axios.get(url).then(
      response => {
        const result = response.data;
        // 得先得到排在第一受欢迎的repo对象
        const mostRepo = result.items[0];
        this.repoUrl = mostRepo.html_url;
        this.repoName = mostRepo.name;
      }).catch(error => {
        alert("请求失败！！")
      })

  }
}
</script>

<style>

</style>