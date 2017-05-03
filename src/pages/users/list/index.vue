<template>
<div class="patient">
    <el-row class="title">
        <el-col :span="24">
            <div class="grid-content">
                <h2>高危疾病监控</h2><el-button @click="modifyPatient({})"><i class="el-icon-plus"></i> 新建随访人</el-button>
            </div>
        </el-col>
    </el-row>
    <el-row class="list">
        <el-col :span="6" v-for="(patient, index) in patients" >
            <el-card :body-style="{ padding: '10px' }" class="info-box"  >
                <div class="personal-data"  @click="patientClick(patient)">
                    <dl>
                        <dt>
                            <i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i>
                        </dt>
                        <dd>
                            <p class="name">{{patient.name || '匿名'}}</p>
                            <p class="info"><span class="sex">{{patient.sex | sexFilter}}</span><span class="age">{{patient.cardNo | ageFilter}}岁</span></p>
                            <p class="tags"><span class="tag tag-high">高血压患者</span></p>
                        </dd>
                    </dl>
                    <el-dropdown  class="doct-dropdown" trigger="hover" @command="handleCommand">
                        <el-button size="small" type="text">
                            <i class="el-icon-more"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :command="'add'+index">新增随访服务记录</el-dropdown-item>
                            <el-dropdown-item divided :command="'edit'+index">修改随访人资料</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <table class="visit" >
                    <tr><td colspan="2">最近一次随访：{{patient.lastfollowuptime | timeFilter}}   </td></tr>
                    <tr v-if="patient.lastfollowupcontext"><td  width="80" align="center" class="key-red">{{ (patient.context.bloodHigh+'/'+patient.context.bloodLow) | bloodFilter}}</td><td>血压 {{patient.context.bloodHigh+'/'+patient.context.bloodLow}}  mmHg</td></tr>
                </table>
            </el-card>
        </el-col>
    </el-row>
     <el-dialog custom-class="addContact" title="新建随访人资料" size="large" v-model="dialogFormVisible">
        <dtdialog :data="editPatient" v-on:saveSuccess="saveSuccess"></dtdialog>
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
                editPatient:{},
                patients:[],
                dialogFormVisible:false,
            
            }
        },
        methods:{
            handleCommand (command) {
                let index = command.replace(/[^0-9]/ig,""); 
                let patient = this.patients[index];
                if(command.indexOf('add') > -1) {
                    patient.edit = true;
                    this.$router.push({name:'detail',params:{selectPatient:patient,patients:this.patients}});
                } else {
                    this.editPatient = patient;
                    this.dialogFormVisible = true;
                }
            },
            modifyPatient (patient) {
                console.log(patient);
                this.editPatient = {};
                this.dialogFormVisible = true;
            },
            patientClick (patient) {
                this.$router.push({name:'detail',params:{selectPatient:patient,patients:this.patients}});
            },
            saveSuccess () {
                this.requestList();
                this.dialogFormVisible = false;
            },
            requestList () {
                let params = {doctorid:userInfo.id}
                util.postData('Doctors/RequestPatientList',{RequestPatientList:params})
                .then(data => {
                    console.log(data.result);
                    this.patients = data.result.map(item => {
                        let context = {dangerType:[]}
                        try
                            {
                                context = JSON.parse(item.lastfollowupcontext);
                                if(context.height && context.height !=0) {
                                    context.bmi = (context.weight/((context.height*context.height)/10000)).toFixed(2)
                                }
                            }
                        catch(err)
                            {

                            }
                            console.log(context);
                             item.context = context;
                        
                        console.log(item.context);
                        return  item;
                    })
                    
                })
            }
        },
        mounted () {
            userInfo = JSON.parse(localStorage.getItem(util.localKey.login)) ;
            if(userInfo.id.length > 0) {
                this.requestList()
            } else {
                this.$router.replace({ name: 'login'})
            }
   
        }
    }

</script>
