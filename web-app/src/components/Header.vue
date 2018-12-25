<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav navbar-center" style="margin: auto">
          <li><router-link to="/index" class="nav-link" style="margin-left: 20px">任务大厅</router-link> </li>
          <li><router-link to="/persion-center" class="nav-link" style="margin-left: 20px">个人中心</router-link> </li>
        </ul>

      <ul class="navbar-nav ml-auto" style="margin-right: 20px" v-if="isLogin">
        <li><router-link to="/loginOut"  class="nav-link" style="margin-right: 20px">注销</router-link> </li>
      </ul>

      <ul class="navbar-nav ml-auto" style="margin-right: 20px" v-else>
        <li><router-link to="/login"  class="nav-link" style="margin-right: 20px">登陆</router-link> </li>
        <li><router-link to="/register" class="nav-link" style="margin-right: 20px">注册</router-link> </li>
      </ul>

    </nav>
  </header>
</template>
<script>
  export default {
    data(){
      return {
        isLogin:this.changeData()
      }
    }
  }
</script>
