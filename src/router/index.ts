import { createRouter, createWebHistory } from 'vue-router'
import DiffTool from "../components/DiffTool.vue"
import GPTCost from "../components/GPTCOst.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiffTool
    },
    {
      path: '/diff/:id?',
      name: 'Diff',
      component: DiffTool
    },
    {
      path: '/cost',
      name: 'GPTCost',
      component: GPTCost
    }
  ]
})

export default router
