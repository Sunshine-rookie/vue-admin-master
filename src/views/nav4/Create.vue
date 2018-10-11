<template>
<div>
  <div class="Formal">
    <div class="head" style="margin:6px 0 0 10px;height: 25px;line-height:25px;">
        <p style="font-size:24px;margin:0;text-align:center;">创 建 订 单</p>
    </div>


    <div class="container1" style="margin-top:10px;">
      <!-- 基本信息 -->
      <div class="top" style="border: 1px solid rgba(204, 204, 204, 1);">
        <div class="title_">基本信息
          <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;float:right;padding-right: 15px;">
            <el-form-item label="制单员">
              <el-input placeholder="制单员" v-model="input1" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="制单日期">
              <el-date-picker
                v-model="value1"
                size="small"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <div style="width:100%;height:180px;">

          <el-col :span="11" style="margin: 6px 10px 10px 30px;">
            <div style="width: 100%;height: 35px;border: 1px solid rgba(204, 204, 204, 1);font-weight: 700;background:rgb(242, 242, 242);"><p style="margin:0;line-height:35px;text-align:center;">发货人</p></div>
            <div style="width: 100%;border: 1px solid rgba(204, 204, 204, 1);border-top: 0;padding: 10px 0;">
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;">
                <el-form-item label="客户名称" >
                  <el-input style="width: 398px;"></el-input>
                </el-form-item>
                <el-form-item label="客户代码">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;margin-right:0;">
                <el-form-item label="联系人">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="座机号码">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;">
                <el-form-item label="取货地址">
                  <el-input style="width: 398px;"></el-input>
                </el-form-item>
                <el-form-item label="取货方式">
                  <el-select v-model="form.region4" placeholder="请选择">
                    <el-option label="自提" value="自提"></el-option>
                    <el-option label="送货" value="送货"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
          </div>
          </el-col>

          <el-col :span="11" style="margin: 6px 10px 10px 15px;">
            <div style="width: 100%;height: 35px;border: 1px solid rgba(204, 204, 204, 1);font-weight: 700;background:rgb(242, 242, 242);"><p style="margin:0;line-height:35px;text-align:center;">发货人</p></div>
            <div style="width: 100%;border: 1px solid rgba(204, 204, 204, 1);border-top: 0;padding: 10px 0;">
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;">
                <el-form-item label="客户名称" >
                  <el-input style="width: 398px;"></el-input>
                </el-form-item>
                <el-form-item label="客户代码">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;margin-right:0;">
                <el-form-item label="联系人">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="座机号码">
                  <el-input></el-input>
                </el-form-item>
              </el-form>
              <el-form :label-position="labelPosition" label-width="80px" style="width:100%;">
                <el-form-item label="送货地址">
                  <el-input style="width: 398px;"></el-input>
                </el-form-item>
                <el-form-item label="送货方式">
                  <el-select v-model="form.region5" placeholder="请选择">
                    <el-option label="自提" value="自提"></el-option>
                    <el-option label="送货" value="送货"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </el-col>

        </div>
      </div>

      <!-- 货物信息 -->
      <div class="cargo" style="width:100%;height:100%;margin-top:10px;">
        <div class="top" style="width:100%;margin-bottom:6px;border: 1px solid rgba(204, 204, 204, 1);">
          <div class="title_">货物信息</div>
          <div style="width:93%;margin:10px 0 10px 32px;">
                <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="date" label="品名" width="180"></el-table-column>
                  <el-table-column prop="name" label="包装方式"  width="150"></el-table-column>
                  <el-table-column prop="address" label="重量（KG）"></el-table-column>
                  <el-table-column prop="address" label="体积（m³）"></el-table-column>
                  <el-table-column prop="address" label="增值服务"></el-table-column>
                  <el-table-column prop="address" label="计费方式"></el-table-column>
                  <el-table-column prop="address" label="派送方式"></el-table-column>
                  <el-table-column prop="address" label="回单份数"></el-table-column>
                  <el-table-column prop="address" label="业务"></el-table-column>
                </el-table>
          </div>
        </div>
      </div>

      <!-- 其他信息 -->
      <div class="other" style="width:100%;margin-top:10px;">
        <div class="top" style="width:100%;margin-bottom:6px;border: 1px solid rgba(204, 204, 204, 1);">
          <div class="title_">其他信息</div>
          <div style="width:93%;margin:10px 0 10px 32px;border: 1px solid rgba(204, 204, 204, 1);">
            <el-form :label-position="labelPosition" label-width="80px" style="width:100%;">
              <el-form-item label="取货备注：" >
                <input type="text" name="" value="" placeholder="">
              </el-form-item>
              <el-form-item label="送货备注：">
                <input type="text" name="" value="" placeholder="">
              </el-form-item>
              <el-form-item label="回单备注：">
                <input type="text" name="" value="" placeholder="">
              </el-form-item>
              <el-form-item label="备        注：">
                <input type="text" name="" value="" placeholder="">
              </el-form-item>
            </el-form>
          </div>
        </div>

      </div>

    </div>
    <div class="btn" style="height: 100px;">
      <el-button type="info">提交保存 并 新建订单</el-button>
      <el-button type="info">提交保存</el-button>
    </div>
  </div>

</div>
</template>



<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region1: '',
          region2: '',
          region3: '',
          region4: '',
          region5: '',
          region6: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          input1:''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        value2:'',
        value3:'',
        tableData: [
          {
            date: '',
            name: '',
            address: ''
          }
        ]
      }
    },
    add() {

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
    display:inline-block;
  }

  .left .el-form-item__label {
    padding:1px;
  }
  .right .el-form-item__label {
    padding:1px;
  }
  .other .el-form-item {
    display: block;
  }
  .other input {
    width: 100%;
    height: 25px;
    outline: none;
    border: 0;
  }
  .btn {
    float: right;
    margin-right: 150px;
  }
  .el-button {
    width: 158px;
  }

</style>