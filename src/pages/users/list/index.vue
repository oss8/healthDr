<template>
    <div>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
    </div>
</template>
<script>
    import util from '@/util'
    import is from 'is'
    var userInfo = {};
    export default {
      
        data () {
            return {

            }
        },
        methods:{
            postAddPatientFollow () {
                let params = {}
                util.postData('Doctors/AddPantientFollow',{AddPantientFollow:params})
                .then(data => {

                })
            },
            postAddPatient () {
                let params = {}
                util.postData('Doctors/AddPantient',{AddPantient:params})
                .then(data => {

                })
            }
        },
        mounted () {
            userInfo = JSON.parse(localStorage.getItem(util.localKey.login)) ;
            if(userInfo.id.length > 0) {
                let params = {doctorid:userInfo.id}
                util.postData('Doctors/RequestPatientList',{RequestPatientList:params})
                .then(data => {

                })
            } else {
                this.$router.replace({ name: 'login'})
            }
        }
    }

</script>
<style lang="scss">
    @import "../../../style/list.scss";
</style>
