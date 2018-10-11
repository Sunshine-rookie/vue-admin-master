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

    <!-- section 查询条件 start -->
    <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
      <div class="query">
        <div class="title_">查询条件</div>
        <div class="info">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- quote 网点信息编辑 start -->
      <div class="quote">
        <div class="title_">网点信息编辑</div>
        <div class="info" style="height:100%;">
          <div class="top">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="middle">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="公司地址">
                <el-input v-model="formLabelAlign.name" style="width:418px;"></el-input>
              </el-form-item>
              <el-form-item label="公司坐标" style="margin-left: 20px;">
                <el-input v-model="formLabelAlign.region"></el-input>
              </el-form-item>

              <div style="cursor:pointer;display:inline-block;position:relative;">
                <img @click="add" src="../../assets/img/u798.png" tabindex="0" style="outline:none;position:absolute;top:0px;left:30px;">
               <el-form-item label="">
                <el-checkbox v-model="checked">启用状态</el-checkbox>
               </el-form-item>
              </div>
            </el-form>
            <ul id="dizhi" style="display:block;list-style:none;margin:0;padding:0;" >
              <li v-for="val in arr">
                 <el-form :label-position="labelPosition" label-width="80px" :mode="formLabelAlign">
                    <el-form-item label="分仓名称">
                      <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" style="margin-left: 20px;">
                      <el-input v-model="formLabelAlign.region" style="width:421px;"></el-input>
                    </el-form-item>
                    <el-form-item label="公司坐标" style="margin-left: 20px;">
                      <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                </el-form>
              </li>
            </ul>
            <el-form style="display:block;" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="保额">
                <el-input v-model="formLabelAlign.name" placeholder="最低值默认1700，可改"></el-input>
              </el-form-item>
              <el-form-item label="保费" style="margin-left: 20px;">
                <el-input v-model="formLabelAlign.region"  placeholder="保额*0.003，最低5可改"></el-input>
              </el-form-item>
            </el-form>
          </div>

        </div>
      </div>
    </div>


    <!-- from -->
    <div class="form" style="margin-top: 15px;height:100%;width:100%;">
      <el-row>
        <el-col :span="2">
          <el-tree
            style="overflow-y:scroll;height:455px;"
            :data="data"
            :props="defaultProps"
            node-key="id"
            current-node-key="id"
            default-expand-all
            :expand-on-click-node="true"
            :default-expand-all='false'
            @node-click="handleNodeClick">
          </el-tree>
        </el-col>
        <el-col :span="22">
          <el-table :data="tableData" border style="width: 100%;margin-left:10px;padding-right: 12px;border-top: 1px solid #dfe6ec;" height="420">
            <el-table-column prop="name" label="网点名称" width="150"></el-table-column>
            <el-table-column prop="name" label="网点类型" width="150"></el-table-column>
            <el-table-column prop="name" label="管理模式" width="150"></el-table-column>
            <el-table-column prop="name" label="网点级别" width="150"></el-table-column>
            <el-table-column prop="name" label="上级网点" width="150"></el-table-column>
            <el-table-column prop="name" label="运作日期" width="150"></el-table-column>
            <el-table-column prop="name" label="启用状态" width="150"></el-table-column>
            <el-table-column prop="name" label="省份" width="150"></el-table-column>
            <el-table-column prop="name" label="城市" width="150"></el-table-column>
            <el-table-column prop="name" label="区县" width="150"></el-table-column>
            <el-table-column prop="name" label="公司地址" width="150"></el-table-column>
            <el-table-column prop="zip" label="公司地址坐标" width="150"></el-table-column>
            <el-table-column prop="zip" label="负责人" width="150"></el-table-column>
            <el-table-column prop="zip" label="负责人手机" width="150"></el-table-column>
            <el-table-column prop="zip" label="座机号码" width="150"></el-table-column>
            <el-table-column prop="zip" label="传真号码" width="150"></el-table-column>
            <el-table-column prop="zip" label="保额" width="150"></el-table-column>
            <el-table-column prop="zip" label="保费" width="150"></el-table-column>
            <el-table-column prop="zip" label="创建人" width="150"></el-table-column>
            <el-table-column prop="zip" label="创建时间" width="150"></el-table-column>
            <el-table-column prop="zip" label="修改人" width="150"></el-table-column>
            <el-table-column prop="zip" label="修改时间" width="150"></el-table-column>
          </el-table>
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                :total="40">
          </el-pagination>
        </el-col>
      </el-row>
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
          currentPage:1,
          checked: true,
          arr:[],
          tableData:[
            {name:'王小虎',zip:12312312}
          ],
          tableData0:[
              {
                label: '上海分公司',
                number: '001',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '002',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '上海分公司',
                number: '003',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              }
          ],
          tableData1:[
              {
                label: '云南分公司',
                number: '001',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '002',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              },
              {
                label: '云南分公司',
                number: '003',
                province: '云南',
                city: '普陀区',
                address: '上海市普陀区金沙江路 001 弄',
                zip: 200333
              }
          ],
          data:[
            {
              id:1,
              label:'总部',
              children:[]
            }
          ],
          data1: [
            {
              id:1,
              children:[
                  {
                        id: 2,
                        label: '一级 1',
                        children: [
                        ]
                      },
                    {
                        id: 2,
                        label: '一级 2',
                        children: []
                      },
                    {
                        id: 3,
                        label: '一级 3',
                        children: []
                      }
              ]
            }
          ],
          data2:[
            {
              id:2,
              children:[
                {
                  id: 4,
                  label: '二级 1-1',
                  children: [{
                    id: 9,
                    label: '三级 1-1-1'
                  }, {
                    id: 10,
                    label: '三级 1-1-2'
                  }]
                }
              ]
            }
          ],
          defaultProps: {
          children: 'children',
          label: 'label'
          }
      }
    },
    methods: {
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
      },
      handleNodeClick(data){

      //点击当前节点获取后台数据，然后将这个信息渲染到页面

        //点击当前节点显示出子同一层级
        if (this.data[0].id == this.data1[0].id) {
            this.data[0].children=this.data1[0].children;
        }
        if (this.data1[0].children[0].id == this.data2[0].id) {
            this.data1[0].children[0].children=this.data2[0].children;
        }

        //console.log(data.$treeNodeId);
        //点击时对应渲染到表格中的数据
        if ( data.$treeNodeId == this.data1[0].children[0].id) {
          this.tableData = this.tableData0;
        }
        if ( data.$treeNodeId == this.data2[0].id+1) {
          this.tableData = this.tableData1;
        }

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
    display: inline-block;
    margin-left: 20px;
  }
  .middle .el-form-item {
    display: inline-block;
  }
  .el-table__row {
    height: 26px;
    line-height:26px;
  }
  .el-pagination {
    margin-left: 10px;
  }
</style>