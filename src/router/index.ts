import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/dashboard',
      component: ()=>import('../layouts/Layout.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../views/Dashboard/DashboardView.vue')
        },
        {
          path: 'todolist',
          component: () => import('../views/ToDoList/TodolistView.vue')
        },
        {
          path: 'history',
          component: ()=>import('../views/History/HistoryView.vue')
        },
        
      ]
    }
  ]
})

export default router