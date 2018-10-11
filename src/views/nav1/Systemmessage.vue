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

    <div class="container1" style="margin-top:10px;">
        <el-tabs type="border-card">
          <el-tab-pane label="消息查询回复">
            <div style="width:100%;border: 1px solid rgba(204, 204, 204, 1);">
              <div class="title_">查询条件</div>
              <div class="info" style="height:110px;">
                <el-form style="width:20%;display:inline-block;" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                  <el-form-item label="发送站点">
                    <el-select v-model="form.region1" placeholder="请选择">
                      <el-option label="普件" value="普件"></el-option>
                      <el-option label="快件" value="快件"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="发送时间段">
                    <el-date-picker
                      v-model="value1"
                      size="small"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions0">
                    </el-date-picker>
                  </el-form-item>
                </el-form>
                <el-form style="width:20%;display:inline-block;" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                  <el-form-item label="接收站点">
                    <el-select v-model="form.region2" placeholder="请选择">
                      <el-option label="普件" value="普件"></el-option>
                      <el-option label="快件" value="快件"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="至">
                    <el-date-picker v-model="value2" size="small"  type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
                  </el-form-item>
                </el-form>
                <el-form style="width:20%;display:inline-block;" :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                  <el-form-item label="是否已读">
                    <el-select v-model="form.region3" placeholder="请选择">
                      <el-option label="普件" value="普件"></el-option>
                      <el-option label="快件" value="快件"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="回复状态">
                    <el-select v-model="form.region4" placeholder="请选择">
                      <el-option label="普件" value="普件"></el-option>
                      <el-option label="快件" value="快件"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>

              <div style="margin:6px;">
                  <el-table
                    :data="tableData3"
                    border
                    style="width: 100%"
                    height="250">
                    <el-table-column
                      border
                      prop="date"
                      label=" 模板编号"
                      width="150">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="模板名称"
                      width="150">
                    </el-table-column>
                    <el-table-column
                      prop="province"
                      label="模板类型"
                      width="150">
                    </el-table-column>
                    <el-table-column
                      prop="city"
                      label="使用客户"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="模板版本号"
                      width="300">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="模板新名称"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="启用状态"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="纸张类型"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="纸张长CM"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="纸张宽CM"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="创建人"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="创建时间"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="修改人"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="zip"
                      label="修改时间"
                      width="120">
                    </el-table-column>
                  </el-table>
              </div>
            </div>

            <!-- 回复消息 -->
            <div class="middle" style="width:100%;height:100%;margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
              <div class="top" style="width:100%;height:150px;margin-bottom:6px;">
                <div class="title_">回复消息</div>
                <div style="width:60%;margin:10px;">
                  回复消息：
                  <el-input style="width:90%;vertical-align:top" type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
                </div>
                <div>
                  <el-form  :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                    <el-form-item style="display:inline-block;" label="上传图片">
                     <input  type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item style="display:inline-block;" label="">
                      <input type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item style="display:inline-block;" label="">
                      <input type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item style="display:inline-block;" label="">
                      <el-button size="small">保存回复</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="消息发布">
              <div class="top clearfix" style="width:100%;height:100%;paddings-bottom:10px;border: 1px solid rgba(204, 204, 204, 1);">
                <div class="title_">消息编辑</div>
                  <el-form :label-position="labelPosition" label-width="80px">
                      <el-form-item label="发送站点">
                        <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="消息类型">
                          <el-select v-model="form.region5" placeholder="请选择">
                            <el-option label="普件" value="普件"></el-option>
                            <el-option label="快件" value="快件"></el-option>
                          </el-select>
                      </el-form-item>
                  </el-form>
                  <el-form :label-position="labelPosition" label-width="80px">
                      <el-form-item label="名称">
                          <el-select v-model="form.region6" placeholder="请选择">
                            <el-option label="普件" value="普件"></el-option>
                            <el-option label="快件" value="快件"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="">
                          <input type="checkbox" value="checkbox" checked=""><span>启用状态</span>
                      </el-form-item>
                  </el-form>
                  <el-form :label-position="labelPosition" label-width="80px">
                      <el-form-item label="接收人">
                          <el-select v-model="form.region7" placeholder="请选择">
                            <el-option label="可多选，如果为空，则默认发送给接收站点的所有人员" value=""></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="">
                          <input type="checkbox" value="checkbox" checked=""><span>是否必读</span>
                      </el-form-item>
                      <el-form-item label="">
                          <input type="checkbox" value="checkbox" checked=""><span>必须回复</span>
                      </el-form-item>
                  </el-form>

                  <el-form style="height:80px;" :label-position="labelPosition" label-width="80px">
                      <el-form-item label="消息内容:">
                        <el-input style="width:800px;margin-bottom:10px;" type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea"></el-input>
                      </el-form-item>
                  </el-form>

                  <el-form  :label-position="labelPosition" label-width="90px" :model="formLabelAlign">
                    <el-form-item style="display:inline-block;" label="上传图片">
                     <input  type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item style="display:inline-block;" label="">
                      <input type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item style="display:inline-block;" label="">
                      <input type="file" value="附件1（图片）" class="text_sketch">
                    </el-form-item>
                    <el-form-item label="">
                      <el-button type="primary" size="small" @click="onSubmit">发送</el-button>
                    </el-form-item>
                  </el-form>
              </div>
          </el-tab-pane>
        </el-tabs>
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
          region3: '',
          region4: '',
          region5: '',
          region6: '',
          region7: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        textarea:'',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        value2:'',
        tableData: [
          {
            date: '',
            name: '',
            address: ''
          }
        ],
        tableData3:[
          {
            date: '',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: ""
          },
        ]
      }
    },
    methods:{
      onSubmit(){
        console.log("发送信息")

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
     width: 93%;
     vertical-align: top;
 }
</style>