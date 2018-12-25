<template>
  <div class="login">
    <div class="row">
      <H6 align="center">密码登陆</H6>
    </div>
    <div class="row">
      <b-input name="username" type="text" placeholder="请输入用户名" v-model="username"></b-input>
    </div>
    <div class="row">
      <b-input name="password" type="password" placeholder="请输入密码" v-model="password"></b-input>
    </div>
    <div class="row">
      <b-button @click="onClick" class="btn btn-block" >登陆</b-button>
    </div>
    <div class="row" >
      <label> 还没有注册</label>
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
</style>
