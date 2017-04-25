<template>
    <div class="doctor">
        <el-menu default-active="2" class="doctor-menu">
            <el-menu-item index="" class="profile">
                <i class="logo"></i>
            </el-menu-item>
            <el-menu-item index="1"><i class="el-icon-menu"></i>档案</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i>通知</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>设置</el-menu-item>
        </el-menu>
        <div class="docter-main">
            <dtHeader></dtHeader>
            <router-view class="main-wrap"></router-view>
        </div>
    </div>
</template>
<script>
    import dtHeader from '@/components/Header.vue';
    import util from '../../util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        components:{
            dtHeader
        },
        data () {
            return {

            }
        },
        methods:{
        },
        mounted () {
            userInfo.userid = localStorage.getItem("health.Dr");
            // console.log(userid);
            if(!util.checkPhone(userInfo.userid)) {
                this.$router.replace({
                                name: 'login'
                        })
            }
            this.$router.replace('/users/list')
        }
    }
</script>
<style lang="scss">
    .doctor {
        height:100%;
        padding-left:100px;
        .main-wrap{
            width:100%;
        }
        .doctor-menu {
            width:100px;
            height:100%;
            background-color:#12375C;
            float:left;
            margin-left:-100px;
            .el-menu-item  {
                min-height:56px;
              &.profile{
                margin-top:35px;
                margin-bottom:50px;
                span {
                    display:block;
                    height:20px;
                }
              }  
            }
            .logo {
                width:56px;
                height:56px;
                border-radius: 50%;
                display:inline-block;
                background-color:#fff;
               background-image: url(../../assets/logo.jpg);
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .el-menu-item {
                color:#fff;
            } 
        }
    }
    
    .el-table__expanded-cell{
        padding:0px;
    }
    .el-popover {
        padding:20px 10px 0;
    }
    @import "../../style/list.scss";
</style>
