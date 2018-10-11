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
      <div style="height:90px;border: 1px solid rgba(204, 204, 204, 1);">
        <div class="title_">查询条件</div>
        <div style="height:56px;line-height:56px;">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="模板名称" size="small">
                <el-input type="text" name="" style="width:157px;height:18px;"></el-input>
              </el-form-item>
            </el-form>
        </div>
      </div>
    <!-- 短信模板设置 -->
      <div style="margin-top:6px;height:100%;border: 1px solid rgba(204, 204, 204, 1);">
        <div class="title_">短信模板设置</div>

        <div style="height:100%;">
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="模板名称" size="small">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="选项" value="选项"></el-option>
                  <el-option label="全部" value="全部"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="模板编号" size="small">
                <el-input type="text" name="" style="width:157px;height:18px;"></el-input>
              </el-form-item>
            </el-form>
            <el-form style="height:50px;margin-top: 10px;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="异常类型描述" size="small">
                <el-input style="width:800px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                </el-input>
              </el-form-item>
            </el-form>
            <p style="margin-left:30px;">可选表字段<span style="color:#FF0000;">（说明：对应发送节点的可选动态数据项，可直接点击或拖拽直上面短信模板编辑栏内）</span></p>
        </div>
        <div style="height:100%;">
        </div>

      </div>

      <!-- 底部 -->
      <div style="margin-top:6px;">
            <el-table border :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
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
  }
  .el-form-item {
    margin-left: 20px;
    margin-bottom:3px;
    display:inline-block;
  }

 .el-textarea {
     display: inline-block;
     width: 100%;
     vertical-align: top;
 }

</style>