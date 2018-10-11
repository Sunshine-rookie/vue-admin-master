<template>
<div class="custommer">
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

  <!-- 客户资料编辑 -->
  <div class="data">
    <div class="editoar">
        <div class="title_">客户资料编辑</div>
        <div class="info" style="height:100%;">

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="客户编号">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="客户简称">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="客户全称">
              <el-input type="text" style="width: 446px;"></el-input>
            </el-form-item>

            <el-form-item label="助记码">
              <el-input type="text"></el-input>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="客户类型">
              <el-select v-model="form.region1">
                <el-option label="普通" value="普通" ></el-option>
                <el-option label="月结" value="月结" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="客户状态">
              <el-select v-model="form.region2">
                <el-option label="普通1" value="普通1" ></el-option>
                <el-option label="月结2" value="月结2" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="提货方式">
              <el-select v-model="form.region3">
                <el-option label="普通3" value="普通3" ></el-option>
                <el-option label="月结3" value="月结3" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="送货方式">
              <el-select v-model="form.region4">
                <el-option label="普通4" value="普通4" ></el-option>
                <el-option label="月结4" value="月结4" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="客户星级">
              <el-select v-model="form.region5">
                <el-option label="普通5" value="普通5" ></el-option>
                <el-option label="月结5" value="月结5" ></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="所属网点">
              <el-select v-model="form.region6">
                <el-option label="普通6" value="普通6" ></el-option>
                <el-option label="月结6" value="月结6" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="业务员">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="详细地址">
              <el-input type="text" style="width: 446px;"></el-input>
            </el-form-item>

            <el-form-item label="地址坐标">
              <el-input type="text"></el-input>
            </el-form-item>
          </el-form>

          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="审核结算状态">
              <el-select v-model="form.region7">
                <el-option label="普通7" value="普通7" ></el-option>
                <el-option label="月结7" value="月结7" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="结算方式">
              <el-select v-model="form.region8">
                <el-option label="普通8" value="普通8" ></el-option>
                <el-option label="月结8" value="月结8" ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="结算日期">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
            </el-form-item>

            <el-form-item label="折扣比率">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="信用额度">
              <el-input type="text"></el-input>
            </el-form-item>
          </el-form>
        </div>
    </div>

    <div>
        <div class="title_">联系人资料</div>
        <el-table
            :data="tableData"
            border
            style="width: 100%;margin-top: 6px;">
            <el-table-column label="操作" width="180">
              <template scope="scope">
                <el-button
                  size="mini"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)"><el-icon name="plus"></el-icon></el-button>
                <el-button
                  size="mini"
                  type="warning"
                  @click="handleDelete(scope.$index, scope.row)"><el-icon name="minus"></el-icon></el-button>
                <el-button
                  size="mini"
                  type="warning"
                  @click="handleDelete(scope.$index, scope.row)"><el-icon name="edit"></el-icon></el-button>
                <el-button
                  size="mini"
                  type="success"
                  @click="handleDelete(scope.$index, scope.row)"><el-icon name="circle-check"></el-icon></el-button>
              </template>
            </el-table-column>
            <el-table-column label="默认地址">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="联系人">
              <template scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="联系地址">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="短信通知">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="联系电话">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="手机号码">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="所属部门">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
        </el-table>
    </div>

    <div>
        <div class="title_">合同信息</div>
        <el-table :data="tableData" border style="width: 100%;margin-top: 6px;">
            <el-table-column label="操作" width="180">
              <template scope="scope">
                <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"><el-icon name="plus"></el-icon></el-button>
                <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)"><el-icon name="minus"></el-icon></el-button>
                <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)"><el-icon name="edit"></el-icon></el-button>
                <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)"><el-icon name="circle-check"></el-icon></el-button>
              </template>
            </el-table-column>
            <el-table-column label="到期提醒时间">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="合同编号">
              <template scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="合同开始">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="合同截止">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="合同附件">
              <template scope="scope">
                <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"><el-icon name="search"></el-icon></el-button>
                <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"><el-icon name="upload"></el-icon></el-button>
                <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)"><i class="fa fa-cloud-download"></i>
                </el-button>
              </template>
            </el-table-column>
            <el-table-column label="我司签约人">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="客户签约人">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="签约时间">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="签约地点">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
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
          region1:'',
          region2:'',
          region3:'',
          region4:'',
          region5:'',
          region6:'',
          region7:'',
          region8:'',
          date1:''
        },
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
         }]
      }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  .data {
    margin-top: 6px;
  }
  .title_ {
     margin-top: 6px;
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
    margin-left: 30px;
  }
  .el-input {
    width: 157px;
    height: 16px;
  }
</style>