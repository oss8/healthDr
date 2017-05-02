webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_js__ = __webpack_require__(98);
// import ajax from './ajax'






// ajax.beforeEach((res, next) => {
//   // res.url = config.baseUrl + res.url
//   // var { accesstoken } = stores.state.user
//   // if (accesstoken) {
//   //   res.data.accesstoken = accesstoken
//   // }
//   next()
// })

// ajax.afterEach((res, next) => {
//   if (res) {
//     next()
//   } else {
//     exports.default.toast('加载失败')
//   }
// })

__WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.configure({
  minimum: 1,
  showSpinner: false
});
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.baseURL = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].baseUrl;

// Add a request interceptor
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.interceptors.request.use(function (config) {
  // loadingInstance.service({})
  // Do something before request is sent
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.start();
  config.headers.token = localStorage.token;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// Add a response interceptor
__WEBPACK_IMPORTED_MODULE_4_axios___default.a.interceptors.response.use(function (response) {
  // Do something with response data
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
  if (203 == response.status) {
    //未授权
    localStorage.clear();
    router.push({
      name: 'home'
    });
  }
  if (204 == response.status) {
    //无响应内容
    // exports.default.toast('没有数据');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_element_ui__["Message"])({
      message: '没有数据',
      type: 'error'
    });
  }
  return response.data;
}, function (error) {
  __WEBPACK_IMPORTED_MODULE_3_nprogress___default.a.done();
  // Do something with response error
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_element_ui__["Message"])({
    message: '网络连接错误',
    type: 'error'
  });
  return Promise.reject(error);
});

