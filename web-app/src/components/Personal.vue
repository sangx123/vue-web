<template>
  <div class="persional">
    <el-button type="primary" @click="create">创建任务</el-button>
    <el-button type="primary" @click="mytask">我的任务</el-button>
  </div>

</template>

<script>
  import {bus} from "../bus.js";
  export default {
    methods:{
      create:function () {
        this.$router.push({ path: "/create-task" });
        bus.$on("goto", url => {
          console.log("收到事件")
          if (url === "/login") {
            localStorage.removeItem("access-user");
          }
          this.$router.push(url);
        });
      },

      mytask:function () {
        this.$router.push({ path: "/my-task" });
      }
    }
  };
</script>
<style>
  .persional{
    margin-top: 20px;
  }
</style>
