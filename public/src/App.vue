<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/list">目录</router-link>
        </li>
        <li>
          <router-link to="/about">关于作者</router-link>
        </li>
        <li>
          <router-link to="/write">写博客</router-link>
        </li>
      </ul>
    </nav>

    <!--路由部分-->
    <router-view></router-view>


    登录页面
    <el-button type="primary">主要按钮</el-button>


    管理页面
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
  import './assets/reset.css'
  import 'normalize.css'

  export default {
    name: 'app'
  }
</script>

<style scoped lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    nav > ul {

    }

  }
</style>
