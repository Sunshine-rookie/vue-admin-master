<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="3" class="logo">
                欢迎使用
            </el-col>
            <el-col :span="5">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="10" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">登录员工： [{{sysUserName}}]&nbsp; &nbsp; </span>

                    <span class="el-dropdown-link userinfo-inner">登录网点： [{{sysUserName}}]</span>

                </el-dropdown>
                <el-button @click="logout" size="mini" class="buTTon">退出登录</el-button>
            </el-col>

        </el-col>
        <!-- 内容 -->
        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!--导航菜单-->
                <el-col :span="23" id="searchbar">
                    <el-col :span="24" id="search" v-show="!collapsed">
                        <!-- 搜索框 -->
                        <el-col :span="18">
                            <div style="height:30px;line-height:30px;margin:0 8px;">
                                <el-input type="text" placeholder="" size="mini" v-model="msg">
                                    <!-- <img src="../assets/img/search.png" alt="" style="vertical-align:middle;margin-left: 3px;cursor: pointer;"> -->
                                </el-input>
                            </div>
                        </el-col>
                        <!-- 搜索按钮 -->
                        <el-col :span="3" id="search-btn" v-show="!collapsed">
                            <!-- <img src="../assets/img/search.png" alt="搜索"> -->
                        </el-col>
                        <!-- 隐藏按钮 -->
                        <el-col :span="3">
                            <div @click.prevent="collapse" class="borderlayout-btn"></div>
                        </el-col>
                    </el-col>

                    <el-col :span="24">
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                                 unique-opened router v-show="!collapsed">
                            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                                <el-submenu :index="index+''" v-if="!item.leaf">
                                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                                    <div v-for="child in item.children">
                                        <el-submenu v-if="child.children" :index="child.path" >
                                            <template slot="title"><i :class="child.iconCls"></i>{{child.name}}</template>
                                            <el-menu-item  v-for="child2 in child.children" :index="child2.path" :key="child2.path" @click="addTab(editableTabsValue2,child2.name,child2.path)">
                                                <i :class="child2.iconCls"></i>{{child2.name}}
                                            </el-menu-item>
                                        </el-submenu>
                                        <el-menu-item  v-if="!child.children && !child.hidden" :index="child.path" :key="child.path" @click="addTab(editableTabsValue2,child.name,child.path)" ><i :class="child.iconCls"></i>{{child.name}}</el-menu-item>
                                    </div>
                                </el-submenu>
                                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                            </template>

                        </el-menu>
                        <!--导航菜单-折叠后-->
                        <!-- <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                            <li v-for="(item,index) in routerOptions" v-if="!item.hidden" class="el-submenu item">
                                <template v-if="!item.leaf">
                                    <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                                    <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                        <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''"
                                            @click="addTab(editableTabsValue2,child.name,$router.push(child.path))">{{child.name}}</li>

                                    </ul>
                                </template>
                                <template v-else>
                                    <li class="el-submenu">
                                        <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                                    </li>
                                </template>
                            </li>
                        </ul> -->
                    </el-col>

                </el-col>
                <!-- 间隙箭头 -->
                <el-col :span="1" id="splt">
                    <div class="z-west-splt" @click.prevent="collapse">
                        <span class="z-west-splt-btn"></span>
                    </div>
                </el-col>
            </aside>

           <!-- 导航菜单和路由内容 -->
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
                            <el-tab-pane v-for="(item, index,key) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
                                <span style="display: none">{{item.content}}</span>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </div>
                <el-col :span="24" class="content-wrapper">
                        <router-view></router-view>
                </el-col>
            </section>
        </el-col>

        <!-- 底部 -->
        <el-col :span="24" class="footer">
            <div style="text-align:center;position:relative;">
                <span style="position:absolute;top:0;left:0;">上次登录：<span id="cg">{{date}}</span></span>&nbsp;&nbsp;&nbsp;
                <span>© Copyright &nbsp;2017&nbsp;&nbsp;</span><span><a href="#" style="color:#184c93;">霄邦物流</a></span>&nbsp;&nbsp;&nbsp;版权所有
            </div>
        </el-col>

    </el-row>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";

    export default {
        components: {ElButton},

        data() {
            return {
                msg:'',
                path:this.$route.path,
                routerOptions:this.$router.options.routes,
                sysName:'VUEADMIN',
                collapsed:false,
                sysUserName: '',
                sysUserAvatar: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                date:new Date().toLocaleString(),
                //table 切换
                editableTabsValue2: '',
                editableTabs2: [{
                    title: '首页',
                    name:'首页',
                    content: '/table'
                }],
                tabIndex: 0
            }

        },
        beforeCreate:function() {
            sessionStorage.removeItem("key")
        },
        methods: {
            //新增table
            addTab(targetName,title,content) {
                var val = sessionStorage.getItem("key");//读取本地存储内容
                  var newTabName = ++this.tabIndex + '';
                //第一次点的时候本地存储为空
                if(val === null){
                    var value = {name:[]}
                    value.name.push(title)
                    value = JSON.stringify(value)
                    sessionStorage.setItem("key",value)

                    this.editableTabs2.push({
                        title:title,
                        name: newTabName,
                        content:content
                    });
                    this.editableTabsValue2 = newTabName;

                }else{
                    val = JSON.parse(val);
                        var judge = true;
                        for(var i=0;i<val.name.length;i++){
                            if(val.name[i]==title){
                                var j=i+1
                                this.editableTabsValue2=''+j;
                                judge = false;
                                break;
                            }
                        };
                        if(judge == true){
                            this.editableTabs2.push({
                                title:title,
                                name: newTabName,
                                content:content
                            });
                            this.editableTabsValue2 = newTabName;

                            val.name.push(title)

                            val = JSON.stringify(val)
                            sessionStorage.setItem("key",val)
                        }


                }


                console.log(title)
                console.log(targetName)
                console.log(content)
                console.log(this.$route.path)

                //样式

            },
            open() {
                this.$alert('此窗口已打开，请勿重复打开！', '标题名称', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${ action }`
                    });
                  }
                })
            },
            //删除table
            removeTab(targetName) {
                var val = sessionStorage.getItem("key");
                val = JSON.parse(val)
                var sess2=val.name.concat()
                    sessionStorage.removeItem("key")
                console.log(sess2)
                //alert(targetName)
                sess2.splice(targetName,1);
                val.name=sess2.concat()
                console.log(sess2)
                console.log(val.name[0].length)
                //alert(targetName)
                console.log(this.editableTabsValue2)
                console.log(this.editableTabs2)
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    this.$router.go(-1)
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                        console.log(tab.title)
                    });
                }
                val = JSON.stringify(val);
                sessionStorage.setItem("key",val)
                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            },
            //跳转table
            handleClick(tab, event) {

                //console.log(tab)
                //console.log(tab.$route.fullPath);
                //console.log(tab.$el.innerText);
                this.$router.push(""+tab.$el.innerText);

            },
            onClick1(){
               this.$router.push({path:'/main'})
            }
            ,
             /*   close_label(ev){
                    var ev = ev||window.event;
                    var target = ev.target || ev.srcElement;
                    var val = sessionStorage.getItem('key');
                    var ul=document.getElementsByClassName("navbar-list")[0];
                    var list=ul.getElementsByTagName('li');

                        if(target.nodeName.toLowerCase() == 'i'){
                            target.parentNode.parentNode.remove();
                            sessionStorage.removeItem("key".name);
                        }
                        if(target.nodeName.toLowerCase() == 'div'){
                           alert(this.target.innerHTML)
                            this.$router.push('/main')
                        }
                    /!*val = JSON.parse(val);*!/

                    console.log(target.parentNode.childNodes[0].innerHTML)
                   /!* list.css({
                        Color: "blue"
                    })*!/
                },*/
            onSubmit() {
            //  console.log('submit!');
            },
            handleopen(key, keyPath) {
                //console.log(this.$route.path);
                //console.log(this.$router.options.routes);
                //console.log(key, keyPath);
                //console.log('handleopen');
            },
            handleclose(key, keyPath) {
            //  console.log(key, keyPath);
            //  console.log('handleclose');
            },
            handleselect: function (a,ev, b) {
            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                }).catch(() => {
                });
            },
            //折叠导航栏
            collapse:function(){
                this.collapsed=!this.collapsed;
            },
            showMenu(i,status){
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
            }
        },
        watch:{
            $route () {
                //console.log(this.$route.name);
            },

            msg(val,oldval) {

                var routename=this.routerOptions
                for(var i=0;i<routename.length;i++){
                    console.log(routename[3].name)
                    if(val== routename[i].name){
                        console.log(this)
                        this.path = '/'+val;
                        console.log(this.path)
                        console.log(val);
                        this.$router.push('/val');

                    }
                }

            }
        },
        method(){

        },
        mounted() {
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }

        }
    }

</script>

<style  lang="scss">
    .container {
        .el-submenu__title {
            height: 40px;
            line-height: 40px;
        }
        .el-input {
            width: 157px;
            height: 16px;
            border-width: 1px;
            border: 0px solid #bfcbd9;
            font-size: 12px; //    padding: 10px 12px 5px 0;
        }
        .el-input__icon {
            top: 3px;
        }
        .el-input__inner {
            height: 22px;
            line-height: 23px;
            border-radius: 0;
        }
        .el-pagination {
            border: 1px solid #dfe6ec;
            border-top: 0;
        }
        .el-form-item {
            margin-bottom: 0;
            .el-form-item__label {
                font-size: 12px;
                padding: 10px 12px 10px 0;
            }
            .el-form-item__content {
                line-height: 30px;
                .el-date-picker, .el-select {
                    width: 157px;
                    height: 16px;
                    line-height: 16px;
                }
                .el-select .el-input .el-input__icon {
                    margin-top: 3px;
                }
            }
        }
        .iconfont {
            color:#20a0ff;
            font-size: 18px;
            margin-right: 10px;
        }
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            width:100%;
            height: 35px;
            line-height: 35px;
            background-color:#f2f2f2;
            background-size:100% 35px;
            background-repeat:repeat;
            .buTTon{
                //order-top-style: none;
                //order-right-style: none;
                //order-bottom-style: none;
                //order-left-style: none;
                border: 1px solid #184c93;
                color: #184c93;

            }
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    color:#184c93;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
            }
            .login-form-input .el-input__inner {

                border: 0 none;
                border-bottom: 1px solid #ccc;
                border-radius: 0px;
            }
            .logo {
                //width:230px;
                height:60px;
                font-size: 18px;
                font-style: italic;
                padding-left: 50px;

                img {
                    width: 40px;
                    float: left;

                }
                .txt {
                    color:#fff;
                }
            }
            .logo-width{
                width:230px;
            }
            .logo-collapse-width{
                width:0px
            }
            .tools{
                //display:inline-block;
                display:none;
                margin-left: 25px;
                padding: 0px 23px;
                width:14px;
                height: 35px;
                line-height: 35px;
                cursor: pointer;
                color:#184c93;
            }
        }
        .main {
            display: flex;
            // background: #324057;
            position: absolute;
            top: 35px;
            bottom: 0px;
            overflow: hidden;
            aside {
                flex:0 0 230px;
                width: 230px;
                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                #searchbar {
                    #search {
                        background-image: url(../assets/img/borderlayout-hm.png);
                        #search-btn {
                            margin-top: 10px;
                            padding-left: 5px;
                        }
                        .borderlayout-btn {
                            overflow: hidden;
                            width: 15px;
                            height: 15px;
                            float: right;
                            background: transparent no-repeat 0 0;
                            //background-image: url(../assets/img/borderlayout-btn.png);
                            margin-left: 2px;
                            cursor: pointer;
                            background-position: 0 -45px;
                            margin-top:6px;
                        }
                    }
                }
                #splt {
                    .z-west-splt {
                        height: 895px;
                        width: 6px;
                        background: transparent left;
                        background-image: url(../assets/img/splt-h.png);
                        border-right: 1px solid #cfcfcf;
                        .z-west-splt-btn {
                            display: inline-block;
                            width: 6px;
                            height: 50px;
                            line-height: 1px;
                            vertical-align: top;
                            font-size: 1px;
                            cursor: pointer;
                            opacity: .5;
                            background-repeat: no-repeat;
                            min-height: 50px;
                            margin-top: 422.5px;
                            background-image: url(../assets/img/colps-l.png);
                        }
                    }
                }
                .el-menu{
                    height: 100%;
                    background:#fff;
                    .el-menu-item {
                        height: 40px;
                        line-height:40px;
                        .el-submenu__title {
                            height: 40px;
                            line-height: 40px;
                        }
                    }
                    .el-menu-item:hover{
                        background-color:#f1d38e;
                    }
                    .el-menu-item.is-active {
                        color: #20a0ff;
                        padding-left: 40px;
                    }
                }
                .el-menu-vertical-demo {
                    height: 845px;
                    overflow: auto;
                }
                .collapsed{
                    width:60px;
                    .item{
                        position: relative;
                    }
                    .submenu{
                        position:absolute;
                        top:0px;
                        left:60px;
                        z-index:99999;
                        height:auto;
                        display:none;
                        background::#d1dbe5;
                    }
                }
            }
            .menu-collapsed{
                flex:0 0 0px;
                width: 0px;
            }
            .menu-expanded{
                flex:0 0 230px;
                width: 230px;
            }
            .content-container {
                // background: #f1f2f7;
                flex:1;
                // position: absolute;
                // right: 0px;
                // top: 0px;
                // bottom: 0px;
                // left: 230px;
                overflow-y: scroll;
                overflow: hidden;
                width: 100%;
                height:100%;
                padding: 0 4px 4px 4px;
                margin: 0px;
                //border: 1px solid #cfcfcf;
                .breadcrumb-container {
                    //margin-bottom: 15px;
                    border: 1px solid #cfcfcf;
                    border-bottom: 0px solid #cfcfcf;
                    padding: 1px 0 0 1px;
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: right;
                    }
                }
                .el-tabs__header,.el-tabs__nav-wrap,.el-tabs__nav-scroll,.el-tabs__nav,.el-tabs__item{
                    background:#f9f9f9;
                    margin: 0;
                    height: 26px;
                    line-height:26px;
                    font-size:12px;
                }

                .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable {
                    background: #fff;
                }
                .toolbar{
                    margin: 3px 0px;
                }
                .content-wrapper {

                    background-color: #fff;
                    box-sizing: border-box;
                    overflow-y: scroll;
                    height: 100%;
                    border-top: 0;
                    //border-left: 1px solid #cfcfcf;
                    //padding-left: 4px;
                    padding-top: 3px;
                    padding-right:1px;
                }
            }
        }
        .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 20px;
            background: #eeeeee;
            font-family: arial, sans-serif;
            font-size: 12px;
            font-weight: normal;
        }

        //form
        .el-table {
            width: 100%;
            font-size:12px;
            overflow: hidden;
            th>.cell {
                background-image:url('../assets/img/column-bg.png');
                height: 30px;
                line-height: 30px;
            }
            th {
                background-image:url('../assets/img/column-bg.png');
            }
            .cell {
                line-height: 25px;
                word-break:keep-all;
                padding: 0;
                text-align: center;
                white-space:nowrap;
            }
            td,th {
                overflow: hidden;
                border: 1px solid;
                border-color: #cfcfcf #cfcfcf #cfcfcf white;
                border-top: 0;
                line-height:25px;
                height:25px;
            }

        }

        /* Dialog */
        .el-dialog {
            .el-dialog__header {
                padding: 0px 20px 0;
                height: 32px;
                line-height: 32px;
                background: #f2f2f2;
            }
            .el-dialog__body {
                padding: 10px 20px;
            }
            //upload

            .el-upload-list {
                float: right;
            }
            .el-upload-list__item {
                float: left;
                margin-top: 0;
            }
        }

    }
</style>
