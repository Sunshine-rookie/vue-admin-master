<template>
    <section>
        <!-- 按钮 -->
        <el-col :span="24" id="head" style="height: 26px;" :inline="true" :model="filters">
            <el-button size="mini" type="text" @click="handleAdd"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
            <el-button size="mini" type="text" @click="getUsers"><img src="../../assets/img/search.png" alt="">查询</el-button>
            <el-button size="mini" type="text" @click="batchRemove" :disabled="this.sels.length===0"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
            <el-button size="mini" type="text"><img src="../../assets/img/export.png" alt="">导出</el-button>
        </el-col>

        <!-- 查询条件 -->
        <el-col :span="24" style="margin:6px 0;padding: 3px 0;border: 1px solid rgba(204, 204, 204, 1);">
            <el-col :span="24" class="title_">查询条件</el-col>
                <el-form style="width: 100%;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign" >
                  <el-form-item label="入职日期">
                    <el-date-picker v-model="value1" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="截止日期">
                    <el-date-picker v-model="value2" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
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

            </el-col>
        </el-col>

        <!--列表height="700"-->
        <el-col :span="24" style="height: 700px;">
            <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" height="700" style="width: 100%;" @click="handleMouseDown">
                <el-table-column type="selection" width="50" fixed>
                </el-table-column>
                <el-table-column type="index" width="60" label="序号" fixed>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="80" sortable fixed>
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
                </el-table-column>
                <el-table-column prop="age" label="年龄" width="100" sortable>
                </el-table-column>
                <el-table-column prop="birth" label="生日" width="120" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="180" sortable>
                </el-table-column>
                <el-table-column prop="addr" label="地址" min-width="120" sortable>
                </el-table-column>
                <el-table-column label="操作" width="150"  fixed="right">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination  @size-change="handleSizeChange"  @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="20" layout="total, prev, pager, next" :total="total">
            </el-pagination>
        </el-col>




        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editForm.sex">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="editForm.addr"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--新增界面-->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
            <!-- <el-col :span="24" class="infotitle">
              <strong>基础信息</strong>
              <el-checkbox v-model="checked">启用</el-checkbox>
            </el-col>
            <el-col :span="24" style="width: 100%;margin:6px 0;"> -->
                <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="addForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="addForm.sex">
                            <el-radio class="radio" :label="1">男</el-radio>
                            <el-radio class="radio" :label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <el-form-item label="年龄">
                        <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
                    </el-form-item> -->
                    <el-form-item label="生日">
                        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="现居住地址">
                        <el-input style="width: 200px;" v-model="addForm.addr"></el-input>
                    </el-form-item>
                </el-form>
                <!-- <el-form :label-position="labelPosition" label-width="100px" :model="addForm" :rules="addFormRules">
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
            </el-col>
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
            </el-col> -->
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                value1:'',
                value2:'',
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
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: '',
                    // mobile:'',
                    // email:'',
                    // qq:'',
                    // friend:'',
                    // Contac:''
                }

            }
        },
        methods: {
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '保密';
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            //获取用户列表
            getUsers() {
                let para = {
                    page: this.page,
                    name: this.filters.name
                };
                this.listLoading = true;
                //NProgress.start();
                getUserListPage(para).then((res) => {
                    this.total = res.data.total;
                    this.users = res.data.users;
                    this.listLoading = false;
                    //NProgress.done();
                });
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = { id: row.id };
                    removeUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            },
            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                };
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            editUser(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            addUser(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            //批量删除
            batchRemove: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = { ids: ids };
                    batchRemoveUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            },
            handleMouseDown(event, column){
                console.log(this.$isServer);
                this.dragging = true;
            }
        },
        mounted() {
            this.getUsers();
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
.el-form-item {
    display: inline-block;
}
.toolbar {
    background-color: #fff;
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
.el-loading-mask {
    transition: opacity .01s;
}
</style>