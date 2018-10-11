<template>
<el-row >
  <el-col style="font-size:24px;margin:0;text-align:center;">订 单 管 理 </el-col>

  <!-- 查询条件 -->
  <el-col :span="24" class="top" style="border: 1px solid rgba(204, 204, 204, 1);margin-top: 10px;">
    <el-col :span="24" class="title_">查询条件</el-col>
    <el-col :span="24">
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
        <el-form-item label="目的城市">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="审核状态">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-form :label-position="labelPosition" label-width="80px" style="width:100%;margin-right:0;">
        <el-form-item label="发货客户">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="收货客户">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="业务员">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="增值服务">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-form :label-position="labelPosition" label-width="80px" style="width:100%;margin-right:0;">
        <el-form-item label="件数">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="品名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="提货状态">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-col>

  <!-- 查询结果 -->
  <el-col :span="24" class="top" style="border: 1px solid rgba(204, 204, 204, 1);margin-top: 10px;">
    <el-col :span="24" class="title_">查询结果</el-col>
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
  <!-- 按钮 -->
  <el-col :span="24" class="btn">
    <el-button type="success">审核通过</el-button>
    <el-button type="warning">作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;废</el-button>
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
                  }]
      }
    },
    methods:{

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
 .el-form-item {
    display: inline-block;
    margin-left: 50px;
 }
 .table {
    padding: 10px;
 }
 .btn {
  margin-top: 10px;
  margin-left: 15px;
 }
</style>