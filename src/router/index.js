//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/loginTest',
        name: 'loginTest',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/LoginTest.vue')
    },
    {
        path: '/registerTest',
        name: 'registerTest',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/RegisterTest.vue')
    },
    {
        path: '/dashboardTest',
        name: 'dashboardTest',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexTest.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router