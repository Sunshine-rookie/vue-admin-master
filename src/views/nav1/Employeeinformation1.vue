<template>
<div>
  <div class="wdgl">
   <!-- 按钮 -->
    <div id="head" style="height: 26px;">
      <el-button size="mini" type="text" @click="dialogFormVisible = true"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
      <el-button size="mini" type="text" @click="query" ><img src="../../assets/img/search.png" alt="">查询</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/edit.gif" alt="">编辑</el-button>
      <el-button size="mini" type="text" @click="delete1"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
      <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
      <el-button size="mini" type="text" @click="handleDownload"><img src="../../assets/img/export.png" alt="">导出</el-button>
      <el-button size="mini" type="text" ><img src="../../assets/img/saveb.png" alt="">退出</el-button>
    </div>


    <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
      <!-- 查询条件 -->
      <div class="query">
        <div class="title_">查询条件</div>
        <div class="query" style="height:85px;margin-top:6px;">
            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign" >
              <el-form-item label="入职日期">
                <el-date-picker v-model="value" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="员工姓名" prop="name">
                <el-input type="" name="" v-model="filters.name"></el-input>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-select v-model="formInline.region1" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="在职情况">
                <el-select v-model="formInline.region2" placeholder="请选择">
                  <el-option label="离职" value="离职"></el-option>
                  <el-option label="在职" value="在职"></el-option>
                </el-select>
              </el-form-item>
            </el-form>

            <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="截止">
                <el-date-picker v-model="value1" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="手机号码">
                <el-input type="" name=""></el-input>
              </el-form-item>
              <el-form-item label="所属部门">
                <el-select v-model="formInline.region3" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div style="margin-top:10px;height: 800px;" id="tableid">
        <el-table ref="multipleTable" :data="tableData3" border fixed="left" height="660" style="width: 100%;overflow-y: scroll;" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120" fixed>
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" fixed></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120"></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <el-table-column prop="goodsName" label="员工姓名" width="120" ></el-table-column>
            <el-table-column prop="price" label="联系电话" width="120" ></el-table-column>
            <!-- <el-table-column prop="employeeNo"  label="员工工号" width="120"></el-table-column>
            <el-table-column prop="employeeName" label="员工姓名" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="dotNo" label="所属网点" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="dotName" label="所属部门" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="orgNo" label="所属部门编码" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="jobName" label="岗位职称" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="birthday" label="出生年月" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="entryDate" label="入职日期" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="education" label="学历" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="originPlace" label="籍贯" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="homeAddress" label="家庭住址" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="presentAddress" label="现居住地" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="istrain" label="是否已培训" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="leaveDate" label="离职日期" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="isactive" label="是否已失效" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="createUserName" label="创建人" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="creatTime" label="创建时间" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="modifyUserName" label="最后修改人" width="120" show-overflow-tooltip></el-table-column>
            <el-table-column prop="modifyTime" label="最后修改时间" width="130" show-overflow-tooltip></el-table-column> -->
          </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="20" layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
    </div>

    <!-- 新增 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-col :span="24" class="infotitle">
        <strong>基础信息</strong>
        <el-checkbox v-model="checked">启用</el-checkbox>
      </el-col>
          <el-col :span="24" style="width: 100%;margin:6px 0;">
            <el-form :label-position="labelPosition" label-width="100px" :model="addForm" :rules="addFormRules">
              <el-form-item label="员工工号">
               <el-input type="" name="" v-model="value0" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="员工姓名" prop="name">
                <el-input type="" name="" v-model="addForm.name"></el-input>
              </el-form-item>
              <el-form-item label="所属网点">
                <el-select v-model="formInline.region4" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所属部门">
                <el-select v-model="formInline.region5" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="岗位职称">
                <el-select v-model="formInline.region6" placeholder="请选择">
                  <el-option label="经理" value="经理"></el-option>
                  <el-option label="主管" value="主管"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="addForm.sex">
                  <el-radio class="radio" :label="1">男</el-radio>
                  <el-radio class="radio" :label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="入职日期">
                <el-date-picker v-model="value2" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="出生年月">
                <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
              </el-form-item>
              <el-form-item label="籍贯">
                <el-select v-model="formInline.region8" placeholder="请选择">
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学历">
                <el-select v-model="formInline.region9" placeholder="请选择">
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="大专" value="大专"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="是否已培训">
                <el-select v-model="formInline.region10" placeholder="请选择">
                  <el-option label="已培训" value="已培训"></el-option>
                  <el-option label="未培训" value="未培训"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="培训员" v-model="addForm.trainer">
                <el-input type="" name=""></el-input>
              </el-form-item>
              <el-form-item label="现居住地" v-model="addForm.liveaddr">
                <el-input style="width:419px;height:25px;">
                </el-input>
              </el-form-item>
              <el-form-item label="家庭住址" v-model="addForm.addr">
                <el-input style="width:419px;height:25px;">
                </el-input>
              </el-form-item>
            </el-form>
          </el-col :span="24">
      <el-col :span="24" class="infotitle">
        <strong>联络信息</strong>
      </el-col>
      <el-col :span="24" style="width: 100%;margin:6px 0;">
        <el-form :label-position="labelPosition" label-width="100px" :model="addForm" :rules="addFormRules">
          <el-form-item label="手机" v-model="addForm.mobile">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="E-mail" v-model="addForm.email">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="QQ" v-model="addForm.qq">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人" v-model="addForm.friend">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="联系人电话" v-model="addForm.Contac">
            <el-input type="" name=""></el-input>
          </el-form-item>
        </el-form>

      </el-col>
      <el-col :span="24"slot="footer" class="dialog-footer">
        <el-button type="success" @click.native="addSubmit">保 存 </el-button>
        <el-button type="warning"  @click="dialogFormVisible = false">关 闭</el-button>
      </el-col>
    </el-dialog>

  </div>
