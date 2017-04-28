<template>
<el-card :body-style="{ padding: '15px' }" class="infoForm">
    <el-form label-position="top" :model="followForm" :rules="rules" ref="followForm">
    <el-row :gutter="15">
        <el-col :span="12">
            <el-form-item label="本次随访日期" prop="thisDate">
                <el-date-picker type="date" placeholder="选择日期" v-model="followForm.thisDate" style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-col>
     
        <el-col :span="8">
        <el-form-item label="随访方式" prop="followType">
            <el-select placeholder="随访方式" v-model="followForm.followType" style="width: 100%;">
                <el-option label="电话" value="tel"></el-option>
                <el-option label="上门" value="door"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>危险因素</h4>
        </el-col>
    </el-row>
    <el-form-item prop="dangerType"> 
        <el-checkbox-group v-model="followForm.dangerType">
            <el-checkbox label="正常高值血压" name="dangerType" value="1"></el-checkbox>
            <el-checkbox label="超重或肥胖" name="dangerType" value="2"></el-checkbox>
            <el-checkbox label="长期膳食高盐" name="dangerType" value="3"></el-checkbox>
            <el-checkbox label="高血压家族史" name="dangerType" value="4"</el-checkbox>
            <el-checkbox label="长期过量饮酒" name="dangerType" value="5"></el-checkbox>
            <el-checkbox label="年龄≥55周岁" name="dangerType" value="6"></el-checkbox>
        </el-checkbox-group>
        
    </el-form-item>
    <el-form-item>
        <el-input placeholder="其他" size="small" v-model="followForm.dangerOther">
        </el-input>
    </el-form-item>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>主要体征</h4>
        </el-col>
        <el-col :span="6">
            <el-form-item label="血压(mmHg)" prop="bloodPressure" >
                <el-input  placeholder=""  v-model="followForm.bloodPressure"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5" >
            <el-form-item  type="number" label="体重(kg)" prop="weight">
                <el-input  placeholder="" type="number" v-model="followForm.weight"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item label="身高(cm)" prop="height">
                <el-input  placeholder="" type="number"  v-model="followForm.height"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5">
            <el-form-item label="体质指数(kg/m2)" prop="bmi">
                <el-input  placeholder="" v-model="followForm.bmi"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item label="腰围(cm)" prop="waistline">
                <el-input  placeholder="" type="number" v-model="followForm.waistline"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="24">
            <el-form-item label="其他" prop="bodyOther">
                <el-input  placeholder=""  v-model="followForm.other"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>生活方式指导</h4>
        </el-col>
        <el-col :span="6">
            <el-form-item label="吸烟量(支/天)"prop="smoke">
                <el-input  placeholder="" type="number" v-model="followForm.smoke"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="饮酒量(两/天)" prop="wine">
                <el-input  placeholder="" type="number" v-model="followForm.wine"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="摄盐情况(克/天)" prop="salt">
                <el-input  placeholder="" type="number" v-model="followForm.salt"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="食用油摄入(克/天)" prop="oil">
                <el-input  placeholder="" type="number" v-model="followForm.oil"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="运动(次/周)" prop="sportNum">
                <el-input  placeholder="" type="number" v-model="followForm.sportNum"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="运动(分钟/次)" prop="sportMinute">
                <el-input  placeholder="" type="number" v-model="followForm.sportMinute"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="心理调整" prop="heartDebug">
            <el-radio-group v-model="followForm.heartDebug">
                <el-radio label="良好" value="2"></el-radio>
                <el-radio label="一般" value="1"></el-radio>
                <el-radio label="差" value="0"></el-radio>
            </el-radio-group>
            
        </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>转归情况</h4>
        </el-col>
        <el-col :span="8">
        <el-form-item label="是否转归" prop="isBack">
            <el-radio-group v-model="followForm.isBack">
                <el-radio label="是" value="1"></el-radio>
                <el-radio label="否" value="0"></el-radio>
            </el-radio-group>
           
        </el-form-item>
        </el-col>
        <el-col :span="16">
        <el-form-item label="转归类别" prop="backType">
            <el-radio-group v-model="followForm.backType">
                <el-radio label="一般人群" value="1"></el-radio>
                <el-radio label="糖尿病患者" value="2"></el-radio>
                <el-radio label="高血压患者" value="3"></el-radio>
            </el-radio-group>
        </el-form-item>
        </el-col>
        <el-col :span="24" >
            <el-form-item label="转归原因" prop="backReason">
                <el-input  placeholder="" v-model="followForm.backReason"></el-input>
            </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>随访总结</h4>
        </el-col>
        <el-col :span="7" prop="accept">
        <el-form-item label="接受管理程度" v-model="followForm.accept">
            <el-radio-group v-model="followForm.accept">
                <el-radio label="接受" value="1"></el-radio>
                <el-radio label="不接受" value="0"></el-radio>
            </el-radio-group>
        </el-form-item>
        </el-col>
        <el-col :span="9">
        <el-form-item label="此次随访分类" prop="ctrlType">
            <el-radio-group v-model="followForm.ctrlType">
                <el-radio label="控制满意" value="1"></el-radio>
                <el-radio label="控制不满意" value="0"></el-radio>
            </el-radio-group>
        </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="辅助检查" prop="assistExam">
                <el-input  placeholder="" v-model="followForm.assistExam"></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label="下次随访日期" prop="nextDate">
            <el-date-picker type="date" placeholder="选择日期" v-model="followForm.nextDate" style="width: 100%;"></el-date-picker>
        </el-form-item>
        </el-col>
        
    </el-row>
    <el-form-item>
        <el-button type="primary" @click="submitForm('followForm')">保存</el-button>
        <el-button @click="resetForm('followForm')">重置</el-button>
    </el-form-item>
    </el-form>
