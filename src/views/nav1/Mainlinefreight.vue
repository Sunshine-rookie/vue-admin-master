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

    <div style="border: 1px solid rgba(204, 204, 204, 1);margin-top:6px;">
      <div class="title_">查询条件</div>
      <div>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="车次日期">
            <el-date-picker v-model="value1" size="small" style="width:157px;" type="date"  placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
          </el-form-item>
          <el-form-item label="任务编号">
             <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="主驾驶员">
            <el-select v-model="form.region1" placeholder="请选择">
               <el-option label="123" value="123" ></el-option>
               <el-option label="456" value="456" ></el-option>
              </el-select>
          </el-form-item>
        </el-form>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="至">
            <el-date-picker v-model="value2" size="small" style="width:157px;" type="date"  placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
          </el-form-item>
          <el-form-item label="车牌号">
             <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="结算情况">
              <el-select v-model="form.region2" placeholder="请选择">
               <el-option label="未结算" value="未结算" ></el-option>
               <el-option label="已结算" value="已结算" ></el-option>
              </el-select>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <!--表格 -->
    <div style="margin-top:6px;">
        <el-table :data="tableData3" border style="width: 100%" height="250">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="结算情况" width="150"></el-table-column>
          <el-table-column prop="date" label="任务编号" width="150"></el-table-column>
          <el-table-column prop="date" label="车次日期" width="150"></el-table-column>
          <el-table-column prop="date" label="始发站点" width="150"></el-table-column>
          <el-table-column prop="date" label="目的点" width="150"></el-table-column>
          <el-table-column prop="date" label="主驾驶员" width="150"></el-table-column>
          <el-table-column prop="date" label="干线运费" width="150"></el-table-column>
          <el-table-column prop="date" label="现金" width="150"></el-table-column>
          <el-table-column prop="date" label="到付" width="150"></el-table-column>
          <el-table-column prop="date" label="月结" width="150"></el-table-column>
          <el-table-column prop="date" label="回单付款" width="150"></el-table-column>
          <el-table-column prop="date" label="付油卡卡号" width="150"></el-table-column>
          <el-table-column prop="date" label="付油卡金额" width="150"></el-table-column>
          <el-table-column prop="date" label="是否付清" width="150"></el-table-column>
          <el-table-column prop="date" label="始发结算员" width="150"></el-table-column>
          <el-table-column prop="date" label="始发结算日期" width="150"></el-table-column>
          <el-table-column prop="date" label="目的结算员" width="150"></el-table-column>
          <el-table-column prop="date" label="目的结算日期" width="150"></el-table-column>
        </el-table>
    </div>

    <div style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
      <div class="title_">费用结算</div>
      <div>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="任务编号">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="主驾驶员">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="应付未付费用">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="现金">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="到付">
             <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="回单付款">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item label="付油卡费用">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="油卡号">
             <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="月结">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="margin: 6px 0 6px -300px;text-align:center;">
        <el-button style="width:100px;height:30px;margin-left:20px;" type="info" size="small">确定</el-button>
        <el-button style="width:100px;height:30px;margin-left:20px;" type="info" size="small">取消</el-button>
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        cityArr: [],
        districtArr: [],
        value1:'',
        value2:'',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        tableData3: [
          {
           date: '',
           name: '',
           address: ''
         }
        ],
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
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
      display:inline-block;
      margin-right: 50px;
   }
   .el-form-item {
       margin-bottom: 0px;
       display: inline-block;
   }
   el-input {
      width: 157px;
      height: 18px;
   }
</style>