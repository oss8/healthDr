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
        <el-col :span="6" v-for="(o, index) in 8">
            <el-card :body-style="{ padding: '15px' }" class="info-box">
                <div class="personal-data">
                    <dl>
                        <dt>
                            <i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i>
                        </dt>
                        <dd>
                            <p class="name">李国民</p>
                            <p class="info"><span class="sex">男</span><span class="age">65岁</span></p>
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
    <dtdialog :model="dialogFormVisible"></dtdialog>

</div>

</template>
<style lang="scss">
    @import "../../../style/list.scss";
</style>
<script>
    import dtdialog from './addDialog.vue'
    import util from '../../../util'
    import is from 'is'
    var userInfo = {};
    export default {
      components:{
            dtdialog
        },
        data () {
            return {
                dialogFormVisible:true
            }
        },
        methods:{
        },
        mounted () {
            console.log(dtdialog);
        }
    }
</script>
