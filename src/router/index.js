import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import logon from '@/components/logon'
import blog from '@/components/blog'
import creat from '@/components/creat'
import comment from '@/components/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    path:'/login',
      name:'login',
      component:login
    },{
      path:'/logon',
      name:'logon',
      component:logon
    },{
      path:'/blog',
      name:'blog',
      component:blog
    },{
      path:'/creat',
      name:'creat',
      component:creat
    },{
      path:'/comment',
      name:'comment',
      component:comment
    }
  ]
})
