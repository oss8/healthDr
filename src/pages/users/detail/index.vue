<template>
    <div class="detail">
        <div class="detail-box">
            <el-card :body-style="{ padding: '15px' }"  class="personal-data">
                <dl>
                    <dt><i class="icon icon-user"><img src="../../../assets/logo.jpg" /></i></dt>
                    <dd>
                        <p><span class="name">李国民</span><span class="tag tag-high">高血压患者</span></p>
                        <p class="info"><span>1950年1月1日(67岁)</span><span>男</span></p>
                        <p class="tags"><span>社保卡号：0000000000</span><span>联系电话：0000000000</span></p>
                        <p>居住地址：xx省 xx市 xx区 xxx街道 xx社区xx幢xx单元101室</p>
                    </dd>
                </dl>
                <div class="doct-button">
                    <el-button type="primary">编辑资料</el-button>
                    <el-button type="primary">新建随访记录</el-button>
                </div>
            </el-card>
            <el-card :body-style="{ padding: '15px' }">
                <h2>高血压高危人群随访服务记录</h2>
                <div class="mod-info">
                    <h4>危险因素</h4>
                    <table>
                        <tr>
                            <td width="20%">正常高值血压</td>
                            <td width="20%">超重或肥胖</td>
                            <td width="20%">长期膳食高盐</td>
                            <td width="20%">高血压家族史</td>
                            <td width="20%">长期过量饮酒</td>
                        </tr>
                        <tr>
                            <td width="20%">年龄≥55周岁</td>
                            <td colspan="4">其他</td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>主要体征</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>血压(mmHg)</p><p>149/78</p></td>
                            <td width="20%"><p>体重(kg)</p><p>68.8</p></td>
                            <td width="20%"><p>身高(cm)</p><p>180</p></td>
                            <td width="20%"><p>体质指数(kg/m2)</p><p>21.5</p></td>
                            <td width="20%"><p>腰围(cm)</p><p>80</p></td>
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
                            <td width="20%"><p>吸烟量(支/天)</p><p>2</p></td>
                            <td width="20%"><p>饮酒量(两/天)</p><p>2</p></td>
                            <td width="20%"><p>摄盐情况(克/天)</p><p>30</p></td>
                            <td width="20%"><p>食用油摄入(克/天)</p><p>30</p></td>
                            <td width="20%"><p>运动(次/周)</p><p>3</p></td>
                        </tr>
                        <tr>
                            <td width="20%"><p>运动(分钟/次)</p><p>45</p></td>
                            <td width="20%"><p>心理调整</p><p>良好</p></td>
                            <td colspan="3"></td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>转归情况</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>是否转归</p><p>是</p></td>
                            <td width="20%"><p>转归类别</p><p>高血压患者</p></td>
                            <td colspan="3"><p>转归原因</p><p>高血压患者</p></td>
                        </tr>
                    </table>
                </div>
                <div class="mod-info">
                    <h4>随访总结</h4>
                    <table>
                        <tr>
                            <td width="20%"><p>接受管理程度</p><p>接受</p></td>
                            <td width="20%"><p>此次随访分类</p><p>控制满意</p></td>
                            <td colspan="3"><p>辅助检查</p><p>--</p></td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <p>下次随访日期</p>
                                <p>2017年-05-01</p>
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
                <el-card :body-style="{ padding: '15px' }"  class="personal-data" v-for="(o, index) in 8">
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
    import util from '../../../util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        data () {
            return {

            }
        },
        methods:{
        },
        mounted () {

        }
    }
</script>
<style lang="scss">
@import "../../../style/detail.scss";
</style>
