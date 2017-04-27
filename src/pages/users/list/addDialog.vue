<template>
        <div>
            <div>
                <el-form label-position="top" :model="addForm" :rules="rules" ref="addForm" >
                <el-row :gutter="15">
                    <el-col :span="6">
                    <el-form-item label="姓名" prop="name">
                        <el-input  placeholder="姓名" maxlength="20" v-model="addForm.name"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="4">
                    <el-form-item label="性别" prop="sex">
                        <el-select placeholder="请选择" v-model="addForm.sex">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="7">
                    <el-form-item label="联系电话" prop="mobile">
                        <el-input  placeholder="手机号" maxlength="11" minlength="11" v-model="addForm.mobile"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="7">
                    <el-form-item label="随访类型" prop="followType">
                        <el-select placeholder="请选择" v-model="addForm.followType">
                            <el-option label="高血压患者" value=""></el-option>
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
                    <el-input placeholder="卡号" maxlength="18" minlength="15" v-model="addForm.cardNo">
                        <el-select slot="prepend" placeholder="请选择类型" class="card-select" v-model="addForm.cardType">
                            <el-option label="身份证" value="1"></el-option>
                            <el-option label="医疗卡号" value="2"></el-option>
                        </el-select>
                    </el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col :span="8">
                    <el-form-item label="居住地址/省份" prop="provice">
                        <el-select placeholder="省份" v-model="addForm.provice">
                            <el-option label="浙江" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="城市" prop="city">
                        <el-select placeholder="城市" v-model="addForm.city">
                            <el-option label="杭州" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="区域" prop="area">
                        <el-select placeholder="区域" v-model="addForm.area">
                            <el-option label="拱墅" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-col>
                    
                    <el-col :span="24">
                    <el-form-item label="" prop="address">
                        <el-input  placeholder="详细地址" maxlength="50" v-model="addForm.address"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" class="" @click="submitForm('addForm')">保存</el-button>
                <el-button class="" @click="resetForm('addForm')">重置</el-button>
            </span>
        </div>
        
    
</template>

<script>
    import util from '@/util'
    
     export default {
        props:{
            model:Boolean,
            data:Array
        },
        data () {
            return {
                addForm:{
                    name:'',
                    sex:null,
                    mobile:'',
                    followType:null,
                    brithYear:null,
                    brithMonth:null,
                    cardType:null,
                    cardNo:'',
                    provice:'',
                    city:'',
                    area:'',
                    address:''
                },
                constData:util.constData,
                rules:{
                    name:[
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    sex:[
                        { required: true, message: '请输入性别', trigger: 'blur' }
                    ],
                    mobile:[
                        { required: true, message: '请输入手机号码', trigger: 'blur' }
                    ],
                    followType:[
                        { required: true, message: '请选择随访类型', trigger: 'blur' }
                    ],
                    brithYear:[
                        { required: true, message: '请选择出生年份', trigger: 'blur' }
                    ],
                    brithMonth:[
                        { required: true, message: '请选择出生月份', trigger: 'blur' }
                    ],
                    cardType:[
                        { required: true, message: '请选择卡片类型', trigger: 'blur' }
                    ],
                    cardNo:[
                        { required: true, message: '请输入卡号', trigger: 'blur' }
                    ],
                    provice:[
                        { required: true, message: '请选择省份', trigger: 'blur' }
                    ],
                    city:[
                        { required: true, message: '请选择城市', trigger: 'blur' }
                    ],
                    area:[
                        { required: true, message: '请选择区域', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted () {
            console.log(util.constData.years);
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