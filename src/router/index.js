import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Activity from '@/components/activity/activity'
import Follow from '@/components/follow/follow'
import Nearby from '@/components/nearby/nearby'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/follow',
      component: Follow
    },
    {
      path: '/nearby',
      component: Nearby
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
