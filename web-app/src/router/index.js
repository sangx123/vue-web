import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import FindPassword from '@/components/FindPassword'
import Index from "@/components/Index"
import CreateTask from  "@/components/CreateTask"
import ReceivedTask from  "@/components/ReceivedTask"
import Personal from  "@/components/Personal"
import Home from "@/components/Home";
import MyTask from "@/components/MyTask";
import Recharge from "@/components/Recharge";
import TaskFinished from "@/components/TaskFinished";
import TaskNotFinished from "@/components/TaskNotFinished";
import HowToUseAlipay from "@/components/HowToUseAlipay";
import ChargeMoney from "@/components/ChargeMoney";
import UserOverView from "../components/UserOverView";
import UserTixian from "../components/UserTixian";
import MoneyHistory from "../components/MoneyHistory";
import TaoBaoTaskHall from "../components/TaoBaoTaskHall";
import TaoBaoTaskHallIndex from "../components/TaoBaoTaskHallIndex";
import CreateTaobaoTask from "../components/CreateTaobaoTask";
import MyCreatedTaobaoTask from "../components/MyCreatedTaobaoTask";
import MyTaobaoTask from "../components/MyTaobaoTask";
Vue.use(Router)
//参考文章：https://www.cnblogs.com/goloving/p/9147975.html
let router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,children:[
        //淘宝大厅
        {
          path: '/home',
          name: 'home',
          component: Home,
          children:[
          {
            path: '/TaobaoTaskHall',
            name: 'TaobaoTaskHall',
            component: TaoBaoTaskHall,
            children:[ {
              path: '/TaoBaoTaskHallIndex',
              name: 'TaoBaoTaskHallIndex',
              component: TaoBaoTaskHallIndex
            },{
              path: '/CreateTaobaoTask',
              name: 'CreateTaobaoTask',
              component: CreateTaobaoTask
            },{
              path: '/MyCreatedTaobaoTask',
              name: 'MyCreatedTaobaoTask',
              component: MyCreatedTaobaoTask
            },{
              path: '/MyTaobaoTask',
              name: 'MyTaobaoTask',
              component: MyTaobaoTask
            }
            ],redirect:"/TaoBaoTaskHallIndex"
          }
           ,
          {
            path: '/taskFinished',
            name: 'taskFinished',
            component: TaskFinished
          },
            {
              path: '/taskNotFinished',
              name: 'taskNotFinished',
              component: TaskNotFinished
            },
            {
              path: '/create-task',
              name: 'create-task',
              component: CreateTask
            }],
          redirect:"/TaoBaoTaskHall"
        }
        ,
        {
          path: '/receive-task',
          name: 'receive-task',
          component: ReceivedTask
        }
        ,
        //个人中心
        {
          path: '/persion-center',
          name: 'persion-center',
          component: Personal,children: [
            {
              path: '/userOverView',
              name: 'userOverView',
              component: UserOverView
            },
            {
              path: '/userTixian',
              name: 'userTixian',
              component: UserTixian
            }
            ,
            {
              path: '/charge-money',
              name: 'charge-money',
              component: ChargeMoney
            } ,
            {
              path: '/MoneyHistory',
              name: 'MoneyHistory',
              component: MoneyHistory
            }
          ],redirect:'/userOverView'
        },

        {
          path: '/Recharge',
          name: 'recharge',
          component: Recharge
        }
      ],redirect:'/home'
    },
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
    }, {
      path: '/how-to-use-alipay',
      name: 'how-to-use-alipay',
      component: HowToUseAlipay
    }

  ]
})

//全局守卫
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')||to.path.startsWith('/register')||to.path.startsWith('/find-password')) {
    next()
  } else if (to.path.startsWith('/index')) {
    next()
  } else {
    //let user = JSON.parse(window.localStorage.getItem('access-token'))
    let user = window.localStorage.getItem('access-token');
    if (!user) {
      if(to.path==="/login"){
        next()
      }else{
        next({
          path:"/login",
          query: {redirect: to.fullPath}//将目的路由地址存入login的query中
        })
      }
    } else {
      if(Object.keys(from.query).length === 0){//判断路由来源是否有query，处理不是目的跳转的情况
        next()
      }else{
        let redirect = from.query.redirect//如果来源路由有query
        if(to.path === redirect){//这行是解决next无限循环的问题
          next()
        }else{
          next({path:redirect})//跳转到目的路由
        }
      }
    }
  }
})

export default router
