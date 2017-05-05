<template>
    <div class="doctor">
        <el-menu default-active="/users/list"  :router="true" class="doctor-menu" theme="dark">
            <el-menu-item  class="profile" index="">
                <i class="icon logo"></i>
                <span>社区医生</span>
            </el-menu-item>
            <el-menu-item index="/users/list"><i class="fa fa-users"></i>档案</el-menu-item>
            
        </el-menu>
        <div class="docter-main">
            <dtHeader :name="name"></dtHeader>
            
            <router-view class="main-wrap">
            
            </router-view>
            
        </div>
        <div class="footer">
        ©2016-2017 杭州当堂信息技术有限公司 | 版权所有<br>浙ICP备15007132号-1
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
                name:''
            }
        },
        methods:{
        },
        mounted () {
            userInfo = JSON.parse(localStorage.getItem(util.localKey.login));
            console.log(userInfo);
            if(!userInfo) {
                this.$router.replace({
                                name: 'login'
                        })
            }else {
                this.name = userInfo.name
                 this.$router.replace('/users/list')
            }
           
        }
    }
</script>
<style lang="scss">
</style>
