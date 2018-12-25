<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav navbar-center" style="margin: auto">
          <li><router-link to="/index" class="nav-link" style="margin-left: 20px">任务大厅</router-link> </li>
          <li><router-link to="/persion-center" class="nav-link" style="margin-left: 20px">个人中心</router-link> </li>
        </ul>

      <ul class="navbar-nav ml-auto" style="margin-right: 20px">
        <li><button @click="onClick">注销</button> </li>
      </ul>

      <!--<ul class="navbar-nav ml-auto" style="margin-right: 20px" v-else>-->
        <!--<li><router-link to="/login"  class="nav-link" style="margin-right: 20px">登陆</router-link> </li>-->
        <!--<li><router-link to="/register" class="nav-link" style="margin-right: 20px">注册</router-link> </li>-->
      <!--</ul>-->

    </nav>
  </header>
</template>
<script>
  export default {
    methods: {
      onClick: function (ev) {
        let that = this;
        this.$confirm("确认退出吗?", "提示", {
        })
          .then(() => {
            localStorage.removeItem("access-token");
            // API.logout('').then(function (res) {
            //   that.$message.error({showClose: true, message: res.msg, duration: 2000});
            // })
            that.$router.go("/login"); //用go刷新
          })
          .catch(() => {

          });
      }
    }
  }
</script>
