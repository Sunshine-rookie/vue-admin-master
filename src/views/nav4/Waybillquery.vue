<template>
  <div class="query">

    <div class="head">
        <p class="title">托 运 单 查 询</p>
    </div>

    <!-- 查询条件 -->
    <div class="queryinfo">
        <!--  -->
        <div class="waybillquery">
          <div class="z-groupbox-hr">
            <span class="z-caption-cnt">
              <span class="z-label" @click.prevent="hidden">查询条件</span>
            </span>
          </div>

          <!-- 表单 -->
          <div class="form" v-if="hide">
             <el-form :label-position="labelPosition" label-width="100px">
               <el-form-item label="开单日期">
                  <el-date-picker v-model="value1" size="small" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                  </el-date-picker>
               </el-form-item>
               <el-form-item label="至">
                  <el-date-picker v-model="value2" size="small" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                 </el-date-picker>
               </el-form-item>
               <el-form-item label="始发站点">
                  <el-select v-model="form.region1" placeholder="请选择">
                    <el-option label="上海" value="上海"></el-option>
                    <el-option label="昆明" value="昆明"></el-option>
                    <el-option label="贵阳" value="贵阳"></el-option>
                    <el-option label="金华" value="金华"></el-option>
                    <el-option label="合肥" value="合肥"></el-option>
                    <el-option label="长沙" value="长沙"></el-option>
                    <el-option label="济南" value="济南"></el-option>
                    <el-option label="郑州" value="郑州"></el-option>
                    <el-option label="深圳" value="深圳"></el-option>
                    <el-option label="广州" value="广州"></el-option>
                    <el-option label="泉州" value="泉州"></el-option>
                    <el-option label="汕头" value="汕头"></el-option>
                  </el-select>
               </el-form-item>
               <el-form-item label="目的站点">
                 <el-select v-model="form.region2" placeholder="请选择">
                   <el-option label="上海" value="上海"></el-option>
                   <el-option label="昆明" value="昆明"></el-option>
                   <el-option label="贵阳" value="贵阳"></el-option>
                   <el-option label="金华" value="金华"></el-option>
                   <el-option label="合肥" value="合肥"></el-option>
                   <el-option label="长沙" value="长沙"></el-option>
                   <el-option label="济南" value="济南"></el-option>
                   <el-option label="郑州" value="郑州"></el-option>
                   <el-option label="深圳" value="深圳"></el-option>
                   <el-option label="广州" value="广州"></el-option>
                   <el-option label="泉州" value="泉州"></el-option>
                   <el-option label="汕头" value="汕头"></el-option>
                 </el-select>
               </el-form-item>
             </el-form>
             <el-form :label-position="labelPosition" label-width="100px">
               <el-form-item label="业务员">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="派送方式">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="增值服务">
                 <el-select v-model="form.region8" placeholder="请选择">
                   <el-option label="有增值" value="有增值"></el-option>
                   <el-option label="无增值" value="无增值"></el-option>
                 </el-select>
               </el-form-item>
               <el-form-item label="目的省份">
                 <el-select v-model="form.region3" placeholder="请选择">
                   <el-option label="上海" value="上海"></el-option>
                   <el-option label="昆明" value="昆明"></el-option>
                   <el-option label="贵阳" value="贵阳"></el-option>
                   <el-option label="金华" value="金华"></el-option>
                   <el-option label="合肥" value="合肥"></el-option>
                   <el-option label="长沙" value="长沙"></el-option>
                   <el-option label="济南" value="济南"></el-option>
                   <el-option label="郑州" value="郑州"></el-option>
                   <el-option label="深圳" value="深圳"></el-option>
                   <el-option label="广州" value="广州"></el-option>
                   <el-option label="泉州" value="泉州"></el-option>
                   <el-option label="汕头" value="汕头"></el-option>
                 </el-select>
               </el-form-item>
             </el-form>
             <el-form :label-position="labelPosition" label-width="100px">
               <el-form-item label="业务类型">
                 <el-select v-model="form.region4" placeholder="请选择">
                   <el-option label="现付" value="现付"></el-option>
                   <el-option label="到付" value="到付"></el-option>
                 </el-select>
               </el-form-item>
               <el-form-item label="是否预约">
                 <el-select v-model="form.region5" placeholder="请选择">
                   <el-option label="是" value="是"></el-option>
                   <el-option label="否" value="否"></el-option>
                 </el-select>
               </el-form-item>
               <el-form-item label="付款方式">
                 <el-select v-model="form.region6" placeholder="请选择">
                   <el-option label="现付" value="现付"></el-option>
                   <el-option label="到付" value="到付"></el-option>
                 </el-select>
               </el-form-item>
               <el-form-item label="目的城市">
                 <el-select v-model="form.region7" placeholder="请选择">
                   <el-option label="上海" value="上海"></el-option>
                   <el-option label="昆明" value="昆明"></el-option>
                   <el-option label="贵阳" value="贵阳"></el-option>
                   <el-option label="金华" value="金华"></el-option>
                   <el-option label="合肥" value="合肥"></el-option>
                   <el-option label="长沙" value="长沙"></el-option>
                   <el-option label="济南" value="济南"></el-option>
                   <el-option label="郑州" value="郑州"></el-option>
                   <el-option label="深圳" value="深圳"></el-option>
                   <el-option label="广州" value="广州"></el-option>
                   <el-option label="泉州" value="泉州"></el-option>
                   <el-option label="汕头" value="汕头"></el-option>
                 </el-select>
               </el-form-item>
             </el-form>
             <el-form :label-position="labelPosition" label-width="100px">
               <el-form-item label="路由流向">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="件数">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="品名">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="是否有回单">
                 <el-date-picker v-model="value3" size="small" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                 </el-date-picker>
               </el-form-item>
             </el-form>
             <el-form :label-position="labelPosition" label-width="100px">
               <el-form-item label="发货客户">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="收货客户">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="手机号码">
                 <el-input type="text"></el-input>
               </el-form-item>
               <el-form-item label="是否有到付款">
                 <el-date-picker v-model="value4" size="small" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                 </el-date-picker>
               </el-form-item>
             </el-form>
          </div>

        </div>
    </div>

    <!-- 查询结果 -->
    <div class="queryinfo">
        <div class="waybillquery">
          <div class="z-groupbox-hr">
            <span class="z-caption-cnt">
              <span>查询结果</span>
            </span>
          </div>
        <div class="table">
          <el-table :data="tableData" border style="width: 100%" max-height="600">
            <el-table-column prop="date" label="序号" type="index" width="100"></el-table-column>
            <el-table-column prop="date" label="选择"></el-table-column>
            <el-table-column prop="date" label="开单日期"></el-table-column>
            <el-table-column prop="date" label="始发站点"></el-table-column>
            <el-table-column prop="date" label="目的站点"></el-table-column>
            <el-table-column prop="date" label="运单编号"></el-table-column>
            <el-table-column prop="date" label="增值服务"></el-table-column>
            <el-table-column prop="date" label="发货客户"></el-table-column>
            <el-table-column prop="date" label="发货联系人"></el-table-column>
            <el-table-column prop="date" label="收货客户"></el-table-column>
            <el-table-column prop="date" label="收货客户"></el-table-column>
          </el-table>
          <div class="block" style="border: 1px solid #dfe6ec;border-top:0;padding: 2px 0;">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                :total="40">
              </el-pagination>
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
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        hide:true,
        tableData: [
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
          {
            date: '',
            name: '',
            address: ''
          },
        ]
      }
    },
    methods:{
      hidden(){
        console.log("1");
        this.hide = !this.hide;
      },
      handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style scoped>
  .query {
    padding: 2px;
  }
  .head {
      margin-top:6px;
      border-bottom: 1px solid #c5c5c5;
    }
  .title{
      height: 30px;
      line-height:30px;
      text-align:center;
      font-size: 20px;
      font-weight: 600;
      margin:0;
  }
  .queryinfo {
    margin-top: 20px;
  }
  .waybillquery {
    border: 1px solid #c5c5c5;
    border-top: 0;
  }
  .z-groupbox-hr {
    position: relative;
    top: 0px;
    border: 1px solid #c5c5c5;
    border-bottom: 0;
  }
  .z-caption-cnt {
    display: inline-block;
    background-color: #fff;
    padding-left: 6px;
    padding-right: 6px;
    position: absolute;
    top: -10px;
    left: 20px;
  }
  .z-label {
    cursor: pointer;
  }
  .form {
    margin-top: 16px;
    padding: 10px;
  }
  .el-form-item {
    display: inline-block;
    margin-bottom: -5px;

  }

  .el-select,.el-date-picker, .el-date-editor.el-el-input{
    margin-right: 50px;
  }
  .el-input, .el-select, .el-date-picker{
    margin-right: 50px;
  }
  .table {
    margin-top: 10px;
    padding: 10px;
  }

</style>