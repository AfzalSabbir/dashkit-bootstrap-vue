import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/pages/Index'
import Main from "@/views/layouts/Main"
import DashboardProjectManagement from "@/views/pages/DashboardProjectManagement"
import DashboardECommerce from "@/views/pages/DashboardECommerce"
import Post from "@/views/pages/pages/profile/Posts"
import e404 from "@/views/pages/error/e404"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main,
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
        component: Main,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: Index,
            },
            {
                path: '/dashboard/dashboard-project-management',
                name: 'dashboardProjectManagement',
                component: DashboardProjectManagement,
            },
            {
                path: '/dashboard/dashboard-ecommerce',
                name: 'dashboardECommerce',
                component: DashboardECommerce,
            },
        ]
    },
    {
        path: '/pages',
        name: 'pages',
        component: Main,
        children: [
            {
                path: 'profile/posts',
                name: 'pagesProfilePosts',
                component: Post,
            },
            {
                path: 'profile/groups',
                name: 'pagesProfileGroups',
                component: Post,
            },
            {
                path: 'profile/projects',
                name: 'pagesProfileProjects',
                component: Post,
            },
            {
                path: 'profile/files',
                name: 'pagesProfileFiles',
                component: Post,
            },
            {
                path: 'profile/subscribers',
                name: 'pagesProfileSubscribers',
                component: Post,
            },

            {
                path: 'project/overview',
                name: 'pagesProjectOverview',
                component: Post,
            },
            {
                path: 'project/files',
                name: 'pagesProjectFiles',
                component: Post,
            },
            {
                path: 'project/reports',
                name: 'pagesProjectReports',
                component: Post,
            },
            {
                path: 'project/new',
                name: 'pagesProjectNewProject',
                component: Post,
            },

            {
                path: 'team/overview',
                name: 'pagesTeamOverview',
                component: Post,
            },
            {
                path: 'team/files',
                name: 'pagesTeamProjects',
                component: Post,
            },
            {
                path: 'team/reports',
                name: 'pagesTeamMembers',
                component: Post,
            },
            {
                path: 'team/new',
                name: 'pagesTeamNewTeam',
                component: Post,
            },
            {
                path: 'feed',
                name: 'pagesFeed',
                component: Post,
            },
            {
                path: 'feed/social',
                name: 'pagesFeedSocial',
                component: Post,
            },
            {
                path: 'account/general',
                name: 'pagesAccountGeneral',
                component: Post,
            },
            {
                path: 'account/billing',
                name: 'pagesAccountBilling',
                component: Post,
            },
            {
                path: 'account/members',
                name: 'pagesAccountMembers',
                component: Post,
            },
            {
                path: 'account/security',
                name: 'pagesAccountSecurity',
                component: Post,
            },
            {
                path: 'account/notifications',
                name: 'pagesAccountNotifications',
                component: Post,
            },
            {
                path: 'crm/contacts',
                name: 'pagesCRMContacts',
                component: Post,
            },
            {
                path: 'crm/companies',
                name: 'pagesCRMCompanies',
                component: Post,
            },
            {
                path: 'crm/deals',
                name: 'pagesCRMDeals',
                component: Post,
            },
            {
                path: 'wizard',
                name: 'pagesWizard',
                component: Post,
            },
            {
                path: 'kanban',
                name: 'pagesKanban',
                component: Post,
            },
            {
                path: 'orders',
                name: 'pagesOrders',
                component: Post,
            },
            {
                path: 'invoice',
                name: 'pagesInvoice',
                component: Post,
            },
            {
                path: 'pricing',
                name: 'pagesPricing',
                component: Post,
            },
            {
                path: 'widgets',
                name: 'pagesWidgets',
                component: Post,
            },
        ]
    },
    {
        path: '/404',
        component: Main,
        children: [
            {
                path: '/',
                name: '404',
                component: e404,
            }
        ]
    },
    {path: '/:catchAll(.*)', redirect: '/404'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: 'active',
    linkActiveClass: 'active'
})

export default router
