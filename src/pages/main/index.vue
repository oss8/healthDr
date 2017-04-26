<template>
    <div class="doctor">
        <el-menu default-active="1" class="doctor-menu" theme="dark">
            <el-menu-item index="" class="profile">
                <i class="icon logo"></i>
                <span>社区医生</span>
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
    import util from '@/util'
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
            // userInfo = JSON.parse(localStorage.getItem(util.localKey.login)) ;
            // console.log(userInfo);
            // if(userInfo.id.length == 0) {
            //     this.$router.replace({
            //                     name: 'login'
            //             })
            // }
            this.$router.replace('/users/list')
        }
    }
</script>
<style lang="scss">

    
    .el-table__expanded-cell{
        padding:0px;
    }
    .el-popover {
        padding:20px 10px 0;
    }
</style>
