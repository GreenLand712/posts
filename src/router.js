import Vue from 'vue'
import Router from 'vue-router'
import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueDemo
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    }
  ]
})