</el-card>
</template>
<style lang="scss">
</style>
<script>
    import util from '@/util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        props:{
            id:String
        },
        data () {
            return {
                followForm:{
                    thisDate:'',
                    followType:'tel',
                    dangerType:[],
                    dangerOther:'',
                    bloodPressure:'',
                    weight:0,
                    height:170,
                    bmi:0,
                    waistline:0,
                    bodyOther:'',
                    smoke:0,
                    wine:0,
                    salt:0,
                    oil:0,
                    heartDebug:0,
                    sportNum:0,
                    sportMinute:0,
                    isBack:0,
                    backType:1,
                    backReason:'',
                    accept:1,
                    ctrlType:'1',
                    assistExam:'',
                    nextDate:''
                },
                rules:{
                    thisDate:[
                        { type: 'date',required: true, message: '请选择此次随访日期', trigger: 'blur' }
                    ],
                    followType:[
                        { required: true, message: '请选择随访方式', trigger: 'blur' }
                    ],
                    dangerType:[
                        {type: 'array', required: true, message: '请选择危险因素', trigger: 'blur' }
                    ],
                    bloodPressure:[
                        { required: true, message: '请输入血压', trigger: 'blur' }
                    ],

                    weight:[
                        { required: true,maxlength:3, message: '请输入体重', trigger: 'blur' }
                    ],
                    height:[
                        { required: true,maxlength:3, message: '请输入身高', trigger: 'blur' }
                    ],
                    bmi:[
                        { required: true,maxlength:3, message: '请输入体质指数', trigger: 'blur' }
                    ],
                    waistline:[
                        { required: true,maxlength:3, message: '请输入腰围', trigger: 'blur' }
                    ],
                  
                    smoke:[
                        { required: false,maxlength:3, message: '请输入吸烟量', trigger: 'blur' }
                    ],
                    wine:[
                        { required: false,maxlength:3, message: '请输入饮酒量', trigger: 'blur' }
                    ],
                    salt:[
                        { required: false,maxlength:3, message: '请输入摄盐情况', trigger: 'blur' }
                    ],
                    oil:[
                        { required: false,maxlength:3, message: '请输入食用油摄入', trigger: 'blur' }
                    ],
                    sportNum:[
                        { required: false,maxlength:3, message: '请输入运动次数', trigger: 'blur' }
                    ],
                    sportMinute:[
                        { required: false,maxlength:5, message: '请输入运动分钟数', trigger: 'blur' }
                    ],
                    isBack:[
                        { required: true, message: '请选择是否转归', trigger: 'blur' }
                    ],
                    backType:[
                        { required: true, message: '请选择转归类型', trigger: 'blur' }
                    ],
                    backReason:[
                        { required: true, message: '请输入转归原因', trigger: 'blur' }
                    ],
                    accept:[
                        { required: true, message: '请选择接受管理程度', trigger: 'blur' }
                    ],
                    ctrlType:[
                        { required: true, message: '请选择随访分类', trigger: 'blur' }
                    ],
                    assistExam:[
                        { required: false, message: '请输入辅助检查', trigger: 'blur' }
                    ],
                    nextDate:[
                        {type: 'date', required: true, message: '请选择下次随访日期', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    let params = {doctorid:'123',pantientid:this.id,context:JSON.stringify(this.followForm)}
                    console.log(params);
                    util.postData('Doctors/AddPantientFollow',{AddPantientFollow:params})
                    .then(data => {
                        util.toast('添加成功');
                    })
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
            console.log(this.id);
            // this.$router.replace('/users/list')
        }
    }
</script>