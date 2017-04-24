<template>
         <el-dialog class="dialog-month-check" title="月账单" top="0%" v-model="model" size="large" v-on:close="closeModal">
            <span slot="title">
                <span class="reward-title">{{new Date().getMonth()}}月1日至{{new Date().getMonth()}}月31日 奖励账单</span>
            </span>
                <table width="100%" class="monthCheckTable">
                    <thead>
                        <tr>
                            <th>渠道商信息</th>
                            <th>奖励</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data">
                            <td>
                                <p class="monthCheck-userName">{{item.name}}： {{item.refereeid}}</p>
                                <p class="monthCheck-PayAccount">支付宝账号：{{item.aliPay}} </p>
                            </td>
                            <td>
                                <H1 class="monthCheck-MoneyCount">${{item.moneyList[new Date().getMonth()].money}}</H1>
                            </td>
                        </tr>
                    </tbody>
                </table>
            <span slot="footer" class="dialog-footer">
                    <el-button class="pay-ok-btn" @click="exportData">确认导出</el-button>
            </span>
        </el-dialog>
</template>

<script>
    import util from '../util'
    
     export default {
        props:{
            model:Boolean,
            data:Array
        },
        data () {
            return {
                monthCheckVisible:false,
                monthChecks:[1,2,3,1,2,3]
            }
        },
        methods:{
            closeModal() {
                this.$emit('close');
            },
            okBuyClick () {

            },
            exportData () {
                console.log(this.data);
                let month = new Date().getMonth();
                let channelInfo = []
                for (let value of this.data) {
                    let obj = {}
                    obj = {
                        '姓名':value.name,
                        '支付宝账号':value.aliPay,
                        '电话':value.refereeid,
                        '金额':value.moneyList[month].money
                    }
                    // obj.name = value.name;
                    // obj.alipay = value.aliPay;
                    // obj.mobile = value.refereeid;
                    // obj.money = value.moneyList[month].money;
                    channelInfo.push(obj);
                }
                
                util.xlsxExport(channelInfo,(month+1)+'月渠道商款项')
            }
        },
        mounted () {
            
        }
    };
</script>
<style lang="scss">
    @import "../style/list.scss";
</style>