<template>
    <div class="header">
        <div class="logo"></div>
        <div class="login">您好<span class="userName">{{name}}</span><el-button type="text" @click="exit()">退出</el-button></div>
    </div>
</template>


<style lang="scss">
     @import "../style/common.scss";
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