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
        <div class="query" style="height:85px;">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="驾驶员姓名">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="在职情况">
              <el-select v-model="form.region1" placeholder="请选择">
                <el-option label="在职" value="在职"></el-option>
                <el-option label="离职" value="离职"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属车队">
             <el-select v-model="form.region2" placeholder="请选择">
                <el-option label="自有车队" value="自有车队"></el-option>
                <el-option label="第三方车队A" value="第三方车队A"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="所属网点">
              <el-input
                placeholder="请选择"
                style="width:157px"
                icon="search"
                size="small"
                v-model="input2"
                :on-icon-click="handleIconClick">
              </el-input>
            </el-form-item>
            <el-form-item label="驾照类型">
             <el-select v-model="form.region3" placeholder="请选择">
                <el-option label="B2驾驶证" value="B2驾驶证"></el-option>
                <el-option label="C1驾驶证" value="C1驾驶证"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div>
        <div class="title_">员工信息编辑</div>

        <div class="info" style="width: 97%;height:100%;">
          <div class="info" style="width: 100%;height:100%;border: 1px solid rgba(204, 204, 204, 1);margin:10px;">
            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="驾驶员工号">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="驾驶员姓名">
                 <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="录用时间">
                 <el-date-picker
                   v-model="value1"
                   size="small"
                   style="width:157px;"
                   type="date"
                   placeholder="选择日期"
                   :picker-options="pickerOptions0">
                 </el-date-picker>
              </el-form-item>
              <el-form-item label="车辆状态">
                  <el-select v-model="form.region4" placeholder="请选择">
                    <el-option label="出行" value="出行"></el-option>
                    <el-option label="暂停" value="暂停"></el-option>
                  </el-select>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="证件类型">
                <el-select v-model="form.region5" placeholder="请选择">
                  <el-option label="驾驶证" value="驾驶证"></el-option>
                  <el-option label="身份证" value="身份证"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号码">
                 <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="可驾车型">
                 <el-select v-model="form.region6" placeholder="请选择">
                  <el-option label="B2驾驶证" value="B2驾驶证"></el-option>
                  <el-option label="C1驾驶证" value="C1驾驶证"></el-option>
                  <el-option label="B1驾驶证" value="B1驾驶证"></el-option>
                  <el-option label="A1驾驶证" value="A1驾驶证"></el-option>
                  <el-option label="A2驾驶证" value="A2驾驶证"></el-option>
                  <el-option label="A3驾驶证" value="A3驾驶证"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生年月">
                 <el-date-picker
                   v-model="value2"
                   size="small"
                   style="width:157px;"
                   type="date"
                   placeholder="选择日期"
                   :picker-options="pickerOptions0">
                 </el-date-picker>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="所属车队">
                  <el-select v-model="form.region7" placeholder="请选择">
                    <el-option label="自有车队" value="自有车队"></el-option>
                    <el-option label="第三方车队A" value="第三方车队A"></el-option>
                    <el-option label="第三方车队B" value="第三方车队B"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-input placeholder="请选择" icon="search" size="small" v-model="input2" :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
                <el-form-item label="联系电话">
                   <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              </el-form-item>
                <el-form-item label="籍贯">
                    <el-select v-model="form.region8" placeholder="请选择">
                      <el-option label="上海" value="上海"></el-option>
                    </el-select>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="现住地址">
                <el-input v-model="formLabelAlign.region" style="width:438px;"></el-input>
              </el-form-item>
              <el-form-item label="家庭地址">
                 <el-input v-model="formLabelAlign.region"style="width:438px;"></el-input>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="离职日期">
                <el-date-picker
                  v-model="value3"
                  size="small"
                  style="width:157px;"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="">
                 <el-input type="checkbox" style="width:15px;height:15px;"><span>启用状态</span></el-input>
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
          region5: '',
          region6: '',
          region7: '',
          region8: '',
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
    margin-bottom: 3px;
  }
  .info .el-form-item {
    display: inline-block;
    margin-right: 20px;
  }
</style>