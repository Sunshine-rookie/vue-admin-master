<template>
<div>
  <div>
    <!-- head start -->
    <div id="head" style="margin-top:6px;">
        <img src="../../assets/img/u9459.png" alt="霄邦物流">
        <p style="height: 65px;line-height:65px;text-align:center;font-size: 28px;font-weight: 800;margin:0;">托 运 单 录 入</p>
    </div>
    <!-- head end -->

    <div class="container1" style="margin-top:10px;margin-top:10px;border: 1px solid rgba(204, 204, 204, 1);">
      <!--基本信息 -->
      <div>
        <div class="title_">基本信息</div>
        <div style="width:100%;height:230px;">
          <el-form :label-position="labelPosition" label-width="100px" style="display:inline-block;">
            <el-form-item label="系统脱单号" style="margin-right:420px;">
              <input style="width:200px;height:18px;">
            </el-form-item>
            <el-form-item label="订单录入公司">
              <input style="width:180px;height:18px;">
            </el-form-item>
            <el-form-item label="订单录入员">
              <select style="width:145px;height:25px;">
                <option value="默认当前站点" >默认当前站点</option>
              </select>
            </el-form-item>
            <el-form-item label="制单日期">
              <el-date-picker
                v-model="value"
                size="small"
                style="width:160px;"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <div style="width:45%;height: 165px;border: 1px solid rgba(204, 204, 204, 1);margin-left:32px;margin-top: 14px;display: inline-block;">

            <div style="width: 100%;height: 35px;border-bottom: 1px solid rgba(204, 204, 204, 1);font-weight: 700;background:rgb(242, 242, 242);"><p style="margin:0;line-height:35px;text-align:center;">发货人</p></div>

            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
              <el-form-item label="客户名称">
                <input style="width:328px;height:18px;">
              </el-form-item>
              <el-form-item label="客户代码">
                <input style="width:125px;height:18px;">
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;margin-right:0;">
              <el-form-item label="联系人">
                <input style="width:104px;height:18px;">
              </el-form-item>
              <el-form-item label="手机号码">
                <input style="width:104px;height:18px;">
              </el-form-item>
              <el-form-item label="座机号码">
                <input style="width:125px;height:18px;">
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
              <el-form-item label="取货地址">
                <input style="width:328px;height:18px;">
              </el-form-item>
              <el-form-item label="取货方式">
                <select style="width:130px;height:25px;">
                  <option value="" ></option>
                </select>
              </el-form-item>
            </el-form>
          </div>
          <div style="width:45%;height: 165px;border: 1px solid rgba(204, 204, 204, 1);margin-right:76px;    margin-top: 14px;float:right;">
            <div style="width: 100%;height: 35px;border-bottom: 1px solid rgba(204, 204, 204, 1);font-weight: 700;background:rgb(242, 242, 242);"><p style="margin:0;line-height:35px;text-align:center;">收货人</p></div>

            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
              <el-form-item label="客户名称">
                <input style="width:400px;height:18px;">
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;margin-right:0;">
              <el-form-item label="联系人">
                <input style="width:140px;height:18px;">
              </el-form-item>
              <el-form-item label="手机号码">
                <input style="width:140px;height:18px;">
              </el-form-item>
              <el-form-item label="座机号码">
                <input style="width:105px;height:18px;">
              </el-form-item>
            </el-form>
            <el-form :label-position="labelPosition" label-width="100px" style="width:100%;">
              <el-form-item label="客户名称">
                <input style="width:400px;height:18px;">
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <!-- 货物信息 -->
      <div style="width:100%;height:135px;border-top:0px;">
        <div class="title_">货物信息</div>
        <div style="width:92%;margin-top:10px;margin-left:32px;">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="品名" width="180">
                </el-table-column>
                <el-table-column prop="name" label="包装方式" width="180">
                </el-table-column>
                <el-table-column prop="address" label="件数">
                </el-table-column>
                <el-table-column prop="address" label="重量（KG）">
                </el-table-column>
                <el-table-column prop="address" label="体积（m³）">
                </el-table-column>
                <el-table-column prop="address" label="增值服务">
                </el-table-column>
                <el-table-column prop="address" label="计费方式">
                </el-table-column>
                <el-table-column prop="address" label="派送方式">
                </el-table-column>
                <el-table-column prop="address" label="回单份数">
                </el-table-column>
                <el-table-column prop="address" label="业务员">
                </el-table-column>
                <el-table-column prop="address" label="付款方式">
                </el-table-column>
              </el-table>
        </div>
      </div>
      <!-- 费用信息 -->
      <div style="width:100%;height:135px;border-top:0px;">
        <div class="title_">费用信息</div>
        <div style="width:92%;margin-top:10px;margin-left:32px;">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="费率（元）" width="150">
                </el-table-column>
                <el-table-column prop="name" label="运费（元）" width="150">
                </el-table-column>
                <el-table-column prop="address" label="保价（元）" width="150">
                </el-table-column>
                <el-table-column prop="address" label="保额（元）" width="150">
                </el-table-column>
                <el-table-column prop="address" label="代垫款">
                </el-table-column>
                <el-table-column prop="address" label="提货费">
                </el-table-column>
                <el-table-column prop="address" label="送货费">
                </el-table-column>
                <el-table-column prop="address" label="包装费">
                </el-table-column>
                <el-table-column prop="address" label="中转费">
                </el-table-column>
                <el-table-column prop="address" label="其他费">
                </el-table-column>
                <el-table-column prop="address" label="代收款手续费" width="180">
                </el-table-column>
                <el-table-column prop="address" label="代收款">
                </el-table-column>
                <el-table-column prop="address" label="总合计">
                </el-table-column>
              </el-table>
        </div>
      </div>
      <!-- 结算信息 -->
      <div style="width:100%;height:110px;border-top:0px;">
        <div class="title_">结算信息</div>
        <div style="width:92%;margin-top:10px;margin-left:32px;border: 1px solid rgba(204, 204, 204, 1);">
          <el-form style="width: 100%;height:50px;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="付款方式">
              <select style="width:157px;height:25px;">
                <option value="始发付+到付">始发付+到付</option>
                <option value="现付">现付</option>
                <option value="到付">到付</option>
                <option value="月结">月结</option>
                <option value="双月结">双月结</option>
                <option value="半月结">半月结</option>
                <option value="周结">周结</option>
                <option value="短欠">短欠</option>
                <option value="回单付款">回单付款</option>
              </select>
            </el-form-item>
            <el-form-item label="现付">
              <input type="" name="">
            </el-form-item>
            <el-form-item label="到付">
              <input type="" name="">
            </el-form-item>
          </el-form>
        </div>
      </div>

      <!-- 其他信息 -->
      <div style="width:100%;height:100%;border-top:0px;">
        <div class="title_">其他信息
          <el-form style="width: 38.5%;float:right;line-height:22px;" :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="预计到货日期">
              <el-date-picker v-model="value" size="mini" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="要求到货日期">
              <el-date-picker v-model="value" size="mini" style="width:157px;" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <div style="width:92%;margin:6px 0 10px 10px;margin-left:32px; padding:10px;border: 1px solid rgba(204, 204, 204, 1);">
          <span>取货备注：</span><br>
          <span>送货备注：</span><br>
          <span>回单备注：</span><br>
          <span>备 注：</span><br>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div style="margin:6px 0 0 32px;">
      <el-button style="width:100px;" type="info" size="small">新&nbsp;&nbsp;&nbsp;&nbsp;增</el-button>
      <el-button style="width:100px;" type="info" size="small">查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button>

      <div style="margin-left:750px;display:inline-block;">
        <el-button style="width:100px;margin-right:30px;border:0;background:#999999;" type="info" size="small" @click="delete1">删&nbsp;&nbsp;&nbsp;&nbsp;除</el-button>
        <el-button style="width:100px;margin-right:30px;border:0;background:#999999;" type="info" size="small">保存并打印</el-button>
        <el-button style="width:100px;margin-right:30px;border:0;background:#999999;" type="info" size="small">保存并关闭</el-button>
        <el-button style="width:100px;margin-right:30px;border:0;background:#999999;" type="info" size="small">取&nbsp;&nbsp;&nbsp;&nbsp;消</el-button>
      </div>
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
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value:'',
        tableData: [
          {
            date: '',
            name: '',
            address: ''
          }
        ]
      }
    },
    methods:{
      delete1() {
        this.$confirm('您确定要删除此信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style scoped>
    #head{
      width: 100%;
      height: 65px;
      border: 1px solid rgba(204, 204, 204, 1);
      position: relative;
    }
    #head img{
      position: absolute;
      left: 103px;
      top: 1px;
      width: 227px;
      height: 64px;
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
    display:inline-block;
  }
  .el-form-item {
    display:inline-block;
    margin: 6px;
  }

</style>