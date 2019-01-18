<template>
  <div id="app" >
    <div class="row" >
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane v-bind:label="taskType+'大厅'" name="1"></el-tab-pane>
        <el-tab-pane v-bind:label="'发布'+taskType" name="2"></el-tab-pane>
        <el-tab-pane v-bind:label="'已发布'+taskType" name="3"></el-tab-pane>
        <el-tab-pane v-bind:label="'已接手'+taskType" name="4"></el-tab-pane>
      </el-tabs>
    </div>
    <router-view style="margin: 20px"/>
  </div>
</template>

<script>
  import API from "../api/api"
  export default {
    data() {
      return {
        pageSize:10,
        pageNumber:1,
        totalDataNumber:0,
        tableData: [],
        taskType: '淘宝任务',
        activeName2:"1"
      }
    },
    methods:{
      handleClick(row) {
        console.log(row)
        let params = {
          taskid: row.id,
        };
        API.applyTask(params).then(function(result) {
            console.log(result)
            row.state=1
          },
          function(err) {
            console.log(err.toString())
          })
          .catch(function(error) {
            console.log("请求出现异常")
          });
      },
      handleSizeChange(val) {
        this.pageNumber=1
        this.pageSize=val
        this.getTaskData()
      },
      handleCurrentChange(val) {
        this.pageNumber=val
        this.getTaskData()
      },
      getTaskData(){
        let that = this
        let params = {
          pageSize: that.pageSize,
          pageNumber: that.pageNumber,
          state:0
        };
        API.getHomeTask(params).then(function(result) {
            console.log(result.result.list)
            that.totalDataNumber=result.result.total
            that.tableData=result.result.list
            //tableData=result.
            // if (result && result.code === 0) {
            //   localStorage.setItem("access-token", result.result.token);
            //   //this.$router.push({ path: "/" });
            //   that.$router.push({ path: "/" });
            // } else {
            //   console.log(result.msg || "登录失败")
            // }
          },
          function(err) {
            console.log(err.toString())
          })
          .catch(function(error) {
            console.log("请求出现异常")
          });
      }
      ,
      handleClick(tab, event) {
        if(tab.name=="1"){
          this.$router.push({ path: "/TaoBaoTaskHallIndex" });
        }else  if(tab.name=="2"){
          this.$router.push({ path: "/CreateTaobaoTask" });
        }else  if(tab.name=="3"){
          this.$router.push({ path: "/MyCreatedTaobaoTask" });
        }else  if(tab.name=="4"){
          this.$router.push({ path: "/MyTaobaoTask" });
        }
      }
    },
    mounted() {
      this.getTaskData()
    }
  }
</script>
<style>
  .row{
    margin-top: 20px;
  }
</style>
