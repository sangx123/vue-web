<template>
  <header>
    <el-menu :default-active="activeIndex" v-bind:router="true" class="el-menu-demo" mode="horizontal"   background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="/">任务大厅</el-menu-item>
      <el-menu-item index="/persion-center">个人中心</el-menu-item>
    </el-menu>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    updated() {//路径及按键操作时调用
      this.updateForcus();
    },

    mounted() {//载入时调用，F5刷新会起效
      this.updateForcus();
    },
    methods: {
      updateForcus() {
        var path = this.$route.path;
        if (path=="/" || path=="/index") {
          this.activeIndex = "/";
        } else if (path == "/persion-center") {
          this.activeIndex = "/persion-center";
        }
      },
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
