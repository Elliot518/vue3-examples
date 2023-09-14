import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// const User = {
//   props: ['id'],
//   template: '<div>User {{ id }}</div>'
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    // props: true
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed',
    component: () => import('../views/MessageFeed.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((
  to, // The destination route
  from, //The source route
  next //The function to trigger to resolve the hook
 ) => {
  if (to.name === 'about' && (!to.query?.user)) {
  next({ name: 'error' })
  }
  else {
  next();
  }
 })

export default router
