<template>
    <div class="loginWrap">
        <div class="login">
            <i class="icon logo"></i>
            <el-form class="login-form">
                <el-form-item class="form-item">
                    <el-input type="tel" placeholder="手机号码" v-model="mobile" name="mobile" @change="mobileChange(mobile)" ></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-input type="password" placeholder="密码" v-model="code"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button type="primary" size="large" class="btn-block" @click="login()">登录</el-button>
                </el-form-item>
            </el-form>
            
        </div>
        <div class="footer">
        ©2016-2017 杭州当堂信息技术有限公司 | 版权所有<br>浙ICP备15007132号-1
        </div>
    </div>
</template>
<script>
import util from '@/util'
import md5 from 'md5'
    export default {
        data () {
            return {
                mobile:'',
                code:'',
                smsBtnDisabled:true,
                smsText:'短信获取验证码'
            }
        },
        methods:{
            login() {
                if(validateInput.call(this,1)){
                    var params = {DoctorLogin:{mobile:this.mobile,password:this.code}};
                    this.axios.post('Doctors/DoctorLogin',params)
                    .then((data) => {
                        if(data.status == 1) {
                            localStorage.setItem(util.localKey.login,params.DoctorLogin.mobile)
                            this.$router.replace({
                                name: 'main'
                            })
                        } else {
                            this.$message({
                                message:data.result,
                                type: 'error'
                            });
                        }
                    })
                }
            },
            mobileChange (mobile) {
                console.log(mobile);
               if(util.checkPhone(mobile)) {
                   this.smsBtnDisabled = false;
               }
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
         if(type ==1 && this.code.length == 0) {
            this.$message({
                        message:'请填写验证码',
                        type: 'error'
                    });
                    return false;
        }
        return true;
    }
</script>
<style lang="scss">
</style>
