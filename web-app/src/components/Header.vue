<template>
  <header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/index" class="nav-link" style="margin-left: 20px">任务大厅</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/persion-center" class="nav-link" style="margin-left: 20px">个人中心</router-link></el-menu-item>
    </el-menu>
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
