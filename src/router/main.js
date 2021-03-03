import Vue from 'vue'
import VueRouter from "vue-router"
import Index from '@/views/pages/Index'
import Main from "@/views/layouts/Main"
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement"
import DashboardECommerce from "@/views/pages/DashboardECommerce"

Vue.use(VueRouter)

let router = new VueRouter({
    mode: "history",
    routes: [
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
    ],
    /*linkActiveClass: "active",*/
    linkExactActiveClass: "active",
})


export default router
