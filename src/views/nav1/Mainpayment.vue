<template>
<div>
    <el-row>
        <el-col :span="24">
            <div class="title_">干线运费录入</div>
            <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
              <el-form-item label="任务编号：">
                <el-input type="text" value=""></el-input>
              </el-form-item>
              <el-form-item label="应付费用：" label-width="100px">
                <el-input type="text" value=""></el-input>
              </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="24">
            <el-table :data="tableData" border style="width: 50%">
              <el-table-column label="品名">
                <template></template>
              </el-table-column>
              <el-table-column prop="name" label="包装方式 ">
              </el-table-column>
              <el-table-column prop="address" label="件数 ">
              </el-table-column>
              <el-table-column prop="address" label="重量（KG）">
              </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data(){
        return{
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            },
            tableData:[
                {
                    Cash:'现金',
                    Pay:'到付',
                    Monthly:'月结',
                    Receipt:'回单付款',
                    Oilcard:'油卡'
                }
            ]
        }
    }
}
</script>

<style scoped>
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
    margin-bottom: 0;
    display:inline-block;
 }


</style>