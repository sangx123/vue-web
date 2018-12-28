<template>
  <div class="persional">
    <div style="display: none">
      <el-button v-if="active1" type="primary" @click="notFinishTask">进行中的任务</el-button> <el-button v-else  @click="notFinishTask">进行中的任务</el-button>
      <el-button v-if="active2" type="primary" @click="finishedTask">我的已完成的任务</el-button><el-button v-else  @click="finishedTask">我的已完成的任务</el-button>
      <el-button v-if="active3" type="primary" @click="create">创建任务</el-button><el-button v-else  @click="create">创建任务</el-button>
       <el-button v-if="active4"  type="primary" @click="mytask">提交任务</el-button> <el-button v-else  @click="mytask">提交任务</el-button>
    </div>
    <div>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="进行中的任务" name="1"></el-tab-pane>
        <el-tab-pane label="我的已完成的任务" name="2"></el-tab-pane>
        <el-tab-pane label="创建任务" name="3"></el-tab-pane>
      </el-tabs>
    </div>
    <router-view style="padding: 20px"/>
  </div>

</template>

<script>
  import {bus} from "../bus.js";
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

      handleClick(tab, event) {
        if(tab.name=="1"){
          this.$router.push({ path: "/taskNotFinished" });
        }else  if(tab.name=="2"){
          this.$router.push({ path: "/taskFinished" });
        }else  if(tab.name=="3"){
          this.$router.push({ path: "/create-task" });
        }else  if(tab.name=="4"){
          this.$router.push({ path: "/my-task" });
        }
      }
    }
  };
</script>
<style>
  .persional{
    margin-top: 20px;
  }
</style>
