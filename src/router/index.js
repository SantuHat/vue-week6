import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
