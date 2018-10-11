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


            <!-- 异常提报 -->
            <div class="section" style="margin-top:6px;height:100%;border: 1px solid rgba(204, 204, 204, 1);">
                <div class="title_">异常提报</div>
                <div style="margin:10px;">
                    <el-tabs type="border-card">
                      <el-tab-pane label="货物异常提报">
                        <div style="margin-top:6px;width:70%;height:245px;border: 1px solid rgba(204, 204, 204, 1);">
                            <el-form :label-position="labelPosition" label-width="100px" style="display:block;margin-top:6px;">
                              <el-form-item label="运单编号">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                              <el-form-item label="异常类型名称">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                              <el-form-item label="处理站点">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;margin-top:10px;">
                              <el-form-item label="异常类型描述">
                                <el-input style="width:745px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;margin-top:18px;">
                              <el-form-item label="问题描述">
                                <el-input style="width:745px;" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form style="margin-top:18px;" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                              <el-form-item style="display:inline-block;" label="上传图片">
                               <input  type="file" value="">
                              </el-form-item>
                            </el-form>
                        </div>
                      </el-tab-pane>

                      <el-tab-pane label="车线异常提报">
                        <div style="margin-top:6px;width:70%;height:275px;border: 1px solid rgba(204, 204, 204, 1);">
                            <el-form :label-position="labelPosition" label-width="100px" style="display:block;margin-top:6px;">
                                <el-form-item label="车牌编号">
                                  <el-input type="" name=""></el-input>
                                </el-form-item>
                                <el-form-item label="异常类型名称">
                                  <el-input type="" name=""></el-input>
                                </el-form-item>
                                <el-form-item label="处理/通知站点">
                                  <el-input type="" name=""></el-input>
                                </el-form-item>
                            </el-form>

                            <el-form :label-position="labelPosition" label-width="100px" style="display:block;margin-top:6px;">
                                <el-form-item label="车线方向">
                                   <el-input type="" name=""></el-input>
                                </el-form-item>
                                <el-form-item label="上报主驾驶员">
                                    <el-input type="" name=""></el-input>
                                </el-form-item>
                                <el-form-item label="异常类型描述">
                                  <el-input style="width:745px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                                </el-form-item>
                                <el-form-item label="问题描述" style="margin-top:6px;">
                                    <el-input style="width:745px;" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
                                </el-form-item>
                                <el-form-item style="display:inline-block;margin-top:6px;" label="上传图片">
                                   <input  type="file" value="">
                                </el-form-item>
                            </el-form>
                        </div>
                      </el-tab-pane>

                    <el-tab-pane label="库存中转异常提报">
                        <div style="margin-top:6px;width:80%;height:290px;border: 1px solid rgba(204, 204, 204, 1);">
                            <el-form :label-position="labelPosition" label-width="100px" style="display:block;margin-top:6px;">
                              <el-form-item label="异常编号">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                              <el-form-item label="上报站点">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form :label-position="labelPosition" label-width="100px" style="display:block;margin-top:6px;">
                              <el-form-item label="异常类型名称">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                              <el-form-item label="处理站点">
                                <el-input type="" name=""></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;margin-top:6px;">
                              <el-form-item label="异常类型描述">
                                <el-input style="width:745px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;margin-top:18px;">
                              <el-form-item label="问题描述">
                                <el-input style="width:745px;" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
                              </el-form-item>
                            </el-form>
                            <el-form style="margin-top:18px;" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                              <el-form-item style="display:inline-block;" label="上传图片">
                               <input  type="file" value="" style="width:157px;height:25px;">
                              </el-form-item>
                            </el-form>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
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

    }
    .el-form-item {
        display: inline-block;
        margin-left: 30px;
        margin-bottom: 0px;

    }
    input {
        width: 153px;
        height:18px;
    }
</style>