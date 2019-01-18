<template>
  <div class="persional">
    <!--<div style="display: none">-->
      <!--<el-button v-if="active1" type="primary" @click="notFinishTask">进行中的任务</el-button> <el-button v-else  @click="notFinishTask">进行中的任务</el-button>-->
      <!--<el-button v-if="active2" type="primary" @click="finishedTask">我的已完成的任务</el-button><el-button v-else  @click="finishedTask">我的已完成的任务</el-button>-->
      <!--<el-button v-if="active3" type="primary" @click="create">创建任务</el-button><el-button v-else  @click="create">创建任务</el-button>-->
       <!--<el-button v-if="active4"  type="primary" @click="mytask">提交任务</el-button> <el-button v-else  @click="mytask">提交任务</el-button>-->
    <!--</div>-->
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="menuSelect"  background-color="#D3DCE6"
                 text-color="#000"
                 active-text-color="#409EFF">
          <el-menu-item index="1">
            <span slot="title">总览</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">充值</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">提现</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">收支</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">退出</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view style="margin: 20px"/></el-main>
    </el-container>
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="5"></el-col>-->
      <!--<el-col :span="15">  </el-col>-->
    <!--</el-row>-->




  </div>

</template>

<script>
  import {bus} from "../bus.js";
  import API from "../api/api"
  export default {
    data(){
      return {
        active1:true,
        active2:false,
        active3:false,
        active4:false,
        activeName2: '1'
      }
    },
    methods:{
      create:function () {
        this.$router.push({ path: "/create-task" });
        this.active1=false
        this.active2=false
        this.active3=true
        this.active4=false
      },
      menuSelect:function(key, keyPath){
        if(key==1){
          this.$router.push({ path: "/userOverView" });
        }else if(key==2){
          this.$router.push({ path: "/charge-money" });
        }else if(key==3){
          this.$router.push({ path: "/userTixian" });
        }else if(key==4){
          this.$router.push({ path: "/MoneyHistory" });
        } else if(key==5){
          this.loginOut();
        }
      },

      mytask:function () {
        this.$router.push({ path: "/my-task" });
        this.active1=false
        this.active2=false
        this.active3=false
        this.active4=true

      },
      notFinishTask:function () {
        this.$router.push({ path: "/taskNotFinished" });
         this.active1=true
           this.active2=false
        this.active3=false
        this.active4=false
      },
      finishedTask:function () {
        this.$router.push({ path: "/taskFinished" });
        this.active1=false
        this.active2=true
        this.active3=false
        this.active4=false
      },
      loginOut:function(){
        let that=this
        API.logout({})
          .then(function(result) {
              if (result && result.code === 0) {
                //localStorage.setItem("access-token", result.result.token);
                //this.$router.push({ path: "/" });
                that.$router.push({ path: "/login" });
              } else {
                alert("退出失败请稍后重试！")
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
  };
</script>
<style>

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }




</style>
