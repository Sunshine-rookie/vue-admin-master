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
    <!-- 内容 -->
    <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
      <!-- 查询条件 -->
      <div class="query">
        <div class="title_">查询条件</div>
        <div class="info">
          <el-form style="margin-right:70px;" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="发件客户">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="线路名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="自提时效">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="增值业务">
              <el-select v-model="form.region1" placeholder="请选择">
                <el-option label="普件" value="普件"></el-option>
                <el-option label="快件" value="快件"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- 报价维护区域 -->
      <div class="quote clearfix" style="height:320px;">
        <div class="title_" style="margin-bottom: 10px;">报价维护区域</div>
        <div class="info" style="width:40%;height:100%;float:left;">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="报价站点">
              <el-select v-model="form.region2" placeholder="请选择">
                <el-option label="上海" value="上海"></el-option>
                <el-option label="北京" value="北京"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="收付类型">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="计费方式">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="增值业务">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="派送方式">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="客户名称">
               <el-input type="textarea" autosize v-model="textarea3">
               </el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="checked">备选项</el-checkbox>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="费用类型">
              <el-select v-model="form.region3" placeholder="请选择">
                <el-option label="123" value="123"></el-option>
                <el-option label="456" value="456"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结算对象类型">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="参数取值方式">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="最低收费">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="费用折扣">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="线路名称">
              <el-el-input style="width:160px;" type="textarea" autosize v-model="textarea2">
              </el-el-input>
            </el-form-item>
            <el-form-item label="启用时间">
              <el-date-picker v-model="value1" size="small" style="width:160px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <div class="form" style="width:45%;height:80%;margin: 6px;padding:3px;border: 1px solid rgba(204, 204, 204, 1);float:left;">
          <p style="margin:0 6px;">
            <span style="font-size:13px;">计算参数说明: &nbsp;</span>
            <span style="font-size:12px;color:#FF0000;">重量:&nbsp;&nbsp;&nbsp;&nbsp;用w表示</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="font-size:12px;color:#FF0000;">件数:&nbsp;&nbsp;&nbsp;&nbsp;用p表示</span>
          </p>

          <div>
            <p style="margin:6px;">报价公式维护:</p>
            <el-table :data="tableData" border style="width: 100%;">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
            <!-- <div class="block" style="border: 1px solid #dfe6ec;border-top:0;width: 100%;"> -->
                <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                  :total="40">
                </el-pagination>
            <!-- </div> -->
          </div>
        </div>
      </div>

      <!-- quote end -->
    </div>
    <!-- section end -->

    <!-- foot start -->
    <div style="margin-top:10px;">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <!-- <div class="block" style="border: 1px solid #dfe6ec;border-top:0;padding: 2px 0;width: 100%;"> -->
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
      <!-- </div> -->
    </div>
    <!-- foot end -->
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        checked:true,
        textarea2:'',
        textarea3:'',
        currentPage:1,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        textarea:'',
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
          }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
      },
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
       display:block;
   }
   .quote .el-form-item {
    display:inline-block;
   }
</style>