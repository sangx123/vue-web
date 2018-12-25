import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import FindPassword from '@/components/FindPassword'
import Index from "@/components/Index"
import CreateTask from  "@/components/CreateTask"
import ReceivedTask from  "@/components/ReceivedTask"
import Personal from  "@/components/Personal"
Vue.use(Router)

let router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },,
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/find-password',
      name: 'find-password',
      component: FindPassword
    },{
      path: '/create-task',
      name: 'create-task',
      component: CreateTask
    }
    ,{
      path: '/receive-task',
      name: 'create-task',
      component: ReceivedTask
    }
    ,{
      path: '/persion-center',
      name: 'create-task',
      component: Personal
    }
  ]
})

//全局守卫
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')||to.path.startsWith('/register')||to.path.startsWith('/find-password')) {
    next()
    console.log("4")
  } else if (to.path.startsWith('/index')) {
    console.log("3")
    next()
  } else {
    //let user = JSON.parse(window.localStorage.getItem('access-token'))
    let user = window.localStorage.getItem('access-token');
    if (!user) {
      console.log("1")
      next({path: '/login'})
    } else {
      console.log("2")
      next()
    }
  }
})

export default router
