<template>
    <div class="loginWrap">
        <div class="login">
            <div class="icon logo"></div>
            <el-form class="login-form" :model="registerForm" :rules="rules" ref="registerForm">
                <el-form-item class="form-item" prop="mobile">
                    <el-input type="tel" placeholder="手机号码" v-model="registerForm.mobile" name="mobile" ></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="name">
                    <el-input type="text" placeholder="姓名" v-model="registerForm.name" name="name" ></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="randCode">
                    <div class="input-box"><input type="tel" placeholder="验证码" v-model="registerForm.randCode"  maxlength=6><span class="input-btn-box"><el-button type="button" class="btn btn-send" :disabled="smsBtnDisabled" @click="sendSmsClick()">{{smsText}}</el-button></span></div>
                </el-form-item>
                <el-form-item class="form-item" prop="password">
                    <el-input type="password" placeholder="密码" v-model="registerForm.password"  ></el-input>
                </el-form-item>
                <el-form-item class="form-item" prop="confimPassword">
                    <el-input type="password" placeholder="确认密码" v-model="registerForm.confimPassword"  ></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button type="primary" size="large" class="btn-block" @click="register('registerForm')">注册</el-button>
                </el-form-item>
            </el-form>
            
        </div>
        <div class="footer" >
        ©2016-2017 杭州曼康信息技术有限公司 | 版权所有<br>浙ICP备15007132号-1
        </div>
    </div>
</template>
<script>
import util from '../../util'
import md5 from 'md5'
    export default {
        data () {
            var validateMobile = (rule, value, callback) => {
                console.log(value);
                    if(!util.checkPhone(value)) {
                        this.smsBtnDisabled = true;
                        callback(new Error('请输入正确的手机格式'));
                    }
                    this.smsBtnDisabled = false;
                    callback();
                };

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.registerForm.confimPassword !== '') {
                        this.$refs.registerForm.validateField('validateConfimPass');
                    }
                    callback();
                }
            };
            var validateConfimPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                registerForm: {
                    mobile:'',
                    name:'',
                    randCode:'',
                    password:'',
                    confimPassword:''
                },
                rules:{
                    mobile: [
                        { validator: validateMobile, trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    randCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    confimPassword: [
                        { validator: validateConfimPass, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                    
                },
                smsBtnDisabled:true,
                smsText:'短信获取验证码'
            }
        },
        methods:{
            sendSmsClick() {
                
                this.smsBtnDisabled = true;
                this.smsText = "正在发送...";
               
                let _this = this;
                if(validateInput.call(this,0)){
                    this.axios.post('Doctors/DoctorGetRandCode',{DoctorGetRandCode:{mobile:this.mobile}})
                    .then((data) => {
                        if (data.status == 1) {
                            util.toast('发送成功');
                            (function(me){
                                let time = 60
                                var  timer = setInterval(function(){
                                    if(time === 0) {
                                        me.smsBtnDisabled = false;
                                        me.smsText = '再次获取验证码';
                                        time = 59;
                                        clearInterval(timer);
                                    } else {
                                        time --;
                                        me.smsText = time + '秒';
                                    }
                                    
                                },1000);
                            })(_this)
                        } else {
                            _this.smsBtnDisabled = false;
                            _this.smsText = '短信获取验证码';
                            this.$message({
                                message:data.result,
                                type: 'error'
                            });
                        }
                        
                    })
                    .catch((err) => {
                        _this.smsBtnDisabled = false;
                        _this.smsText = '短信获取验证码';
                        this.$message({
                                message:'发送失败',
                                type: 'error'
                            });
                    })
                }
            },
            register(formName) {
                 this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {AddDoctor:this.registerForm};
                        this.axios.post('Doctors/AddDoctor',params)
                        .then((data) => {
                            if(data.status == 1) {
                                localStorage.setItem(util.localKey.login,data.result.DoctorInfo.id)
                                this.$router.replace({
                                    path: '/users/list'
                                })
                            } else {
                                this.$message({
                                    message:data.result,
                                    type: 'error'
                                });
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                // if(validateInput.call(this,1)){
                    
                //     var params = {AddDoctor:{mobile:this.mobile,password:md5(this.password),randcode:this.randCode}};
                //     this.axios.post('Doctors/AddDoctor',params)
                //     .then((data) => {
                //         if(data.status == 1) {
                //             localStorage.setItem(util.localKey.login,data.result.DoctorInfo.id)
                //             this.$router.replace({
                //                 path: '/users/list'
                //             })
                //         } else {
                //             this.$message({
                //                 message:data.result,
                //                 type: 'error'
                //             });
                //         }
                //     })
                // }
            },
            mobileChange (mobile) {
            //     console.log(mobile);
            //    if(util.checkPhone(mobile)) {
            //        this.smsBtnDisabled = false;
            //    } else {
            //        this.smsBtnDisabled = true;
            //    }
            }
        }
    };
    function validateInput(type) {
        if(!util.checkPhone(this.mobile)){
                this.$message({
                        message:'请填写正确的手机格式',
                        type: 'error'
                    });
                    return false;
            }
         if(type ==1) {
             if(this.randCode.length == 0 || this.password.length == 0 || this.name.length == 0) {
                this.$message({
                        message:'请补全信息',
                        type: 'error'
                    });
                    return false;
             } else if(this.password !== this.confimPassword) {
                this.$message({
                        message:'两次密码不一致哦',
                        type: 'error'
                    });
                    return false;
             }
            
        } 
        
        return true;
    }
</script>
<style lang="scss">
</style>
