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
        <div class="title_">合同信息编辑</div>
        <div class="info" style="height:100%;">

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="合同编号">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="合同签约人">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="我司签约人">
              <el-input type="text"></el-input>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="签约客户">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="合同附件">
              <el-upload class="upload-demo" ref="upload" action="" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
                <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
              </el-upload>
            </el-form-item>

          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">

            <el-form-item label="合同开始">
              <el-select v-model="formInline.region1" placeholder="请选择">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="合同截止">
              <el-select v-model="formInline.region2" placeholder="请选择">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="到期提醒时间">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="签经时间">
              <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-form-item>

            <el-form-item label="签约地点">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="备注">
              <el-input type="text"></el-input>
            </el-form-item>
          </el-form>

        </div>
    </div>

    <el-table :data="tableData" border style="width: 100%;margin-top: 10px;">
        <el-table-column prop="date" label="合同编号"></el-table-column>
        <el-table-column prop="date" label="签约客户"></el-table-column>
        <el-table-column prop="date" label="合同开始"></el-table-column>
        <el-table-column prop="date" label="合同截止"></el-table-column>
        <el-table-column prop="date" label="合同附件"></el-table-column>
        <el-table-column prop="date" label="到期提醒时间"></el-table-column>
        <el-table-column prop="date" label="我司签约人"></el-table-column>
        <el-table-column prop="date" label="客户签约人"></el-table-column>
        <el-table-column prop="date" label="签约时间"></el-table-column>
        <el-table-column prop="date" label="签约地点"></el-table-column>

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
        value1:'',
        value2:'',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
  .upload-demo {
    display: inline-block;
    width: 100%;
    height: 22px;
  }
  ul,li {
    float: left;
  }
  .el-upload-list{
    float: right;
  }
  .el-upload-list__item {
    float: left;
  }
  .el-upload-list__item:first-child {
    margin-top: 0px;
  }
</style>