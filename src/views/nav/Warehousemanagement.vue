<template>
<div>
    <!-- head start -->
    <div class="head" style="margin:6px 0 0 10px;height: 65px;line-height:65px;">
        <p style="font-size:28px;margin:0;text-align:center;">出库管理</p>
    </div>

    <!-- <div style="margin-top:6px;">
      <input style="width:15px;vertical-align:middle;" type="radio" value="main" v-model="view">
      <label for="one">干线出库</label>
      <input style="width:15px;vertical-align:middle;" type="radio" value="transit" v-model="view">
      <label for="two">中转出库</label>
      <input style="width:15px;vertical-align:middle;" i type="radio" value="send" v-model="view">
      <label for="three">派送出库</label>
      <input style="width:15px;vertical-align:middle;"  type="radio" value="carry" v-model="view">
      <label for="four">自提出库</label>
      <input style="width:15px;vertical-align:middle;"  type="radio" value="order" v-model="view">
      <label for="five">订单提货</label>
    </div> -->

    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>


</div>
</template>

<script>
export default {
    data() {
        return {
            elPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            },
            activeName2: 'first',
            ischecked:false,
            value1:'',
            view:'',
            labelPosition:'center',
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
              }
            }
        }
    },
    // components: {
    //   main,transit
    // },
    methods: {
       handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>


<style scoped>
.el-tabs__item.is-active {
  background-color: red;
}
</style>