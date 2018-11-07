import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Content from '@/pages/content'
Vue.use(Router)
Vue.use(Index)
Vue.use(Content)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path:'/content/:id',
      name:'content',
      component: Content
    }
  ]
})
