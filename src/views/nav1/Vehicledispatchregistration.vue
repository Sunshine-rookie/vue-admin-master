<template>
<div>
  <div class="wdgl">

    <!-- 按钮 -->
    <div id="head" style="height: 26px;">
      <el-button size="mini" type="text"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/search.png" alt="">查询</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/edit.gif" alt="">编辑</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/export.png" alt="">导出</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">退出</el-button>
    </div>


    <!-- 表格 -->
    <div style="margin-top:6px;">
      <el-table ref="singleTable" :data="tableData" highlight-current-row border @current-change="handleCurrentChange" style="width: 100%">
          <el-table-column type="index" label="序号" width="80"></el-table-column>
          <el-table-column property="date" label="选择" width="120"></el-table-column>
          <el-table-column property="name" label="任务编号" width="120"></el-table-column>
          <el-table-column property="address" width="150" label="车牌号码"></el-table-column>
          <el-table-column property="address" width="150" label="挂车牌号"></el-table-column>
          <el-table-column property="address" width="150" label="车辆类型"></el-table-column>
          <el-table-column property="address" width="150" label="行驶路由"></el-table-column>
          <el-table-column property="address" width="150" label="计划发车时间"></el-table-column>
          <el-table-column property="address" width="150" label="主驾驶员"></el-table-column>
          <el-table-column property="address" width="150" label="联系电话"></el-table-column>
          <el-table-column property="address" width="150" label="副驾驶员"></el-table-column>
          <el-table-column property="address" width="150" label="联系电话"></el-table-column>
          <el-table-column property="address" width="150" label="安检状态"></el-table-column>
          <el-table-column property="address" width="150" label="安检员"></el-table-column>
          <el-table-column property="address" width="150" label="安检通过时间"></el-table-column>
          <el-table-column property="address" width="150" label="车辆载重（kg）"></el-table-column>
          <el-table-column property="address" width="150" label="车辆容积（m³）"></el-table-column>
          <el-table-column property="address" width="150" label="确认运费"></el-table-column>
          <el-table-column property="address" width="150" label="现金"></el-table-column>
          <el-table-column property="address" width="150" label="到付"></el-table-column>
          <el-table-column property="address" width="150" label="月结"></el-table-column>
          <el-table-column property="address" width="150" label="油卡"></el-table-column>
          <el-table-column property="address" width="150" label="回单付款"></el-table-column>
          <el-table-column property="address" width="150" label="上次路由"></el-table-column>
          <el-table-column property="address" width="150" label="上次运费"></el-table-column>
        </el-table>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData:[
          {
            date: '2016-05-02',
            name: '王小虎',
            address: ''
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: ''
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: ''
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: ''
          }
        ]
      }
    }
  }
</script>
<style scoped>
    #head{
      width: 100%;
    }
    #head .el-button {
     border: 1px solid #959595;
     padding-left: 10px;
     width: 80px;
     height: 26px;
     margin-left: 0;
     position: relative;
     vertical-align:middle;
     background:#eaeaea;
     cursor: pointer;
     border-radius:0;
     font-family: arial, sans-serif;
     font-size: 13px;
     font-weight: normal;
     color: #000000;
    }
   #head img{
     display:block;
     width: 14px;
     height: 14px;
     position: absolute;
     top:5px;
     left:15px;
    }
</style>