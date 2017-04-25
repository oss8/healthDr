import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/pages/login'
import register from '@/pages/register'
import list from '@/pages/users/list'
import detail from '@/pages/users/detail'
import main from '@/pages/main'

Vue.use(Router)

 var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'users',
      component: main,
      children:[
        {
          path: '/list/login',
          component: Login
        },
        {
          path: '/users/list',
          component: list
        },
        {
          path: '/users/detail',
          component: detail
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