import {createRouter, createWebHistory} from 'vue-router'

import dashboardRoutes from "@/router/dashboard";
import pagesRoutes     from "@/router/pages";
import authRoutes      from "@/router/auth";
import docsRoutes      from "@/router/docs";
import otherRoutes     from "@/router/other";


const routes = [
    dashboardRoutes,
    pagesRoutes,
    authRoutes,
    docsRoutes,
    ...otherRoutes,
]

const router = createRouter({
    history             : createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass     : 'active'
})

export default router
