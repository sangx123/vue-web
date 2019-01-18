<template>
<div class="tixian">
<div class="row">第一步： 支付宝提现 （请先在下面提交收款交易，再提交下面的第二步）</div>
<div class="row" style="margin-left: 65px">官方提现支付宝账号：420983a004z.cdb@sina.cn　  姓名：桑享</div>
<div class="row" style="margin-left: 65px">输入提现金额：<el-input   style="width: 120px;"
                                    placeholder="输入提现金额"
                                    v-model="money"></el-input>&nbsp;元&nbsp;&nbsp;&nbsp;
                                  <el-button type="primary" @click="gotoAlipay">提交收款交易</el-button></div>
<div class="row" style="margin-left: 65px">点击按钮后先登录支付宝，会跳到“我要收款”页面，提交后，再填写下面的第二步即可！</div>

  <el-form  :model="ruleForm" label-width="120px" style="margin-top: 20px">
    <el-form-item label="第二步：">
      【请如实填写信息】
    </el-form-item>
    <el-form-item label="提现金额："  prop="alipyMoney">
      <el-input v-model.number="ruleForm.alipyMoney" style="width: 300px;"></el-input>
    </el-form-item>
    <el-form-item label="姓名：" prop="alipayName">
      <el-input v-model="ruleForm.alipayName" style="width: 300px;"></el-input>
    </el-form-item>
    <el-form-item label="支付宝账号：" prop="alipayAccount">
      <el-input v-model="ruleForm.alipayAccount" style="width: 300px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">申请提现</el-button>
    </el-form-item>
  </el-form>
  <div class="row" style="margin-left: 30px">受理金额： 系统只接受50以上的申请</div>
  <div class="row" style="margin-left: 30px">处理时间： 统一下午15-18点处理，18点之后提现的，视工作状况而定在当晚或次日处理。</div>
  <div class="row" style="margin-left: 30px">提现次数： 每天允许提现（1）次，您今天已经提现了（0）次。</div>
  <div class="row" style="margin-left: 30px">平台提示： 支付宝政策调整支付宝账户每年仅20W额度</div>

</div>

</template>

<script>
  import API from "../api/api"
  export default {
    data () {
      return {
        money: '',
        ruleForm:{
          alipyMoney:'',
          alipayName:'',
          alipayAccount:''
        }
      }
    },
    methods:{
      gotoAlipay:function(){
         if(this.money<=0||this.money==""){
           alert('提现金额请输入大于0的数字，谢谢！');
           return false;
         }
        var paylink = "https://shenghuo.alipay.com/transfer/gathering/create.htm?optEmail="
          + "&totleFee=" +this.money
          + "&title=%cc%e1%cf%d6%3a+sangx123";
        window.open(paylink);
        return false;
      },
      submitForm(formName) {
          let that=this
          let param={
            userTixianMoney:this.ruleForm.alipyMoney,
            userTixianName:this.ruleForm.alipayName,
            userTixianAccount:this.ruleForm.alipayAccount
          }
          API.applyTixian(param).then(function(result) {
            if (result && result.code === 0) {
              alert(result.result)
            } else {
              alert(result.msg || "充值失败")
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
  .row{
    margin-top: 20px;
  }
</style>
