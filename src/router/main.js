import Vue from 'vue'
import VueRouter from "vue-router"
import Index from '@/views/pages/Index'
import Main from "@/views/layouts/Main"
import ProjectManagement from "@/views/pages/ProjectManagement"

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
                    path: '/project-management',
                    name: 'projectManagement',
                    component: ProjectManagement,
                }
            ]
        }
    ]
})


export default router
