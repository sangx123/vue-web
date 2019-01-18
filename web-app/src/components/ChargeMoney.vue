<template>
<div class="hello" style="width: 900px">
  <el-row>
    <el-col :span="12">
      <div>充值流程：扫码转账完成后复制交易号输入验证即可<span><router-link tag="a" :to="{path:'/how-to-use-alipay'}">查看交易号</router-link></span></div>
      <div class="demo-input-suffix row" >
        支付宝交易号：
      <el-input
        style="width: 300px;"
        placeholder="付款成功后交易明细里的32位数字交易号"
        v-model="tradeno">
      </el-input>
      </div>

      <div class="row">
        <el-button type="primary" @click="checkAlipayNo">支付宝交易号验证充值</el-button>
      </div>
      <div class="row">
        如充值成功却验证失败，请等待1分钟后重试。<br>
        如若还不能充值成功，请联系客服处理。<br>
        一、支付宝充值目前为自助入账。<br>
        二、转账完毕后，在此页面验证支付宝交易号将会自动到账。<br>
        三、充值金额不限，您可以任意转账，手机支付宝转账免手续费。<br>
        四、充值没有任何赠送活动，谨防上当受骗。
      </div>
    </el-col>
    <el-col :span="8">
      <img src="../assets/1_alipay.jpg" width="300px" height="500px">
    </el-col>
  </el-row>

</div>
</template>

<script>
  import API from "../api/api"
  export default {
    data () {
      return {
        tradeno: ''
      }
    },
    methods:{
      checkAlipayNo:function () {
          if(this.tradeno.length==28||this.tradeno.length==32){
            let that = this;
            let params = {
              tradeno: this.tradeno
            };
            API.checkAlipay(params).then(function(result) {
                console.log(result)
                if (result && result.code === 0) {
                  alert("充值成功！")
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
          }else {
            alert("请输入付款成功后交易明细里的32位数字交易号")
          }
      }
    }
  }
</script>
<style>
  .row{
    margin-top: 20px;
  }
</style>
