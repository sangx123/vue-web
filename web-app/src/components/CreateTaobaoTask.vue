<template>
  <div class="create_task" style="margin-top: 20px">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="商品单价" prop="goodsPrice">
          <el-input v-model.number="ruleForm.goodsPrice"></el-input>
      </el-form-item>

      <el-form-item label="刷单人数" prop="workerNum">
        <el-input v-model.number="ruleForm.workerNum"></el-input>
      </el-form-item>
      <el-form-item label="每单佣金" prop="workerPrice">
        <el-input v-model.number="ruleForm.workerPrice"></el-input>
      </el-form-item>
      <el-form-item label="总价" prop="totalPrice">
        <span style="margin-left: 15px">{{ruleForm.workerNum*ruleForm.goodsPrice}}</span>
      </el-form-item>
      <el-form-item label="目前积分" prop="totalPrice">
        <span style="margin-left: 15px">0</span><span style="margin-left: 20px"><router-link tag="a" :to="{path:'/charge-money'}">充值</router-link></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import API from "../api/api"
  export default {
    data() {
      var validateGoodsPrice = (rule, value, callback) => {
        if (parseFloat(value).toString() =="NaN") {
           callback(new Error('请输入数字值'));
        } else {
         if (value >0 && value <= 200) {
            callback();
          } else {
            callback(new Error('商品价格大于0，小于等于200'));
          }
        }
      };
      var validateWorkerNum = (rule, value, callback) => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入1到100的整数值'));
        } else {
          if (value >=1 && value <= 100) {
            callback();
          } else {
            callback(new Error('刷单数量大于0，小于等于100'));
          }
        }
      };
      var validateWorkerPrice = (rule, value, callback) => {
        if (parseFloat(value).toString() =="NaN") {
          callback(new Error('请输入数字值'));
        } else {
          if (value >=1 && value <= 100) {
            callback();
          } else {
            callback(new Error('刷单数量大于0，小于等于100'));
          }
        }
      };

      return {
        ruleForm: {
          title: '',//刷单标题
          goodsPrice: '', //商品单价
          workerNum: '',//刷单人数
          workerPrice:'',//佣金
          totalPrice:''
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          goodsPrice: [
            { validator: validateGoodsPrice, trigger: 'blur' , required: true}
          ],
          workerNum: [
            { validator: validateWorkerNum, trigger: 'blur', required: true }
          ],
          workerPrice: [
            { validator: validateWorkerPrice, trigger: 'blur', required: true }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            API.register(this.ruleForm).then(function(result) {
                console.log(result)
                if (result && result.code === 0) {

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

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

