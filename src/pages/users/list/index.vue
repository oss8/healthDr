<template>
<div class="patient">
    <el-row class="title">
        <el-col :span="24">
            <div class="grid-content">
                <h2>高危疾病监控</h2><el-button @click="dialogFormVisible = true"><i class="el-icon-plus"></i> 新建随访人</el-button>
            </div>
        </el-col>
    </el-row>
    <el-row class="list">
        <el-col :span="6" v-for="(patient, index) in patients" :key="patient.id" >
            <el-card :body-style="{ padding: '15px' }" class="info-box"  @click="patientClick(patient)">
                <div class="personal-data" >
                    <dl>
                        <dt>
                            <i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i>
                        </dt>
                        <dd>
                            <p class="name">{{patient.name}}</p>
                            <p class="info"><span class="sex">男</span><span class="age">{{patient.cardNo | ageFilter}}岁</span></p>
                            <p class="tags"><span class="tag tag-high">高血压患者</span></p>
                        </dd>
                    </dl>
                    <el-dropdown  class="doct-dropdown" trigger="click">
                        <el-button size="small" type="text">
                            <i class="el-icon-more"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>新增随访服务记录</el-dropdown-item>
                            <el-dropdown-item divided>修改随访人资料</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <table class="visit">
                    <tr><td colspan="2">最近一次随访：2017-04-01</td></tr>
                    <tr><td rowspan="2" width="80" align="center" class="key-red">偏高</td><td>血压 149/78 mmHg</td></tr>
                    <tr><td>脉搏 80 bpm</td></tr>
                </table>
            </el-card>
        </el-col>
    </el-row>
     <el-dialog custom-class="addContact" title="新建随访人资料" size="large" v-model="dialogFormVisible">
        <dtdialog ></dtdialog>
     </el-dialog>
</div>

</template>
<style lang="scss">
    @import "../../../style/list.scss";
</style>
<script>
    import util from '@/util'
    import dtdialog from './addDialog.vue'
    import is from 'is'
    var userInfo = {};
    export default {
      components:{
            dtdialog
        },
        data () {
            return {
                patients:[],
                dialogFormVisible:false,
            
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
            },
            patientClick(patient) {
                console.log('gogoo');
                this.$router.push('/users/detail');
            }
        },
        mounted () {
            userInfo = JSON.parse(localStorage.getItem(util.localKey.login)) ;
            if(userInfo.id.length > 0) {
                let params = {doctorid:'123'}
                util.postData('Doctors/RequestPatientList',{RequestPatientList:params})
                .then(data => {
                    this.patients = data.result;
                })
            } else {
                this.$router.replace({ name: 'login'})
            }

        
        }
    }

</script>
