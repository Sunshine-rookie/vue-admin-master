<template>
<div>
  <div class="wdgl">

    <!-- 按钮 -->
    <div id="head" style="margin-top:6px;height: 26px;">
      <el-button size="mini" type="text"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/search.png" alt="">查询</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/edit.gif" alt="">编辑</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/export.png" alt="">导出</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">退出</el-button>
    </div>

    <!-- section start -->
    <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
      <div class="query">
        <div class="title_">查询条件</div>
        <div style="width:100%;height:85px;">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="启用日期">
              <el-date-picker
                 v-model="value1"
                 size="small"
                 style="width:157px;"
                 type="date"
                 placeholder="选择日期"
                 :picker-options="pickerOptions0">
               </el-date-picker>
            </el-form-item>
            <el-form-item label="线路编号">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="始发地">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="目的地">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="至">
              <el-date-picker
                 v-model="value2"
                 size="small"
                 style="width:157px;"
                 type="date"
                 placeholder="选择日期"
                 :picker-options="pickerOptions0">
               </el-date-picker>
            </el-form-item>
            <el-form-item label="线路名称">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="经停站">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div>
        <div class="title_">路由方案编辑</div>

        <div class="info" style="width: 97%;height:100%;margin-top:10px">
          <div style="width: 100%;height:100%;border: 1px solid rgba(204, 204, 204, 1);margin:10px;">
            <el-form style="width: 100%;margin-top:6px;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="线路编号">
                <el-el-input v-model="formLabelAlign.region"></el-el-input>
              </el-form-item>
              <el-form-item label="录用时间">
                 <el-date-picker
                   v-model="value3"
                   size="small"
                   style="width:157px;"
                   type="date"
                   placeholder="选择日期"
                   :picker-options="pickerOptions0">
                 </el-date-picker>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="证件号码">
                 <el-input style="width:438px;" v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="">
                 <el-input type="checkbox" style="width:15px;height:15px;"><span>是否启用</span></el-input>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="所属车队">
                <el-select v-model="form.region1" placeholder="请选择">
                  <el-option label="自有车队" value="自有车队"></el-option>
                  <el-option label="第三方车队A" value="第三方车队A"></el-option>
                  <el-option label="第三方车队B" value="第三方车队B"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="所属车队">
                  <el-select v-model="form.region2" placeholder="请选择">
                    <el-option label="自有车队" value="自有车队"></el-option>
                    <el-option label="第三方车队A" value="第三方车队A"></el-option>
                    <el-option label="第三方车队B" value="第三方车队B"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="所属车队">
                  <el-select v-model="form.region3" placeholder="请选择">
                    <el-option label="自有车队" value="自有车队"></el-option>
                    <el-option label="第三方车队A" value="第三方车队A"></el-option>
                    <el-option label="第三方车队B" value="第三方车队B"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="所属车队">
                  <el-select v-model="form.region4" placeholder="请选择">
                    <el-option label="自有车队" value="自有车队"></el-option>
                    <el-option label="第三方车队A" value="第三方车队A"></el-option>
                    <el-option label="第三方车队B" value="第三方车队B"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:10px;">
        <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="日期" width="120">
            <template scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
        </el-table>
    </div>
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value1:'',
        value2:'',
        value3:'',
        input2:'',
        defaultProps: {
        children: 'children',
        label: 'label'
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        tableData3: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        multipleSelection: []
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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

  .title_ {
      height: 34px;
      background: #eef1f6;
      line-height: 34px;
      border-left: 5px solid #e57715;
      font-size: 13px;
      font-weight: 800;
      padding-left:3px;
   }
  .el-form {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
  }
  .el-form-item {
    margin-bottom: 0px;
  }
  .query .el-form-item {
    display: inline-block;
    margin-right: 20px;
  }
  .info .el-form-item {
    display: inline-block;
    margin-left: -10px;
    margin-right: 30px;
  }
  el-el-input {
    width:153px;
    height:18px;
  }
</style>