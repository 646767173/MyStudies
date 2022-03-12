<template>
  <div class="container">
      <Search/>
      <MainInfo/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Main from './components/Main.vue'
export default {
    components:{
        Search,
        MainInfo:Main
    }
};
</script>

<style>
</style>