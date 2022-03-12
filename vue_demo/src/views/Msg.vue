<template>
  <div>
    <ul>
      <li v-for="msg in Msgs" :key="msg.id">
        <router-link :to="`/home/msg/detail/${msg.id}`">
          {{ msg.title }}
        </router-link>
        <button @click="pushShow(msg.id)">push查看</button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <!-- this.$router.back() 请求返回上一个记录路由 -->
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Msgs: [],
    };
  },
  mounted() {
    // 模拟ajax请求 从后台获取数据
    setTimeout(() => {
      const Msgs = [
        {
          title: "msg01",
          id: 1,
        },
        {
          title: "msg02",
          id: 2,
        },
        {
          title: "msg03",
          id: 3,
        },
        {
          title: "msg07",
          id: 7,
        },
      ];
      this.Msgs = Msgs;
    }, 1000);
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/msg/detail/${id}`); 
      //相当于点击路由链接(可返回到当前路由界面)
    },
    replaceShow(id) {
      this.$router.replace(`/home/msg/detail/${id}`); 
      //用新路由替代当前路由(不可返回到当前路由界面)
    },
  },
};
</script>

<style>
</style>