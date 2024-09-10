import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    // 项目打开后进入的默认地址
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/home',
        component: () => import('../views/home/home.vue')
    }
]
const router = createRouter({
    // history: createWebHistory(), // 本项目采用了history模式
    history: createWebHashHistory(), // 本项目采用了哈希模式
    routes
})
export default router
