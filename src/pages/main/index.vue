<template>
    <div class="doctor">
            <el-menu default-active="2" class="main-menu">
                <el-menu-item index="" class="profile">
                    <i class="logo"></i>
                </el-menu-item>
                
                <el-menu-item index="1"><i class="el-icon-menu"></i>档案</el-menu-item>
                <el-menu-item index="2"><i class="el-icon-message"></i>通知</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>设置</el-menu-item>
            </el-menu>
            <router-view class="second-router"></router-view>
    </div>
</template>
<script>

    import util from '../../util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        data () {
            return {

            }
        },
        methods:{
        },
        mounted () {
            this.$router.replace('/list/login');
        }
    }
</script>
<style lang="scss">
    .doctor {
        height:100%;
        .second-router {
            display:inline-block;
            // width:50%;
            width:calc(100% - 100px);
        }
        .main-menu {
            
            width:100px;
            height:100%;
            background-color:#12375C;
            float:left;
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