/* harmony default export */ __webpack_exports__["a"] = ({
  checknumber(str) {
    var Letters = "1234567890";
    var i;
    var c;
    for (i = 0; i < Letters.length; i++) {
      //Letters.length() ->>>>取字符长度
      c = str.charAt(i);
      if (Letters.indexOf(c) == -1) {
        //在"Letters"中找不到"c"   见下面的此函数的返回值
        return false;
      }
    }
    return true;
  },
  toast(msg = '', time = 1500) {
    var toast = document.createElement('div');
    toast.className = 'common-toast common-toast-show';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    toast.style.display = 'block';
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`;
    var timer = setTimeout(() => {
      toast.className = 'common-toast common-toast-hide';
      clearTimeout(timer);
      var timer2 = setTimeout(() => {
        document.body.removeChild(toast);
        clearTimeout(timer2);
      }, 200);
    }, time);
  },
  constData: __WEBPACK_IMPORTED_MODULE_5__data_js__["a" /* default */],
  axios: __WEBPACK_IMPORTED_MODULE_4_axios___default.a,
  postData(url, params) {
    let promiseFunc = (resove, reject) => {
      this.axios.post(url, params).then(data => {
        console.log(data);
        if (data.status == 1) {
          resove(data);
        } else {
          // util.toast('获取失败');
          reject(data);
        }
      }).catch(err => {
        reject(err);
      });
    };
    return new Promise(promiseFunc);
  },
  localKey: { login: 'health.Dr' },
  checkPhone(val) {
    var filter = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;

    if (filter.test(val)) {
      return true;
    } else {
      return false;
    }
  }
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.5c570ff.jpg";

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(119)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

const ageFilter = id => {
    if (id && !(id.length == 18 || id.length == 15)) return '';
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - id.substring(6, 10) - 1;
    if (id.substring(10, 12) < month || id.substring(10, 12) == month && id.substring(12, 14) <= day) {
        age++;
    }
    return age;
};

const timeFilter = function (time, format) {
    if (!time) return '未知时间';
    var t = new Date(time);
    var tf = function (i) {
        return (i < 10 ? '0' : '') + i;
    };
    if (!format) format = 'yyyy/MM/dd';
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    });
};

const sexFilter = sex => {
    if (sex == 0) {
        return '男';
    } else {
        return '女';
    }
};

const bloodFilter = bloodData => {
    let arr = bloodData.split('/');
    if (arr.length == 2) {
        let high = arr[0];
        if (high > 120) {
            return '偏高';
        }
        let low = arr[1];
        if (low < 80) {
            return '偏低';
        }
        return '正常';
    }
    return '未知';
};
/* harmony default export */ __webpack_exports__["default"] = ({
    ageFilter,
    timeFilter,
    bloodFilter,
    sexFilter
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_users_list__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_users_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_users_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_detail__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_users_detail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_detail_formList__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_detail_formList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_users_detail_formList__);


// import Hello from '@/components/Hello'






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'main',
    component: __WEBPACK_IMPORTED_MODULE_6__pages_main___default.a,
    children: [{
      path: '/users/login',
      component: __WEBPACK_IMPORTED_MODULE_2__pages_login___default.a
    }, {
      path: '/users/form',
      component: __WEBPACK_IMPORTED_MODULE_7__pages_users_detail_formList___default.a
    }, {
      path: '/users/list',
      component: __WEBPACK_IMPORTED_MODULE_4__pages_users_list___default.a
    }, {
      path: '/users/detail',
      name: 'detail',
      component: __WEBPACK_IMPORTED_MODULE_5__pages_users_detail___default.a
    }, {
      path: '/users/addfollow',
      name: 'addfollow',
      component: __WEBPACK_IMPORTED_MODULE_7__pages_users_detail_formList___default.a
    }]
  }, {
    path: '/login',
    name: 'login',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_login___default.a
  }, {
    path: '/register',
    name: 'register',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_register___default.a
  }, {
    path: '*',
    name: 'other',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_login___default.a
  }]
});

// router.beforeEach(({ meta, path }, from, next) => {
//   // const { auth = true } = meta
//   // const isLogin = Boolean(localStorage.getItem("eshine_channel")) // true用户已登录， false用户未登录
//   // if (auth && !isLogin && path !== '/login') {
//   //   let to = { path: '/login' }
//   //   return next(to)
//   // }
//   next()
// })

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    replace: true,
    props: { name: String },
    data() {
        return {};
    },
    methods: {
        exit() {
            localStorage.removeItem('eshine_channel');
            this.$router.replace({
                name: 'login'
            });
        }
    }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_md5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            mobile: '',
            code: '',
            smsBtnDisabled: true,
            smsText: '短信获取验证码'
        };
    },
    methods: {
        login() {
            if (validateInput.call(this, 1)) {
                var params = { DoctorLogin: { mobile: this.mobile, password: __WEBPACK_IMPORTED_MODULE_1_md5___default()(this.code) } };
                this.axios.post('Doctors/DoctorLogin', params).then(data => {
                    if (data.status == 1) {
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].localKey.login, JSON.stringify(data.result));
                        this.$router.replace({
                            name: 'main'
                        });
                    } else {
                        this.$message({
                            message: data.result,
                            type: 'error'
                        });
                    }
                });
            }
        },
        mobileChange(mobile) {
            console.log(mobile);
            if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].checkPhone(mobile)) {
                this.smsBtnDisabled = false;
            }
        }
    }
});
function validateInput(type) {
    if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].checkPhone(this.mobile)) {
        this.$message({
            message: '请填写正确的手机格式',
            type: 'error'
        });
        return false;
    }
    if (type == 1 && this.code.length == 0) {
        this.$message({
            message: '请输入密码',
            type: 'error'
        });
        return false;
    }
    return true;
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var userInfo = {};
// var dataSource = [];
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        dtHeader: __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default.a
    },
    data() {
        return {
            name: ''
        };
    },
    methods: {},
    mounted() {
        userInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].localKey.login));
        console.log(userInfo);
        if (userInfo.id.length == 0) {
            this.$router.replace({
                name: 'login'
            });
        } else {
            this.name = userInfo.name;
            this.$router.replace('/users/list');
        }
    }
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_md5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        var validateMobile = (rule, value, callback) => {
            console.log(value);
            if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].checkPhone(value)) {
                this.smsBtnDisabled = true;
                callback(new Error('请输入正确的手机格式'));
            }
            this.smsBtnDisabled = false;
            callback();
        };

        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.registerForm.confimPassword !== '') {
                    this.$refs.registerForm.validateField('validateConfimPass');
                }
                callback();
            }
        };
        var validateConfimPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            registerForm: {
                mobile: '',
                name: '',
                randCode: '',
                password: '',
                confimPassword: ''
            },
            rules: {
                mobile: [{ validator: validateMobile, trigger: 'blur' }],
                name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
                randCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
                confimPassword: [{ validator: validateConfimPass, trigger: 'blur' }],
                password: [{ validator: validatePass, trigger: 'blur' }]

            },
            smsBtnDisabled: true,
            smsText: '短信获取验证码'
        };
    },
    methods: {
        sendSmsClick() {

            this.smsBtnDisabled = true;
            this.smsText = "正在发送...";

            let _this = this;
            if (validateInput.call(this, 0)) {
                this.axios.post('Doctors/DoctorGetRandCode', { DoctorGetRandCode: { mobile: this.mobile } }).then(data => {
                    if (data.status == 1) {
                        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].toast('发送成功');
                        (function (me) {
                            let time = 60;
                            var timer = setInterval(function () {
                                if (time === 0) {
                                    me.smsBtnDisabled = false;
                                    me.smsText = '再次获取验证码';
                                    time = 59;
                                    clearInterval(timer);
                                } else {
                                    time--;
                                    me.smsText = time + '秒';
                                }
                            }, 1000);
                        })(_this);
                    } else {
                        _this.smsBtnDisabled = false;
                        _this.smsText = '短信获取验证码';
                        this.$message({
                            message: data.result,
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    _this.smsBtnDisabled = false;
                    _this.smsText = '短信获取验证码';
                    this.$message({
                        message: '发送失败',
                        type: 'error'
                    });
                });
            }
        },
        register(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    var params = { AddDoctor: this.registerForm };
                    this.axios.post('Doctors/AddDoctor', params).then(data => {
                        if (data.status == 1) {
                            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].localKey.login, data.result.DoctorInfo.id);
                            this.$router.replace({
                                path: '/users/list'
                            });
                        } else {
                            this.$message({
                                message: data.result,
                                type: 'error'
                            });
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            // if(validateInput.call(this,1)){

            //     var params = {AddDoctor:{mobile:this.mobile,password:md5(this.password),randcode:this.randCode}};
            //     this.axios.post('Doctors/AddDoctor',params)
            //     .then((data) => {
            //         if(data.status == 1) {
            //             localStorage.setItem(util.localKey.login,data.result.DoctorInfo.id)
            //             this.$router.replace({
            //                 path: '/users/list'
            //             })
            //         } else {
            //             this.$message({
            //                 message:data.result,
            //                 type: 'error'
            //             });
            //         }
            //     })
            // }
        },
        mobileChange(mobile) {
            //     console.log(mobile);
            //    if(util.checkPhone(mobile)) {
            //        this.smsBtnDisabled = false;
            //    } else {
            //        this.smsBtnDisabled = true;
            //    }
        }
    }
});
function validateInput(type) {
    if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].checkPhone(this.mobile)) {
        this.$message({
            message: '请填写正确的手机格式',
            type: 'error'
        });
        return false;
    }
    if (type == 1) {
        if (this.randCode.length == 0 || this.password.length == 0 || this.name.length == 0) {
            this.$message({
                message: '请补全信息',
                type: 'error'
            });
            return false;
        } else if (this.password !== this.confimPassword) {
            this.$message({
                message: '两次密码不一致哦',
                type: 'error'
            });
            return false;
        }
    }

    return true;
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var userId = '';
// var dataSource = [];
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        id: String
    },
    data() {
        return {
            followForm: {
                thisDate: '',
                followType: 'tel',
                dangerType: [],
                dangerOther: '',
                bloodHigh: '',
                bloodLow: '',
                weight: '',
                height: '',
                waistline: '',
                bodyOther: '',
                smoke: 0,
                wine: 0,
                salt: 0,
                oil: 0,
                heartDebug: 0,
                sportNum: 0,
                sportMinute: 0,
                isBack: 0,
                backType: 1,
                backReason: '',
                accept: 1,
                ctrlType: '1',
                assistExam: '',
                nextDate: ''
            },
            rules: {
                thisDate: [{ type: 'date', required: true, message: '请选择此次随访日期', trigger: 'blur' }],
                followType: [{ required: true, message: '请选择随访方式', trigger: 'blur' }],
                dangerType: [{ type: 'array', required: true, message: '请选择危险因素', trigger: 'blur' }],
                bloodHigh: [{ required: true, message: '请输入血压高值', trigger: 'blur' }],
                bloodLow: [{ required: true, message: '请输入血压低值', trigger: 'blur' }],
                weight: [{ required: true, maxlength: 3, message: '请输入体重', trigger: 'blur' }],
                height: [{ required: true, maxlength: 3, message: '请输入身高', trigger: 'blur' }],
                // waistline:[
                //     { required: true,maxlength:3, message: '请输入腰围', trigger: 'blur' }
                // ],

                // smoke:[
                //     { required: false,maxlength:3, message: '请输入吸烟量', trigger: 'blur' }
                // ],
                // wine:[
                //     { required: false,maxlength:3, message: '请输入饮酒量', trigger: 'blur' }
                // ],
                // salt:[
                //     { required: false,maxlength:3, message: '请输入摄盐情况', trigger: 'blur' }
                // ],
                // oil:[
                //     { required: false,maxlength:3, message: '请输入食用油摄入', trigger: 'blur' }
                // ],
                // sportNum:[
                //     { required: false,maxlength:3, message: '请输入运动次数', trigger: 'blur' }
                // ],
                // sportMinute:[
                //     { required: false,maxlength:5, message: '请输入运动分钟数', trigger: 'blur' }
                // ],
                isBack: [{ required: true, message: '请选择是否转归', trigger: 'blur' }],
                backType: [{ required: true, message: '请选择转归类型', trigger: 'blur' }],
                backReason: [{ required: true, message: '请输入转归原因', trigger: 'blur' }],
                accept: [{ required: true, message: '请选择接受管理程度', trigger: 'blur' }],
                ctrlType: [{ required: true, message: '请选择随访分类', trigger: 'blur' }],
                assistExam: [{ required: false, message: '请输入辅助检查', trigger: 'blur' }],
                nextDate: [{ type: 'date', required: true, message: '请选择下次随访日期', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let params = { doctorid: userId, pantientid: this.id, context: JSON.stringify(this.followForm) };
                    console.log(params);
                    __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].postData('Doctors/AddPantientFollow', { AddPantientFollow: params }).then(data => {
                        this.$emit('addRecode', JSON.parse(params.context));
                        this.$refs['followForm'].resetFields();
                        __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].toast('添加成功');
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancelForm() {

            this.$emit('cancelForm');
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    mounted() {
        userId = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].localKey.login)).id;
        // this.$router.replace('/users/list')
    }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_users_detail_formList_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_users_detail_formList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_users_detail_formList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_users_list_addDialog_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_users_list_addDialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_users_list_addDialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_is__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var userInfo = {};
// var dataSource = [];
//    <!--><div class="add-list">
//             <p><i class="el-icon-plus"></i></p>
//             <p><span>添加新随访人</span></p>
//         </div><!-->
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        formList: __WEBPACK_IMPORTED_MODULE_0__pages_users_detail_formList_vue___default.a,
        dtdialog: __WEBPACK_IMPORTED_MODULE_1__pages_users_list_addDialog_vue___default.a
    },
    data() {
        return {
            follows: [1, 2, 3, 4, 5, 6],
            editing: false,
            editUserInfo: false,
            patients: [],
            userInfo: {}
        };
    },
    methods: {
        closeEditForm() {
            this.editing = false;
        },
        addRecode(context) {
            context.bmi = (context.weight / (context.height * context.height / 10000)).toFixed(2);
            this.userInfo.context = context;
            this.editing = false;
        },
        patientClick(patient) {
            console.log(patient);
            this.userInfo = patient;
            if (!this.userInfo.context.thisDate) {
                this.editing = true;
            } else {
                this.editing = false;
            }
        }
    },
    mounted() {
        let params = this.$route.params;
        let userInfo = params.selectPatient;
        this.patients = params.patients;
        if (userInfo.id) {
            this.userInfo = userInfo;
            if (!this.userInfo.lastfollowupcontext || this.userInfo.edit == true) {
                this.editing = true;
            }
        } else {
            this.$router.go(-1);
        }
    }
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let userId = '';
/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        data: Object
    },
    data() {
        return {
            addForm: {
                pname: this.data.name || '',
                psex: this.data.sex || '0',
                pmobile: this.data.mobile || '',
                cardType: 'idCard',
                brithYear: '',
                brithMonth: '',
                casetype: 'htn',
                cardNo: this.data.cardNo || '',
                proviceIndex: 0,
                cityIndex: 0,
                regionIndex: 0,
                address: this.data.address || '',
                pcardno: '',
                pmedicalNo: ''
            },
            constData: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].constData,
            rules: {
                pname: [{ required: true, maxlength: 20, message: '请输入姓名', trigger: 'blur' }],
                psex: [{ required: true, message: '请输入性别', trigger: 'blur' }],
                pmobile: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
                followType: [{ required: true, message: '请选择随访类型', trigger: 'blur' }],
                brithYear: [{ required: true, message: '请选择出生年份', trigger: 'blur' }],
                brithMonth: [{ required: true, message: '请选择出生月份', trigger: 'blur' }],
                casetype: [{ required: true, message: '请选择卡片类型', trigger: 'blur' }],
                cardNo: [{ required: true, message: '请输入卡号', trigger: 'blur' }],
                // provice:[
                //     { required: true, message: '请选择省份', trigger: 'blur' }
                // ],
                // city:[
                //     { required: true, message: '请选择城市', trigger: 'blur' }
                // ],
                // region:[
                //     { required: true, message: '请选择区域', trigger: 'blur' }
                // ],
                address: [{ required: true, maxlength: 50, message: '请输入详细地址', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let params = this.addForm;
                    if (this.data.id) {
                        params.patientid = this.data.id;
                    }
                    params.doctorid = userId;
                    let provice = this.constData.maps[this.addForm.proviceIndex];
                    let city = provice.city[this.addForm.cityIndex];
                    params.province = provice.name;
                    params.city = city.name;
                    params.region = city.area[this.addForm.regionIndex];
                    if (params.cardType == 'idCard') {
                        params.pcardno = params.cardNo;
                    } else {
                        params.pmedicalNo = params.cardNo;
                    }
                    __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].postData('Doctors/AddPatient', { AddPatient: params }).then(data => {
                        if (this.data.id) {
                            __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].toast('添加成功');
                        } else {
                            __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].toast('保存成功');
                        }

                        this.$refs[formName].resetFields();
                    }).catch(err => {});
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        cancelAdd() {},
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    mounted() {
        userId = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].localKey.login)).id;
    }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDialog_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__addDialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_is__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var userInfo = {};
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        dtdialog: __WEBPACK_IMPORTED_MODULE_1__addDialog_vue___default.a
    },
    data() {
        return {
            editPatient: {},
            patients: [],
            dialogFormVisible: false

        };
    },
    methods: {
        handleCommand(command) {
            let index = command.replace(/[^0-9]/ig, "");
            let patient = this.patients[index];
            if (command.indexOf('add') > -1) {
                patient.edit = true;
                this.$router.push({ name: 'detail', params: { selectPatient: patient, patients: this.patients } });
            } else {
                this.editPatient = patient;
                this.dialogFormVisible = true;
            }
        },
        modifyPatient(patient) {
            console.log(patient);
            this.editPatient = patient;
            this.dialogFormVisible = true;
        },
        patientClick(patient) {
            this.$router.push({ name: 'detail', params: { selectPatient: patient, patients: this.patients } });
        }
    },
    mounted() {
        userInfo = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].localKey.login));
        if (userInfo.id.length > 0) {
            let params = { doctorid: userInfo.id };
            __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].postData('Doctors/RequestPatientList', { RequestPatientList: params }).then(data => {
                console.log(data.result);
                this.patients = data.result.map(item => {
                    let context = { dangerType: [] };
                    try {
                        context = JSON.parse(item.lastfollowupcontext);
                        if (context.height && context.height != 0) {
                            context.bmi = (context.weight / (context.height * context.height / 10000)).toFixed(2);
                        }
                    } catch (err) {
                        //在此处理错误

                    }
                    console.log(context);
                    item.context = context;

                    console.log(item.context);
                    return item;
                });
            });
        } else {
            this.$router.replace({ name: 'login' });
        }
    }
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    baseUrl: "http://localhost:6688/api/"
    // baseUrl:"http://localhost:4500/api/"
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nprogress_nprogress_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nprogress_nprogress_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nprogress_nprogress_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_index_css__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__theme_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_lib_font_awesome_min_css__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_lib_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_lib_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filters___ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










// import {Table,Form,TableColumn,Popover,Tooltip,Input,Button,FormItem} from 'element-ui'


// import VueAxios from 'vue-axios';
// import './style/common.scss'
Object.keys(__WEBPACK_IMPORTED_MODULE_7__filters___["default"]).forEach(k => {
  console.log(k);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter(k, __WEBPACK_IMPORTED_MODULE_7__filters___["default"][k]);
}); // 注册过滤器
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_router__["a" /* default */]);
console.log(__WEBPACK_IMPORTED_MODULE_7__filters___);

// Vue.use(VueAxios, axios)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(TableColumn)
// Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Input)
// Vue.use(Button)
// Vue.use(FormItem)


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.axios = __WEBPACK_IMPORTED_MODULE_9_axios___default.a;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_6__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_5__App___default.a }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  "name": "北京",
  "city": [{
    "name": "北京",
    "area": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"]
  }]
}, {
  "name": "天津",
  "city": [{
    "name": "天津",
    "area": ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟  县"]
  }]
}, {
  "name": "河北",
  "city": [{
    "name": "石家庄",
    "area": ["长安区", "桥东区", "桥西区", "新华区", "郊  区", "井陉矿区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵  县", "辛集市", "藁", "晋州市", "新乐市", "鹿泉市"]
  }, {
    "name": "唐山",
    "area": ["路南区", "路北区", "古冶区", "开平区", "新  区", "丰润县", "滦  县", "滦南县", "乐亭县", "迁西县", "玉田县", "唐海县", "遵化市", "丰南市", "迁安市"]
  }, {
    "name": "秦皇岛",
    "area": ["海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县"]
  }, {
    "name": "邯郸",
    "area": ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉  县", "磁  县", "肥乡县", "永年县", "邱  县", "鸡泽县", "广平县", "馆陶县", "魏  县", "曲周县", "武安市"]
  }, {
    "name": "邢台",
    "area": ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任  县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威  县", "清河县", "临西县", "南宫市", "沙河市"]
  }, {
    "name": "保定",
    "area": ["新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐  县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易  县", "曲阳县", "蠡  县", "顺平县", "博野", "雄县", "涿州市", "定州市", "安国市", "高碑店市"]
  }, {
    "name": "张家口",
    "area": ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚  县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"]
  }, {
    "name": "承德",
    "area": ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县"]
  }, {
    "name": "沧州",
    "area": ["新华区", "运河区", "沧  县", "青  县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献  县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市"]
  }, {
    "name": "廊坊",
    "area": ["安次区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市"]
  }, {
    "name": "衡水",
    "area": ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景  县", "阜城县", "冀州市", "深州市"]
  }]
}, {
  "name": "山西",
  "city": [{
    "name": "太原",
    "area": ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"]
  }, {
    "name": "大同",
    "area": ["城  区", "矿  区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"]
  }, {
    "name": "阳泉",
    "area": ["城  区", "矿  区", "郊  区", "平定县", "盂  县"]
  }, {
    "name": "长治",
    "area": ["城  区", "郊  区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁  县", "沁源县", "潞城市"]
  }, {
    "name": "晋城",
    "area": ["城  区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"]
  }, {
    "name": "朔州",
    "area": ["朔城区", "平鲁区", "山阴县", "应  县", "右玉县", "怀仁县"]
  }, {
    "name": "忻州",
    "area": ["忻府区", "原平市", "定襄县", "五台县", "代  县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县"]
  }, {
    "name": "吕梁",
    "area": ["离石区", "孝义市", "汾阳市", "文水县", "交城县", "兴  县", "临  县", "柳林县", "石楼县", "岚  县", "方山县", "中阳县", "交口县"]
  }, {
    "name": "晋中",
    "area": ["榆次市", "介休市", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁  县", "平遥县", "灵石县"]
  }, {
    "name": "临汾",
    "area": ["临汾市", "侯马市", "霍州市", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古  县", "安泽县", "浮山县", "吉  县", "乡宁县", "蒲  县", "大宁县", "永和县", "隰  县", "汾西县"]
  }, {
    "name": "运城",
    "area": ["运城市", "永济市", "河津市", "芮城县", "临猗县", "万荣县", "新绛县", "稷山县", "闻喜县", "夏  县", "绛  县", "平陆县", "垣曲县"]
  }]
}, {
  "name": "内蒙古",
  "city": [{
    "name": "呼和浩特",
    "area": ["新城区", "回民区", "玉泉区", "郊  区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"]
  }, {
    "name": "包头",
    "area": ["东河区", "昆都伦区", "青山区", "石拐矿区", "白云矿区", "郊  区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"]
  }, {
    "name": "乌海",
    "area": ["海勃湾区", "海南区", "乌达区"]
  }, {
    "name": "赤峰",
    "area": ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"]
  }, {
    "name": "呼伦贝尔",
    "area": ["海拉尔市", "满洲里市", "扎兰屯市", "牙克石市", "根河市", "额尔古纳市", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "新巴尔虎右旗", "新巴尔虎左旗", "陈巴尔虎旗"]
  }, {
    "name": "兴安盟",
    "area": ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"]
  }, {
    "name": "通辽",
    "area": ["科尔沁区", "霍林郭勒市", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗"]
  }, {
    "name": "锡林郭勒盟",
    "area": ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"]
  }, {
    "name": "乌兰察布盟",
    "area": ["集宁市", "丰镇市", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗"]
  }, {
    "name": "伊克昭盟",
    "area": ["东胜市", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"]
  }, {
    "name": "巴彦淖尔盟",
    "area": ["临河市", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"]
  }, {
    "name": "阿拉善盟",
    "area": ["阿拉善左旗", "阿拉善右旗", "额济纳旗"]
  }]
}, {
  "name": "辽宁",
  "city": [{
    "name": "沈阳",
    "area": ["沈河区", "皇姑区", "和平区", "大东区", "铁西区", "苏家屯区", "东陵区", "于洪区", "新民市", "法库县", "辽中县", "康平县", "新城子区", "其他"]
  }, {
    "name": "大连",
    "area": ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "庄河市", "长海县", "其他"]
  }, {
    "name": "鞍山",
    "area": ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "岫岩满族自治县", "其他"]
  }, {
    "name": "抚顺",
    "area": ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "清原满族自治县", "新宾满族自治县", "其他"]
  }, {
    "name": "本溪",
    "area": ["平山区", "明山区", "溪湖区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "其他"]
  }, {
    "name": "丹东",
    "area": ["振兴区", "元宝区", "振安区", "东港市", "凤城市", "宽甸满族自治县", "其他"]
  }, {
    "name": "锦州",
    "area": ["太和区", "古塔区", "凌河区", "凌海市", "黑山县", "义县", "北宁市", "其他"]
  }, {
    "name": "营口",
    "area": ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市", "其他"]
  }, {
    "name": "阜新",
    "area": ["海州区", "新邱区", "太平区", "清河门区", "细河区", "彰武县", "阜新蒙古族自治县", "其他"]
  }, {
    "name": "辽阳",
    "area": ["白塔区", "文圣区", "宏伟区", "太子河区", "弓长岭区", "灯塔市", "辽阳县", "其他"]
  }, {
    "name": "盘锦",
    "area": ["双台子区", "兴隆台区", "盘山县", "大洼县", "其他"]
  }, {
    "name": "铁岭",
    "area": ["银州区", "清河区", "调兵山市", "开原市", "铁岭县", "昌图县", "西丰县", "其他"]
  }, {
    "name": "朝阳",
    "area": ["双塔区", "龙城区", "凌源市", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "其他"]
  }, {
    "name": "葫芦岛",
    "area": ["龙港区", "南票区", "连山区", "兴城市", "绥中县", "建昌县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "吉林",
  "city": [{
    "name": "长春",
    "area": ["朝阳区", "宽城区", "二道区", "南关区", "绿园区", "双阳区", "九台市", "榆树市", "德惠市", "农安县", "其他"]
  }, {
    "name": "吉林",
    "area": ["船营区", "昌邑区", "龙潭区", "丰满区", "舒兰市", "桦甸市", "蛟河市", "磐石市", "永吉县", "其他"]
  }, {
    "name": "四平",
    "area": ["铁西区", "铁东区", "公主岭市", "双辽市", "梨树县", "伊通满族自治县", "其他"]
  }, {
    "name": "辽源",
    "area": ["龙山区", "西安区", "东辽县", "东丰县", "其他"]
  }, {
    "name": "通化",
    "area": ["东昌区", "二道江区", "梅河口市", "集安市", "通化县", "辉南县", "柳河县", "其他"]
  }, {
    "name": "白山",
    "area": ["八道江区", "江源区", "临江市", "靖宇县", "抚松县", "长白朝鲜族自治县", "其他"]
  }, {
    "name": "松原",
    "area": ["宁江区", "乾安县", "长岭县", "扶余县", "前郭尔罗斯蒙古族自治县", "其他"]
  }, {
    "name": "白城",
    "area": ["洮北区", "大安市", "洮南市", "镇赉县", "通榆县", "其他"]
  }, {
    "name": "延边朝鲜族自治州",
    "area": ["延吉市", "图们市", "敦化市", "龙井市", "珲春市", "和龙市", "安图县", "汪清县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "黑龙江",
  "city": [{
    "name": "哈尔滨",
    "area": ["松北区", "道里区", "南岗区", "平房区", "香坊区", "道外区", "呼兰区", "阿城区", "双城市", "尚志市", "五常市", "宾县", "方正县", "通河县", "巴彦县", "延寿县", "木兰县", "依兰县", "其他"]
  }, {
    "name": "齐齐哈尔",
    "area": ["龙沙区", "昂昂溪区", "铁锋区", "建华区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "讷河市", "富裕县", "拜泉县", "甘南县", "依安县", "克山县", "泰来县", "克东县", "龙江县", "其他"]
  }, {
    "name": "鹤岗",
    "area": ["兴山区", "工农区", "南山区", "兴安区", "向阳区", "东山区", "萝北县", "绥滨县", "其他"]
  }, {
    "name": "双鸭山",
    "area": ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "宝清县", "友谊县", "饶河县", "其他"]
  }, {
    "name": "鸡西",
    "area": ["鸡冠区", "恒山区", "城子河区", "滴道区", "梨树区", "麻山区", "密山市", "虎林市", "鸡东县", "其他"]
  }, {
    "name": "大庆",
    "area": ["萨尔图区", "红岗区", "龙凤区", "让胡路区", "大同区", "林甸县", "肇州县", "肇源县", "杜尔伯特蒙古族自治县", "其他"]
  }, {
    "name": "伊春",
    "area": ["伊春区", "带岭区", "南岔区", "金山屯区", "西林区", "美溪区", "乌马河区", "翠峦区", "友好区", "上甘岭区", "五营区", "红星区", "新青区", "汤旺河区", "乌伊岭区", "铁力市", "嘉荫县", "其他"]
  }, {
    "name": "牡丹江",
    "area": ["爱民区", "东安区", "阳明区", "西安区", "绥芬河市", "宁安市", "海林市", "穆棱市", "林口县", "东宁县", "其他"]
  }, {
    "name": "佳木斯",
    "area": ["向阳区", "前进区", "东风区", "郊区", "同江市", "富锦市", "桦川县", "抚远县", "桦南县", "汤原县", "其他"]
  }, {
    "name": "七台河",
    "area": ["桃山区", "新兴区", "茄子河区", "勃利县", "其他"]
  }, {
    "name": "黑河",
    "area": ["爱辉区", "北安市", "五大连池市", "逊克县", "嫩江县", "孙吴县", "其他"]
  }, {
    "name": "绥化",
    "area": ["北林区", "安达市", "肇东市", "海伦市", "绥棱县", "兰西县", "明水县", "青冈县", "庆安县", "望奎县", "其他"]
  }, {
    "name": "大兴安岭地区",
    "area": ["呼玛县", "塔河县", "漠河县", "大兴安岭辖区", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "上海",
  "city": [{
    "name": "上海",
    "area": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他"]
  }]
}, {
  "name": "江苏",
  "city": [{
    "name": "南京",
    "area": ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "栖霞区", "雨花台区", "浦口区", "江宁区", "六合区", "溧水县", "高淳县", "其他"]
  }, {
    "name": "苏州",
    "area": ["金阊区", "平江区", "沧浪区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市", "其他"]
  }, {
    "name": "无锡",
    "area": ["崇安区", "南长区", "北塘区", "滨湖区", "锡山区", "惠山区", "江阴市", "宜兴市", "其他"]
  }, {
    "name": "常州",
    "area": ["钟楼区", "天宁区", "戚墅堰区", "新北区", "武进区", "金坛市", "溧阳市", "其他"]
  }, {
    "name": "镇江",
    "area": ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其他"]
  }, {
    "name": "南通",
    "area": ["崇川区", "港闸区", "通州市", "如皋市", "海门市", "启东市", "海安县", "如东县", "其他"]
  }, {
    "name": "泰州",
    "area": ["海陵区", "高港区", "姜堰市", "泰兴市", "靖江市", "兴化市", "其他"]
  }, {
    "name": "扬州",
    "area": ["广陵区", "维扬区", "邗江区", "江都市", "仪征市", "高邮市", "宝应县", "其他"]
  }, {
    "name": "盐城",
    "area": ["亭湖区", "盐都区", "大丰市", "东台市", "建湖县", "射阳县", "阜宁县", "滨海县", "响水县", "其他"]
  }, {
    "name": "连云港",
    "area": ["新浦区", "海州区", "连云区", "东海县", "灌云县", "赣榆县", "灌南县", "其他"]
  }, {
    "name": "徐州",
    "area": ["云龙区", "鼓楼区", "九里区", "泉山区", "贾汪区", "邳州市", "新沂市", "铜山县", "睢宁县", "沛县", "丰县", "其他"]
  }, {
    "name": "淮安",
    "area": ["清河区", "清浦区", "楚州区", "淮阴区", "涟水县", "洪泽县", "金湖县", "盱眙县", "其他"]
  }, {
    "name": "宿迁",
    "area": ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "浙江",
  "city": [{
    "name": "杭州",
    "area": ["拱墅区", "西湖区", "上城区", "下城区", "江干区", "滨江区", "余杭区", "萧山区", "建德市", "富阳市", "临安市", "桐庐县", "淳安县", "其他"]
  }, {
    "name": "宁波",
    "area": ["海曙区", "江东区", "江北区", "镇海区", "北仑区", "鄞州区", "余姚市", "慈溪市", "奉化市", "宁海县", "象山县", "其他"]
  }, {
    "name": "温州",
    "area": ["鹿城区", "龙湾区", "瓯海区", "瑞安市", "乐清市", "永嘉县", "洞头县", "平阳县", "苍南县", "文成县", "泰顺县", "其他"]
  }, {
    "name": "嘉兴",
    "area": ["秀城区", "秀洲区", "海宁市", "平湖市", "桐乡市", "嘉善县", "海盐县", "其他"]
  }, {
    "name": "湖州",
    "area": ["吴兴区", "南浔区", "长兴县", "德清县", "安吉县", "其他"]
  }, {
    "name": "绍兴",
    "area": ["越城区", "诸暨市", "上虞市", "嵊州市", "绍兴县", "新昌县", "其他"]
  }, {
    "name": "金华",
    "area": ["婺城区", "金东区", "兰溪市", "义乌市", "东阳市", "永康市", "武义县", "浦江县", "磐安县", "其他"]
  }, {
    "name": "衢州",
    "area": ["柯城区", "衢江区", "江山市", "龙游县", "常山县", "开化县", "其他"]
  }, {
    "name": "舟山",
    "area": ["定海区", "普陀区", "岱山县", "嵊泗县", "其他"]
  }, {
    "name": "台州",
    "area": ["椒江区", "黄岩区", "路桥区", "临海市", "温岭市", "玉环县", "天台县", "仙居县", "三门县", "其他"]
  }, {
    "name": "丽水",
    "area": ["莲都区", "龙泉市", "缙云县", "青田县", "云和县", "遂昌县", "松阳县", "庆元县", "景宁畲族自治县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "安徽",
  "city": [{
    "name": "合肥",
    "area": ["庐阳区", "瑶海区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "其他"]
  }, {
    "name": "芜湖",
    "area": ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "南陵县", "繁昌县", "其他"]
  }, {
    "name": "蚌埠",
    "area": ["蚌山区", "龙子湖区", "禹会区", "淮上区", "怀远县", "固镇县", "五河县", "其他"]
  }, {
    "name": "淮南",
    "area": ["田家庵区", "大通区", "谢家集区", "八公山区", "潘集区", "凤台县", "其他"]
  }, {
    "name": "马鞍山",
    "area": ["雨山区", "花山区", "金家庄区", "当涂县", "其他"]
  }, {
    "name": "淮北",
    "area": ["相山区", "杜集区", "烈山区", "濉溪县", "其他"]
  }, {
    "name": "铜陵",
    "area": ["铜官山区", "狮子山区", "郊区", "铜陵县", "其他"]
  }, {
    "name": "安庆",
    "area": ["迎江区", "大观区", "宜秀区", "桐城市", "宿松县", "枞阳县", "太湖县", "怀宁县", "岳西县", "望江县", "潜山县", "其他"]
  }, {
    "name": "黄山",
    "area": ["屯溪区", "黄山区", "徽州区", "休宁县", "歙县", "祁门县", "黟县", "其他"]
  }, {
    "name": "滁州",
    "area": ["琅琊区", "南谯区", "天长市", "明光市", "全椒县", "来安县", "定远县", "凤阳县", "其他"]
  }, {
    "name": "阜阳",
    "area": ["颍州区", "颍东区", "颍泉区", "界首市", "临泉县", "颍上县", "阜南县", "太和县", "其他"]
  }, {
    "name": "宿州",
    "area": ["埇桥区", "萧县", "泗县", "砀山县", "灵璧县", "其他"]
  }, {
    "name": "巢湖",
    "area": ["居巢区", "含山县", "无为县", "庐江县", "和县", "其他"]
  }, {
    "name": "六安",
    "area": ["金安区", "裕安区", "寿县", "霍山县", "霍邱县", "舒城县", "金寨县", "其他"]
  }, {
    "name": "亳州",
    "area": ["谯城区", "利辛县", "涡阳县", "蒙城县", "其他"]
  }, {
    "name": "池州",
    "area": ["贵池区", "东至县", "石台县", "青阳县", "其他"]
  }, {
    "name": "宣城",
    "area": ["宣州区", "宁国市", "广德县", "郎溪县", "泾县", "旌德县", "绩溪县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "福建",
  "city": [{
    "name": "福州",
    "area": ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "福清市", "长乐市", "闽侯县", "闽清县", "永泰县", "连江县", "罗源县", "平潭县", "其他"]
  }, {
    "name": "厦门",
    "area": ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他"]
  }, {
    "name": "莆田",
    "area": ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他"]
  }, {
    "name": "三明",
    "area": ["梅列区", "三元区", "永安市", "明溪县", "将乐县", "大田县", "宁化县", "建宁县", "沙县", "尤溪县", "清流县", "泰宁县", "其他"]
  }, {
    "name": "泉州",
    "area": ["鲤城区", "丰泽区", "洛江区", "泉港区", "石狮市", "晋江市", "南安市", "惠安县", "永春县", "安溪县", "德化县", "金门县", "其他"]
  }, {
    "name": "漳州",
    "area": ["芗城区", "龙文区", "龙海市", "平和县", "南靖县", "诏安县", "漳浦县", "华安县", "东山县", "长泰县", "云霄县", "其他"]
  }, {
    "name": "南平",
    "area": ["延平区", "建瓯市", "邵武市", "武夷山市", "建阳市", "松溪县", "光泽县", "顺昌县", "浦城县", "政和县", "其他"]
  }, {
    "name": "龙岩",
    "area": ["新罗区", "漳平市", "长汀县", "武平县", "上杭县", "永定县", "连城县", "其他"]
  }, {
    "name": "宁德",
    "area": ["蕉城区", "福安市", "福鼎市", "寿宁县", "霞浦县", "柘荣县", "屏南县", "古田县", "周宁县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "江西",
  "city": [{
    "name": "南昌",
    "area": ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建县", "南昌县", "进贤县", "安义县", "其他"]
  }, {
    "name": "景德镇",
    "area": ["珠山区", "昌江区", "乐平市", "浮梁县", "其他"]
  }, {
    "name": "萍乡",
    "area": ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他"]
  }, {
    "name": "九江",
    "area": ["浔阳区", "庐山区", "瑞昌市", "九江县", "星子县", "武宁县", "彭泽县", "永修县", "修水县", "湖口县", "德安县", "都昌县", "其他"]
  }, {
    "name": "新余",
    "area": ["渝水区", "分宜县", "其他"]
  }, {
    "name": "鹰潭",
    "area": ["月湖区", "贵溪市", "余江县", "其他"]
  }, {
    "name": "赣州",
    "area": ["章贡区", "瑞金市", "南康市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "信丰县", "全南县", "大余县", "会昌县", "其他"]
  }, {
    "name": "吉安",
    "area": ["吉州区", "青原区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县", "其他"]
  }, {
    "name": "宜春",
    "area": ["袁州区", "丰城市", "樟树市", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县", "其他"]
  }, {
    "name": "抚州",
    "area": ["临川区", "南丰县", "乐安县", "金溪县", "南城县", "东乡县", "资溪县", "宜黄县", "广昌县", "黎川县", "崇仁县", "其他"]
  }, {
    "name": "上饶",
    "area": ["信州区", "德兴市", "上饶县", "广丰县", "鄱阳县", "婺源县", "铅山县", "余干县", "横峰县", "弋阳县", "玉山县", "万年县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "山东",
  "city": [{
    "name": "济南",
    "area": ["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区", "章丘市", "平阴县", "济阳县", "商河县", "其他"]
  }, {
    "name": "青岛",
    "area": ["市南区", "市北区", "城阳区", "四方区", "李沧区", "黄岛区", "崂山区", "胶南市", "胶州市", "平度市", "莱西市", "即墨市", "其他"]
  }, {
    "name": "淄博",
    "area": ["张店区", "临淄区", "淄川区", "博山区", "周村区", "桓台县", "高青县", "沂源县", "其他"]
  }, {
    "name": "枣庄",
    "area": ["市中区", "山亭区", "峄城区", "台儿庄区", "薛城区", "滕州市", "其他"]
  }, {
    "name": "东营",
    "area": ["东营区", "河口区", "垦利县", "广饶县", "利津县", "其他"]
  }, {
    "name": "烟台",
    "area": ["芝罘区", "福山区", "牟平区", "莱山区", "龙口市", "莱阳市", "莱州市", "招远市", "蓬莱市", "栖霞市", "海阳市", "长岛县", "其他"]
  }, {
    "name": "潍坊",
    "area": ["潍城区", "寒亭区", "坊子区", "奎文区", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市", "昌乐县", "临朐县", "其他"]
  }, {
    "name": "济宁",
    "area": ["市中区", "任城区", "曲阜市", "兖州市", "邹城市", "鱼台县", "金乡县", "嘉祥县", "微山县", "汶上县", "泗水县", "梁山县", "其他"]
  }, {
    "name": "泰安",
    "area": ["泰山区", "岱岳区", "新泰市", "肥城市", "宁阳县", "东平县", "其他"]
  }, {
    "name": "威海",
    "area": ["环翠区", "乳山市", "文登市", "荣成市", "其他"]
  }, {
    "name": "日照",
    "area": ["东港区", "岚山区", "五莲县", "莒县", "其他"]
  }, {
    "name": "莱芜",
    "area": ["莱城区", "钢城区", "其他"]
  }, {
    "name": "临沂",
    "area": ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县", "其他"]
  }, {
    "name": "德州",
    "area": ["德城区", "乐陵市", "禹城市", "陵县", "宁津县", "齐河县", "武城县", "庆云县", "平原县", "夏津县", "临邑县", "其他"]
  }, {
    "name": "聊城",
    "area": ["东昌府区", "临清市", "高唐县", "阳谷县", "茌平县", "莘县", "东阿县", "冠县", "其他"]
  }, {
    "name": "滨州",
    "area": ["滨城区", "邹平县", "沾化县", "惠民县", "博兴县", "阳信县", "无棣县", "其他"]
  }, {
    "name": "菏泽",
    "area": ["牡丹区", "鄄城县", "单县", "郓城县", "曹县", "定陶县", "巨野县", "东明县", "成武县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "河南",
  "city": [{
    "name": "郑州",
    "area": ["中原区", "金水区", "二七区", "管城回族区", "上街区", "惠济区", "巩义市", "新郑市", "新密市", "登封市", "荥阳市", "中牟县", "其他"]
  }, {
    "name": "开封",
    "area": ["鼓楼区", "龙亭区", "顺河回族区", "禹王台区", "金明区", "开封县", "尉氏县", "兰考县", "杞县", "通许县", "其他"]
  }, {
    "name": "洛阳",
    "area": ["西工区", "老城区", "涧西区", "瀍河回族区", "洛龙区", "吉利区", "偃师市", "孟津县", "汝阳县", "伊川县", "洛宁县", "嵩县", "宜阳县", "新安县", "栾川县", "其他"]
  }, {
    "name": "平顶山",
    "area": ["新华区", "卫东区", "湛河区", "石龙区", "汝州市", "舞钢市", "宝丰县", "叶县", "郏县", "鲁山县", "其他"]
  }, {
    "name": "安阳",
    "area": ["北关区", "文峰区", "殷都区", "龙安区", "林州市", "安阳县", "滑县", "内黄县", "汤阴县", "其他"]
  }, {
    "name": "鹤壁",
    "area": ["淇滨区", "山城区", "鹤山区", "浚县", "淇县", "其他"]
  }, {
    "name": "新乡",
    "area": ["卫滨区", "红旗区", "凤泉区", "牧野区", "卫辉市", "辉县市", "新乡县", "获嘉县", "原阳县", "长垣县", "封丘县", "延津县", "其他"]
  }, {
    "name": "焦作",
    "area": ["解放区", "中站区", "马村区", "山阳区", "沁阳市", "孟州市", "修武县", "温县", "武陟县", "博爱县", "其他"]
  }, {
    "name": "濮阳",
    "area": ["华龙区", "濮阳县", "南乐县", "台前县", "清丰县", "范县", "其他"]
  }, {
    "name": "许昌",
    "area": ["魏都区", "禹州市", "长葛市", "许昌县", "鄢陵县", "襄城县", "其他"]
  }, {
    "name": "漯河",
    "area": ["源汇区", "郾城区", "召陵区", "临颍县", "舞阳县", "其他"]
  }, {
    "name": "三门峡",
    "area": ["湖滨区", "义马市", "灵宝市", "渑池县", "卢氏县", "陕县", "其他"]
  }, {
    "name": "南阳",
    "area": ["卧龙区", "宛城区", "邓州市", "桐柏县", "方城县", "淅川县", "镇平县", "唐河县", "南召县", "内乡县", "新野县", "社旗县", "西峡县", "其他"]
  }, {
    "name": "商丘",
    "area": ["梁园区", "睢阳区", "永城市", "宁陵县", "虞城县", "民权县", "夏邑县", "柘城县", "睢县", "其他"]
  }, {
    "name": "信阳",
    "area": ["浉河区", "平桥区", "潢川县", "淮滨县", "息县", "新县", "商城县", "固始县", "罗山县", "光山县", "其他"]
  }, {
    "name": "周口",
    "area": ["川汇区", "项城市", "商水县", "淮阳县", "太康县", "鹿邑县", "西华县", "扶沟县", "沈丘县", "郸城县", "其他"]
  }, {
    "name": "驻马店",
    "area": ["驿城区", "确山县", "新蔡县", "上蔡县", "西平县", "泌阳县", "平舆县", "汝南县", "遂平县", "正阳县", "其他"]
  }, {
    "name": "焦作",
    "area": ["济源市", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "湖北",
  "city": [{
    "name": "武汉",
    "area": ["江岸区", "武昌区", "江汉区", "硚口区", "汉阳区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "其他"]
  }, {
    "name": "黄石",
    "area": ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县", "其他"]
  }, {
    "name": "十堰",
    "area": ["张湾区", "茅箭区", "丹江口市", "郧县", "竹山县", "房县", "郧西县", "竹溪县", "其他"]
  }, {
    "name": "荆州",
    "area": ["沙市区", "荆州区", "洪湖市", "石首市", "松滋市", "监利县", "公安县", "江陵县", "其他"]
  }, {
    "name": "宜昌",
    "area": ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "宜都市", "当阳市", "枝江市", "秭归县", "远安县", "兴山县", "五峰土家族自治县", "长阳土家族自治县", "其他"]
  }, {
    "name": "襄樊",
    "area": ["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "谷城县", "保康县", "其他"]
  }, {
    "name": "鄂州",
    "area": ["鄂城区", "华容区", "梁子湖区", "其他"]
  }, {
    "name": "荆门",
    "area": ["东宝区", "掇刀区", "钟祥市", "京山县", "沙洋县", "其他"]
  }, {
    "name": "孝感",
    "area": ["孝南区", "应城市", "安陆市", "汉川市", "云梦县", "大悟县", "孝昌县", "其他"]
  }, {
    "name": "黄冈",
    "area": ["黄州区", "麻城市", "武穴市", "红安县", "罗田县", "浠水县", "蕲春县", "黄梅县", "英山县", "团风县", "其他"]
  }, {
    "name": "咸宁",
    "area": ["咸安区", "赤壁市", "嘉鱼县", "通山县", "崇阳县", "通城县", "其他"]
  }, {
    "name": "随州",
    "area": ["曾都区", "广水市", "其他"]
  }, {
    "name": "恩施土家族苗族自治州",
    "area": ["恩施市", "利川市", "建始县", "来凤县", "巴东县", "鹤峰县", "宣恩县", "咸丰县", "其他"]
  }, {
    "name": "仙桃",
    "area": ["仙桃"]
  }, {
    "name": "天门",
    "area": ["天门"]
  }, {
    "name": "潜江",
    "area": ["潜江"]
  }, {
    "name": "神农架林区",
    "area": ["神农架林区"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "湖南",
  "city": [{
    "name": "长沙",
    "area": ["岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城县", "宁乡县", "其他"]
  }, {
    "name": "株洲",
    "area": ["天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "炎陵县", "茶陵县", "攸县", "其他"]
  }, {
    "name": "湘潭",
    "area": ["岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", "其他"]
  }, {
    "name": "衡阳",
    "area": ["雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "耒阳市", "常宁市", "衡阳县", "衡东县", "衡山县", "衡南县", "祁东县", "其他"]
  }, {
    "name": "邵阳",
    "area": ["双清区", "大祥区", "北塔区", "武冈市", "邵东县", "洞口县", "新邵县", "绥宁县", "新宁县", "邵阳县", "隆回县", "城步苗族自治县", "其他"]
  }, {
    "name": "岳阳",
    "area": ["岳阳楼区", "云溪区", "君山区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "平江县", "华容县", "其他"]
  }, {
    "name": "常德",
    "area": ["武陵区", "鼎城区", "津市市", "澧县", "临澧县", "桃源县", "汉寿县", "安乡县", "石门县", "其他"]
  }, {
    "name": "张家界",
    "area": ["永定区", "武陵源区", "慈利县", "桑植县", "其他"]
  }, {
    "name": "益阳",
    "area": ["赫山区", "资阳区", "沅江市", "桃江县", "南县", "安化县", "其他"]
  }, {
    "name": "郴州",
    "area": ["北湖区", "苏仙区", "资兴市", "宜章县", "汝城县", "安仁县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "其他"]
  }, {
    "name": "永州",
    "area": ["冷水滩区", "零陵区", "祁阳县", "蓝山县", "宁远县", "新田县", "东安县", "江永县", "道县", "双牌县", "江华瑶族自治县", "其他"]
  }, {
    "name": "怀化",
    "area": ["鹤城区", "洪江市", "会同县", "沅陵县", "辰溪县", "溆浦县", "中方县", "新晃侗族自治县", "芷江侗族自治县", "通道侗族自治县", "靖州苗族侗族自治县", "麻阳苗族自治县", "其他"]
  }, {
    "name": "娄底",
    "area": ["娄星区", "冷水江市", "涟源市", "新化县", "双峰县", "其他"]
  }, {
    "name": "湘西土家族苗族自治州",
    "area": ["吉首市", "古丈县", "龙山县", "永顺县", "凤凰县", "泸溪县", "保靖县", "花垣县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "广东",
  "city": [{
    "name": "广州",
    "area": ["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"]
  }, {
    "name": "深圳",
    "area": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区", "盐田区", "其他"]
  }, {
    "name": "东莞",
    "area": ["莞城", "常平", "塘厦", "塘厦", "塘厦", "其他"]
  }, {
    "name": "中山",
    "area": ["中山"]
  }, {
    "name": "潮州",
    "area": ["湘桥区", "潮安县", "饶平县", "其他"]
  }, {
    "name": "揭阳",
    "area": ["榕城区", "揭东县", "揭西县", "惠来县", "普宁市", "其他"]
  }, {
    "name": "云浮",
    "area": ["云城区", "新兴县", "郁南县", "云安县", "罗定市", "其他"]
  }, {
    "name": "珠海",
    "area": ["香洲区", "斗门区", "金湾区", "其他"]
  }, {
    "name": "汕头",
    "area": ["金平区", "濠江区", "龙湖区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他"]
  }, {
    "name": "韶关",
    "area": ["浈江区", "武江区", "曲江区", "乐昌市", "南雄市", "始兴县", "仁化县", "翁源县", "新丰县", "乳源瑶族自治县", "其他"]
  }, {
    "name": "佛山",
    "area": ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他"]
  }, {
    "name": "江门",
    "area": ["蓬江区", "江海区", "新会区", "恩平市", "台山市", "开平市", "鹤山市", "其他"]
  }, {
    "name": "湛江",
    "area": ["赤坎区", "霞山区", "坡头区", "麻章区", "吴川市", "廉江市", "雷州市", "遂溪县", "徐闻县", "其他"]
  }, {
    "name": "茂名",
    "area": ["茂南区", "茂港区", "化州市", "信宜市", "高州市", "电白县", "其他"]
  }, {
    "name": "肇庆",
    "area": ["端州区", "鼎湖区", "高要市", "四会市", "广宁县", "怀集县", "封开县", "德庆县", "其他"]
  }, {
    "name": "惠州",
    "area": ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其他"]
  }, {
    "name": "梅州",
    "area": ["梅江区", "兴宁市", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "其他"]
  }, {
    "name": "汕尾",
    "area": ["城区", "陆丰市", "海丰县", "陆河县", "其他"]
  }, {
    "name": "河源",
    "area": ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县", "其他"]
  }, {
    "name": "阳江",
    "area": ["江城区", "阳春市", "阳西县", "阳东县", "其他"]
  }, {
    "name": "清远",
    "area": ["清城区", "英德市", "连州市", "佛冈县", "阳山县", "清新县", "连山壮族瑶族自治县", "连南瑶族自治县", "其他"]
  }]
}, {
  "name": "广西",
  "city": [{
    "name": "南宁",
    "area": ["青秀区", "兴宁区", "西乡塘区", "良庆区", "江南区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"]
  }, {
    "name": "柳州",
    "area": ["城中区", "鱼峰区", "柳北区", "柳南区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其他"]
  }, {
    "name": "桂林",
    "area": ["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县", "其他"]
  }, {
    "name": "梧州",
    "area": ["万秀区", "蝶山区", "长洲区", "岑溪市", "苍梧县", "藤县", "蒙山县", "其他"]
  }, {
    "name": "北海",
    "area": ["海城区", "银海区", "铁山港区", "合浦县", "其他"]
  }, {
    "name": "防城港",
    "area": ["港口区", "防城区", "东兴市", "上思县", "其他"]
  }, {
    "name": "钦州",
    "area": ["钦南区", "钦北区", "灵山县", "浦北县", "其他"]
  }, {
    "name": "贵港",
    "area": ["港北区", "港南区", "覃塘区", "桂平市", "平南县", "其他"]
  }, {
    "name": "玉林",
    "area": ["玉州区", "北流市", "容县", "陆川县", "博白县", "兴业县", "其他"]
  }, {
    "name": "百色",
    "area": ["右江区", "凌云县", "平果县", "西林县", "乐业县", "德保县", "田林县", "田阳县", "靖西县", "田东县", "那坡县", "隆林各族自治县", "其他"]
  }, {
    "name": "贺州",
    "area": ["八步区", "钟山县", "昭平县", "富川瑶族自治县", "其他"]
  }, {
    "name": "河池",
    "area": ["金城江区", "宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "都安瑶族自治县", "罗城仫佬族自治县", "巴马瑶族自治县", "环江毛南族自治县", "大化瑶族自治县", "其他"]
  }, {
    "name": "来宾",
    "area": ["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县", "其他"]
  }, {
    "name": "崇左",
    "area": ["江州区", "凭祥市", "宁明县", "扶绥县", "龙州县", "大新县", "天等县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "海南",
  "city": [{
    "name": "海口",
    "area": ["龙华区", "秀英区", "琼山区", "美兰区", "其他"]
  }, {
    "name": "三亚",
    "area": ["三亚市", "其他"]
  }, {
    "name": "五指山",
    "area": ["五指山"]
  }, {
    "name": "琼海",
    "area": ["琼海"]
  }, {
    "name": "儋州",
    "area": ["儋州"]
  }, {
    "name": "文昌",
    "area": ["文昌"]
  }, {
    "name": "万宁",
    "area": ["万宁"]
  }, {
    "name": "东方",
    "area": ["东方"]
  }, {
    "name": "澄迈县",
    "area": ["澄迈县"]
  }, {
    "name": "定安县",
    "area": ["定安县"]
  }, {
    "name": "屯昌县",
    "area": ["屯昌县"]
  }, {
    "name": "临高县",
    "area": ["临高县"]
  }, {
    "name": "白沙黎族自治县",
    "area": ["白沙黎族自治县"]
  }, {
    "name": "昌江黎族自治县",
    "area": ["昌江黎族自治县"]
  }, {
    "name": "乐东黎族自治县",
    "area": ["乐东黎族自治县"]
  }, {
    "name": "陵水黎族自治县",
    "area": ["陵水黎族自治县"]
  }, {
    "name": "保亭黎族苗族自治县",
    "area": ["保亭黎族苗族自治县"]
  }, {
    "name": "琼中黎族苗族自治县",
    "area": ["琼中黎族苗族自治县"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "重庆",
  "city": [{
    "name": "重庆",
    "area": ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "其他"]
  }]
}, {
  "name": "四川",
  "city": [{
    "name": "成都",
    "area": ["青羊区", "锦江区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "彭州市", "邛崃市", "崇州市", "金堂县", "郫县", "新津县", "双流县", "蒲江县", "大邑县", "其他"]
  }, {
    "name": "自贡",
    "area": ["大安区", "自流井区", "贡井区", "沿滩区", "荣县", "富顺县", "其他"]
  }, {
    "name": "攀枝花",
    "area": ["仁和区", "米易县", "盐边县", "东区", "西区", "其他"]
  }, {
    "name": "泸州",
    "area": ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县", "其他"]
  }, {
    "name": "德阳",
    "area": ["旌阳区", "广汉市", "什邡市", "绵竹市", "罗江县", "中江县", "其他"]
  }, {
    "name": "绵阳",
    "area": ["涪城区", "游仙区", "江油市", "盐亭县", "三台县", "平武县", "安县", "梓潼县", "北川羌族自治县", "其他"]
  }, {
    "name": "广元",
    "area": ["元坝区", "朝天区", "青川县", "旺苍县", "剑阁县", "苍溪县", "市中区", "其他"]
  }, {
    "name": "遂宁",
    "area": ["船山区", "安居区", "射洪县", "蓬溪县", "大英县", "其他"]
  }, {
    "name": "内江",
    "area": ["市中区", "东兴区", "资中县", "隆昌县", "威远县", "其他"]
  }, {
    "name": "乐山",
    "area": ["市中区", "五通桥区", "沙湾区", "金口河区", "峨眉山市", "夹江县", "井研县", "犍为县", "沐川县", "马边彝族自治县", "峨边彝族自治县", "其他"]
  }, {
    "name": "南充",
    "area": ["顺庆区", "高坪区", "嘉陵区", "阆中市", "营山县", "蓬安县", "仪陇县", "南部县", "西充县", "其他"]
  }, {
    "name": "眉山",
    "area": ["东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县", "其他"]
  }, {
    "name": "宜宾",
    "area": ["翠屏区", "宜宾县", "兴文县", "南溪县", "珙县", "长宁县", "高县", "江安县", "筠连县", "屏山县", "其他"]
  }, {
    "name": "广安",
    "area": ["广安区", "华蓥市", "岳池县", "邻水县", "武胜县", "其他"]
  }, {
    "name": "达州",
    "area": ["通川区", "万源市", "达县", "渠县", "宣汉县", "开江县", "大竹县", "其他"]
  }, {
    "name": "雅安",
    "area": ["雨城区", "芦山县", "石棉县", "名山县", "天全县", "荥经县", "宝兴县", "汉源县", "其他"]
  }, {
    "name": "巴中",
    "area": ["巴州区", "南江县", "平昌县", "通江县", "其他"]
  }, {
    "name": "资阳",
    "area": ["雁江区", "简阳市", "安岳县", "乐至县", "其他"]
  }, {
    "name": "阿坝藏族羌族自治州",
    "area": ["马尔康县", "九寨沟县", "红原县", "汶川县", "阿坝县", "理县", "若尔盖县", "小金县", "黑水县", "金川县", "松潘县", "壤塘县", "茂县", "其他"]
  }, {
    "name": "甘孜藏族自治州",
    "area": ["康定县", "丹巴县", "炉霍县", "九龙县", "甘孜县", "雅江县", "新龙县", "道孚县", "白玉县", "理塘县", "德格县", "乡城县", "石渠县", "稻城县", "色达县", "巴塘县", "泸定县", "得荣县", "其他"]
  }, {
    "name": "凉山彝族自治州",
    "area": ["西昌市", "美姑县", "昭觉县", "金阳县", "甘洛县", "布拖县", "雷波县", "普格县", "宁南县", "喜德县", "会东县", "越西县", "会理县", "盐源县", "德昌县", "冕宁县", "木里藏族自治县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "贵州",
  "city": [{
    "name": "贵阳",
    "area": ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "清镇市", "开阳县", "修文县", "息烽县", "其他"]
  }, {
    "name": "六盘水",
    "area": ["钟山区", "水城县", "盘县", "六枝特区", "其他"]
  }, {
    "name": "遵义",
    "area": ["红花岗区", "汇川区", "赤水市", "仁怀市", "遵义县", "绥阳县", "桐梓县", "习水县", "凤冈县", "正安县", "余庆县", "湄潭县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "其他"]
  }, {
    "name": "安顺",
    "area": ["西秀区", "普定县", "平坝县", "镇宁布依族苗族自治县", "紫云苗族布依族自治县", "关岭布依族苗族自治县", "其他"]
  }, {
    "name": "铜仁地区",
    "area": ["铜仁市", "德江县", "江口县", "思南县", "石阡县", "玉屏侗族自治县", "松桃苗族自治县", "印江土家族苗族自治县", "沿河土家族自治县", "万山特区", "其他"]
  }, {
    "name": "毕节地区",
    "area": ["毕节市", "黔西县", "大方县", "织金县", "金沙县", "赫章县", "纳雍县", "威宁彝族回族苗族自治县", "其他"]
  }, {
    "name": "黔西南布依族苗族自治州",
    "area": ["兴义市", "望谟县", "兴仁县", "普安县", "册亨县", "晴隆县", "贞丰县", "安龙县", "其他"]
  }, {
    "name": "黔东南苗族侗族自治州",
    "area": ["凯里市", "施秉县", "从江县", "锦屏县", "镇远县", "麻江县", "台江县", "天柱县", "黄平县", "榕江县", "剑河县", "三穗县", "雷山县", "黎平县", "岑巩县", "丹寨县", "其他"]
  }, {
    "name": "黔南布依族苗族自治州",
    "area": ["都匀市", "福泉市", "贵定县", "惠水县", "罗甸县", "瓮安县", "荔波县", "龙里县", "平塘县", "长顺县", "独山县", "三都水族自治县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "云南",
  "city": [{
    "name": "昆明",
    "area": ["盘龙区", "五华区", "官渡区", "西山区", "东川区", "安宁市", "呈贡县", "晋宁县", "富民县", "宜良县", "嵩明县", "石林彝族自治县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "其他"]
  }, {
    "name": "曲靖",
    "area": ["麒麟区", "宣威市", "马龙县", "沾益县", "富源县", "罗平县", "师宗县", "陆良县", "会泽县", "其他"]
  }, {
    "name": "玉溪",
    "area": ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "其他"]
  }, {
    "name": "保山",
    "area": ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其他"]
  }, {
    "name": "昭通",
    "area": ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其他"]
  }, {
    "name": "丽江",
    "area": ["古城区", "永胜县", "华坪县", "玉龙纳西族自治县", "宁蒗彝族自治县", "其他"]
  }, {
    "name": "普洱",
    "area": ["思茅区", "普洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "其他"]
  }, {
    "name": "临沧",
    "area": ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "其他"]
  }, {
    "name": "德宏傣族景颇族自治州",
    "area": ["潞西市", "瑞丽市", "梁河县", "盈江县", "陇川县", "其他"]
  }, {
    "name": "怒江傈僳族自治州",
    "area": ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其他"]
  }, {
    "name": "迪庆藏族自治州",
    "area": ["香格里拉县", "德钦县", "维西傈僳族自治县", "其他"]
  }, {
    "name": "大理白族自治州",
    "area": ["大理市", "祥云县", "宾川县", "弥渡县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "漾濞彝族自治县", "南涧彝族自治县", "巍山彝族回族自治县", "其他"]
  }, {
    "name": "楚雄彝族自治州",
    "area": ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"]
  }, {
    "name": "红河哈尼族彝族自治州",
    "area": ["蒙自县", "个旧市", "开远市", "绿春县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "河口瑶族自治县", "屏边苗族自治县", "其他"]
  }, {
    "name": "文山壮族苗族自治州",
    "area": ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"]
  }, {
    "name": "西双版纳傣族自治州",
    "area": ["景洪市", "勐海县", "勐腊县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "西藏",
  "city": [{
    "name": "拉萨",
    "area": ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "其他"]
  }, {
    "name": "那曲地区",
    "area": ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "其他"]
  }, {
    "name": "昌都地区",
    "area": ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其他"]
  }, {
    "name": "林芝地区",
    "area": ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "其他"]
  }, {
    "name": "山南地区",
    "area": ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其他"]
  }, {
    "name": "日喀则地区",
    "area": ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其他"]
  }, {
    "name": "阿里地区",
    "area": ["噶尔县", "普兰县", "札达县", "日土县", "革吉县", "改则县", "措勤县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "陕西",
  "city": [{
    "name": "西安",
    "area": ["莲湖区", "新城区", "碑林区", "雁塔区", "灞桥区", "未央区", "阎良区", "临潼区", "长安区", "高陵县", "蓝田县", "户县", "周至县", "其他"]
  }, {
    "name": "铜川",
    "area": ["耀州区", "王益区", "印台区", "宜君县", "其他"]
  }, {
    "name": "宝鸡",
    "area": ["渭滨区", "金台区", "陈仓区", "岐山县", "凤翔县", "陇县", "太白县", "麟游县", "扶风县", "千阳县", "眉县", "凤县", "其他"]
  }, {
    "name": "咸阳",
    "area": ["秦都区", "渭城区", "杨陵区", "兴平市", "礼泉县", "泾阳县", "永寿县", "三原县", "彬县", "旬邑县", "长武县", "乾县", "武功县", "淳化县", "其他"]
  }, {
    "name": "渭南",
    "area": ["临渭区", "韩城市", "华阴市", "蒲城县", "潼关县", "白水县", "澄城县", "华县", "合阳县", "富平县", "大荔县", "其他"]
  }, {
    "name": "延安",
    "area": ["宝塔区", "安塞县", "洛川县", "子长县", "黄陵县", "延川县", "富县", "延长县", "甘泉县", "宜川县", "志丹县", "黄龙县", "吴起县", "其他"]
  }, {
    "name": "汉中",
    "area": ["汉台区", "留坝县", "镇巴县", "城固县", "南郑县", "洋县", "宁强县", "佛坪县", "勉县", "西乡县", "略阳县", "其他"]
  }, {
    "name": "榆林",
    "area": ["榆阳区", "清涧县", "绥德县", "神木县", "佳县", "府谷县", "子洲县", "靖边县", "横山县", "米脂县", "吴堡县", "定边县", "其他"]
  }, {
    "name": "安康",
    "area": ["汉滨区", "紫阳县", "岚皋县", "旬阳县", "镇坪县", "平利县", "石泉县", "宁陕县", "白河县", "汉阴县", "其他"]
  }, {
    "name": "商洛",
    "area": ["商州区", "镇安县", "山阳县", "洛南县", "商南县", "丹凤县", "柞水县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "甘肃",
  "city": [{
    "name": "兰州",
    "area": ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其他"]
  }, {
    "name": "嘉峪关",
    "area": ["嘉峪关市", "其他"]
  }, {
    "name": "金昌",
    "area": ["金川区", "永昌县", "其他"]
  }, {
    "name": "白银",
    "area": ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其他"]
  }, {
    "name": "天水",
    "area": ["清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "北道区", "秦城区", "其他"]
  }, {
    "name": "武威",
    "area": ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "其他"]
  }, {
    "name": "酒泉",
    "area": ["肃州区", "玉门市", "敦煌市", "金塔县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "安西县", "其他"]
  }, {
    "name": "张掖",
    "area": ["甘州区", "民乐县", "临泽县", "高台县", "山丹县", "肃南裕固族自治县", "其他"]
  }, {
    "name": "庆阳",
    "area": ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其他"]
  }, {
    "name": "平凉",
    "area": ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其他"]
  }, {
    "name": "定西",
    "area": ["安定区", "通渭县", "临洮县", "漳县", "岷县", "渭源县", "陇西县", "其他"]
  }, {
    "name": "陇南",
    "area": ["武都区", "成县", "宕昌县", "康县", "文县", "西和县", "礼县", "两当县", "徽县", "其他"]
  }, {
    "name": "临夏回族自治州",
    "area": ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其他"]
  }, {
    "name": "甘南藏族自治州",
    "area": ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "青海",
  "city": [{
    "name": "西宁",
    "area": ["城中区", "城东区", "城西区", "城北区", "湟源县", "湟中县", "大通回族土族自治县", "其他"]
  }, {
    "name": "海东地区",
    "area": ["平安县", "乐都县", "民和回族土族自治县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "其他"]
  }, {
    "name": "海北藏族自治州",
    "area": ["海晏县", "祁连县", "刚察县", "门源回族自治县", "其他"]
  }, {
    "name": "海南藏族自治州",
    "area": ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其他"]
  }, {
    "name": "黄南藏族自治州",
    "area": ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其他"]
  }, {
    "name": "果洛藏族自治州",
    "area": ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其他"]
  }, {
    "name": "玉树藏族自治州",
    "area": ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其他"]
  }, {
    "name": "海西蒙古族藏族自治州",
    "area": ["德令哈市", "格尔木市", "乌兰县", "都兰县", "天峻县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "宁夏",
  "city": [{
    "name": "银川",
    "area": ["兴庆区", "西夏区", "金凤区", "灵武市", "永宁县", "贺兰县", "其他"]
  }, {
    "name": "石嘴山",
    "area": ["大武口区", "惠农区", "平罗县", "其他"]
  }, {
    "name": "吴忠",
    "area": ["利通区", "青铜峡市", "盐池县", "同心县", "其他"]
  }, {
    "name": "固原",
    "area": ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "其他"]
  }, {
    "name": "中卫",
    "area": ["沙坡头区", "中宁县", "海原县", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "新疆",
  "city": [{
    "name": "乌鲁木齐",
    "area": ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "东山区", "乌鲁木齐县", "其他"]
  }, {
    "name": "克拉玛依",
    "area": ["克拉玛依区", "独山子区", "白碱滩区", "乌尔禾区", "其他"]
  }, {
    "name": "吐鲁番地区",
    "area": ["吐鲁番市", "托克逊县", "鄯善县", "其他"]
  }, {
    "name": "哈密地区",
    "area": ["哈密市", "伊吾县", "巴里坤哈萨克自治县", "其他"]
  }, {
    "name": "和田地区",
    "area": ["和田市", "和田县", "洛浦县", "民丰县", "皮山县", "策勒县", "于田县", "墨玉县", "其他"]
  }, {
    "name": "阿克苏地区",
    "area": ["阿克苏市", "温宿县", "沙雅县", "拜城县", "阿瓦提县", "库车县", "柯坪县", "新和县", "乌什县", "其他"]
  }, {
    "name": "喀什地区",
    "area": ["喀什市", "巴楚县", "泽普县", "伽师县", "叶城县", "岳普湖县", "疏勒县", "麦盖提县", "英吉沙县", "莎车县", "疏附县", "塔什库尔干塔吉克自治县", "其他"]
  }, {
    "name": "克孜勒苏柯尔克孜自治州",
    "area": ["阿图什市", "阿合奇县", "乌恰县", "阿克陶县", "其他"]
  }, {
    "name": "巴音郭楞蒙古自治州",
    "area": ["库尔勒市", "和静县", "尉犁县", "和硕县", "且末县", "博湖县", "轮台县", "若羌县", "焉耆回族自治县", "其他"]
  }, {
    "name": "昌吉回族自治州",
    "area": ["昌吉市", "阜康市", "奇台县", "玛纳斯县", "吉木萨尔县", "呼图壁县", "木垒哈萨克自治县", "米泉市", "其他"]
  }, {
    "name": "博尔塔拉蒙古自治州",
    "area": ["博乐市", "精河县", "温泉县", "其他"]
  }, {
    "name": "石河子",
    "area": ["石河子"]
  }, {
    "name": "阿拉尔",
    "area": ["阿拉尔"]
  }, {
    "name": "图木舒克",
    "area": ["图木舒克"]
  }, {
    "name": "五家渠",
    "area": ["五家渠"]
  }, {
    "name": "伊犁哈萨克自治州",
    "area": ["伊宁市", "奎屯市", "伊宁县", "特克斯县", "尼勒克县", "昭苏县", "新源县", "霍城县", "巩留县", "察布查尔锡伯自治县", "塔城地区", "阿勒泰地区", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "台湾",
  "city": [{
    "name": "台湾",
    "area": ["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市", "其他"]
  }, {
    "name": "其他",
    "area": ["其他"]
  }]
}, {
  "name": "澳门",
  "city": [{
    "name": "澳门",
    "area": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼", "其他"]
  }]
}, {
  "name": "香港",
  "city": [{
    "name": "香港",
    "area": ["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区", "其他"]
  }]
}, {
  "name": "钓鱼岛",
  "city": [{
    "name": "钓鱼岛",
    "area": ["钓鱼岛"]
  }]
}]);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__china__ = __webpack_require__(97);


const years = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958', '1957', '1956', '1955', '1954', '1953', '1952', '1951', '1950', '1949', '1948', '1947', '1946', '1945', '1944', '1943', '1942', '1941', '1940', '1939', '1938', '1937', '1936', '1935', '1934', '1933', '1932', '1931', '1930', '1929', '1928', '1927', '1926', '1925', '1924', '1923', '1922', '1921', '1920', '1919', '1918'];

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

/* harmony default export */ __webpack_exports__["a"] = ({
    years,
    months,
    maps: __WEBPACK_IMPORTED_MODULE_0__china__["a" /* default */]
});

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(126)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(127)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(121)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  "data-v-2b9db710",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(123)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-card', {
    staticClass: "infoForm",
    attrs: {
      "body-style": {
        padding: '15px'
      }
    }
  }, [_c('el-form', {
    ref: "followForm",
    attrs: {
      "label-position": "top",
      "model": _vm.followForm,
      "rules": _vm.rules
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "本次随访日期",
      "prop": "thisDate"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.followForm.thisDate),
      callback: function($$v) {
        _vm.followForm.thisDate = $$v
      },
      expression: "followForm.thisDate"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "随访方式",
      "prop": "followType"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "随访方式"
    },
    model: {
      value: (_vm.followForm.followType),
      callback: function($$v) {
        _vm.followForm.followType = $$v
      },
      expression: "followForm.followType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "电话",
      "value": "tel"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "上门",
      "value": "door"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "mod-info",
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h4', [_vm._v("危险因素")])])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "dangerType"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.followForm.dangerType),
      callback: function($$v) {
        _vm.followForm.dangerType = $$v
      },
      expression: "followForm.dangerType"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "label": "正常高值血压",
      "name": "dangerType",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "超重或肥胖",
      "name": "dangerType",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "长期膳食高盐",
      "name": "dangerType",
      "value": "3"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "长期过量饮酒",
      "name": "dangerType",
      "value": "5"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "年龄≥55周岁",
      "name": "dangerType",
      "value": "6"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "其他",
      "size": "small"
    },
    model: {
      value: (_vm.followForm.dangerOther),
      callback: function($$v) {
        _vm.followForm.dangerOther = $$v
      },
      expression: "followForm.dangerOther"
    }
  })], 1), _vm._v(" "), _c('el-row', {
    staticClass: "mod-info",
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h4', [_vm._v("主要体征")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "血压(mmHg)高值",
      "prop": "bloodHigh"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.bloodHigh),
      callback: function($$v) {
        _vm.followForm.bloodHigh = $$v
      },
      expression: "followForm.bloodHigh"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "血压(mmHg)低值",
      "prop": "bloodLow"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.bloodLow),
      callback: function($$v) {
        _vm.followForm.bloodLow = $$v
      },
      expression: "followForm.bloodLow"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "type": "number",
      "label": "体重(kg)",
      "prop": "weight"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.weight),
      callback: function($$v) {
        _vm.followForm.weight = $$v
      },
      expression: "followForm.weight"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "身高(cm)",
      "prop": "height"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.height),
      callback: function($$v) {
        _vm.followForm.height = $$v
      },
      expression: "followForm.height"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "腰围(cm)",
      "prop": "waistline"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.waistline),
      callback: function($$v) {
        _vm.followForm.waistline = $$v
      },
      expression: "followForm.waistline"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "其他",
      "prop": "bodyOther"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.followForm.other),
      callback: function($$v) {
        _vm.followForm.other = $$v
      },
      expression: "followForm.other"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "mod-info",
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h4', [_vm._v("生活方式指导")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "吸烟量(支/天)",
      "prop": "smoke"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.smoke),
      callback: function($$v) {
        _vm.followForm.smoke = $$v
      },
      expression: "followForm.smoke"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "饮酒量(两/天)",
      "prop": "wine"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.wine),
      callback: function($$v) {
        _vm.followForm.wine = $$v
      },
      expression: "followForm.wine"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "摄盐情况(克/天)",
      "prop": "salt"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.salt),
      callback: function($$v) {
        _vm.followForm.salt = $$v
      },
      expression: "followForm.salt"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "食用油摄入(克/天)",
      "prop": "oil"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.oil),
      callback: function($$v) {
        _vm.followForm.oil = $$v
      },
      expression: "followForm.oil"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "运动(次/周)",
      "prop": "sportNum"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.sportNum),
      callback: function($$v) {
        _vm.followForm.sportNum = $$v
      },
      expression: "followForm.sportNum"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "运动(分钟/次)",
      "prop": "sportMinute"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "",
      "type": "number"
    },
    model: {
      value: (_vm.followForm.sportMinute),
      callback: function($$v) {
        _vm.followForm.sportMinute = $$v
      },
      expression: "followForm.sportMinute"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "心理调整",
      "prop": "heartDebug"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.followForm.heartDebug),
      callback: function($$v) {
        _vm.followForm.heartDebug = $$v
      },
      expression: "followForm.heartDebug"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "良好",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "一般",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "差",
      "value": "0"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "mod-info",
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h4', [_vm._v("转归情况")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "是否转归",
      "prop": "isBack"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.followForm.isBack),
      callback: function($$v) {
        _vm.followForm.isBack = $$v
      },
      expression: "followForm.isBack"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "是",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "否",
      "value": "0"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "转归类别",
      "prop": "backType"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.followForm.backType),
      callback: function($$v) {
        _vm.followForm.backType = $$v
      },
      expression: "followForm.backType"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "一般人群",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "糖尿病患者",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "高血压患者",
      "value": "3"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "转归原因",
      "prop": "backReason"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.followForm.backReason),
      callback: function($$v) {
        _vm.followForm.backReason = $$v
      },
      expression: "followForm.backReason"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    staticClass: "mod-info",
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('h4', [_vm._v("随访总结")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 7,
      "prop": "accept"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "接受管理程度"
    },
    model: {
      value: (_vm.followForm.accept),
      callback: function($$v) {
        _vm.followForm.accept = $$v
      },
      expression: "followForm.accept"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.followForm.accept),
      callback: function($$v) {
        _vm.followForm.accept = $$v
      },
      expression: "followForm.accept"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "接受",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "不接受",
      "value": "0"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 9
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "此次随访分类",
      "prop": "ctrlType"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.followForm.ctrlType),
      callback: function($$v) {
        _vm.followForm.ctrlType = $$v
      },
      expression: "followForm.ctrlType"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "控制满意",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "控制不满意",
      "value": "0"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "辅助检查",
      "prop": "assistExam"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": ""
    },
    model: {
      value: (_vm.followForm.assistExam),
      callback: function($$v) {
        _vm.followForm.assistExam = $$v
      },
      expression: "followForm.assistExam"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "下次随访日期",
      "prop": "nextDate"
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.followForm.nextDate),
      callback: function($$v) {
        _vm.followForm.nextDate = $$v
      },
      expression: "followForm.nextDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('followForm')
      }
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.cancelForm()
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loginWrap"
  }, [_c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "icon logo"
  }), _vm._v(" "), _c('el-form', {
    ref: "registerForm",
    staticClass: "login-form",
    attrs: {
      "model": _vm.registerForm,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    staticClass: "form-item",
    attrs: {
      "prop": "mobile"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "tel",
      "placeholder": "手机号码",
      "name": "mobile"
    },
    model: {
      value: (_vm.registerForm.mobile),
      callback: function($$v) {
        _vm.registerForm.mobile = $$v
      },
      expression: "registerForm.mobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item",
    attrs: {
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "姓名",
      "name": "name"
    },
    model: {
      value: (_vm.registerForm.name),
      callback: function($$v) {
        _vm.registerForm.name = $$v
      },
      expression: "registerForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item",
    attrs: {
      "prop": "randCode"
    }
  }, [_c('div', {
    staticClass: "input-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.registerForm.randCode),
      expression: "registerForm.randCode"
    }],
    attrs: {
      "type": "tel",
      "placeholder": "验证码",
      "maxlength": "6"
    },
    domProps: {
      "value": (_vm.registerForm.randCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.registerForm.randCode = $event.target.value
      }
    }
  }), _c('span', {
    staticClass: "input-btn-box"
  }, [_c('el-button', {
    staticClass: "btn btn-send",
    attrs: {
      "type": "button",
      "disabled": _vm.smsBtnDisabled
    },
    on: {
      "click": function($event) {
        _vm.sendSmsClick()
      }
    }
  }, [_vm._v(_vm._s(_vm.smsText))])], 1)])]), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item",
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.registerForm.password),
      callback: function($$v) {
        _vm.registerForm.password = $$v
      },
      expression: "registerForm.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item",
    attrs: {
      "prop": "confimPassword"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "确认密码"
    },
    model: {
      value: (_vm.registerForm.confimPassword),
      callback: function($$v) {
        _vm.registerForm.confimPassword = $$v
      },
      expression: "registerForm.confimPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item"
  }, [_c('el-button', {
    staticClass: "btn-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.register('registerForm')
      }
    }
  }, [_vm._v("注册")])], 1)], 1)], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._v("\n    ©2016-2017 杭州当堂信息技术有限公司 | 版权所有"), _c('br'), _vm._v("浙ICP备15007132号-1\n    ")])
}]}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-box"
  }, [_c('el-card', {
    staticClass: "personal-data",
    attrs: {
      "body-style": {
        padding: '15px'
      }
    }
  }, [_c('dl', [_c('dt', [_c('i', {
    staticClass: "icon icon-user"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(19)
    }
  })])]), _vm._v(" "), _c('dd', [_c('p', [_c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.userInfo.name))]), _c('span', {
    staticClass: "tag tag-high"
  }, [_vm._v("高血压患者")])]), _vm._v(" "), _c('p', {
    staticClass: "info"
  }, [_c('span', [_vm._v("1950年1月1日(67岁)")]), _c('span', [_vm._v("男")])]), _vm._v(" "), _c('p', {
    staticClass: "tags"
  }, [_c('span', [_vm._v("社保卡号：" + _vm._s(_vm.userInfo.name))]), _c('span', [_vm._v("联系电话：" + _vm._s(_vm.userInfo.mobile))])]), _vm._v(" "), _c('p', [_vm._v("居住地址：" + _vm._s(_vm.userInfo.province) + "省 " + _vm._s(_vm.userInfo.city) + "市 " + _vm._s(_vm.userInfo.region + ' ' + _vm.userInfo.address) + " ")])])]), _vm._v(" "), _c('div', {
    staticClass: "doct-button"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.editUserInfo = true
      }
    }
  }, [_vm._v("编辑资料")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.editing = true
      }
    }
  }, [_vm._v("新建随访记录")])], 1)]), _vm._v(" "), (_vm.editing) ? _c('formList', {
    attrs: {
      "id": _vm.userInfo.id
    },
    on: {
      "cancelForm": _vm.closeEditForm,
      "addRecode": _vm.addRecode
    }
  }) : _vm._e(), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "custom-class": "addContact",
      "title": "新建随访人资料",
      "size": "large"
    },
    model: {
      value: (_vm.editUserInfo),
      callback: function($$v) {
        _vm.editUserInfo = $$v
      },
      expression: "editUserInfo"
    }
  }, [_c('dtdialog', {
    attrs: {
      "data": _vm.userInfo
    }
  })], 1), _vm._v(" "), (!_vm.editing) ? _c('el-card', {
    attrs: {
      "body-style": {
        padding: '15px'
      }
    }
  }, [_c('h2', [_vm._v("高血压高危人群随访服务记录")]), _vm._v(" "), _c('div', {
    staticClass: "mod-info"
  }, [_c('h4', [_vm._v("危险因素")]), _vm._v(" "), _c('table', [_c('tr', _vm._l((_vm.userInfo.context.dangerType), function(danger) {
    return _c('td', {
      attrs: {
        "width": "20%"
      }
    }, [_vm._v(_vm._s(danger))])
  })), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("其他" + _vm._s('  ' + (_vm.userInfo.context.dangerOther || '--')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "mod-info"
  }, [_c('h4', [_vm._v("主要体征")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("血压(mmHg)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.bloodHigh + '/' + _vm.userInfo.context.bloodLow))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("体重(kg)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.weight))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("身高(cm)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.height))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("体质指数(kg/m2)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.bmi))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("腰围(cm)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.waistline))])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("其他")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mod-info"
  }, [_c('h4', [_vm._v("生活方式指导")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("吸烟量(支/天)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.smoke))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("饮酒量(两/天)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.wine))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("摄盐情况(克/天)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.salt))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("食用油摄入(克/天)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.oil))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("运动(次/周)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.sportNum))])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("运动(分钟/次)")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.waistline))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("心理调整")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.waistline))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "mod-info"
  }, [_c('h4', [_vm._v("转归情况")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("是否转归")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.isBack))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("转归类别")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.backType))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('p', [_vm._v("转归原因")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.backReason))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mod-info"
  }, [_c('h4', [_vm._v("随访总结")]), _vm._v(" "), _c('table', [_c('tr', [_c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("接受管理程度")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.accept))])]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "20%"
    }
  }, [_c('p', [_vm._v("此次随访分类")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.ctrlType))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('p', [_vm._v("辅助检查")]), _c('p', [_vm._v(_vm._s(_vm.userInfo.context.waistline))])])]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "5"
    }
  }, [_c('p', [_vm._v("下次随访日期")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm._f("timeFilter")(_vm.userInfo.context.nextDate)))])])])])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "other-list"
  }, [_c('h2', [_vm._v("随访人列表")]), _vm._v(" "), _c('div', {
    staticClass: "list-box"
  }, _vm._l((_vm.patients), function(patient, index) {
    return _c('el-card', {
      staticClass: "personal-data ",
      class: {
        'personal-data-selected': _vm.userInfo.id == patient.id
      },
      attrs: {
        "body-style": {
          padding: '10px'
        }
      }
    }, [_c('dl', {
      on: {
        "click": function($event) {
          _vm.patientClick(patient)
        }
      }
    }, [_c('dt', [_c('i', {
      staticClass: "icon icon-user"
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(19)
      }
    })])]), _vm._v(" "), _c('dd', [_c('p', [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(patient.name))])]), _vm._v(" "), _c('p', {
      staticClass: "info"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("sexFilter")(patient.sex)))]), _c('span', [_vm._v("67岁")])]), _vm._v(" "), _c('p', [_c('span', {
      staticClass: "tag tag-high"
    }, [_vm._v("高血压患者")])])])])])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "patient"
  }, [_c('el-row', {
    staticClass: "title"
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "grid-content"
  }, [_c('h2', [_vm._v("高危疾病监控")]), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.modifyPatient({})
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-plus"
  }), _vm._v(" 新建随访人")])], 1)])], 1), _vm._v(" "), _c('el-row', {
    staticClass: "list"
  }, _vm._l((_vm.patients), function(patient, index) {
    return _c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_c('el-card', {
      staticClass: "info-box",
      attrs: {
        "body-style": {
          padding: '10px'
        }
      }
    }, [_c('div', {
      staticClass: "personal-data",
      on: {
        "click": function($event) {
          _vm.patientClick(patient)
        }
      }
    }, [_c('dl', [_c('dt', [_c('i', {
      staticClass: "icon icon-user"
    }, [_c('img', {
      attrs: {
        "src": __webpack_require__(19)
      }
    })])]), _vm._v(" "), _c('dd', [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(patient.name || '匿名'))]), _vm._v(" "), _c('p', {
      staticClass: "info"
    }, [_c('span', {
      staticClass: "sex"
    }, [_vm._v(_vm._s(_vm._f("sexFilter")(patient.sex)))]), _c('span', {
      staticClass: "age"
    }, [_vm._v(_vm._s(_vm._f("ageFilter")(patient.cardNo)) + "岁")])]), _vm._v(" "), _c('p', {
      staticClass: "tags"
    }, [_c('span', {
      staticClass: "tag tag-high"
    }, [_vm._v("高血压患者")])])])]), _vm._v(" "), _c('el-dropdown', {
      staticClass: "doct-dropdown",
      attrs: {
        "trigger": "hover"
      },
      on: {
        "command": _vm.handleCommand
      }
    }, [_c('el-button', {
      attrs: {
        "size": "small",
        "type": "text"
      }
    }, [_c('i', {
      staticClass: "el-icon-more"
    })]), _vm._v(" "), _c('el-dropdown-menu', {
      slot: "dropdown"
    }, [_c('el-dropdown-item', {
      attrs: {
        "command": 'add' + index
      }
    }, [_vm._v("新增随访服务记录")]), _vm._v(" "), _c('el-dropdown-item', {
      attrs: {
        "divided": "",
        "command": 'edit' + index
      }
    }, [_vm._v("修改随访人资料")])], 1)], 1)], 1), _vm._v(" "), _c('table', {
      staticClass: "visit"
    }, [_c('tr', [_c('td', {
      attrs: {
        "colspan": "2"
      }
    }, [_vm._v("最近一次随访：" + _vm._s(_vm._f("timeFilter")(patient.lastfollowuptime)) + "   ")])]), _vm._v(" "), _c('tr', [_c('td', {
      staticClass: "key-red",
      attrs: {
        "width": "80",
        "align": "center"
      }
    }, [_vm._v(_vm._s(_vm._f("bloodFilter")((patient.context.bloodHigh + '/' + patient.context.bloodLow))))]), _c('td', [_vm._v("血压 " + _vm._s(patient.context.bloodHigh + '/' + patient.context.bloodLow) + "  mmHg")])])])])], 1)
  })), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "custom-class": "addContact",
      "title": "新建随访人资料",
      "size": "large"
    },
    model: {
      value: (_vm.dialogFormVisible),
      callback: function($$v) {
        _vm.dialogFormVisible = $$v
      },
      expression: "dialogFormVisible"
    }
  }, [_c('dtdialog', {
    attrs: {
      "data": _vm.editPatient
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loginWrap"
  }, [_c('div', {
    staticClass: "login"
  }, [_c('i', {
    staticClass: "icon logo"
  }), _vm._v(" "), _c('el-form', {
    staticClass: "login-form"
  }, [_c('el-form-item', {
    staticClass: "form-item"
  }, [_c('el-input', {
    attrs: {
      "type": "tel",
      "placeholder": "手机号码",
      "name": "mobile"
    },
    on: {
      "change": function($event) {
        _vm.mobileChange(_vm.mobile)
      }
    },
    model: {
      value: (_vm.mobile),
      callback: function($$v) {
        _vm.mobile = $$v
      },
      expression: "mobile"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item"
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.code),
      callback: function($$v) {
        _vm.code = $$v
      },
      expression: "code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-item"
  }, [_c('el-button', {
    staticClass: "btn-block",
    attrs: {
      "type": "primary",
      "size": "large"
    },
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_vm._v("登录")])], 1)], 1)], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._v("\n    ©2016-2017 杭州阿里巴巴技术有限公司 | 版权所有"), _c('br'), _vm._v("浙ICP备15007132号-1\n    ")])
}]}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('el-form', {
    ref: "addForm",
    attrs: {
      "label-position": "top",
      "model": _vm.addForm,
      "rules": _vm.rules
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "姓名",
      "prop": "pname"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.addForm.pname),
      callback: function($$v) {
        _vm.addForm.pname = $$v
      },
      expression: "addForm.pname"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "性别",
      "prop": "psex"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.addForm.psex),
      callback: function($$v) {
        _vm.addForm.psex = $$v
      },
      expression: "addForm.psex"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "男",
      "value": "0"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "女",
      "value": "1"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 7
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "联系电话",
      "prop": "pmobile"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "手机号"
    },
    model: {
      value: (_vm.addForm.pmobile),
      callback: function($$v) {
        _vm.addForm.pmobile = $$v
      },
      expression: "addForm.pmobile"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 7
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "随访类型",
      "prop": "casetype"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.addForm.casetype),
      callback: function($$v) {
        _vm.addForm.casetype = $$v
      },
      expression: "addForm.casetype"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "高血压患者",
      "value": "htn"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 7
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "出生年",
      "prop": "brithYear"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "年"
    },
    model: {
      value: (_vm.addForm.brithYear),
      callback: function($$v) {
        _vm.addForm.brithYear = $$v
      },
      expression: "addForm.brithYear"
    }
  }, _vm._l((_vm.constData.years), function(year) {
    return _c('el-option', {
      attrs: {
        "label": year,
        "value": year
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "月",
      "prop": "brithMonth"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "月"
    },
    model: {
      value: (_vm.addForm.brithMonth),
      callback: function($$v) {
        _vm.addForm.brithMonth = $$v
      },
      expression: "addForm.brithMonth"
    }
  }, _vm._l((_vm.constData.months), function(month) {
    return _c('el-option', {
      attrs: {
        "label": month,
        "value": month
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 14
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "卡号",
      "prop": "cardNo"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "卡号"
    },
    model: {
      value: (_vm.addForm.cardNo),
      callback: function($$v) {
        _vm.addForm.cardNo = $$v
      },
      expression: "addForm.cardNo"
    }
  }, [_c('el-select', {
    staticClass: "card-select",
    attrs: {
      "placeholder": "请选择类型"
    },
    slot: "prepend",
    model: {
      value: (_vm.addForm.cardType),
      callback: function($$v) {
        _vm.addForm.cardType = $$v
      },
      expression: "addForm.cardType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "身份证",
      "value": "idCard"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "医疗卡号",
      "value": "'medicalId'"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "gutter": 15
    }
  }, [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "居住地址/省份",
      "prop": "proviceIndex"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "省份"
    },
    model: {
      value: (_vm.addForm.proviceIndex),
      callback: function($$v) {
        _vm.addForm.proviceIndex = $$v
      },
      expression: "addForm.proviceIndex"
    }
  }, _vm._l((_vm.constData.maps), function(provice, index) {
    return _c('el-option', {
      attrs: {
        "label": provice.name,
        "value": index
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "城市",
      "prop": "cityIndex"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "城市"
    },
    model: {
      value: (_vm.addForm.cityIndex),
      callback: function($$v) {
        _vm.addForm.cityIndex = $$v
      },
      expression: "addForm.cityIndex"
    }
  }, _vm._l((_vm.constData.maps[_vm.addForm.proviceIndex].city), function(city, index) {
    return _c('el-option', {
      attrs: {
        "label": city.name,
        "value": index
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "区域",
      "prop": "regionIndex"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "区域"
    },
    model: {
      value: (_vm.addForm.regionIndex),
      callback: function($$v) {
        _vm.addForm.regionIndex = $$v
      },
      expression: "addForm.regionIndex"
    }
  }, _vm._l((((_vm.constData.maps[_vm.addForm.proviceIndex].city)[_vm.addForm.cityIndex].area)), function(region, index) {
    return _c('el-option', {
      attrs: {
        "label": region,
        "value": index
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "\b详细地址"
    },
    model: {
      value: (_vm.addForm.address),
      callback: function($$v) {
        _vm.addForm.address = $$v
      },
      expression: "addForm.address"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('addForm')
      }
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.resetForm('addForm')
      }
    }
  }, [_vm._v("重置")])], 1)])
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "header"
  }, [_c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/users/list'
      }
    }
  }, [_vm._v("档案")]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": {
        name: 'detail'
      }
    }
  }, [_vm._v("详情")])], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('el-input', {
    staticClass: "doct-search",
    attrs: {
      "placeholder": "搜索",
      "icon": "search"
    }
  })], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('div', {
    staticClass: "login"
  }, [_vm._v("您好"), _c('span', {
    staticClass: "userName"
  }, [_vm._v(_vm._s(_vm.name))]), _c('el-button', {
    attrs: {
      "type": "text"
    },
    on: {
      "click": function($event) {
        _vm.exit()
      }
    }
  }, [_vm._v("退出")])], 1)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doctor"
  }, [_c('el-menu', {
    staticClass: "doctor-menu",
    attrs: {
      "default-active": "/users/list",
      "router": true,
      "theme": "dark"
    }
  }, [_c('el-menu-item', {
    staticClass: "profile",
    attrs: {
      "index": ""
    }
  }, [_c('i', {
    staticClass: "icon logo"
  }), _vm._v(" "), _c('span', [_vm._v("社区医生")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "/users/list"
    }
  }, [_c('i', {
    staticClass: "fa fa-users"
  }), _vm._v("档案")])], 1), _vm._v(" "), _c('div', {
    staticClass: "docter-main"
  }, [_c('dtHeader', {
    attrs: {
      "name": _vm.name
    }
  }), _vm._v(" "), _c('router-view', {
    staticClass: "main-wrap"
  })], 1), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_vm._v("\n    ©2016-2017 杭州当堂信息技术有限公司 | 版权所有"), _c('br'), _vm._v("浙ICP备15007132号-1\n    ")])
}]}

/***/ })
],[96]);
//# sourceMappingURL=app.1df7d50ab2d34ff38168.js.map