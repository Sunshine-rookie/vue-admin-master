
<template>
<div class="freight">
    <div class="form">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="发货人姓名">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="客户简称">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="所属网点">
              <el-select v-model="form.region1" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="联系电话" >
              <form action="/example/html5/demo_form.asp" method="get">
              <input type="number" name="points" min="7" max="11" style="width:153px;height: 18px;line-height: 18px;border:1px solid #bfcbd9;padding-left: 2px;"/>
              </form>
              <el-tooltip class="item" effect="dark" content="最多输入11位，最少输入6位!" placement="left-end">
              </el-tooltip>
            </el-form-item>
        </el-form>

        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="结算方式">
              <el-select v-model="form.region2" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="客户类型">
              <el-select v-model="form.region3" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="业务员">
              <el-select v-model="form.region4" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="审核结算状态">
              <el-select v-model="form.region5" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
    </div>
    <div class="tabel" style="margin-top:10px;">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="发货客户编号" width="180"></el-table-column>
        <el-table-column prop="date" label="发货客户简称" width="180"></el-table-column>
        <el-table-column prop="date" label="发货客户全称" width="180"></el-table-column>
        <el-table-column prop="date" label="助记码" width="180"></el-table-column>
        <el-table-column prop="date" label="客户类型" width="180"></el-table-column>
        <el-table-column prop="date" label="客户状态" width="180"></el-table-column>
        <el-table-column prop="date" label="提货方式" width="180"></el-table-column>
        <el-table-column prop="date" label="送货方式" width="180"></el-table-column>
        <el-table-column prop="date" label="所属网点" width="180"></el-table-column>
        <el-table-column prop="date" label="业务员" width="180"></el-table-column>
        <el-table-column prop="date" label="详细地址" width="180"></el-table-column>
        <el-table-column prop="date" label="客户星级" width="180"></el-table-column>
        <el-table-column prop="date" label="地址坐标" width="180"></el-table-column>
        <el-table-column prop="date" label="审核状态" width="180"></el-table-column>
        <el-table-column prop="date" label="结算方式" width="180"></el-table-column>
        <el-table-column prop="date" label="结算日期" width="180"></el-table-column>
        <el-table-column prop="date" label="折扣比率" width="180"></el-table-column>
        <el-table-column prop="date" label="信用额度" width="180"></el-table-column>
        <el-table-column prop="date" label="创建人" width="180"></el-table-column>
        <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="date" label="最后修改人" width="180"></el-table-column>
        <el-table-column prop="date" label="最后修改时间" width="180"></el-table-column>
      </el-table>
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
        form: {
          name: '',
          region1: '',
          region2: '',
          region3: '',
          region4: '',
          region5: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .el-form-item {
    display: inline-block;
  }
</style>