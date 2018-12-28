<template>
  <div id="app">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title"
        label="任务名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.state == '1'" @click="handleClick(scope.row)"   :disabled="true" type="primary" size="small">审核中</el-button>
          <el-button v-else @click="handleClick(scope.row)"   :disabled="false" type="primary" size="small">提交任务</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      :page-sizes="[10, 15, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalDataNumber">
    </el-pagination>
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
        tableData: []
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
        API.getUserTask(params).then(function(result) {
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
    },
    mounted() {
      this.getTaskData()
    }
  }
</script>
<style>
</style>
