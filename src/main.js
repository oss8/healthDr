// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'nprogress/nprogress.css'
import '../theme/index.css'
import './style/lib/font-awesome.min.css'
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import * as filters from './filters/'

// import {Table,Form,TableColumn,Popover,Tooltip,Input,Button,FormItem} from 'element-ui'
import ElementUI from 'element-ui'
import axios from 'axios';
// import VueAxios from 'vue-axios';
// import './style/common.scss'
Object.keys(filters.default).forEach(k => {
  console.log(k);
  Vue.filter(k, filters.default[k])
}) // 注册过滤器
Vue.use(ElementUI)
Vue.use(VueRouter);
console.log(filters);


  

// Vue.use(VueAxios, axios)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(TableColumn)
// Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Input)
// Vue.use(Button)
// Vue.use(FormItem)


Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
