<template>
  <div class="login" style="width: 100%">
    <el-card class="box-card" shadow="hover">
      <div style="color: white">余额</div>
      <div class="tt">￥{{UserOverView.money}}</div>
    </el-card>

    <el-card class="box-card1 row"  shadow="hover">
      <div slot="header" class="clearfix">
        <span>我的任务</span>
      </div>
      <div class="text item">
        <div class="row">发布中的任务：{{UserOverView.pubTaskNum}}条</div>
        <div class="row">接手中的任务：{{UserOverView.getTaskNum}}条</div>
        <div class="row">提现中的任务：{{UserOverView.tixianTaskNum}} 条</div>
      </div>
    </el-card>
  </div>
</template>
public class UserOverView {
//用户余额
private Float money;
//发布中的任务数量
private int pubTaskNum;
//接手中的任务数量
private int getTaskNum;
//提现中的任务数量
private int tixianTaskNum;
<script>
  import API from "../api/api"
  export default {
    data() {
      return {
        UserOverView:{
          money:"",
          pubTaskNum:"",
          getTaskNum:"",
          tixianTaskNum:""
        }
      }
    },
    methods: {
      getOverView: function () {
        let that = this;
        API.getUserOverView({})
          .then(function(result) {
            console.log(result)
              if (result && result.code === 0) {
                  that.UserOverView=result.result
              } else {
                  console.log(result.msg || "登录失败")
              }
            },
          function(err) {
              console.log(err.toString())
            })
          .catch(function(error) {
              console.log("请求出现异常:"+error.toString())
          });
      }
    }
    ,
    mounted() {
      this.getOverView()
    }
  }
</script>
<style>
  .box-card {
    width: 374px;
    height: 191px;
    background:#409EFF;
  }
  .row{
    margin-top: 20px;
  }
  .tt{
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    font-size: 28px;
  }
</style>
