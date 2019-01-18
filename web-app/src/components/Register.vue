<template>
  <div class="login">
    <div class="row">
      <h3 class="title">用户注册</h3>
    </div>
    <div>
      <el-input name="username" type="text" placeholder="请输入用户名" v-model="username"></el-input>
    </div>
    <div class="row">
      <el-input name="password" type="password" placeholder="请输入密码" v-model="password"></el-input>
    </div>
    <div class="row">
      <el-input name="password" type="password" placeholder="重新输入密码" v-model="password1"></el-input>
    </div>
    <div class="row">
      <el-button @click="registerClick" type="primary" style="width:100%;">注册</el-button>
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
      registerClick: function () {
        if(this.password!=this.password1){
          alert("2次输入的密码不一致")
          return
        }
        if(this.username==""){
          alert("用户名不能为空")
          return
        }

        if(this.password==""&&this.password.length<6){
          alert("密码不能为空且长度不少于6位")
          return
        }
        let that=this
        let registerParams = {
          username: this.username,
          password: this.password
        };
        API.register(registerParams)
          .then(function(result) {

              if (result && result.code === 0)  {
                //跳转到登录界面
                that.$router.push({ path: "/login" });
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
