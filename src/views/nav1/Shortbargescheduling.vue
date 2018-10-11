<template>
<div>
  <div class="wdgl">
    <div class="head">
        <p data-v-3294d934="" style="height: 65px; line-height: 44px; text-align: center; font-size: 28px; font-weight: 800; margin: 0px;">订单提货 调度派车</p>
    </div>

    <!-- 查询条件 -->
    <div>
      <el-button style="width:80px;height:25px;line-height:18px;margin-left:20px;margin-bottom: 6px;padding:0;" size="small">查询条件</el-button>

      <el-form :label-position="labelPosition" label-width="80px" size="small" :model="formLabelAlign">
        <el-form-item label="开单日期">
          <el-date-picker v-model="value1" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
        </el-form-item>
        <el-form-item label="至">
          <el-date-picker v-model="value2" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
        </el-form-item>
        <el-form-item label="始发站点">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="目的站点">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-input type="" name=""></el-input>
        </el-form-item>
      </el-form>

      <el-form :label-position="labelPosition" label-width="80px" size="small" :model="formLabelAlign">
        <el-form-item label="业务员">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="取货方式">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="增值服务">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="目的省份">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="" name=""></el-input>
        </el-form-item>
      </el-form>

      <el-form :label-position="labelPosition" label-width="80px" size="small" :model="formLabelAlign">
        <el-form-item label="业务类型">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="件数">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="品名">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="目的城市">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="" name=""></el-input>
        </el-form-item>
      </el-form>
      <el-form :label-position="labelPosition" label-width="80px" size="small" :model="formLabelAlign">
        <el-form-item label="业务类型">
          <el-input type="" name=""></el-input>
        </el-form-item>
        <el-form-item label="件数">
          <el-input type="" name=""></el-input>
        </el-form-item>
      </el-form>

    </div>

    <!-- 表格 -->
      <el-row>
        <el-col :span="12">
          <el-table :data="tableData3" border style="width: 90%;margin-left:20px;" max-height="250">
              <el-table-column label="未派车辆信息" >
                  <el-table-column prop="name" label="序号" width="120" type="index"></el-table-column>
                  <el-table-column prop="name" label="姓名" ></el-table-column>
                  <el-table-column prop="name" label="姓名" ></el-table-column>
                  <el-table-column prop="name" label="姓名" ></el-table-column>
                  <el-table-column prop="name" label="姓名" ></el-table-column>
                  <el-table-column prop="name" label="姓名" ></el-table-column>
              </el-table-column>
          </el-table>
            <el-button style="width:120px;height:30px;margin: 6px 50px 0 200px;" type="info" size="small">指派订单（整票）</el-button>
            <el-button style="width:120px;height:30px;margin: 6px 50px 0 120px;" type="info" size="small">指派订单（分批）</el-button>
        </el-col>
        <el-col :span="12">
          <el-table :data="tableData3" border style="width: 90%;margin-left:20px;" max-height="250">
              <el-table-column label="已派车辆信息">
                  <el-table-column prop="name" label="序号" width="120" type="index"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
              </el-table-column>
          </el-table>
        </el-col>
        <div style="text-align:center;">
          <el-button style="width:120px;height:30px;margin: 6px 50px 0 100px;" type="info" size="small">添加车辆 </el-button>
          <el-button style="width:120px;height:30px;margin: 6px 50px 0 50px;" type="info" size="small">推送任务信息 </el-button>
          <el-button style="width:120px;height:30px;margin: 6px 50px 0 100px;" type="success" size="small">确认 </el-button>
        </div>
      </el-row>

    <!-- 底部 -->
    <el-row>
     <el-col :span="24">
       <el-table max-height="200" :data="tableData3" border style="width: 95%;margin: 6px 20px 0 20px;">
           <el-table-column label="已派车辆信息" >
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
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            },
            value1:'',
            value2:'',
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
              }
            },
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
              }
            ]
          }
        }
  }
</script>
<style scoped>
el-input {
  width: 180px;
  height:18px;
  padding:2;
}
.el-el-input__inner {
  height: 18px;
}
.el-form-item {
    margin-bottom: 0px;
    display: inline-block;
    margin-left: 50px;
}
.el-form-item__label {
  display:inline-block;
  height: 25px;
  line-height: 25px;
}
.el-form-item__content {
    height: 25px;
    line-height: 25px;

}
.el-el-input--small .el-el-input__inner {
    height: 25px;
}
.el-row {
  margin-top: 6px;
}
.el-table th {
    background-color: #f3f3f3;
}
.el-table td, .el-table th {
  height: 25px;
}
</style>