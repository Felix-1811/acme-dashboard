import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/settings', component: Settings },
  ]
})

export default router