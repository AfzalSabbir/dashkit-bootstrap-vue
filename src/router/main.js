import {createRouter, createWebHistory} from 'vue-router'

import LayoutMain from "@/views/layouts/Main"


import DashboardIndex from "@/views/pages/Index"
import DashboardECommerce from "@/views/pages/DashboardECommerce"
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement"

import pagesRoutes from "./pages/index"

import e404 from "@/views/pages/error/e404"

const routes = [
    {
        path: '/',
        name: 'home',
        component: LayoutMain,
        children: [
            {
                path: '/',
                redirect: '/dashboard'
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'mainLayout',
        component: LayoutMain,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: DashboardIndex,
            },
            {
                path: 'project-management',
                name: 'dashboardProjectManagement',
                component: DashboardProjectManagement,
            },
            {
                path: 'ecommerce',
                name: 'dashboardECommerce',
                component: DashboardECommerce,
            },
        ]
    },
    {
        path: '/404',
        component: LayoutMain,
        children: [
            {
                path: '/',
                name: '404',
                component: e404,
            }
        ]
    },
    {path: '/:catchAll(.*)', redirect: '/404'},

    ...pagesRoutes
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
})

export default router
