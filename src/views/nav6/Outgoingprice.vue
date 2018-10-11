
<template>
<div class="freight">
    <div class="head" style="margin:6px 0 0 10px;padding: 4px;border: 1px solid #8f949a;">

        <p style="font-size:20px;margin:0;text-align:center;">霄邦物流中转价格</p>
        <div class="pricelist" style="width: 100%;margin-top: 4px;">
            <el-table :data="tableData3" border style="width: 100%">
                  <el-table-column prop="date" label="区域" id="xianlu"></el-table-column>
                  <el-table-column prop="date" label="目的城市" ></el-table-column>
                  <el-table-column prop="name" label="中转运价标准" >
                    <el-table-column prop="name" label="最低收费（元/票）" ></el-table-column>
                    <el-table-column prop="province" label="重货/Kg" ></el-table-column>
                    <el-table-column prop="province" label="抛货/M³" ></el-table-column>
                  </el-table-column>
                  <el-table-column label="自提时效"></el-table-column>
                  <el-table-column label="备注"></el-table-column>
            </el-table>
            <div class="block">
              <span>★</span>以上报价不含保险费，不含开票税金
              <span>★</span>普通汽运<span>（普件）</span>比定时达<span>（快件）慢1-2个工作日</span>
            </div>
        </div>


    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [
                {
                 date: '2016-05-03',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-02',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-04',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-01',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-08',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               },{
                 date: '2016-05-06',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }, {
                 date: '2016-05-07',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区',
                 address: '上海市普陀区金沙江路 1518 弄',
                 zip: 200333
               }]
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
.block {
  border: 1px solid #dfe6ec;
  border-top: 0;
  height:30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}
.block span{
  color: #ff0000;
  font-weight: 800;
  font-size: 16px;
}
</style>