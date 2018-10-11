<template>
<div>
    <!-- head start -->
    <div class="head" style="margin:6px 0 0 10px;height: 65px;line-height:65px;">
        <p style="font-size:28px;margin:0;">回单管理-应返回单</p>
    </div>
    <!-- head end -->

    <!-- 查询 -->
    <div style="margin-top:6px;">
        <el-form :label-position="labelPosition" label-width="120px" style="margin-top:6px;">
          <el-form-item label="开单日期起">
            <el-date-picker v-model="value1" size="small"  type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
          </el-form-item>
          <el-form-item label="开单日期止">
            <el-date-picker v-model="value2" size="small"  type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
          </el-form-item>
          <el-form-item label="始发站">
            <el-select v-model="form.region1" placeholder="请选择">
              <el-option label="上海" value="上海"></el-option>
              <el-option label="北京" value="北京"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目的站">
            <el-select v-model="form.region2" placeholder="请选择">
              <el-option label="区域一" value="区域一"></el-option>
              <el-option label="区域二" value="区域二"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="异常">
            <el-select v-model="form.region3" placeholder="请选择">
              <el-option label="有" value="有"></el-option>
              <el-option label="无" value="无"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :label-position="labelPosition" label-width="120px" style="margin-top:6px;">
          <el-form-item label="运单编号">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="回单编号">
            <el-input type="" name=""></el-input>
          </el-form-item>
          <el-form-item label="回单状态">
           <el-select v-model="form.region4" placeholder="请选择">
              <el-option label="返回" value="返回"></el-option>
              <el-option label="无" value="无"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发货客户">
            <el-select v-model="form.region5" placeholder="请选择">
              <el-option label="123" value="123"></el-option>
              <el-option label="456" value="456"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款方式">
            <el-select v-model="form.region6" placeholder="请选择">
              <el-option label="现付" value="现付"></el-option>
              <el-option label="到付" value="到付"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
    </div>

    <!-- 表格 -->
    <div style="margin-top:6px;">
      <el-table :data="tableData3" border style="width: 100%;border-top:0;font-size:12px;border-top: 1px solid #dfe6ec;" height="250">
          <el-table-column prop="date" label="序号" type="index" width="150"></el-table-column>
          <el-table-column prop="name" label="选择" ></el-table-column>
          <el-table-column prop="name" label="开单日期" ></el-table-column>
          <el-table-column prop="name" label="始发站" ></el-table-column>
          <el-table-column prop="name" label="目的站" ></el-table-column>
          <el-table-column prop="name" label="运单号" ></el-table-column>
          <el-table-column prop="name" label="回单编号" ></el-table-column>
          <el-table-column prop="name" label="回单状态" ></el-table-column>
          <el-table-column prop="name" label="增值服务" ></el-table-column>
          <el-table-column prop="name" label="发货客户" ></el-table-column>
          <el-table-column prop="name" label="发货联系人" ></el-table-column>
          <el-table-column prop="name" label="收货客户" ></el-table-column>
          <el-table-column prop="name" label="" ></el-table-column>
          <el-table-column prop="name" label="" ></el-table-column>
      </el-table>
    </div>


</div>
</template>

<script> 20
export default {
    data() {
        return {
            elPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            },
            value1:'',
            value2:'',
            labelPosition:'center',
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
              }
            },
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
              desc: ''
            },
            tableData3: [
                {
                  date: '',
                  name: '',
                  province: '',
                  city: '',
                  address: '',
                  zip: 1
                },
                {
                  date: '',
                  name: '',
                  province: '',
                  city: '',
                  address: '',
                  zip: 2
                },
                {
                  date: '',
                  name: '',
                  province: '',
                  city: '',
                  address: '',
                  zip: 3
                },
                {
                  date: '',
                  name: '',
                  province: '',
                  city: '',
                  address: '',
                  zip: 4
                }
            ]
        }
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
              if (index === 0) {
                sums[index] = '合计';
                return;
              }
              const values = data.map(item => Number(item[column.property]));
              if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                  const value = Number(curr);
                  if (!isNaN(value)) {
                    return prev + curr;
                  } else {
                    return prev;
                  }
                }, 0);
                sums[index] += ' ';
              } else {
                sums[index] = '-';
              }
            });
            return sums;
        }
    }
}
</script>


<style scoped>
.el-form-item {
    display: inline-block;
    margin-bottom: 0;
}
</style>