<template>
         <div>
            <el-dialog class="dialog-month-check" title="月账单" 
                    top="0%"  v-model="model"
                    size="large" v-on:close="closeModal">
                <span slot="title">
                    <span class="reward-title">备注</span>
                </span>
                <div>
                    <ul class="user-info">
                        <li><label>渠道商名：</label><span>{{data.name}}</span></li>
                        <li><label>联系电话：</label><span>{{data.refereeid}}</span></li>
                        <li><label>支付宝账号：</label><span>{{data.aliPay}}</span></li>
                    </ul>
                    <div class="note-list">
                        <div class="note-title">历史备注信息</div>
                        <div class="note-cont">
                            <dl v-for="item in data.remark">
                                <dt><i class="icon current"></i>{{item.addtime}}</dt>
                                <dd>{{item.context}}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-form  ref="ruleForm">
                        <el-form-item prop="desc">
                            <el-input type="textarea" placeholder="请填写您的备注内容" v-model="noteContent"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom:0px;">
                            <el-button type="primary"  @click="submitForm()">保 存</el-button>
                        </el-form-item>
                    </el-form>
                </span>
            </el-dialog>
         </div>
</template>

<script>
    import util from '../util'

     export default {
        props:{
            model:Boolean,
            data:Object
        },
        data () {
            return {
                monthCheckVisible:false,
                noteContent:''
            }
        },
        methods:{
            closeModal() {
                this.$emit('close');
            },
            submitForm () {
                let params = {mobile:this.data.refereeid,context:this.noteContent}
                console.log(params);
                addNote(params)
                .then( (data) => {
                    this.data.remark = data.result;
                }).catch( (err) => {
                    util.toast('保存失败，请重试');
                })
            }
        }
    };

    function addNote(params) {
        let promiseFunc = (resove,reject) => {
            util.axios.post('OssBrandAPIs/AddUserRemark',{AddUserRemark:params})
                    .then((data) => {
                            console.log(data);
                            if(data.status == 1){
                                resove(data)
                            } else {
                                util.toast('添加失败，请重试');
                                reject(data)
                            }
                        }
                    )
                    .catch( (err) => {
                        reject(err)
                    });
        }
        return new Promise(promiseFunc);
    }
</script>

<style lang="scss">
    @import "../style/list.scss";
</style>