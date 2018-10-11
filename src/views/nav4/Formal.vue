<template>
<div>
  <div class="Formal">
    <div class="head" style="margin:6px 0 0 10px;height: 25px;line-height:25px;">
        <p style="font-size:24px;margin:0;text-align:center;">托 运 单 录 入</p>
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
        <div style="width:100%;height:230px;">

          <el-form :label-position="labelPosition" label-width="100px">
            <el-form-item label="订单号" >
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="运单号">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="客户单号">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="业务类型">
              <el-select v-model="form.region1" placeholder="请选择">
                <el-option label="默认当前站点" value="默认当前站点"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="接单分公司">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="制单员">
              <el-input></el-input>
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
            <el-form-item label="始发站">
              <el-select v-model="form.region2" placeholder="请选择">
                <el-option label="自提" value="自提"></el-option>
                <el-option label="送货" value="送货"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="目的站">
              <el-select v-model="form.region3" placeholder="请选择">
                <el-option label="自提" value="自提"></el-option>
                <el-option label="送货" value="送货"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <el-col :span="11" style="margin: 0 10px;margin-left: 30px;">
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

          <el-col :span="11" style="margin: 0 15px;">
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

      <!-- 费用信息 -->
      <div class="cost" style="width:100%;height:100%;margin-top:10px;">
        <div class="top" style="width:100%;margin-bottom:6px;border: 1px solid rgba(204, 204, 204, 1);">
          <div class="title_">费用信息</div>
          <div style="width:93%;margin:10px 0 10px 32px;">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="费率（元）" width="180"></el-table-column>
              <el-table-column prop="name" label="运费（元）"  width="150"></el-table-column>
              <el-table-column prop="address" label="保价（元）"></el-table-column>
              <el-table-column prop="address" label="保额（元）"></el-table-column>
              <el-table-column prop="address" label="代垫款"></el-table-column>
              <el-table-column prop="address" label="提货费"></el-table-column>
              <el-table-column prop="address" label="送货费"></el-table-column>
              <el-table-column prop="address" label="包装费"></el-table-column>
              <el-table-column prop="address" label="中转费"></el-table-column>
              <el-table-column prop="address" label="其他费"></el-table-column>
              <el-table-column prop="address" label="代收款手续费"></el-table-column>
              <el-table-column prop="address" label="代收款"></el-table-column>
              <el-table-column prop="address" label="总合计"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>

      <!-- 结算信息 -->
      <div class="settlement" style="width:100%;height:100%;margin-top:10px;border: 1px solid rgba(204, 204, 204, 1);">
          <div class="title_">结算信息</div>
          <div style="width: 93%; margin: 10px 0px 10px 32px;">
            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;margin-right:0;">
              <el-form-item label="预计到货日期">
                <el-select v-model="form.region6" placeholder="请选择">
                  <el-option label="始发付" value="始发付+到付"></el-option>
                  <el-option label="现付" value="现付"></el-option>
                  <el-option label="到付" value="到付"></el-option>
                  <el-option label="月结" value="月结"></el-option>
                  <el-option label="双月结" value="双月结"></el-option>
                  <el-option label="半月结" value="半月结"></el-option>
                  <el-option label="周结" value="周结"></el-option>
                  <el-option label="短欠" value="短欠"></el-option>
                  <el-option label="回单付款" value="回单付款"></el-option>
                </el-select>

              </el-form-item>
              <el-form-item label="现付">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="到付">
                <el-input></el-input>
              </el-form-item>
            </el-form>
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
      <el-button type="info">新    增</el-button>
      <el-button type="info">查    询</el-button>
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
  .el-button {
    width: 116px;
  }

</style>