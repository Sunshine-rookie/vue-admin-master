<template>
<div>
  <div class="wdgl">

    <!-- 按钮 -->
    <div id="head" style="margin-top:6px;height: 26px;</div>">
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
            <el-form-item label="车牌号码">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="车辆使用地">
             <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="车型">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="车辆权属">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="驾驶员">
              <el-input
                placeholder="请选择驾驶员"
                size="small"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick">
              </el-input>
            </el-form-item>
            <el-form-item label="所属车队">
              <el-input
                placeholder="请选择所属车队"
                size="small"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div>
        <div class="title_">网点信息编辑</div>
        <div class="info" style="height:100%;">
          <div class="info" style="height:100%;border: 1px solid rgba(204, 204, 204, 1);margin:10px;">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="车牌号码">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="车牌号码">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="助记编码">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="车辆状态" style="margin-left: -20px;">
                <el-select v-model="form.region1" placeholder="请选择">
                  <el-option label="可用" value="可用"></el-option>
                  <el-option label="不可用" value="不可用"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="车型">
                <el-select v-model="form.region2" placeholder="请选择">
                  <el-option label="7.7米厢式车" value="7.7米厢式车"></el-option>
                  <el-option label="12.5米厢式车" value="12.5米厢式车"></el-option>
                  <el-option label="17.5米厢式车" value="17.5米厢式车"></el-option>
                  <el-option label="9.5米厢式车" value="9.5米厢式车"></el-option>
                  <el-option label="甩挂车头" value="甩挂车头"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="核载重量">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="核载体积">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="所属车队" style="margin-left: -20px;">
                  <el-select v-model="form.region3" placeholder="请选择">
                    <el-option label="第三方车队A" value="第三方车队A"></el-option>
                    <el-option label="自有车队" value="自有车队"></el-option>
                    <el-option label="第三方车队B" value="第三方车队B"></el-option>
                  </el-select>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="主驾驶员">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="主驾驶员电话">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="挂车牌码">
               <el-input v-model="formLabelAlign.region" style="width:415px;"></el-input>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="副驾驶员">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="副驾驶员电话">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="备注" >
               <el-input v-model="formLabelAlign.region" style="width:415px;"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div style="height:100%;border: 1px solid rgba(204, 204, 204, 1);margin:10px;">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="GPS编号">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="GPS设备厂家">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="GPS安装日期">
               <input type="file" style="width:157px;height:21px;">
              </el-form-item>
              <el-form-item label="GPS押金" style="margin-left: -20px;">
               <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="GPS状态">
                <el-select v-model="form.region4" placeholder="请选择">
                  <el-option label="启用" value="启用"></el-option>
                  <el-option label="禁用" value="禁用"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="GPS拆卸日期">
                <el-date-picker
                  v-model="value"
                  size="small"
                  style="width:157px;"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="押金退款">
                 <el-select v-model="form.region5" placeholder="请选择">
                  <el-option label="已退" value="已退"></el-option>
                  <el-option label="未退" value="未退"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div>
        <div class="table">
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value:'',
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
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
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
  .table {
    padding: 10px;
  }
</style>