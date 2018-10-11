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

    <!-- section start -->
    <div class="section" style="margin-top:6px;height:100%;border: 1px solid rgba(204, 204, 204, 1);">
        <div class="title_">数据字典编辑区域</div>
        <div class="info" style="height:100%;">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="所属类型">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="普件" value="普件"></el-option>
                <el-option label="快件" value="快件"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="类型编码">
              <el-input type="text" value="系统自动带出"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="类型编码">
              <el-input type="text" value="系统自动带出"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-radio class="radio" v-model="radio" label="1">是否默认</el-radio>
              <el-radio class="radio" v-model="radio" label="2">是否启用</el-radio>
            </el-form-item>
          </el-form>
        </div>
    </div>
    <!-- section end -->

    <!-- from start -->

    <div class="form" style="margin-top: 10px;">
      <el-table :data="tableData4" border style="width: 100%;" max-height="500px">
        <el-table-column prop="date" label="编号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="150">
        </el-table-column>
        <el-table-column prop="province" label="网点类型" width="150">
        </el-table-column>
        <el-table-column prop="city" label="管理模式" width="150">
        </el-table-column>
        <el-table-column prop="address" label="启用状态" width="170">
        </el-table-column>
        <el-table-column prop="zip" label="助记码" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="上级网点" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="运作日期" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="启用状态" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="省份" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="城市" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="城市" width="150">
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
    </div>

    <!-- from end -->

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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        radio:1,
        arr:[],
        currentPage:1,
        msgData:[
        ],
        currentPage:1,
        tableData4: [
          {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          },
          {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          },
          {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          },
          {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          },
          {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
          }
        ],
        data: [
          {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }],
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      add(){
        var ul = document.getElementById('dizhi');
        var li = ul.children[0];
        this.arr.push(li)
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

  .el-pagination .btn-prev {
      padding-left: 1180px;
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

  .el-form-item {
    display: inline-block;
    margin-bottom: 3px;
  }
  .middle .el-form-item {
    display: inline-block;
  }
  .el-table-column {
      text-align: center;
  }
  el-input {
    width:153px;
    height:18px;
  }
  .el-pagination .btn-prev {
      margin-left: 1180px;
  }
</style>