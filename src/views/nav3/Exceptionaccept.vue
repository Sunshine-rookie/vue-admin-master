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

            <!--  查询条件 -->
            <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
                <div class="title_"> 查询条件</div>
                <el-row>
                    <el-col :span="4" style="padding:10px 0 10px 60px;">
                        <input type="checkbox" name="" style="width:15px;height:15px;vertical-align: middle;"><span>按单号查询</span>
                        <span style="margin-left:60px;">取消</span>
                        <el-input style="width:200px;display:block;margin-top: 3px;" type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
                    </el-col>

                    <el-col :span="4">
                        <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
                          <el-form-item label="登记日期">
                            <el-date-picker v-model="value1" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="至">
                            <el-date-picker v-model="value2" size="small" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="处理情况">
                            <el-select style="width:157px;height:25px;">
                              <option value="已处理">已处理</option>
                              <option value="不受理">不受理</option>
                              <option value="待处理">待处理</option>
                              <option value="全部">全部</option>
                            </el-select>
                          </el-form-item>
                        </el-form>
                    </el-col>

                    <el-col :span="4">
                      <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
                        <el-form-item label="登记站点">
                          <el-select style="width:157px;height:25px;">
                            <option value="省份">省份</option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="所属异常分类">
                          <el-select style="width:157px;height:25px;">
                            <option value="时效类">时效类</option>
                            <option value="破损类">破损类</option>
                            <option value="车线类">车线类</option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="车牌号码">
                          <el-select style="width:157px;height:25px;">
                            <option value="车牌号码">车牌号码</option>
                          </el-select>
                        </el-form-item>
                      </el-form>
                    </el-col>

                    <el-col :span="4">
                      <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
                        <el-form-item label="处理站点">
                          <el-select style="width:157px;height:25px;">
                            <option value="省份">省份</option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="异常类型名称">
                          <el-select style="width:157px;height:25px;">
                            <option value="异常">异常</option>
                          </el-select>
                        </el-form-item>
                      </el-form>
                    </el-col>
                </el-row>
            </div>
            <!-- 表格 -->
            <div style="margin-top:6px;">
              <el-table :data="tableData3" border style="width: 100%" height="250">
                  <el-table-column fixed prop="date" label="处理情况" width="150" min-width="80"></el-table-column>
                  <el-table-column prop="name" label="车辆编号/运单编号" width="150"></el-table-column>
                  <el-table-column prop="name" label="异常类型名称" width="120"></el-table-column>
                  <el-table-column prop="name" label="所属异常分类" width="120"></el-table-column>
                  <el-table-column prop="name" label="始发站点" width="120"></el-table-column>
                  <el-table-column prop="name" label="始发日期" width="120"></el-table-column>
                  <el-table-column prop="name" label="接收站点" width="120"></el-table-column>
                  <el-table-column prop="name" label="车线方向" width="120"></el-table-column>
                  <el-table-column prop="name" label="异常类型描述" width="120"></el-table-column>
                  <el-table-column prop="name" label="问题描述" width="120"></el-table-column>
                  <el-table-column prop="name" label="处理方式" width="120"></el-table-column>
                  <el-table-column prop="name" label="处理意见" width="120"></el-table-column>
                  <el-table-column prop="name" label="奖励站点" width="120"></el-table-column>
                  <el-table-column prop="name" label="奖励提报站点金额" width="150"></el-table-column>
              </el-table>
            </div>

            <!-- 异常处理区域 -->
            <div style="margin-top:6px;">
              <div class="title_"> 异常处理区域</div>
              <div >
                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="运单编号：">
                    <input type="" name="" style="border:0;border-bottom:1px solid black;text-align:center;">
                  </el-form-item>
                  <el-form-item label="派送时间：">
                    <input type="" name="" style="border:0;border-bottom:1px solid black;text-align:center;">
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="登记站点：">
                    <input type="" name="" style="border:0;border-bottom:1px solid black;text-align:center;">
                  </el-form-item>
                  <el-form-item label="异常所属分类：">
                    <input type="" name="" style="border:0;border-bottom:1px solid black;text-align:center;">
                  </el-form-item>
                  <el-form-item label="异常类型名称：">
                    <input type="" name="" style="border:0;border-bottom:1px solid black;text-align:center;">
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="问题描述：">
                    <el-input style="width:760px;margin-top:6px;" type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;margin: 6px 0;">
                  <el-form-item label="点击查看图片：">
                    <el-input style="width:760px;margin:6px 0;" type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>

                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="处理情况 ">
                   <el-select style="width:157px;height:25px;">
                      <option value="已处理">已处理</option>
                      <option value="不受理">不受理</option>
                      <option value="待处理">待处理</option>
                      <option value="全部">全部</option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="责任站点 ">
                    <el-select style="width:157px;height:25px;">
                       <option value=""></option>
                     </el-select>
                  </el-form-item>
                  <el-form-item label="责任人 ">
                    <el-select style="width:157px;height:25px;">
                      <option value=""></option>
                    </el-select>
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="处理意见：">
                    <el-input style="width:760px;margin-top:6px;" type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
                    </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="处理依据：">
                    <el-input style="width:760px;margin:6px 0;" type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="处理方式 ">
                    <el-select style="width:157px;height:25px;">
                      <option value="费用">费用</option>
                      <option value="警告">警告</option>
                      <option value="通报批评">通报批评</option>
                    </el-select>
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="奖给站点 ">
                    <el-select style="width:157px;height:25px;">
                      <option value=""></option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="奖给金额 ">
                    <input type="" name="" >
                  </el-form-item>
                  <el-form-item label="奖励提报人 ">
                    <input type="" name="" >
                  </el-form-item>
                  <el-form-item label="奖给金额 ">
                    <input type="" name="" >
                  </el-form-item>
                </el-form>

                <el-form :label-position="labelPosition" label-width="120px" style="width:100%;">
                  <el-form-item label="处罚站点 ">
                    <el-select style="width:157px;height:25px;">
                      <option value=""></option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="处罚金额 ">
                    <input type="" name="" >
                  </el-form-item>
                  <el-form-item label="处罚责任人 ">
                    <input type="" name="" >
                  </el-form-item>
                  <el-form-item label="处罚金额 ">
                    <input type="" name="" >
                  </el-form-item>
                </el-form>
              </div>
              <el-form style="text-align:center;margin-top:6px;">
                <el-button style="width:100px;height:30px;" type="info" size="small">回复保存</el-button>
                <el-button style="width:100px;height:30px;margin-left:60px;" type="info" size="small">取消</el-button>
              </el-form>
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
                value1:'',
                value2:'',
                pickerOptions0: {
                  disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                  }
                },
                tableData3: [
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
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                  }
                ]
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
        margin-bottom: 0px;
    }
    .el-form-item {
        display: inline-block;
        margin-left:20px;
        margin-bottom: 0px;
    }
    .el-upload--picture-card {
        width: 50px;
        height: 50px;
    }
    .el-input:focus {
      outline:none;
    }
    input:focus {
      outline:none;
    }
</style>