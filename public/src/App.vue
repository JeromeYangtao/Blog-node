<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--路由部分-->
    <router-view></router-view>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
