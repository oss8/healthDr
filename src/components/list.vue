<template>

    <div class="channel">
        <dt-header :name="userName"></dt-header>
        <div class="main">
            <div class="modbox" :class="{'notRoot':!isRoot}">
                <el-popover ref="popover" placement="bottom" width="250" v-model="showAddChannel"  trigger="click">
                    <el-form>
                        <el-form-item>
                            <el-input placeholder="渠道商名" v-model="add.name"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="联系电话" v-model="add.mobile"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="支付宝账号" v-model="add.aliPay"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input type="textarea" placeholder="备注" v-model="add.device" ></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: center">
                            <el-button type="primary" @click="addChannel">添 加</el-button>
                            <el-button @click="closeAddChannel">取 消</el-button>
                        </el-form-item>
                    </el-form>
                </el-popover>
                <el-form :inline="true"  class="demo-form-inline channel-form"  v-show="isRoot">
                
                    <el-form-item style="float:left" >
                        <el-input placeholder="请输入关键字或手机号码" :icon=" searchIcon " v-model="searchKey" @change="searchChange(searchKey)" :on-icon-click="handleIconClick"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" v-popover:popover >添加渠道商</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="monthCheckVisible=true" >月账单支付</el-button>
                    </el-form-item>
                </el-form>

                <month-pay :model="monthCheckVisible" :data="dataSource" v-on:close="closeMonthCheck"></month-pay>
                <note :model="showNote" :data="selectChannel" v-on:close="closeMonthCheck"></note>
            </div>

            <div class="modbox">
            
                <table width="100%" class="channel-table"  v-if="!isRoot ">
                        <thead>
                            <tr>
                                <th width="66"></th>
                                <th>店家名</th>
                                <th width="100">4月奖励</th>
                                <th width="100">5月奖励</th>
                                <th width="100">6月奖励</th>
                                <th width="100">7月奖励</th>
                                <th width="100">8月奖励</th>
                                <th width="100">9月奖励</th>
                                <th width="100">10月奖励</th>
                            </tr>
                        </thead>
                        <tbody v-if="channelData.length > 0">

                            <tr v-for="(item,index) in channelData[0].storeList">
                                <td></td>
                                <td class="info-box">
                                    <p>{{item.storeName}}</p>
                                    <p class="sub"><span>{{item.tel}}</span> <span>{{item.address}}</span></p>
                                </td>
                                <td v-for="(moneyItem,index) in item.Moneys">
                                    <span class="money " v-if="moneyItem.Money != 0" :class="{'old':moneyItem.Money == 0}">{{moneyItem.Money>0?moneyItem.Money:null}}</span>
                                </td>
                            </tr>
                        </tbody>
                </table>
                <el-table :data="channelData" style="width: 100%" class="channel-table" v-if="isRoot">
                    <el-table-column type="expand">
                        <template scope="props">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th width="66"></th>
                                        <th>店家名</th>
                                        <th width="100">4月奖励</th>
                                        <th width="100">5月奖励</th>
                                        <th width="100">6月奖励</th>
                                        <th width="100">7月奖励</th>
                                        <th width="100">8月奖励</th>
                                        <th width="100">9月奖励</th>
                                        <th width="100">10月奖励</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in props.row.storeList">
                                        <td></td>
                                        <td class="info-box">
                                            <p>{{item.storeName}}</p>
                                            <p class="sub"><span>{{item.tel}}</span> <span>{{item.address}}</span></p>
                                        </td>
                                        <td v-for="(moneyItem,index) in item.Moneys">
                                            <span class="money " v-if="moneyItem.Money != 0" :class="{'old':moneyItem.Money == 0}">{{moneyItem.Money>0?moneyItem.Money:null}}</span>
                                        </td>
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </template>
                    </el-table-column>
                    <el-table-column label="渠道商信息" width="320">
                        <template scope="props">
                            <div class="info-box">
                                <p>{{props.row.name}}：<span>{{props.row.refereeid}}</span></p>
                                <p class="sub">支付宝账号：<span>9558 0000 0000 0000</span></p>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="已注册" width="150">
                        <template scope="props"><span>{{props.row.storeInfo.all}}</span></template>
                    </el-table-column>
                    <el-table-column label="正常营业" width="150">
                        <template scope="props"><span>{{props.row.storeInfo.okCount}}/{{props.row.storeInfo.all}}</span></template>
                    </el-table-column>
                    <el-table-column label="异常营业"width="150">
                        <template scope="props"><span>{{props.row.storeInfo.badCount}}/{{props.row.storeInfo.all}}</span></template>
                    </el-table-column>
                    <el-table-column label="奖励" >
                        <template scope="props"><p class="bonus">上月奖励<span>¥{{props.row.moneyList[new Date().getMonth()].money}}</span></p></template>
                    </el-table-column>
                    <el-table-column label="备注" width="120">
                        <template scope="props"><el-button type="primary" icon="edit" size="small" @click="noteClick(props.row)"></el-button></template>
                    </el-table-column>
                </el-table>

            </div>
        </div>
        <div class="footer">
        ©2016-2017 杭州当堂信息技术有限公司 | 版权所有<br>浙ICP备15007132号-1
        </div>
       
    </div>
