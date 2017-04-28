<template>
    <div class="detail">
        <div class="detail-box">
            <el-card :body-style="{ padding: '15px' }"  class="personal-data">
                <dl>
                    <dt><i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i></dt>
                    <dd>
                        <p><span class="name">{{userInfo.name}}</span><span class="tag tag-high">高血压患者</span></p>
                        <p class="info"><span>1950年1月1日(67岁)</span><span>男</span></p>
                        <p class="tags"><span>社保卡号：{{userInfo.name}}</span><span>联系电话：{{userInfo.mobile}}</span></p>
                        <p>居住地址：{{userInfo.province}}省 {{userInfo.city}}市 {{userInfo.region+' '+userInfo.address}} </p>
                    </dd>
                </dl>
                <div class="doct-button">
                    <el-button type="primary"  @click="editUserInfo=true">编辑资料</el-button>
                    <el-button type="primary" @click="editing=true">新建随访记录</el-button>
                </div>
            </el-card>
            <formList v-if="editing" :id="userInfo.id"></formList>
              <el-dialog custom-class="addContact" title="新建随访人资料" size="large" v-model="editUserInfo">
                <dtdialog :data="userInfo" ></dtdialog>
            </el-dialog>
            <el-card :body-style="{ padding: '15px' }" v-if="!editing">
                <h2>高血压高危人群随访服务记录</h2>
                <div class="mod-info">
                    <h4>危险因素</h4>
                    <table>
                        <tr>
                            <td width="20%" v-for="danger in userInfo.context.dangerType">{{danger}}</td>
                        
                        </tr>
                        <tr>
                            <td colspan="4">其他{{ '  '+(userInfo.context.dangerOther || '--')}}</td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>主要体征</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>血压(mmHg)</p><p>{{userInfo.context.bloodPressure}}</p></td>
                            <td width="20%"><p>体重(kg)</p><p>{{userInfo.context.weight}}</p></td>
                            <td width="20%"><p>身高(cm)</p><p>{{userInfo.context.height}}</p></td>
                            <td width="20%"><p>体质指数(kg/m2)</p><p>{{userInfo.context.bmi}}</p></td>
                            <td width="20%"><p>腰围(cm)</p><p>{{userInfo.context.waistline}}</p></td>
                        </tr>
                        <tr>
                            <td colspan="5">其他</td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>生活方式指导</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>吸烟量(支/天)</p><p>{{userInfo.context.smoke}}</p></td>
                            <td width="20%"><p>饮酒量(两/天)</p><p>{{userInfo.context.wine}}</p></td>
                            <td width="20%"><p>摄盐情况(克/天)</p><p>{{userInfo.context.salt}}</p></td>
                            <td width="20%"><p>食用油摄入(克/天)</p><p>{{userInfo.context.oil}}</p></td>
                            <td width="20%"><p>运动(次/周)</p><p>{{userInfo.context.sportNum}}</p></td>
                        </tr>
                        <tr>
                            <td width="20%"><p>运动(分钟/次)</p><p>{{userInfo.context.waistline}}</p></td>
                            <td width="20%"><p>心理调整</p><p>{{userInfo.context.waistline}}</p></td>
                            <td colspan="3"></td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>转归情况</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>是否转归</p><p>{{userInfo.context.isBack}}</p></td>
                            <td width="20%"><p>转归类别</p><p>{{userInfo.context.backType}}</p></td>
                            <td colspan="3"><p>转归原因</p><p>{{userInfo.context.backReason}}</p></td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>随访总结</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>接受管理程度</p><p>{{userInfo.context.accept}}</p></td>
                            <td width="20%"><p>此次随访分类</p><p>{{userInfo.context.ctrlType}}</p></td>
                            <td colspan="3"><p>辅助检查</p><p>{{userInfo.context.waistline}}</p></td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <p>下次随访日期</p>
                                <p>{{userInfo.context.nextDate | timeFilter}}</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </el-card>
        </div>
        <div class="other-list">
            <h2>随访人列表</h2>
            <div class="add-list">
                <p><i class="el-icon-plus"></i></p>
                <p><span>添加新随访人</span></p>
            </div>
            <div class="list-box">
                <el-card :body-style="{ padding: '15px' }"  class="personal-data" v-for="(o, index) in follows">
                    <dl>
                        <dt><i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i></dt>
                        <dd>
                            <p><span class="name">李国民</span></p>
                            <p class="info"><span>男</span><span>67岁</span></p>
                            <p><span class="tag tag-high">高血压患者</span></p>
                        </dd>
                    </dl>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
    import formList from '@/pages/users/detail/formList.vue';
    import dtdialog from '@/pages/users/list/addDialog.vue';
    import util from '../../../util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        components:{
            formList,
            dtdialog
        },
        data () {
            return {
                follows:[1,2,3,4,5,6],
                editing:false,
                editUserInfo:false,
                userInfo:{}
            }
        },
        methods:{
        },
        mounted () {
            let { userInfo = null} = this.$route.params;
            // console.log(userInfo)
            if (userInfo) {
                // console.log(JSON.parse(userInfo));
                this.userInfo = JSON.parse(userInfo);
            } else {
                this.$router.go(-1);
            }
            // if(!this.$router.params.id) {
            //     // this.$route.go(-1);
            // }
        }
    }
</script>
<style lang="scss">
@import "../../../style/detail.scss";
</style>
