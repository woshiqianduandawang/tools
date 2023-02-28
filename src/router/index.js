import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/home')
  },
  {
    path: '/video_women',
    name: 'Video-women',
    component: () => import('../views/Video_women/Video_women')
  },
  {
    path: '/video_man',
    name: 'TiktokVideo',
    component: () => import('../views/Video_man/Video_man')
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../views/calendar/calendar')
  }
]

const router = createRouter({
  history: createWebHistory(),  //hash
  // history: createWebHistory(),  //history
  routes
})

export default router