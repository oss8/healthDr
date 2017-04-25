import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import register from '@/components/register'
import list from '@/components/list'
Vue.use(Router)

 var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list,
      children:[
        {
          path: '/list/login',
          component: Login
        }
      ]
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '*',
      name: 'other',
      component: Login
    }
  ]
})

router.beforeEach(({ meta, path }, from, next) => {
  // const { auth = true } = meta
  // const isLogin = Boolean(localStorage.getItem("eshine_channel")) // true用户已登录， false用户未登录
  // if (auth && !isLogin && path !== '/login') {
  //   let to = { path: '/login' }
  //   return next(to)
  // }
  next()
})

export default router