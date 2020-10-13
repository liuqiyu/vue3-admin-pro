import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from './../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('./../views/dashboard/index.vue'),
        meta: {
          icon: 'icon-shouye2',
          activeMenu: '/dashboard',
          title: '首页',
          affix: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
