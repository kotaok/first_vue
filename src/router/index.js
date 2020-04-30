import Vue from 'vue'
import Router from 'vue-router'
import top from '../components/page1'
import about from '../components/page2'
import works from '../components/page3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/works',
      component: works
    }
  ]
})