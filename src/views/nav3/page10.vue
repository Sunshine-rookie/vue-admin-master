<template>
    <div>
        <div class="wdgl">
            <!-- head start -->
            <div id="head" style="margin-top:6px;height: 65px;">
                <ul style="margin:0;padding:0;height: 65px;">
                    <li>
                        <div><img src="../../assets/u10.png" alt=""><span>新增</span></div>
                    </li>
                    <li>
                        <div><img src="../../assets/u20.png" alt=""><span>查询</span></div>
                    </li>
                    <li>
                        <div><img src="../../assets/u25.png" alt=""><span>查询</span></div>
                    </li>
                    <li>
                        <div><img src="../../assets/u30.png" alt=""><span>查询</span></div>
                    </li>
                    <li>
                        <div><img src="../../assets/u35.png" alt=""><span>查询</span></div>
                    </li>
                    <li>
                        <div><img src="../../assets/u818.png" alt=""><span>查询</span></div>
                    </li>
                </ul>
            </div>
            <!-- head end -->

            <!-- section start -->
            <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
                <div class="query">
                    <div class="title">查询条件</div>
                    <div class="info" style="height:85px;">
                        <el-form style="margin-right:70px;" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="发件客户">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="线路名称">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                        </el-form>
                        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="自提时效">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="增值业务">
                                <select style="width:157px;height:25px;">
                                    <option>普件</option>
                                </select>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                <!-- quote start -->
                <div class="quote clearfix" style="height:100%;">
                    <div class="title" style="margin-bottom: 10px;">报价维护区域</div>
                    <div class="info" style="width:40%;height:100%;float:left;">
                        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="报价站点">
                                <select style="width:157px;height:24px;">
                                    <option>默认登录站点</option>
                                </select>
                            </el-form-item>
                            <el-form-item label="收付类型">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="计费方式">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="增值业务">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="派送方式">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="客户名称">
                                <el-input
                                        style="width:160px;"
                                        type="textarea"
                                        autosize
                                        v-model="textarea3">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <input type="checkbox" value="checkbox" checked=""><span>&nbsp;&nbsp;&nbsp;标准报价</span>
                            </el-form-item>
                        </el-form>
                        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                            <el-form-item label="费用类型">
                                <select style="width:157px;height:24px;">
                                    <option>普件</option>
                                </select>
                            </el-form-item>
                            <el-form-item label="结算对象类型">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="参数取值方式">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="最低收费">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="费用折扣">
                                <input v-model="formLabelAlign.name" style="width:153px;height:20px;">
                            </el-form-item>
                            <el-form-item label="线路名称">
                                <el-input
                                        style="width:160px;"
                                        type="textarea"
                                        autosize
                                        v-model="textarea2">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="启用时间">
                                <el-date-picker
                                        v-model="value1"
                                        size="small"
                                        style="width:160px;height:20px;"
                                        type="date"
                                        placeholder="选择日期"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="form" style="width:50%;height:100%;margin: 6px;padding:3px;border: 1px solid rgba(204, 204, 204, 1);float:left;">
                        <p style="margin:0 6px;">
                            <span style="font-size:13px;">计算参数说明: &nbsp;</span>
                            <span style="font-size:12px;color:#FF0000;">重量:&nbsp;&nbsp;&nbsp;&nbsp;用w表示</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style="font-size:12px;color:#FF0000;">件数:&nbsp;&nbsp;&nbsp;&nbsp;用p表示</span>
                        </p>

                        <div>
                            <p style="margin:6px;">报价公式维护:</p>
                            <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%;">
                                <el-table-column
                                        prop="date"
                                        label="日期"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="姓名"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="address"
                                        label="地址">
                                </el-table-column>
                            </el-table>
                        </div>

                    </div>
                </div>

                <!-- quote end -->
            </div>
            <!-- section end -->

            <!-- foot start -->
            <div style="border: 1px solid rgba(204, 204, 204, 1);margin-top:10px;padding:10px 55px 10px 10px;;">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
                    </el-table-column>
                </el-table>
            </div>
            <!-- foot end -->
            <router-view></router-view>
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
                textarea2:'',
                textarea3:'',
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                value1:'',
                textarea:'',
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    #head{
        width: 100%;
        height: 65px;
        border: 1px solid rgba(204, 204, 204, 1);
    }
    #head ul {
        list-style:none;
    }
    #head ul li {
        float:left;
        margin:10px 0 0 10px;
        line-height:20px;
        cursor: pointer;
    }
    #head ul span {
        margin-left: 2px;
    }

    #head img{
        display:block;
        width: 30px;
        height: 30px;
    }
    .title {
        height: 34px;
        background: #eef1f6;
        line-height: 34px;
        border-left: 5px solid #e57715;
        font-size: 13px;
        font-weight: 800;
        padding-left:3px;
    }
    .el-form {
        display:inline-block;
        margin-right: 50px;
    }
    .el-form-item {
        margin-bottom: 0px;
    }
    /*清除浮动*/
    .clearfix:before, .clearfix:after {
        content: "";
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        zoom: 1; /*IE/7/6*/
    }
</style>