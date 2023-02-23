import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/home')
  },
  {
    path: '/tiktok_video',
    name: 'TiktokVideo',
    component: () => import('../views/TiktokVideo/TiktokVideo')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/calendar/calendar')
  }
]

const router = createRouter({
  mode:'hash',
  history: createWebHashHistory(),  //hash
  // history: createWebHistory(),  //history
  routes
})

export default router