</div>
</template>

<script>
import axios from 'axios'
// import util from '../../common/js/util'
// import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
  export default {
    data() {
      return {
        filters: {
          name: ''
        },
        checkList:[],
        list: null,
        show:'',
        listLoading: true,
        val:'',
        multipleTable:[],
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        formInline: {
          user: '',
          region1: '',
          region2: '',
          region3: '',
          region4: '',
          region5: '',
          region6: '',
          region7: '',
          region8: '',
          region9: '',
          region10: ''
        },
        checked: true,
        value0:'',
        value:'',
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        input2:'',
        currentPage:1,
        inputInfo:'',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        rows:[
        ],
        tableData3: [
          // {
          //   id: 0,
          //   employeeNo: "123",
          //   employeeName: "456",
          //   phone: "4545",
          //   dotNo: "3343",
          //   dotName: "3434",
          //   orgNo: "3434",
          //   jobName: "4343",
          //   birthday: "",
          //   entryDate: "",
          //   education: "",
          //   originPlace: "",
          //   homeAddress: "",
          //   presentAddress: "",
          //   istrain: "",
          //   leaveDate: "",
          //   isactive: "",
          //   createUserName: "",
          //   creatTime: "",
          //   modifyUserName: "",
          //   modifyTime: ""
          // }
              // {
              //     "goodsId": 1,
              //     "goodsName": "香辣鸡腿堡",
              //     "price": 18
              // },
              // {
              //     "goodsId": 2,
              //     "goodsName": "田园鸡腿堡",
              //     "price": 15
              // },
              // {
              //     "goodsId": 3,
              //     "goodsName": "和风汉堡",
              //     "price": 15
              // },
              // {
              //     "goodsId": 4,
              //     "goodsName": "大包薯条",
              //     "price": 18
              // },
              // {
              //     "goodsId": 5,
              //     "goodsName": "脆皮炸鸡腿",
              //     "price": 20
              // },
              // {
              //     "goodsId": 6,
              //     "goodsName": "魔法鸡块",
              //     "price": 20
              // },
              // {
              //     "goodsId": 7,
              //     "goodsName": "可乐大杯",
              //     "price": 10
              // },
              // {
              //     "goodsId": 8,
              //     "goodsName": "雪顶咖啡",
              //     "price": 18
              // },
              // {
              //     "goodsId": 9,
              //     "goodsName": "儿童欢乐套餐",
              //     "price": 25
              // }
        ],
        multipleSelection: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        filters: {
          name: ''
        },
        users: [],
        total: 0,
        page: 1,
        listLoading: false,
        sels: [],//列表选中列

        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        //编辑界面数据
        editForm: {
          id: 0,
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },

        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        addFormRules: {
          name: [
            { required: true, message: '请输入姓名!!!', trigger: 'blur' }
          ],
          sex:[
            { required: true, message: '请选择性别！！！', trigger: 'blur' }
          ]
        },
        //新增界面数据
        addForm:{
          name: '',
          sex: '',
          age: 0,
          trainer:'',
          liveaddr:'',
          mobile:'',
          email:'',
          qq:'',
          friend:'',
          Contac:'',
          addr:'',
          birth: '',
          addr: ''
        }
      }
    },
    methods: {
      handleSizeChange(val) {
       // console.log(`每页 ${val} 条`);
       this.page = val;
       query();
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
     },
      //获取数据列表
      query(){
        let para ={
            name:this.filters.name
           }
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response=>{
           //console.log(response);
           //console.log(this.tableData3);
           //console.log(response.data);

           this.tableData3.name=response.data.goodsName;
           this.tableData3=response.data;

        })
      },

    //   //获取用户列表
      getUsers() {
        let para = {
          page: this.page,
          name: this.filters.name
        };
        getUserListPage(para).then((res) => {
          this.total = res.data.total;
          this.users = res.data.users;
          this.listLoading = false;
        });
      },

    },
    mounted() {
      this.getUsers();
    },
    // created:function(){
    //    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    //    .then(response=>{
    //       //console.log(response);
    //       //this.tableData3=response.data;
    //    })
    //    .catch(error=>{
    //        console.log(error);
    //        alert('网络错误，不能访问');
    //    })
    // },
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
    margin-left: 20px;
    margin-right: 20px;
  }
  .el-form-item {
    display:inline-block;
    margin-bottom: 3px;
    margin-right: 30px;
  }
  .info .el-form-item {
    margin-right: 20px;
  }
  .el-input {
    width:157px;
    height:18px;
  }
  .el-table-column {
    width: 120px;
  }

  /* Dialog */
  .el-dialog {
      padding: 0px 20px 0;
      background: #f2f2f2;
      height: 32px;
      line-height: 32px;
  }
  .el-dialog__header {
    background: red;
  }
  .el-dialog__header {
    padding: 20px 20px 0;
  }
  .el-dialog__body {
    padding: 4px 20px;
  }
  #isusing {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  strong {
    margin-right: 10px;
    color: #87b87f !important;
  }
  .infotitle {
    border-bottom: 1px solid #87b87f;
  }
  .el-form-item__error {
      width: 100%;
      top: 8px;
      left: 160px;
  }
</style>