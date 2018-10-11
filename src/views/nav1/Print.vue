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

    <div style="margin-top:10px;">
      <!-- 查询条件 -->
      <div class="top" style="border: 1px solid rgba(204, 204, 204, 1);">
        <div class="title_">查询条件</div>
        <div style="width:100%;height:60px;line-height: 60px;">
          <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;margin:0 0 10px -4px;">
            <el-form-item label="系统脱单号" >
              <el-input style="width:157px;height:18px;"></el-input>
            </el-form-item>
            <el-form-item label="订单录入公司">
              <el-select v-model="form.region1" placeholder="请选择">
                <el-option label="默认当前站点" value="一级直营网点"></el-option>
                <el-option label="加盟网点" value="加盟网点"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="订单录入员">
              <el-select v-model="form.region2" placeholder="请选择">
                <el-option label="默认当前站点" value="一级直营网点"></el-option>
                <el-option label="加盟网点" value="加盟网点"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
             <el-input type="checkbox" value="checkbox" checked=""><span>启用状态</span></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- 打印模板 -->
      <div class="middle" style="width:100%;height:100%;margin-top:10px;">
        <div class="top" style="width:100%;height:150px;margin-bottom:6px;border: 1px solid rgba(204, 204, 204, 1);">
          <div class="title_">打印模板</div>
          <div style="width:100%;">

            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;">
              <el-form-item label="模板名称" >
                <el-select v-model="form.region3" placeholder="请选择">
                  <el-option label="默认当前站点" value="一级直营网点"></el-option>
                  <el-option label="加盟网点" value="加盟网点"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="模板编号">
                <el-input style="width:157px;height:18px;" placeholder="系统自动带出编号"></el-input>
              </el-form-item>
              <el-form-item label="模板版本号">
                <el-input style="width:157px;height:18px;" placeholder="系统自动生成"></el-input>
              </el-form-item>
            </el-form>

            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;">
              <el-form-item label="纸张类型" >
                <el-select v-model="form.region4" placeholder="请选择">
                  <el-option label="默认当前站点" value="一级直营网点"></el-option>
                  <el-option label="加盟网点" value="加盟网点"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="智障规格">
              <el-input style="width:71px;height:18px;" value="cm">*</el-input>
              <el-input style="width:71px;height:18px;" value="cm"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input type="checkbox" value="checkbox" checked=""><span>启用状态</span></el-input>
              </el-form-item>
              <el-form-item label="">

              </el-form-item>
            </el-form>

            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;">
              <el-form-item label="系统脱单号" >
                <el-select v-model="form.region5" placeholder="请选择">
                  <el-option label="默认当前站点" value="一级直营网点"></el-option>
                  <el-option label="加盟网点" value="加盟网点"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单录入公司">
                <el-select v-model="form.region6" placeholder="请选择">
                  <el-option label="默认当前站点" value="一级直营网点"></el-option>
                  <el-option label="加盟网点" value="加盟网点"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="订单录入员">
                <el-select v-model="form.region7" placeholder="请选择">
                  <el-option label="默认当前站点" value="一级直营网点"></el-option>
                  <el-option label="加盟网点" value="加盟网点"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="">
                <el-button size="small">编辑模板</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <!-- 其他信息 -->

      <div class="below" style="width:100%;height:100%;margin-top:10px;">
          <el-table :data="tableData3" border style="width: 100%" height="250">
            <el-table-column border prop="date" label=" 模板编号" width="150"></el-table-column>
            <el-table-column prop="name" label="模板名称" width="150"></el-table-column>
            <el-table-column prop="province" label="模板类型" width="150"></el-table-column>
            <el-table-column prop="city" label="使用客户" width="120"></el-table-column>
            <el-table-column prop="address" label="模板版本号" width="300"></el-table-column>
            <el-table-column prop="zip" label="模板新名称" width="120"></el-table-column>
            <el-table-column prop="zip" label="启用状态" width="120"></el-table-column>
            <el-table-column prop="zip" label="纸张类型" width="120"></el-table-column>
            <el-table-column prop="zip" label="纸张长CM" width="120"></el-table-column>
            <el-table-column prop="zip" label="纸张宽CM" width="120"></el-table-column>
            <el-table-column prop="zip" label="创建人" width="120"></el-table-column>
            <el-table-column prop="zip" label="创建时间" width="120"></el-table-column>
            <el-table-column prop="zip" label="修改人" width="120"></el-table-column>
            <el-table-column prop="zip" label="修改时间" width="120"></el-table-column>
          </el-table>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
            :total="40">
          </el-pagination>
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        currentPage:1,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        tableData: [
          {
            date: '',
            name: '',
            address: ''
          }
        ],
        tableData3:[
          {
            date: '',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: ""
          },
        ]
      }
    },
    methods:{
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
  .el-form{
    height: 35px;
    display:inline-block;
  }
  .el-form-item {
    display:inline-block;
    margin: 6px;
  }
  #left .el-form-item__label {
    padding:1px;
  }
  #right .el-form-item__label {
    padding:1px;
  }

</style>