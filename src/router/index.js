import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PhotographyPage from '../views/PhotographyPage.vue'
import VideoEditingPage from '../views/VideoEditingPage.vue'
import SoundMusicPage from '../views/SoundMusicPage.vue'
import ContactPage from '../views/ContactPage.vue'

// For username.github.io, use '/' as the base URL even in production
const baseUrl = '/'

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/photography',
      name: 'photography',
      component: PhotographyPage
    },
    {
      path: '/video-editing',
      name: 'video-editing',
      component: VideoEditingPage
    },
    {
      path: '/sound-music',
      name: 'sound-music',
      component: SoundMusicPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    // Catch-all route for 404 errors
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router