</template>
<script>
    import dtHeader from './Header.vue';
    import monthPay from './monthPay';
    import note from './note'
    import util from '../util'
    import is from 'is'
    var userInfo = {};
    // var dataSource = [];
    export default {
        components: {
                dtHeader,
                monthPay,
                note
            },
        data () {
            return {
                monthCheckVisible:false,
                showNote:false,
                monthChecks:[1,2,3],
                searchKey:'',
                searchIcon:'search',
                selectChannel:{},
                isRoot:false,
                showAddChannel:false,
                userName:'',
                add:{name:'',mobile:'',aliPay:'',device:''},
                channelData: [],
                dataSource:[]
            }
        },
        methods:{
            closeMonthCheck() {
                this.monthCheckVisible = false;
                this.showNote = false;
            },
            addChannel () {
                var addObj = this.add;
                if(addObj.name.length == 0 || addObj.mobile.length ==0 ) {
                    util.toast('姓名和电话号码必须填写哦');
                    return ;
                }
                reqAddChannel(this.add)
                .then( (data) => {
                    this.add = {name:'',mobile:'',aliPay:'',device:''};
                    this.showAddChannel = false;
                    util.toast('添加成功');
                })
                .catch( (err) => {
                    util.toast('添加失败，请重试');
                });
            },
            closeAddChannel () {
                this.showAddChannel = false;
            },
            noteClick (channel) {
                this.selectChannel = channel;
                 this.showNote=true
            },
            searchChange(key) {
                if(key.length != 0) {
                    this.searchIcon = 'close';
                } else {
                    this.searchIcon = 'search';
                }
                if (util.checknumber(key)) {
                    this.channelData = this.dataSource.filter( (item) => {
                        if(item.refereeid.indexOf(key) > -1) {
                            return true
                        }
                        return false
                    })
                } else {
                    this.channelData = this.dataSource.filter( (item) => {
                        if(item.name.indexOf(key) > -1) {
                            return true
                        }
                        return false
                    })
                }
                // console.log(util.checknumber(key));
            },
            handleIconClick() {
                if(this.searchKey.length > 0) {
                    this.searchKey = '';
                    this.searchChange('');
                }
            }
        },
        mounted () {
            console.log(util.xlsx);
            userInfo.userid = localStorage.getItem("eshine_channel");
            // console.log(userid);
            if(!util.checkPhone(userInfo.userid)) {
                this.$router.replace({
                                name: 'login'
                            })
            }
            var _this = this
            requestList()
            .then(function(data){
                console.log(data);
                userInfo.status = data.result.status;
                _this.isRoot = data.result.status == 9;
                _this.userName = data.result.name;
                _this.dataSource = data.result.referee;
                _this.channelData = data.result.referee;
            })
            // util.toast('加载失败')
        }
    };
    function requestList(){
        let promiseFunc = (resove,reject) => {
            let date = new Date()
            let month = date.getMonth()+1
            let params = {mobile:userInfo.userid,month:month}
            util.axios.post('OssBrandAPIs/GetBetaActivity',{GetBetaActivity:params})
                    .then((data) => {
                        console.log(data);
                        if(data.status == 1){
                            data.result.referee.forEach((value,index) => {
                                 value.storeList.forEach( (store,indexS) => {
                                    var storeMoneys = [];
                                    for(let i=1;i<8;i++) {
                                        var obj = {okNum:0,month:i,Money:0};
                                        store.monthList.forEach((monthMoney,index) => {
                                            if(monthMoney.month === i) {
                                                obj = monthMoney;
                                                return  ;
                                            }
                                        })
                                        storeMoneys.push(obj);
                                    }
                                    store.Moneys = storeMoneys;
                                })
                                // value.moneyList = value.moneyList.filter((item) => {
                                //     if(item.month > 0 && item.month < 8) {
                                //         return true
                                //     } 
                                //     return false
                                // });
                            })
                            resove(data)
                        } else {
                            util.toast('获取失败，请重试');
                            reject(data)
                        }
                    })
                    .catch( (err) => {
                        reject(err)
                    });
        }
        return new Promise(promiseFunc);
        
    }

    function reqAddChannel(params) {
        let promiseFunc = (resove,reject) => {
            util.axios.post('OssBrandAPIs/ModiBetaUser',{ModiBetaUser:params})
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
    .el-table__expanded-cell{
        padding:0px;
    }
    .el-popover {
        padding:20px 10px 0;
    }
    @import "../style/list.scss";
</style>
