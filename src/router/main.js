import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/pages/Index'
import Main from "@/views/layouts/Main"
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement"
import DashboardECommerce from "@/views/pages/DashboardECommerce"

const routes = [
    {
        path: '/',
        name: 'mainLayout',
        component: Main,
        children: [
            {
                path: '/',
                name: 'home',
                component: Index,
            },
            {
                path: '/dashboard-project-management',
                name: 'dashboardProjectManagement',
                component: DashboardProjectManagement,
            },
            {
                path: '/dashboard-ecommerce',
                name: 'dashboardECommerce',
                component: DashboardECommerce,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
