<template>
  <div class="login">
    <div class="row">
      <h3 class="title">密码登陆</h3>
    </div>
    <div class="row">
      <el-input clearable name="username" type="text" placeholder="请输入用户名" v-model="username"></el-input>
    </div>
    <div class="row">
      <el-input  clearable name="password" type="password" placeholder="请输入密码" v-model="password"></el-input>
    </div>
    <div class="row">
      <el-button @click="onClick" type="primary" style="width:100%;">登陆</el-button>
    </div>
    <div class="row">
      <el-button @click="registeClick" type="primary" style="width:100%;">注册</el-button>
    </div>
  </div>
</template>

<script>
  import API from "../api/api"
  export default {
    data() {
      return {
          username:"",
          password:""
      }
    },
    methods: {
      onClick: function (ev) {
        let that = this;
        let loginParams = {
          username: this.username,
          password: this.password
        };
        //this.$router.push({ path: "/" });
        console.log(loginParams)
        API.login(loginParams)
          .then(function(result) {
              if (result && result.code === 0) {
                localStorage.setItem("access-token", result.result.token);
                //this.$router.push({ path: "/" });
                that.$router.push({ path: "/" });
              } else {
                  console.log(result.msg || "登录失败")
              }
            },
          function(err) {
              console.log(err.toString())
            })
          .catch(function(error) {
              console.log("请求出现异常")
          });
      }
      ,
      registeClick:function () {
        this.$router.push({ path: "/register" });
      }
    }
  }
</script>
<style>
  .login{
    width: 300px;
    height: 700px;
    margin: auto;
  }
  .row{
    padding-top: 20px;
    margin: auto;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
