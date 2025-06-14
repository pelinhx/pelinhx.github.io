import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/photography',
    name: 'photography',
    component: () => import('../views/PhotographyPage.vue')
  },
  {
    path: '/video-editing',
    name: 'video-editing',
    component: () => import('../views/VideoEditingPage.vue')
  },
  {
    path: '/sound-music',
    name: 'sound-music',
    component: () => import('../views/SoundMusicPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router