import Router from 'vue-router'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Page8 from './views/nav3/page8.vue'
import Page9 from './views/nav3/page9.vue'
import Page7 from './views/nav2/sas.vue'
import echarts from './views/charts/echarts.vue'


/* 系统设置*/
import Pricemaintenance from './views/nav1/Pricemaintenance.vue'
import Datadictionary from './views/nav1/Datadictionary.vue'
import Networkmanagement from './views/nav1/Networkmanagement.vue'
import Nationalgeographic from './views/nav1/Nationalgeographic.vue'
import Print from './views/nav1/Print.vue'
import Systemmessage from './views/nav1/Systemmessage.vue'
import Sms from './views/nav1/Sms.vue'
import Departmentsetup from './views/nav1/Departmentsetup.vue'
import Employeeinformation from './views/nav1/Employeeinformation.vue'
import Account from './views/nav1/Account.vue'
// import user from './views/nav1/user.vue'

/*标准运价管理*/
import Standardfreight from './views/nav6/Standardfreight.vue'
import Contractfreight from './views/nav6/Contractfreight.vue'
import Outgoingprice from './views/nav6/Outgoingprice.vue'
import Tosend from './views/nav6/Tosend.vue'
import Join from './views/nav6/Join.vue'
import Partnership from './views/nav6/Partnership.vue'

/*基本资料管理*/
import Vehicleinformation from './views/nav2/Vehicleinformation.vue'
import Driverinformation from './views/nav2/Driverinformation.vue'
import Routingscheme from './views/nav2/Routingscheme.vue'




/*业务操作中心*/
import Ordermanagement from './views/nav4/Ordermanagement.vue'
//import Waybillentry from './views/nav4/Waybillentry.vue'
import Inventorymanagement from './views/nav4/Inventorymanagement.vue'
import Vehiclesecurity from './views/nav4/Vehiclesecurity.vue'
import Waybillquery from './views/nav4/Waybillquery.vue'
import Formal from './views/nav4/Formal.vue'
import Create from './views/nav4/Create.vue'
import Trunk from './views/nav4/Trunk.vue'
import Prepare from './views/nav4/Prepare.vue'

/*调度管理*/
import Shortbargequery from './views/nav1/Shortbargequery.vue'
import Mainlinefreight from './views/nav1/Mainlinefreight.vue'
import Vehicledispatchregistration from './views/nav1/Vehicledispatchregistration.vue'
import Shortbargescheduling from './views/nav1/Shortbargescheduling.vue'
import Mainpayment from './views/nav1/Mainpayment.vue'


/*出库管理*/
import Warehousemanagement from './views/nav/Warehousemanagement.vue'


/*异常管理*/
import Exceptiontypes from './views/nav3/Exceptiontypes.vue'
import Abnormalreport from './views/nav3/Abnormalreport.vue'
import Exceptionaccept from './views/nav3/Exceptionaccept.vue'

/*回单管理*/
import Receiptmanagement from './views/nav/Receiptmanagement.vue'


/*客户管理*/
import Customermanagement from './views/nav5/Customermanagement.vue'
import Maintenancecontacts from './views/nav5/Maintenancecontacts.vue'
import Contract from './views/nav5/Contract.vue'

/*中转外发商管理*/
import Transshipmentoutward from './views/nav7/Transshipmentoutward.vue'
/*Vue.use(Router)*/

