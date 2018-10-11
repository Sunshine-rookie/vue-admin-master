<template>

    <div>
        <div class="ms-doc">
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

            <div class="container1" style="display:flex;">
                <div class="side" style="width:20%;height:680px;">
                    <div class="title_">部门结构</div>
                    <el-tree :data="data1" :props="defaultProps"  style="width:100%;height:645px;border:0;overflow:auto;"></el-tree>
                </div>
                <div class="section" style="width:77%;height:100%;margin:6px 0 0 20px;">
                    <div class="top" style="width:100%;height:280px;">
                        <div class="title_">部门信息编辑</div>
                        <div style="margin:6px;">
                            <el-form :label-position="labelPosition" label-width="100px">
                                <el-form-item label="使用网点类型">
                                    <el-select v-model="form.region1" placeholder="请选择">
                                      <el-option label="一级直营网点" value="一级直营网点"></el-option>
                                      <el-option label="一级加盟网点" value="一级加盟网点"></el-option>
                                      <el-option label="一级财务中心" value="一级财务中心"></el-option>
                                      <el-option label="二级财务中心" value="二级财务中心"></el-option>
                                      <el-option label="总部" value="总部"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="部门编号">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="100px">
                                <el-form-item label="部门名称">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="部门拼音">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="100px">
                                <el-form-item label="上级部门">
                                    <el-select v-model="form.region2" placeholder="请选择">
                                      <el-option label="一级直营网点" value="一级直营网点"></el-option>
                                      <el-option label="一级加盟网点" value="一级加盟网点"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="所属层级">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="100px">
                                <el-form-item label="业务管理部门">
                                    <el-select v-model="form.region3" placeholder="请选择">
                                      <el-option label="一级直营网点" value="一级直营网点"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="部门描述">
                                    <el-input type="textarea" style="width:400px;height:25px;"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div style="width:100%;height:388px;margin-top:10px;">
                        <el-table :data="tableData" border style="width: 100%;">
                            <el-table-column prop="date" label="部门编号" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="部门名称" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="部门全称" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="使用网点类型" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="上级部门" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="部门拼音" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="所属层级" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="部门描述" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="创建人" width="180">
                            </el-table-column>
                            <el-table-column prop="date" label="创建时间" width="180">
                            </el-table-column>
                        </el-table>
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
        data: function(){
            return {
                labelPosition: 'right',
                formInline: {
                    name: '',
                    region: '',
                    type:'',
                },
                form: {
                  name: '',
                  region1: '',
                  region2: '',
                  region3: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
                currentPage:1,
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
                    }

                ],
                data1: [
                    {
                        label: '一级直营网点',
                        children: [
                            {
                                label: '二级客服部',
                                children: [{
                                    label: '销售部'
                                },
                                    {label: '二级销售部'}
                                ]
                            }]
                    },
                    {
                        label: '一级加盟网点',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        },
                            {
                                label: '二级 2-2',
                                children: [{
                                    label: '三级 2-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            },
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
    .container1 {
        width:100%;
        height:700px;
        margin-top:10px;
        border: 1px solid rgba(204, 204, 204, 1);
    }
    .container1 .title_ {
        height: 34px;
        background: #eef1f6;
        line-height: 34px;
        font-size: 13px;
        font-weight: 800;
        border-left: 5px solid #e57715;
        padding-left:3px;
    }
    .side {
        margin-top: 6px;margin-left: 6px;
        border: 1px solid rgba(204, 204, 204, 1);

    }
    .top{
        border: 1px solid rgba(204, 204, 204, 1);

    }
    .el-form-item {
        margin-bottom: 0px;
    }
    .el-input {
      width:153px;
      height:18px;
    }
</style>
