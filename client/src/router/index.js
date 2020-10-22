import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher.vue')
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import(/* webpackChunkName: "student" */ '../views/Student.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router