let routes = [
    {
        path: '/login',
        component: Login,
        name: '登录',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
   /* { path: '/main', component: NotFound },*/
    {
        path: '*',
        component: Home,
        name: '系统设置',
        iconCls: 'icon iconfont icon-set',//图标样式class
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            // { path: '/Pricemaintenance', component: Pricemaintenance,iconCls: 'icon iconfont icon-pingjiaguanli', name: '报价维护'},
            { path: '/Employeeinformation', component: Employeeinformation,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '员工信息'},
            // { path: '/Employeeinformation1', component: Employeeinformation1,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '员工信息1'},
            { path: '/Table', component: Table,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '表格1'},
            // { path: '/user', component: user,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '用户信息'},
            { path: '/Account', component: Account,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '系统账号设置',
                children:[
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '用户设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '角色设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '权限设置' },
                ]
            },
            { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-yuangongguanxiguanliicon', name: '系统网点设置',
                children:[
                    { path: '/Networkmanagement', component: Networkmanagement,iconCls: 'icon iconfont icon-gonghuoshangwangdianguanli',name: '网点信息管理'},
                    { path: '/Routingscheme', component: Routingscheme,iconCls: 'icon iconfont icon-luyouxinxi' ,name: '路由设置' },
                    { path: '/Routingscheme', component: Routingscheme,iconCls: 'icon iconfont icon-luyouxinxi' ,name: '单号规则设置' }
                ]
            },
        ],

    },
    {
        path: '/',
        component: Home,
        name: '标准运价管理',
        iconCls: 'icon iconfont icon-quanxianguanli4',
        children: [
            { path: '/Standardfreight', component: Standardfreight,iconCls: 'icon iconfont icon-wangdian', name: '标准运价维护' },
            { path: '/Contractfreight', component: Contractfreight,iconCls: 'icon iconfont icon-wangdian', name: '合同运价维护' },
            { path: '/Outgoingprice', component: Outgoingprice,iconCls: 'icon iconfont icon-wangdian', name: '中转外发运价维护' },
            { path: '/Tosend', component: Tosend,iconCls: 'icon iconfont icon-wangdian', name: '派送运价维护' },
            { path: '/Join', component: Join,iconCls: 'icon iconfont icon-wangdian', name: '加盟运价维护' },
            { path: '/Partnership', component: Partnership,iconCls: 'icon iconfont icon-wangdian', name: '合伙承包结算价维护' },
        ],

    },
    {
        path: '/Systemmessage',
        component: Home,
        name: '系统管理',
        iconCls: 'icon iconfont icon-quanxianguanli4',
        children:[
            {path: '/Systemmessage', component: Systemmessage,iconCls: 'icon iconfont icon-xitongxiaoxi', name: '系统消息管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '基础设置',
        iconCls: 'icon iconfont icon-document',
        children: [
            // { path: '/Vehicleinformation', component: Vehicleinformation,iconCls: 'icon iconfont icon-yunshuzhongwuliu-xianxing', name: '车辆信息' },
            // { path: '/Driverinformation', component: Driverinformation, iconCls: 'icon iconfont icon-jiashiyuan',name: '驾驶员信息' },
            { path: '/Departmentsetup', component: Departmentsetup,iconCls: 'icon iconfont icon-shuang-bumenshezhi', name: '部门设置' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '车辆管理',
        iconCls: 'icon iconfont icon-document',
        children: [
            { path: '/Vehicleinformation', component: Vehicleinformation,iconCls: 'icon iconfont icon-yunshuzhongwuliu-xianxing', name: '车辆信息' },
            { path: '/Driverinformation', component: Driverinformation, iconCls: 'icon iconfont icon-jiashiyuan',name: '驾驶员信息' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '业务监控中心',
        iconCls: 'icon iconfont icon-document',
        children: [
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '运单查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '干线运输出库查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '中转外发出库查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '派送出库查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '自提出库查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '回单查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '异常管理查询' },
            { path: '/Waybillquery', component: Waybillquery,iconCls: 'icon iconfont icon-sousuo', name: '到港货物拆签分拣查询' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '短信设管理',
        iconCls: 'icon iconfont icon-document',
        children: [
            { path: '/Sms', component: Sms, iconCls: 'icon iconfont icon-duanxinguanli',name: '短信模板设置'},
            { path: '/Sms', component: Sms, iconCls: 'icon iconfont icon-duanxinguanli',name: '短信发送'},
            { path: '/Sms', component: Sms, iconCls: 'icon iconfont icon-duanxinguanli',name: '群发短信'},
            { path: '/Sms', component: Sms, iconCls: 'icon iconfont icon-duanxinguanli',name: '短信发送记录'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '理赔管理',
        iconCls: 'icon iconfont icon-document',
        children: [
            { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '参数设置',
                children:[
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '品名设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '包装设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '车型设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '费用类别设置' },
                    { path: '/Nationalgeographic', component: Nationalgeographic,iconCls: 'icon iconfont icon-dizhi', name: '中国地址库设置' },
                    { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '打印规则设置' },
                    { path: '/Print', component: Print,iconCls: 'icon iconfont icon-dayin2', name: '打印表单格式设置',
                        children:[
                             { path: '/Datadictionary', component: Datadictionary,iconCls: 'icon iconfont icon-canshuguanli' ,name: '复制命名窗体'}
                        ]
                    },
                ]
            },

        ]
    },
    {
        path: '/',
        component: Home,
        name: '业务操作中心',
        iconCls: 'icon iconfont icon-yewucaozuo',
        children: [
            { path: '/Ordermanagement', component: Ordermanagement,iconCls: 'icon iconfont icon-wuliudingdanguanli', name: '订单管理' },
            //{ path: '/Waybillentry', component: Waybillentry,iconCls: 'icon iconfont icon-xiugaioryijian', name: '运单录入' },

            { path: '/Inventorymanagement', component: Inventorymanagement,iconCls: 'icon iconfont icon-kucun2', name: '库存管理' },
            { path: '/Vehiclesecurity', component: Vehiclesecurity,iconCls: 'icon iconfont icon-wangdian', name: '车辆安检' },
            { path: '/Formal', component: Formal,iconCls: 'icon iconfont icon-wangdian', name: '创建正式单' },
            { path: '/Create', component: Create,iconCls: 'icon iconfont icon-wangdian', name: '创建订单' },
            { path: '/Prepare', component: Prepare,iconCls: 'icon iconfont icon-wangdian', name: '干线运输出库' ,
                children: [
                    { path: '/Prepare', component: Prepare,iconCls: 'icon iconfont icon-wangdian', name: '预配载' },
                ]

            },

        ]
    },
    {
        path: '/',
        component: Home,
        name: '调度管理',
        iconCls: 'icon iconfont icon-tiaoduguanli',
        children: [
            { path: '/Shortbargequery', component: Shortbargequery,iconCls: 'icon iconfont icon-wangdian', name: '物流运力池' },
            { path: '/Shortbargescheduling', component: Shortbargescheduling,iconCls: 'icon iconfont icon-wangdian', name: '短驳调度计划安排' },
            { path: '/Shortbargequery', component: Shortbargequery,iconCls: 'icon iconfont icon-wangdian', name: '短驳调度查询' },
            //{ path: '/Mainlinefreight', component: Mainlinefreight, iconCls: 'icon iconfont icon-wangdian',name: '干线运费维护' },
            { path: '/Vehicledispatchregistration', component: Vehicledispatchregistration,iconCls: 'icon iconfont icon-wangdian', name: '干线车辆调度登记' },
            { path: '/Vehicledispatchregistration', component: Vehicledispatchregistration,iconCls: 'icon iconfont icon-wangdian', name: '车辆' },

            //{ path: '/Mainpayment', component: Mainpayment,iconCls: 'icon iconfont icon-wangdian', name: '干线运费付款录入' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '出库管理',
        iconCls: 'icon iconfont icon-chukuguanli',
        children: [
            { path: '/Warehousemanagement', component: Warehousemanagement, iconCls: 'icon iconfont icon-wangdian',name: '出库管理1' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '异常管理',
        iconCls: 'icon iconfont icon-yichangguanli2',
        children: [
            { path: '/Exceptiontypes', component: Exceptiontypes,iconCls: 'icon iconfont icon-wangdian', name: '异常类型维护',
                children: [
                    { path: '/Abnormalreport', component: Abnormalreport,iconCls: 'icon iconfont icon-wangdian', name: '异常类型分类管理' },
                ]
            },
            { path: '/Abnormalreport', component: Abnormalreport,iconCls: 'icon iconfont icon-wangdian', name: '异常提报' },
            { path: '/Exceptionaccept', component: Exceptionaccept,iconCls: 'icon iconfont icon-wangdian', name: '异常受理' },

        ]
    },
    {
        path: '/',
        component: Home,
        name: '收缴款查询',
        iconCls: 'icon iconfont icon-chukuguanli',
        children: [
            { path: '/Warehousemanagement', component: Warehousemanagement, iconCls: 'icon iconfont icon-wangdian',name: '收缴款查询表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '回单管理',
        iconCls: 'icon iconfont icon-huidanguanli',
        children: [
            { path: '/Receiptmanagement', component: Receiptmanagement,iconCls: 'icon iconfont icon-wangdian', name: '应返回单' },
            { path: '/Receiptmanagement', component: Receiptmanagement,iconCls: 'icon iconfont icon-wangdian', name: '应收回单' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '客户管理',
        iconCls: 'icon iconfont icon-xinlaokehuguanli',
        children: [
            { path: '/Customermanagement', iconCls: 'icon iconfont icon-ryxxwhh',component: Customermanagement, name: '客户详细资料维护'
                // children:[
                //     { path: '/Customermanagement', component: Customermanagement,iconCls: 'icon iconfont icon-kehuguanli7', name: '客户详细资料维护' },
                // ]
            },
            { path: '/Maintenancecontacts', iconCls: 'icon iconfont icon-renyuanweihu',component: Maintenancecontacts, name: '维护联系人'},
            { path: '/Contract', iconCls: 'icon iconfont icon-hetongguanli-copy-copy',component: Contract, name: '合同管理'},

        ]
    },
    {
        path: '/',
        component: Home,
        name: '中转外发商管理',
        iconCls: 'icon iconfont icon-huidanguanli',
        children: [
            {  path:'/Transshipmentoutward',iconCls: 'icon iconfont icon-huidanguanli',component: Transshipmentoutward, name: '中转外发承运商管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'icon iconfont icon-tongjitubiao',
       /* leaf: true,//只有一个节点*/
        children: [
            { path: '/echarts', component: echarts, name: 'echarts'},
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
]
export default routes
