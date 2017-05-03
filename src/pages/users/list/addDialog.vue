<template>
        <div>
            <div>
                <el-form label-position="top" :model="addForm" :rules="rules" ref="addForm" >
                <el-row :gutter="15">
                    <el-col :span="6">
                    <el-form-item label="姓名" prop="pname">
                        <el-input  placeholder="姓名"  v-model="addForm.pname"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="4">
                    <el-form-item label="性别" prop="psex">
                        <el-select placeholder="请选择" v-model="addForm.psex">
                            <el-option label="男" value="0"></el-option>
                            <el-option label="女" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="7">
                    <el-form-item label="联系电话" prop="pmobile">
                        <el-input  placeholder="手机号"v-model="addForm.pmobile"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="7">
                    <el-form-item label="随访类型" prop="casetype">
                        <el-select placeholder="请选择" v-model="addForm.casetype">
                            <el-option label="高血压患者" value="htn"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col :span="7">
                    <el-form-item label="出生年" prop="brithYear">
                        <el-select placeholder="年" v-model="addForm.brithYear">
                            <el-option v-for="year in constData.years" :label="year" :value="year"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="3">
                    <el-form-item label="月" prop="brithMonth">
                        <el-select placeholder="月" v-model="addForm.brithMonth">
                            <el-option v-for="month in constData.months" :label="month" :value="month"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                   
                    <el-col :span="14">
                    <el-form-item label="卡号" prop="cardNo">
                    <el-input placeholder="卡号"  v-model="addForm.cardNo">
                        <el-select slot="prepend" placeholder="请选择类型" class="card-select" v-model="addForm.cardType">
                            <el-option label="身份证" value="idCard"></el-option>
                            <el-option label="医疗卡号" value="'medicalId'"></el-option>
                        </el-select>
                    </el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col :span="8">
                    <el-form-item label="居住地址/省份" prop="proviceIndex">
                        <el-select placeholder="省份" v-model="addForm.proviceIndex">
                            <el-option v-for="(provice,index) in constData.maps" :label="provice.name" :value="index"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="城市" prop="cityIndex">
                        <el-select placeholder="城市" v-model="addForm.cityIndex" >
                            <el-option  v-for="(city,index) in constData.maps[addForm.proviceIndex].city" :label="city.name" :value="index"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="区域" prop="regionIndex">
                        <el-select placeholder="区域" v-model="addForm.regionIndex">
                            <el-option v-for="(region,index) in ((constData.maps[addForm.proviceIndex].city)[addForm.cityIndex].area)" :label="region" :value="index"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    
                    <el-col :span="24">
                    <el-form-item label="" prop="address">
                        <el-input  placeholder="详细地址"  v-model="addForm.address"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" class="" @click="submitForm('addForm')">保存</el-button>
                <el-button class="" @click="resetForm('addForm')">重置</el-button>
            </div>
        </div>
        
    
</template>

<script>
    import util from '@/util'
    let userId = '';
     export default {
        props:{
            data:Object
        },
        data () {
            return {
                addForm:{
                        pname:(this.data.name  || ''),
                        psex:this.data.sex  || '男',
                        pmobile:this.data.mobile  || '',
                        cardType:'idCard',
                        brithYear:'',
                        brithMonth:'',
                        casetype:'htn',
                        cardNo:this.data.cardNo  || '',
                        proviceIndex:0,
                        cityIndex:0,
                        regionIndex:0,
                        address:this.data.address  || '',
                        pcardno:'',
                        pmedicalNo:''  
                    },
                
                constData:util.constData,
                rules:{
                    pname:[
                        { required: true,maxlength:20, message: '请输入姓名', trigger: 'blur' }
                    ],
                    psex:[
                        { required: true, message: '请输入性别', trigger: 'blur' }
                    ],
                    pmobile:[
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    followType:[
                        { required: true, message: '请选择随访类型', trigger: 'blur' }
                    ],
                    brithYear:[
                        {type:'string', required: true, message: '请选择出生年份', trigger: 'blur' }
                    ],
                    brithMonth:[
                        {type:'string', required: true, message: '请选择出生月份', trigger: 'blur' }
                    ],
                    casetype:[
                        { required: true, message: '请选择卡片类型', trigger: 'blur' }
                    ],
                    cardNo:[
                        { required: true, message: '请输入卡号', trigger: 'blur' }
                    ],
                    // provice:[
                    //     { required: true, message: '请选择省份', trigger: 'blur' }
                    // ],
                    // city:[
                    //     { required: true, message: '请选择城市', trigger: 'blur' }
                    // ],
                    // region:[
                    //     { required: true, message: '请选择区域', trigger: 'blur' }
                    // ],
                    address:[
                        { required: true,maxlength:50, message: '请输入详细地址', trigger: 'blur' }
                    ]
                }
            }
        },
        watch: {
            data (newData) {
               this.updateData(newData);
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    let params = this.addForm;
                    if(this.data.id) {
                        params.patientid = this.data.id;                       
                    }
                    params.birthday = params.brithYear + '/' + params.brithMonth;
                    params.doctorid = userId;
                    let provice = this.constData.maps[this.addForm.proviceIndex];
                    let city = provice.city[this.addForm.cityIndex];
                    params.province = provice.name;
                    params.city = city.name;
                    params.region = city.area[this.addForm.regionIndex]
                    if(params.cardType == 'idCard') {
                        params.pcardno = params.cardNo;
                    } else {
                        params.pmedicalNo = params.cardNo;
                    }
                    
                    util.postData('Doctors/AddPatient',{AddPatient:params})
                    .then(data => {
                        if (params.patientid) {
                            util.toast('保存成功');
                        } else {
                            util.toast('添加成功');
                        }
                        this.$emit('saveSuccess');
                        this.$refs[formName].resetFields();
                    })
                    .catch(err => {

                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            updateData (newData) {
                console.log('newData');
                console.log(newData.birthday);
                let brithYear = '';
                let brithMonth = '';
                let pindex = 0;
                let cindex =0;
                let rindex = 0;
                if (newData.name) {
                    
                    if (newData.birthday) {
                        let arr = newData.birthday.split('/');
                        brithYear = arr[0] || '';
                        brithMonth = arr[1] || '';
                    }
                    
                    util.constData.maps.forEach((item,index) => {
                        if (item.name === newData.province) {
                                pindex = index;
                                item.city.forEach((city,cityindex) => {
                                    if(city.name === newData.city) {
                                        cindex = cityindex;
                                        city.area.forEach((region,regionindex) => {
                                            if(this.data.region === region) {
                                                rindex = regionindex;
                                            }
                                        })
                                    }
                                })
                                
                        }
                    })
                    
                }
                this.addForm.pname = newData.name  || '';
                this.addForm.psex = newData.sex  || '男';
                this.addForm.pmobile  = newData.mobile  || '';
                this.addForm.cardNo = newData.cardNo  || '';
                this.addForm.brithYear = brithYear;
                this.addForm.brithMonth = brithMonth;
                this.addForm.proviceIndex = pindex;
                this.addForm.cityIndex = cindex;
                this.addForm.regionIndex = rindex;
                this.addForm.address = newData.address  || '';
            },
            cancelAdd () {

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted () {
            userId = JSON.parse(localStorage.getItem(util.localKey.login)).id ;
            this.$refs['addForm'].resetFields();
            this.updateData(this.data);
        }
    };
</script>
<style lang="scss">
.card-select{
    .el-input {
        width: 120px;
    }
}
</style>