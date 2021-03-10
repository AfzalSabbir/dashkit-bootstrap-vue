import {createRouter, createWebHistory} from 'vue-router'

import dashboardRoutes from "@/router/dashboard";
import pagesRoutes from "./pages/index"
import authRoutes from "@/router/auth";
import docsRoutes from "@/router/docs";
import otherRoutes from "@/router/other";

import e404 from "@/views/pages/error/e404"


const routes = [
    dashboardRoutes,
    pagesRoutes,
    authRoutes,
    docsRoutes,
    ...otherRoutes,
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
})

export default router
