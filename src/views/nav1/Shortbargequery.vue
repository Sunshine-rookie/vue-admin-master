<template>
<div>
  <div class="wdgl">
    <div class="head" style="padding-left:15px;">
        <el-button style="width:100px;height:30px;" type="warning" size="small">删除派车任务</el-button>
        <el-button style="width:100px;height:30px;" type="warning" size="small">删除订单</el-button>
        <el-button style="width:100px;height:30px;" type="warning" size="small">添加订单</el-button>
        <el-button style="width:100px;height:30px;margin-left:20px;" type="info" size="small">提货完成</el-button>
    </div>

   <!-- 表格 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData3" border style="width: 100%;margin-left:20px;margin-top:6px;" height="250">
            <el-table-column label="已派车辆信息 " >
                <el-table-column prop="name" label="序号" width="120" type="index"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="24">
        <el-table :data="tableData3" border style="width: 100%;margin-left:20px;margin-top:10px;" mheight="250">
          <el-table-column label="已指派订单信息 " >
              <el-table-column prop="name" label="序号" width="120" type="index"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</div>
</template>
<script>
  export default {
    data() {
          return {
            tableData3: [
              {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }
            ]
          }
        }

  }
</script>
<style scoped>
    .el-table th>.cell {
        text-align: center;
    }

</style>