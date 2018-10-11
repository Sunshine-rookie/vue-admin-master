<template>
    <div>
        <div class="wdgl">

           <!-- 按钮 -->
           <div id="head" style="margin-top:6px;height: 26px;">
              <el-button size="mini" type="text"><img src="../../assets/img/add-btn.png" alt="">新增</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/search.png" alt="">查询</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/edit.gif" alt="">编辑</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/del-btn.gif" alt="">删除</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">保存</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/export.png" alt="">导出</el-button>
              <el-button size="mini" type="text"><img src="../../assets/img/saveb.png" alt="">退出</el-button>
           </div>

            <!-- 异常类型维护 -->
            <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
                <div class="title_">异常类型维护</div>
                <div style="height: 170px;margin-top:6px;display:flex;">
                    <div style="width:40%;">
                        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                            <el-form-item label="所属异常分类">
                                <el-select v-model="form.region1" placeholder="请选择">
                                    <el-option label="时效类" value="时效类"></el-option>
                                    <el-option label="破损类" value="破损类"></el-option>
                                    <el-option label="车线类" value="车线类"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="异常类型编号">
                                <el-input type="text"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                            <el-form-item label="异常类型名称">
                                 <el-input type="text"></el-input>
                            </el-form-item>
                            <el-form-item label="异常类型编号">
                                <el-input type="text"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                            <el-form-item label="默认受理方">
                                <el-select v-model="form.region2" placeholder="请选择">
                                    <el-option label="开单站点" value="开单站点"></el-option>
                                    <el-option label="总部" value="总部"></el-option>
                                    <el-option label="前一站点" value="前一站点"></el-option>
                                    <el-option label="派送站点" value="派送站点"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <el-form style="margin-top: 8px;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                            <el-form-item label="所属异常分类">
                                <el-input style="width:448px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div style="width:20%;height:100%;">
                        <div style="width:100%;height:95px;border: 1px solid rgba(204, 204, 204, 1);">
                            <p style="margin:0;line-height:35px;text-align:center;background:rgb(242, 242, 242);">使用对象(或使用情境)</p>
                            <div style="padding:10px;margin-bottom:10px;">
                                <el-row>
                                    <el-col :span="8">
                                        <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>站点</span>
                                    </el-col>

                                    <el-col :span="8">
                                    <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>中心</span>
                                    </el-col>
                                    <el-col :span="8">
                                    <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>车线</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <input style="width:15px;height:15px;"  type="checkbox" value="checkbox" checked=""><span>货物异常提报</span>
                                    </el-col>
                                    <el-col :span="12">
                                        <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>车线异常提报</span>
                                    </el-col>
                                </el-row>
                            </div>
                            <el-row style="padding: 0 10px;">
                                <el-col :span="8">
                                    <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span启用</span>
                                </el-col>

                                <el-col :span="8">
                                <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>处理依据</span>
                                </el-col>
                                <el-col :span="8">
                                <input style="width:15px;height:15px;" type="checkbox" value="checkbox" checked=""><span>是否需审核</span>
                                </el-col>
                            </el-row>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 底部 -->
            <div style="margin-top:6px;">
                <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column label="启用状态" type="selection" width="100">
                    </el-table-column>
                    <el-table-column label="异常类型编号" width="160">
                      <template scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column prop="name" label="异常类型名称" width="160">
                    </el-table-column>
                    <el-table-column prop="address" label="所属异常分类" width="160">
                    </el-table-column>
                    <el-table-column prop="name" label="异常类型编号" width="160">
                    </el-table-column>
                    <el-table-column prop="name" label="异常类型描述" width="160">
                    </el-table-column>
                    <el-table-column prop="name" label="默认受理方" width="160">
                    </el-table-column>
                    <el-table-column prop="name" label="处理依据" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="创建人" width="151">
                    </el-table-column>
                    <el-table-column prop="name" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="最后修改人" width="150">
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
                radio:1,
                arr:[],

                textarea:'',
                msgData:[
                ],
                tableData3: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区',
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
        height:30px;
        margin-left: 20px;
        margin-bottom: 3px;

    }
    .el-form-item {
        display: inline-block;
        margin-left: 30px;

    }
    input {
        width: 153px;
        height:18px;
    }
</style>