<template>
  <div id="app">
    <nav>
      <div class="logo"><img src="./assets/logo.png" alt="这里以后会放个logo"></div>
      <ul>
        <li>
          <router-link to="/">
            <el-button type="text">首页</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            <el-button type="text">博客目录</el-button>

          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <el-button type="text"> 关于作者</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/write">
            <el-button type="text">写博客</el-button>
          </router-link>
        </li>
      </ul>
    </nav>

    <!--路由部分-->
    <div class="main">
      <router-view></router-view>
    </div>


    <footer>
      <p class="tm-copyright-text">Copyright &copy; 2017 Thomson | 杨涛</p>
    </footer>


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
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      text-align: center;
    }
    nav {
      > ul {
        display: flex;
        > li {
          transition: all 0.6s;
          &:hover {
            background: #ddd;
          }
          > a {
            display: inline-block;
            padding: 16px 24px;
          }
        }
      }
    }
    .main {
      width: 80vw;
      text-align: center;
      border: 1px solid black;
      border-radius: 5px;
    }
    footer {
      background: #ddd;
      width: 100vw;
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
    }

  }
</style>
