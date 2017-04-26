<template>
    <el-dialog custom-class="addContact" title="新建随访人资料" v-model="model" size="large" v-on:close="closeModal">
        <span slot="title">新建随访人资料</span>
        <div>
            <el-form label-position="top" :model="formLabelAlign" >
            <el-row :gutter="15">
                <el-col :span="6">
                <el-form-item label="姓名">
                    <el-input  placeholder="姓名" maxlength="20"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="4">
                <el-form-item label="性别">
                    <el-select placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="2"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="7">
                <el-form-item label="联系电话">
                    <el-input  placeholder="手机号" maxlength="11" minlength="11"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="7">
                <el-form-item label="随访类型">
                    <el-select placeholder="请选择">
                        <el-option label="高血压患者" value=""></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="15">
                <el-col :span="4">
                <el-form-item label="出生年月">
                    <el-select placeholder="年">
                        <el-option label="1987" value="1"></el-option>
                        <el-option label="1986" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="3">
                <el-form-item label=" ">
                    <el-select placeholder="月">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="3">
                <el-form-item label=" ">
                    <el-select placeholder="日">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="14">
                <el-form-item label="卡号">
                <el-input placeholder="卡号" maxlength="18" minlength="15">
                    <el-select slot="prepend" placeholder="请选择类型" class="card-select">
                    <el-option label="身份证" value="1"></el-option>
                    <el-option label="医疗卡号" value="2"></el-option>
                    </el-select>
                </el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="15">
                <el-col :span="6">
                <el-form-item label="居住地址">
                    <el-select placeholder="省份">
                        <el-option label="浙江" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label=" ">
                    <el-select placeholder="城市">
                        <el-option label="杭州" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label=" ">
                    <el-select placeholder="区域">
                        <el-option label="拱墅" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label=" ">
                    <el-select placeholder="社区">
                        <el-option label="湖墅" value="1"></el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="24">
                <el-form-item label="">
                    <el-input  placeholder="详细地址" maxlength="50"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" class="" @click="">保存</el-button>
            <el-button class="" @click="">取消</el-button>
        </span>
    </el-dialog>
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
            }
        },
        methods:{
            
        },
        mounted () {
            
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