<template>
  <div class="login">
    <div class="row">
      <H6 align="center">注册用户</H6>
    </div>
    <div class="row">
      <b-input name="username" type="text" placeholder="请输入用户名" v-model="username"></b-input>
    </div>
    <div class="row">
      <b-input name="password" type="password" placeholder="请输入密码" v-model="password"></b-input>
    </div>
    <div class="row">
      <b-input name="password" type="password" placeholder="重新输入密码" v-model="password1"></b-input>
    </div>
    <div class="row">
      <b-button @click="onClick" class="btn btn-block" >注册</b-button>
    </div>
  </div>
</template>

<script>
  import API from "../api/api"
  export default {
    data() {
      return {
          username:"",
          password:"",
          password1:""

      }
    },
    methods: {
      onClick: function (ev) {
        if(this.password!=this.password1){
          alert("2次输入的密码不一致")
          return
        }
        let registerParams = {
          username: this.username,
          password: this.password
        };
        API.register(registerParams)
          .then(function(result) {
            console.log(result)
              if (result.code=0) {
                //保存assesstoken
                localStorage.setItem("access-token", result.result.token);
                this.$router.push({ path: "/" });
              } else {
                  console.log(result.msg || "注册失败")
              }
            },
            function(err) {
              console.log(err.toString())
            })
          .catch(function(error) {
            this.$router.push({ path: "/" });
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
