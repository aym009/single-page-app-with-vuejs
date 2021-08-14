import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:searchQuery',
    name: 'SearchResults',
    component: SearchResults,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
