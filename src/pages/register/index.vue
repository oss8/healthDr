<template>
    <div class="loginWrap">
        <div class="login">
            <div class="logo"></div>
            <el-form class="login-form">
                <el-form-item class="form-item">
                    <el-input type="tel" placeholder="手机号码" v-model="mobile" name="mobile" @change="mobileChange(mobile)" ></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-input type="text" placeholder="姓名" v-model="name" name="name" ></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <div class="input-box"><input type="tel" placeholder="验证码" v-model="code"  maxlength="6"><span class="input-btn-box"><el-button type="button" class="btn btn-send" :disabled="smsBtnDisabled" @click="sendSmsClick()">{{smsText}}</el-button></span></div>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-input type="password" placeholder="密码" v-model="code"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-input type="password" placeholder="确认密码" v-model="code"></el-input>
                </el-form-item>
                <el-form-item class="form-item">
                    <el-button type="primary" size="large" class="btn-block" @click="register()">注册</el-button>
                </el-form-item>
            </el-form>
            
        </div>
        <div class="footer">
        ©2016-2017 杭州当堂信息技术有限公司 | 版权所有<br>浙ICP备15007132号-1
        </div>
    </div>
</template>
<script>
import util from '../../util'

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
            sendSmsClick() {
                
                this.smsBtnDisabled = true;
                this.smsText = "正在发送...";
               
                let _this = this;
                if(validateInput.call(this,0)){
                    this.axios.post('OssBrandAPIs/BetaUserSendSMS',{BetaUserSendSMS:{mobile:this.mobile}})
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
            login() {
                if(validateInput.call(this,1)){
                    var params = {BetaUserLogin:{mobile:this.mobile,password:this.code}};
                    this.axios.post('OssBrandAPIs/BetaUserLogin',params)
                    .then((data) => {
                        if(data.status == 1) {
                            localStorage.setItem("eshine_channel",params.BetaUserLogin.mobile)
                            this.$router.replace({
                                name: 'list'
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
