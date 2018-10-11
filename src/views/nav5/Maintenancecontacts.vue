<template>
<div class="custommer">
  <!-- 按钮 -->
    <div id="head" style="height: 26px;">
      <el-button size="mini" type="text"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">返回</el-button>
    </div>

  <!-- 客户资料编辑 -->
  <div class="data">
    <div class="editoar">
        <div class="title_">员工信息编辑</div>
        <div class="info" style="height:100%;">

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="客户编号">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="客户名称">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="固定电话">
              <el-input type="text"></el-input>
            </el-form-item>

          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="联系人">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="手机号码">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="短信通知">
              <el-select v-model="formInline.region1" placeholder="请选择">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>


          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">

            <el-form-item label="默认地址">
              <el-select v-model="formInline.region2" placeholder="请选择">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="联系地址">
              <el-input type="text" style="width: 448px;"></el-input>
            </el-form-item>

          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="所属部门">
              <el-select v-model="formInline.region3">
                <el-option label="1" value="1" ></el-option>
                <el-option label="2" value="2" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="备注">
              <el-input type="text" style="width: 448px;"></el-input>
            </el-form-item>

          </el-form>
        </div>
    </div>

    <el-table :data="tableData" border style="width: 100%;margin-top: 6px;">
        <el-table-column prop="date" label="客户编号" width="180"></el-table-column>
        <el-table-column prop="date" label="客户名称" width="180"></el-table-column>
        <el-table-column prop="date" label="联系人" width="180"></el-table-column>
        <el-table-column prop="date" label="联系地址" width="180"></el-table-column>
        <el-table-column prop="date" label="默认地址" width="180"></el-table-column>
        <el-table-column prop="date" label="短信通知" width="180"></el-table-column>
        <el-table-column prop="date" label="联系电话" width="180"></el-table-column>
        <el-table-column prop="date" label="手机号码" width="180"></el-table-column>

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
        formInline: {
          user: '',
          region1: '',
          region2: '',
          region3: ''
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  .data {
    margin-top: 6px;
  }
  .title_ {
     margin-top: 6px;
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
    margin-left: 30px;
  }
  .el-input {
    width: 157px;
    height: 16px;
  }
</style>