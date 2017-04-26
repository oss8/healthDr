<template>
<el-card :body-style="{ padding: '15px' }" class="infoForm">
    <el-form label-position="top" :model="formLabelAlign" >
    <el-row :gutter="15">
        <el-col :span="5">
        <el-form-item label="本次随访日期">
            <el-select placeholder="年">
                <el-option label="1987" value="1"></el-option>
                <el-option label="1986" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label=" ">
            <el-select placeholder="月">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label=" ">
            <el-select placeholder="日">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="7">
        <el-form-item label="随访方式">
            <el-select placeholder="随访方式">
                <el-option label="1987" value="1"></el-option>
                <el-option label="1986" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>活动性质</h4>
        </el-col>
    </el-row>
    <el-form-item>
        <el-checkbox label="正常高值血压" name="type"></el-checkbox>
        <el-checkbox label="超重或肥胖" name="type"></el-checkbox>
        <el-checkbox label="长期膳食高盐" name="type"></el-checkbox>
        <el-checkbox label="高血压家族史" name="type"></el-checkbox>
        <el-checkbox label="长期过量饮酒" name="type"></el-checkbox>
        <el-checkbox label="年龄≥55周岁" name="type"></el-checkbox>
        <el-input placeholder="其他" size="small">
            <el-checkbox slot="prepend" name="type"></el-checkbox>
        </el-input>
    </el-form-item>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>主要体征</h4>
        </el-col>
        <el-col :span="6">
            <el-form-item label="血压(mmHg)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5">
            <el-form-item label="体重(kg)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5">
            <el-form-item label="身高(cm)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item label="体质指数(kg/m2)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item label="腰围(cm)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="24">
            <el-form-item label="其他">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>生活方式指导</h4>
        </el-col>
        <el-col :span="6">
            <el-form-item label="吸烟量(支/天)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="饮酒量(两/天)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="摄盐情况(克/天)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="食用油摄入(克/天)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="运动(次/周)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="6">
            <el-form-item label="运动(分钟/次)">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="心理调整">
            <el-radio label="良好"></el-radio>
            <el-radio label="一般"></el-radio>
            <el-radio label="差"></el-radio>
        </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>转归情况</h4>
        </el-col>
        <el-col :span="8">
        <el-form-item label="是否转归">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
        </el-form-item>
        </el-col>
        <el-col :span="16">
        <el-form-item label="转归类别">
            <el-radio label="一般人群"></el-radio>
            <el-radio label="糖尿病患者"></el-radio>
            <el-radio label="高血压患者"></el-radio>
        </el-form-item>
        </el-col>
        <el-col :span="24">
            <el-form-item label="转归原因">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
    </el-row>
    <el-row :gutter="15" class="mod-info">
        <el-col :span="24">
            <h4>随访总结</h4>
        </el-col>
        <el-col :span="7">
        <el-form-item label="接受管理程度">
            <el-radio label="接受"></el-radio>
            <el-radio label="不接受"></el-radio>
        </el-form-item>
        </el-col>
        <el-col :span="9">
        <el-form-item label="此次随访分类">
            <el-radio label="控制满意"></el-radio>
            <el-radio label="控制不满意"></el-radio>
        </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="辅助检查">
                <el-input  placeholder=""></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label="下次随访日期">
            <el-select placeholder="年">
                <el-option label="1987" value="1"></el-option>
                <el-option label="1986" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label=" ">
            <el-select placeholder="月">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label=" ">
            <el-select placeholder="日">
                <el-option label="1" value="1"></el-option>
                <el-option label="2" value="1"></el-option>
            </el-select>
        </el-form-item>
        </el-col>
    </el-row>
    <el-form-item>
        <el-button type="primary" @click="">保存</el-button>
        <el-button>取消</el-button>
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
        data () {
            return {

            }
        },
        methods:{
        },
        mounted () {
          
            // this.$router.replace('/users/list')
        }
    }
</script>