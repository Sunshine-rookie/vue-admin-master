<template>
<div class="Transship">
    <!-- 按钮 -->
    <div id="head" style="height: 26px;">
        <el-button size="mini" type="text" @click="dialogFormVisible = true"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
        <el-button size="mini" type="text" @click="query"><img src="../../assets/img/search.png" alt="">查询</el-button>
        <el-button size="mini" type="text"><img src="../../assets/img/edit.gif" alt="">编辑</el-button>
        <el-button size="mini" type="text"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
        <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
        <el-button size="mini" type="text" @click="excelExport"><img src="../../assets/img/export.png" alt="">导出</el-button>
        <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">退出</el-button>
    </div>

    <div class="form">
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item label="中转外发商名称">
            <el-input type="text"></el-input>
          </el-form-item>

          <el-form-item label="中转外发商代码">
            <el-input type="text"></el-input>
          </el-form-item>

          <el-form-item label="中转外发商联系人">
            <el-input type="text"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input type="text"></el-input>
          </el-form-item>

          <el-form-item label="结款方式">
            <el-input type="text"></el-input>
          </el-form-item>
        </el-form>
    </div>

    <el-col :span="11" class="table">
        <el-button type="info" style="width: 150px;">编辑中转外发商信息</el-button>
        <el-table :data="tableData3" border style="width: 100%;margin: 6px 0;" height="350">
            <el-table-column prop="date"label="序号"width="80" type="index"></el-table-column>
            <el-table-column prop="date"label="中转外发商名称"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商代码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商联系人"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商手机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商座机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商差错率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商及时签收率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商时效评级"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商回单返回及时率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商应缴到付款总额"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发运费付款方式"width="150"></el-table-column>
        </el-table>
    </el-col>
    <el-col :span="1">
    </el-col>
    <el-col :span="12" class="table">
        <el-button type="info" style="width: 150px;">编辑中转外路由信息</el-button>
        <el-table :data="tableData3" border style="width: 100%;margin: 6px 0;" height="350">
            <el-table-column prop="date"label="序号"width="80" type="index"></el-table-column>
            <el-table-column prop="date"label="中转外发商名称"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商代码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商联系人"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商手机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商座机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商差错率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商及时签收率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商时效评级"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商回单返回及时率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商应缴到付款总额"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发运费付款方式"width="150"></el-table-column>
        </el-table>
    </el-col>
    <el-col :span="24" class="table">
        <el-button type="info" style="width: 150px;">编辑目的站信息</el-button>
        <el-table :data="tableData3" border style="width: 97%;margin-top: 6px;" height="250">
            <el-table-column prop="date"label="序号"width="80" type="index"></el-table-column>
            <el-table-column prop="date"label="中转外发商名称"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商代码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商联系人"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商手机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商座机号码"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商差错率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商及时签收率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商时效评级"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商回单返回及时率"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发商应缴到付款总额"width="150"></el-table-column>
            <el-table-column prop="date"label="中转外发运费付款方式"width="150"></el-table-column>
        </el-table>
    </el-col>


</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [
            {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }
        ]
      }
    },
    methods:{

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

    .el-form-item {
        display: inline-block;
    }
    .form {
        margin: 8px 0;
    }
    .table {
        margin-left: 20px;
    }
</style>