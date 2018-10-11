<template>
<el-row>
  <el-col :span="24" class="optional">

    <el-col :span="24" class="title_">可选车辆（待发车辆）</el-col>
    <el-col :span="24" class="table">
      <el-table :data="tableData3" border style="width: 100%" height="250">
          <el-table-column fixed prop="date" label="序号" type="index" width="80"></el-table-column>
          <el-table-column prop="date" label="选择" ></el-table-column>
          <el-table-column prop="date" label="订单日期" ></el-table-column>
          <el-table-column prop="date" label="订单号" ></el-table-column>
          <el-table-column prop="date" label="审核状态" ></el-table-column>
          <el-table-column prop="date" label="审核人员" ></el-table-column>
          <el-table-column prop="date" label="审核时间" ></el-table-column>
          <el-table-column prop="date" label="订单来源" ></el-table-column>
          <el-table-column prop="date" label="提货状态" ></el-table-column>
          <el-table-column prop="date" label="始发站点" ></el-table-column>
          <el-table-column prop="date" label="目的站点" ></el-table-column>
          <el-table-column prop="date" label="增值服务" ></el-table-column>
          <el-table-column prop="date" label="发货客户" ></el-table-column>
          <el-table-column prop="date" label="发货联系人" ></el-table-column>
          <el-table-column prop="date" label="取货地址" ></el-table-column>
          <el-table-column prop="date" label="取货方式" ></el-table-column>
          <el-table-column prop="date" label="收货客户" ></el-table-column>
          <el-table-column prop="date" label="收货联系人" ></el-table-column>
          <el-table-column prop="date" label="手机号码" ></el-table-column>
          <el-table-column prop="date" label="座机号码" ></el-table-column>
          <el-table-column prop="date" label="目的省份" ></el-table-column>
          <el-table-column prop="date" label="目地城市" ></el-table-column>
          <el-table-column prop="date" label="目地区" ></el-table-column>
          <el-table-column prop="date" label="目地乡镇" ></el-table-column>
          <el-table-column prop="date" label="地址" ></el-table-column>
          <el-table-column prop="date" label="业务类型" ></el-table-column>
          <el-table-column prop="date" label="开单员" ></el-table-column>
          <el-table-column prop="date" label="品名" ></el-table-column>
          <el-table-column prop="date" label="包装方式" ></el-table-column>
          <el-table-column prop="date" label="开单件数" ></el-table-column>
          <el-table-column prop="date" label="开单重量" ></el-table-column>
          <el-table-column prop="date" label="开单体积" ></el-table-column>
          <el-table-column prop="date" label="业务员" ></el-table-column>
          <el-table-column prop="date" label="备注" ></el-table-column>
      </el-table>
    </el-col>
  </el-col>
  <el-col :span="24" class="btn">
    <el-button type="danger">车辆安检登记</el-button>
      <el-button type="danger">通过安检</el-button>
      <el-button type="danger">取消安检</el-button>
      <el-button type="success">车辆安检登记</el-button>
  </el-col>

  <el-col :span="24" class="registration">
    <el-col :span="24" class="title_">车辆安检登记 </el-col>
    <el-form :label-position="labelPosition" label-width="80px" style="width:100%;margin-right:0;">
      <el-form-item label="始发站点">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="目的站点">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="目的省份">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <el-table ref="multipleTable" :data="tableData4" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" ></el-table-column>
        <el-table-column prop="item" label="检查项目" width="300" ></el-table-column>
        <el-table-column prop="content" label="检查内容" ></el-table-column>
      </el-table>
  </el-col>
</el-row>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        tableData4: [
          {
            item:'驾驶员',
            content:'精神和体力是否饱（杜绝疲劳驾驶）'
          },
          {
            item:'行车证件',
            content:'行车证件是否齐全有效（营运证2个、二级维护卡2个、行驶证2个、驾驶证2个、从业资格证2个）'
          },
          {
            item:'安全带',
            content:'是否完好无损'
          },
          {
            item:'转向',
            content:'方向盘自由度松紧是否正常、转向拉杆是否正常。球头锁销是否牢固'
          },
          {
            item:'刹车',
            content:'板踏度是否适当、手刹是否有效、刹车回位是否顺畅、刹车片厚度，调整臂和转动杆是否同步'
          },
          {
            item:'轮胎',
            content:'气度适当，轮胎花纹的深度，备胎是否完好，是否光顶，是否鼓包，是否有外伤等'
          },
          {
            item:'车厢',
            content:'车厢、车门是否完好、是否漏水，车厢清洁、有无异味'
          }
        ],
        multipleSelection: []
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style scoped>
.title_ {
    height: 34px;
    background: #eef1f6;
    line-height: 34px;
    border-left: 5px solid #e57715;
    font-size: 13px;
    font-weight: 800;
    padding-left:3px;
 }
 .optional {
    border: 1px solid rgba(204, 204, 204, 1);
 }
 .table {
    margin: 6px;

 }
 .registration {
  margin-top: 10px;
 }
 .el-form-item {
    display: inline-block;
 }
 .btn {
    margin-top: 6px;
    margin-left: 20px;
 }
 .el-button {
    width: 116px;
 }
</style>