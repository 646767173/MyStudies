<template>
  <div>
    <p>ID:{{ $route.params.id }}</p>
    <ul>
      <li>id:{{ messageDetail.id }}</li>
      <li>title:{{ messageDetail.title }}</li>
      <li>content:{{ messageDetail.content }}</li>
    </ul>
  </div>
</template>

<!--
    路由路径携带参数的方法param/query
    此例子是param
-->

<script>
export default {
  data() {
    return {
      messageDetail: {
        // id:'',
        // title:'',
        // content:''
        // 写不写都可以
      },
    };
  },

  mounted() {
    //整个生命周期只触发一次 需要watch监视
    setTimeout(() => {
      const allMessageDetails = [
        {
          title: "msg01",
          id: 1,
          content: "i am msg1",
        },
        {
          title: "msg02",
          id: 2,
          content: "i am msg2",
        },
        {
          title: "msg03",
          id: 3,
          content: "i am msg3",
        },
        {
          title: "msg07",
          id: 7,
          content: "i am msg7",
        },
      ];
      this.allMessageDetails = allMessageDetails;
      const id = this.$route.params.id * 1; //×1使他一定是数字
      this.messageDetail = allMessageDetails.find((detail) => detail.id === id);
    }, 1000);
  },
  watch: {
    //仅仅改变路由参数时，mounted不会执行，需要watch监视
    $route: function (value) {
      //路由路径(param)发生了改变
      const id = value.params.id * 1;
      this.messageDetail = this.allMessageDetails.find((detail) => detail.id === id);
    },
  },
};
</script>

<style>
</style>