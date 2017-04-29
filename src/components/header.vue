<template>
    <el-row class="header">
    <el-col :span="16">
         <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/users/list' }">档案</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'detail' }">详情</el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
   
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <el-input placeholder="搜索" icon="search" class="doct-search"></el-input>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content bg-purple">
                <div class="login">您好<span class="userName">{{name}}</span><el-button type="text" @click="exit()">退出</el-button></div>
            </div>
        </el-col>
    </el-row>
</template>


<style lang="scss">
    //  @import "../style/common.scss";
</style>
<script>
    export  default {
        replace: true,
        props: {name:String},
        data () {
            return {}
        },
        methods:{
            exit() {
                localStorage.removeItem('eshine_channel');
                this.$router.replace({
                                name: 'login'
                            })
            }
        }
    }
  
</script>